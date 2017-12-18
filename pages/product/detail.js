// pages/product/detail.js
var WxParse = require('../../wxParse/wxParse.js');
var article = '<div class="g-mall-content" style="margin-top: 44px;"><img src= "http://fuguangjun.0512iis.com/images/chuang/chuang1.jpg" /></div><div class="g-desc" ><h2>喜上眉梢1.8M床+ 顶箱柜（雕花）</h2><p> 老挝大红酸枝木材具有花纹漂亮，层次感分明，油性大，密度大，有光泽，不易裂等特点 </p><h2> Abstract:</h2><p> 苏州红状元家具股份有限公司为客户提供喜上眉梢1.8M床+ 顶箱柜（雕花）报价、哪家好、哪里有、厂家、价格、批发、配送、供应商，产品销往蠡口、浙江、江苏、相城、上海、杭州、全国等地区。</p></div><div class="g-mall-content" ><img src="http://fuguangjun.0512iis.com/images/chuang/chuang9.jpg" /></div><div class="g-desc" ><h2 class="nearbg-title" > 产品详情 </h2><p> 产品全实物拍摄, 雕花精美，工艺精湛，百分百老挝大红酸枝老料精心制作而成，并采用榫卯工艺结构，确保坚固耐用，本品全部是红酸枝木材本色，原枝原味，色泽自然，入手温润，健康环保。</p><p> 产品名称：喜上眉梢1.8M床+ 顶箱柜（雕花）</p><p> 品        牌：红状元 </p><p> 产品系列：书房系列 </p><p> 产品风格：明清古典 </p><p> 产品材质：老挝大红酸枝 </p><p> 产品产地：江苏苏州 </p><p> 产品尺寸：床180 * 200 * 36 / 116  柜238* 238 * 60（单位：cm）</p><p> 温馨提示：由于产品的特殊性，手工测量稍有误差，请以实物为主 </p><p> 老挝大红酸枝雕花古典四门实木中式组合大衣柜卧室组合床柜 </p><p> 浓郁的明清古典风格，各部位均以活隼连接，工艺精湛，用大红酸枝木制作，更具富贵气象。</p><p> 精雕百载良材，细刻千年文化，演绎自然古朴的中国家居文化，从选材到成品，精益求精的雕刻与揣摩，无不浓缩了明清文盛之精髓。</p></div><div class="g-mall-content" ><img src="http://fuguangjun.0512iis.com/images/chuang/chuang2.jpg" /><img src="http://fuguangjun.0512iis.com/images/chuang/chuang3.jpg" /><img src="http://fuguangjun.0512iis.com/images/chuang/chuang4.jpg" /><img src="http://fuguangjun.0512iis.com/images/chuang/chuang5.jpg" /><img src="http://fuguangjun.0512iis.com/images/chuang/chuang6.jpg" /><img src="http://fuguangjun.0512iis.com/images/chuang/chuang7.jpg" /><img src="http://fuguangjun.0512iis.com/images/chuang/chuang8.jpg" /></div>';
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */

  data: {
    isProduct:false,
    detailInfo: [],
    info:{},
    table_name:null,
    id:0,
    title:'苏州红木家具',
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '详情',
    })

    this.setData({
      title: options.name,
    });

    var that = this;

    if (options.news != null) {
      that.data.id = options.news;
      that.data.table_name = '2_news';
    } else {
      that.data.id = options.product;
      that.data.table_name = '2_product';
      that.setData({
        isProduct:true,
      });
    }
    that.loadPage();
    
  },

  loadPage:function(){
    var that = this;
    wx.request({
      url: 'https://hzy.api.szjisou.com/?service=App.Hong.getDetailInfo',
      data: {
        table: that.data.table_name,
        id: that.data.id,
        // header: {
        //   'content-type': 'application/json;charset=utf-8' // 默认值
        // },
      },
      method: 'GET',
      success: function (res) {
        that.setData({
          detailInfo: res.data.data.result
        })
        console.log(res);
        WxParse.wxParse('article', 'html', res.data.data.result.content, that, 5);
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