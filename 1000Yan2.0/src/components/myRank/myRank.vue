<template>
<div class="my-rank-wrap">
	<div class="my-rank-header">
		<div class="user-name">{{userName}}</div>
		<p>击败了{{percent}}%的读者</p>
	</div>
	<div class="my-rank-step">
		<ul class="step">
			<li>
				<span class="top"><b>{{fontNum}}</b>字</span>
				<span class="bottom">阅读字数</span>
			</li>
			<li>
				<span class="top"><b>{{rankNum}}</b>名</span>
				<span class="bottom">当前阅读排名</span>
			</li>
		</ul>
		<img :src="userImg" alt="" class="user-img">
	</div>
	<div class="my-rank-body">
		<yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">

	        <yd-list theme="4" slot="list">
	            <yd-list-item v-for="item, key in list" :key="key">
	                <img slot="img" :src="item.img">
	                <span slot="title">{{item.title}}</span>
	                <yd-list-other slot="other">
	                    <div>
	                        <span class="list">已阅读{{item.readNum}}字</span>
	                       
	                    </div>
	                    <div>
	                    	<img v-if='key==0' src="./icon_pm_1@3x.png" alt="" class='icon-img'>
	                    	<img v-if='key==1' src="./icon_pm_2@3x.png" alt="" class='icon-img'>
	                    	<img v-if='key==2' src="./icon_pm_3@3x.png" alt="" class='icon-img'>
	                    </div>
	                </yd-list-other>
	            </yd-list-item>
	        </yd-list>

	        <!-- 数据全部加载完毕显示 -->
	        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

	        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
	        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

    	</yd-infinitescroll>
	</div>
</div>		
</template>
<script>
export default{
	name:'myRank'
	,data(){
		return {
			userName:'A.mbition'
			,percent:80
			,userImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
			,fontNum:44588
			,rankNum:852
			,list: [
                    {
                        img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36,
                        readNum:89898
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
                        title: "标题标题标题标题标题标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    }
                ]
		}
	}
}		
</script>
<style>
.yd-navbar:after{
	border:0;
}
.my-rank-wrap{
	width:100%;
	height:4.5rem;
	background:#f46094;
	position: relative;
}	
.my-rank-header{
	width:80%;
	margin:0 auto;
	color:#fff;
	font-size:.3rem;
}
.user-name{
	font-size:.5rem;
	font-weight:600;
}
.my-rank-step{
	display:flex;
	justify-content: flex-start;
	margin:.6rem 0;
}
.user-img{
	width:1rem;
	border-radius: 50%;
}
.step{
	width:80%;
	height:.1rem;
	background:#fff;
	position: relative;
	top:.45rem;
	color:#fff;
	font-size:.2rem;
}
.step b{
	font-size:.4rem;
}
.step li{
	width:.5rem;
	height:.5rem;
	background:#f46094;
	border:.1rem solid #fff;
	position: absolute;
	top:-0.18rem;
	border-radius: 50%;
}
.step span{
	position: absolute;
	left:.5rem;
	top:-.4rem;
	width:2rem;
}
.step .bottom{
	top:.2rem;
}
.step li:nth-child(1){
	left:10%;
}
.step li:nth-child(2){
	left:58%;
}
.my-rank-body{
	width:90%;
	margin:0 auto;
	
}
.list{
	color:rgb(181,182,197);
}
.icon-img{
	width:.6rem;
}
.yd-list-theme4{
	border-radius:.2rem;
}
.yd-list-theme4 .yd-list-item .yd-list-img{
	width: 1rem;
    padding: 25px 0;
}
.yd-list-img img{
	border-radius: 50%;
}
.yd-list-theme4 .yd-list-item .yd-list-other{
	padding-top:0;
}
.yd-list-other>div{
	height: .8rem;
}
</style>