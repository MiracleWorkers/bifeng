// components/taskAssess/taskAssess.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    tagList: [
      {
        name: "任务有点难",
        isActive: false
      },
      {
        name: "任务很简单",
        isActive: false
      },
      {
        name: "佣金丰厚",
        isActive: false
      },
      {
        name: "佣金单薄",
        isActive: false
      }
    ],
    selectedTag: "" // 选择的标签
  },

  /**
   * 组件的方法列表
   */
  methods: {
    selectTag: function(e) {
      const index = e.currentTarget.dataset.index;
      const tag = this.data.tagList[index].name;
      this.data.tagList.forEach((value, id) => {
        id === index ? (value.isActive = true) : (value.isActive = false);
      });
      this.setData({
        selectedTag: tag,
        tagList: this.data.tagList
      });
    },
    cancel: function() {
      this.setData({
        visible: false
      });
    }
  }
});
