// component/member/member-item/member-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    member: Object,
    userInfo: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onDelete() {
      wx.showModal({
        title: '注意',
        content: `此次操作将踢除 - ${this.data.member.username}`,
        success: (res) => {
          if (res.confirm) {
            // 用户选择确定
            console.log(this.data);
            this.triggerEvent('delete', {
              uid: this.data.member.uid,
            })
          }

        }
      })
    }
  }
})
