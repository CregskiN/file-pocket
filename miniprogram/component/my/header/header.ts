// component/common/pop/pop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgUrl: String,
    userInfo: Object,
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
     * 展示
     */
    onShow(){
      console.log(this.data.userInfo);
    },

    /**
     * 改变背景
     */
    onChangeBg(){
      this.triggerEvent('changeBg')
    },
  }
})
