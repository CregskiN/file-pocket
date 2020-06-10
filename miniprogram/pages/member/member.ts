import User from '../../models/User';
import Team from '../../models/Team';
import { CustomUserInfo } from '../../utils/typing';
import { memberListFormatter } from '../../utils/formatters';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    members: [] as FilePocket.MemberType[],
    teamInfo: {} as Response.TeamDetailType,
    userInfo: {} as CustomUserInfo,


    currentPageIndex: 1, // 成员页页码
    isBottom: false,
    isLazyLoading: false, // 是否锁定加载更多
  },

  /**
   * 踢除成员事件
   */
  onDelete(options: any) {
    const { uid } = options.detail;
    const { tid } = this.data.teamInfo;
    Team.deleteMember(uid, tid).then(res => {
      if (res.success) {
        if (uid as string === this.data.userInfo.uid) {
          wx.showToast({
            title: '退出成功'
          });
          wx.switchTab({
            url: '/pages/index/index'
          })
        } else {
          wx.showToast({
            title: '删除成功',
          });
          this._loadMoreMembers(tid, 1);
        }

      } else {
        wx.showToast({
          title: '删除失败'
        });
        this._loadMoreMembers(tid, 1);
      }

    }).catch(err => {
      console.log('删除失败', err);
    })

  },

  /**
   * 加载更多
   */
  onScrollToBottom() {
    if (!this.data.isLazyLoading) {
      this._loadMoreMembers(this.data.teamInfo.tid);
    } else if (!this.data.isBottom && this.data.isLazyLoading) {
      wx.showToast({
        title: '正在加载',
        icon: 'none',
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    const tid = options.tid;
    this._loadMoreMembers(tid, 1);
    const userInfo = User.getUserInfoStorage();
    Team.queryTeamInfoByTid(tid).then(teamInfo => {
      this._getUserGradeInTeam(tid, userInfo.uid as string).then(userGradeInTeam => {
        const newUserInfo = { ...userInfo, userGradeInTeam }
        this.setData({
          userInfo: newUserInfo,
          teamInfo
        })
      })
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
    console.log(this.data)
    if (this.data.teamInfo.tid && this.data.userInfo !== {}) {
      return {
        title: `来加入${this.data.teamInfo.teamName}吧！`,
        path: `/pages/detail/detail?tid=${this.data.teamInfo.tid}&action=join&type=join`,
        // imageUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg'
      }
    }
    return {
      title: `文件口袋出现异常`,
      path: `/pages/index/index`,
      // imageUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg'
    }
  },

  /**
   * 刷新成员列表.若需要获取第一页，需要显式地指定aimPIndex
   * @param tId 
   * @param aimPIndex 
   */
  _loadMoreMembers(tId: string, aimPIndex?: number) {
    const aimPageIndex = aimPIndex ? aimPIndex : this.data.currentPageIndex + 1;
    const tid = tId;

    if (!this.data.isBottom || aimPageIndex === 1) {
      Team.getTeamMemberListByTid(tid, aimPageIndex).then(res => {
        console.log(res);
        if (res.length) {
          res = memberListFormatter(res);
          if (aimPageIndex === 1) {
            // 刷新首页
            this.setData({
              members: res,
              isLazyLoading: false,
              currentPageIndex: aimPageIndex,
              isBottom: false,
            })
          } else {
            // 获取 >= 2页
            this.setData({
              members: [
                ...this.data.members,
                ...res
              ],
              isBottom: res.length === 10 ? false : true,
              isLazyLoading: false,
              currentPageIndex: aimPageIndex
            })
          }
        } else {
          if (aimPageIndex === 1) {
            wx.showToast({
              title: '出错，请联系管理员',
              icon: 'none'
            });
            this.setData({
              isBottom: true,
              isLazyLoading: false,
              members: [],
              currentPageIndex: aimPageIndex - 1,
            })
          } else {
            wx.showToast({
              title: '已显示全部成员',
              icon: 'none',
            });
            this.setData({
              isLazyLoading: false,
              isBottom: true,
              currentPageIndex: aimPageIndex - 1,
            })
          }
        }

      }).catch(err => {
        console.error(err);

      })
    }
  },

  /**
   * 获取uid在该项目组的权限
   * @param tid 
   */
  _getUserGradeInTeam(tid: string, uid: string) {
    return new Promise<number>((resolve, reject) => {
      Team.getMemberGradeInTeam(tid, uid).then(res => {
        if (res.success) {
          resolve(res.data.userGrade);
        }
      }).catch(err => {
        console.log('获取权限等级失败', err);
        // 反馈
      })
    })
  }

})