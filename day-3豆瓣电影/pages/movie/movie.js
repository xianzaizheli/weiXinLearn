// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentItem: 0,
    imgs: ["/images/haibao/1.jpg","/images/haibao/2.jpg","/images/haibao/3.jpg","/images/haibao/4.jpg",],
    indicatorDots: true,
    //节点颜色
    indicatorColor: "red",
    //活跃节点颜色
    indicatorActiveColor: "#000000",
    //是否自动切换
    autoplay: true,
    //自栋切换时长
    interval: 2500,
    //是否衔接
    circular: true,
    //设置一个对象
    movies: [],
    //设置宽高
    windowWidth: 0,
    //设置行高
    windowHeight: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadSize();
    this.loadMovies();
  },

  changeTop: function(e){
    var currentItem =e.currentTarget.id;
    this.setData({
      currentItem : currentItem
    })
  },

  loadMovies: function(e){
    var page = this;
    wx.request({
      url: 'https://m.maoyan.com/ajax/movieOnInfoList',
      data: {
        token: "",
        optimus_uuid: "AC853E503BA811EBABDC29F1C0B5F1B205AB72106F2D4C99BC09B827145855E2",
        optimus_risk_level: 71,
        optimus_code: 20
      },
      dataType: "json",
      method: "GET",
      header: {'Content-Type':'application/json'},
      success: function(res){
        /* console.log(res);
        console.log(res.data.movieList); */
        var movies = res.data.movieList;
        /* movies.forEach((movie)=>{movie.img.replace("w.h",windowWidth+"."+windowHeight)}); */
        var heigth = (movies.length/3+1)*750;
        for(var i = 0 ; i < movies.length ; i++) {
          movies[i].img = movies[i].img.replace('w.h',"200.300");
        }
        page.setData({movies:movies,windowHeight:heigth});
      }
    })
  },

  loadSize: function(e){
    var page = this;
    wx.getSystemInfo({
      success: function(e){
        page.setData({
          windowWidth: e.windowWidth
        })
      },
      complete: (res) => {
        /* console.log(res.windowWidth);
        console.log(res.windowHeight); */
      },
    })
  },

  bindChange: function(e){
    var current = e.detail.current;
    this.setData({
      currentItem:current
    });
  },

  movieDetail: function(e){
    wx.navigateTo({
      url: '/pages/movieDetail/cinemaDetail?id='+e.currentTarget.id,
    })
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