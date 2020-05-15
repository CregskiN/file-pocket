// component/detail/team-head/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    teamInfo: Object,
    userGlobalGrade: Number,
    type:String
  },
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的初始数据
   */
  data: {
    isManagerMode: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onToggleMode() {
      if (this.data.isManagerMode) {
        this.triggerEvent('toggleUser'); // 切换到用户模式
      } else {
        this.triggerEvent('toggleManager'); // 切换到管理员模式
      }
      this.setData({
        isManagerMode: !this.data.isManagerMode
      });
    }
  }
})