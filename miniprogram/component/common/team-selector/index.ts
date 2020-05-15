// component/common/team-selector/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isTeamSelectorVisible: Boolean,
    createdTeamList: Array,
    joinedTeamList: Array,
    selectTeamCount: Number,
  },
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    current: 0,
    selectList: [] as string[],

  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 切换tap
     * @param e 
    */
    onSwitchTap(e: any) {
      if (e.type === 'change') {
        const { current } = e.detail;
        this.setData({
          current
        })
      } else if (e.type === 'tap') {
        const { current } = e.target.dataset;
        this.setData({
          current
        })
      }
    },

    onShow() {
      console.log(this.data);
    },

    /**
     * 选择 我创建的项目组
     * @param e 
     */
    onSelectCreatedTeam(e: any) {
      console.log('选择成功', e);
      const { tid } = e.detail;
      const createdTeamList = this.properties.createdTeamList;
      const selectList = this.data.selectList;
      for (let i = 0; i < createdTeamList.length; i++) {
        if (createdTeamList[i].tid === tid) {
          if (createdTeamList[i].isChecked) {
            createdTeamList[i].isChecked = false;
            selectList.splice(selectList.indexOf(tid), 1);
          } else {
            createdTeamList[i].isChecked = true;
            selectList.push(tid);
          }
          break;
        }
      }
      this.setData({
        createdTeamList,
        selectList
      })
    },

    /**
     * 选择 我加入的 项目组
     * @param e 
     */
    onSelectJoinedTeam(e: any) {
      console.log('选择成功', e);
      const { tid } = e.detail;
      const joinedTeamList = this.properties.joinedTeamList;
      const selectList = this.data.selectList;
      for (let i = 0; i < joinedTeamList.length; i++) {
        if (joinedTeamList[i].tid === tid) {
          if (joinedTeamList[i].isChecked) {
            joinedTeamList[i].isChecked = false;
            selectList.splice(selectList.indexOf(tid), 1);
          } else {
            joinedTeamList[i].isChecked = true;
            selectList.push(tid);
          }
          break;
        }
      }
      this.setData({
        joinedTeamList,
        selectList
      })
    },

    /**
     * 取消事件
     */
    onCancel() {
      const joinedTeamList = this.properties.joinedTeamList;
      const createdTeamList = this.properties.createdTeamList;
      for (let i = 0; i < joinedTeamList.length; i++) {
        joinedTeamList[i].isChecked = false
      }
      for (let i = 0; i < createdTeamList.length; i++) {
        createdTeamList[i].isChecked = false
      }
      this.setData({
        selectList: [],
        joinedTeamList,
        createdTeamList
      });

      this.triggerEvent('cancel');
    },

    /**
     * 完成事件
     */
    onComplete() {
      const joinedTeamList = this.properties.joinedTeamList;
      const createdTeamList = this.properties.createdTeamList;
      for (let i = 0; i < joinedTeamList.length; i++) {
        joinedTeamList[i].isChecked = false
      }
      for (let i = 0; i < createdTeamList.length; i++) {
        createdTeamList[i].isChecked = false
      }
      this.triggerEvent('complete', {
        teamList: this.data.selectList
      });
      this.setData({
        selectList: [],
        joinedTeamList,
        createdTeamList
      });

    },


  }
})
