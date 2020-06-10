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
    canShowAuthorizeWindow: false, // 是否可以展示授权框
    isLogin: false,

    selectTeam: {} as Response.TeamDetailType,
    isShareWindowVisible: false,

    searchResultFiles: [] as Response.FileType[], // 搜索结果
    isDownloadingOrUploadingVisible: false,
    currentPageIndex: 1,
    isBottom: false,

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
      currentPageIndex: 1,
      isBottom: false
    })
  },

  /**
   * 退出项目组
   */
  onDropOut(e: any) {
    if (!this.data.isAuthorized) {
      this.setData({
        canShowAuthorizeWindow: true,
      });
    } else {
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
    }

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
   * 关闭授权窗口
   */
  onCloseAuthorizeWindow() {
    this.setData({
      canShowAuthorizeWindow: false,
    })
  },

  /**
   * 展示授权窗口
   */
  onShowAuthorizeWindow() {
    this.setData({
      canShowAuthorizeWindow: true,
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
      });
      this.onCloseAuthorizeWindow();
    })
  },

  /**
   * 开始搜索
   * @param e 
   */
  onSearch(e: any) {
    const { keywords } = e.detail;
    this.onShowDownloading();
    this.setData({
      currentPageIndex: 1,
      searchResultFiles: [],
      isBottom: false,
    });
    if (keywords) {
      this._queryTeamFile(keywords, 1).then(no => {
        this.hideDownloading();
      });
    }
  },


  /**
   * 加载更多
   * @param e 
   */
  onSearchMore(e: any) {
    const { keywords } = e.detail;
    if (keywords) {
      this._queryTeamFile(keywords);
    }
  },

  /**
   * 展示正在下载窗口
   */
  onShowDownloading() {
    this.setData({
      isDownloadingOrUploadingVisible: true
    })
  },

  /**
   * 隐藏正在下载
   */
  hideDownloading() {
    this.setData({
      isDownloadingOrUploadingVisible: false
    })
  },

  /**
 * 添加至个人文件(收藏集)
 * @param e 
 */
  onAddToMyCollection(e: any) {
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

      if (isAuthorized) {
        // 已授权用户
        if (userInfo.uid) {
          // 展示与我相关的官方口袋
          this._refreshOfficialTeamList(userInfo.uid as string);
        }
      } else {
        // 未授权用户
        // 展示所有官方口袋
        this._getAllOfficialTeamList();
      }

      this.setData({
        userInfo,
        isAuthorized,
        isLogin,
        canShowAuthorizeWindow: false,
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
      // 有uid就刷新
      this._refreshOfficialTeamList(this.data.userInfo.uid);
    }
    if (!this.data.isAuthorized) {
      // 如果用户onload加载时未授权
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
   * 查询所有的官方项目组
   */
  _getAllOfficialTeamList() {
    Team.getOfficialTeamList().then(res => {
      if (res.length) {
        this.setData({
          officialTeamList: res
        })
      } else {
        wx.showToast({
          title: '官方口袋列表为空',
          icon: 'none'
        });
      }
    }).catch(err => {
      wx.showToast({
        title: '请检查网络',
        icon: 'none'
      });
      console.error('获取官方项目组失败', err);
    })

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

  /**
   * 搜索，不传pageIndex则按page.data的currentPageIndex搜索
   * @param keyword 
   * @param tidList 
   * @param aimPageIndex 
   */
  _queryTeamFile(keyword: string, aimPIndex?: number) {
    return new Promise((resolve, reject) => {
      if (!this.data.isBottom) {
        const aimPageIndex = aimPIndex ? aimPIndex : this.data.currentPageIndex + 1;

        const tidList: string[] = [];
        this.data.officialTeamList.forEach(officialTeam => {
          // 检索的是现有的官方口袋
          tidList.push(officialTeam.tid);
        });

        Team.queryTeamFilesByKeywords(tidList, keyword, aimPageIndex).then(res => {
          if (res.length !== 0) {
            // 搜索结果不为空
            res = fileListFormatter(res);
            if (aimPageIndex === 1) {
              // 刷新首页
              this.setData({
                searchResultFiles: res,
                isLazyLoading: false,
                currentPageIndex: aimPageIndex,
                isBottom: false,
              })
            } else {
              this.setData({
                searchResultFiles: [
                  ...this.data.searchResultFiles,
                  ...res
                ],
                currentPageIndex: aimPageIndex,
                isBottom: res.length === 10 ? false : true,
              });
            }
            resolve();
          } else {
            if (aimPageIndex === 1) {
              // 搜索第一页 && 搜索结果为空 => 没有搜索结果
              wx.showToast({
                title: '未找到您搜索的文件',
                icon: 'none'
              });
              this.setData({
                searchResultFiles: [],
                currentPageIndex: aimPageIndex - 1,
                isBottom: true,
              });
              resolve();
            } else {
              // 搜索非第一页 && 搜索为空 => 到底了
              wx.showToast({
                title: '已显示所有文件',
                icon: 'none'
              });
              this.setData({
                currentPageIndex: aimPageIndex,
                isBottom: true,
              });
              resolve();
            }
          }
        }).catch(err => {
          wx.showToast({
            title: '请检查网络',
            icon: 'none'
          })
        })
      } else {
        wx.showToast({
          title: '已显示所有文件',
          icon: 'none'
        });
        /* setTimeout(() => {
          this.setData({
            isBottom: false,
          })
        }, 2000) */
      }


    })
  }


})