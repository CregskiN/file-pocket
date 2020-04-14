import { request } from '../utils/https';

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
     */
    static login() {
        return new Promise<Openid_SessionKeyType>((resolve, reject) => {
            wx.checkSession({
                success: (res) => {
                    if (res.errMsg === 'checkSession:ok') {
                        resolve(wx.getStorageSync('OPENID_SESSIONKEY'));
                    }
                },
                fail: (err) => {
                    wx.login({
                        success: (res) => {
                            const data = { code: res.code };
                            const loginRes = request<Request.CodeToSessionReq, Response.CodeToSessionRes>('/wxma_auth/code_to_session', 'POST', data);
                            loginRes.then(res => {
                                // 此处应该校验res是否合法
                                const openidWithSessionKey = res.data;
                                wx.setStorageSync('OPENID_SESSIONKEY', openidWithSessionKey);
                                resolve(openidWithSessionKey);
                            }).catch(err => {
                                console.log('login逻辑有误 - ', err);
                                reject(err)
                            })
                        },
                        fail: (err) => {
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
                    console.log(res);
                    if (res.authSetting['scope.userInfo']) {
                        // 已授权处理如下
                        let userInfo = null;
                        const userInfoStorage = wx.getStorageSync('USERINFO');
                        if (userInfoStorage) {
                            // 已授权，且有缓存
                            userInfo = userInfoStorage;
                            resolve(userInfo);
                            return;
                        } else {
                            // 已经授权，但无缓存
                            wx.getUserInfo({
                                success: res => {
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
