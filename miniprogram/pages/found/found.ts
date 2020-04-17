import User from '../../models/User';
import Https from '../../utils/https';

import { CustomUserInfo } from '../../utils/typing';
import { Response } from '../../../typings/response';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {} as CustomUserInfo,
    inputValue: '',
  },

  /**
   * 接收输入框失焦事件
   * @param e 
   */
  onFinish(e: any) {
    this.setData({
      inputValue: e.detail.inputValue
    })
  },

  /**
   * 返回
   */
  onBack() {
    wx.navigateBack()
  },

  /**
   * 完成
   */
  onComplete() {
    const options = {
      url: '/team/create_team',
      method: "POST" as "POST",
      data: {
        uid: this.data.userInfo.uid as string,
        teamName: this.data.inputValue ? this.data.inputValue : `${this.data.userInfo.nickName}的口袋` as string,
        teamAvatarUrl: this.data.userInfo.avatarUrl as string,
        teamGrade: 1 as number,
      }
    }
    Https.request<Request.CreateTeamReq, Response.CreateTeamRes>(options).then(res => {
      if (res.success) {
        wx.showToast({
          title: '创建成功！',
          duration: 1500,
        });
        setTimeout(() => {
          wx.switchTab({
            url: '/pages/index/index'
          })
        }, 1500)

      } else {
        wx.showModal({
          title: '操作失败',
          content: '点击"确定"以重试',
          success: (res) => {
            if (res.confirm) {
              console.log('重试');
            } else {
              console.log('返回');
            }
          }
        })
      }

    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const userInfo = User.getUserInfoStorage();
    console.log('found页初始化数据为 - ', userInfo);

    this.setData({
      userInfo
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