// pages/product/product_home.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    height:0,
    list: [],
    navigations:[],
    // open: false,
    // mark: 0,
    // newmark: 0,
    // startmark: 0,
    // endmark: 0,
    // windowWidth: wx.getSystemInfoSync().windowWidth,
    // staus: 1,
    // translate: '',
    animationData: wx.createAnimation({

    }),
    drawerMenuLeft: -750 * 0.8,
    mainPageLeft: 0,
    startX: 0,
    animationData2: wx.createAnimation({

    }),
    endX: 0,
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

  toProductList: function (e) {
    var id = e.currentTarget.dataset.id;
    var name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../product/product_list' + '?id=' + id + '&name=' + name,
    })
  },

  toDetail: function (e) {
    wx.navigateTo({
      url: 'detail' + '?product=' + e.currentTarget.dataset.id + '&name=' + e.currentTarget.dataset.name,
    })
  },

  showNavi:function(){
    if (this.data.isShow){
      var animation = wx.createAnimation({
        duration: 200,
      })
      animation.translateX(0).step();
      this.setData({
        isShow:false,
        animationData: animation,
        animationData2: animation,
      });
    }else{
      var animation = wx.createAnimation({
        duration: 100,
      })
      animation.translateX(0.8 * wx.getSystemInfoSync().windowWidth).step();
      this.setData({
        isShow: true,
        animationData: animation,
        animationData2: animation,
      });
    }
    
  },

  tap_start: function (e) {
    this.data.startX = e.touches[0].pageX;
  },

  tap_drag: function (e) {
    this.data.endX = e.touches[0].pageX;
    if (e.touches[0].pageX - this.data.startX > 0) {
      var animation = wx.createAnimation({
        duration: 0,
      })
      animation.translateX(e.touches[0].pageX - this.data.startX).step();
      this.setData({
        animationData: animation,
        animationData2: animation,
      });
      if (e.touches[0].pageX - this.data.startX >= 0.2 * wx.getSystemInfoSync().windowWidth) {
        animation.translateX(0.8 * wx.getSystemInfoSync().windowWidth).step();
      }
      this.setData({
        animationData: animation,
        animationData2: animation,
      });
    } else {
      var animation = wx.createAnimation({
        duration: 200,
      })
      animation.translateX(0).step();
      this.setData({
        isShow: false,
        animationData: animation,
        animationData2: animation,
      });
    }

  },

  tap_end: function (e) {
    if (this.data.endX - this.data.startX >= 0.2 * wx.getSystemInfoSync().windowWidth) {
      var animation = wx.createAnimation({
        duration: 100,
      })
      animation.translateX(0.8 * wx.getSystemInfoSync().windowWidth).step();
      this.setData({
        isShow: true,
        animationData: animation,
        animationData2: animation,
      });
    } else {
      var animation = wx.createAnimation({
        duration: 100,
      })
      animation.translateX(0).step();
      this.setData({
        isShow: false,
        animationData: animation,
        animationData2: animation,
      });
    }
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
      height: wx.getSystemInfoSync().windowHeight
    });
    this.loadPage();
  },

  loadPage:function(){
    wx.showLoading({
      title: '加载中...',
    })
    var that = this;

    if (app.globalData.addressInfo) {
      that.setData({
        info: app.globalData.addressInfo
      })
    }

    wx.request({
      url: 'https://hzy.api.szjisou.com/?service=App.Hong.GetCategory',
      data: {
        pid: 3,
        table: '2_share_category',
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          navigations: res.data.data.result,
        });
       
      },
      fail: function (res) {
      }
    })

    wx.request({
      url: 'https://hzy.api.szjisou.com/?service=App.Hong.Index',
      data: {
        table: '2_product',
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          // navigations: res.data.data.result,
          list: res.data.data.result
        });
      },
      fail: function (res) {
      }
    })
    wx.hideLoading();
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