// pages/deposit/deposit.js
const $ = require('../../utils/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rnb:'',
    allRnb:99.9
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $.setNavigationBar({ title: "提现" });
  },
  goDeposit(){
    var rnb=this.data.rnb;
    let str;
    if(rnb==''){
      str="请输入您要提现的金额！"
    }else if(rnb>this.data.allRnb){
      str="可提现金额不足！"
    }else{
      str="提现成功！"
    }
    $.toasts(str);
    console.log(this.data.rnb);
  },
  watherRnb(e){
    let val=e.detail.value;
    if(val==''){
      return;
    }
    this.setData({rnb:val});
    console.log(val);
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