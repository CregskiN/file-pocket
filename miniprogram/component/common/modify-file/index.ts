// component/common/input-window/index.js
import Team from '../../../models/Team';

/**
 * 功能性组件：项目组重命名
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isModifing: Boolean,
    modifyTeam: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    title: '重命名',
    newTeamName: '',
    newTeamAvatarUrl: '',
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
        newTeamName: e.detail.value
      })
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
      Team.updateTeamInfo(this.properties.modifyTeam.tid, this.data.newTeamName, this.data.newTeamAvatarUrl).then(res => {
        this.triggerEvent('modifyComplete');
      })
    },

  }
})
