// const Encrypt = require('crypto.js');
// const qs = require('qs/dist/qs.js');
let https ="https://program.wop100.cn";
let http ="http://bank.maoyestudio.com";
const api={
  registerInterface:https+"/smallProgram/register"	//注册 POST
  , getUserInfoInterface: https +'/smallProgram/getUserInfo'//获取用户信息
  , getMessListInterface: https +"/smallProgram/getMessageList"//获取消息列表
  , getQuestionListInterface: https+"/smallProgram/getQuestionList"//获取问题列表
  , getOptionListInterface: https+"/smallProgram/getOptionList"//获取选择列表
  , getSurveyListInterface: https+"/smallProgram/getSurveyList"//获取问卷
  , getJoinLuckdrawInterface: https+"/smallProgram/joinLuckdraw"//抽奖接口
  , getLuckdrawCountInterface:https+"/smallProgram/getLuckdrawCount"//获取抽奖的人
  , saveSurveyInterface: https+"/smallProgram/saveSurvey"//提交问卷
  , getRankInterface: https +"/smallProgram/getVoucharOrderList"//获得排行榜
  , getOperLogInterface: https+"/smallProgram/getOperLog"//动态日志
  , getFriendListInterface: https +"/smallProgram/getFriendList"//好友列表
  , submitAnswerInterface: https +"/smallProgram/answerAddVouchar"//提交答案
  , answerLuckyInterface: https +"/smallProgram/joinLuckdraw"//答题抽奖
  , depostRnbInterface: https +"/smallProgram/drawCash"//提现接口
}
function toasts(str,icon){
  icon ? '' : icon = "none";
  wx.showToast({
    title: str,
    icon: icon,
    duration: 2000
  });
}

function getAuthorizeLocation(){
  console.log('-=-=-=');
  let promise=new Promise((resolve,reject)=>{
    // 授权获取位置 start
    wx.authorize({
      scope: "scope.address", success: (res) => {//用户授权
        console.log(res);
        wx.getLocation({
          success: function (res) {
            console.log('定位sss')
            console.log(res);
            resolve(res);
            console.log('定位 eee')

          }
        })
      },
      fail:err=>{reject(err)}
    })
        //授权位置 end
  })
  return promise;
}
function setNavigationBar(obj){
  let defaultObj={
    title:'发动机答题',
    bgColor:"#0168b5"
  }
  let title=obj.title?obj.title:defaultObj.title;
  let bgColor=obj.bgColor?obj.bgColor:defaultObj.bgColor;
  wx.setNavigationBarTitle({
    title:title
  });
  wx.setNavigationBarColor({
    frontColor:'#000000',
    backgroundColor:bgColor
  })
}
function getBgAudio(){
  if (wx.getBackgroundAudioManager) {
    return wx.getBackgroundAudioManager();
  } else {
    //
    wx.showModal({
      title: '提示',
      content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
    })
  }
}

function ajax(url,param,method){
 
  let promise=new Promise((r,j)=>{
    wx.request({
      url:url,
      method: method ? method:"post",
      header: method=="get" ? {
        'X-Requested-With': 'XMLHttpRequest',
        "Accept": "application/json",
        "Content-Type": "application/json; charset=UTF-8"
      } : {
          'X-Requested-With': 'XMLHttpRequest',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        data:param,
      success:(res)=>{
        if(res.statusCode==200&&res.data.responseCode=="000000"){
          r(res);
        }else{
          toasts(res.data.responseMsg);
          console.log(res,"失败");
        }
       
      },
      fail:(err)=>{
        j(err);
      }
    })

  });
  return promise;
}
function getParam(headerObj,bodyObj){
  let param={
    "requestHead":headerObj,
    "requestBody":bodyObj
  };
  return {"encryptData":JSON.stringify(param)};
}
function getUserInfo(fid){//获取用户信息
  fid?'':fid="";
  let promise;
 
  if (wx.getStorageSync("info")){
    let info = wx.getStorageSync("info");
    // info = JSON.parse(info);
    console.log(info,"获取用户信息.....");
    let param = getParam({}, {
       "openid": wx.getStorageSync("openid")
      ,
      "code":'',
      "friend_openid": fid,
      "username": info.nickName,
      "sex": -1,
      "headimgurl": info.avatarUrl
     });
    return  ajax(api.getUserInfoInterface,param);
  }else{
    promise=new Promise((rq,j)=>{
      wx.getUserInfo({
        success: res => {
          wx.login({
            success: r => {
              let param = getParam({}, {
                "openid": '',
                "code": r.code,
                "friend_openid": fid,
                "username": res.userInfo.nickName,
                "sex": -1,
                "headimgurl": res.userInfo.avatarUrl
              });
              ajax(api.getUserInfoInterface, param).then(res=>{
                  wx.setStorageSync("openid",res.data.data.openid);
                  rq(res);
              })
            }
          })
        }
      });
      // --------------
    });
    
  }
  return promise;
}

function wxLogin(){
  let promise=new Promise((r,j)=>{
    try{
      wx.login({
        success:res=>{r(res)},
        fail:err=>{j(err)}

      })
    }catch(err){console.log(err);}
  });
  return promise;
}
function sharePath(){
  return {
    title:"发动机答题"
    ,path:"/pages/index/index?share_id="+wx.getStorageSync("openid")
    , imageUrl:"../../img/share-img.png"
    }
}
function startMusic(){
  let bg = getBgAudio();
  bg.src ="https://program.wop100.cn/music/music-128.mp3";
  bg.title="答题小程序";
  bg.play();
}
function stopMusic(){
  let bg = getBgAudio();
  bg.stop();
}
const $={
  toasts: toasts,
  getAuthorizeLocation: getAuthorizeLocation,
  setNavigationBar
  , getBgAudio
  ,ajax
  ,api
  , getParam
  , getUserInfo
  ,wxLogin
  ,sharePath
  , startMusic
  , stopMusic
}
module.exports=$;