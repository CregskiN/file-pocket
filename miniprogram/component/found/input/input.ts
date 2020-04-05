// component/found/input/input.ts
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        theme:String,
        nickName: String,
        
    },
  
    /**
     * 组件的初始数据
     */
    data: {
        value: '',
    },
  
    /**
     * 组件的方法列表
     */
    methods: {
        onFinish(){
            this.triggerEvent('finish', {
                inputValue: this.data.value
            })
        },
        onChange(e: any){
            console.log(this.data)
            this.setData({
                value: e.detail.value
            })
        }
    }
  })
  