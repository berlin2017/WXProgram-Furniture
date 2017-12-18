// pages/common/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    height:0,
    markers: [{
      iconPath: "/resources/images/ic_marker.png",
      id: 0,
      latitude: 31.4559400000,
      longitude: 120.6428100000,
      width: 50,
      height: 50
    }],
  },


  daohang:function(){
    wx.authorize({
      scope: 'scope.userLocation',
    })
    wx.openLocation({
      latitude: 31.4559400000,
      longitude: 120.6428100000,
      name:'苏州红状元家具',
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
    this.setData({
      height: wx.getSystemInfoSync().windowHeight-80
    });
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