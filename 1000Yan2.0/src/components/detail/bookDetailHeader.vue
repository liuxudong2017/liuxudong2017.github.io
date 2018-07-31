<template>
<div class="qy-detail-group">
	<div class="qy-detail-1 qy-detail-wrap">
		<div class="qy-detail-top">
			<img :src="imgSrc" alt="" class="qy-book-img">
			<ul class="qy-left">
				<li class="qy-book-name">{{bookName}}</li>
				<li>
					<img :src="authorPic" alt="" class="qy-author-pic">
					<span class="qy-author">{{authorName}}</span>
				</li>
				<li class='qy-rate'>
					<yd-rate slot="left" v-model="gradeNum" color="#F0C53A" active-color="#F0C53A"></yd-rate>
            		<span slot="right">{{gradeNum}}.0分</span>
				</li>
				<li class="qy-book-number">
					<span>{{bookNum}}</span>字
				</li>
				<li class="qy-book-type">
					<span v-for='(val,key) in bookType' :key='key'>
						{{val}}
					</span>
				</li>
			</ul>
		</div>
		
	</div>
	<ul class="qy-detail-bottom">
			<li @click.stop='collectFun'>
				<img v-if='!isActiveCollect' src="./img/icon_sjxq_collection_n@3x.png" alt="">
				<img v-else-if='isActiveCollect' src="./img/icon_sjxq_collection_h@3x.png" alt="">
				<p class="textColor">{{collectNum}}人收藏</p>
			</li>
			<li @click.stop='recommendFun'>
				<img v-if='!isActiveRecommend' src="./img/icon_sjxq_zan_n@3x.png" alt="">
				<img v-if='isActiveRecommend' src="./img/icon_sjxq_zan_h@3x.png" alt="">
				<p class="textColor">{{recommendNum}}人推荐</p>
			</li>
			<li @click.stop='isShowShare=true'>
				<img src="./img/icon_sjxq_share@3x.png" alt="">
				<p class="textColor">分享</p>
			</li>
		</ul>
		<!-- share弹窗 -->
		<div class="qy-share-pop" v-if='isShowShare' @click.stop='isShowShare=false'>
			<div class="qy-share-group" @click.stop=''>
				<h1>分享到社交平台</h1>
				<ul class="qy-share-item">
					<li>
						<img src="./img/icon_sharetk_weibo@3x.png" alt="" class="qy-share-icon">
						<p>新浪微博</p>
					</li>
					<li>
						<img src="./img/icon_sharetk_kongjian@3x.png" alt="" class="qy-share-icon">
						<p>QQ空间</p>
					</li>
					<li>
						<img src="./img/icon_sharetk_qq@3x.png" alt="" class="qy-share-icon">
						<p>QQ</p>
					</li>
					<li>
						<img src="./img/icon_sharetk_weixin@3x.png" alt="" class="qy-share-icon">
						<p>微信</p>
					</li>
					<li>
						<img src="./img/icon_sharetk_pyq@3x.png" alt="" class="qy-share-icon">
						<p>微信空间</p>
					</li>
					<li>
						<img src="./img/icon_sharetk_fuzhi@3x.png" alt="" class="qy-share-icon">
						<p>复制链接</p>
					</li>
					
				</ul>
				<div class="qy-btn" @click='isShowShare=false'>取消</div>
			</div>
		</div>
</div>		
</template>
<script>
export default{
	name:'DetailItem1'
	,data(){
		return{
			imgSrc:'https://www.1000yan.com/upload/image/20180105/1515130463620099.jpg'
			,authorPic:'http://www.1000yan.com/upload/image/20170621/1498008997595975.png'
			,authorName:'猫'
			,gradeNum:4
			,bookType:['VIP','已签约','首发','连载中']
			,bookName:'的链接发来的肌肤'
			,bookNum:33333
			,collectNum:322
			,recommendNum:898
			,isActiveCollect:false
			,isActiveRecommend:false
			,isShowShare:false
		}
	}
	,methods:{
		collectFun(){
			this.isActiveCollect=!this.isActiveCollect;
			this.isActiveCollect?this.collectNum++:this.collectNum--;
		}
		,recommendFun(){
			this.isActiveRecommend=!this.isActiveRecommend;
			this.isActiveRecommend?this.recommendNum++:this.recommendNum--;
		}
	}
}		
</script>
<style>

.qy-detail-1 .qy-detail-top{
	display: flex;
	justify-content: flex-start;
}
.qy-detail-1 .qy-book-img{
	height:3rem;
	border-radius: .16rem;
}
.qy-detail-1 .qy-book-name{
	font-size:.4rem;
	color:black;
}
.qy-detail-1 .qy-author-pic{
	width: .64rem;
	border-radius:50%;
	vertical-align: middle;
}	
.qy-detail-1 li{
	font-size:.3rem;
	color:#a3a9b2;
	margin:.1rem 0;
}
.qy-detail-1 .qy-left{
	padding-left:.2rem;
}
.qy-detail-1 .qy-book-number span{
	color:#f46094;
}
.qy-detail-1 .qy-rate{
	display:flex;
	justify-content: flex-start;
}
.qy-detail-1 .qy-rate span:nth-child(2){
	padding-top:.1rem;
}
.qy-detail-1 .qy-book-type span:before{
	content: '';
	border-left: .02rem solid #a3a9b2;
}
.qy-detail-1 .qy-book-type span:nth-child(1){
	color:#f46094;
}
.qy-detail-bottom img{
	height:.6rem;
}
.qy-detail-bottom{
	display: flex;
	justify-content:space-between;
	background: #fbfcfd;
	border-top: .02rem solid #f2f5f7;
	border-bottom:.02rem solid #f2f5f7;
}
.qy-detail-bottom .textColor{
	color:#f46094;
	
}
.qy-detail-bottom li{
	border-left:.02rem solid #f2f5f7;
	width:33%;
	text-align: center;
	padding:.1rem;

}
.qy-detail-bottom li:nth-child(1){
	border:0;
}
.qy-share-pop{
	position: fixed;
	left:0;
	top:0;
	width:100%;
	height:100%;
	background: rgba(0,0,0,.5);
	z-index: 666;
}
.qy-share-pop .qy-share-group{
	position: absolute;
	bottom: 0;
	width:100%;
	background: #fff;
}
.qy-share-pop .qy-share-icon{
	width:1rem;
}
.qy-share-pop .qy-share-item{
	width:80%;
	margin:0 auto;
	display: flex;
	flex-wrap: wrap;
}
.qy-share-pop .qy-share-item li{
	margin:.3rem .38rem .3rem 0;
	text-align: center;
}
.qy-share-pop h1{
	text-align: center;
	font-size:.5rem;
	padding:.5rem 0 .3rem;
	border-bottom:.02rem solid #f1f2f6;
}
.qy-share-pop .qy-btn{
	text-align: center;
	border-top:.02rem solid #f1f2f6;
	font-size:.45rem;
	font-weight:600;
	padding:.3rem;
	color:#707376;
}
</style>