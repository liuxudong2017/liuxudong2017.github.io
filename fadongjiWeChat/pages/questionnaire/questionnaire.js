// pages/questionnaire/questionnaire.js
const $ = require('../../utils/public.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionArr:[]
    ,arr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    $.setNavigationBar({ title: "调查问卷" });
    this.getSurveyList();
  },
  radioChange(e){
    console.log(e);
    console.log(e.detail.value);
    let arr=this.data.arr;
    let obj={};
    let data=e.target.dataset;
    obj.temp_id=data.tid;
    obj.detail_id=data.did;
    obj.answer_content = e.detail.value;
    // obj.answer=e.detail.value;
    obj.answer="-";
    arr[data.index]=obj;
    console.log(arr)
    this.setData({arr:arr});
  },
  checkboxChange(e){
    let arr = this.data.arr;
    let obj = {};
    let data = e.target.dataset;
    obj.temp_id = data.tid;
    obj.detail_id = data.did;
    // obj.answer = e.detail.value;
    obj.answer = "-";

    obj.answer_content =e.detail.value;
    arr[data.index] = obj;
    this.setData({ arr: arr });
    console.log(e.detail.value);
  },
  getSurveyList(){
    let param=$.getParam({openid:wx.getStorageSync("openid")},{});
    let _this=this;
    $.ajax($.api.getSurveyListInterface,param).then(res=>{
      console.log(res);
      let arr = res.data.data.surveyList;
      for(let i=0;i<arr.length;i++){
       let arr1=arr[i].options.split(';');
       arr[i].options=arr1;
        arr[i].isRadio=arr[i].content.indexOf("单选")>-1?true:false;
      }
      _this.setData({questionArr:arr});
      console.log(arr);
    });
  },
  submit(){
    let _this=this;

    if (_this.data.arr.length == _this.data.questionArr.length){
      let param=$.getParam({openid:wx.getStorageSync("openid")},{
        answerList:_this.data.arr
      });
      $.ajax($.api.saveSurveyInterface,param).then(res=>{
        console.log(res,param);
        wx.showModal({ title: "提示！", content: res.data.data.add_vouchar});
      })
    }else{
      $.toasts("请填完问卷！")
    }
   
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