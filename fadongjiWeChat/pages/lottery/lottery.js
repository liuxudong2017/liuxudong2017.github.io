// pages/lottery/lottery.js
const $ = require('../../utils/public.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    allNum:100,
    rotate:0,
    isShowAlert:false
    ,lotteryNum:0
    , luckdrawCount:0
    , last_luckdraw_times:0//免费抽奖次数
    ,operLogList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    $.setNavigationBar({ title: "幸运抽奖" });
    this.getLuckdrawCount();
    this.getUserMess();
    this.getDynamicMess(1);
    setInterval(()=>{
      _this.getDynamicMess(1);
    },8000)
  },
  cancleAlert(){
    this.setData({isShowAlert:false});
  },
  getDynamicMess(ty) {
    let _this=this;
    let param = $.getParam({ openid: wx.getStorageSync("openid") }, { type: ty});
    $.ajax($.api.getOperLogInterface, param).then(res => {
      console.log(res);
      let arr = res.data.data.operLogList;
      let arr2=[];
      let arr3=[];
      for(let i=0;i<arr.length;i++){

        if(i%3==0&&i!=0){
          arr3.push(arr2);
          arr2=[];
        }
        arr2.push(arr[i]);
      }
      _this.setData({ operLogList:arr3})
      console.log(arr3,"3333")
    })
  },
  stopEnven(){
    return false;
  },
  getJoinLuckdraw(){
    let param=$.getParam({openid:wx.getStorageSync("openid")},{});
    let _this=this;
    $.ajax($.api.getJoinLuckdrawInterface,param).then(res=>{
      if(res.data.responseCode!='000000'){
        $.toasts(res.data.responseMsg);
      }else{
        _this.beginLottery(res.data.data.add_vouchar, res.data.data.total_vouchar);

      }
      
      console.log(res);
    });
  },
  beginLottery(num,allNum){
    var stop=0;
    let _this=this;
    clearTimeout(stop);
    //25:0; 50:60; 5: 120; 5:240; 100:300;
    let rotate=0;
    if(num==25){
      rotate=0;
    }else if(num==50){
      rotate=60;
    }else if(num==5){
      let randoms=Math.random()*2;
      randoms=Math.floor(randoms);
      randoms>=1?rotate=120:rotate=240;
    }else if(num==100){
      rotate=300;
    }
    rotate+=720;
    _this.setData({ rotate: rotate});
    stop=setTimeout(()=>{
      _this.setData({ isShowAlert: true, rotate: 0, lotteryNum: num, allNum:allNum});
    },1500);
  },
  getLuckdrawCount(){
    let param=$.getParam({openid:wx.getStorageSync("openid")},{});
    let _this=this;
    $.ajax($.api.getLuckdrawCountInterface,param).then(res=>{
      _this.setData({luckdrawCount:res.data.data.luckdrawCount});
      console.log(res)
      
      });
  },
  goBonus(){
    wx.navigateTo({
      url: '/pages/bonus/bonus'
    })
  },
  getUserMess(){
    let _this=this;
    let info=wx.getStorageSync("info");
    // info=JSON.parse(info);
    let param=$.getParam({},{
      openid:wx.getStorageSync("openid"),
      code:'',
      friend_openid:'',
      username:info.nickName,
      sex:'',
      headimgurl:info.avatarUrl
    });
    $.ajax($.api.getUserInfoInterface,param).then(res=>{
      let data=res.data.data;
      _this.setData({
        allNum: data.vouchar
        ,last_luckdraw_times:data.last_luckdraw_times
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