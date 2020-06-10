import Collection from "../../../models/Collection";

// component/common/files-controller/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    files: Array,
    type: String,
    teamInfo: Object,
    userInfo: Object,
    isAuthorized: Boolean,
  },

  /**
   * 组件的初始数据
   */
  data: {
    editting: false,
    selectList: [] as string[], // 用于收藏集之外的场景选中
    selectIds: [] as number[], // 用于收藏集删除
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 进入编辑模式
     */
    inEdit() {
      const files = this.properties.files;
      files.forEach(file => {
        file.isChecked = false;
      })
      this.setData({
        editting: true,
        selectList: [],
        selectIds: [],
        files,
      })
    },

    /**
     * 退出编辑模式
     */
    outEdit() {
      const files = this.properties.files;
      files.forEach(file => {
        file.isChecked = false;
      })
      this.setData({
        editting: false,
        selectList: [],
        selectIds: [],
        files,
      });
      this.triggerEvent('outEdit')
    },

    /**
     * 选择事件
     * @param e 
     */
    onSelect(e) {
      const hitFileId = e.detail.fid;
      const hitId = e.detail.id;
      const { selectIds, selectList, files } = this.data;

      if (this.properties.type !== 'my_file') {
        for (const file of files as Response.FileType[]) {
          if (file.fileId === hitFileId) {
            if (file.isChecked) {
              // 若已选
              file.isChecked = false;
              selectList.splice(selectList.indexOf(hitFileId), 1);
            } else {
              // 若未选
              file.isChecked = true;
              selectList.push(hitFileId);
            }
            this.setData({
              files,
              selectList,
            });
            this._withChange(selectList, selectIds);
            break;
          }
        }
      } else if (this.properties.type === 'my_file') {
        console.log(e)
        for (const file of files as Response.FileType[]) {
          if (file.id === hitId) {
            if (file.isChecked) {
              // 若已选
              file.isChecked = false;
              selectIds.splice(selectIds.indexOf(hitId), 1);
              selectList.splice(selectList.indexOf(hitFileId), 1);
            } else {
              // 若未选
              file.isChecked = true;
              selectIds.push(hitId);
              selectList.push(hitFileId);
            }
            this.setData({
              files,
              selectIds,
              selectList
            });
            this._withChange(selectList, selectIds);
            break;
          }
        }
      }

    },

    /**
     * 全选事件
     */
    onSelecteAll() {
      const { type, selectIds, selectList, files } = this.data;

      if (type !== 'my_file') {
        if (selectList.length === files.length) {
          // 已选，且选满
          files.forEach(file => {
            file.isChecked = false;
          });
          this.setData({
            files,
            selectList: []
          })
          this._withChange([], []);
        } else {
          // 已选，但未选满 || 完全未选
          const newSelectList: string[] = [];
          files.forEach(file => {
            file.isChecked = true;
            newSelectList.push(file.fileId);
          });

          this.setData({
            files,
            selectList: newSelectList
          });
          this._withChange(newSelectList, selectIds);
        }
      } else if (type === 'my_file') {
        if (selectIds.length === files.length) {
          // 已选，且选满
          files.forEach(file => {
            file.isChecked = false;
          });
          this.setData({
            files,
            selectIds: [],
            selectList: [],
          });
          this._withChange([], []);
        } else {
          // 已选，但未选满 || 完全未选
          const files = this.data.files;
          const newSelectList: string[] = [];
          const newSelectIds: number[] = [];
          files.forEach(file => {
            file.isChecked = true;
            newSelectIds.push(file.id);
            newSelectList.push(file.fileId);
          });
          this.setData({
            files,
            selectIds: newSelectIds,
            selectList: newSelectList,
          });
          this._withChange(newSelectList, newSelectIds);
        }
      }


    },

    /**
     * 上传本地图片
     * @param e 
     */
    onUploadLocalImg(e: any) {
      console.log('file-controller出发上传本地图片事件', e);
      this.triggerEvent('uploadLocalImg', {
        chooseLocalImgs: e.detail.chooseLocalImgs
      })
    },

    /**
     * 上传群聊文件
     * @param e 
     */
    onUploadMessageFile(e: any) {
      this.triggerEvent('uploadMessageFile', {
        fileObjects: e.detail.fileObjects
      })
    },

    /**
     * 批量删除文件（统一封装为批量删除）
     */
    onDeleteFile(e: any) {
      const { type, selectIds, selectList } = this.properties
      if (type !== 'my_file') {
        // console.log('file-controller删除事件', selectList);
        if (e.detail && e.detail.fileId) {
          this.triggerEvent('deleteFile', {
            fileIds: new Array(e.detail.fileId),
          });
        } else {
          this.triggerEvent('deleteFile', {
            fileIds: selectList,
          });
          this.outEdit();
        }
      } else if (type === 'my_file') {
        console.log('file-controller删除事件', selectIds);
        if (e.detail && e.detail.id) {
          this.triggerEvent('deleteFile', {
            ids: [e.detail.id],
          });
        } else {
          this.triggerEvent('deleteFile', {
            ids: selectIds,
          });
          this.outEdit();
        }
      }



    },

    /**
     * 
     * @param e 滚动事件
     */
    onScrollToBottom(e: any) {
      this.triggerEvent('loadMore');
    },

    /**
     * 添加至我的收藏集(批量添加和单个添加，统一封装为批量添加)
     * @param e 滚动事件
     */
    onAddToMyCollection(e: any) {
      if (!this.properties.isAuthorized) {
        this.triggerEvent('showAuthorizeWindow');
      } else {
        if (e.detail) {
          if (e.detail.fileId) {
            this.triggerEvent('addToMyCollection', {
              fileIds: new Array(e.detail.fileId),
            })
            this.setData({
              editting: false,
              selectList: []
            })
          }
        } else {
          this.triggerEvent('addToMyCollection', {
            fileIds: this.data.selectList
          })
          this.setData({
            editting: false,
            selectList: []
          })
        }
      }
    },

    /**
     * 一键添加至个人收藏
     */
    onAddToMyCollectionOnce() {
      if (!this.properties.isAuthorized) {
        this.triggerEvent('showAuthorizeWindow');
      } else {
        const fileIds: string[] = [];
        const files = this.data.files;
        files.forEach(file => {
          fileIds.push(file.fileId);
        });

        this.triggerEvent('addToMyCollectionOnce', {
          fileIds
        })
      }

    },


    /**
     * 文件重命名
     * @param e 
     */
    onRename(e: any) {
      this.triggerEvent('rename', {
        file: e.detail.file
      })
    },

    /**
     * 查看文件事件
     * @param e 
     */
    onView(e: any) {
      console.log('file-controller view事件触发了')

      if (!this.properties.isAuthorized) {
        this.triggerEvent('showAuthorizeWindow')
      } else {
        this.triggerEvent('view', {
          file: e.detail.file
        })
      }
    },

    /**
     * 添加至项目组
     */
    onAddToTeam() {
      this.triggerEvent('addToTeam', {
        fileIds: this.data.selectList
      })
    },

    /**
     * 伴随触发改变事件
     * @param fileIds 
     */
    _withChange(fileIds: string[], ids?: number[]) {
      const { type } = this.properties;
      if (type !== 'my_file') {
        this.triggerEvent('change', {
          fileIds,
        })
      } else if (type === 'my_file') {
        console.log(fileIds, ids)
        this.triggerEvent('change', {
          ids,
          fileIds
        })
      }

    },

    onShow() {
      // console.log(this.data)
    }


  }
})
