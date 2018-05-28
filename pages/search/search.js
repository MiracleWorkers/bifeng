// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  // 输入值双向绑定
  bindKeyInput: function(e) {
    this.setData({searchText: e.detail.value})
  },
  // 清空输入框
  clearContent:function(){
    this.setData({searchText: ""})
  }
})
