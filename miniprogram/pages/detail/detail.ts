import User from '../../models/User';
import Team from '../../models/Team';
import Upload from '../../models/Upload';
import Collection from '../../models/Collection';
import File from '../../models/File';

import Viewer from '../../utils/Viewer';
import { CustomUserInfo, GlobalDataType, QiniuUploaderResData } from '../../utils/typing';
import { teamInfoFormatter, fileListFormatter, teamListFormatter, fileFormatter } from '../../utils/formatters';
import { generateFileNameAuto } from '../../utils/util';



const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupCreator: {},
    files: [] as Response.FileType[],
    selectCount: 0,
    selectList: [] as string[],
    teamInfo: {} as Response.TeamDetailType,
    userInfo: {} as CustomUserInfo,
    action: '', // 用户行为： join 则加入项目组，无则正常访问

    currentPageIndex: 1,
    isLazyLoading: false,

    uploadCount: -1,
    isUploading: false,

    isAuthorized: true,
    canShowAuthorizeWindow: true, // 是否可以展示授权框
    isLoading: true,

    isDeleting: false, // 保留变量，执行删除操作过渡动画

    isBottom: false, // 记录懒加载是否到头了

    renameFile: {} as Response.FileType,
    isRenaming: false,

    showTeamType: '', // 决定口袋UI的最终展示
    tempShowType: '', // 记录上一个状态的teamType

    isDownloadingOrUploadingVisible: false, // 是否显示上传中...下载中...
    downloadingOrUploadingLint: '',
    hasDownloadingOrUploadingCount: 1,
  },

  onShowData() {
    console.log(this.data);
  },

  /**
 * 上传本地图片，上传多张的本质是多次触发选择事件
 * @param e 
 */
  onUploadLocalImg(e: any) {
    this.setData({
      isDownloadingOrUploadingVisible: true
    })
    const chooseLocalImgs: WechatMiniprogram.ChooseImageSuccessCallbackResult = e.detail.chooseLocalImgs;
    const uploadCount = chooseLocalImgs.tempFilePaths.length;

    const QiniuReses: QiniuUploaderResData[] = [];
    this.setData({
      isDownloadingOrUploadingVisible: true,
      downloadingOrUploadingAll: uploadCount
    });
    for (let i = 0; i < uploadCount; i++) {
      const imgObject = {
        errMsg: chooseLocalImgs.errMsg,
        tempFilePaths: new Array(chooseLocalImgs.tempFilePaths[i]),
        tempFiles: new Array(chooseLocalImgs.tempFiles[i])
      };
      Upload.uploadLocalImg(imgObject).then(res => {
        QiniuReses.push(res as any);
        this.setData({
          isDownloadingOrUploadingVisible: true,
        });

        if (QiniuReses.length === uploadCount) {
          this.setData({
            downloadingOrUploadingLint: `正在同步文件至云端...`
          })
          this._syncFileWithBackend(QiniuReses).then(res => {
            if (res.success) {
              console.log('同步完成')
              this.setData({
                downloadingOrUploadingLint: '',
                isDownloadingOrUploadingVisible: false,
              })
              wx.showToast({
                title: '上传成功'
              })
              this._queryTeamFileList(this.data.teamInfo.tid, 1);
              this._refreshTeamInfo(this.data.teamInfo.tid);
            }
          })
        }
      })
    }




  },

  /**
   * 上传群聊文件
   * @param e 
   */
  onUploadMessageFile(e: any) {
    const fileObjects: WechatMiniprogram.ChooseMessageFileSuccessCallbackResult = e.detail.fileObjects;
    const uploadCount = fileObjects.tempFiles.length;

    console.log('上传群聊文件事件触发', fileObjects);
    const QiniuReses: QiniuUploaderResData[] = [];

    this.setData({
      downloadingOrUploadingLint: `正在上传 - ${this.data.hasDownloadingOrUploadingCount} / ${uploadCount}`,
      isDownloadingOrUploadingVisible: true,
      hasDownloadingOrUploadingCount: this.data.hasDownloadingOrUploadingCount + 1
    })

    for (let i = 0; i < uploadCount; i++) {

      Upload.uploadMessageFile(fileObjects.tempFiles[i]).then(res => {
        this.setData({
          downloadingOrUploadingLint: `正在上传 - ${this.data.hasDownloadingOrUploadingCount} / ${uploadCount}`,
          isDownloadingOrUploadingVisible: true,
          hasDownloadingOrUploadingCount: this.data.hasDownloadingOrUploadingCount + 1
        })
        QiniuReses.push(res as any);
        if (QiniuReses.length === uploadCount) {
          this.setData({
            downloadingOrUploadingLint: `正在同步文件至云端...`
          })
          this._syncFileWithBackend(QiniuReses).then(res => {
            if (res.success) {
              console.log('同步完成')
              this.setData({
                downloadingOrUploadingLint: '',
                isDownloadingOrUploadingVisible: false,
                hasDownloadingOrUploadingCount: 1,
              })
              wx.showToast({
                title: '上传成功'
              })
              this._queryTeamFileList(this.data.teamInfo.tid, 1);
              this._refreshTeamInfo(this.data.teamInfo.tid);
            }
          })
        }
      })

    }





  },

  /**
   *  批量删除
   * @param e 
   */
  onDeleteFile(e: any) {
    const { fileIds } = e.detail;
    const { tid } = this.data.teamInfo;
    File.deleteFiles(fileIds as string[], tid).then(res => {
      if (res.success) {
        wx.showToast({
          title: '删除成功'
        });
        this._queryTeamFileList(tid, 1);
        this._refreshTeamInfo(tid);
      }
    }).catch(err => {
      console.log(err);
    });

  },


  /**
   * 懒加载获取更多
   */
  onLoadMore() {
    if (!this.data.isLazyLoading) {
      this._queryTeamFileList(this.data.teamInfo.tid);
    } else if (!this.data.isBottom && this.data.isLazyLoading) {
      wx.showToast({
        title: '正在加载',
        icon: 'none',
      });
    }
  },

  /**
  * 完成授权逻辑，撤除授权窗口
  */
  onAuthorize() {
    const { tid } = this.data.teamInfo;
    const userInfo = User.getUserInfoStorage();
    this.onCloseAuthorizeWindow();
    this._enterTeam(tid, userInfo).then(tid => {
      if (tid) {
        // 加入成功
        wx.showToast({
          title: '加入成功',
        })
        this._userHasInTeam(tid, userInfo, true);
      } else {
        wx.showToast({
          title: '加入口袋失败',
          icon: 'none'
        })
      }
    }).catch(err => {
      wx.showToast({
        title: '请检查您的网络',
        icon: 'none'
      });
      console.error('加入口袋失败', err);
    })

  },

  /**
   * 添加至个人文件(收藏集)
   * @param e 
   */
  onAddToMyCollection(e: any) {
    if (!this.data.isAuthorized) {
      this.onShowAuthorizeWindow();
    } else {
      const { fileIds } = e.detail;
      Collection.addToMyCollectionFromTeam(this.data.userInfo.uid as string, fileIds as string[]).then(res => {
        if (res.success) {
          wx.showToast({
            title: '添加成功'

          });
        } else {
          wx.showToast({
            title: '添加失败',
            icon: 'none'
          })
        }
      })
    }
  },

  /**
   * 文件重命名
   * @param e 
   */
  onRename(e: any) {
    const { file } = e.detail;
    this.setData({
      renameFile: file,
      isRenaming: true,
    })
  },

  /**
   * 重命名成功
   * @param e 
   */
  onModifyComplete(e: any) {
    this.setData({
      isRenaming: false,
      currentPageIndex: 1
    });
    this._queryTeamFileList(this.data.teamInfo.tid, 1);
  },

  /**
   * 查看文件事件
   * @param e 
   */
  onView(e: any) {
    if (!this.data.isAuthorized) {
      this.onShowAuthorizeWindow();
    } else {
      this.setData({
        isDownloadingOrUploadingVisible: true
      })
      Viewer.viewDocument(e.detail.file, this.data.userInfo.uid as string).then(res => {
        this.setData({
          isDownloadingOrUploadingVisible: false
        })
      });
    }

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
   * 关闭重命名窗口
   */
  onModifyCancel() {
    this.setData({
      isRenaming: false,
    })
  },

  /**
   * 切换为管理员模式
   */
  onToggleManager() {
    this.setData({
      showTeamType: 'create',
      tempShowType: this.data.showTeamType,
    })
  },

  /**
   * 切换为用户模式
   */
  onToggleUser() {
    this.setData({
      showTeamType: this.data.tempShowType,
      tempShowType: ''
    })
  },

  /**
   * 选择文件事件
   * @param e 
   */
  onChangeFileIds(e: any) {
    const selectList = e.detail.fileIds;
    this.setData({
      selectList
    })
  },

  /**
   * 退出编辑模式。 
   */
  onOutEdit() {
    this.setData({
      selectList: []
    })
  },


  /**
   * 生命周期函数--监听页面加载
   * 逻辑：
   * 1. teamInfo.teamType===1 ? official展示 : normal
   * 2. normal -> 获取userGradeInTeam===1 ? create展示 : join展示
   * 3. 
   * 
   */
  onLoad(options: any) {
    console.log('Detail.onload() - options', options);

    const { tid, action } = options;
    const init: Promise<GlobalDataType> = app.init();

    init.then(globalData => {
      const { isAuthorized } = globalData;
      const userInfo = User.getUserInfoStorage();

      if (isAuthorized) {
        if (action === 'join') {
          // 判断用户身份：是否已经为项目组成员
          this._judgeIfUserInTeam(tid, userInfo).then(isUserInTeam => {
            if (isUserInTeam) {
              // 逻辑二：进入已加入的项目组
              wx.showToast({
                title: '您已加入此口袋',
                icon: 'none'
              })
              this._userHasInTeam(tid, userInfo, isAuthorized);
            } else {
              // 逻辑三：进入未加入的项目组
              this._enterTeam(tid, userInfo).then(tid => {
                if (tid) {
                  wx.showToast({
                    title: '加入成功',
                    icon: 'none'
                  })
                  this._userHasInTeam(tid, userInfo, isAuthorized);
                }
              })
            }
          })
        } else {
          this._userHasInTeam(tid, userInfo, isAuthorized);
        }
      } else {
        this._getTeamGrade(tid).then(teamGrade => {
          if (teamGrade === 1) {
            // 未授权进入官方口袋
            Team.queryTeamInfoByTid(tid).then(teamInfo => {
              this._queryTeamFileList(tid, 1);
              this.setData({
                isAuthorized,
                canShowAuthorizeWindow: false,
                userInfo,
                isLoading: false,
                showTeamType: 'official', // 对于未授权用户，不与展示
                teamInfo: teamInfoFormatter(teamInfo) as Response.TeamDetailType,
              });
            })
          } else {
            // 未授权进入其他口袋
            Team.queryTeamInfoByTid(tid).then(teamInfo => {
              this.setData({
                isAuthorized,
                userInfo,
                isLoading: false,
                showTeamType: '', // 对于未授权用户，不与展示
                teamInfo: teamInfoFormatter(teamInfo) as Response.TeamDetailType,
              });
            })
          }
        })
      }

    }).catch(err => {
      wx.showToast({
        title: '请检查网络',
        icon: 'none'
      });
      console.log('detail页初始化错误', err);
    });

  },

  /**
   * 逻辑一：进入已加入的项目组
   * @param tid 
   * @param userInfo 
   * @param isAuthorized 
   */
  _userHasInTeam(tid: string, userInfo: CustomUserInfo, isAuthorized: boolean) {
    Team.queryTeamInfoByTid(tid).then(teamInfo => {
      this._queryTeamFileList(teamInfo.tid, 1);
      this._getTeamGrade(tid).then(teamGrade => {
        if (teamGrade === 1) {
          // 为官方项目组
          this.setData({
            showTeamType: 'official',
            isAuthorized,
            userInfo,
            isLoading: false,
            teamInfo: teamInfoFormatter(teamInfo) as Response.TeamDetailType,
          })
        } else {
          // 非官方项目组
          this._getUserGradeInTeam(tid, userInfo.uid as string).then(userGradeInTeam => {
            if (userGradeInTeam === 1) {
              // 为我创建的项目组
              this.setData({
                showTeamType: 'create',
                isAuthorized,
                userInfo,
                isLoading: false,
                teamInfo: teamInfoFormatter(teamInfo) as Response.TeamDetailType,
              })
            } else if (userGradeInTeam === 3) {
              // 为我加入的项目组
              this.setData({
                showTeamType: 'join',
                isAuthorized,
                userInfo,
                isLoading: false,
                teamInfo: teamInfoFormatter(teamInfo) as Response.TeamDetailType,
              })
            }
          })
        }
      })

    })
  },

  /**
   * 加入项目组
   * @param tid 
   * @param userInfo 
   */
  _enterTeam(tid: string, userInfo: CustomUserInfo) {
    return new Promise<string>((resolve, reject) => {
      Team.enterTeamByTidAndUid(tid, userInfo.uid as string).then(res => {
        resolve(res.tid);
      }).catch(err => {
        reject(err);
      })
    })

  },

  /**
   * 判断用户身份：是否已经是项目组成员
   * @param tid 
   * @param uid 
   */
  _judgeIfUserInTeam(tid: string, userInfo: CustomUserInfo) {
    return new Promise<boolean>((resolve, reject) => {
      Team.getMemberGradeInTeam(tid, userInfo.uid as string).then(res => {
        if (res.success && res.data) {
          resolve(true);
        } else {
          resolve(false);
        }
      })
    })
  },

  /**
   * 获取口袋等级
   * @param tid 
   */
  _getTeamGrade(tid: string) {
    return new Promise<number>((resolve, reject) => {
      Team.queryTeamInfoByTid(tid).then(teamInfo => {
        resolve(teamInfo.grade);
      }).catch(err => {
        reject(err);
      })
    })
  },

  /**
   * 获取uid在该项目组的权限
   * @param tid 
   */
  _getUserGradeInTeam(tid: string, uid: string) {
    return new Promise<number>((resolve, reject) => {
      Team.getMemberGradeInTeam(tid, uid).then(res => {
        if (res.success && res.data) {
          resolve(res.data.userGrade);
        }
      }).catch(err => {
        console.log('获取权限失败', err);
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
    if (this.data.teamInfo.tid) {
      this._queryTeamFileList(this.data.teamInfo.tid, 1);
      this._refreshTeamInfo(this.data.teamInfo.tid);
    };
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
  onShareAppMessage(opts): any {

    /**
     * 分享文件
     */
    if (this.data.selectList.length) {
      const fileIds = this.data.selectList;
      let params = '';
      params += fileIds[0];
      for (let i = 1; i < fileIds.length; i++) {
        params += `-${fileIds[i]}`
      }
      if (fileIds.length !== 0) {
        return {
          title: `这里有${fileIds.length}个文件，请注意查收。`,
          path: `/pages/share/share?fileIds=${params}`,
        }
      }
    } else if (this.data.teamInfo.tid && this.data.userInfo !== {}) {
      /**
       * 邀请加入
       */
      return {
        title: `来加入${this.data.teamInfo.teamName}吧！`,
        path: `/pages/detail/detail?tid=${this.data.teamInfo.tid}&action=join`,
        // imageUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg'
      }

    }
  },

  /**
   * 同步文件只后端
   * @param promises 
   */
  _syncFileWithBackend(QiniuReses: any[]) {
    return new Promise<Response.UploadFileToTeamRes>((resolve, reject) => {
      this.setData({
        downloadingOrUploadingLint: '正在将文件同步至云端...'
      })
      const uploadToTeamFiles: Request.SyncFileWithBackendFileType[] = [];
      const { uid, nickName } = User.getUserInfoStorage();
      const tid = this.data.teamInfo.tid;
      (QiniuReses as QiniuUploaderResData[]).forEach((uploaderResData) => {
        uploadToTeamFiles.push({
          fileSize: uploaderResData.fsize,
          fileUrl: uploaderResData.fileUrl,
          fileKey: uploaderResData.key,
          fileHash: uploaderResData.hash,
          mimeType: uploaderResData.mimeType,
          fileName: uploaderResData.fileName ? uploaderResData.fileName : generateFileNameAuto(uploaderResData.mimeType, nickName as string)
        });
        if (uploadToTeamFiles.length === QiniuReses.length) {
          File.syncFileWithBackend(uploadToTeamFiles, tid, uid as string).then(res => {
            resolve(res);
          })
        }

      })
    })

  },

  /**
   * 获取最新页的文件列表
   * @param tid 
   */
  _queryTeamFileList(tId: string, aimPIndex?: number) {
    this.setData({
      isLazyLoading: true
    })

    const aimPageIndex = aimPIndex ? aimPIndex : this.data.currentPageIndex + 1;
    const tid = tId;

    if (!this.data.isBottom || aimPageIndex === 1) {
      Team.queryTeamFileList(tid, aimPageIndex).then(res => {
        if (res.length) {
          console.log(res);
          // 有文件返回
          res = fileListFormatter(res);
          if (aimPageIndex === 1) {
            // 对刷新页面
            this.setData({
              files: res,
              currentPageIndex: aimPageIndex,
              isLazyLoading: false,
              isBottom: false,
            })
          } else {
            this.setData({
              files: [
                ...this.data.files,
                ...res
              ],
              isBottom: res.length === 10 ? false : true,
              currentPageIndex: aimPageIndex,
              isLazyLoading: false,
            })
          }
        } else {
          // 无文件返回
          if (aimPageIndex === 1) {
            // 搜索第一页 + 无文件 => 空
            wx.showToast({
              title: '该口袋还没有上传文件',
              icon: 'none'
            });
            this.setData({
              files: [],
              isBottom: true,
              isLazyLoading: false,
              currentPageIndex: aimPageIndex - 1,
            })
          } else {
            // 搜索不是第一页 + 无文件 => 到底了
            wx.showToast({
              title: '已显示所有文件',
              icon: 'none'
            })
            this.setData({
              currentPageIndex: aimPageIndex - 1,
              isBottom: true,
              isLazyLoading: false,
            })
          }
        }
      }).catch(err => {
        console.error(err)
      })
    } else {
      wx.showToast({
        title: '已显示所有文件',
        icon: 'none'
      });
      /* this.setData({
        isLazyLoading: false,
      })
      setTimeout(() => {
        this.setData({
          isBottom: false,
        })
      }, 2000) */
    }
  },

  /**
   * 刷新项目组信息
   */
  _refreshTeamInfo(tid: string) {
    return new Promise<Response.TeamDetailType>((resovle, reject) => {
      Team.queryTeamInfoByTid(tid).then(teamInfo => {
        const teamType = this.data.teamInfo.teamType;
        if (teamType) {
          this.setData({
            teamInfo: {
              ...teamInfoFormatter(teamInfo) as Response.TeamDetailType,
              teamType
            }
          });
        } else {
          this.setData({
            teamInfo: {
              ...teamInfoFormatter(teamInfo) as Response.TeamDetailType,
            }
          });
        }
        resovle(teamInfo);
      }).catch(err => {
        reject(err);
      })
    })

  },



})