import User from '../../models/User';
import { fileCatagory, FileType } from '../../utils/typing'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupCreator: {},
    files: [{
      name: '产品方法论',
      catagory: 0,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 0
    }, {
      name: '浏览器战争史',
      catagory: 1,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 1
    }, {
      name: '收购阿里巴巴的一千种方法',
      catagory: 2,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 2
    }, {
      name: '小姐姐联系方式大全',
      catagory: 3,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 3
    }, {
      name: '蓝精灵全集',
      catagory: 4,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 4
    }, {
      name: '产品方法论',
      catagory: 5,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 5
    }, {
      name: '产品方法论',
      catagory: 6,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 6
    }, {
      name: '产品方法论',
      catagory: 7,
      submitter: '蓝精灵',
      time: '2020-04-01 13:10',
      isChecked: false,
      fid: 7
    }],
    isLogin: true,
    editting: false,
    selectCount: 0,
    selectList: [] as FileType[],
    gid: -1,
    openGid: '123'
  },

  /**
   * 删除文件事件
   */
  onDelete(e: any) {
    console.log(e.detail);
    wx.showToast({
      title: '删除成功'
    })
  },

  /**
   * 进入编辑模式事件
   */
  inEdit() {
    wx.setNavigationBarTitle({ title: '文件多选' });
    this.setData({
      editting: true,
      selectList: [],
      selectCount: 0,
    })
  },

  /**
   * 退出编辑模式事件
   */
  outEdit() {
    const files = this.data.files;
    for (let file of files) {
      file.isChecked = false;
    }
    wx.setNavigationBarTitle({ title: '文件详情' });
    this.setData({
      files,
      editting: false,
      selectList: [],
      selectCount: 0,
    })
  },

  /**
   * 选择全部事件
   */
  onSelectAll() {
    const files = this.data.files;
    let selectList = this.data.selectList;
    let selectCount = this.data.selectCount;
    if (selectCount !== files.length) {
      for (let file of files) {
        file.isChecked = true;
        selectList.push(file);
      }
      selectCount = files.length;
      this.setData({
        files,
        selectList,
        selectCount,
      })
    } else {
      for (let file of files) {
        file.isChecked = false;
      }
      selectList = [];
      selectCount = 0;
      this.setData({
        files,
        selectList,
        selectCount,
      })
    }


  },

  /**
   * 删除已选
   */
  onDeleteSelectList(e: any) {
    if (this.data.selectCount === 0) {
      wx.showToast({
        title: '请选择要删除的文件'
      })
      return;
    }
    console.log('触发 - 删除已选 列表为：', this.data.selectList);
  },

  /**
   * 分享已选文件
   */
  onShareSelectList() {
    wx.showToast({
      title: '分享文件功能暂未开放',
      icon: 'none'
    })
  },

  /**
   * 邀请加项目组
   */
  onInvite() {
    wx.showToast({
      title: '选择群聊',
      icon: 'none'
    })
  },

  /**
   * 编辑模式下 选择事件
   */
  onSelect(e: any) {
    const fid = e.detail.fid;
    const files = this.data.files;
    const selectList = this.data.selectList;
    let selectCount = this.data.selectCount;
    for (let file of files) {
      if (file.fid === fid) {
        if (file.isChecked === true) {
          file.isChecked = false;
          selectCount = selectCount - 1;
          selectList.splice(selectList.findIndex(sFile => (sFile as any).fid === fid), 1)
        } else {
          file.isChecked = true;
          selectCount = selectCount + 1;
          selectList.push(file);
        }
      }
    }
    this.setData({
      files,
      selectList,
      selectCount,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options.gid);

    wx.hideShareMenu();
    const userInfo = User.getUserInfo();
    const oFiles = this.data.files;
    for (let file of oFiles) {
      (file.catagory as any) = fileCatagory[file.catagory];
    }
    this.setData({
      groupCreator: userInfo,
      files: oFiles,
      gid: parseInt(options.gid as string)
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage(opts): WechatMiniprogram.Page.ICustomShareContent {
    console.log(opts.target)
    return {}
  }
})