// pages/cook/cook.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var array = this.initData();
      this.setData({
        array:array
      });
  },

  initData: function(){
      var array = [];
      var object1 = new Object();
      object1.title = "每日健康养生谈";
      object1.comment = "666评论";
      object1.accessNumber = "1488浏览";
      object1.type = "养生知识";
      object1.img="/images/list/food-1.jpg";
      array[0] = object1;

      var object2 = new Object();
      object2.title = "红烧猪蹄";
      object2.comment = "77评论";
      object2.accessNumber = "148浏览";
      object2.type = "菜谱杂锦";
      object2.img="/images/list/food-2.jpg";
      array[1] = object2;

      var object3 = new Object();
      object3.title = "排骨猪肉汤";
      object3.comment = "108评论";
      object3.accessNumber = "239浏览";
      object3.type = "菜谱杂锦";
      object3.img="/images/list/food-3.jpg";
      array[2] = object3;
      return array;
  },

  //点击绑定事件
  seeDetail: function(e){
    console.log(e.currentTarget.id);
  }

})