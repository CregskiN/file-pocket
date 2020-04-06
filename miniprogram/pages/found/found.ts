import User from '../../models/User';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    creatorAvatarUrl: '',
    creatorNickName: '',
    theme: '项目名称',
    isSelected: false,
  },

  onSelect() {
    this.setData({
      isSelected: !this.data.isSelected
    })
  },
  onBack() {
    wx.navigateBack()
  },
  onComplete() {
    wx.showToast({
      title: '创建成功',
    });
    setTimeout(() => {
      wx.navigateBack()
    }, 1000)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const userInfo = User.getUserInfo();
    this.setData({
      creatorAvatarUrl: userInfo!.avatarUrl,
      creatorNickName: userInfo!.nickName
    })
    wx.showShareMenu({
      withShareTicket: true
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
    console.log(opts)
    return {
      title: '加入我的项目组吧！',
      path: '/pages/detail/detail',
      imageUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg'
    }
  }
})