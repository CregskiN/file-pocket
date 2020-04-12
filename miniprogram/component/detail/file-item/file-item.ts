// component/detail/file-item/file-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    file: Object,
    editting: Boolean,
    checked: Boolean,
    isChecked: Boolean,
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
      if (typeof this.data.checked === 'undefined' && typeof this.data.editting === 'undefined') {
        // 我的文件操作
        wx.showActionSheet({
          itemList: ['分享', '重命名', '删除'],
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
              case 2: {
                wx.showModal({
                  title: '删除',
                  content: `您确定删除文件 - ${this.data.file.name} ?`,
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
      } else {
        wx.showActionSheet({ // @TODO: 修改此处逻辑，使用与三处：项目页编辑，浏览历史操作，我的文件操作 // 分两种模式，有无'添加我的'
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
              case 2: {
                this.triggerEvent('addToMy', {
                  fid: this.data.file.fid
                });
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


    },

    onSelect(e: any) {
      this.triggerEvent('select', {
        fid: this.data.file.fid
      })

    }
  }
})
