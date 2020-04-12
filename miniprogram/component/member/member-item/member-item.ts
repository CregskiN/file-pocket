// component/member/member-item/member-item.js
import moment from 'moment';
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    member: Object,
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
    onDelete(){
      wx.showModal({
        title: '注意⚠️',
        content: `此次操作将踢除 - ${this.data.member.username}`,
        success: () => {
          this.triggerEvent('delete', {
            uid: this.data.member.uid,
            tid: this.data.member.tid,
          })
        }
      })
    }
  }
})
