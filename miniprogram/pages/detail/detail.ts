import User from '../../models/User';
const app = getApp();

enum fileCatagory {
  'doc' = 0,
  'docx' = 1,
  'xls' = 2,
  'xlsx' = 3,
  'ppt' = 4,
  'pptx' = 5,
  'zip' = 6,
  'pdf' = 7,
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupCreator: {},
    files: [{
      name: '产品方法论',
      catagory: 0,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      fid: 0
    }, {
      name: '浏览器战争史',
      catagory: 1,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      fid: 1
    }, {
      name: '收购阿里巴巴的一千种方法',
      catagory: 2,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      fid: 2
    }, {
      name: '小姐姐联系方式大全',
      catagory: 3,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      fid: 3
    }, {
      name: '蓝精灵全集',
      catagory: 4,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      fid: 4
    }, {
      name: '产品方法论',
      catagory: 5,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      fid: 5
    }, {
      name: '产品方法论',
      catagory: 6,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      fid: 6
    }, {
      name: '产品方法论',
      catagory: 7,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      fid: 7
    }],
  },

  /**
   * 删除文件
   */
  onDelete(e: any) {
    console.log(e.detail);
    wx.showToast({
      title: '删除成功'
    })
  },


  /**
   * 上传
   */
  onUpload() {
    wx.showActionSheet({
      itemList: ['群聊文件', '本地文件'],
      success: (res) => {
        switch (res.tapIndex) {
          case 0: {
            wx.chooseMessageFile({
              count: 100,
              type: 'file',
              success: (res) => {
                const names = [];
                for(let file of res.tempFiles){
                  names.push(file.name);
                }
                wx.showModal({
                  title: '提示',
                  content: `您将添加文件${JSON.stringify(names)}`,
                  success: () => {
                    wx.showToast({
                      title: '添加成功'
                    })
                  }
                })
              }
            })
            break;
          }
          case 1: {
            wx.showModal({
              title: '提示',
              content: '抱歉，微信暂不支持此功能'
            })
            break;
          }
        }
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const userInfo = User.getUserInfo();
    const oFiles = this.data.files;
    for (let file of oFiles) {
      (file.catagory as any) = fileCatagory[file.catagory];
    }
    this.setData({
      groupCreator: userInfo,
      files: oFiles
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(opts): WechatMiniprogram.Page.ICustomShareContent {
    console.log(opts.target)
    return {}
  }
})