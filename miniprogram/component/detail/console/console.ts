// component/detail/console/console.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    editting: Boolean,
    selectCount: Number,
    tid: Number,
    type: String, // 控制台类型：1.team 2.my_file 
    teamInfo: Object,
  },
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的初始数据
   */
  data: {
    classes: {
      btns: {
        share: {
          active: 'detail_console_btn btn_share_active',
          normal: 'detail_console_btn btn_share_normal'
        },
        complete: {
          active: 'detail_console_btn btn_complete_active',
          normal: 'detail_console_btn btn_complete_normal'
        }
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {


    /**
       * 上传
       */
    onUpload() {
      wx.showActionSheet({
        itemList: ['聊天文件', '本地图片'],
        success: (res) => {
          switch (res.tapIndex) {
            case 0: {
              wx.chooseMessageFile({
                count: 10,
                type: 'all',
                success: (res) => {
                  this.triggerEvent('uploadMessageFile', {
                    fileObjects: res
                  })
                }
              })
              break;
            }
            case 1: {
              wx.chooseImage({
                count: 10,
                sourceType: ['album'],
                success: (res) => {
                  this.triggerEvent('uploadLocalImg', {
                    chooseLocalImgs: res
                  })
                }
              })
              break;
            }
          }
        }
      })
    },

    /**
     * 跳转至成员页
     */
    toMember() {
      wx.navigateTo({
        url: `/pages/member/member?tid=${this.data.teamInfo.tid}`
      })
    },

    /**
     * 进入编辑状态
     */
    inEdit() {
      this.triggerEvent('inEdit');
    },


    /**
     * 删除已选
     */
    onDelete() {
      if (this.properties.selectCount) {
        this.triggerEvent('delete');
      }
    },

    /**
     * 添加至个人收藏集
     */
    onAddToMyCollection() {
      if (this.properties.selectCount) {
        this.triggerEvent('addToMyCollection');
      }
    },

    /**
     * 一键添加至个人收藏集
     */
    onAddToMyCollectionOnce() {
      this.triggerEvent('addToMyCollectionOnce')
    },


    /**
     * 添加至项目组
     */
    onAddToTeam() {
      if (this.properties.selectCount) {
        this.triggerEvent('addToTeam')
      }
    },

    /**
     * 分享按钮点击
     */
    onShare() {
      console.log('分享按钮点击了');
      this.triggerEvent('share')
    },
  }
})
