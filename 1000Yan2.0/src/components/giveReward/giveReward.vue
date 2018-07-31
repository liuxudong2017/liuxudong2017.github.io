<template>
<div class="qy-give-reward-wrap" v-if='isShow' @click.stop='isShowReward'>
	<ul class="qy-give-reward" @click.stop=''>
		<li class="qy-reward-title">打赏</li>
		<li class="qy-reward-text qy-max-width">作者大大更文辛苦，快用道具犒劳TA吧</li>
		<li class="qy-reward-prop qy-max-width">
			<div :class="{'qy-reward-prop-item':true,'qy-reward-active':isActive(0)}" @click.stop='triggerActive(0)'>
				<img src="./img/img_ds_bike@3x.png" alt="">
				<p>共享单车</p>
				<p>言币:100</p>
				<div class="qy-checked">
					&#8730;
				</div>
			</div>
			<div :class="{'qy-reward-prop-item':true,'qy-reward-active':isActive(1)}" @click.stop='triggerActive(1)'>
				<img src="./img/img_ds_bike@3x.png" alt="">
				<p>共享单车</p>
				<p>言币:100</p>
				<div class="qy-checked">
					&#8730;
				</div>
			</div>
		</li>
		<li class="qy-reward-spinner qy-max-width">
			 <yd-spinner width="3rem" height=".8rem" v-model="rewardSpinner"></yd-spinner>
		</li>
		<li class="qy-reward-btn qy-max-width" @click.stop='goGiveReward'>
			<yd-button size="large" class='qy-btn'>打赏</yd-button>
		</li>
	</ul>
</div>		
</template>
<script>
export default{
	name:'da-shang'
	,props:['show']
	,data(){
		return{
			rewardSpinner:1
			,rewardArr:[false,false,false,false,false]
			,rewardProp:0
			,isShow:false
		}
	}
	
	
	,watch:{
		show(){
			this.isShow=this.show
		}
	}
	,methods:{
		isActive(index){
			return this.rewardArr[index];
		}
		,triggerActive(index){
			for(let i=0;i<this.rewardArr.length;i++){
				this.rewardArr[i]=false;
			}
			this.rewardProp=index;
			this.rewardArr[index]=true;
			this.$set(this.rewardArr,index,true);
		}
		,goGiveReward(){
			console.log(this.rewardProp)
		}
		,isShowReward(){
			this.$emit('isShow',false);
		}
	}
	,mounted(){
		console.log(this.show)
	}
}	
</script>
<style scoped>
.qy-give-reward-wrap{
	position: fixed;
	left:0;
	top:0;
	width:100%;
	height:100%;
	background: rgba(0,0,0,.5);
	z-index: 666;
}
.qy-give-reward-wrap .qy-give-reward{
	position: absolute;
	bottom:0;
	left:0;
	width:100%;
	background: #fff;
}
.qy-give-reward .qy-reward-title{
	text-align: center;
	font-size:.5rem;
	padding:.3rem;
	border-bottom: .02rem solid #f1f2f6;
	color:black;
	font-weight:600;
}	
.qy-give-reward .qy-rewrad-text{
	font-size:.3rem;
	color:rgb(156,165,173);
}
.qy-give-reward .qy-max-width{
	width:90%;
	margin:0 auto;
}
.qy-give-reward .qy-reward-prop{
	display: flex;
	flex-wrap: wrap;
}
.qy-give-reward .qy-reward-prop-item{
	position: relative;
	text-align: center;
	font-size: 0;
	margin:.1rem .1rem .1rem 0;
}
.qy-give-reward .qy-reward-prop-item img{
	width:2rem;
	border:.02rem solid #f46094;
	border-radius:.1rem .1rem 0 0;
}
.qy-give-reward .qy-reward-prop-item>p:nth-of-type(1){
	border-radius: 0 0 .1rem .1rem;	
	font-size:.4rem;
	color:#fff;
	background:#f46094;
}	
.qy-give-reward .qy-reward-prop-item>p:nth-of-type(2){
	border-radius: 0 0 .1rem .1rem;
	font-size:.3rem;
	color:rgb(181,182,197);
	padding:.1rem;
}
.qy-give-reward .qy-reward-prop-item .qy-checked{
	position: absolute;
	top:0;
	left:0;
	width:100%;
	background: rgba(0,0,0,.5);
	font-size:.4rem;
	text-align: center;
	padding:.3rem 0;
	color:#fff;
	font-weight:900;
	border-radius:.1rem;
	display: none;
}	
.qy-give-reward .qy-reward-active .qy-checked{
	display: block;
}
.qy-give-reward .qy-reward-spinner{
	text-align: center;
}
.qy-give-reward .qy-btn{
	background: #f46094;
	color:#fff;
	border-radius:1rem;
	font-size: .5rem;
	margin-bottom:.3rem;
}
.qy-give-reward .qy-btn:active{
	background:#f45555;
}
.qy-give-reward .qy-reward-text{
	font-size: .4rem;
	color:gray;
}
.qy-reward-prop-item p{
	background: #fff;
}
</style>