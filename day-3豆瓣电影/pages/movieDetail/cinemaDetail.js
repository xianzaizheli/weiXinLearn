// pages/movieDetail/cinemaDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /* 类型 */
    cat: '',
    /* 描述 */
    dra: '',
    /* 时长 */
    episodeDur: '',
    /* 图片 */
    img: '',
    /* 名称 */
    nm: '',
    /* 语言 */
    oriLang: ''
  },

  homePage: function(e){
    wx.redirectTo({
      url: '/pages/movie/movie',
    })
  },

  /**
   * 生命周期函数--监听页面加载，这里可以获取到url里面的数据
   */
  onLoad: function (options) {
    var page = this;
    var id = options.id;
    wx.request({
      url: 'https://m.maoyan.com/ajax/detailmovie',
      data:{
        movieId: id,
        optimus_uuid: "AC853E503BA811EBABDC29F1C0B5F1B205AB72106F2D4C99BC09B827145855E2",
        optimus_risk_level: 71,
        optimus_code: 10
      },
      dataType: "json",
      method: "GET",
      responseType: 'text',
      header: {'Content-Type':'application/json'},
      success: function(e){
        console.log(e),
        page.setData({
          
        })
      }
    });
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