// pages/changeUsrName/changeUserName.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cacheTag: "",
    tagList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 双向绑定input的值
  bindInput: function (e) {
    this.setData({
      cacheTag: e.detail.value
    })
  },
  // 添加标签
  addTag: function (e) {
    if(this.data.cacheTag.length==0||this.data.tagList.length>=3) return false;
    const tag = this.data.cacheTag;
    this.data.tagList.push(tag);
    this.setData({
      cacheTag: "",
      tagList: this.data.tagList
    })
  },
  // 移除标签
  cancelTag:function(e){
    const index = e.currentTarget.dataset.index;
    this.data.tagList.splice(index,1);
    this.setData({
      tagList: this.data.tagList
    })
  }
})
