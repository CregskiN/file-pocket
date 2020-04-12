// component/common/pop/pop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    bgUrl: String,
    user: Object,
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
    onShow(){
      console.log(this.data.user);
    },
    onChangeBg(){
      this.triggerEvent('changeBg')
    },
  }
})
