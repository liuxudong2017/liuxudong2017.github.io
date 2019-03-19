//index.js
//获取应用实例
const app = getApp();
const $ = require('../../utils/public.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showLogin: wx.getStorageSync("showLogin")=="false"?false:true,
    answerNum:1//答题数
    , dataObj:{}
  },
  //事件处理函数

  goLottery(){
    let showLogin = wx.getStorageSync('showLogin') != "false";
    if (showLogin){
      this.setData({ showLogin: showLogin});
      return '';
    }
    wx.navigateTo({
      url: '/pages/lottery/lottery'
    })
  },
  goQuestionnaire(){
    let showLogin = wx.getStorageSync('showLogin') != "false";
    if (showLogin) {
      this.setData({ showLogin: showLogin });
      return '';
    }
    wx.navigateTo({
      url: '/pages/questionnaire/questionnaire'
    })
  },
  goRank(){
    let showLogin = wx.getStorageSync('showLogin') != "false";
    if (showLogin) {
      this.setData({ showLogin: showLogin });
      return '';
    }
    wx.navigateTo({
      url: '/pages/rank/rank'
    })
  },
  goBonus(){
    let showLogin = wx.getStorageSync('showLogin') != "false";
    if (showLogin) {
      this.setData({ showLogin: showLogin });
      return '';
    }
    wx.navigateTo({
      url: '/pages/bonus/bonus'
    })
  },
  goAnswer(){
    let showLogin = wx.getStorageSync('showLogin') != "false";
    if (showLogin) {
      this.setData({ showLogin: showLogin });
      return '';
    }
    wx.navigateTo({
      url: '../answerType/answerType',
    })
  },
  onLoad: function (obj) {
    var _this=this;
    if (app.globalData.userInfo) {
       $.getUserInfo(obj.share_id).then(res=>{
         this.setData({dataObj:res.data.data});
      console.log(res)
    })
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
       $.getUserInfo(obj.frined_openid).then(res=>{
        _this.setData({dataObj:res.data.data});
      console.log(res)
    })
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log('userInfo-=-=-=-=');
    console.log(e)
    $.getUserInfo().then(res => {
      console.log(res)
      wx.setStorageSync("openid",res.data.data.openid);
    })
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      showLogin: wx.getStorageSync("showLogin") == "false" ? true : false
    })

  },
  cancelLogin(){//退出登录、注册页
    this.setData({showLogin:false});
    $.getUserInfo().then(res=>{
      console.log(res);
    })
  },
  goSelf(){//去个人中心
    let showLogin = wx.getStorageSync('showLogin') != "false";
    if (showLogin) {
      this.setData({ showLogin: showLogin });
      return '';
    }
    wx.navigateTo({
      url: '../self/self'
    })

  },
  onShareAppMessage: function () {
    return{
      path:"/pages/index/index?share_id="+wx.getStorageSync('openid')
    }
  }

})
