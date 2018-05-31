// pages/taskSubmit/taskSubmit.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: "",
    imgList: [1,2,3,4,5,5,6,6]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  bindInput:function(e){
    this.setData({
      content: e.detail.value
    })
  },
  // 清空任务说明
  clearInput:function(){
    this.setData({
      content: ""
    })
  }
})