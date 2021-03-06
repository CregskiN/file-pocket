import User from "../../../models/User";

// component/detail/file-item/file-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    file: Object,
    editting: Boolean,
    type: String,
    isChecked: Boolean,
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

    onMore(e: any) {
      console.log(e);
      console.log(this.data);
      if (this.data.type === 'my_file') {
        // 我的文件操作
        wx.showActionSheet({
          itemList: ['删除'],
          success: (res: WechatMiniprogram.ShowActionSheetSuccessCallbackResult) => {
            switch (res.tapIndex) {
              case 0: {
                this.triggerEvent('delete', {
                  id: this.data.file.id
                })
              }
            }
          },
        })
      } else if (this.data.type === 'detail_create') {
        wx.showActionSheet({ // @TODO: 修改此处逻辑，使用与三处：项目页编辑，浏览历史操作，我的文件操作 // 分两种模式，有无'添加收藏'
          itemList: ['重命名', '添加收藏', '删除'],
          success: (res: WechatMiniprogram.ShowActionSheetSuccessCallbackResult) => {
            switch (res.tapIndex) {
              case 0: {
                this.triggerEvent('rename', {
                  file: this.properties.file
                })
                break;
              }
              case 1: {
                this.triggerEvent('addToMyCollection', {
                  fileId: this.properties.file.fileId
                });
                break;
              }
              case 2: {
                this.triggerEvent('delete', {
                  fileId: this.properties.file.fileId
                })
              }
            }

          },
        })
      } else if (this.data.type === 'detail_join') {
        const uid = User.getUserInfoStorage().uid;
        if (this.properties.file.uid === uid) {
          wx.showActionSheet({ // @TODO: 修改此处逻辑，使用与三处：项目页编辑，浏览历史操作，我的文件操作 // 分两种模式，有无'添加收藏'
            itemList: ['重命名', '添加收藏', '删除'],
            success: (res: WechatMiniprogram.ShowActionSheetSuccessCallbackResult) => {
              switch (res.tapIndex) {
                case 0: {
                  this.triggerEvent('rename', {
                    file: this.properties.file
                  })
                  break;
                }
                case 1: {
                  this.triggerEvent('addToMyCollection', {
                    fileId: this.properties.file.fileId
                  });
                  break;
                }
                case 2: {
                  this.triggerEvent('delete', {
                    fileId: this.properties.file.fileId
                  })
                }
              }
            }
          })
        } else {
          wx.showActionSheet({ // @TODO: 修改此处逻辑，使用与三处：项目页编辑，浏览历史操作，我的文件操作 // 分两种模式，有无'添加收藏'
            itemList: ['添加收藏'],
            success: (res: WechatMiniprogram.ShowActionSheetSuccessCallbackResult) => {
              switch (res.tapIndex) {
                case 0: {
                  this.triggerEvent('addToMyCollection', {
                    fileId: this.properties.file.fileId
                  });
                  break;
                }
              }
            }
          })
        }
      } else if (this.data.type === 'detail_official') {
        wx.showActionSheet({ // @TODO: 修改此处逻辑，使用与三处：项目页编辑，浏览历史操作，我的文件操作 // 分两种模式，有无'添加收藏'
          itemList: ['添加收藏'],
          success: (res: WechatMiniprogram.ShowActionSheetSuccessCallbackResult) => {
            switch (res.tapIndex) {
              case 0: {
                this.triggerEvent('addToMyCollection', {
                  fileId: this.properties.file.fileId
                });
                break;
              }
            }
          }
        })
      }
      else if (this.data.type === 'searcher_official') {
        wx.showActionSheet({ // @TODO: 修改此处逻辑，使用与三处：项目页编辑，浏览历史操作，我的文件操作 // 分两种模式，有无'添加收藏'
          itemList: ['添加收藏'],
          success: (res: WechatMiniprogram.ShowActionSheetSuccessCallbackResult) => {
            switch (res.tapIndex) {
              case 0: {
                this.triggerEvent('addToMyCollection', {
                  fileId: this.properties.file.fileId
                });
                break;
              }
            }

          },
        })
      } else if (this.data.type === 'browse_history') {
        wx.showActionSheet({ // @TODO: 修改此处逻辑，使用与三处：项目页编辑，浏览历史操作，我的文件操作 // 分两种模式，有无'添加收藏'
          itemList: ['添加收藏'],
          success: (res: WechatMiniprogram.ShowActionSheetSuccessCallbackResult) => {
            switch (res.tapIndex) {
              case 0: {
                this.triggerEvent('addToMyCollection', {
                  fileId: this.properties.file.fileId
                });
                break;
              }
            }

          },
        })

      }

    },

    /**
     * 编辑模式下选泽事件
     * @param e 
     */
    onSelect() {
      const { type } = this.properties;
      const { fileId } = this.properties.file;
      if (type !== 'my_file') {
        this.triggerEvent('select', {
          fid: fileId,
        })
      } else if (type === 'my_file') {
        const { id } = this.properties.file;
        this.triggerEvent('select', {
          id,
          fid: fileId
        })
      }

    },

    /**
     * 点击查看事件
     * @param e 
     */
    onView(e: any) {
      if (this.properties.editting) {
        this.onSelect();
      } else {
        this.triggerEvent('view', {
          file: this.properties.file
        })
      }

    }
  }
})
