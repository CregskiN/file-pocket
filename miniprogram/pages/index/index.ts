import Team from '../../models/Team';
import User from '../../models/User';
import { getWindowInfo } from '../../utils/util';
import { GlobalDataType, CustomUserInfo } from '../../utils/typing';
import { teamListFormatter } from '../../utils/formatters';

const app = getApp();

const floatBtnIconClass = 'iconfont icon-add-fill';

Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		officialTeamList: [] as Response.OfficialTeam[],
		createdTeamList: [] as Response.TeamDetailType[],
		joinedTeamList: [{}, {}] as Response.TeamDetailType[],
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

		isModifing: false,
		modifyTeam: {} as Response.TeamDetailType,

		selectTeam: {} as Response.TeamDetailType,
		isShareWindowVisible: false,
	},



	/**
	 * 创建项目点击事件
	 * @param e 
	 */
	onCreate(e: any) {
		wx.navigateTo({
			url: '/pages/found/found'
		})
	},


	/**
	 * 完成授权逻辑，撤除授权窗口
	 */
	onAuthorize() {
		const { uid } = User.getUserInfoStorage();

		this._refreshCreatedTeamList(uid as string).then(no => {
			this._refreshJoinedTeamList(uid as string).then(no => {
				this.setData({
					isAuthorized: true
				})
			});
		});
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
			const { current } = e.target.dataset;
			this.setData({
				current
			})
		}
	},

	/**
	 * 重命名 - 获取选中项目组信息。含鉴权
	 * 获取tid - 获取uid在team的权限等级 - 鉴权
	 * @param e 
	 */
	onRename(e: any) {
		const teamInfo = e.detail.teamInfo;
		const { tid } = teamInfo;
		const { uid } = this.data.userInfo;
		Team.getMemberGradeInTeam(tid, uid as string).then(res => {
			const userGrade = res.data.userGrade;
			if (userGrade < 3) {
				this.setData({
					modifyTeam: teamInfo,
					isModifing: true,
				})
			} else {
				wx.showToast({
					title: '权限不足',
					icon: 'none'
				})
			}
		})
	},

	/**
	 * 取消修改
	 */
	onModifyCancel() {
		this.setData({
			isModifing: false,
			modifyTeam: {} as any,
		})
	},

	/**
	 * 确认修改项目组信息
	 */
	onModifyComplete(e: any) {
		// const teamType = e.detail.teamType;
		// if(teamType === '')
		this.setData({
			isModifing: false,
			modifyTeam: {} as any,
		});
		this._refreshCreatedTeamList(this.data.userInfo.uid as string);
		this._refreshJoinedTeamList(this.data.userInfo.uid as string);
	},

	/**
	 * 邀请加入项目组 -> 设置selectTeam + 显示弹窗
	 * @param e 
	 */
	onShare(e: any) {
		this.setData({
			selectTeam: e.detail.selectTeam,
			isShareWindowVisible: true,
		})
	},

	/**
	 * 取消邀请
	 * @param e 
	 */
	onShareCancel(e: any) {
		this.setData({
			isShareWindowVisible: false,
			selectTeam: {} as any,
		})
	},

	/**
	 * 解散项目组
	 */
	onDisband(e: any) {
		console.log(e);
		const { tid, uid, type } = e.detail;
		Team.disbandTeam(tid, uid).then(res => {
			if (res.success) {
				wx.showToast({
					title: '解散成功'
				});
				if (type === 'create') {
					this._refreshCreatedTeamList(uid);
				} else if (type === 'join') {
					this._refreshJoinedTeamList(uid);
				}
			}
		}).catch(err => {
			wx.showToast({
				title: '解散失败'
			})
			console.log(err);
		})
	},

	/**
	 * 退出我加入的项目组
	 * @param e 
	 */
	onDropOut(e: any) {
		const { uid, tid } = e.detail;
		Team.deleteMember(uid, tid).then(res => {
			if (res.success) {
				wx.showToast({
					title: '退出成功'
				})
			} else {
				wx.showToast({
					title: '操作失败'
				})
			}
			this._refreshJoinedTeamList(uid);
		}).catch(err => {
			wx.showToast({
				title: '请检查网络',
				icon: 'none'
			})
		})
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad() {
		const init: Promise<GlobalDataType> = app.init();
		init.then(globalData => {
			const { isAuthorized, isLogin, userInfo } = globalData;
			console.log('Index.onload - globalData is', globalData);

			if (userInfo) {
				if (userInfo.uid) {
					this._refreshCreatedTeamList(userInfo.uid);
					this._refreshJoinedTeamList(userInfo.uid);
				}
			}

			this.setData({
				userInfo,
				isLogin,
				isAuthorized,
				floatBtnIconClass,
				isLoading: false
			})
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
		});
		this._refreshCreatedTeamList(this.data.userInfo.uid as string);
		this._refreshJoinedTeamList;

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
		console.log(this.data.selectTeam.tid)
		return {
			title: `快来加入${this.data.selectTeam.teamName}吧！`,
			path: `/pages/detail/detail?tid=${this.data.selectTeam.tid}&action=join`
		}
	},

	/**
	 * 刷新我创建的项目组列表
	 * @param uid 
	 */
	_refreshCreatedTeamList(uid: string) {
		return new Promise<Response.TeamDetailType[]>((resolve, reject) => {
			Team.getCreatedTeamList(uid).then(createdTeamList => {
				const newCreatedTeamList = teamListFormatter(createdTeamList);
				this.setData({
					createdTeamList: newCreatedTeamList as Response.TeamDetailType[]
				});
				resolve(newCreatedTeamList as Response.TeamDetailType[]);
			})
		})
	},

	/**
	 * 刷新我加入的列表
	 * @param uid 
	 */
	_refreshJoinedTeamList(uid: string) {
		return new Promise<Response.TeamDetailType[]>((resolve, reject) => {
			Team.getJoinedTeamList(uid).then(joinedTeamList => {
				const newJoinedTeamList = teamListFormatter(joinedTeamList);
				this.setData({
					joinedTeamList: newJoinedTeamList as Response.TeamDetailType[]
				});
				resolve(newJoinedTeamList as Response.TeamDetailType[]);
			})
		})
	}
})