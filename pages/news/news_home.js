// pages/news/news_home.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{},
    list:[],
    page:0,
  },

  goMap: function () {
    wx.navigateTo({
      url: '../common/map',
    })
  },

  call: function () {
    wx.makePhoneCall({
      phoneNumber: app.globalData.addressInfo.dianhua,
    })
  },

  toDetail: function (e) {
    var id = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.name
    wx.navigateTo({
      url: '../product/detail' + '?news=' + id + '&name=' + name,
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
    this.loadPage();
  },

  loadPage:function(){
    var that = this;

    if (app.globalData.addressInfo) {
      that.setData({
        info: app.globalData.addressInfo
      })
    }

    wx.request({
      url: 'https://hzy.api.szjisou.com/?service=App.Hong.Index',
      data: {
        service: 'App.Hong.Index',
        id: 0,
        page: that.data.page,
        table: '2_news',
        ftable: '2_share_category'
      },
      method: 'POST',
      success: function (res) {
        that.setData({
          list: res.data.data.result
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
    wx.stopPullDownRefresh();
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