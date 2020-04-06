import config from './config/config';

interface AppOptionCustom {
	globalData: {
		userInfo?: WechatMiniprogram.UserInfo,
		openGid?: string,
		shareTicket: string,
	}
	userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
	getShareTicket(cg?: Function): string;
}

// app.ts
App<AppOptionCustom>({
	globalData: {
		openGid: '',
		shareTicket: '',
	},
	onLaunch(e) {

		// // 展示本地存储能力
		// const logs = wx.getStorageSync('logs') || []
		// logs.unshift(Date.now())
		// wx.setStorageSync('logs', logs)

		// // 登录
		// wx.login({
		// 	success: res => {
		// 		console.log(res.code)
		// 		// 发送 res.code 到后台换取 openId, sessionKey, unionId
		// 	},
		// })
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
	},
	onShow(options) {
		console.log('App.onShow 获取', options);
		
		if (options.scene === 1044 && options.shareTicket) {
			this.globalData.shareTicket = options.shareTicket;
		}
	},

	getShareTicket(cb) {
		// console.log('globalData is',this.globalData);
		// wx.getShareInfo({
		// 	shareTicket: this.globalData.shareTicket,
		// 	success: (getShareInfoRes) => {
		// 		console.log('wx.getShareInfo rereive',getShareInfoRes);
				
		// 		const js_encryptedData = getShareInfoRes.encryptedData;
		// 		const js_iv = getShareInfoRes.iv;
				wx.login({
					success: (loginRes) => {
						const js_code = loginRes.code
						// console.log(getShareInfoRes, loginRes);

						wx.request({
							url: `http://${config.server.host}:${config.server.port}/api/login`,
							method: 'POST',
							data: {
								code: js_code,
								// appId: config.app.appId,
								// encryptedData: js_encryptedData,
								// iv: js_iv
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
		// 	}
		// })
		return this.globalData.shareTicket;
	}
})