<template>
<div class="app-wrap">
	<header-tag title='注册'></header-tag>
	<img src="../../common/img/img_signin_logo@3x.png" alt="" class="logo">
	<div class="register-wrap">
		<qy-input :icon='iconArr[0]' :holder='holderArr[0]'></qy-input>
		<qy-input-btn :icon='iconArr[1]' :holder='holderArr[1]'></qy-input-btn>
		<yd-button size="large" class='qy-btn'>确认</yd-button>
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
import HeaderTag from 'components/secondHeader/secondHeader';
import QyInput from 'components/inputComponent/inputNotBtn';
import QyInputBtn from 'components/inputComponent/inputBtn';

export default{
	name:'app'
	,components:{HeaderTag,QyInput,QyInputBtn}
	,data(){
		return{
			holderArr:['输入手机号','输入验证码']
			,iconArr:['phone','login-code']
			,checkbox1:true
		}
	}
}	
</script>
<style>
body{
	background: #fff;
}
.register-wrap{
	width:90%;
	margin:0 auto;
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
.protocol{
	display: flex;
	justify-content: center;
	margin:.5rem;
}	
.protocol .yd-checkbox{
   	padding:0;
}

.protocol .yd-checkbox-text{
	color:#adb3b9;
	font-size:.3rem;
}
.protocol a{
	color:#81bbf1;
	font-size: .3rem;
	padding-top: .04rem;
}
</style>