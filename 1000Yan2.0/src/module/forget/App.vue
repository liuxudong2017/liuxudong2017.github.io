<template>
<div class="app-wrap">
	<header-tag title='忘记密码'></header-tag>
	<img src="../../common/img/img_signin_logo@3x.png" alt="" class="logo">
	<div class="forget-wrap">
		<qy-input :icon='iconArr[0]' :holder='holderArr[0]'></qy-input>
		<qy-input-btn :icon='iconArr[1]' :holder='holderArr[1]'></qy-input-btn>
		<qy-input :icon='iconArr[2]' :holder='holderArr[2]'></qy-input>
		<qy-input :icon='iconArr[3]' :holder='holderArr[3]'></qy-input>
		<yd-button size="large" class='qy-btn'>确认</yd-button>
		<div class='go-register'>
			<a href="register.html">立即注册</a>
		</div>
	</div>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import QyInput from 'components/inputComponent/inputNotBtn';
import QyInputBtn from 'components/inputComponent/inputBtn';

export default{
	name:'app'
	,components:{HeaderTag,QyInput,QyInputBtn}
	,data(){
		return {
			holderArr:['输入手机号','输入验证码','设置新的密码','再次输入密码']
			,iconArr:['phone','login-code','password','password']
		}
	}
}	
</script>
<style>
	body{
		background: #fff;
	}	
	.forget-wrap{
		width:90%;
		margin:.5rem auto;
	}
	.forget-wrap .go-register{
		display:flex;
		color:#adb3b9;
		font-size:.4rem;
		justify-content: space-around;
		padding:.3rem .5rem;
	}
	.logo{
	display: block;
    width: 2.3rem;
    margin: .8rem auto;
}	
.qy-btn{
	background: #f46094;
	color:#fff;
	border-radius:1rem;
	font-size: .5rem;
}
.qy-btn:active{
	background:#f45555;
}
</style>