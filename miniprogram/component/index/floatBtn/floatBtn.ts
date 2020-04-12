// component/index/floatBtn/floatBtn.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isLogin: Boolean,
    buttonTop: Number,
    buttonLeft: Number,
    floatBtnIconClass: String,
    startPoint: Object,
    windowHeight: Number,
    windowWidth: Number,
  },
  options: {
    addGlobalClass: true
  },
  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    buttonStart(e: any) {
      // console.log(e.touches);

      this.setData({
        startPoint: e.touches[0]
      })
    },

    buttonMove(e: any) {
      var endPoint = e.touches[e.touches.length - 1]
      var translateX = endPoint.clientX - (this.properties.startPoint as any).clientX
      var translateY = endPoint.clientY - (this.properties.startPoint as any).clientY
      this.setData({
        startPoint: endPoint
      })

      var buttonTop = this.data.buttonTop + translateY
      var buttonLeft = this.data.buttonLeft + translateX
      //判断是移动否超出屏幕
      if (buttonLeft + 50 >= this.properties.windowWidth) {
        buttonLeft = this.properties.windowWidth - 50;
      }
      if (buttonLeft <= 0) {
        buttonLeft = 0;
      }
      if (buttonTop <= 0) {
        buttonTop = 0
      }
      if (buttonTop + 50 >= this.properties.windowHeight) {
        buttonTop = this.properties.windowHeight - 50;
      }
      this.setData({
        buttonTop: buttonTop,
        buttonLeft: buttonLeft
      })
    },

    buttonEnd(e: any) {
      // console.log(this.data);
      
    },

    onGetUserInfo(e: any) {
      this.triggerEvent('getAuthorization', {
        ...e.detail
      })
    },

    onCreate() {
      this.triggerEvent('create', {})
    }
  }
})
