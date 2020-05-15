import Collection from '../../models/Collection';
import File from '../../models/File';

import Viewer from '../../utils/Viewer';
import { teamListFormatter, fileListFormatter, collectionFileListFormatter, collectionFileFormatter } from '../../utils/formatters';
import Team from '../../models/Team';


Page({

  /**
   * 页面的初始数据
   */
  data: {
    files: [] as Response.CollectionFileType[],
    pageIndex: 1,
    collectionInfo: {
      collectionId: ''
    },
    uid: '',

    isTeamSelectorVisible: false,
    selectTeamInfo: {},
    fileIds: [] as string[],

    isRenaming: false,
    renameFile: {} as Response.FileType,


    createdTeamList: [] as Response.TeamDetailType[],
    joinedTeamList: [] as Response.TeamDetailType[],
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
        this._queryMoreFileList(this.data.uid, 1).then(res => {
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
   * 在线查看
   * @param e 
   */
  onView(e: any) {
    Viewer.viewDocument(e.detail.file);
  },

  /**
   * 添加至项目组
   * @param e
   */
  onAddToTeam(e: any) {
    console.log(e)
    if (e.detail.fileId && e.detail.fileId.length !== 0) {
      this.setData({
        fileIds: new Array(e.detail.fileId),
        isTeamSelectorVisible: true,
      })
    } else if (e.detail.fileIds && e.detail.fileIds.length !== 0) {
      this.setData({
        fileIds: e.detail.fileIds,
        isTeamSelectorVisible: true,
      })
    }

  },

  /**
   * 取消事件
   * @param e 
   */
  onCancel(e: any) {
    this.setData({
      isTeamSelectorVisible: false
    })
  },

  /**
   * 完成事件
   * @param e 
   */
  onComplete(e: any) {
    const { teamList } = e.detail;
    const promises = [];
    for (const tid of teamList) {
      promises.push(Team.receiveFilesFromCollection(tid, this.data.uid, this.data.fileIds));
    }
    Promise.all(promises).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);

    })
  },

  /**
   * 多选状态下选择文件
   * @param e 
   */
  onChangeFileIds(e: any) {
    const { fileIds } = e.detail;
    this.setData({
      fileIds
    })
  },

  onModifyCancel() {
    this.setData({
      isRenaming: false
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
    const { uid } = this.data;;
    const { fileId } = this.data.renameFile;
    const { newFileName } = e.detail;
    const files = this.data.files;
    Collection.renameFile(uid as string, fileId, newFileName).then(newFile => {
      if (newFile) {
        newFile = collectionFileFormatter(newFile);
        for (let i = 0; i < files.length; i++) {
          if (files[i].fileId === newFile.fileId) {
            files[i] = newFile;
          }
        }
        this.setData({
          files,
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
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    console.log('My_File.onLoad()', options);

    const { uid } = options;
    this._queryMoreFileList(uid, 1).then(res => {
      this.setData({
        uid
      })
    })
    this._refreshCreatedTeamList(uid);
    this._refreshJoinedTeamList(uid);
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
  onShareAppMessage(opts): any {
    const fileIds = this.data.fileIds;
    let params = '';
    params += fileIds[0];
    for (let i = 1; i < fileIds.length; i++) {
      params += `-${fileIds[i]}`
    }
    if(fileIds.length!==0){
      return {
        title: `这里有${fileIds.length}个文件，请注意查收。`,
        path: `/pages/share/share?fileIds=${params}`,
      }
    }
  },

  /**
   * 辅助函数 - 分页查询文件列表
   * @param uid 
   * @param pageIndex 
   */
  _queryMoreFileList(uid: string, pageIndex: number) {
    return new Promise((resolve, reject) => {
      Collection.queryMyCollectionFileList(uid, pageIndex).then(files => {
        if (pageIndex === 1) {
          this.setData({
            files: collectionFileListFormatter(files),
            pageIndex: pageIndex + 1
          })
        } else if (pageIndex !== 1) {
          this.setData({
            files: [
              ...(this.data.files),
              ...collectionFileListFormatter(files)
            ],
            pageIndex: this.data.pageIndex + 1
          })
        }
        if (this.data.collectionInfo.collectionId === '') {
          this.setData({
            collectionInfo: {
              collectionId: files[0].collectionId,
            }
          })
        }

        resolve();
      })
    })
  },

  /**
	 * 刷新我创建的项目组列表
	 * @param uid 
	 */
  _refreshCreatedTeamList(uid: string) {
    return new Promise<Response.TeamDetailType[]>((resolve, reject) => {
      Team.getCreatedTeamList(uid).then(createdTeamList => {
        const newCreatedTeamList = teamListFormatter(createdTeamList);
        this.setData({
          createdTeamList: newCreatedTeamList as Response.TeamDetailType[]
        });
        resolve(newCreatedTeamList as Response.TeamDetailType[]);
      })
    })
  },

	/**
	 * 刷新我加入的列表
	 * @param uid 
	 */
  _refreshJoinedTeamList(uid: string) {
    return new Promise<Response.TeamDetailType[]>((resolve, reject) => {
      Team.getJoinedTeamList(uid).then(joinedTeamList => {
        const newJoinedTeamList = teamListFormatter(joinedTeamList);
        this.setData({
          joinedTeamList: newJoinedTeamList as Response.TeamDetailType[]
        });
        resolve(newJoinedTeamList as Response.TeamDetailType[]);
      })
    })
  }
})