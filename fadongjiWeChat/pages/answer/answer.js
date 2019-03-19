// pages/answer/answer.js
const $ = require('../../utils/public.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    answerArr:[0,2,5,9,13,19,22,30],//奖励节点
    currentAnswerNum:0,//第几道题
    pageIndex:0,//请求问题列表次数
    start:false,//倒计时动画开始
    countTime:9 //读秒
    ,stopCount:0//停止倒计时
    , chooseArr: [
      // { content: "ren", state: 0, answer:"ren"},
      // { content: "xxx", state: 0, answer: "ren" }
      ]
    , isNoClick:false//进制点击
    , alertTitle:"答题失败 继续努力"
    ,isShowAlert:false
    ,isFail:false
    , questionArr:[]//问题数组
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setStorageSync("answerType",options.type);
    $.setNavigationBar({ title: "答题赢现金" 
    });
    this.getQuestionList();//加载问题列表
    this.getOptionList();//加载选项
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   
   
  },
  
  /** type:选择类型：0单选 ；1多选；2天空；
   * trueChoose :正确答案[]
   * index：当前选项下标
  */
  getQuestionList(){//问题
    let _this=this;
    let param=$.getParam({"openid":wx.getStorageSync("openid")},{
      "hard_type":wx.getStorageSync("answerType")
    })
    $.ajax($.api.getQuestionListInterface,param).then(res=>{
      console.log(res);
      _this.setData({"questionArr":res.data.data.questionList,pageIndex:_this.data.pageIndex+1});
    });
  },
  getOptionList(){//选项
    let _this=this;
    let qArr = _this.data.questionArr;
    if(qArr.length>0){
      let index = _this.data.currentAnswerNum- (_this.data.pageIndex-1)*(qArr.length);
      console.log(index,"index-----");
      let param = $.getParam({ "openid": wx.getStorageSync("openid") }, {
        "question_id": qArr[index].question_id
      });
      $.ajax($.api.getOptionListInterface, param).then(res => {
        console.log(res,"选项列表...");
        _this.setData({
          chooseArr:res.data.data.optionList,
          currentAnswerNum:_this.data.currentAnswerNum+1,
          start:true,
          countTime:9,
          isNoClick:false
        });
         _this.startCount(); //倒计时
      });
    }else{
      setTimeout(()=>{
        console.log("setTimeout-----");
        _this.getOptionList();
      },300);
    }
  },
  choose(e){//选择答案
    let param=e.target.dataset;
    let _this = this;
    console.log(param);
    let arr = this.data.chooseArr;
    if(param.type=="0"||param.type=="2"||param.type=="4"){//单选
      console.log('单选-=-=-=-=-');
      if (param.choose==param.item.option_tittle){
        //正确
        // arr[param.index * 1].question_id = param.item.option_tittle;
        arr[param.index * 1].question_id =0;
        let ansArr = this.data.answerArr;
        console.log(ansArr,'duanxian')
        for (var i = 1; i < ansArr.length;i++){
         if(this.data.currentAnswerNum-1==ansArr[i]){
           this.setData({isShowAlert:true});
         }
        }
        this.setData({
          // isShowAlert:true,
          isNoClick: true,
          isFail: false
        });
        setTimeout(() => {
          let curr = (this.data.currentAnswerNum - 1) - (this.data.pageIndex - 1) * this.data.answerArr.length;
          if (curr >= this.data.questionArr.length - 1) {
            _this.getQuestionList();
          }
          _this.getOptionList();

        }, 500)
      }else{//单选错误
        // arr[param.index * 1].question_id = param.item.option_tittle;
        arr[param.index * 1].question_id =1;
        this.setData({ 
          isShowAlert: true, 
          isNoClick: true,
          isFail: true });
        console.log(this.data.isShowAlert,"弹窗。。。")
      }
      this.setData({ chooseArr:arr,start:false});
      console.log('====');
      console.log(this.data.chooseArr);
      let stop=this.data.stopCount;
      clearInterval(stop);
    }else if(param.type=="1"||param.type=="3"||param.type=="5"){//多选
      console.log("多选-=-=-=-=-=");
      if (param.choose.indexOf(param.item.option_tittle) > -1) {//多选正确
        arr[param.index * 1].question_id = 0;
        let maxChoose=param.choose.length;

        let isEnd=false;
        for(let i=1;i<=maxChoose;i++){
          if(param.choosenum==i&&param.choosenum+1<maxChoose){//还有正确答案
            arr[param.index * 1].create_time =param.choosenum+1;
            isEnd=true;
            break;
          } else if (param.choosenum == i && param.choosenum + 1 >= maxChoose){
            //正确答案都找到了 加载下一题
            isEnd=true;
            this.setData({isNoClick:true});
            
            let ansArr = this.data.answerArr;
            console.log(ansArr, 'duanxian')
            for (var i = 1; i < ansArr.length; i++) {
              if (this.data.currentAnswerNum - 1 == ansArr[i]) {
                this.setData({ isShowAlert: true });
              }
            }
            setTimeout(() => {
              let curr = (this.data.currentAnswerNum - 1) - (this.data.pageIndex - 1) * this.data.answerArr.length;
              if (curr >= this.data.questionArr.length - 1) {
                _this.getQuestionList();
              }
              _this.getOptionList();

            }, 500)
            break;
          }
        }
        if(!isEnd){//找到第一个正确答案
          arr[param.index * 1].create_time =1;
        }
        arr[param.index * 1].question_id = 0;
        this.setData({
          chooseArr:arr,
          isFail:false
        });
      } else {//多选错误
        arr[param.index * 1].question_id = 0;
        this.setData({
          chooseArr:arr,
          isFail:true,
          isNoClick:true
        });
      }
    }
  },
  reloadAnswer(){//重新答题
    wx.redirectTo({
      url: '/pages/answer/answer?type='+wx.getStorageSync("answerType"),
    })
  },
  keepAnswer(){//继续答题
    this.setData({ isShowAlert: false, countTime: 9, start: true});
    // this.startCount();
    this.getOptionList();
  },
  // 倒计时 
  startCount(){
    let _this=this;
    let countNum=_this.data.countTime;
    let bgAudio = $.getBgAudio();
    let stop=setInterval(()=>{
      countNum--;
      if(countNum<=4&&countNum>=0&&wx.getStorageSync("isMusic")!="false"){//开启警告
        bgAudio.src ="https://program.wop100.cn/music/music-128.mp3";
        bgAudio.play();
      }else if(countNum<0){//停止
        clearInterval(stop);
        this.setData({start:false});
        console.log('countNum=' + countNum);
        bgAudio.src = "";
        return '';
      }
      _this.setData({countTime:countNum});
    },1000);
    _this.setData({stopCount:stop});
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
    return {path:"/pages/index/index"}
  }
})