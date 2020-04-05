// component/item/item.js
Component({
	/**
	 * 组件的属性列表
	 */
	properties: {
		id: Number,
		icon: String,
		name: String,
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
		onMore() {
			this.triggerEvent('more', {
				id: this.properties.id
			})
		},
	}
})
