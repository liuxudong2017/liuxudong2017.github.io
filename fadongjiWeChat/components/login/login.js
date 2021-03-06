// components/login.js
const $=require('../../utils/public.js');
var bmap = require('../../utils/bmap-wx.min.js');
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      
  },
  pageLifetimesL:{
    show(){
      // wx.authorize({ scope: "scope.invoice", complete(err) { console.log(err,"authorize")}})
      this.random();
      $.getUserInfo().then(res=>{
        console.log(res,"娃哈哈哈")
      })
    }
  },
  // 声明周期
  lifetimes: {
    attached() {
      // 在组件实例进入页面节点树时执行
      this.random();
     
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  // 以下是旧式的定义方式，可以保持对 <2.2.3 版本基础库的兼容
  attached() {
    // 在组件实例进入页面节点树时执行
    this.random();
   
  },
  detached() {
    // 在组件实例被从页面节点树移除时执行
  },
  /**
   * 组件的初始数据
   */
  data: {
    sendText:"send",
    isSendCode:false,
    userName:'',
    code:'',
    cyCode:'3',
    sCode: '1+2=?',
    iphone:'',
    isRegisterOk:false
    ,isAuthorize:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    random(){
      let type=Math.random()*2;
      type=Math.floor(type);
      let num1 = Math.random() * 10+1;
      let num2 = Math.random() * 10+1;
      num1 = Math.floor(num1);
      num2 = Math.floor(num2);
      let allNum;
      let str;
      if(type==0){
         allNum = num1 + num2;
         str =''+num1+"+"+ num2+"=?";
      }else if(type==1){
        allNum = num1 * num2;
        str = num1 + "*" + num2 + "=?";
      }else if(type==3){
        allNum = num1 / num2;
        str = num1 + "/" + num2 + "=?";
      }
      console.log(str,"random-=-=-=",allNum);
      
      this.setData({ cyCode: allNum, sCode: str });
      console.log(this.data.cyCode,"--",this.data.code)
    },
    sendCode(){
      let _this=this;
      if (!_this.data.iphone){
        $.toasts('手机号不能为空！','none')
        return ''
      }
      _this.setData({
        isSendCode:true,
        sendText:"10"
      });
      let num=10;
      let stop=setInterval(()=>{
        num--;
        if(num<0){
          clearInterval(stop);
          _this.setData({
            isSendCode:false,
            sendText:"send"
          });
        }else{
          _this.setData({sendText:num})
        }
      },1000)
    },
    changeName(e){

      let val = e.detail.value;
      console.log(val);
      this.setData({userName:val})
    },
    changeIphone(e){
      let val = e.detail.value;
      console.log(val);
      this.setData({ iphone: val })
    },
    changeCode(e){
      let val = e.detail.value;
      console.log(val);
      this.setData({ code: val })
    },
    submit(){
      var _this=this;
      var BMap = new bmap.BMapWX({
        ak: 'yPrAz957nQ1COPk6VQjYye3MOgqjBedM'
      });
      BMap.regeocoding({
        fail: (fail) => { 
          $.toasts(fail.errMsg);
           console.log(fail);
          _this.setData({isAuthorize:true});
        },
        success: (res) => { 
          console.log(res);
          _this.submitMess(res.originalData.result.addressComponent);
        }
      });
    },
    submitMess(address){
      var addr={
        street:"天同圆"
        , province:"背景"
        ,city:"北京市"
        , county:"昌平"
      };
      address=address.city?address:addr;
      let _this=this;
       if (!_this.data.userName){
        $.toasts('用户名不能为空！');
      } else if (!_this.data.iphone){
        $.toasts('手机号不能为空！');
       } else if (!(/^1[3|4|5|8|7][0-9]\d{4,8}$/.test(_this.data.iphone))) {
         $.toasts('手机号错误！')
      } else if (!_this.data.code){
        $.toasts("验证码不能为空！")
      }else if(_this.data.code.trim()!=_this.data.cyCode){
         console.log(_this.data.code.trim(), _this.data.cyCode, _this.data.code.trim() != _this.data.syCode)
        $.toasts('验证码错误');
      }else{
         let param = $.getParam({ openid: wx.getStorageSync("openid") }, {
           phonenumber: _this.data.iphone,
           real_name: _this.data.userName,
           latitude: '9098.9',
           longitude: '908.7',
           addr:address.street,
           province: address.province,
           city: address.city,
           county: address.district
         });
         console.log(param);
         $.ajax($.api.registerInterface, param).then(res => {
           let data = res.data;
           if (data.responseCode == "000000") {
             _this.setData({ isRegisterOk: true });
           }
           $.toasts(data.responseMsg);
         }).catch(err => { console.log(err) });
      } 
    },
    cancel(){
      this.triggerEvent('callback',{});
    },
    callback(){
      let _this=this;
      wx.openSetting({
        complete:(res)=>{
          console.log(res);
        }
      })
      // _this.setData({ isAuthorize: false });
      console.log('9090909090');
    }
  }
})
