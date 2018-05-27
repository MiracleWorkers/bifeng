// pages/publishTask/publishTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mode: "", // 选择的任务类型
    activeButton: false, // 是否激活下一步
    taskList: [
      {
        name: "转发任务",
        info: "找人帮忙转发您的文章页面，增加曝光量。",
        isCheck: false
      }, {
        name: "注册任务",
        info: "找人帮忙注册账号，增加您的用户注册量。",
        isCheck: false
      }, {
        name: "评论任务",
        info: "找人帮忙给文章评论刷人气。",
        isCheck: false
      }, {
        name: "涨粉任务",
        info: "找人帮忙关注微信公众号，给公众号涨粉。",
        isCheck: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  // 监听选择那种任务
  selectModel: function(e) {
    const index = e.currentTarget.dataset.index;
    const mode = this.data.taskList[index].name;
    this.data.taskList.forEach((value,id) =>{
      index===id?value.isCheck=true:value.isCheck=false;
    })
    this.setData({
      mode: mode,
      activeButton: true,
      taskList: this.data.taskList
    })
  },
  // 跳转到具体的发布需求页面
  _blankTaskContent:function(){
    wx.navigateTo({
      url: '../registerTask/registerTask',
    }) 
  }
})
