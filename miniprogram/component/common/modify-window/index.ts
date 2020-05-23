// component/common/input-window/index.js
import Team from '../../../models/Team';
import File from '../../../models/File';
import { fileFormatter } from '../../../utils/formatters';
import Collection from '../../../models/Collection';

/**
 * 功能性组件：项目组重命名
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isModifing: Boolean,
    modifyObj: Object,
    lint: String,
    type: String,
    userInfo: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '重命名',
    inputValue: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 输入
     * @param e 
     */
    onInput(e: any) {
      this.setData({
        inputValue: e.detail.value
      })
    },

    onFocus() {
      console.log('聚焦')
    },

    onCatch() {
      console.log('onCatch')
    },

    /**
     * 取消
     */
    onCancel() {
      this.triggerEvent('modifyCancel');
    },

    /**
     * 确认
     */
    onComplete() {
      if (this.properties.type === 'file') {
        const uid = this.properties.userInfo.uid;
        const fileId = this.properties.modifyObj.fileId;
        File.renameFile(uid, fileId, this.data.inputValue).then(res => {
          if (<any>res !== {}) {
            wx.showToast({
              title: '修改成功',
              icon: 'success'
            });
            this.triggerEvent('modifyComplete');
          }
        }).catch(err => {
          wx.showToast({
            title: '请检查网络情况',
            icon: 'none'
          });
          console.log('口袋重命名失败', err);
        });;
      } else if (this.properties.type === 'team') {
        const tid = this.properties.modifyObj.tid;
        Team.updateTeamInfo(tid, this.data.inputValue).then(res => {
          if (<any>res !== {}) {
            wx.showToast({
              title: '修改成功',
              icon: 'success'
            });
            this.triggerEvent('modifyComplete');
          }
        }).catch(err => {
          wx.showToast({
            title: '请检查网络情况',
            icon: 'none'
          });
          console.log('项目组重命名失败', err);
        });
      } else if (this.properties.type === 'collection') {
        const { uid } = this.properties.userInfo;
        const { fileId } = this.properties.modifyObj;
        Collection.renameFile(uid as string, fileId, this.data.inputValue).then(res => {
          if (<any>res !== {}) {
            wx.showToast({
              title: '修改成功',
              icon: 'success'
            });
            this.triggerEvent('modifyComplete');
          }
        }).catch(err => {
          wx.showToast({
            title: '请检查网络情况',
            icon: 'none'
          });
          console.log('项目组重命名失败', err);
        });
      }

    },

  }
})
