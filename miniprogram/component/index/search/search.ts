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
    onCancel() {
      this.setData({
        inputing: false,
        searching: false
      })
    },

    onFocus() {
      this.setData({
        inputing: true,
        searching: false
      })
    },

    onInput() {
      this.setData({
        inputing: true,
        searching: true
      })
    },

  }
})
