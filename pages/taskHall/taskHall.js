// pages/taskHall/taskHall.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    FLAG_MASK: false, // 遮罩层开关
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
        path: "../publishTask/publishTask"
      }
    ],
    selectBar: [
      {
        value: "全部任务",
        isOpen: false,
        itemList: ["全部任务", "转发任务", "注册任务", "评论任务", "涨粉任务"]
      },
      {
        value: "全部分类",
        isOpen: false,
        itemList: [
          "全部分类",
          "项目动态",
          "新币上线",
          "技术周报",
          "最新公告",
          "热门活动",
          "品牌推广"
        ]
      },
      {
        value: "最新发布",
        isOpen: false,
        itemList: ["最新发布", "酬劳最高", "赏金剩余最多", "赏金剩余最少"]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  // 点击遮罩层关闭筛选框
  noAllow(e) {
    const arr = [...this.data.selectBar];
    arr.forEach(value => (value.isOpen = false));
    this.setData({
      FLAG_MASK: false,
      selectBar: arr
    });
  },
  //筛选条件选择
  selectModel(e) {
    const index = e.currentTarget.dataset.key;
    this.data.selectBar.forEach((value, id) => {
      if (index === id) {
        if(value.isOpen){
          value.isOpen = false;
          this.data.FLAG_MASK = false;
        }else{
          value.isOpen = true;
          this.data.FLAG_MASK = true;
        }
      } else {
        value.isOpen = false;
      }
    });
    this.setData({
      FLAG_MASK: this.data.FLAG_MASK,
      selectBar: this.data.selectBar
    });
  },

  // 选取具体选项
  selectModelItem(e){
    const content = e.currentTarget.dataset.content;
    const parentIndex = e.currentTarget.dataset.parentkey;
    this.data.selectBar[parentIndex].value = content;
    this.data.selectBar[parentIndex].isOpen = false;
    this.setData({
      FLAG_MASK: false,
      selectBar: this.data.selectBar
    })
  },
  // 页面跳转 -> 任务发布
  _blankPage:function(e){
    const path = e.currentTarget.dataset.path;
    wx.navigateTo({
      url: path,
    })
  }
});
