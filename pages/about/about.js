// pages/about/about.js
var WxParse = require('../../wxParse/wxParse.js');
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info:{},
  },

  call: function () {
    wx.makePhoneCall({
      phoneNumber: this.data.info.dianhua,
    })
  },

  goMap: function () {
    wx.navigateTo({
      url: '../common/map',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'https://hzy.api.szjisou.com/?service=App.Hong.GetCategory',
      data: {
        id: 0,
        // header: {
        //   'content-type': 'application/json;charset=utf-8' // 默认值
        // },
      },
      method: 'GET',
      success: function (res) {
        WxParse.wxParse('article2', 'html', res.data.data.result[0].content, that, 5);
        WxParse.wxParse('article', 'html', res.data.data.result[3].content, that, 5);
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this;

    if (app.globalData.addressInfo) {
      that.setData({
        info: app.globalData.addressInfo
      })
    } 
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