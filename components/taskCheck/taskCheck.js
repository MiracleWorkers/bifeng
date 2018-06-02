// components/taskCheck/taskCheck.js
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
    isAgree: true,
    reason: ""
  },

  /**
   * 组件的方法列表
   */
  methods: {
    textareaChange: function(e) {
      this.setData({
        reason: e.detail.value
      });
    },
    noCheck: function() {
      this.setData({
        isAgree: false
      });
    },
    cancel:function(){
      this.setData({
        visible: false
      })
    }
  }
});
