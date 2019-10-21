// pages/deposit/deposit.js
const $ = require('../../utils/public.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rnb:'',
    allRnb:'0'
    ,name:''
    ,iphone:''
    ,wx:''
    ,id:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $.setNavigationBar({ title: "提现" });
    var _this=this;
    $.getUserInfo().then(res=>{
      console.log(res,'用户信息--------sdf');
      var aRnb = res.data.data.vouchar;
      _this.setData({allRnb:aRnb/100,id:res.data.data.openid});
    })

  },
  goDeposit(){
    var rnb=this.data.rnb;
    var name=this.data.name;
    var iphone=this.data.iphone;
    var wx=this.data.wx;
    let str;
    if(name==''){
      str="请输入您的姓名！";
      $.toasts(str);
    }else if(iphone==''){
      str="请输入您的手机号码！";
      $.toasts(str);
    }else if(wx==''){
      str='请输入您的微信号!';
      $.toasts(str);
    }else if(rnb==''){
      str ='请输入您要提现的金额！';
      $.toasts(str);
    }else if(name!=''&&iphone!=''&&wx!=''&&rnb!=''){
      var id =this.data.id;
      var param = $.getParam({ openid:id},{
        drawcash_name:name
        , drawcash_phone:iphone
        , drawcash_weixin:wx
        , drawcash_vouchar:rnb*100
      });
      console.log(param,"提现参数。。。")
      let _this=this;
      // wx.showLoading({
      //   title: '加载中'
      // })
      $.ajax($.api.depostRnbInterface,param).then(res=>{
        // wx.hideLoading();
        console.log(res, '体现。。。。sss', res.data.responseCode == "000000", res.data.responseCode, res.data.data.vouchar);
        
        if(res.data.responseCode=="000000"){
          //成功
          _this.setData({allRnb:res.data.data.vouchar/100});
          // wx.redirectTo({
          //   url: 'pages/deposit/deposit'
          // })
          $.toasts('提现提交成功，在3个工作日之内完成提现!')
        }
        console.log(res,"提现接口=-=-=-=-=-=");
      })
      // str="ok111157ujk";
    }
    
    // $.toasts(str);
    // console.log(this.data.rnb);
  },
  changeName(e){
    let val = e.detail.value;
    if (val == '') {
      return;
    }
    this.setData({ name: val });
    console.log(val);
  }
  ,changeIphone(e){
    let val = e.detail.value;
    if (val == '') {
      return;
    }
    this.setData({ iphone: val });
    console.log(val);
  }
  ,changeWx(e){
    let val = e.detail.value;
    if (val == '') {
      return;
    }
    this.setData({ wx: val });
    console.log(val);
  }
  ,allDepost(){
    this.setData({rnb:this.data.allRnb})
  }
  ,watherRnb(e){
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
    return $.sharePath()
  }
})