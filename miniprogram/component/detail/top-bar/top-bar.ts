// component/detail/top-line/top-line.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    editting: Boolean,
    selectCount: Number,
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
     * 取消按钮，退出编辑模式 
     */
    outEdit(){
      this.triggerEvent('outEdit')
    },

    /**
     * 全选事件
     */
    onSelectAll(){
      this.triggerEvent('selectAll')
    },
  }
})
