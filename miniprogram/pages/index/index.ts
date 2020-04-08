import User from '../../models/User';
import { getWindowInfo } from '../../utils/util';

const floatBtnIconParams = [{
	floatBtnIconClass: 'iconfont icon-bingtu',
	floatBtnContent: '授权'
}, {
	floatBtnIconClass: 'iconfont icon-bingtu',
	floatBtnContent: '创建'
}]


Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		items: [{
			gid: 0,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
			name: '官方项目群项目群项目群项目群项目群项目群项目群项目群项目群项目群',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			gid: 1,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkk11.jpg',
			name: '用户群1',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			gid: 2,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkCtJ.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			gid: 3,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			gid: 4,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			gid: 5,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			gid: 6,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			gid: 7,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			gid: 8,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			gid: 9,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}],
		isLogin: false,
		buttonTop: 10000,
		buttonLeft: 10000,
		windowHeight: 0,
		windowWidth: 0,
		startPoint: null,
		floatBtnIconClass: '',
		floatBtnContent: ''
	},

	/**
	 * "更多"按钮点击事件
	 * @param e 点击事件
	 */
	onMore(e: any) {
		console.log(e);
		// enum actionSheet {
		// 	'添加共享成员' = 0,
		// 	'修改项目名称' = 1,
		// 	'退出项目' = 2
		// }
		wx.showActionSheet({
			itemList: ['添加共享成员', '修改项目名称', '退出项目'],
			success: (res: WechatMiniprogram.ShowActionSheetSuccessCallbackResult) => {
				switch (res.tapIndex) {
					case 0: {
						wx.showToast({
							title: '弹出好友选择界面'
						})
						break;
					}
					case 1: {
						wx.showToast({
							title: '弹出输入模块'
						})
						break;
					}
					case 2: {
						wx.showModal({
							title: '注意⚠️',
							content: '您确定退出该群组？',
							success: (res: WechatMiniprogram.ShowModalSuccessCallbackResult) => {
								if (res.confirm) {
									wx.showToast({
										title: '操作成功'
									})
								}
							},
						})
					}
				}

			},
			fail: (res: WechatMiniprogram.GeneralCallbackResult) => {
				console.log('fail');
			}
		})
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
	 * 获取授权点击事件
	 * @param e 
	 */
	onGetAuthorization(e: any) {
		try {
			const detail: WechatMiniprogram.GetUserInfoSuccessCallbackResult = e.detail;
			User.setUserInfo(detail.userInfo);
			this.setData({
				isLogin: true,
				...floatBtnIconParams[1],
			})
		} catch (err) {
			console.log(err);
			wx.showToast({
				title: '授权失败'
			})
		}

	},



	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad() {
		wx.getSetting({
			success: (res) => {
				if (res.authSetting["scope.userInfo"]) {
					this.setData({
						isLogin: true,
						...floatBtnIconParams[1],
					})
				} else {
					this.setData({
						isLogin: false,
						...floatBtnIconParams[0]
					})
				}
			}
		});

		getWindowInfo((res: WechatMiniprogram.GetSystemInfoSuccessCallbackResult) => {
			this.setData({
				windowHeight: res.windowHeight,
				windowWidth: res.windowWidth
			})
		});
		
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {
		this._adjustFloatButtonLocation();
	},

	_adjustFloatButtonLocation() {
		if (this.data.buttonLeft >= this.data.windowWidth) {
			this.setData({
				buttonLeft: this.data.windowWidth - 110
			});
		}
		if (this.data.buttonTop >= this.data.windowHeight) {
			this.setData({
				buttonTop: this.data.windowHeight - 120
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