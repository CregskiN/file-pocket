// component/my/my-item/my-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object,
    userInfo: Object,
    isAuthorized: Boolean,
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
    toPage() {
      if (!this.properties.isAuthorized) {
        wx.showToast({
          title: '请先授权',
          icon: 'none'
        })
      } else {
        wx.navigateTo({
          url: this.data.item.baseUrl + '?uid=' + this.data.userInfo.uid
        })
      }

    }
  }
})
