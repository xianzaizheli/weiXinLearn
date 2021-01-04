// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    disabled: true,
    type: "default",
    passwordType: true
  },

  accountInput: function(e){
    //e代表触发对象
    //e.detail代表获取触发对象的标签
    console.log(e.detail);
    var username = e.detail.value;
    if(username != ''){
      this.setData({
        disabled: false,
        type: "primary"
      })
    }else{
      this.setData({
        disabled: true,
        type: "default"
      })
    }
  },

  pwdBlur: function(e){
    //e代表触发对象
    //e.detail代表获取触发对象的标签
    console.log(e.detail);
    var password = e.detail.value;
    if(password != ""){
      this.setData({
        disabled: false,
        type: "primary"
      })
    }else{
      this.setData({
        disabled: true,
        type: "default"
      })
    }
  },

  checkPassword: function(e){
    
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})