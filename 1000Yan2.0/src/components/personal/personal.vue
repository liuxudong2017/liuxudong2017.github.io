<template>
	<yd-popup v-model="show" position="left" width="88%" class="personal" @click.native='fun'>
		<yd-cell-group>
			<yd-cell-item v-if='isLogin' class="header border-b">
	           	<img src="https://www.1000yan.com/upload/image/20170621/1498008997595975.png" alt="" slot='icon' class='yq-user-img'>
	            <span slot="left">
	            	<span class='qy-user-name qy-text-item-2'>Ambition</span>
	            	<span class="qy-read-num qy-text-item-2">累计阅读<b>4627</b>字,排名<b>19</b></span>
	            </span>
	            <span slot='right'>
					<img src="./btn_grzx_chongzhi@3x.png" alt="" class='qy-recharge-btn'>
	            </span>

	        </yd-cell-item>
	        <yd-cell-item v-if='!isLogin' :class="{'header border-b':true}" @click.native='goLogins'>
	           	<img src="./pic_grzx_wei@3x.png" alt="" slot='icon' class='yq-user-img'>
	            <span slot="left">
	            	<span class='qy-user-name qy-text-item-2'>未登录</span>
	            	<span class="qy-read-num qy-text-item-2">
	            		快登陆去跟第009088为用户PK一下吧
	            	</span>
	            </span>
	        </yd-cell-item>
	        <yd-cell-item :type='types' href='myAccount.html' @click.native='goLogins'>
	           	<img src="./icon_grzx_qianbao@3x.png" alt="" slot='icon'>
	            <span slot="left">
	            	<span class='qy-user qy-text-item-2'>我的账户</span>
	            	<span v-if='isLogin' class="qy-balance qy-text-item-2">我的账户余额：9090</span>
	            </span>

	        </yd-cell-item>
	         <yd-cell-item :type='types' href='attendance.html' @click.native='goLogins'>
	            <img slot="icon" src="./icon_grzx_wdqd@3x.png">
	            <span slot="left">我的签到</span>
	        </yd-cell-item>
			
        </yd-cell-group>
        <yd-cell-group>
        	 <yd-cell-item :type='types' href='myRank.html' :class="{'qy-paiming':true}">
	            <img slot="icon" src="./icon_grzx_paiming@3x.png">
	            <span slot="left">我的排名</span>
	        </yd-cell-item>
	        <yd-cell-item :type='types' href='myFavorite.html' @click.native='goLogins'>
	            <img slot="icon" src="./icon_grzx_collection@3x.png">
	            <span slot="left">我的收藏</span>
	        </yd-cell-item>
	        <yd-cell-item :type='types' href='myComment.html' @click.native='goLogins'>
	            <img slot="icon" src="./icon_grzx_comment@3x.png">
	            <span slot="left">我的评论</span>
	        </yd-cell-item>
	        <yd-cell-item :type='types' href='myMessage.html' @click.native='goLogins'>
	            <img slot="icon" src="./icon_grzx_news@3x.png">
	            <span slot="left">我的消息</span>
	        </yd-cell-item>
        </yd-cell-group>
        <yd-cell-group class='qy-bottom'>
        	<yd-cell-item :type='types' href='mySetting.html' @click.native='goLogins'>
	            <img slot="icon" src="./icon_grzx_set@3x.png">
	            <span slot="left">设置</span>
	        </yd-cell-item>
        </yd-cell-group>
	</yd-popup>
</template>
<script>
import {goMyAccount,goLogin} from 'common/url';
	export default{
		name:'personal',
		props:['showPersonal'],
		data(){
			return{
				// show:true,
				show:this.showPersonal,
				isLogin:true,

			}
		},
		computed:{
			show1(){
				return this.show
			},
			types(){
				return this.isLogin?'a':'div'
			}
		},
		watch:
		{
			showPersonal(val){
				this.show=val
			},
			show(val){
				if(val==false){
					this.$emit('hideP');
				}
			}
		},
		methods:{
			goLogins()
			{

				if(!this.isLogin){
					console.log('去登陆....');
					location.href=goLogin;
				}else{
					
				}
			},
			fun(){
				console.log('00000----');
				console.log(goLogin);
				this.$emit('BackNewMess','来自个人中心的消息')
			}
		}
		
	}
</script>
<style>
	.personal .yd-cell{
		background: #f06898;
	}
	.personal .yd-cell-item{
		padding-bottom:.1rem;
		padding-top:.1rem;
		border-bottom: .02 solid #f27aa4;
	}
	.personal .yd-cell-left{
		font-size:0.34rem;
		color:#fff;
	}
	.personal .yd-popup{
		background: #f46094;
	}
	.personal .qy-text-item-2{
		display: block;
	}
	.personal .qy-balance{
		font-size:0.26rem;
		color:#a8ffff;
	}
	.personal .yd-cell-icon img.yq-user-img{
		height: 1rem;
		border-radius: 50%;

	}
	.personal .qy-user-name{
		font-size:0.36rem;
	}
	.personal .qy-read-num{
		font-size:0.24rem;
	}
	.personal .qy-recharge-btn{
		width:2rem;
	}
	.personal .header{
		padding-top:0.48rem;

	}
	.personal .qy-paiming{
		margin-top: .2rem;
		border-top:.02rem solid #f27aa4;
	}
	
	.personal .yd-cell a.yd-cell-item{
		background: #f06898;
	}
	.personal .qy-bottom{
		position: absolute;
	    width: 100%;
	    bottom: 0;
	    margin-bottom: 0;
	}
</style>