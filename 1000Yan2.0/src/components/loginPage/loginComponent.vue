<template>
<div class="login-wrap">
	
	<div class="login">
		<img src="../../common/img/img_signin_logo@3x.png" alt="" class="logo">
		<div class='form-group'>
			<qy-input v-show="phoneLogin" :icon='iconArr[0]' :holder='holderArr[0]'></qy-input>
			<qy-input-btn v-show="phoneLogin" :icon='iconArr[1]' :holder='holderArr[1]'></qy-input-btn>
			<!-- 用户名密码登陆 -->
			<qy-input v-show="!phoneLogin" :icon='iconArr[2]' :holder='holderArr[2]'></qy-input>
			<qy-input v-show="!phoneLogin" :icon='iconArr[3]' :holder='holderArr[3]'></qy-input>
			
		</div>
		<yd-button size="large" class='login-btn'>立即登陆</yd-button>
		<div class="forget-register">
			<a href="forget.html">忘记密码?</a>
			<a href="register.html">立即注册</a>
		</div>
		<h1 @click='phoneLogin=!phoneLogin'>{{phoneLogin?'账号密码登陆':'手机号快捷登陆'}}</h1>
		<div class="other-loagin">
			<div class="title">
				<div>.............................</div>
				<h2>其他登陆方式</h2>
				<div>.............................</div>
			</div>
			<div class="other-way">
				<a href="#">
					<img src="./icon_signin_qq@3x.png" alt="">
				</a>
				<a href="#">
					<img src="./icon_signin_weibo@3x.png" alt="">
				</a>
				<a href="#">
					<img src="./icon_signin_weixin@3x.png" alt="">
				</a>
			</div>
		</div>
		<div class="protocol">
			<yd-checkbox v-model="checkbox1" color="#adb3b9">
				我已阅读并接受千言小说的
			</yd-checkbox>
			<a href="#">用户协议</a>
		</div>
	</div>
	
</div>		
</template>
<script>
import QyInput from 'components/inputComponent/inputNotBtn';
import QyInputBtn from 'components/inputComponent/inputBtn';
export default{
	name:'login-wrap'
	,data()
	{
		return {
			phoneLogin:true//手机登陆
			,checkbox1:true//同意千言协议
			,iconArr:['phone','login-code','user-name','password']
			,holderArr:['请输入手机号码','请输入验证码','请输入用户名','请输入密码']
		}
	}
	,components:{QyInput,QyInputBtn}
}		
</script>
<style>
.login .logo{
	display: block;
    width: 2.3rem;
    margin: .8rem auto;
}	
.login{
	width:90%;
	margin:0 auto;
}
.login-btn{
	background: #f46094;
	color:#fff;
	border-radius:1rem;
	font-size: .5rem;
}
.login-btn:active{
	background:#f45555;
}
.login .forget-register{
	display:flex;
	color:#adb3b9;
	font-size:.4rem;
	justify-content: space-around;
	padding:.3rem .5rem;
}
.login h1{
	color:#81bbf1;
	font-size:.5rem;
	text-align: center;
}
.login .other-way,.login .title{
	display: flex;
	justify-content: space-around;
}
.login .title{
	justify-content: space-between;
	font-size: .4rem;
	color:#adb3b9;
	margin-bottom: .2rem;
}
.login .title div{
	width:25%;
	overflow: hidden;
}
.login .title h2{
	padding-top:.1rem;
}
.login .other-loagin{
	margin:.6rem 0 .3rem;
}
.login .other-way img{
	height:.7rem;
}
.login .protocol{
	display: flex;
	justify-content: center;
}	
.login .protocol .yd-checkbox{
   	padding:0;
}

.login .protocol .yd-checkbox-text{
	color:#adb3b9;
	font-size:.3rem;
}
.login .protocol a{
	color:#81bbf1;
	font-size: .3rem;
	padding-top: .04rem;
}
</style>