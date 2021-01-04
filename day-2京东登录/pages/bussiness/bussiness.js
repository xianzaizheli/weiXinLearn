// pages/bussiness/bussiness.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  formSub: function(e){
    //包含全部input的值
    console.log(e.detail.value);
    
    var user = new Object();
    user.username = e.detail.value.username;
    user.password = e.detail.value.password;
    user.bussinessName = e.detail.value.bussinessName;
    
    wx.setStorageSync('user', user);

    wx.showToast({
      title: "注册成功",
      icon: "success",
      duration: 1200,
      success: function(){
        wx.navigateTo({
          url: '/pages/login/login',
        })
        
      }
    })
  },

  formRe: function(e){

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