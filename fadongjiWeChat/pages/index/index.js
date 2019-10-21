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
    showLogin: true,
    answerNum:1//答题数
    , dataObj:{}
    , noticeArr: ['产品升级中,敬请期待','独有四缸气门']
    ,getList:[]
    , productArr:["独有四缸气门","龙门缸体","三年报质"]
  },
  //事件处理函数

  goLottery(){
    this.isRegister(() =>wx.navigateTo({
      url: '/pages/lottery/lottery'
    }));
    
  },
  loadMessList(param){
    console.log("jsldfjlskdjfejage")
    return $.ajax($.api.getMessListInterface, param)
  },
  goQuestionnaire(){
    this.isRegister(() =>wx.navigateTo({
      url: '/pages/questionnaire/questionnaire'
    }));
    
  },
  getDynamicMess(ty) {
    let param = $.getParam({ openid: wx.getStorageSync("openid") }, { type: ty });
    let _this=this;
    $.ajax($.api.getOperLogInterface, param).then(res => {
      
      let data=res.data.data.operLogList;
      let arr=[..._this.data.getList,...data];
      let arr1=[];
      let arr2=[];
      for(let i=0;i<arr.length;i++){
        if(i%8==0&&i!=0){
          arr2.push(arr1);
          arr1=[];
        }
        arr1.push(arr[i]);
      }
      _this.setData({ operLogList:arr2});
    })
  },
  goRank(){
    this.isRegister(() =>wx.navigateTo({
      url: '/pages/rank/rank'
    }));
    
  },
  goBonus(){
    this.isRegister(() =>wx.navigateTo({
      url: '/pages/bonus/bonus'
    }));
    
  },
  goAnswer(){
    console.log('去答题。。。')
    wx.showLoading({
      title: '加载中'
    })
    $.getUserInfo().then(res=>{
      wx.hideLoading();
      if(res.data.data.canAnswer!=0){
        this.isRegister(() => wx.navigateTo({
          url: '../answer/answer',
        }));
      }else{
        $.toasts('答题次数已用完！')
      }
    })
    
    
  },
  onLoad: function (obj) {
    let isT = wx.getStorageInfoSync('isOpenVideo');
     isT== false&&isT!='' ? '' : $.startMusic();
    var _this=this;
    _this.getDynamicMess(1);
    _this.loadMessList($.getParam({},{type:-1})).then(res=>{
      let arr=res.data.data.msgList;
      let arrNotice=[];
      let arrProduc=[];
      for(let i=0;i<arr.length;i++){
        if(arr[i].type==0){
          arrNotice.push(arr[i])
        }else if(arr[i].type==1){
          arrProduc.push(arr[i])
        }else if(arr[i].type==2){
          wx.setStorageSync("setCache",JSON.stringify(arr[i]))
        }

      }
      _this.setData({
        productArr:arrProduc
        , noticeArr:arrNotice
      })
      console.log(res,"消息列表...")
    });
    setInterval(()=>{
      // if (_this.data.showLogin == "false"){
        _this.getDynamicMess(1)
      // }
    },8000);
   
    if (app.globalData.userInfo) {
       $.getUserInfo(obj.share_id).then(res=>{
         this.setData({dataObj:res.data.data});
      console.log(res,"后台个人信息。。。")
      })
      
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
       $.getUserInfo(obj.frined_openid).then(res=>{
        _this.setData({dataObj:res.data.data});
         
         console.log(res, "后台个人信息。。。")
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
      console.log(res, "后台个人信息。。。")
      wx.setStorageSync("openid",res.data.data.openid);
    })
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })

  },
  cancelLogin(){//退出登录、注册页
    this.setData({showLogin:false});
    let _this=this;
    $.getUserInfo().then(res=>{
      _this.setData({dataObj:res.data.data});
      console.log(res);
    })
  },
  goSelf(){//去个人中心
    this.isRegister(()=>wx.navigateTo({
      url: '../self/self'
    }));

  },
  onShow(){
    this.isRegister();
  },
  isRegister(cb){
    let _this = this;
    wx.showLoading({
      title: '努力加载中...'
    })
    $.getUserInfo().then(res => {
      wx.hideLoading();
      _this.setData({ dataObj: res.data.data });
      if (res.data.data.is_register) {
        _this.setData({ showLogin: false });
        cb?cb():'';
      } else {
        _this.setData({ showLogin: true });
      }
      console.log(res, "show-------------");
    }).catch(err=>{
      wx.hideLoading()
    });

  },
  onShareAppMessage: function () {
    return $.sharePath()
  }
  , onPageNotFound:function(){
    console.log("页面销毁")
  }
})
