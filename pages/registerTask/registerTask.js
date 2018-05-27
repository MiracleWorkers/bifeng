// pages/registerTask/registerTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    refresh: false, // 顶部刷新icon动画
    check: true
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
  }

})
