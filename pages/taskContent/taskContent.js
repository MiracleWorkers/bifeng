// pages/taskContent/taskContent.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textarea: "",
    imgList: [1,2,3,4,5,6,7]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  bindInput:function(e){
    this.setData({
      textarea: e.detail.value
    })
  }
})