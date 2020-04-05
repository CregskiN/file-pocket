import User from '../../models/User';

const userInstance = User.getInstance();

Page({


	/**
	 * 
	
	https://imgchr.com/i/GYkFpR
	
	
	 */

	/**
	 * 页面的初始数据
	 */
	data: {
		items: [{
			id: 0,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
			name: '官方项目群项目群项目群项目群项目群项目群项目群项目群项目群项目群',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			id: 1,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkk11.jpg',
			name: '用户群1',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			id: 2,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkCtJ.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			id: 3,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			id: 4,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			id: 5,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			id: 6,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			id: 7,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			id: 8,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}, {
			id: 9,
			iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
			name: '用户群2',
			count: {
				doc: 10,
				img: 20
			}
		}],
		isLogin: false,
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

	onCreate(e: any) {
		wx.navigateTo({
			url: '/pages/found/found'
		})
	},
	getAuthorization(e:any){
		this.setData({
			isLogin: true
		})
		const detail: WechatMiniprogram.GetUserInfoSuccessCallbackResult = e.detail;
		userInstance.setUserInfo(detail.userInfo);
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad() {
		// wx.getSetting({
		// 	success: (res) => {
		// 		const authSetting
		// 	}
		// })
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