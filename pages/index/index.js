//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 600,
    taskList: [
      {
        title: "转发任务",
        iconName: "../../assets/img/index-taskList-1.png",
        path: "/index"
      }, {
        title: "注册任务",
        iconName: "../../assets/img/index-taskList-2.png",
        path: "/index"
      }, {
        title: "评论任务",
        iconName: "../../assets/img/index-taskList-3.png",
        path: "/index"
      }, {
        title: "涨粉任务",
        iconName: "../../assets/img/index-taskList-4.png",
        path: "/index"
      }
    ],
    topicsList: [{
      title: "优质专选",
      iconName: "../../assets/img/index-tag-1.png",
      path: "../topics/topics?module=A"
    }, {
      title: "趣味专题",
      iconName: "../../assets/img/index-tag-2.png",
      path: "../topics/topics?module=B"
    }, {
      title: "酬劳丰厚",
      iconName: "../../assets/img/index-tag-3.png",
      path: "../topics/topics?module=C"
    }, {
      title: "机会多多",
      iconName: "../../assets/img/index-tag-4.png",
      path: "../topics/topics?module=D"
    }]
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onPullDownRefresh:function(){
    console.log("监听到上拉了")
  },
  // 页面上拉触底回调函数
  onReachBottom:function(){
    console.log("监听到下拉触底了")
  },

  // 专题页跳转
  _blankTopics(e){
    const {path,title} = e.currentTarget.dataset.item;
    wx.navigateTo({url: path})
  },
  _blankTaskDetails:function(){
    wx.navigateTo({ url: "../taskDetails/taskDetails" })
    // wx.navigateTo({ url: "../taskSubmit/taskSubmit" })
    // wx.navigateTo({ url: "../viewMyPublicTask/viewMyPublicTask" })
    // wx.navigateTo({ url: "../viewMyComplyTask/viewMyComplyTask" })
  },
  // 获取用户信息
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
