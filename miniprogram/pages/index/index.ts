import User from '../../models/User';
import Team from '../../models/Team';
import { getWindowInfo } from '../../utils/util';
import { GlobalDataType, CustomUserInfo, TeamType } from '../../utils/typing';
import Https from '../../utils/https';
// import { relativeTimeThreshold } from 'moment';


const app = getApp();

const floatBtnIconClass = 'iconfont icon-bingtu';


Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		teams: [] as TeamType[],
		isLogin: true,
		buttonTop: 10000,
		buttonLeft: 10000,
		windowHeight: 0,
		windowWidth: 0,
		startPoint: null,
		floatBtnIconClass: '',
		isAuthorized: true,
		userInfo: {} as CustomUserInfo,
		lints: {
			loading: '正在加载...'
		},
		isLoading: true,

		current: 0,
	},



	/**
	 * 创建项目点击事件
	 * @param e 
	 */
	onCreate(e: any) {
		wx.redirectTo({
			url: '/pages/found/found'
		})
	},


	/**
	 * 完成授权逻辑，撤除授权窗口
	 */
	onAuthorize() {
		console.log('toogle isAuthorized', this.data);
		this.setData({
			isAuthorized: true
		})
		Team.getOfficialTeamList().then(res => {
			console.log(res);
		})
	},


	/**
	 * 切换tap
	 * @param e 
	 */
	onSwitchTap(e: any) {
		if (e.type === 'change') {
			const { current } = e.detail;
			this.setData({
				current
			})
		} else if (e.type === 'tap') {
			const current = e.target.dataset.current;
			this.setData({
				current
			})
		}
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad() {
		const init: Promise<GlobalDataType> = app.init();
		init.then(globalData => {
			const { isAuthorized, isLogin, userInfo } = globalData;
			console.log('Index.onload - globalData is', globalData);

			Team.getOfficialTeamList().then(res => {
				this.setData({
					teams: (res as any).data,
					userInfo,
					isLogin,
					isAuthorized,
					floatBtnIconClass,
					isLoading: false
				})
			});
		}).catch(err => { // 报错逻辑的最后一道防线
			console.log('页面初始化错误', err);
		});

	},


	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {
		getWindowInfo().then(res => {
			const { windowHeight, windowWidth } = res;
			this.setData({
				windowHeight: res.windowHeight,
				windowWidth: res.windowWidth
			});
			this._adjustFloatButtonLocation(windowHeight, windowWidth);
		})

	},

	_adjustFloatButtonLocation(windowHeight: number, windowWidth: number) {
		if (this.data.buttonLeft >= this.data.windowWidth) {
			this.setData({
				buttonLeft: this.data.windowWidth - 80
			});
		}
		if (this.data.buttonTop >= this.data.windowHeight) {
			this.setData({
				buttonTop: this.data.windowHeight - 100
			});
		}
	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {
		const isAuthorized = app.getGlobalData();
		this.setData({
			isAuthorized
		})

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