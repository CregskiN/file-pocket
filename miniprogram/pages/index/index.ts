import User from '../../models/User';
import { getWindowInfo } from '../../utils/util';
import { GlobalDataType, CustomUserInfo } from '../../utils/typing';
import Https from '../../utils/https';
import { relativeTimeThreshold } from 'moment';

const app = getApp();

const floatBtnIconClass = 'iconfont icon-bingtu';


Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		teams: [] as any,
		isLogin: true,
		buttonTop: 10000,
		buttonLeft: 10000,
		windowHeight: 0,
		windowWidth: 0,
		startPoint: null,
		floatBtnIconClass: '',
		isAuthorized: true,
		userInfo: {} as CustomUserInfo,
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
		this._getTeamList();
	},



	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad() {
		const init: Promise<GlobalDataType> = app.init();
		init.then(globalData => {
			const { isAuthorized, isLogin, userInfo } = globalData;
			console.log('Index.onload - globalData is', globalData);
			this.setData({
				userInfo,
				isLogin,
				isAuthorized,
				floatBtnIconClass,
			})
			this._getTeamList();
		}).catch(err => { // 报错逻辑的最后一道防线
			console.log('页面初始化错误', err);
		})

	},

	/**
	 * 获取首页 我加入的项目组列表
	 */
	_getTeamList() {
		const { uid } = app.getGlobalData().userInfo;
		const options = {
			url: '/user/query_created_team_list_by_uid',
			method: "GET" as "GET",
			data: {
				uid: uid as string
			}
		}

		Https.request<Request.QueryTeamListReq, Response.QueryTeamListRes>(options).then(res => {
			console.log('获取teams数据成功！', res);
			this.setData({
				teams: res.data
			})
		})
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