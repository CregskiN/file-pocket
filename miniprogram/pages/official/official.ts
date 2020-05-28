import Team from '../../models/Team';
import User from '../../models/User';
import { teamListFormatter, fileListFormatter, fileFormatter } from '../../utils/formatters'
import { CustomUserInfo, GlobalDataType } from '../../utils/typing';
import Collection from '../../models/Collection';

const app = getApp();

Page({
  /**
   * 页面的初始数据
   */
  data: {
    officialTeamList: [] as Response.OfficialTeam[],
    isLoading: true,
    userInfo: {} as CustomUserInfo,
    isAuthorized: true,
    isLogin: false,

    selectTeam: {} as Response.TeamDetailType,
    isShareWindowVisible: false,

    searchResultFiles: [] as Response.FileType[], // 搜索结果
    isSearching: false,
    searchPageId: 1,
    isSearchAll: false,
  },
	/**
	 * 取消邀请
	 * @param e 
	 */
  onShareCancel(e: any) {
    this.setData({
      isShareWindowVisible: false,
      selectTeam: {} as any,
    })
  },

  /**
   * 关闭搜索框
   */
  onShutUpSearcher() {
    this.setData({
      searchResultFiles: [],
      isSearchAll: false,
      searchPageId: 1,
      isSearching: false
    })
  },

  /**
   * 退出项目组
   */
  onDropOut(e: any) {
    const { tid } = e.detail;
    const { uid } = this.data.userInfo;
    Team.deleteMember(uid as string, tid).then(res => {
      if (res.success) {
        this._refreshOfficialTeamList(uid as string);
        wx.showToast({
          title: '退出成功',
          icon: 'none'
        });
      } else {
        wx.showToast({
          title: res.stateMsg.split('，')[1],
          icon: 'none'
        })
      }
    }).catch(err => {
      wx.showToast({
        title: '请检查您的网络',
        icon: 'none'
      })
    })
  },

	/**
	 * 邀请加入项目组 -> 设置selectTeam + 显示弹窗
	 * @param e 
	 */
  onShare(e: any) {
    console.log(e)
    this.setData({
      selectTeam: e.detail.selectTeam,
      isShareWindowVisible: true,
    })
  },

  /**
  * 完成授权逻辑，撤除授权窗口
  */
  onAuthorize() {
    const userInfo = User.getUserInfoStorage();
    this._refreshOfficialTeamList(userInfo.uid as string).then(no => {
      this.setData({
        userInfo,
        isAuthorized: true,
      })
    })


  },

  /**
   * 开始搜索
   * @param e 
   */
  onSearch(e: any) {
    const { keywords } = e.detail;
    if (keywords) {
      const promises = [];
      for (const team of this.data.officialTeamList) {
        promises.push(Team.queryTeamFilesByKeywords(team.tid, keywords, this.data.searchPageId, team.teamName))
      }
      Promise.all(promises).then(res => {
        const searchResultFiles = [];
        for (const fileList of res) {
          for (const file of fileList) {
            searchResultFiles.push(fileFormatter(file));
          }
        }
        console.log(searchResultFiles);

        this.setData({
          searchResultFiles,
          searchPageId: this.data.searchPageId + 1
        })
      }).catch(err => {
        console.log(err);

      })
    }

  },


  /**
   * 加载更多
   * @param e 
   */
  onSearchMore(e: any) {
    const { keywords } = e.detail;
    if (keywords) {
      if (!this.data.isSearchAll) {
        const promises = [];
        for (const team of this.data.officialTeamList) {
          promises.push(Team.queryTeamFilesByKeywords(team.tid, keywords, this.data.searchPageId, team.teamName))
        }
        Promise.all(promises).then(res => {
          const searchResultFiles = this.data.searchResultFiles;
          const moreSearchResultFiles: Response.FileType[] = [];

          for (const fileList of res) {
            if (fileList.length) {
              for (const file of fileList) {
                moreSearchResultFiles.push(fileFormatter(file));
              }
            }

          }
          console.log(searchResultFiles);
          if (!moreSearchResultFiles.length) {
            this.setData({
              isSearchAll: true
            })
          }
          searchResultFiles.push(...moreSearchResultFiles);
          this.setData({
            searchResultFiles: searchResultFiles,
            searchPageId: this.data.searchPageId + 1
          })
        }).catch(err => {
          console.log(err);

        })
      }

    }
  },


  /**
   * 清空搜索结果
   */
  onCleanResult() {
    // this.setData({
    //   searchResultFiles: []
    // })
  },

  /**
 * 添加至个人文件(收藏集)
 * @param e 
 */
  onAddToMyCollection(e: any) {
    console.log(e);

    const { fileIds } = e.detail;
    Collection.addToMyCollectionFromTeam(this.data.userInfo.uid as string, fileIds as string[]).then(res => {
      if (res.success) {
        wx.showToast({
          title: '添加成功'
        })
      } else {
        wx.showToast({
          title: '添加失败'
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    const init: Promise<GlobalDataType> = app.init();

    init.then(globalData => {
      const { isAuthorized, isLogin } = globalData;
      const userInfo = User.getUserInfoStorage();
      if (userInfo.uid) {
        this._refreshOfficialTeamList(userInfo.uid as string);
      }
      this.setData({
        userInfo,
        isAuthorized,
        isLogin,
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
    if (this.data.userInfo.uid) {
      this._refreshOfficialTeamList(this.data.userInfo.uid);
    }
    if (!this.data.isAuthorized) {
      const init: Promise<GlobalDataType> = app.init();
      init.then(globalData => {
        const { isAuthorized, isLogin } = globalData;
        const userInfo = User.getUserInfoStorage();
        if (userInfo.uid) {
          this._refreshOfficialTeamList(userInfo.uid as string);
        }
        this.setData({
          userInfo,
          isAuthorized,
          isLogin,
        })
      })
    }

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
    console.log(this.data.selectTeam.tid)
    return {
      title: `快来加入${this.data.selectTeam.teamName}吧！`,
      path: `/pages/detail/detail?tid=${this.data.selectTeam.tid}&action=join`
    }
  },

  /**
 * 刷新官方项目组列表
 */
  _refreshOfficialTeamList(uid: string) {
    return new Promise<Response.OfficialTeam[]>((resolve, reject) => {
      Team.getOfficialTeamListAboutMe(uid).then(officialTeamList => {
        const newOfficialTeamList = teamListFormatter(officialTeamList);
        this.setData({
          officialTeamList: newOfficialTeamList as Response.OfficialTeam[],
        })
        resolve(newOfficialTeamList as Response.OfficialTeam[]);
      });
    }).catch(err => {
      wx.showToast({
        title: '尚未授权'
      })
      console.log('页面初始化错误', err);
    });
  },


})