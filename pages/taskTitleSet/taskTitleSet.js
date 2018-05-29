// pages/changeUsrName/changeUserName.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 双向绑定input的值
  bindInput: function(e){
    this.setData({
      title: e.detail.value
    })
  },
  // 清空输入框
  clearInput:function(e){
    this.setData({
      title: ""
    })
  }
})
