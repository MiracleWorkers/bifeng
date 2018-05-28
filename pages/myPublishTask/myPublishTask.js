// pages/myPublishTask/myPublishTask.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeNum: 0, // 顶部按钮激活的index
    navList: [
      {
        title: "未开始",
        isActive: true,
        listData:[{

        }]
      }, {
        title: "进行中",
        isActive: false
      }, {
        title: "已结束",
        isActive: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},
  // 切换顶部状态
  switchModel: function(e) {
    const index = e.currentTarget.dataset.index;
    this.data.navList.forEach((value, id) => {
      id === index
        ? value.isActive = true
        : value.isActive = false;
    })
    this.setData({
      activeNum: index,
      navList: this.data.navList
    })
  }
})
