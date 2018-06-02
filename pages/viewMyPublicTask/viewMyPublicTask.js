// pages/viewMyPublicTask/viewMyPublicTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    toTop: false,
    getBest: false,
    starNum: 3 // 几颗星
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  switchChangeTop:function(e){
    this.setData({
      toTop: e.detail.value
    })
    console.log(this.data.toTop)
  },
  switchChangeBest:function(e){
    this.setData({
      getBest: e.detail.value
    })
  }
})