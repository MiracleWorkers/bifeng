// components/taskStar/taskStar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible:{
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    starNum: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeStar:function(e){
      const item = e.currentTarget.dataset.index;
      this.setData({
        starNum: item
      })
    },
    cancel:function(){
      this.setData({
        visible: false
      })
    }
  }
})
