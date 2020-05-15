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
    isShareWindowVisible: false,

    searchResultFiles: [] as Response.FileType[], // 搜索结果
    isSearching: false,
    searchPageId: 1,
    isSearchAll: false,
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
        wx.showToast({
          title: '退出成功',
          icon: 'none'
        });
        this._refreshOfficialTeamList();
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
   * 分享项目组
   */
  onShare() {
    this.setData({
      isShareWindowVisible: true
    })
  },

  /**
* 完成授权逻辑，撤除授权窗口
*/
  onAuthorize() {
    const userInfo = User.getUserInfoStorage();
    this.setData({
      userInfo,
      isAuthorized: true,
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
      this._refreshOfficialTeamList().then(res => {
        this.setData({
          userInfo,
          isAuthorized,
          isLogin,
        })
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
  },

  /**
 * 刷新官方项目组列表
 */
  _refreshOfficialTeamList() {
    return new Promise<Response.OfficialTeam[]>((resolve, reject) => {
      Team.getOfficialTeamList().then(officialTeamList => {
        const newOfficialTeamList = teamListFormatter(officialTeamList);
        this.setData({
          officialTeamList: newOfficialTeamList as Response.OfficialTeam[],
        })
        resolve(newOfficialTeamList as Response.OfficialTeam[]);
      });
    }).catch(err => { // 报错逻辑的最后一道防线
      console.log('页面初始化错误', err);
    });
  },


})