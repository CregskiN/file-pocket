import Https from '../utils/https';

import { Openid_SessionKeyType, CustomUserInfo } from '../utils/typing';
import { Response } from '../../typings/response';


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
     */
    static login() {
        return new Promise<Openid_SessionKeyType>((resolve, reject) => {
            wx.checkSession({
                success: (res) => {
                    // console.log('wx.checkSession成功',res);
                    
                    // if (res.errMsg === 'checkSession:ok') {
                    //     resolve(User.getOpenidSessionKeyStorage());
                    // }
                },
                fail: (err) => {
                    
                },
                complete: () => {
                    wx.login({
                        success: (res) => {
                            console.log('wx.login res', res);

                            const data = { code: res.code };
                            const options = {
                                url: '/wxma_auth/code_to_session',
                                method: 'GET' as "GET", // ts类型推断不出来
                                data: data
                            }
                            const loginRes = Https.request<Request.CodeToSessionReq, Response.CodeToSessionRes>(options);
                            loginRes.then((res: any) => {
                                // 此处应该校验res是否合法
                                console.log(res);
                                
                                const openid_sessionKey = res.data;
                                console.log('login接口获取的openid_sessionKey', openid_sessionKey);
                                User.setOpenidSessionKeyStorage(openid_sessionKey);
                                resolve(openid_sessionKey);
                            }).catch((err: any) => {
                                console.log('login逻辑有误 - ', err);
                                reject(err)
                            })
                        },
                        fail: (err) => {
                            console.log('wx.login接口调用失败', err);

                            reject(err)
                        }
                    })
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
                    // console.log(res);
                    console.log(res);
                    if (res.authSetting['scope.userInfo']) {
                        // 已授权处理如下
                        let userInfo = null;
                        const userInfoStorage = User.getUserInfoStorage();
                        if (userInfoStorage) {
                            // 已授权，且有缓存
                            userInfo = userInfoStorage;
                            resolve(userInfo);
                            return;
                        } else {
                            // 已经授权，但无缓存
                            wx.getUserInfo({
                                success: res => {
                                    User.setUserInfoStorage(res.userInfo);
                                    resolve(res.userInfo);
                                    return;
                                },
                                fail: err => {
                                    reject(err);
                                    return;
                                }
                            })
                        }
                    } else if (!res.authSetting['scope.userInfo']) {
                        resolve({});
                        return;
                    }
                },
                fail: (err) => {
                    // 因网络问题
                    reject(err);
                    return;
                }
            })
            // // 获取用户信息
            // wx.getSetting({
            // 	success: res => {
            // 		if (res.authSetting['scope.userInfo']) {
            // 			// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            // 			wx.getUserInfo({
            // 				success: res => {
            // 					// 可以将 res 发送给后台解码出 unionId
            // 					this.globalData.userInfo = res.userInfo

            // 					// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 					// 所以此处加入 callback 以防止这种情况
            // 					if (this.userInfoReadyCallback) {
            // 						this.userInfoReadyCallback(res)
            // 					}
            // 				},
            // 			})
            // 		}
            // 	},
            // })
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
     * 提取缓存中的userInfo(不包括open_id)
     */
    static getUserInfo(): GetUserInfoResult {
        try {
            let userInfo = wx.getStorageSync('userInfo');
            if (userInfo !== '') {
                userInfo = JSON.parse(userInfo);
            } else {
                userInfo = {};
            }
            return userInfo.userInfo;
        } catch (err) {
            console.log(err);
            return {};
        }
    }

    /**
     * 存储userInfo(不包括open_id)，增量存储。类似于this.serData
     * @param userInfo 
     */
    static setUserInfo(userInfo: WechatMiniprogram.UserInfo) {
        try {
            const oldInfo = this.getUserInfo() || {};
            const newUserInfo = {
                ...oldInfo,
                userInfo
            }
            wx.setStorageSync('userInfo', JSON.stringify(newUserInfo));
        } catch (err) {
            console.log(err);
        }

    }
}



export default User;
