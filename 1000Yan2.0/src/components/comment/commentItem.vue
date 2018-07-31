<template>
<div class="qy-comment-item-group">
 <yd-list theme="4" slot="list">
            <yd-list-item v-for="item, key in list" :key="key" type='div'>
                <yd-list-other slot="other">
                 <ul class="comment-item-wrap">
                 	<li class="comment-item-1">
                 		<div class="qy-left">
                 			<img :src="item.headerImg" alt="" class="header-img">
	                 		<b class="send-name ellipsis">
	                 			{{item.sendName}}
	                 		</b>
                 		</div>
                 		<div class="qy-right">
                 			<yd-badge shape="square" type="hollow"class='badge-1'>置顶</yd-badge>
                 			<yd-badge shape="square" type="hollow"class='badge-2'>精华</yd-badge>
                 		</div>
                 	</li>
                 	<li class="comment-item-2">
                 		<img src="../../common/img/icon_time@3x.png" alt="" class="time-img">
                 		<span>{{item.time}}</span>
                 		<span v-if='item.replyName'>
                 			回复了{{item.replyName}}
                 		</span>
                 	</li>
                 	<li :class="{'comment-item-3':true,'ellipsis-list-3':isShowClass(key)}" v-html='item.replyContent' ref="profile" style='-webkit-box-orient:vertical;'>
                 	</li>
                 	<b v-if='isShow(key)' @click.stop='trigger(key)' class="qy-trigger">
                 		<b v-if='isShowClass(key)'>展开&or;</b>
                 		<b v-else-if='!isShowClass(key)'>收起&and;</b>
                 	</b>
                 	<li class="comment-item-4">
                 		<div :class="{'qy-like':isLike(key),'like-btn':true,'qy-btn':true}" @click.stop='clickLike(key)'>
                 			<yd-icon name="like" size='.4rem'></yd-icon>
                 			{{item.likeNum}}
                 		</div>
                 		<a v-if='aReply' class="replay-btn qy-btn" href="commentReply.html">
                 			<yd-icon name="feedback" size='.4rem'></yd-icon>
                 			<span>回复</span>
                 		</a>
                 		<div v-else-if='!aReply' class="replay-btn qy-btn">
                 			<yd-icon name="feedback" size='.4rem'></yd-icon>
                 			<span>{{replyNum}}</span>
                 		</div>
                 	</li>
                 </ul>  
                </yd-list-other>
            </yd-list-item>
 </yd-list>
 </div>	
