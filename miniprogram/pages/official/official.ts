import Team from '../../models/Team';

Page({
  /**
   * 页面的初始数据
   */
  data: {
    officialTeamList: [] as Response.OfficialTeam[],
    isShareWindowVisible: false,
    isLoading: true,
    lints: {
      loading: '正在初始化'
    }
  },

  /**
   * 邀请加入
   */
  onInvite() {

  },

  /**
   * 关闭分享框
   * @param e 
   */
  onCancel(e: any) {
    this.setData({
      isShareWindowVisible: false,
    })
  },

  /**
   * 重命名
   */
  onRename() {

  },

  /**
   * 退出项目组
   */
  onDropOut() {

  },

  /**
   * 分享项目组
   */
  onShare() {
    this.setData({
      isShareWindowVisible: true
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    Team.getOfficialTeamList().then(officialTeamList => {
      this.setData({
        officialTeamList,
        isLoading: false,
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
    return {

    }
  }
})