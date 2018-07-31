<template>
<div class="qy-detail-group">
	<ul class="qy-detail-wrap qy-detail-3">
		<li class="fans-title">
			<div class="left">
				<img src="./img/icon_sjxq_paihang@3x.png" alt="" class="fans-rank">
				<b>粉丝排行榜</b>
			</div>
			<div class="right" @click.stop='goReward'>
				<img src="./img/icon_sjxq_dashang@3x.png" alt="">
			</div>
		</li>
		<li class="">
			<div class="left">
				<img src="./img/icon_sjxq_01@3x.png" alt="" class="fans-rank">
				<span>粉丝排行榜</span>
			</div>
			<div class="right">
				1000
			</div>
		</li>
	</ul>
	<!-- 打赏窗口 -->
    <give-reward :show='showReward' @isShow='isShowReward'></give-reward>
</div>		
</template>
<script>
import GiveReward from '../giveReward/giveReward';
export default{
	name:'fans'
	,components:{GiveReward}
	,data(){
		return{
			showReward:false
		}
	}
	,methods:{
		goReward(){
			this.showReward=true;
		}
		,isShowReward(val){
			this.showReward=val;
		}
	}
	,mounted(){
	}
}		
</script>
<style>
.qy-detail-3 li{
	font-size:.4rem;
	color:#757575;
	display: flex;
	justify-content:space-between;
	padding:.2rem 0;
	border-bottom: .02rem solid #f1f2f6;

}
.qy-detail-3 .left img{
	height:.6rem;
	vertical-align: middle;
}	
.qy-detail-3 .right img{
	width:2rem;
}	
</style>