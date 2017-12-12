// pages/test/test.js
const app = getApp()
Page({

  // drawerMenuMoveData: {
  //   check: false,  //是否触发滑动操作
  //   state: 0,  //0:初始状态 1:菜单弹出中状态 2:菜单弹入状态中 3:菜单弹出状态
  //   firstTouchX: 0, //首次触摸X坐标值
  //   touchCheckX: 60, //触发滑动的触摸X
  //   moveX: 0,  // 滑动操作横向的移动距离
  //   maxMoveX: (app.globalData.deviceInfo.windowWidth - 60), //抽屉菜单最大移动距离
  //   lastTranlateX: 0 //上次动画效果的平移距离，用于校准left值
  // },


  /**
   * 页面的初始数据
   */
  data: {
    list: [{}, {}, {}, {}],
    check: false,  //是否触发滑动操作
    state: 0,  //0:初始状态 1:菜单弹出中状态 2:菜单弹入状态中 3:菜单弹出状态
    firstTouchX: 0, //首次触摸X坐标值
    touchCheckX: 60, //触发滑动的触摸X
    moveX: 0,  // 滑动操作横向的移动距离
    maxMoveX: (wx.getSystemInfoSync().windowWidth, - 60), //抽屉菜单最大移动距离
    lastTranlateX: 0, //上次动画效果的平移距离，用于校准left值

    animationData: wx.createAnimation({

    }),
    drawerMenuLeft: -750*0.8,
    mainPageLeft: 0,
    startX: 0,
    animationData2: wx.createAnimation({

    }),
    endX:0,
  },

  onLoad: function (options) {
    console.log(wx.getSystemInfoSync().windowWidth);
  },

  onMainPageTouchstart: function (e) {
    this.data.startX = e.touches[0].pageX;
  },

  onMainPageTouchmove: function (e) {
    this.data.endX = e.touches[0].pageX;
    if (e.touches[0].pageX - this.data.startX > 0) {
      var animation = wx.createAnimation({
        duration: 200,
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
    }else{
      var animation = wx.createAnimation({
        duration: 500,
      })
      animation.translateX(0).step();
      this.setData({
        animationData: animation,
        animationData2: animation,
      });
    }
    
  },

  onMainPageTouchend: function (e) {
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


  // onMainPageTouchmove: function (e) {
  //   var pixelRatio = wx.getSystemInfoSync().pixelRatio;
  //   if (this.data.check) {
  //     var mainPageLeft = 0, drawerMenuLeft = 0;
  //     var moveX = e.touches[0].clientX - data.firstTouchX;
  //     if (this.data.state === 1) {
  //       //处理边界状态
  //       if (moveX < 0) {
  //         moveX = 0;
  //       }
  //       if (moveX > data.maxMoveX) {
  //         moveX = data.maxMoveX;
  //       }
  //       if (moveX >= 0 && moveX <= this.data.maxMoveX) {
  //         this.data.moveX = moveX;
  //         moveX = moveX - this.data.lastTranlateX;
  //         //px转为rpx
  //         moveX = moveX * pixelRatio;
  //         mainPageLeft = moveX;
  //         drawerMenuLeft = -800 + moveX;
  //       }
  //     }
  //     else if (data.state === 2) {
  //       //处理边界状态
  //       if (moveX > 0) {
  //         moveX = 0;
  //       }
  //       if (moveX < -this.data.maxMoveX) {
  //         moveX = -data.maxMoveX;
  //       }
  //       if (moveX <= 0 && moveX >= -data.maxMoveX) {
  //         this.data.moveX = moveX;
  //         moveX = moveX - this.data.lastTranlateX;
  //         //px转为rpx
  //         moveX = moveX * pixelRatio;
  //         var maxMoveX = this.data.maxMoveX * pixelRatio;
  //         mainPageLeft = maxMoveX + moveX;
  //         drawerMenuLeft = maxMoveX - 800 + moveX;
  //       }
  //     }

  //     this.setData({
  //       mainPageLeft: mainPageLeft,
  //       drawerMenuLeft: drawerMenuLeft
  //     });
  //   }
  // },

  // onMainPageTouchend: function (e) {
  //   // if (!this.data.check) {
  //   //   return;
  //   // }
  //   // this.data.check = false;
  //   // this.data.firstTouchX = 0;
  //   // var moveX = data.moveX;
  //   // this.data.moveX = 0;
  //   // var animation = wx.createAnimation({ duration: 100 });
  //   // var translateX = 0;
  //   // var mainPageLeft = 0;
  //   // var windowWidth = wx.getSystemInfoSync().windowWidth;
  //   // if (this.data.state === 1) {
  //   //   if (moveX === 0 || moveX === this.data.maxMoveX) {
  //   //     this.data.state = (moveX === 0) ? 0 : 3;
  //   //     return;
  //   //   }
  //   //   mainPageLeft = moveX;
  //   //   //滑动距离是否超过窗口宽度一半
  //   //   if (mainPageLeft > (windowWidth / 2)) {
  //   //     translateX = this.data.maxMoveX - moveX;
  //   //     this.data.state = 3;
  //   //   }
  //   //   else {
  //   //     translateX = -moveX;
  //   //     this.data.state = 0;
  //   //   }
  //   // }
  //   var animation = wx.createAnimation({
  //     duration:500,
  //   })
  //   animation.translateX(wx.getSystemInfoSync().windowWidth).step();
  //   this.setData({
  //     animationData:animation,
  //   });
  // },

  // onMainPageTouchstart: function (e) {
  //   var startX = e.touches[0].clientX;
  //   if (this.data.state === 0) {
  //     if (startX <= this.data.touchCheckX && startX > 20) {
  //       this.data.check = true;
  //       this.data.state = 1;
  //       this.data.firstTouchX = startX;
  //     }
  //   } else if (this.data.state === 3) {
  //     if (startX >= data.maxMoveX) {
  //       this.data.check = true;
  //       this.data.state = 2;
  //       this.data.firstTouchX = startX;
  //     }
  //   }
  // },

  // onMainPageTap: function (e) {

  // },

  // onMainPageTouchstart: function (e) {
  //   var data = this.drawerMenuMoveData;
  //   var clientX = e.touches[0].clientX;
  //   //初识状态
  //   if (data.state === 0) {
  //     if (clientX <= data.touchCheckX && clientX > 20) {
  //       data.check = true;
  //       data.state = 1;
  //       data.firstTouchX = clientX;
  //     }
  //   }
  //   //菜单弹出状态
  //   else if (data.state === 3) {
  //     if (clientX >= data.maxMoveX) {
  //       data.check = true;
  //       data.state = 2;
  //       data.firstTouchX = clientX;
  //     }
  //   }
  // },
  // onMainPageTouchmove: function (e) {
  //   var data = this.drawerMenuMoveData;
  //   var pixelRatio = app.globalData.deviceInfo.pixelRatio;
  //   if (data.check) {
  //     var mainPageLeft = 0, drawerMenuLeft = 0;
  //     var moveX = e.touches[0].clientX - data.firstTouchX;
  //     if (data.state === 1) {
  //       //处理边界状态
  //       if (moveX < 0) {
  //         moveX = 0;
  //       }
  //       if (moveX > data.maxMoveX) {
  //         moveX = data.maxMoveX;
  //       }
  //       if (moveX >= 0 && moveX <= data.maxMoveX) {
  //         data.moveX = moveX;
  //         moveX = moveX - data.lastTranlateX;
  //         //px转为rpx
  //         moveX = moveX * pixelRatio;
  //         mainPageLeft = moveX;
  //         drawerMenuLeft = -800 + moveX;
  //       }
  //     }
  //     else if (data.state === 2) {
  //       //处理边界状态
  //       if (moveX > 0) {
  //         moveX = 0;
  //       }
  //       if (moveX < -data.maxMoveX) {
  //         moveX = -data.maxMoveX;
  //       }
  //       if (moveX <= 0 && moveX >= -data.maxMoveX) {
  //         data.moveX = moveX;
  //         moveX = moveX - data.lastTranlateX;
  //         //px转为rpx
  //         moveX = moveX * pixelRatio;
  //         var maxMoveX = data.maxMoveX * pixelRatio;
  //         mainPageLeft = maxMoveX + moveX;
  //         drawerMenuLeft = maxMoveX - 800 + moveX;
  //       }
  //     }

  //     this.setData({
  //       mainPageLeft: mainPageLeft,
  //       drawerMenuLeft: drawerMenuLeft
  //     });
  //   }
  // },
  // onMainPageTouchend: function (e) {
  //   var data = this.drawerMenuMoveData;
  //   if (!data.check) {
  //     return;
  //   }
  //   data.check = false;
  //   data.firstTouchX = 0;
  //   var moveX = data.moveX;
  //   data.moveX = 0;
  //   var animation = wx.createAnimation({ duration: 100 });
  //   var translateX = 0;
  //   var mainPageLeft = 0;
  //   var windowWidth = app.globalData.deviceInfo.windowWidth;
  //   if (data.state === 1) {
  //     if (moveX === 0 || moveX === data.maxMoveX) {
  //       data.state = (moveX === 0) ? 0 : 3;
  //       return;
  //     }
  //     mainPageLeft = moveX;
  //     //滑动距离是否超过窗口宽度一半
  //     if (mainPageLeft > (windowWidth / 2)) {
  //       translateX = data.maxMoveX - moveX;
  //       data.state = 3;
  //     }
  //     else {
  //       translateX = -moveX;
  //       data.state = 0;
  //     }
  //   }
  //   else if (data.state === 2) {
  //     if (moveX === 0 || moveX === -data.maxMoveX) {
  //       data.state = (moveX === 0) ? 3 : 0;
  //       return;
  //     }
  //     //滑动距离是否超过窗口宽度一半
  //     mainPageLeft = data.maxMoveX + moveX
  //     if (mainPageLeft > (windowWidth / 2)) {
  //       translateX = -moveX;
  //       data.state = 3;
  //     }
  //     else {
  //       translateX = -mainPageLeft;
  //       data.state = 0;
  //     }
  //   }
  //   translateX += data.lastTranlateX;
  //   data.lastTranlateX = translateX;
  //   animation.translateX(translateX).step();
  //   this.setData({
  //     animationData: animation.export()
  //   });
  // },
  // onMainPageTap: function (e) {
  //   var data = this.drawerMenuMoveData;
  //   if (data.state !== 3) {
  //     return;
  //   }
  //   data.state = 0;
  //   var translateX = -data.maxMoveX;
  //   translateX += data.lastTranlateX;
  //   data.lastTranlateX = translateX;
  //   var animation = wx.createAnimation({ duration: 100 });
  //   animation.translateX(translateX).step();
  //   this.setData({
  //     animationData: animation.export()
  //   });
  // },
  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {

  // },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {

  // }
})