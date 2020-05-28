// component/common/authorize/authorize.js
import User from '../../../models/User';
import Https from '../../../utils/https';

const app = getApp();

Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		// title: String,
		// content: String,
		isAuthorized: Boolean,
	},

	/**
	 * 组件的初始数据
	 */
	data: {
		title: '提示',
		content: '请授权我们使用您的昵称、头像'
	},

	/**
	 * 组件的方法列表
	 */
	methods: {

		/**
		 * 授权事件
		 * @param e 
		 */
		onAuthorize(e) {
			// console.log(e);
			const userInfo = e.detail.userInfo;
			if (userInfo) {
				const { openid_sessionKey } = app.getGlobalData()
				User.registeAccountAndGetUid(userInfo, openid_sessionKey, app).then(success => {
					if (success) {
						this.triggerEvent('authorize');
						console.log('授权完成后 globalData', app.getGlobalData())
					}
				})
			} else {
				wx.showToast({
					title: '授权失败'
				})
			}
		}
	}
})