</template>
<script>
export default{
	name:''
	,props:['replyNum']
	,props:{
		replyNum:{
			type:String
			,default:function(){return '回复'}
		}
		
	}
	,computed:{
		aReply(){
			return this.replyNum=='回复'?true:false
		}
	}
	,data(){
		return{
			list:[
				{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,likeNum:22
				,replyContent:'回复的内容.<span class="highlight">@ddd</span>...回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>'

				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'2017-2-2'
				,replayName:'被@的人名'
				,sendName:'发回复的内容回复的内容回复的回复的内容回复的内容回复的回复的内容回复的内容回复的回复的内容回复的内容回复的回复的内容回复的内容回复的回复的内容回复的内容回复的回复的内容回复的内容回复的回复的内容回复的内容回复的'
				,replyContent:'.<span>@ddd</span>...回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容回复的内容'
				,likeNum:22
				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,likeNum:22
				,replyContent:'<img src="https://www.1000yan.com/static/web/plug/qqFace/arclist/1.gif" 回复的内容.<span>@ddd</span>...'
				
				}
			]
			,isHide:true
			,showIndexArr:[]//要显示【展开/收起】的列下标
			,isHides:[]//来控制每列显示【展开/收起】
			,likeArr:[0,1]//点赞评论按钮样式
			


		}
	}
	,methods:{
		// 是否要显示[展开/收起按钮]
		isShow(index){
			for(let i=0;i<this.showIndexArr.length;i++){
         		if(index==this.showIndexArr[i])
         			return true
         	}
         		return false
		}
		// 显示展开/收起点击事件
		,trigger(index){
			let val=-1;
			if(this.isHides[index]==index){
				this.isHides[index]=val;
			}else if(this.isHides[index]==-1){
				val=index;
				this.isHides[index]=val;
			}
			this.$set(this.isHides,index,val);	
		}
		// 显示省略号
		,isShowClass(index){
			return this.isHides[index]==index?true:false;
		}
		,clickLike(index){
			for(let i=0;i<this.likeArr.length;i++){
				if(index==this.likeArr[i]){
					//取消点赞
					this.likeArr.splice(i,1);
					return ''
				}
			}
				//点赞
				this.likeArr.push(index);
		}
		,isLike(index){
			for(let i=0;i<this.likeArr.length;i++){
				if(index==this.likeArr[i]){
					return true//点赞
				}
			}
				return false//非点赞
		}
	}
	,mounted(){
		let elem=document.getElementsByClassName('comment-item-3');
    	 let doc=document.getElementsByTagName('html')[0];
    	 let maxHeight=parseFloat(doc.style.fontSize)*1.26;//1.26 三行是.comment-item-3 rem高度
    	 for(let i=0;i<elem.length;i++)
    	{
    	 	let height=elem[i].scrollHeight;
    	 	// 内容超过三行
    	 	if(height>maxHeight){
    	 		this.showIndexArr.push(i);//要显示【展开/收起】的列下标
    	 		this.isHides[i]=i;//来控制显示【展开/收起】
    	 	}
    	}

    	
	}
}	
</script>
<style>
.ellipsis-list-3{
	display: -webkit-box;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
.qy-comment-item-group .yd-list-theme4 .yd-list-item .yd-list-img{
	display: none;
}
.qy-comment-item-group .yd-list-theme4 .yd-list-item .yd-list-mes{
	padding-left:0;
}
.qy-comment-item-group{
	background: #fff;
}
.qy-comment-item-group li{
	margin:.2rem 0;

}
.qy-comment-item-group .comment-item-wrap{width:100%;}
.qy-comment-item-group .comment-item-3,.qy-comment-item-group .comment-item-2{
	padding-left:.2rem;
}
.qy-comment-item-group .yd-list-theme4{padding:0;}
.qy-comment-item-group .comment-item-1{
	display: flex;
	justify-content: space-between;
}
.comment-item-1 img{
	width:.6rem;
	vertical-align: middle;
	border-radius: 50%;

}
.comment-item-2 img{
	width:.4rem;
	vertical-align: middle;
}
.qy-comment-item-group .comment-item-3{
	font-size:.3rem;
	color:#3e3e3e;
	line-height: 1.5em;
	padding-right: .7rem;
}
.qy-comment-item-group .comment-item-4{
	display: flex;
	justify-content: flex-end;
}
.qy-comment-item-group i{
	vertical-align: middle;
}
.qy-trigger{
	position: absolute;
    right: 0;
    bottom:1.2rem;
    font-size:.3rem;
    color: #61a4e9;
    width:1rem;
    background: #fff;
}
.qy-comment-item-group .badge-1{
	border:.02rem solid #f46094;
	background:#fff;
	color:#f46094;
}
.qy-comment-item-group .badge-2{
	border:.02rem solid #51d96e;
	background:#fff;
	color:#51d96e;
}
.qy-comment-item-group .badge-3{
	border:.02rem solid #f59e48;
	background:#fff;
	color:#f59e48;
}
.comment-item-3 img{
	width:.5rem;
}
.qy-comment-item-group .qy-btn{
	width: 1.5rem;
    border: .02rem solid;
    border-radius: .32rem;
    padding: .14rem 0px 0;
    text-align: center;
    margin-right:.1rem;
}
.qy-comment-item-group .qy-like i{
	color:rgb(244, 96, 148);
}
.qy-comment-item-group .qy-like{
	color:rgb(244, 96, 148);
	border-color: rgb(244, 96, 148);
}
.qy-comment-item-group .ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.qy-comment-item-group .send-name{
	display: inline-block;
	max-width:2rem;
}
</style>