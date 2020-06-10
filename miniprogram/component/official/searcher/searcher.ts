import Viewer from '../../../utils/Viewer';
// component/official/searcher/searcher.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchResultFiles: Array,
    userInfo: Object,
    isAuthorized: Boolean,
  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    isFocus: false,
    inputValue: '',
    isResultBoardVisible: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 聚焦事件
     */
    onFocus() {
      this.setData({
        isFocus: true,
        isResultBoardVisible: true
      })
    },

    /**
     * 输入事件
     * @param e 
     */
    onInput(e) {
      this.setData({
        inputValue: e.detail.value
      })
    },

    /**
     * 取消并关闭搜索框
     */
    onCancel() {
      this.setData({
        isFocus: false,
        inputValue: '',
        isResultBoardVisible: false
      });
      this.triggerEvent('cancel')
    },

    /**
     * 清除输入内容
     */
    onClean() {
      this.setData({
        inputValue: ''
      });
      console.log(this.data)
      this.triggerEvent('cancel')
    },

    /**
     * 开始搜索
     */
    onComplete() {
      if (this.data.inputValue.trim()) {
        this.triggerEvent('search', {
          keywords: this.data.inputValue
        })
      }
    },

    /**
     * 拦截配合
     */
    onUnusefull() {
      console.log('拦截');
    },

    /**
   * 查看文件事件
   * @param e 
   */
    onView(e: any) {
      console.log('触发查看事件')
      if (!this.properties.isAuthorized) {
        // 没有uid表明尚未授权
        this.triggerEvent('showAuthorizeWindow');
      } else {
        // 表明已经授权
        this.triggerEvent('showDownloading');
        console.log('经判断，已经授权');
        Viewer.viewDocument(e.detail.file, this.properties.userInfo.uid).then(no => {
          this.triggerEvent('hideDownloading');
        });
      }
    },

    /**
     * 添加至我的收藏集(批量添加和单个添加，统一封装为批量添加)
     * @param e 滚动事件
     */
    onAddToMyCollection(e: any) {
      if (!this.properties.isAuthorized) {
        // 没有uid表明尚未授权
        this.triggerEvent('showAuthorizeWindow');
      } else {
        // 表明已经授权
        if (e.detail) {
          if (e.detail.fileId) {
            this.triggerEvent('addToMyCollection', {
              fileIds: new Array(e.detail.fileId),
            })
          }
        }
      }

    },

    /**
     * 加载更多
     */
    onScrollToBottom() {
      this.triggerEvent('searchMore', {
        keywords: this.data.inputValue
      })
    }

  }
})
