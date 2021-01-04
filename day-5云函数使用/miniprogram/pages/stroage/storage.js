// pages/stroage/storage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    picture: ''
  },

  //上传文件这里需要先弹出选择界面
  uploadFile: function(e){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res=>{
        console.log(res);
        wx.cloud.uploadFile({
        cloudPath: 'image/111.pdf',
        filePath: res.tempFilePaths[0],
        success: function(re){
          console.log(re);
          wx.showToast({
            title: '上传成功！',
          })
        },
        fail: console.error,
        })
      }
    })
  },

  //文件弹窗展示，这里展示有个问题，他设置了这个openDocument文件格式要求，所以图片最好还是pdf格式，jpg不行哦真的是..
  showFilePop: function(e){
    var page = this;
    wx.downloadFile({
      url: 'https://7869-xianmou-produce-i4b7u-1304612359.tcb.qcloud.la/image/111.pdf?sign=680767f47124ca5f5528c9b730800355&t=1609228000',
      success: res=>{
        console.log(res)
        wx.openDocument({
          filePath: res.tempFilePath,
          success: re=>{
            console.log("成功打印",re)
          },
          fail: r=>{
            console.log("失败结果",r)
          }
        })
      }
    })
  },

  //文件展示
  showFile: function(e){
    var page = this;
    wx.cloud.downloadFile({
      fileID: 'cloud://xianmou-produce-i4b7u.7869-xianmou-produce-i4b7u-1304612359/image/111.jpg',
      success: re=>{
        console.log('文件展示',re)
        this.setData({
          picture: re.tempFilePath
        })
      }
    })
  },

  //文件下载，这里的下载的话，跟上面那个不同，没有弹窗但是下载成功了，你根据上面那个去找吧，我的是默认地址下的，根据文件id多个文件夹下的
  //先去这里，然后慢慢找C:\Users\Administrator\AppData\Local\微信开发者工具\User Data\WeappFileSystem
  //C:\Users\Administrator\AppData\Local\微信开发者工具\User Data\WeappFileSystem\o6zAJs8EcsblLgqXdIYHmMt-MiRI\wx2e7a47e7f3c5b57f\store
  downloadFile: function(e){
    var page = this;
    wx.cloud.downloadFile({
      fileID: 'cloud://xianmou-produce-i4b7u.7869-xianmou-produce-i4b7u-1304612359/image/111.jpg', //文件ID
    }).then(res => {
      console.log('下载成功地址',res)
      wx.saveFile({
        tempFilePath: res.tempFilePath,
        success: function(re){
          console.log('打印看看位置',re)
          //savedFilePath：http://store/wx2e7a47e7f3c5b57f.o6zAJs8EcsblLgqXdI….447lyWy0icL3cd186ec90970d8e825a932097889387a.jpg
          wx.showToast({
            title: '下载成功',
          })
        }
      })
    }).catch(r => {
      console.log('下载失败地址',r)
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