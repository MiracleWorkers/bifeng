// pages/changeUsrName/changeUserName.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: "",
    placeholder: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initPage(options);
  },
  // 根据路由参数获取模块名字
  // 模块名字： provider||master
  initPage:function(options){
    const { module } = options;
    let placeholder = ""
    let title = ""
    switch(module){
      case "provider":
        placeholder = "请输入昵称";
        title = "设置昵称"
        break;
      case "master":
        placeholder = "请输入雇主名";
        title = "设置雇主名"
        break;
    }
    // ... 可通过从父页面传递userId查询具体用户名或雇主名
    wx.setNavigationBarTitle({title})
    this.setData({
      placeholder: placeholder
    })
  },
  // 双向绑定input的值
  bindInput: function(e){
    this.setData({
      userName: e.detail.value
    })
  },
  // 清空输入框
  clearInput:function(e){
    this.setData({
      userName: ""
    })
  }
})
