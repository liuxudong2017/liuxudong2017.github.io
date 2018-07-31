<template>
<div class='wrap'>
	<div class="comment-wrap">
		<div class="content max-width">{{content}}</div>
		<div class="book-detail-group max-width">
			<img :src="bookImg" alt="" class="book-img">
			<ul class="book-detail">
				<li class="book-name">{{bookName}}</li>
	    
				<li class="book-intro ellipsis-list-2" style="-webkit-box-orient:vertical;">
						{{bookIntro}}
				</li>
				<li class="author">
					<img :src="authorImg" alt="" class="author-img">
					<span class="author-name">{{authorName}}</span>
				</li>
			</ul>
		</div>
		<ul class="footer max-width">
			<li class="left">
				<img src="../../common/img/icon_time@3x.png" class="time-img">
				<span class="time">{{time}}</span>
			</li>
			<li class="right" v-if='theme==1'>
				<a href="myCommentDetail.html">
				  <span class="like">点赞{{likeNum}}</span>
				  <span class="reply">回复{{replyNum}}</span>
				</a>	
			</li>
		</ul>
	</div>		
	<div class="like-list-group" v-if='theme==2'>
		<div class="like-list  max-width">
			<img :src="userImg" alt="" class="user-img">
			<img :src="userImg" alt="" class="user-img">
			<img :src="userImg" alt="" class="user-img">
			<img :src="userImg" alt="" class="user-img">
			<img :src="userImg" alt="" class="user-img">
			<span>{{likeNum}}人赞过</span>
		</div>
	</div>
</div>
</template>
<script>
export default{
	name:'comment'
	,props:['themes']
	,data(){
		return{
			content:'送了跑车顺利对接方式的是连接方式上飞机 。'
			,bookName:'书名书名书名书名书名书名书名书名'
			,bookIntro:'简介简介见简介简介见简介简介见简介简介见简介简介见简介简介见简介简介见简介简介见'
			,bookImg:'https://www.1000yan.com/upload/image/20180110/1515568861561865.jpg'
			,authorImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
			,authorName:'作者作者作者作者'
			,time:'2017-11-08 11:40'
			,likeNum:'11'//点赞数
			,replyNum:'88'//回复数
			,theme:this.themes
			,userImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'

		}
	}
}		
</script>
<style>
.ellipsis-list-2{
    -webkit-box-orient:vertical;
    box-orient:vertical;
	display:-webkit-box;
    -webkit-line-clamp: 2;
    overflow:hidden;
}
.max-width{
	width:90%;
	margin:0 auto;
	overflow:hidden;
}
.comment-wrap{
	border-bottom:.02rem solid #8c929b;
	margin:.6rem 0 0;
	padding-bottom:.2rem;
}
.content{
	font-size:.4rem;
	font-weight:600;
}
.book-img{
	height:3rem;
    border-radius:0.2rem;
    margin-right:.2rem;
}
.author-img{
	width:.6rem;
	border-radius:50%;
	vertical-align:middle;
}
.time-img{
	width: .35rem;
    vertical-align: top;
}
.user-img{
	width:.6rem;
	border-radius:50%;
	vertical-align:bottom;
}
.like-list span{
	font-size:.4rem;
	color:#8c929b;
}
.book-name{
	font-size:.4rem;
	color:black;
}
.book-detail-group{
	font-size:.3rem;
	color:#8c929b;
	display:flex;
	justify-content: flex-start;
	margin:.2rem auto;
}
.book-detail li{
	margin:.1rem 0 .2rem;
}
.left{
	float: left;
	color:#8c929b;
	font-size:.3rem;
}
.right{
	float: right;
	color:#8c929b;
	font-size:.3rem;
}
.wrap{
	background:#fff;
	margin-bottom:.2rem;
}
.like-list{
	padding-top:.2rem;
}
</style>