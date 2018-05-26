// pages/messageInbox/messageInbox.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList: [
      {
        image: "../../assets/img/aver.jpeg",
        type: "官方通知",
        title: "币风APP上线通知",
        time: "2018.05.06 13:34",
        content: "币风APP将于2018年08月24号全新上线，敬请期待",
        isRead: false
      }, {
        image: "../../assets/img/aver.jpeg",
        type: "官方通知",
        title: "币风APP上线通知",
        time: "2018.05.06 13:34",
        content: "币风APP将于2018年08月24号全新上线，敬请期待",
        isRead: true
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  // 查看消息详情
  lookMessageContent:function(e){
    const item = e.currentTarget.dataset.item;

    wx.navigateTo({
      url: `../messageContent/messageContent`
    })
  }
})
