import Upload from '../../models/Upload';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [{
      fid: 0,
      isChecked: false
    }, {
      fid: 1,
      isChecked: false
    }, {
      fid: 2,
      isChecked: false
    }, {
      fid: 3,
      isChecked: false
    }, {
      fid: 4,
      isChecked: false
    }, {
      fid: 5,
      isChecked: false
    }, {
      fid: 6,
      isChecked: false
    }, {
      fid: 7,
      isChecked: false
    }, {
      fid: 8,
      isChecked: false
    }]
  },

  /**
  * 上传本地图片
  * @param e 
  */
  onUploadLocalImg(e: any) {
    Upload.uploadLocalImg(e.detail.chooseLocalImgRes)
  },

  /**
   * 上传群聊文件
   * @param e 
   */
  onUploadMessageFile(e: any) {
    const fileObjects: WechatMiniprogram.ChooseMessageFileSuccessCallbackResult = e.detail.fileObjects;
    const pormises: Promise<any>[] = [];
    fileObjects.tempFiles.forEach(fileObject => {
      pormises.push(Upload.uploadMessageFile(fileObject));
    })
    Promise.all(pormises).then(res => {
      console.log(res);

    }).catch(err => {
      console.log(err);
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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