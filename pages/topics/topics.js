
Page({
  data: {
    topicsName: ""
  },

  
  onLoad: function (options) {
    this.initPage(options);
  },

  /**
   * 初始化页面，根据路由参数设置本页面要显示的内容
   */
  initPage:function(options){
    const module = options.module;
    let name = undefined;
    switch(module){
      case "A":
        name = "优质专选"
        break;
      case "B":
        name = "趣味专题"
        break;
      case "C":
        name = "酬劳丰厚"
        break;
      case "D":
        name = "机会多多"
        break;
    }
    this.setData({
      topicsName: name
    })
    wx.setNavigationBarTitle({
      title: this.data.topicsName
    })
  }
})