// miniprogram/pages/browsing-history/index.js

interface FileType {
  fid?: number
  name?: string,
  catagory?: number,
  submitter?: string,
  time?: string,
  isChecked?: boolean;
}


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
    files: [{
      name: '产品方法论',
      catagory: 0,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 0
    }, {
      name: '浏览器战争史',
      catagory: 1,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 1
    }, {
      name: '收购阿里巴巴的一千种方法',
      catagory: 2,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 2
    }, {
      name: '小姐姐联系方式大全',
      catagory: 3,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 3
    }, {
      name: '蓝精灵全集',
      catagory: 4,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 4
    }, {
      name: '产品方法论',
      catagory: 5,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 5
    }, {
      name: '产品方法论',
      catagory: 6,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 6
    }, {
      name: '产品方法论',
      catagory: 7,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 7
    }] as FileType[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options: any) {
    const { uid } = options;

    const oFiles = this.data.files;

    oFiles.map((file) => {
      (file.catagory as any) = fileCatagory[file.catagory as number];
    })
    this.setData({
      files: oFiles,
      uid,
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {}
  }
})