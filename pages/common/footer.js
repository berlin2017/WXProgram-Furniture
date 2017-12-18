// pages/utils/footer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigations: [
      {}, {}
    ],
    phone: 0,
    address: '',
  },

  call: function (button) {
    var that = this;
    wx.makePhoneCall({
      phoneNumber: that.data.phone,
    })
  },

  goMap: function () {
    wx.navigateTo({
      url: '../common/map',
    })
  },
})
