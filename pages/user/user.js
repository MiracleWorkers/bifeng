// pages/user/user.js
Page({


  data: {
    // init：首次进入； provider： 服务商页面； master： 雇主页面
    userPage: "provider",
    isSignIn: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  // 页面跳转 -> 修改昵称或雇主名
  changeUserName(e){
    wx.navigateTo({
      url:`../changeUserName/changeUserName?module=${this.data.userPage}`
    })
  },
  // 页面跳转 -> css积分
  lookCss:function(e){
    wx.navigateTo({
      url:`../cssInfo/cssInfo`
    })
  },
  // 页面跳转 -> 关于币风
  lookAboutUs:function(e){
    wx.navigateTo({
      url: "../aboutUs/aboutUs"
    })
  },
  // 页面跳转 -> 用户协议
  lookAgreement:function(e){
    wx.navigateTo({
      url: "../agreement/agreement"
    })
  },
  // 页面跳转 -> 消息中心
  lookMessageInbox:function(){
    wx.navigateTo({
      url: "../messageInbox/messageInbox"
    })
  },
  // 签到
  signIn:function(){
    if(this.data.isSignIn) return;
    wx.showToast({
      icon: "none",
      title: "恭喜签到成功，+100css",
      duration: 2500
    })
    this.setData({
      isSignIn: true
    })
  },
  // 邀请
  invite:function(){
    // .. 小程序未开放接口， 分享功能？
  },
  // 切换角色
  switchRole:function(){
    wx.showModal({
      title: "是否确认转换角色？",
      content: "确认后，页面将返回到选择角色页面。",
      success: function(res){
        if(res.confirm){
          console.log("yes")
        }else{
          console.log("no")
        }
      }
    })
  }
})
