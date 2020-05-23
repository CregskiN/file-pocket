// component/common/share-window/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShareWindowVisible: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: `分享口袋`,
    content: '可将口袋分享至单个好友或群聊，分享后好友将自动加入口袋。'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 关闭分享窗口
     */
    onCancel() {
      this.triggerEvent('cancel')
    }
  }
})
