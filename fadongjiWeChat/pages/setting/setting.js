// pages/setting/setting.js
const $ = require('../../utils/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isOpenVideo:true
    ,obj:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $.setNavigationBar({ title: "设置" });
    var src=wx.getStorageSync('setCache');
    src=JSON.parse(src);

    var isT = wx.getStorageSync("isOpenVideo");
    this.setData({ isOpenVideo:isT!=''&&isT==false ?false:true,obj:src});
    console.log(isT == false,wx.getStorageSync('isOpenVideo'));
  },
  switchChange(e){
    console.log(e.detail.value);
    if (e.detail.value){
      $.startMusic();
    }else{
      $.stopMusic();
    }
    wx.setStorageSync("isOpenVideo", e.detail.value)
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
    return $.sharePath();
  }
})