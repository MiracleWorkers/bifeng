// components/bindPhone/bindPhone.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    countTime: {
      type: Number,
      value: 60
    },
    isShow: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    phoneNum: "",
    phoneCode: "",
    isSend: false,
    hasError: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    close:function(){
      this.setData({
        isShow: false
      })
    },
    // 手机号码双向绑定
    bindInputNum:function(e){
      this.setData({
        phoneNum: e.detail.value
      })
    },
    // 验证码双向绑定
    bindInputCode:function(e){
      const num = e.detail.value;
      if(num.length==4){
        // 监听输入完毕，和服务端通信确认是否正确
        wx.hideKeyboard()
      }
      this.setData({
        phoneCode: num
      })
    },
    // 查看用户协议
    lookAgreement:function(){
      wx.navigateTo({
        url: '../../pages/agreement/agreement',
      })
    },
    // 发送验证码短信&&到倒计时
    sendMessage:function(){
      if(this.data.isSend) return;
      this.setData({isSend:true});
      const balance = parseInt(new Date().getTime()/1000)+ this.data.countTime;
      let timer = setInterval(() =>{
        const newBalance = balance - parseInt(new Date().getTime()/1000);
        if(newBalance<=0){
          this.setData({
            isSend: false
          })
          clearInterval(timer);
          return;
        }
        this.setData({
          countTime: newBalance
        })
      },1000)
    }
  }
})
