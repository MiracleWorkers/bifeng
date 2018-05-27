// components/phoneCall/phoneCall.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    isShow: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 关闭弹窗
    close:function(){
      this.setData({
        isShow: false
      })
    },
    // 打电话
    call:function(){
      wx.makePhoneCall({
        phoneNumber: '01088911388'
      })
    }
  }
})
