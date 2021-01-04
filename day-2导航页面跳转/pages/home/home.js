// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  navigateClick: function(e){
    wx.navigateTo({
      url: '/pages/navigatePage/navigatePage?id=3121',
      events: {
        acceptData: function(data){
          console.log(data)
        },
        someEvent: function(data){
          console.log(data)
        }
      },
      success: function(res){
        res.eventChannel.emit('acceptData',{data:'test'})
      }
    })
  },

  redirectClick: function(e){
    wx.redirectTo({
      url: '/pages/redirectPage/redirectPage',
      success: function(res){
        console.log("页面跳转玩玩2")
      }
    })
  },

  tabBarClick: function(e){
    wx.switchTab({
      url: '/pages/otherTabBar/otherTabBar',
      success: function(res){
        console.log("导航框切换")
      }
    })
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