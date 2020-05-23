// miniprogram/pages/browsing-history/index.js
import { fileCatagory, CustomUserInfo } from '../../utils/typing'
import Viewer from '../../utils/Viewer';
import Collection from '../../models/Collection';
import { GlobalDataType } from '../../utils/typing';
import User from '../../models/User';
import { fileListFormatter } from '../../utils/formatters';

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */

  data: {
    files: [] as Response.FileType[],
    userInfo: {} as CustomUserInfo,
    isDownloadingOrUploadingVisible: false,
  },


  onAddToMyCollection(e: any) {
    if (this.data.userInfo.uid) {
      Collection.addToMyCollectionFromTeam(this.data.userInfo.uid, new Array(e.detail.fileId)).then(res => {
        if (res.success) {
          wx.showToast({
            title: '添加成功',
            icon: 'success'
          })
        }
      })
    } else {
      wx.showToast({
        title: '未授权',
        icon: 'none'
      })
    }


  },

  onView(e: any) {
    this.setData({
      isDownloadingOrUploadingVisible: true
    })
    Viewer.viewDocument(e.detail.file).then(res => {
      console.log(res);
      if ((res as any).success) {
        this.setData({
          isDownloadingOrUploadingVisible: false
        })
      }
    });
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options: any) {
    const userInfo = User.getUserInfoStorage();


    Viewer.getHistory().then(res => {
      this.setData({
        files: (res),
        userInfo
      })
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