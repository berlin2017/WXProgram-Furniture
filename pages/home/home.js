// pages/home/home.js
var footer = require('../common/footer.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://fuguangjun.0512iis.com/images/dianshigui.jpg',
      'http://fuguangjun.0512iis.com/images/zhu3.jpg',
      'http://fuguangjun.0512iis.com/images/cuxiao.jpg',
      'http://fuguangjun.0512iis.com/images/qiaotouan.jpg'
    ],

    navigations: [
      {
        index: 0,
        image: 'http://fuguangjun.0512iis.com/images/i5.png',
        title: '公司简介',
      },
      {
        index: 1,
        image: 'http://fuguangjun.0512iis.com/images/i5.png',
        title: '新闻动态',
      },
      {
        index: 2,
        image: 'http://fuguangjun.0512iis.com/images/i5.png',
        title: '产品分类',
      },
      {
        index: 3,
        image: 'http://fuguangjun.0512iis.com/images/i5.png',
        title: '联系电话',
      },
    ],
  },

  onNavigationItemClick: function (e) {
    var that = this;
    console.log(e.currentTarget.dataset.index);
    switch (e.currentTarget.dataset.index) {
      case 0:
        wx.switchTab({
          url: '../about/about',
        })
        break;

      case 1:
        wx.switchTab({
          url: '../news/news_home',
        })
        break;
      case 2:
        wx.switchTab({
          url: '../product/product_home',
        })
        break;
      case 3:
        that.call();
        break;
    }
  },

  toDetail:function(e){
    wx.navigateTo({
      url: '../product/detail',
    })
  },

  call: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.phone,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    footer.getInfo();
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