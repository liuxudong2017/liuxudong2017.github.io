// pages/rule/rule.js
const $ = require('../../utils/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ruleArr:[
      "游戏分为注册、答题、问卷、幸运抽奖、个人资料五个环节；",
      "参与游戏并注册成功可获得100积分奖励，100积分为1元，10元起可提现；",
      "成功分享给超过3个好友，分享者可获得双倍积分奖励机会；",
      "体型根据低、中、高难度可分为入门级进阶级、大师级，用户可根据难度选择响应题型；",
      "用户参与调查问卷并完成问卷之后可获得20积分，可参与抽奖机会；"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $.setNavigationBar({ title: "答题规则" });
 
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
  // onShareAppMessage: function () {

  // }
})