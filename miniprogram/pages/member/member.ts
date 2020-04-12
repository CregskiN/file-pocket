import User from '../../models/User';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    tid: -1,
    members: [{
      uid: 0,
      tid: 1,
      username: '产品大刘',
      createdTeamCounts: 20,
      managedTeamCounts: 30,
      joinedTeamCounts: 40,
      avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
    }, {
      uid: 1,
      tid: 1,
      username: '产品良木',
      createdTeamCounts: 20,
      managedTeamCounts: 30,
      joinedTeamCounts: 40,
      avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
    }, {
      uid: 2,
      tid: 1,
      username: '后端士杰',
      createdTeamCounts: 20,
      managedTeamCounts: 30,
      joinedTeamCounts: 40,
      avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
    }, {
      uid: 3,
      tid: 1,
      username: '前端老吴',
      createdTeamCounts: 20,
      managedTeamCounts: 30,
      joinedTeamCounts: 40,
      avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
    }, {
      uid: 3,
      tid: 1,
      username: '前端老吴',
      createdTeamCounts: 20,
      managedTeamCounts: 30,
      joinedTeamCounts: 40,
      avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
    }, {
      uid: 3,
      tid: 1,
      username: '前端老吴',
      createdTeamCounts: 20,
      managedTeamCounts: 30,
      joinedTeamCounts: 40,
      avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
    }, {
      uid: 3,
      tid: 1,
      username: '前端老吴',
      createdTeamCounts: 20,
      managedTeamCounts: 30,
      joinedTeamCounts: 40,
      avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
    }, {
      uid: 3,
      tid: 1,
      username: '前端老吴',
      createdTeamCounts: 20,
      managedTeamCounts: 30,
      joinedTeamCounts: 40,
      avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
    }, {
      uid: 3,
      tid: 1,
      username: '前端老吴',
      createdTeamCounts: 20,
      managedTeamCounts: 30,
      joinedTeamCounts: 40,
      avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
    }]
  },

  /**
   * 踢除成员事件
   */
  onDelete(options: any) {
    const { uid, tid } = options.detail;


  },


  /**
   * 一键邀请更多好友
   */
  onInvite() {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    console.log('member 页面 onload获取 - ', options);
    const { nickName } = User.getUserInfo();
    const { tid } = options;

    this.setData({
      tid,
      nickName,
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
    console.log(opts.target)
    if (this.data.tid !== -1 && this.data.nickName !== '') {
      return {
        title: `我是${this.data.nickName}`,
        path: `/pages/detail/detail?tid=${this.data.members.length}`,
        imageUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
      }
    }
    return {
      title: `小程序卡片转发出错，请不要点击`,
      path: `/pages/detail/detail`,
      imageUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
    }
  }
})