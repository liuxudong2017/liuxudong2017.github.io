<template>
<div class="">	
<yd-pullrefresh :callback="loadList" ref="pullrefreshDemo">
  	<yd-list theme="4">
        <yd-list-item class="qy-list-item">
	        <yd-list-other slot='other'>
	        	<h1 :class="['qy-chapter-name',isHideTitle?'qy-chapter-name-1':'']" ref='chapterTitle'>{{chapter.chapterName}}</h1>
	        </yd-list-other>
        </yd-list-item>
        <yd-list-item v-for='(item,key) in chapterObj.chapterContent' :key='key'>
            <yd-list-other slot="other">
            	<div class='qy-read-up-down' v-html='item' :index='key'>

				</div>	
            </yd-list-other>
        </yd-list-item>
        <yd-list-item>
        	<yd-list-other slot='other'>
        		<div class="qy-add-chapter">
					<span class="qy-top-chapter">上一章</span>
					<span class="qy-next-chapter">下一章</span>
				</div>
        	</yd-list-other>
        </yd-list-item>
    </yd-list>
 </yd-pullrefresh>
 <!-- 段落吐槽室 -->
<yd-popup v-model="isShowComplain" position="right" width='100%' @click.stop.native=''>
    <yd-navbar title="吐槽室">
        <yd-navbar-back-icon slot="left" @click.stop.native='hideComplain'></yd-navbar-back-icon>
    </yd-navbar> 
    <ul class="qy-complain-group" ref='complain'>
    	<li class="qy-complain-item" v-if='item.userId!=userId' v-for='item in complainObj'>
			<img :src="item.imgPic" alt="" class="qy-img-pic">
			<div class="qy-complain-wrap">
				<span class="qy-user-name">{{item.userName}}</span>	
				<span class="qy-complain-text">{{item.complainText}}</span>
			</div>
    	</li>
    	<li class="qy-complain-item-2" v-else-if='item.userId==userId'>
    		<div class="qy-complain-wrap">
				<span class="qy-user-name">{{item.userName}}</span>	
				<span class="qy-complain-text">{{item.complainText}}</span>
			</div>
    		<img :src="item.imgPic" alt="" class="qy-img-pic">
    	</li>
    	
    </ul>
	<send-btn @listenSendBtn='listenSendBtn'></send-btn>
</yd-popup>
</div>
</template>
<script>
import sendBtn from 'components/comment/sendMessage'
export default{
	name:''
	,components:{sendBtn}
	,props:['chapter','pCommentNumArr','showChapterTitle']
	,watch:{
		chapter(){
			this.chapterObj=this.chapter;
		}
		,isShowComplain(){
			if(this.isShowComplain){//打开吐槽室
				/**
				 * 1. 去请求吐槽内容开启加载动画
				 * 2. 永远显示最后一页：scrollTop 设置最大值
				 */
				//2. 
				let complainEle=this.$refs.complain;
				complainEle.scrollTop=complainEle.scrollHeight;
				console.log('scrollHeight='+complainEle.scrollHeight+'===scrollTop='+complainEle.scrollTop);
			}else{//关闭吐槽室

			}
			console.log('isShowComplain='+this.isShowComplain);
		}
		,showChapterTitle(){//防止章节名盖住工具栏弹窗
			this.isHideTitle=this.showChapterTitle;
		}
	}
	,data(){
		return {
			chapterObj:this.chapter
			,isHideTitle:this.showChapterTitle//是否隐藏
			,userId:120
			,isShowComplain:false//是否显示吐槽室
			,complainObj:[
				{'imgPic':'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg','userId':110,'complainText':'哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈','userName':'小明'}
				,{'imgPic':'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg','userId':110,'complainText':'哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈','userName':'小明'}
				,{'imgPic':'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg','userId':110,'complainText':'哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈','userName':'小明'}
				,{'imgPic':'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg','userId':110,'complainText':'哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈','userName':'小明'}
				,{'imgPic':'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg','userId':120,'complainText':'哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈','userName':'小明'}
				,{'imgPic':'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg','userId':110,'complainText':'哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈哈哈哈就哈哈啊哈哈啊哈啊啊哈','userName':'小明'}
				
				

			]
		}
	}
	,methods:{
		loadList(){
            console.log('去加载章节');
            this.$refs.pullrefreshDemo.$emit('ydui.pullrefresh.finishLoad');
        }
        ,goComplain(){//去吐槽本段落
        	window.event.stopPropagation();
        	let pIndex=window.event.target.parentNode.parentNode.getAttribute('index');//获得段落index
        	console.log(window.event.target.parentNode.parentNode.getAttribute('index'));
        	console.log('评论');
        	this.isShowComplain=true;
        }
        ,hideComplain(){
        	console.log('[][][][][')
        	// window.event.stopPropagation();
        	this.isShowComplain=false;
        	
        }
        ,listenSendBtn(val){
        	console.log('发送消息.....'+val)
        }

    }
    ,mounted(){
    	let commentP=document.getElementsByClassName('qy-comment-p');
    	for(let i=0;i<commentP.length;i++){
    		commentP[i].onclick=this.goComplain;	
    	}
    }
}		
</script>
<style>
.yd-list-theme4 .yd-list-item .yd-list-img{
	display: none;
}
.qy-list-item{
	padding:.2rem!important;
}
.qy-chapter-name{
	position: fixed;
	top:0;
	left:0;
	background: #fff;
	width:100%;
	padding:.2rem;
	z-index: 1;
}
.qy-chapter-name-1{
	z-index: -1;
}
.qy-add-chapter{
	padding:.3rem;
	text-align: center;
}
.qy-add-chapter span{
	padding:.2rem 1rem;
}
.qy-read-wrap .qy-read-up-down .qy-comment-p{
	color:blue;
	font-size:.3rem;
	padding-left:.3rem;
}
.yd-list-theme4 .yd-list-item{
	padding: 0;
}
.yd-list-theme4 .yd-list-item:not(:last-child):after{
	border:0;
}
.qy-complain-group {
	width: 100%;
    height: 11rem;
    overflow-y: auto;
    padding: .25rem;
}
.qy-complain-group .qy-complain-item,.qy-complain-group .qy-complain-item-2{
	min-height:1rem;
	display: flex;
	justify-content: flex-start;
	margin-bottom:.3rem;
}
.qy-complain-group .qy-complain-item-2{
	justify-content: flex-end;
}
.qy-complain-group .qy-img-pic{
	width:.6rem;
	height: .6rem;
	border-radius: 50%;
	margin-top:.2rem;
}
.qy-complain-group .qy-complain-item span,.qy-complain-group .qy-complain-item-2 span{
	display:block;
	line-height: 1.5em;
	padding: 0.1rem .3rem;
	font-size:.3rem;
	color:gray;
}
.qy-complain-group .qy-complain-item .qy-complain-wrap{
	max-width:70%;
}
.qy-complain-group .qy-complain-item-2 .qy-complain-wrap{
	max-width: 70%;
}
.qy-complain-group .qy-complain-item-2 .qy-user-name{
	text-align:right;
}
.qy-complain-group .qy-complain-item-2 .qy-complain-text{
	background:#30D575;
	border-radius:.3rem 0 .3rem .3rem;
	color:black;
}
.qy-complain-group .qy-complain-item .qy-complain-text{
	background:#f1f2f6;
	border-radius:0 .3rem .3rem .3rem;
	color:black;
}
.qy-complain-group .qy-complain-wrap img{
	width:.5rem;
}
</style>