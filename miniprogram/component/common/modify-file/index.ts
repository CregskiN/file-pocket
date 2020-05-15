
/**
 * 功能性组件：项目组重命名
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isModifing: Boolean,
    modifyFile: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '重命名',
    newFileName: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 输入
     * @param e 
     */
    onInput(e: any) {
      this.setData({
        newFileName: e.detail.value
      })
    },

    /**
     * 取消
     */
    onCancel() {
      this.triggerEvent('modifyCancel');
    },

    /**
     * 确认
     */
    onComplete() {
      this.triggerEvent('complete', {
        newFileName: this.data.newFileName
      })
    },

  }
})
