// pages/product/product_home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{}, {}, {}, {}],
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


  toDetail: function (e) {
    wx.navigateTo({
      url: 'detail',
    })
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
        animationData: animation,
        animationData2: animation,
      });
    } else {
      var animation = wx.createAnimation({
        duration: 100,
      })
      animation.translateX(0).step();
      this.setData({
        animationData: animation,
        animationData2: animation,
      });
    }
  },


  // tap_start: function (e) {
  //   this.data.mark = this.data.newmark = e.touches[0].pageX;
  //   if (this.data.staus == 1) {
  //     // staus = 1指默认状态
  //     this.data.startmark = e.touches[0].pageX;
  //   } else {
  //     // staus = 2指屏幕滑动到右边的状态
  //     this.data.startmark = e.touches[0].pageX;
  //   }

  // },
  // tap_drag: function (e) {
  //   /*
  //    * 手指从左向右移动
  //    * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
  //    */
  //   this.data.newmark = e.touches[0].pageX;
  //   if (this.data.mark < this.data.newmark) {
  //     if (this.data.staus == 1) {
  //       if (this.data.windowWidth * 0.75 > Math.abs(this.data.newmark - this.data.startmark)) {
  //         this.setData({
  //           translate: 'transform: translateX(' + (this.data.newmark - this.data.startmark) + 'px)'
  //         })
  //       }
  //     }

  //   }
  //   /*
  //    * 手指从右向左移动
  //    * @newmark是指移动的最新点的x轴坐标 ， @mark是指原点x轴坐标
  //    */
  //   if (this.data.mark > this.data.newmark) {
  //     if (this.data.staus == 1 && (this.data.newmark - this.data.startmark) > 0) {
  //       this.setData({
  //         translate: 'transform: translateX(' + (this.data.newmark - this.data.startmark) + 'px)'
  //       })
  //     } else if (this.data.staus == 2 && this.data.startmark - this.data.newmark < this.data.windowWidth * 0.75) {
  //       this.setData({
  //         translate: 'transform: translateX(' + (this.data.newmark + this.data.windowWidth * 0.75 - this.data.startmark) + 'px)'
  //       })
  //     }

  //   }

  //   this.data.mark = this.data.newmark;

  // },
  // tap_end: function (e) {
  //   console.log("滑动结束");
  //   if (this.data.staus == 1 && this.data.startmark < this.data.newmark) {
  //     if (Math.abs(this.data.newmark - this.data.startmark) < (this.data.windowWidth * 0.2)) {
  //       this.setData({
  //         translate: 'transform: translateX(0px)'
  //       })
  //       this.data.staus = 1;
  //     } else {
  //       this.setData({
  //         translate: 'transform: translateX(' + this.data.windowWidth * 0.75 + 'px)'
  //       })
  //       this.data.staus = 2;
  //     }
  //   } else {
  //     if (Math.abs(this.data.newmark - this.data.startmark) < (this.data.windowWidth * 0.2)) {
  //       this.setData({
  //         translate: 'transform: translateX(' + this.data.windowWidth * 0.75 + 'px)'
  //       })
  //       this.data.staus = 2;
  //     } else {
  //       console.log("恢复原样");
  //       this.setData({
  //         translate: 'transform: translateX(0px)'
  //       })
  //       this.data.staus = 1;
  //     }
  //   }

  //   this.data.mark = 0;
  //   this.data.newmark = 0;
  // },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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