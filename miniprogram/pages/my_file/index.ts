import Collection from '../../models/Collection';
import File from '../../models/File';

import Viewer from '../../utils/Viewer';
import { teamListFormatter, collectionFileListFormatter } from '../../utils/formatters';
import Team from '../../models/Team';
import User from '../../models/User';
import { CustomUserInfo } from '../../utils/typing';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {} as CustomUserInfo,

    files: [] as Response.CollectionFileType[],

    currentPageIndex: 1,
    isBottom: false,
    isLazyLoading: false,

    collectionInfo: {
      collectionId: ''
    },
    uid: '',

    isTeamSelectorVisible: false,
    selectTeamInfo: {},
    fileIds: [] as string[],
    ids: [] as number[],

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
    // console.log('删除个人文件', e);
    // console.log('collectionInfo', this.data.collectionInfo)
    const { ids } = e.detail;
    const { collectionId } = this.data.collectionInfo;
    File.deleteMyCollectionFiles(collectionId, ids).then(res => {
      if (res.success) {
        this._queryFileList(this.data.uid, 1);
        wx.showToast({
          title: '删除成功'
        });
        this._queryFileList(this.data.userInfo.uid as string, 1);
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
    console.log('my_file页view事件触发了')
    Viewer.viewDocument(e.detail.file, this.data.userInfo.uid as string);
  },

  /**
   * 添加至项目组
   * @param e
   */
  onAddToTeam(e: any) {
    // console.log(this.data.ids);
    // console.log(this.data.fileIds);
    this.setData({
      isTeamSelectorVisible: true
    })
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
   * 完成事件 文件： 个人文件 -> 口袋
   * @param e 
   */
  onComplete(e: any) {
    const { teamList } = e.detail;
    const promises = [];
    for (const tid of teamList) {
      promises.push(Team.receiveFilesFromCollection(tid, this.data.uid, this.data.fileIds));
    }
    Promise.all(promises).then(res => {
      wx.showToast({
        title: '添加成功',
        icon: 'success'
      });
      this.setData({
        isTeamSelectorVisible: false,
        selectTeamInfo: [],
        fileIds: [],
      })
    }).catch(err => {
      wx.showToast({
        title: '请检查网络'
      })
      this.setData({
        isTeamSelectorVisible: false,
        selectTeamInfo: {}
      })
    })
  },

  /**
   * 多选状态下选择文件
   * @param e 
   */
  onChangeFileIds(e: any) {
    const { fileIds, ids } = e.detail;
    this.setData({
      fileIds,
      ids
    })
  },

  /**
   * 关闭文件重命名窗口
   */
  onModifyCancel() {
    this.setData({
      isRenaming: false
    })
  },

  /**
  * 选中文件，准备开始重命名
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
      renameFile: {} as any,
    });
    this._queryFileList(this.data.uid, 1);
  },


  /**
   * 懒加载
   */
  onLoadMore() {
    if (!this.data.isLazyLoading) {
      this._queryFileList(this.data.uid);
    } else if (!this.data.isBottom && this.data.isLazyLoading) {
      wx.showToast({
        title: '正在加载',
        icon: 'none',
      });
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options: any) {
    console.log('My_File.onLoad()', options);

    const { uid } = options;
    const userInfo = User.getUserInfoStorage();
    this._queryFileList(uid, 1);
    this.setData({
      uid,
      userInfo,
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
    if (fileIds.length !== 0) {
      return {
        title: `这里有${fileIds.length}个文件，请注意查收。`,
        path: `/pages/share/share?fileIds=${params}`,
      }
    }
  },

  /**
   * 辅助函数 - 分页查询文件列表
   * @param uid 
   * @param currentPageIndex 
   */
  _queryFileList(uid: string, aimPIndex?: number) {
    this.setData({
      isLazyLoading: true
    });
    const aimPageIndex = aimPIndex ? aimPIndex : this.data.currentPageIndex + 1;

    if (!this.data.isBottom || aimPageIndex === 1) {
      Collection.queryMyCollectionFileList(uid, aimPageIndex).then(res => {
        if (res.length) {
          res = collectionFileListFormatter(res);
          if (aimPageIndex === 1) {
            this.setData({
              files: res,
              isLazyLoading: false,
              currentPageIndex: aimPageIndex,
              isBottom: false,
            })
          } else {
            this.setData({
              files: [
                ...this.data.files,
                ...res,
              ],
              isLazyLoading: false,
              isBottom: res.length === 10 ? false : true,
              currentPageIndex: aimPageIndex
            })
          }

        } else {
          if (aimPageIndex === 1) {
            wx.showToast({
              title: '您还未收藏任何文件',
              icon: 'none'
            });
            this.setData({
              isLazyLoading: false,
              isBottom: true,
              currentPageIndex: aimPageIndex - 1,
            })
          } else {
            wx.showToast({
              title: '已展示全部收藏',
              icon: 'none'
            });
            this.setData({
              isBottom: true,
              isLazyLoading: false,
              currentPageIndex: aimPageIndex - 1,
            })
          }
        }

        if (this.data.files.length && !this.data.collectionInfo.collectionId) {
          this.setData({
            collectionInfo: {
              collectionId: res[0].collectionId
            }
          })
        }

      }).catch(err => {
        console.error(err);
      })
    } else {
      wx.showToast({
        title: '已展示全部收藏',
        icon: 'none'
      });
    }
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