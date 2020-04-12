// component/my/my-item/my-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item: Object,
    uid: Number,
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
      wx.navigateTo({
        url: this.data.item.baseUrl + '?uid=' + this.data.uid
      })
    }
  }
})
