<template>
<div class="qy-wrap">
	<header-tag title='个人信息设置'></header-tag>
	<div class="qy-persoanl-body">
		<label class="qy-header-img">
			<img v-if='isDefaultHeaderPic' src="../../common/img/pic_touxiang_unlog@3x.png" alt="">
			<img v-else-if='!isDefaultHeaderPic' :src="headerPic" alt="">
			<input type="file" id="file" multiple>
		</label>
			<input type="text" class='qy-item' placeholder='设置用户名'>
		<!-- SEX SSSS -->
		<div class="qy-sex qy-item" @click.stop='showSexGroup=true'>
			{{sex}}
		</div>
		<div class="qy-sex-group" @click.stop='showSexGroup=false' v-if='showSexGroup'>
				<div class="qy-sex-item">
					<div class="qy-man qy-btn" @click.stop='setSex("男")'>男</div>
					<div class="qy-woman qy-btn" @click.stop='setSex("女")'>女</div>
					<div class="qy-cancel-btn qy-btn">取消
					</div>
				</div>
		</div>
		<!-- SEX EEEE -->
		<yd-datetime type="date" start-year='1900' v-model="birthday" slot="right" class='qy-item'>
		</yd-datetime>
		<input type="password" class='qy-item' placeholder='设置密码'>
		<input type="password" class='qy-item' placeholder='请再次输入密码'>
		<yd-button size="large" class='qy-login-btn'>保存设置</yd-button>
	</div>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import {getIos} from 'common/js/utils/judgePhone';
export default{
	name:'personalSetting'
	,components:{HeaderTag}
	,data(){
		return{
			isDefaultHeaderPic:false
			,headerPic:'https://www.1000yan.com/upload/image/20170621/1498008997595975.png'
			,sex:'男'
			,birthday:'1988-7-8'
			,showSexGroup:false
		}
	}
	,methods:{
		isIos:getIos
		,setSex(val){
			this.sex=val;
			this.showSexGroup=false;
		}
	}
	,mounted(){
		
	}
}	


</script>
<style>
body{
	background: #fff;
}
.qy-item{
	display: block;
    width: 90%;
    margin: .6rem auto;
    border: 0;
    text-align: center;
    font-size: .5rem;
    border-bottom: .02rem solid #e8eaf1;
    padding-bottom: .2rem;
}
.qy-sex-group{
	position: absolute;
	top:0;
	left:0;
	width:100%;
	height:100%;
	background:rgba(144,144,144,.5);
	z-index:666;

}
.qy-sex-group .qy-sex-item{
	position: absolute;
	bottom:0;
	width:100%;
}
.qy-sex-group .qy-btn{
	width:90%;
	margin:0.2rem auto;
	background:#fff;
	border-radius:.3rem;
	padding:.4rem;
	color:#5797ED;
	font-weight: 600;
	font-size: .5rem;
	text-align: center;
}
.qy-sex-group .qy-man{
	border-radius: .3rem .3rem 0 0;
	margin-bottom:0;
	border-bottom: .02rem solid #b2b2b2
}
.qy-sex-group .qy-woman{
	border-radius: 0 0 .3rem .3rem;
	margin-top:0;
}
.qy-header-img{
	display: block;
	text-align: center;
    margin-top:.8rem;
    margin-bottom: .6rem;
}
.qy-header-img img{
	width:1.74rem;
	border-radius: 50%
}	
#file{
	display: none;
}
.qy-login-btn{
	background: #f46094;
	color:#fff;
	border-radius:1rem;
	font-size: .5rem;
	width:90%;
	margin:0 auto;
}
.qy-login-btn:active{
	background:#f45555;
}	
</style>