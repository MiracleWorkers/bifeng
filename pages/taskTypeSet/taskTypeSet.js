// pages/taskTypeSet/taskTypeSet.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    type: "",
    typeList: [
      {
        name: "项目动态",
        isActive: false
      },
      {
        name: "新币上线",
        isActive: false
      },
      {
        name: "技术周报",
        isActive: false
      },
      {
        name: "最新公告",
        isActive: false
      },
      {
        name: "热门活动",
        isActive: false
      },
      {
        name: "品牌推广",
        isActive: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  selectModel: function(e) {
    const index = e.currentTarget.dataset.index;
    const type = this.data.typeList[index].name;
    this.data.typeList.forEach((value, id) => {
      id === index ? (value.isActive = true) : (value.isActive = false);
    });
    this.setData({
      type: type,
      typeList: this.data.typeList
    })
  }
});
