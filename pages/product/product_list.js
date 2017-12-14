// pages/product/product_list.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: {},
    page: 1,
    list: [],
    id:null,
    datalist:[],
    title:null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id;
    this.data.datalist = options.list;
    this.data.title = options.name;
    this.loadPage();
  },

  loadPage:function(){
    var that = this;
    
    if (that.data.title == null || that.data.title == 'undefined') {
      that.data.title = '苏州红状元家具';
    }
    wx.setNavigationBarTitle({
      title: that.data.title,
    })
    if (that.data.datalist != null) {
      console.log(that.data.datalist);
      that.setData({
        list: that.data.datalist
      })
    } else {
      wx.request({
        url: 'https://hzy.api.szjisou.com/?service=App.Hong.Index',
        data: {
          id: that.data.id,
          page: that.data.page,
          table: '2_product',
          ftable: '2_share_category',
        },
        method: 'GET',
        success: function (res) {
          that.setData({
            list: res.data.data.result
          })
        }
      })
    }
  },

  toDetail: function (e) {
    wx.navigateTo({
      url: 'detail' + '?product=' + e.currentTarget.dataset.id + '&name=' + e.currentTarget.dataset.name,
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