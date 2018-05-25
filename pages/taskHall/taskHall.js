// pages/taskHall/taskHall.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    FLAG_MASK: true, // 遮罩层开关
    topButtonList: [
      {
        name: "我执行的",
        icon: "",
        path: ""
      },
      {
        name: "我发布的",
        icon: "",
        path: ""
      },
      {
        name: "发布任务",
        icon: "",
        path: ""
      }
    ],
    selectBar: [
      {
        value: "全部选择",
        isOpen: false
      },
      {
        value: "全部选择",
        isOpen: false
      },
      {
        value: "最新发布",
        isOpen: false
      }
    ],
    initSelectTask: [
      "全部任务",
      "转发任务",
      "注册任务",
      "评论任务",
      "涨粉任务"
    ],
    initSelectCategory: [
      "全部任务",
      "项目动态",
      "新币上线",
      "技术周报",
      "最新公告",
      "热门活动",
      "品牌推广"
    ],
    initSelectSort: [
      "最新发布",
      "酬劳最高",
      "赏金剩余最多",
      "赏金剩余最少"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },
  noAllow(e){
    this.setData({
      FLAG_MASK: false
    })
  },
  //筛选条件选择
  selectModel(e) {
    const index = e.currentTarget.dataset.key;
    const newArr = this.data.selectBar;
    let itemList = [];
    newArr[index].isOpen = true;
    this.setData({
      selectBar: newArr
    })
    switch(index){
      case 0:
        itemList = this.data.initSelectTask;
        break;
      case 1:
        itemList = this.data.initSelectCategory;
        break;
      case 2:
        itemList = this.data.initSelectSort;
        break;
    }
    wx.showActionSheet({
      itemList: itemList,
      success: res => {
        console.log(res)
      }
    })
  }
});
