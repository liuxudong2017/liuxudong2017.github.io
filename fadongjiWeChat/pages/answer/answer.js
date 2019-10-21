// pages/answer/answer.js
const $ = require('../../utils/public.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    answerArr:[0,2,4,7,10,13,15,17,20],//奖励节点
    currentAnswerNum:0,//第几道题
    pageIndex:0,//请求问题列表次数
    start:false,//倒计时动画开始
    countTime:5 //读秒
    ,defaultTiem:5//读秒 数
    ,stopCount:0//停止倒计时
    ,loadNum:0
    , chooseArr: [
      // { content: "ren", state: 0, answer:"ren"},
      // { content: "xxx", state: 0, answer: "ren" }
      ]
    , isNoClick:false//进制点击
    , alertTitle:"答题失败 继续努力"
    ,isShowAlert:false
    ,isFail:false
    , curreAnser:''
    , questionArr:[]//问题数组
    , add_vouchar:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a=wx.getStorageSync('answerRes');
    console.log(a,'----',typeof a,"答题结果")
    wx.setStorageSync("answerType",options.type);
    $.setNavigationBar({ title: "答题赢现金" 
    });
    this.getQuestionList();//加载问题列表
    this.getOptionList();//加载选项
    // this.joinLuckdraw();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  },
  joinLuckdraw(){
    var param = $.getParam({ "openid": wx.getStorageSync("openid")});
    $.ajax($.api.answerLuckyInterface,param).then(res=>{
      let arr=res.data.data;
      let str='';
      if(arr.add_vouchar<=0){
        str="继续努力，越努力越幸运！"
      }else{
        str = "恭喜中了" + arr.add_vouchar/100+"元,邀请3位好友还有中奖机会";
      }
      wx.showModal({
        title: '提示',
        content:str,
        complete:function(){
          wx.navigateBack({
            delta:1
          })
        }
      })
    })
  },
  /** type:选择类型：0单选 ；1多选；2天空；
   * trueChoose :正确答案[]
   * index：当前选项下标
  */
  getQuestionList(){//问题
    let _this=this;
    let param=$.getParam({"openid":wx.getStorageSync("openid")},{
      "hard_type": wx.getStorageSync("answerType") ? wx.getStorageSync("answerType"):0
    })
    $.ajax($.api.getQuestionListInterface,param).then(res=>{
      console.log(res,"问题....");
      _this.setData({"questionArr":res.data.data.questionList,pageIndex:_this.data.pageIndex+1,
        curreAnser: res.data.data.questionList[_this.data.currentAnswerNum == 0 ? _this.data.currentAnswerNum : _this.data.currentAnswerNum - 1].real_answer
      });
    }).catch(err=>{console.log(err,'获取失败...')});
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
          countTime:_this.data.defaultTiem,
          isNoClick:false
         
        });
         _this.startCount(); //倒计时
      });
    }else{
      if(_this.data.loadNum<10){
        _this.data.loadNum++;
        setTimeout(() => {
          console.log("setTimeout-----");
          _this.getOptionList();
        }, 300);
      }
      
    }
  },
  choose(e){//选择答案
    let param=e.target.dataset;
    
    let _this = this;
    console.log(param);
    let arr = this.data.chooseArr;
    _this.setData({
      curreAnser:param.choose
    })
    if(param.type=="0"||param.type=="2"||param.type=="4"){//单选
      console.log('单选-=-=-=-=-');
      if (param.choose==param.item.option_tittle){
        //正确
        // arr[param.index * 1].question_id = param.item.option_tittle;
        arr[param.index * 1].question_id =0;
        let ansArr = this.data.answerArr;
        console.log(ansArr,'duanxian');
        let params=$.getParam({openid:wx.getStorageSync("openid")},{
          hard_type:param.type
          , question_id:param.qid
          , your_answer: param.item.option_tittle
        })
        $.ajax($.api.submitAnswerInterface,params).then(res=>{
          // if(res.data.)
          let data=res.data.data;
          this.setData({ isShowAlert: true,isFail:false });
          if(data.add_vouchar>0){
            //this.setData({ isShowAlert: true, add_vouchar: add_vouchar });
          }else{
            if(_this.data.currentAnswerNum>=5){
              if(wx.getStorageSync('answerRes')==true){
                wx.showModal({
                  title: '提示',
                  content: "答错题，邀请3位好友还有中奖机会",
                  complete: function () {
                    wx.navigateBack({
                      delta: 1
                    });
                  }
                })
                wx.setStorageSync("answerRes",'');
              
              }else{
                _this.joinLuckdraw()

              }
            }
            //加载下一题
            
            // setTimeout(() => {
            //   let curr = (this.data.currentAnswerNum - 1) - (this.data.pageIndex - 1) * this.data.answerArr.length;
            //   if (curr >= this.data.questionArr.length - 1) {
            //     _this.getQuestionList();
            //   }
            //   _this.getOptionList();

            // }, 500)
          }
          console.log(res,'提答案');
        });
      
        this.setData({
          // isShowAlert:true,
          isNoClick: true,
          isFail: false
        });
        
      }else{//单选错误
        // arr[param.index * 1].question_id = param.item.option_tittle;
        arr[param.index * 1].question_id =1;
        this.setData({ 
          isShowAlert: true, 
          isNoClick: true,
          isFail: true });
          wx.setStorageSync('answerRes',this.data.isFail);
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
            let params = $.getParam({ openid: wx.getStorageSync("openid") }, {
              hard_type: param.type
              , question_id: param.qid
              , your_answer: param.item.option_tittle
            })
            $.ajax($.api.submitAnswerInterface, params).then(res => {
              // if(res.data.)
              let data = res.data.data;
              this.setData({ isShowAlert: true, isFail:false });
            
              if (_this.data.currentAnswerNum >= 5) {
                if(wx.getStorageSync('answerRes')===true){
                  wx.showModal({
                    title: '提示',
                    content: '答错题，邀请3位好友还有中奖机会',
                    complete:function(){
                      wx.navigateBack({
                        delta:1
                      })
                    }
                  })
                }
                _this.joinLuckdraw()
              }
              console.log(res, '提答案');
            });

          
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
        wx.setStorageSync('answerRes',this.data.isFail);
      }
    }
  },
  reloadAnswer(){//重新答题
    wx.redirectTo({
      url: '/pages/answer/answer?type='+wx.getStorageSync("answerType"),
    })
  },
  keepAnswer(){//继续答题
    this.setData({ isShowAlert: false, countTime:this.data.defaultTiem, start: true});
    // this.startCount();
    console.log(this.data.currentAnswerNum >= 5, "--", this.data.currentAnswerNum ,"--最后一题?")
    if(this.data.currentAnswerNum>=5){
      //答题完毕，去请求奖励
      if(wx.getStorageSync('answerRes')==true){
        wx.showModal({
          title: '提示',
          content: "答错题，邀请3位好友还有中奖机会",
          complete: function () {
            wx.navigateBack({
              delta: 1
            });
          }
        })
        wx.setStorageSync("answerRes", '');
      }else{
        this.joinLuckdraw();
      }
      
      
    }else{
      //下一题
      this.getOptionList();
    }
    
  },
  // 倒计时 
  startCount(){
    let _this=this;
    let countNum=_this.data.countTime;
    // let bgAudio = $.getBgAudio();
    let stop=setInterval(()=>{
      countNum--;
      if (countNum <= 4 && countNum >= 0 && wx.getStorageSync("isOpenVideo")){//开启警告
        // bgAudio.src ="https://program.wop100.cn/music/music-128.mp3";
        // bgAudio.play();
      }else if(countNum<0){//停止
        clearInterval(stop);
        this.setData({start:false,isNoClick:true});
        this.setData({ isShowAlert: true, isFail: true });
        wx.setStorageSync("answerRes",this.data.isFail);
        console.log('countNum=' + countNum);
        // bgAudio.src = "";
        // BackgroundAudioManager.stop();
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
    return $.sharePath()
  }
})