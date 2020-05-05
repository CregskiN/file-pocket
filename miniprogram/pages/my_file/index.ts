import Upload from '../../models/Upload';
import Collection from '../../models/Collection';
import File from '../../models/File';
import { collectionFileInfoFormatter } from '../../utils/formatters';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    fileList: [] as Response.CollectionFileType[],
    pageIndex: 1,
    collectionInfo: {
      collectionId: ''
    },
    uid: '',
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
      
    }
  },

  /**
   * 删除个人文件
   * @param e 
   */
  onDeleteFile(e: any) {
    const { fileIds } = e.detail;
    const { collectionId } = this.data.collectionInfo;
    File.deleteMyCollectionFiles(collectionId, fileIds).then(res => {
      if (res.success) {
        this._QueryMoreFileList(this.data.uid, 1).then(res => {
          wx.showToast({
            title: '删除成功'
          });
        });
      } else {
        wx.showToast({
          title: '删除失败'
        });
      }
    }).catch(err => {
      console.log('删除收藏集文件失败', err);
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    console.log('My_File.onLoad()', options);

    const { uid } = options;
    this._QueryMoreFileList(uid, 1).then(res => {
      this.setData({
        uid
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
    console.log(opts.target)
    return {}
  },

  /**
   * 辅助函数 - 分页查询文件列表
   * @param uid 
   * @param pageIndex 
   */
  _QueryMoreFileList(uid: string, pageIndex: number) {
    return new Promise((resolve, reject) => {
      Collection.queryMyCollectionFileList(uid, pageIndex).then(fileList => {
        if (pageIndex === 1) {
          this.setData({
            fileList: collectionFileInfoFormatter(fileList),
            pageIndex: pageIndex + 1
          })
        } else if (pageIndex !== 1) {
          this.setData({
            fileList: [
              ...this.data.fileList,
              ...collectionFileInfoFormatter(fileList)
            ],
            pageIndex: pageIndex + 1
          })
        }
        if (this.data.collectionInfo.collectionId === '') {
          this.setData({
            collectionInfo: {
              collectionId: fileList[0].collectionId,
            }
          })
        }

        resolve();
      })
    })
  }
})