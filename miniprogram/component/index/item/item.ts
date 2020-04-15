// component/item/item.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		team: Object,
		docCount: Number,
		imgCount: Number
	},
	options: {
		addGlobalClass: true
	},
	/**
	 * 组件的初始数据
	 */
	data: {

	},

	/**
	 * 组件的方法列表
	 */
	methods: {
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
								title: '注意',
								content: '您确定退出该群组？',
								success: (res: WechatMiniprogram.ShowModalSuccessCallbackResult) => {
									if (res.confirm) {
										this.triggerEvent('dropOut', {
											tid: this.data.team.tid
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

		toDetail() {
			wx.navigateTo({
				url: `/pages/detail/detail?gid=${this.data.team.tid}`
			})
		}
	}
})
