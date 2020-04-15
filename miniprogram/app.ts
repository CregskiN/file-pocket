import config from './config/config';
import { GlobalDataType } from './utils/typing';
import User from './models/User';


interface AppOptionCustom {
	globalData: GlobalDataType;
	setGlobalData: (e: any) => void;
	getGlobalData: (e: any) => GlobalDataType;
	init: () => Promise<any>;
	getShareTicket: (cb?: Function) => any;
}


// app.ts
App<AppOptionCustom>({
	globalData: {
		openGid: '',
		shareTicket: '',
		userInfo: {},
		openid_sessionKey: {},
		isLogin: false,
		isAuthorized: false,
	},

	onLaunch(options) {


	},

	onShow(options) {
		console.log('App.onShow 获取', options);
		console.log('App.onShow 获取 globalData', this.globalData);

		if (options.scene === 1044 && options.shareTicket) {
			this.globalData.shareTicket = options.shareTicket;
		}
	},

	/**
	 * 设置globalData之用
	 * @param e 
	 */
	setGlobalData(e) {
		this.globalData = {
			...this.globalData,
			...e,
		}
	},

	/**
	 * 获取globalData
	 * @param e 
	 */
	getGlobalData(e: any) {
		return this.globalData;
	},


	/**
	 * 页面初始化
	 */
	init() {
		return new Promise((resolve, reject) => {
			User.login().then(OPENID_SESSIONKEY => {
				console.log('login接口调用完成，获取OPENID_SESSIONKEY', OPENID_SESSIONKEY);
				
				this.globalData = {
					...this.globalData,
					openid_sessionKey: OPENID_SESSIONKEY,
					isLogin: true
				};

				User.getAuthorize().then(userInfo => {
					if (userInfo.nickName) {
						console.log('App.onLaunch 初始化完成');
						this.globalData = {
							...this.globalData,
							userInfo,
							isAuthorized: true,
						}
					} else {
						// 无法获取userInfo，需跳转授权
						this.globalData = {
							...this.globalData,
							userInfo: {},
							isAuthorized: false,
						}
					}
					resolve(this.globalData); // 最终出口！
				}).catch(err => {
					console.log('授权调用失败', err);
					this.globalData = {
						...this.globalData,
						isAuthorized: false,
					}
					reject(err);
				})
			}).catch(err => {
				console.log('login失败', err);
				this.globalData = {
					...this.globalData,
					userInfo: {},
					isLogin: false,
				}
				reject(err);
			})
		})
	},




	getShareTicket(cb) {
		console.log('globalData is', this.globalData);
		wx.getShareInfo({
			shareTicket: this.globalData.shareTicket as string,

			success: (getShareInfoRes) => {
				console.log('wx.getShareInfo rereive', getShareInfoRes);

				const js_encryptedData = getShareInfoRes.encryptedData;
				const js_iv = getShareInfoRes.iv;
				wx.login({
					success: (loginRes) => {
						const js_code = loginRes.code
						// console.log(getShareInfoRes, loginRes);

						wx.request({
							url: `http://${config.server.host}:${config.server.port}/api/login`,
							method: 'POST',
							data: {
								code: js_code, // 换取openid

								session_key: '123',
								encryptedData: js_encryptedData, // 
								iv: js_iv
							},
							success: (res) => {
								console.log(res);
							},
							fail: function (err) {
								console.log('getShareTiket---err' + JSON.stringify(err))
							}
						})
					}
				})
			}
		})
		return this.globalData.shareTicket;
	},
	/**
	 * 此处写授权跳转功能
	 *  */
})