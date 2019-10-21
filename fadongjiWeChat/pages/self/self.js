// pages/self.js
const app = getApp();
const $ =require('../../utils/public.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},

    friendLists:[]
    ,infoData:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ userInfo: app.globalData.userInfo});
    $.setNavigationBar({title:"个人中心"});
    this.getFriendList();
  },
  getFriendList(){
    let param=$.getParam({openid:wx.getStorageSync("openid")},{});
    let _this=this;
    $.ajax($.api.getFriendListInterface,param).then(res=>{
      console.log(res,"好有列表,.,.,.,.")
      _this.setData({friendLists:res.data.data.friendList})
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
    var _this=this;
    $.getUserInfo().then(res=>{
      console.log(res,"个人中心个人信息");
      _this.setData({
        infoData:res.data.data
      })
    })
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