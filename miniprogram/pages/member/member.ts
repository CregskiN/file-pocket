import moment from 'moment';
import User from '../../models/User';
import Team from '../../models/Team';
import { CustomUserInfo } from '../../utils/typing';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    members: [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}] as FilePocket.MemberType[],
    teamInfo: {} as Response.TeamDetailType,
    userInfo: {} as CustomUserInfo,
  },

  /**
   * 踢除成员事件
   */
  onDelete(options: any) {
    const { uid, tid } = options.detail;


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    const tid = options.tid;
    Team.getTeamMemberListByTid(tid).then(memberList => {
      memberList.forEach(member => {
        member.creationTime = moment(member.creationTime).format('YYYY-MM-DD');
      });
      const userInfo = User.getUserInfoStorage();
      Team.queryTeamInfoByTid(tid).then(teamInfo => {
        this.setData({
          members: [
            ...memberList,
            ...this.data.members,
          ],
          userInfo,
          teamInfo
        })
      })

    }).catch(err => {
      console.log(err);
    });

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
    console.log(this.data)
    if (this.data.teamInfo.tid && this.data.userInfo !== {}) {
      return {
        title: `来加入${this.data.teamInfo.teamName}吧！`,
        path: `/pages/detail/detail?tid=${this.data.teamInfo.tid}&action=join`,
        // imageUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg'
      }
    }
    return {
      title: `文件口袋出现异常`,
      path: `/pages/index/index`,
      // imageUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg'
    }
  }
})