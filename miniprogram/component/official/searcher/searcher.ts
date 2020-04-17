// component/official/searcher/searcher.js
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
      isFocus: false,
      isInputting: false,
      inputValue: '',
      
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
      onFocus(){
        this.setData({
          isFocus: true,
        })
      },
      onInput(e){
        this.setData({
          inputValue: e.detail.value
        })
      },
      onCancel(){
        this.setData({
          isFocus: false,
          inputValue: ''
        })
      },
      onClean(){
        this.setData({
          inputValue: ''
        })
      },
      onFocusOrSearch(){
        this.data.inputValue ? this._search() : this.onFocus();
      },
      onConfirm(){
        this._search();
      },

      _search(){
        console.log('开始搜索');
        
      }
    }
  })
  