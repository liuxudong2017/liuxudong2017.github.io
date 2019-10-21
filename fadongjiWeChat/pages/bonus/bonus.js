// pages/bonus/bonus.js
const $ = require('../../utils/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    obj:{}
    ,list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $.setNavigationBar({ title: "我的奖金" });
    this.getUserMess();
    this.getDynamicMess(0);
    this.getOperLog($.getParam({ "openid": wx.getStorageSync("openid") }, { type: -1, isJustOpenid:1 }));
    


    // this.getDynamicMess(1);
    // this.getDynamicMess(2);
    // this.getDynamicMess(3);
    // this.getDynamicMess(4);
  },
  goDeposit(){
    var d=new Date();
    console.log(d.getDay());
    if (d.getDay()!=2){
      $.toasts("只有周二，才可提现！")
     // return ''
    }
    wx.navigateTo({
      url: '/pages/deposit/deposit'
    })
  },
  getOperLog(param){
    var _this=this;
    $.ajax($.api.getOperLogInterface,param).then(res=>{
      console.log(res,"奖金记录。。。。");
      var arr = _this.data.list;
      var openid=wx.getStorageSync("openid");
      var data=res.data.data.operLogList;
      for(var i=0;i<data.length;i++){
        var obj=data[i];
        if (obj.openid==openid){
          arr.push(obj);
        }
      }
      console.log(arr,"记录信息。。。。")
      _this.setData({list:arr});
    })
  },
  getDynamicMess(ty){
    let param = $.getParam({ openid: wx.getStorageSync("openid") }, { type: ty});
    $.ajax($.api.getOperLogInterface,param).then(res=>{
      console.log(res);
    })
  },
  getUserMess() {
    let _this = this;
    let info = wx.getStorageSync("info");
    // info = JSON.parse(info);
    let param = $.getParam({}, {
      openid: wx.getStorageSync("openid"),
      code: '',
      friend_openid: '',
      username: info.nickName,
      sex: '',
      headimgurl: info.avatarUrl
    });
    $.ajax($.api.getUserInfoInterface, param).then(res => {
      let data = res.data.data;
      console.log(res,'个人信息....')
      _this.setData({
       obj:data
      })
      console.log(res);
    });
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