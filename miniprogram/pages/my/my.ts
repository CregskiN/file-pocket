import User from "../../models/User";
import { GlobalDataType } from "../../utils/typing";

function getBgUrl() {
  enum bgUrls {
    "https://wx-interchange.oss.jellyfishmix.com/Fp94m5HstOyWGmwvtrtjCE-XbxYA", // 0
    "https://wx-interchange.oss.jellyfishmix.com/FgjrQaU05qnR5Es6O9r4Cs1Xsq-F",
    "https://wx-interchange.oss.jellyfishmix.com/FjCrA3HuMT4YGq3RdT3kL95wtDb2",
    "https://wx-interchange.oss.jellyfishmix.com/FsIWyS1mJZAyrt46YCGJQcGSQ95_",
    "https://wx-interchange.oss.jellyfishmix.com/FrtMhxjV-WYz29raur4Q3zwMbtN-",
    "https://wx-interchange.oss.jellyfishmix.com/FkvbLIpX1dXE14fVzt3hfKzQqJEx",
    "https://wx-interchange.oss.jellyfishmix.com/FpeOvTyvj8mCBYBLshJ-nHcXrKBq",
    "https://wx-interchange.oss.jellyfishmix.com/FhXnSLT6V-EmNdAy7LIXv5WSg85e",
    "https://wx-interchange.oss.jellyfishmix.com/Fgulm6n7R010n0UpFXghVScZ988u",
    "https://wx-interchange.oss.jellyfishmix.com/FtxYR6qDRAIlr8tUu_qh_sz-Ft5A",
  }
  const n = Math.floor(Math.random() * 10);
  // console.log('本次bgUrl的下标为', n);
  return bgUrls[n];
}

const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    bgUrl: "",
    userInfo: {},
    items: [
      {
        title: "我的收藏",
        baseUrl: "/pages/my_file/index",
        fontIconCLass: "",
        backIconClass: "",
      },
      {
        title: "浏览历史",
        baseUrl: "/pages/browsing-history/index",
        fontIconCLass: "",
        backIconClass: "",
      },
    ],

    isAuthorized: false,
    canShowAuthorizeWindow: false, // 是否可以展示授权框
  },

  /**
   * 修改背景
   */
  onChangeBg() {
    let bgUrl = getBgUrl();
    while (bgUrl === this.data.bgUrl) {
      bgUrl = getBgUrl();
    }
    this.setData({
      bgUrl,
    });
  },

  onDelete() {
    wx.showToast({
      title: "删除成功",
    });
  },

  /**
   * 关闭授权窗口
   */
  onCloseAuthorizeWindow() {
    this.setData({
      canShowAuthorizeWindow: false,
    });
  },

  /**
   * 展示授权窗口
   */
  onShowAuthorizeWindow() {
    this.setData({
      canShowAuthorizeWindow: true,
    });
  },

  /**
   * 完成授权逻辑，撤除授权窗口
   */
  onAuthorize() {
    const userInfo = User.getUserInfoStorage();
    this.setData({
      userInfo,
      isAuthorized: true,
    });
    this.onCloseAuthorizeWindow();
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const userInfo = User.getUserInfoStorage();
    console.log("My.onLoad获取 - ", userInfo);

    const bgUrl = getBgUrl();
    this.setData({
      bgUrl,
      userInfo,
      canShowAuthorizeWindow: false,
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    app.init();
    if (this.data.userInfo === {}) {
      const userInfo = User.getUserInfoStorage();
      this.setData({
        userInfo,
      });
    }
    if (!this.data.isAuthorized) {
      const init: Promise<GlobalDataType> = app.init();
      init.then((globalData) => {
        const { isAuthorized, isLogin } = globalData;
        const userInfo = User.getUserInfoStorage();
        this.setData({
          userInfo,
          isAuthorized,
          isLogin,
        });
      });
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(opts): WechatMiniprogram.Page.ICustomShareContent {
    console.log(opts.target);
    return {};
  },
});
