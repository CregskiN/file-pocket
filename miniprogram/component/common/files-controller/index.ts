// component/common/files-controller/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    files: Array,
    type: String,
    isLazyLoading: Boolean,
    teamInfo: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    editting: false,
    selectList: [] as string[],
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
        files
      })
    },

    /**
     * 选择事件
     * @param e 
     */
    onSelect(e) {
      const hitFileId = e.detail.fid;
      const files = this.properties.files;
      const selectList = this.data.selectList;
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
            selectList
          })
          break;
        }
      }


    },

    /**
     * 全选事件
     */
    onSelecteAll() {
      if (this.data.selectList.length === this.properties.files.length) {
        const files: Response.FileType[] = this.data.files;
        files.forEach(file => {
          file.isChecked = false;
        });
        this.setData({
          files,
          selectList: []
        })
      } else {
        const files = this.data.files;
        const selectList: string[] = [];
        files.forEach(file => {
          file.isChecked = true;
          selectList.push(file.fileId);
        });
        this.setData({
          files,
          selectList
        })
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
      console.log('file-controller删除事件', e);
      console.log('selectList', this.data.selectList);
      
      if (e.detail && e.detail.fileId) {
        this.triggerEvent('deleteFile', {
          fileIds: new Array(e.detail.fileId),
        });
      } else {
        this.triggerEvent('deleteFile', {
          fileIds: this.data.selectList,
        });
        this.outEdit();
      }


    },

    /**
     * 
     * @param e 滚动事件
     */
    onScrollToBottom(e: any) {
      if (!this.properties.isLazyLoading) {
        this.setData({
          isLazyLoading: true
        });
        this.triggerEvent('loadMore');
      }
    },

    /**
     * 添加至我的收藏集(批量添加和单个添加，统一封装为批量添加)
     * @param e 滚动事件
     */
    onAddToMyCollection(e: any) {
      const { fileId } = e.detail;
      if (fileId) {
        this.triggerEvent('addToMyCollection', {
          fileIds: new Array(fileId),
        })
      } else {
        this.triggerEvent('addToMyCollection', {
          fileIds: this.data.selectList
        })
      }
    },
  }
})
