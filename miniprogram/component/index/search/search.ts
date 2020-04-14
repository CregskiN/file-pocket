// component/search/search.ts
Component({
  /**
   * 组件的属性列表
   */
  properties: {
  },

  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    inputing: false,
    searching: false,
    inputValue: '',
    searchRecords: [{
      id: 0,
      content: '如何当上美国总统？如何当上美国总统？如何当上美国总统？如何当上美国总统？如何当上美国总统？如何当上美国总统？如何当上美国总统？如何当上美国总统？',
    }, {
      id: 1,
      content: '如何避免996',
    }, {
      id: 2,
      content: '美股熔断'
    }, {
      id: 3,
      content: '哈哈哈哈😄'
    }]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 取消点击
     */
    onCancel() {
      this.setData({
        inputing: false,
        searching: false,
        inputValue: ''
      })
    },

    /**
     * 聚焦
     */
    onFocus() {
      this.setData({
        inputing: true,
        searching: false
      })
    },

    /**
     * 输入
     */
    onInput(e) {
      this.setData({
        inputing: true,
        searching: true,
        inputValue: e.detail.value
      })
    },

    /**
     * 回车事件
     */
    onSearch(e){
      console.log(e);
      
    },

  }
})
