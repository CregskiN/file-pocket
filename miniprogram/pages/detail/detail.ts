import User from '../../models/User';
import Team from '../../models/Team';
import Upload from '../../models/Upload';
import { generateFileNameAuto } from '../../utils/util';
import { QiniuUploaderResData } from '../../utils/qiniuUploader'
import File from '../../models/File';
import { CustomUserInfo, GlobalDataType } from '../../utils/typing';
import { teamInfoFormatter } from '../../utils/formatters';
import moment from 'moment';
import Collection from '../../models/Collection';

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
  },

  onShowData() {
    console.log(this.data);
  },

  /**
 * 上传本地图片，上传多张的本质是多次触发选择事件
 * @param e 
 */
  onUploadLocalImg(e: any) {
    const chooseLocalImgs: WechatMiniprogram.ChooseImageSuccessCallbackResult = e.detail.chooseLocalImgs;
    const uploadCount = chooseLocalImgs.tempFilePaths.length;
    const promises: Promise<any>[] = [];
    chooseLocalImgs.tempFiles.forEach((value, index) => {
      const imgObject = {
        errMsg: chooseLocalImgs.errMsg,
        tempFilePaths: new Array(chooseLocalImgs.tempFilePaths[index]),
        tempFiles: new Array(chooseLocalImgs.tempFiles[index])
      }
      promises.push(Upload.uploadLocalImg(imgObject));
    });

    if (promises.length === uploadCount) {
      this._syncFileWithBackend(promises).then(res => {
        if (res.success) {
          wx.showToast({
            title: '上传成功'
          })
          this._getMoreFileList(this.data.teamInfo.tid, 1);
          this._refreshTeamInfo(this.data.teamInfo.tid);
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
    const promises: Promise<any>[] = [];
    fileObjects.tempFiles.forEach(fileObject => {
      promises.push(Upload.uploadMessageFile(fileObject));
    });

    if (promises.length === uploadCount) {
      this._syncFileWithBackend(promises).then(res => {
        if (res.success) {
          wx.showToast({
            title: '上传成功'
          });
          this._getMoreFileList(this.data.teamInfo.tid, 1);
          this._refreshTeamInfo(this.data.teamInfo.tid);
        }
      });
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
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    console.log('Detail.onload() - options', options);

    const { tid, action } = options;
    const init: Promise<GlobalDataType> = app.init();

    init.then(globalData => {
      const { isAuthorized, isLogin } = globalData;
      const userInfo = User.getUserInfoStorage();
      console.log(userInfo);

      const { uid } = userInfo;
      console.log('Detail.onload - globalData is', globalData);
      Team.queryTeamInfoByTid(tid).then(teamInfo => {
        this._getMoreFileList(tid, 1).then(res => {
          this.setData({
            isLoading: false,
            isAuthorized,
            isLogin,
            teamInfo: teamInfoFormatter(teamInfo) as Response.TeamDetailType,
            userInfo,
          });
        })

        console.log(isAuthorized, uid, action);
        console.log(isAuthorized && uid && action);


        // 已授权 + action -> 直接加入
        // 未授权 -> 在授权后加入
        if (isAuthorized && uid && action === 'join') {
          Team.enterTeamByTidAndUid(tid, uid).then(teamInfo => {
            wx.showToast({
              title: '加入成功',
              icon: 'success'
            })
            this.setData({
              teamInfo: teamInfoFormatter(teamInfo) as Response.TeamDetailType,
            })
          }).catch(err => {
            console.log('加入失败');
          })
        }
      });

    }).catch(err => { // 报错逻辑的最后一道防线
      console.log('页面初始化错误', err);
    });

    this._getMoreFileList(tid, 1); // 加载文件列表
    this._refreshTeamInfo(tid); // 刷新项目组信息


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
  },

  /**
   * 同步文件只后端
   * @param promises 
   */
  _syncFileWithBackend(promises: Promise<any>[]) {
    return new Promise<Response.UploadFileToTeamRes>((resolve, reject) => {
      Promise.all(promises).then((res) => {
        const uploadToTeamFiles: Request.SyncFileWithBackendFileType[] = [];
        const { uid, nickName } = User.getUserInfoStorage();
        const tid = this.data.teamInfo.tid;
        (res as QiniuUploaderResData[]).forEach((uploaderResData) => {
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
        })
        File.syncFileWithBackend(uploadToTeamFiles, tid, uid as string).then(res => {
          resolve(res);
        })
      }).catch(err => {
        console.log(err);
        //@TODO: 统一错误提示
        reject(err);
      })
    })

  },

  /**
   * 获取最新页的文件列表
   * @param tid 
   */
  _getMoreFileList(tid: string, pageId?: number) {
    return new Promise<Response.FileType[]>((resolve, reject) => {
      const pId = pageId ? pageId : this.data.pageId;
      const isBorrom = this.data.isBottom;

      if (!isBorrom) {
        Team.queryTeamFileList(tid, pId).then(newFiles => {
          newFiles.forEach(file => {
            file.isChecked = false;
            const chunks = file.fileName.split('.');
            file.mimeType = chunks[chunks.length - 1];
            file.creationTime = moment(file.creationTime).format('YYYY-MM-DD');
          })
          if (pageId === 1) {
            this.setData({
              files: newFiles,
              pageId: pId + 1,
            })
          } else {
            this.setData({
              files: [
                ...this.data.files,
                ...newFiles
              ],
              pageId: pId + 1,
            })
          }
          if (newFiles.length === 0) {
            this.setData({
              isBottom: true
            })
          }

          resolve();
        })
      }


    })
  },

  /**
   * 刷新项目组信息
   */
  _refreshTeamInfo(tid: string) {
    return new Promise((resovle, reject) => {
      Team.queryTeamInfoByTid(tid).then(teamInfo => {
        this.setData({
          teamInfo: teamInfoFormatter(teamInfo) as Response.TeamDetailType
        });
        resovle(teamInfo);
      })
    })

  }
})