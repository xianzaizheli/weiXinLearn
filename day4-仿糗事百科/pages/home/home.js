// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //轮播图指代点击了哪个标签
    currentPage: 0,
    //获取到的不同的页面数据
    vipData: [],
    videoData: [],
    imageData: [],
    //下拉刷新之类更改页面，增加数据
    pageVip: 1,
    pageImage: 1,
    pageVideo: 1,
    //设置页面高度
    pageWidth:0,
    pageHeight:0,
    //设置页面最大可刷新页数
    pageMax: 3
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.loadVip(1);
    this.loadVideo(1);
    this.loadImage(1);
  },

  changeTopic: function(e){
    this.setData({
      currentPage: e.currentTarget.id,
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("下拉刷新中");
    /* 先置空数据，然后重新加载数据即可 */
    var page = this;
    if(0 == page.data.currentPage){
      page.setData({
        vipData: [],
        pageVip: 1
      });
      page.loadVip(1)
    }

    if(1 == page.data.currentPage){
      page.setData({
        videoData: [],
        pageVideo: 1
      });
      page.loadVideo(1);
    }

    if(2 == page.data.currentPage){
      page.setData({
        imageData: [],
        pageImage: 1
      });
      this.loadImage(1)
    }


  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var page = this;
    /* 多重判断这个当前页代表的是轮播页面是哪个，判断在哪个页面下拉，然后获取值进行数据处理 */
    if(0 == page.data.currentPage){
      var pageVip = page.data.pageVip;
      if(page.data.pageMax <= pageVip){
        wx.showToast({
          title: '已经到底啦，请休息一下眼睛',
        })
        return;
      }
      pageVip = pageVip +1 ; 
      page.setData({
        pageVip: pageVip
      });
      page.loadVip(pageVip);
    };

    if(1 == page.data.currentPage){
      var pageVideo = page.data.pageVideo;
      if(page.data.pageMax <= pageVideo){
        wx.showToast({
          title: '已经到底啦！',
        });
        return;
      }
      pageVideo = pageVideo +1;   
      page.setData({
        pageVideo: pageVideo
      });
      page.loadVideo(pageVideo);
    }

    if(2 == page.data.currentPage){
      var pageImage = page.data.pageImage;
      if(page.data.pageMax <= pageImage){
        wx.showToast({
          title: '已经到底啦！',
        });
        return;
      }
      pageImage = pageImage +1;
      page.loadImage(pageImage);
      page.setData({
        pageImage: pageImage
      })

    }

    console.log("到底啦")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title: '转发测试',
      path: '/pages/home/home'
    }
  },

  //根据对应的页数去加载vip内容
  loadVip: function(pageNow){
    //下面这个是表示导航栏的内容会有一个刷新标志，最上面那里高仿糗事百科前面会有一个刷新标志
    wx.showNavigationBarLoading();
    var page = this;
    var vipData = this.data.vipData;
    var url = "http://m2.qiushibaike.com/article/list/text";

    wx.request({
      url: url,
      data:{
        type: 'refresh',
        count: 12,
        page: pageNow
      },
      /* dataType: 'json',
      header: {'content-type':'application/json'}, */
      success: function(e){
        let items =  e.data.items;
        /* items.forEach(
          function(item,index){
            item.votes.down = (item.votes.down+'').replace('-','')
          }
        ); */
        /* 差评数据处理 */
        items.forEach(item=>{
          item.votes.down = (item.votes.down+'').replace('-','')
        })
        /*  由于这里要用到下拉刷新，所以数据不能直接改变，而是要加入。*/
        vipData.push(items)
        /* console.log(page.data.pageVip) */
        /* 你加完之后数组长度发生了变更，于是页面高度也要随之变化 */
        page.setHeight(vipData.length);
        page.setData({
          vipData: vipData
        });
        /* console.log(vipData); */
        wx.hideNavigationBarLoading()
      }
    })
  },

  loadVideo: function(pageNow){
    wx.showNavigationBarLoading();
    var page = this;
    var videoData = this.data.videoData;
    var url = 'http://m2.qiushibaike.com/article/list/video';

    wx.request({
      url: url,
      data:{
        type: 'refresh',
        count: 12,
        page: pageNow
      },
      dataType: 'json',
      header: {'content-type':'application/json'},
      success: function(e){
        /* console.log(e); */
        var items = e.data.items;
        items.forEach(item=>{
          item.votes.down = (item.votes.down+'').replace('-','')
        });
        videoData.push(items);
        page.setData({
          videoData: videoData
        });
        page.setHeight(videoData.length);
        wx.hideNavigationBarLoading();
      }
    })

  },

  loadImage: function(pageNow){
    wx.showNavigationBarLoading();
    var page = this;
    var imageData = page.data.imageData;
    var url = 'http://m2.qiushibaike.com/article/list/image?type=refresh&count=12&page=';
    wx.request({
      url: url,
      data: {
        type: 'refresh',
        count: 12,
        page: pageNow
      },
      success: function(e){
        var items = e.data.items;
        console.log(items)
        items.forEach(item=>{
          item.votes.down = (item.votes.down+'').replace('-','')
        });
        imageData.push(items);
        page.setData({
          imageData: imageData
        });
        page.setHeight(imageData.length);
        wx.hideNavigationBarLoading();
      }
    })

  },

  //设置动态高度，传入数组长度，根据数组长度进行处理，温馨提示：这里的数组是二维数组，这里传的是下拉刷新次数，默认为1，数组大小默认为12
  setHeight: function(length){
    var page = this;
    wx.getSystemInfo({
      complete: (res) => {},
      success: function(e){
        page.setData({
          pageHeight: e.windowHeight*length*12*1.5,
        })
      }
    })
  }

})