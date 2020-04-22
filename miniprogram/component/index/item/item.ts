// component/item/item.js

let itemList: string[] = [];

Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		team: Object,
		docCount: Number,
		imgCount: Number,
		type: String,
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
			switch (this.properties.type) {
				case 'normal': {
					wx.showActionSheet({
						itemList: ['邀请加入口袋', '重命名', '退出项目'],
						success: (res: WechatMiniprogram.ShowActionSheetSuccessCallbackResult) => {
							switch (res.tapIndex) {
								case 0: {
									this.triggerEvent('invite', {
										tid: this.data.team.tid
									})
									break;
								}
								case 1: {
									this.triggerEvent('rename', {
										tid: this.data.team.tid
									})
									break;
								}
								case 2: {
									this.triggerEvent('dropOut', {
										tid: this.data.team.tid
									})
									break;
								}
							}

						},
						fail: (res: WechatMiniprogram.GeneralCallbackResult) => {
							console.log('fail');
						}
					})
					break;
				}
				case 'official': {
					wx.showActionSheet({
						itemList: ['分享口袋', '退出口袋'],
						success: (res: WechatMiniprogram.ShowActionSheetSuccessCallbackResult) => {
							switch (res.tapIndex) {
								case 0: {
									this.triggerEvent('share', {
										tid: this.data.team.tid
									});
									break;
								}
								case 1: {
									this.triggerEvent('dropOut', {
										tid: this.data.team.tid
									})
									break;
								}
							}

						},
						fail: (res) => {
							console.log('fail');
						}
					})
					break;
				}
			}

		},

		toDetail() {
			wx.navigateTo({
				url: `/pages/detail/detail?tid=${this.data.team.tid}`
			})
		}
	}
})
