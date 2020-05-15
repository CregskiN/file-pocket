import User from '../../models/User';
import Team from '../../models/Team';
import Upload from '../../models/Upload';
import Collection from '../../models/Collection';
import File from '../../models/File';

import Viewer from '../../utils/Viewer';
import { CustomUserInfo, GlobalDataType, QiniuUploaderResData } from '../../utils/typing';
import { teamInfoFormatter, fileListFormatter } from '../../utils/formatters';
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
    tid: '',
    teamInfo: {} as Response.TeamDetailType,
    userInfo: {} as CustomUserInfo,

    pageId: 1,
    isLazyLoading: false,

    uploadCount: -1,
    isUploading: false,

    isAuthorized: true,
    isLoading: true,

    isDeleting: false, // 保留变量，执行删除操作过渡动画

    isBottom: false, // 记录懒加载是否到头了

    renameFile: {} as Response.FileType,
    isRenaming: false,

    type: '', // 详情类型：normal official
    tempType: '', // 记录上一个状态的type

    isDownloadingOrUploadingVisible: false, // 是否显示上传中...下载中...
    downloadingOrUploadingLint: '',
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
      downloadingOrUploadingLint: `正在上传 - 1 / ${uploadCount}`,
      isDownloadingOrUploadingVisible: true,
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
          downloadingOrUploadingLint: `正在上传 - ${i + 2} / ${uploadCount}`,
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
              this._getMoreFileList(this.data.teamInfo.tid, 1);
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
      downloadingOrUploadingLint: `正在上传 - 1 / ${uploadCount}`,
      isDownloadingOrUploadingVisible: true,
    });
    for (let i = 0; i < uploadCount; i++) {
      Upload.uploadMessageFile(fileObjects.tempFiles[i]).then(res => {
        this.setData({
          downloadingOrUploadingLint: `正在上传 - ${i + 1} / ${uploadCount}`,
          isDownloadingOrUploadingVisible: true,
        });
        QiniuReses.push(res as any);
        // console.log('QiniuReses', QiniuReses);
        // console.log('QiniuReses.length', QiniuReses.length);
        // console.log('uploadCount', uploadCount);
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
              this._getMoreFileList(this.data.teamInfo.tid, 1);
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
        this._getMoreFileList(tid, 1);
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
    this._getMoreFileList(this.data.teamInfo.tid).then(res => {
      this.setData({
        isLazyLoading: false,
      })
    });
  },

  /**
  * 完成授权逻辑，撤除授权窗口
  */
  onAuthorize() {
    const { tid } = this.data.teamInfo;
    const userInfo = User.getUserInfoStorage();
    const { uid } = userInfo;
    console.log(userInfo);

    Team.enterTeamByTidAndUid(tid, (uid as string)).then(teamInfo => {
      wx.showToast({
        title: '加入成功'
      })
      this.setData({
        teamInfo: teamInfoFormatter(teamInfo) as Response.TeamDetailType,
        isAuthorized: true,
        userInfo,
      });
    }).catch(err => {
      console.log('加入失败', err);
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
  onRenameComplete(e: any) {
    const { uid } = this.data.userInfo;
    const { fileId } = this.data.renameFile;
    const { newFileName } = e.detail;
    const files = this.data.files;
    File.renameFile(uid as string, fileId, newFileName).then(newFile => {
      if (newFile) {
        for (let i = 0; i < files.length; i++) {
          if (files[i].fileId === newFile.fileId) {
            files[i] = newFile;
          }
        }
        this.setData({
          files: fileListFormatter(files),
          isRenaming: false,
          renameFile: {} as any,
        })
        wx.showToast({
          title: '操作成功'
        })
      }
    }).catch(err => {
      wx.showToast({
        title: '操作失败'
      })
      console.log('文件重命名失败', err);
    })
  },

  /**
   * 查看文件事件
   * @param e 
   */
  onView(e: any) {
    this.setData({
      isDownloadingOrUploadingVisible: true
    })
    Viewer.viewDocument(e.detail.file).then(res => {
      if ((res as any).success) {
        this.setData({
          isDownloadingOrUploadingVisible: false
        })
      }
    });
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
      teamInfo: { ...this.data.teamInfo, teamType: 'create' },
      tempType: this.data.teamInfo.teamType,
    })
  },

  /**
   * 切换为用户模式
   */
  onToggleUser() {
    this.setData({
      teamInfo: { ...this.data.teamInfo, teamType: this.data.tempType },
      tempType: ''
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    console.log('Detail.onload() - options', options);

    const { tid, action, type } = options;
    const init: Promise<GlobalDataType> = app.init();

    init.then(globalData => {
      const { isAuthorized, isLogin } = globalData;
      const userInfo = User.getUserInfoStorage();

      const { uid } = userInfo;
      console.log('Detail.onload - globalData is', globalData);
      this._refreshTeamInfo(tid).then(teamInfo => {
        this.setData({
          type,
          isAuthorized,
          isLogin,
          userInfo,
          isLoading: false,
        });
      });
      this._getMoreFileList(tid, 1);
      // 已授权 + action -> 直接加入
      // 未授权 -> 在授权后加入
      if (isAuthorized && uid && action === 'join') {
        Team.enterTeamByTidAndUid(tid, uid).then(teamInfo => {

          wx.showToast({
            title: '加入成功',
            icon: 'success'
          });
          this._getUserGradeInTeam(teamInfo.tid).then(userGradeInTeam => {
            this.setData({
              teamInfo: teamInfoFormatter(teamInfo, userGradeInTeam) as Response.TeamDetailType,
            });
          })

        }).catch(err => {
          console.log('加入失败');
        })
      }
    }).catch(err => { // 报错逻辑的最后一道防线
      console.log('页面初始化错误', err);
    });

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
          tid: this.data.teamInfo.tid,
          uid: uid as string,
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
  _getMoreFileList(tid: string, pageId?: number) {
    return new Promise((resolve, reject) => {
      const pId = pageId ? pageId : this.data.pageId;
      const isBorrom = this.data.isBottom;

      if (!isBorrom || pageId === 1) {
        Team.queryTeamFileList(tid, pId).then(newFiles => {
          newFiles = fileListFormatter(newFiles);
          if (pageId === 1) {
            this.setData({
              files: newFiles,
              pageId: pId + 1,
            })
            resolve(newFiles);
          } else {
            this.setData({
              files: [
                ...this.data.files,
                ...newFiles
              ],
              pageId: pId + 1,
            });
            resolve(newFiles);
          }
          if (newFiles.length === 0) {
            this.setData({
              isBottom: true
            })
          }
        }).catch(err => {
          console.log('获取文件列表失败', err);
          reject(err);
        })
      }


    })
  },

  /**
   * 刷新项目组信息
   */
  _refreshTeamInfo(tid: string) {
    return new Promise<Response.TeamDetailType>((resovle, reject) => {
      Team.queryTeamInfoByTid(tid).then(teamInfo => {
        this.setData({
          teamInfo: teamInfoFormatter(teamInfo) as Response.TeamDetailType
        });
        resovle(teamInfo);
      }).catch(err => {
        reject(err);
      })
    })

  },


  /**
   * 获取uid在该项目组的权限
   * @param tid 
   */
  _getUserGradeInTeam(tid: string) {
    return new Promise<number>((resolve, reject) => {
      Team.getTeamMemberListByTid(tid).then(res => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].uid === this.data.userInfo.uid) {
            resolve(res[i].userGrade);
            break;
          }
        }

      })
    })

  }
})