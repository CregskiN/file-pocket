// component/detail/file-item/file-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    file: Object,
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
    onMore() {
      console.log('click more');
      wx.showActionSheet({
        itemList: ['分享', '重命名', '添加我的', '删除'],
        success: (res: WechatMiniprogram.ShowActionSheetSuccessCallbackResult) => {
          switch (res.tapIndex) {
            case 0: {
              wx.showToast({
                title: '选择好友'
              })
              break;
            }
            case 1: {
              wx.showToast({
                title: '重命名'
              })
              break;
            }
            case 3: {
              wx.showModal({
                title: '删除',
                content: `您确定删除文件 - ${this.data.file.name}`,
                success: (res) => {
                  this.triggerEvent('delete', {
                    fid: this.data.file.fid
                  })
                },
              })
            }
          }

        },
      })
    }
  }
})
