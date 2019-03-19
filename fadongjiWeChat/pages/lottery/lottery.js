// pages/lottery/lottery.js
const $ = require('../../utils/public.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    integral:100,
    rotate:0,
    isShowAlert:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $.setNavigationBar({ title: "幸运抽奖" });
  },
  cancleAlert(){
    this.setData({isShowAlert:false});
  },
  stopEnven(){
    return false;
  },
  beginLottery(){
    var stop=0;
    clearTimeout(stop);
    var random=Math.random()*7;
    random=Math.floor(random);
    // random
    var rotate=60*random+720;
    this.setData({rotate:rotate+this.data.rotate});
    stop=setTimeout(()=>{
      this.setData({ isShowAlert: true})
    },3100);
    console.log(random);
  },
  goBonus(){
    wx.navigateTo({
      url: '/pages/bonus/bonus'
    })
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
    return{
      path:"/pages/index/index"
    }
  }
})