import Upload from '../../../models/Upload';

// component/common/files-controller/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    files: Array,
    editting: Boolean,

  },

  /**
   * 组件的初始数据
   */
  data: {
    editting: false,
    selectList: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 进入编辑模式
     */
    inEdit() {
      this.setData({
        editting: true,
        selectList: []
      })
    },

    /**
     * 退出编辑模式
     */
    outEdit() {
      this.setData({
        editting: false,
        selectList: []
      })
    },

    /**
     * 选择事件
     * @param e 
     */
    onSelect(e) {
      (this.data.selectList as Array<any>).forEach(value => {
        if (value.fid === e.detail.fid) {

        }
      })


    },

    /**
     * 全选事件
     */
    onSelecteAll() {
      this.setData({
        selectList: this.data.files as any
      })
    },


    /**
     * 上传本地图片
     * @param e 
     */
    onUploadLocalImg(e: any) {
      Upload.uploadLocalImg(e.detail.chooseLocalImgRes)
    }

  }
})
