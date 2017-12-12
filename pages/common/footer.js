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
}),


  function getInfo() {
    // var that = this;
    // wx.request({
    //   url: "https://hzy.api.szjisou.com/?service=App.Hong.GetBase",
    //   method: "POST",
    //   data: {
    //     service: "App.Hong.GetBase",
    //     table: "2_block",
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data.data);
        // that.data.phone = res.data.data.result.dianhua;
        // that.data.address = res.data.data.result.dibu;
        // that.setData({
        //   phone: res.data.data.result.dianhua,
        //   address: res.data.data.result.dibu,
        // });
    //   },
    //   fail: function (res) {

    //   },
    // })
  }

module.exports = {
  getInfo: getInfo,
}