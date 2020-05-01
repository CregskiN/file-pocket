import User from '../../models/User';
import Team from '../../models/Team';
import Upload from '../../models/Upload';
import { generateFileNameAuto } from '../../utils/util';
import { fileCatagory, QiniuUploaderResData } from '../../utils/typing'
import File from '../../models/File';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupCreator: {},
    files: [] as Response.FileType[],
    isLogin: true,
    selectCount: 0,
    selectList: [] as string[],
    tid: '',
    teamInfo: {} as Response.TeamDetailType,

    uploadCount: -1,
    isUploading: false,
  },


  /**
 * 上传本地图片，上传多张的本质是多次触发选择事件
 * @param e 
 */
  onUploadLocalImg(e: any) {
    return new Promise((resolve, reject) => {
      const chooseLocalImgs: WechatMiniprogram.ChooseImageSuccessCallbackResult = e.detail.chooseLocalImgs;
      this.setData({
        uploadCount: chooseLocalImgs.tempFilePaths.length
      })
      const promises: Promise<any>[] = [];
      chooseLocalImgs.tempFiles.forEach((value, index) => {
        const imgObject = {
          errMsg: chooseLocalImgs.errMsg,
          tempFilePaths: new Array(chooseLocalImgs.tempFilePaths[index]),
          tempFiles: new Array(chooseLocalImgs.tempFiles[index])
        }
        promises.push(Upload.uploadLocalImg(imgObject));
      });

      if (promises.length === chooseLocalImgs.tempFilePaths.length) {
        Promise.all(promises).then((res) => {
          const uploadToTeamFiles: Request.SyncFileWithBackendReq = [];
          (res as QiniuUploaderResData[]).forEach((uploaderResData) => {
            const { uid, nickName } = User.getUserInfoStorage();
            uploadToTeamFiles.push({
              fileSize: uploaderResData.fsize,
              fileUrl: uploaderResData.fileUrl,
              key: uploaderResData.key,
              hash: uploaderResData.hash,
              mimeType: uploaderResData.mimeType,
              tid: this.data.teamInfo.tid,
              uid: uid as string,
              fileName: generateFileNameAuto(uploaderResData.mimeType, nickName as string)
            });
            File.syncFileWithBackend(uploadToTeamFiles).then(res => {
              resolve(res);
            })
          })
        }).catch(err => {
          reject(err);
        })
      }


    })

  },

  /**
   * 上传群聊文件
   * @param e 
   */
  onUploadMessageFile(e: any) {
    return new Promise((resolve, reject) => {
      const fileObjects: WechatMiniprogram.ChooseMessageFileSuccessCallbackResult = e.detail.fileObjects;
      const pormises: Promise<any>[] = [];
      fileObjects.tempFiles.forEach(fileObject => {
        pormises.push(Upload.uploadMessageFile(fileObject));
      })
      Promise.all(pormises).then(res => {
        resolve(res);
      }).catch(err => {
        reject(err);
      })
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    if (options.tid) {
      Team.getTeamInfoByTid('1717d492d49').then(teamInfo => {
        this.setData({
          teamInfo: teamInfo
        })
        Team.queryTeamFileList('1717d492d49', 1).then(res => {
          res.forEach(file => {
            file.isChecked = false;
          })
          this.setData({
            files: res
          })

        })

      })
    }

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
    console.log(opts.target)
    return {}
  }
})