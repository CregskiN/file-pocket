import File from '../../models/File';
import Collection from '../../models/Collection';
import User from '../../models/User';

import Viewer from '../../utils/Viewer';
import { GlobalDataType, CustomUserInfo } from '../../utils/typing';
import { fileListFormatter } from '../../utils/formatters';


const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [] as Response.FileType[],
    uid: '' as string,
    isAuthorized: true,
    isLogin: false,
    userInfo: {} as CustomUserInfo,

    isDownloadingOrUploadingVisible: false,
  },

  /**
   * 一键添加至收藏集
   * @param e 
   */
  onAddToMyCollectionOnce(e: any) {
    const { fileIds } = e.detail;
    Collection.addToMyCollectionFromTeam(this.data.userInfo.uid as string, fileIds).then(res => {
      if (res.success) {
        wx.showToast({
          title: '添加成功',
          icon: 'none'
        })
      } else {
        wx.showToast({
          title: '添加失败',
          icon: 'none'
        })
      }
    }).catch(err => {
      console.log(err);
      wx.showToast({
        title: '因网络原因操作失败',
        icon: 'none'
      })
    });
  },

  /**
   * 授权结束
   * @param e 
   */
  onAuthorize(e: any) {

    const userInfo = User.getUserInfoStorage();
    console.log(userInfo);

    this.setData({
      userInfo,
      isAuthorized: true
    })
  },

  /**
   * 浏览
   * @param e 
   */
  onView(e: any) {
    console.log('asd')
    this.setData({
      isDownloadingOrUploadingVisible: true
    })
    Viewer.viewDocument(e.detail.file,this.data.userInfo.uid as string).then(res => {
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
  onLoad(options: any) {
    const fileIds = options.fileIds.split('-');
    const init: Promise<GlobalDataType> = app.init();

    init.then(globalData => {
      const { isAuthorized, isLogin } = globalData;
      const userInfo = User.getUserInfoStorage();
      File.getShareFileList(fileIds).then(fileList => {
        this.setData({
          fileList: fileListFormatter(fileList),
          isAuthorized,
          isLogin,
          userInfo,
          isLoading: false,
        });
      })
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