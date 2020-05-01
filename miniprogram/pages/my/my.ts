import User from '../../models/User';

function getBgUrl() {
	enum bgUrls {
		'../../../static/my/bg1.jpg', // 0
		'../../../static/my/bg2.jpg',
		'../../../static/my/bg3.jpg',
		'../../../static/my/bg4.jpg',
		'../../../static/my/bg5.jpg',
		'../../../static/my/bg6.jpg',
		'../../../static/my/bg7.jpg',
		'../../../static/my/bg8.jpg',
		'../../../static/my/bg9.jpg',
		'../../../static/my/bg10.jpg',
	}
	const n = Math.floor(Math.random() * 10)
	// console.log('本次bgUrl的下标为', n);
	return bgUrls[n];
}



Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		bgUrl: '',
		userInfo: {},
		items: [{
			title: '个人文件',
			baseUrl: '/pages/my_file/index',
			fontIconCLass: '',
			backIconClass: '',
		}, {
			title: '浏览历史',
			baseUrl: '/pages/browsing-history/index',
			fontIconCLass: '',
			backIconClass: '',
		}, {
			title: '用户反馈',
			baseUrl: '/pages/feedback/index',
			fontIconCLass: '',
			backIconClass: '',
		}]
	},

	/**
	 * 修改背景
	 */
	onChangeBg() {
		let bgUrl = getBgUrl();
		while (bgUrl === this.data.bgUrl) {
			bgUrl = getBgUrl();
		}
		this.setData({
			bgUrl
		})
	},

	onDelete() {
		wx.showToast({
			title: '删除成功'
		})
	},


	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad(options) {
		const userInfo = User.getUserInfoStorage();
		console.log('My.onLoad获取 - ', userInfo);

		const bgUrl = getBgUrl();
		this.setData({
			bgUrl,
			userInfo,
		})
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {
		if (this.data.userInfo === {}) {
			const userInfo = User.getUserInfoStorage();
			this.setData({
				userInfo,
			})
		}
	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage(opts): WechatMiniprogram.Page.ICustomShareContent {
		console.log(opts.target)
		return {}
	}
})