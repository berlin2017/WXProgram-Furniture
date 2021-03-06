// pages/home/home.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    homeInfo:{},
    navigations: [
      {
        index: 0,
        image: '../../resources/images/1.jpg',
        title: '公司简介',
      },
      {
        index: 1,
        image: '../../resources/images/2.jpg',
        title: '新闻动态',
      },
      {
        index: 2,
        image: '../../resources/images/3.jpg',
        title: '产品分类',
      },
      {
        index: 3,
        image: '../../resources/images/4.jpg',
        title: '联系电话',
      },
    ],
  },

  goMap:function(){
    wx.navigateTo({
      url: '../common/map',
    })
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
    var url = e.currentTarget.dataset.url.trim();
    var index = url.indexOf('=');
    var typeName = url.substring(0,index);
    var id = url.substring(index + 1, url.length);
    wx.navigateTo({
      url: '../product/detail' + '?' + e.currentTarget.dataset.url+'&name='+e.currentTarget.dataset.name,
    })
  },

  call: function () {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.info.dianhua,
    })
  },

  toProductList:function(e){
    var url = e.currentTarget.dataset.url;
    var name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../product/product_list?'+url+'&name='+name,
    })
  },

  toProductHome:function(){
    wx.switchTab({
      url: '../product/product_home',
    })
  },

  search:function(e){
    wx.navigateTo({
      url: '../product/product_list' + '?keyword=' + e.detail.value + '&name=' + e.detail.value,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // if (app.globalData.addressInfo) {
    //   this.setData({
    //     info: app.globalData.addressInfo
    //   })
    // } 
    console.log(this.data.info);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;
    if (app.globalData.addressInfo!=null) {
      that.setData({
        info: app.globalData.addressInfo
      })
    }else{
      wx.request({
        url: "https://hzy.api.szjisou.com/?service=App.Hong.GetBase",
        method: "POST",
        data: {
          service: "App.Hong.GetBase",
          table: "2_block",
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          that.setData({
            info: res.data.data.result
          })
        },
        fail: function (res) {

        },
      })
    }
    this.loadPage();
  },
  
  loadPage:function(){
    var that = this;

    wx.request({
      url: 'https://hzy.api.szjisou.com/?service=App.Hong.IndexInfo',
      data: {
        service: 'App.Hong.IndexInfo',
        siteid: '2'
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          homeInfo: res.data.data.result
        })
      }
    })
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
    this.loadPage();
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