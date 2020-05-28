import Https from '../utils/https';

import { Openid_SessionKeyType, CustomUserInfo } from '../utils/typing';


interface GetUserInfoResult {
    avatarUrl?: string;
    city?: string;
    country?: string;
    gender?: 0 | 1 | 2;
    language?: 'en' | 'zh_CN' | 'zh_TW';
    nickName?: string;
    province?: string;
}

class User {

    /**
     * 登陆： wx.checkSession检查是否过期 ？ wx.login + 加入缓存 : 从缓存提取openid + session_key
     * 返回openid_sessionKey
     */
    static login() {
        return new Promise<Openid_SessionKeyType>((resolve, reject) => {
            wx.checkSession({
                success: (res) => {
                    // 多次打开小程序
                    console.log('wx.checkSession成功', res);
                    if (res.errMsg === 'checkSession:ok') {
                        // 已登陆过
                        const OPENID_SESSIONKEY = User.getOpenidSessionKeyStorage();
                        if (OPENID_SESSIONKEY.openid && OPENID_SESSIONKEY.session_key) {
                            // 有缓存直接返回
                            resolve(OPENID_SESSIONKEY);
                        } else {
                            // 无缓存，重新login再返回
                            User.codeToSession().then(OPENID_SESSIONKEY => {
                                resolve(OPENID_SESSIONKEY);
                            })
                        }
                    }
                },
                fail: (err) => {
                    // 第一次打开小程序
                    console.log('wx.checkSession() fail，有可能是第一次进入小程序，即将发起登陆逻辑', err);
                    User.codeToSession().then(OPENID_SESSIONKEY => {
                        resolve(OPENID_SESSIONKEY);
                    })
                }
            })
        })
    }

    /**
     * 获取openid sessionkey
     */
    static codeToSession() {
        return new Promise<Response.LoginData>((resolve, reject) => {
            wx.login({
                success: (res) => {
                    const options = {
                        url: '/wxma_auth/code_to_session',
                        method: 'GET' as "GET", // ts类型推断不出来
                        data: {
                            code: res.code
                        }
                    };
                    Https.request<Request.CodeToSessionReq, Response.CodeToSessionRes>(options).then(res => {
                        const openid_sessionKey = res.data;
                        console.log('login接口获取的openid_sessionKey', openid_sessionKey);
                        User.setOpenidSessionKeyStorage(openid_sessionKey);
                        resolve(openid_sessionKey);
                    }).catch(err => {
                        console.log('code_to_session_key fail', err);
                        wx.showToast({
                            title: '请检查网络情况',
                            icon: 'none'
                        });
                    })
                },
                fail: (err) => {
                    console.error('wx.login() fail', err);
                    wx.showToast({
                        title: '请检查网络情况',
                        icon: 'none'
                    });
                }
            })
        })
    }


    /**
     * 获取授权信息
     */
    static getAuthorize() {
        return new Promise<CustomUserInfo>((resolve, reject) => {
            wx.getSetting({
                success: (res) => {
                    if (res.authSetting['scope.userInfo']) {
                        // 已授权处理如下
                        const userInfoStorage = User.getUserInfoStorage();
                        if (userInfoStorage.nickName) {
                            // 已授权，且有缓存
                            const userInfo = userInfoStorage;
                            console.log('已授权 + 有userInfo缓存', userInfo);
                            resolve(userInfo);
                        } else {
                            // 已经授权，但无缓存 // 对应微信缓存情况
                            wx.getUserInfo({
                                success: (res) => {
                                    User.setUserInfoStorage(res.userInfo);
                                    resolve(res.userInfo);
                                },
                                fail: (err) => {
                                    // 已授权 + 无userInfo缓存，获取userInfo失败
                                    console.error('wx.getUserInfo() fail', err);
                                    wx.showToast({
                                        title: '请检查网络情况',
                                        icon: 'none'
                                    });
                                }
                            })
                        }
                    } else if (!res.authSetting['scope.userInfo']) {
                        // 未授权
                        console.log('未授权，不判断是否有userInfo缓存')
                        resolve({});
                    }
                },
                fail: (err) => {
                    // 因网络问题
                    wx.showToast({
                        title: '请检查网络情况',
                        icon: 'none'
                    });
                    console.error('wx.getSetting() fail', err);
                }
            })
        })

    }

    /**
     * 设置userinfo缓存
     * @param userInfo 
     */
    static setUserInfoStorage(userInfo: CustomUserInfo): void {
        const oUserInfo = this.getUserInfoStorage();
        const nUserInfo = {
            ...oUserInfo,
            ...userInfo
        }
        delete nUserInfo['username'];
        wx.setStorageSync('USERINFO', nUserInfo);
    }

    /**
     * 获取openid_sessionKey缓存
     */
    static getOpenidSessionKeyStorage(): Openid_SessionKeyType {
        return wx.getStorageSync('OPENID_SESSIONKEY');
    }

    /**
     * 设置openid_sessionKey缓存
     * @param openid_sessionKey 
     */
    static setOpenidSessionKeyStorage(openid_sessionKey: Openid_SessionKeyType): void {
        const oOpenid_sessionKey = this.getOpenidSessionKeyStorage();
        const nOpenid_sessionKey = {
            ...oOpenid_sessionKey,
            ...openid_sessionKey
        };
        wx.setStorageSync('OPENID_SESSIONKEY', nOpenid_sessionKey);
    }


    /**
     * 使用uid获取userInfo
     * @param uid 
     */
    static getUserInfoByUid(uid: string) {
        return new Promise((resolve, reject) => {
            const options = {
                url: '/user/query_user_info_by_uid',
                method: 'GET' as "GET",
                data: {
                    uid
                }
            }
            Https.request(options).then(res => {
                console.log('成功获取userInfo', res);
                resolve(res);
            }).catch(err => {
                console.log('获取userInfo失败', err);
                reject(err);
            })
        })
    }



    /**
     * 获取userinfo缓存
     */
    static getUserInfoStorage(): CustomUserInfo {
        try {
            return wx.getStorageSync('USERINFO')
        } catch (err) {
            console.log('USERINFO提取失败', err);
            return {}
        }
    }

    /**
     * 授权 + 注册
     * @param userInfo 
     * @param openid_sessionKey 
     */
    static registeAccountAndGetUid(userInfo: CustomUserInfo, openid_sessionKey: Response.LoginData, app: any) {
        return new Promise<boolean>((resolve, reject) => {
            User.setUserInfoStorage(userInfo);
            // console.log(globalData)
            // const { nickName, avatarUrl } = User.getUserInfoStorage();
            const { nickName, avatarUrl } = userInfo;
            const { openid } = openid_sessionKey;

            const options = {
                url: '/wxma_auth/login',
                method: 'POST' as "POST",
                data: {
                    openid,
                    username: nickName as string,
                    avatarUrl: avatarUrl as string
                }
            }
            Https.request<Request.AuthorizeReq, Response.AuthorizeRes>(options).then(res => {
                if (res.data.uid) {
                    console.log('用户授权 + 注册成功', res);
                    // 设置缓存
                    User.setUserInfoStorage(res.data);
                    // 获取缓存
                    const userInfo = User.getUserInfoStorage();
                    app.setGlobalData({ userInfo, isAuthorized: true });
                    resolve(true);
                } else {
                    console.log('授权接口出错', res);
                }

            }).catch(err => {
                console.log('授权接口出错', err);
            })
        })

    }

}



export default User;
