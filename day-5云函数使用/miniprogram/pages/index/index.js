//初始化数据库引用，括号里面如果为空那就使用默认环境的，还有这里用的不是环境名称而是环境id，所以如果要用最好指定一下
const db = wx.cloud.database({
  env: 'xianmou-produce-i4b7u'
});

const user = db.collection('user');
//加载命令对象
const _ = db.command;

//使用多边形处理经纬度
const {Point ,LineString ,Polygon} = db.Geo;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    queryData: [],
    addData: '',
  },

  //查询数据库
  queryDataList: function(e){
    var page = this;
    //这里使用的是查全部数据，也可以查单个数据，根据id查就好了
    /* db.collection('user').get({
      success: function(res){
        console.log(res.data);
        page.setData({
          queryData: res.data
        })
      }
    }) */

    //这里使用的是Promise风格调用
    /* db.collection('user').doc('85ff8afa5fe801c600ba40485a60a264').get().then(res=>{
      console.log(res);
    }) */

    db.collection('user').where({
      iconStyle: {
        color: '天蓝色',
        size: _.gt(10).and(_.lt(100))
      },
      //上面那个还能用这种格式
      //'iconStyle.color': '天蓝色'
      loginLocal: _.in(['北京','香港']),
      local: _.geoWithin({
        geometry: Polygon([
          LineString([
            Point(0, 0),
            Point(15, 0),
            Point(15, 15),
            Point(0, 15),
            Point(0,0)
          ])
        ]),
      }),
      sex: true,
    }).get().then(
      res =>{
        console.log(res)
        page.setData({
          queryData:res.data
        })
      }
    )
  },

  //增加数据
  addDataList: function(e){
    var page = this;
    db.collection('user').add({
      data:{
        iconStyle:{
          size: 10,
          color: '天蓝色'
        },
        name: '老王',
        sex: false,
        loginTime: new Date('2020-12-08 12:08:00'),
        loginLocals: ['北京','天津','上海'],
        local: new db.Geo.Point(113,56),
      },
    }).then(
      res =>{
        page.setData({
          addData: res._id
        })
      }
    )
  },

  //修改数据，这里说一下，那个权限设置问题的话，修改的数据，你先增加再测，因为这里权限管理要求创建者，你创建的数据会自带一个_openid
  updateDataList: function(e){
    var page = this;
    //这里写几个不同的简单的例子好了，这里的update是局部更新一个或多个记录，而set则是替换更新一个记录（就是doc指定一下id然后set的话全部数据都换一下）。这个where的话去云函数才能用批量处理
    /* db.collection('user').doc('98bb04175fe994d700add6872cefa883').update(
      {
        data:{
          sex: false,
          name: "更换"
        },
        success: function(res){
          console.log(res)
        }
      }
    ) */

    db.collection('user').doc('98bb04175fe994d700add6872cefa883').set({
      data: {
         'loginLocal.0': '温州',
      name: '名字真难取',
      sex: false,
      'iconStyle.size': _.inc(10),
      },
    }).then(res=>{
      console.log(res)
      this.setData({
        updateData: res.stats.updated
      })
    })
  },

  //删除数据
  deleteDataList: function(e){
    var page = this;
    db.collection('user').doc('2424fa985fe9a6ad00bbe3fa5382126a').remove({
      success: function(res){
        console.log(res);
        page.setData({
          deleteData: res.stats.removed
        })
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