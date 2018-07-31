<template>
	<div class="">
		<header-tag navBarMess='排行' @showP='showP' :loginMess='loginMess'></header-tag>
		
		<Personal :showPersonal='isShow' @hideP='hideP'></Personal>
		<yd-tab class='riank-title'>
	        <yd-tab-panel label="阅读榜" class='label'>
	        	<rank-item></rank-item>
	        </yd-tab-panel>
	        <yd-tab-panel label="收藏榜" active class='label'>
	        	<rank-item></rank-item>
	        </yd-tab-panel>
	        <yd-tab-panel label="推荐榜" class='label'>
				<rank-item></rank-item>
	        </yd-tab-panel>
	        <yd-tab-panel label="新书榜" class='label'>
				<rank-item></rank-item>
	        </yd-tab-panel>
    	</yd-tab>
	</div>
</template>
<script>
import HeaderTag from 'components/header/header';
import Personal from 'components/personal/personal';
import RankItem from './rankItem';
	export default {
		name:'choiceness',
		components:{HeaderTag,Personal,RankItem},
		props:['newMess','golbMess'],
		data(){
			return{
				callMess:this.newMess,
				isShowP:false,
				loginMess:this.golbMess.loginMess
			}
		},
		created(){
			this.$emit('BackNewMess',3)
		},
		methods:{
			showP(){
				this.isShowP=true;
				
			},
			hideP(){
				this.isShowP=false;
			}
		},
		computed:{
			isShow(){
				return this.isShowP
			}
		}
	}
</script>
<style>
.yd-tab-nav{
	background: #f0f3f6;
}
.riank-title .yd-tab-nav-item{
	font-size:.36rem;
	font-weight: 800;
}
</style>