<template>
<div class="qy-chapter-tool">
	 <yd-tabbar fixed bgcolor='#f46094' color='#fff'>
	 	<yd-tabbar-item title="目录" type='a' @click.native="showDirectory=true">
	 		<i class="iconfont icon-menu" slot='icon'></i>
	 	</yd-tabbar-item> 	
        <yd-tabbar-item title="打赏" type='a' @click.native="showReward=true">
            <i class="iconfont icon-dashang" slot='icon'></i>
        </yd-tabbar-item>
        <yd-tabbar-item title="充值" type='a' @click.native='showRechargeYb=true'>
           <i class="iconfont icon-chongzhi" slot='icon'></i>
        </yd-tabbar-item>
        <yd-tabbar-item title="夜间模式" type='a' v-if='!bgActive[0]' @click.native='bgMode(0)'>
            <i class="iconfont icon-yueliang" slot='icon'></i>
        </yd-tabbar-item>
        <yd-tabbar-item title="日间模式" type='a' v-if='bgActive[0]' @click.native='bgMode(0)'>
            <i class="iconfont icon-taiyang" slot='icon'></i>
        </yd-tabbar-item>
        <yd-tabbar-item title="设置" type='a' @click.native='showSetting=!showSetting'>
            <i class="iconfont icon-Aa" slot='icon'></i>
        </yd-tabbar-item>
    </yd-tabbar>
    <div class="qy-add-bookrack">
    	加入书架
    </div>
    <!-- 3级功能区域S -->
    	<!-- 目录S -->
    	<yd-popup v-model="showDirectory" position="left" width="80%">
			<directory :theme='themeDirectory'></directory>

        </yd-popup>
    	<!-- 目录E -->
    	<!-- 打赏S -->
    	<give-reward :show='showReward' @isShow='giveRewards'></give-reward>
    	<!-- 打赏E -->
    	<!-- 设置S -->
    	<div class="qy-chapter-setting" v-if='showSetting'>
    		<div class="qy-setting-font">
    			<span @click='fontCallBack(0)'>A-</span>
    			<span>{{fontSize}}</span>
    			<span @click='fontCallBack(1)'>A+</span>
    		</div>
    		<ul class="qy-setting-bg">
    		<li v-for='n in 4' @click='bgMode(n)' :key='n' :class='{"qy-bg-active":setBgActive(n)}'>
    				
    			</li>
    		</ul>
    	</div>
    	<!-- 设置E -->
    	<!-- 充值S -->
    	<qy-recharge-yb v-if='showRechargeYb' :show='showRechargeYb' @listenRechargeYb='listenRechargeYb'></qy-recharge-yb>
    	<!-- 充值E -->
    <!-- 3级功能区域E -->
</div>		
</template>
<script>
import giveReward from 'components/giveReward/giveReward';
import qyRechargeYb from 'components/rechargeYb/rechargeYb';
import directory from 'components/directory/directory';
export default{
	name:''
	,props:['bg','font']
	,components:{giveReward,qyRechargeYb,directory}
	,watch:{
		font(){
			this.fontSize=this.font;
		}
		,bg(){
			this.bgActive=this.bg;
		}
	}
	,data(){
		return{
			showDirectory:false//目录
			,themeDirectory:1//1 没有卷：2有卷;
			,showReward:false//打赏
			,fontSize:this.font
			,bgActive:this.bg
			,showSetting:false
			,showRechargeYb:false
		}
	}
	,methods:{
		giveRewards(val){//监测打赏事件
			this.showReward=val;
		}
		,bgMode(model){//背景色切换
			let val;
			let valArr=[false,false,false,false];
			switch(model){
				case 0://夜间模式-日间模式
					val=!this.bgActive[model];
					this.bgActive=[val,...valArr];
					break;
				case 1:
				case 2:
				case 3:
				case 4:
					val=true;
					valArr[model-1]=val;
					this.bgActive=[this.bgActive[0],...valArr];
					break;
			}
			// this.$set(this.bgActive,model,val);
			this.$emit('listenTool',{'bgColor':model,type:'bg','nightMode':this.bgActive[0]});

		}
		,setBgActive(index){
			return this.bgActive[index];
		}
		,fontCallBack(type){//设置字体大小:type:0 小字体；1：大字体
			if(type==0){
				--this.fontSize<1?this.fontSize=1:'';
			}else{
				++this.fontSize>5?this.fontSize=5:'';
			}
			this.$emit('listenTool',{'fontSize':this.fontSize,type:'fs'})
		}
		,listenRechargeYb(val){//监听充值...
			this.showRechargeYb=val;
		}
	}
}		
</script>
<style>
.qy-chapter-tool{
	background:#f46094;
    position: fixed;
    bottom: 1.0rem;
    width: 100%;
}
.qy-add-bookrack{
	position: fixed;
	right:0;
	top:2rem;
	background:#f46094;
	color:#fff;
	border-radius: 1rem 0 0 1rem;
	padding:.2rem;
	font-size:.4rem;
}
.qy-chapter-setting{
	padding-top:.2rem;
}
.qy-setting-font{
	text-align: center;
	font-size:.6rem;
	color:#fff;
}
.qy-setting-font span{
	display: inline-block;
	width:1.6rem;
	height:.8rem;
	border:.02rem solid #fff;
	border-radius: .2rem;
}
.qy-setting-font span:nth-of-type(2){
	border-color:transparent;
}
.qy-setting-bg{
	display: flex;
	justify-content: space-around;
	margin:.2rem auto;
}
.qy-setting-bg li{
	width:15%;
	height:.5rem;
    line-height:.5rem;
    font-size:.4rem;
	background:#474d70;
    color: #f46094;
	text-align: center;
}
.qy-setting-bg li:nth-of-type(2){
	background: #6e6661;
}
.qy-setting-bg li:nth-of-type(3){
	background: #fae7e7;
}
.qy-setting-bg li:nth-of-type(4){
	background: #cdefe9;
}
.qy-bg-active:after{
	content:'\2714';
}
</style>