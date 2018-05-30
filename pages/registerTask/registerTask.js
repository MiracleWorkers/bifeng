// pages/registerTask/registerTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    refresh: false, // 顶部刷新icon动画
    check: true,
    isShowPhoneCall: false // 是否显示联系充值组件
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // switch值发生变化
  checkChange:function(e){
    this.setData({
      check: e.detail.value
    })
  },
  // 顶部icon点击
  refreshData:function(){
    this.setData({
      refresh: true
    })
    setTimeout(() =>{
      this.setData({
        refresh:false
      })
    },2000)
  },
  // 显示联系充值组件
  showPhoneCall:function(){
    this.setData({
      isShowPhoneCall: true
    })
  },
  // 页面跳转 -> 设置标题
  _blankSetTitle:function(){
    wx.navigateTo({
      url: '../taskTitleSet/taskTitleSet',
    })
  },
  // 页面跳转 -> 设置类型
  _blankSetType: function () {
    wx.navigateTo({
      url: '../taskTypeSet/taskTypeSet',
    })
  },
  // 页面跳转 -> 设置标签
  _blankSetTag: function () {
    wx.navigateTo({
      url: '../taskTagSet/taskTagSet',
    })
  },
  // 页面跳转 -> 设置总奖励
  _blankSetTotalReward: function () {
    wx.navigateTo({
      url: '../taskTotalRewardSet/taskTotalRewardSet',
    })
  },
  // 页面跳转 -> 设置单次奖励
  _blankSetSingleReward: function () {
    wx.navigateTo({
      url: '../taskSingleRewardSet/taskSingleRewardSet',
    })
  },
  // 页面跳转 -> 叮嘱
  _blankSetStatement: function () {
    wx.navigateTo({
      url: '../taskStatementSet/taskStatementSet',
    })
  },
  // 页面跳转 -> 正文
  _blankTaskContent: function () {
    wx.navigateTo({
      url: '../taskContent/taskContent',
    })
  },
  // 页面跳转 -> 添加链接(评论，公众号)
  _blankSetLink: function () {
    wx.navigateTo({
      url: '../taskLinkSet/taskLinkSet',
    })
  }
})
