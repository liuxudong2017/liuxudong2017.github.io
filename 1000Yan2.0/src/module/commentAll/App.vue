<template>
<div class="qy-comment-send-wrap">
	<header-tag :title='bookName' text='发表评论' href='commentSend.html'></header-tag>
	<div class="qy-comment-send-body-wrap">
		<div class="qy-titles">评论<span>{{commentNum}}</span>条</div>
		<div v-for="n in 3" >	
			<comment-item :keys="n"></comment-item>
		</div>
	</div>
</div>	
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeaderBtn'
import CommentItem from 'components/comment/commentItem'
export default{
	name:'fa-biao-pinglun'
	,components:{HeaderTag,CommentItem}
	,data(){
		return{
			bookName:'王在相爱'
			,commentNum:88
		}
	}
}		
</script>
<style>
body{
	background: #fff;
}
.qy-comment-send-body-wrap{
	width:90%;
	margin:0 auto;
}
.qy-comment-send-body-wrap .qy-titles{
	font-size: .4rem;
    padding: .3rem 0;
    color: #3e3e3e;
    border-bottom: .02rem solid #f1f2f6;
}
.qy-comment-send-body-wrap .qy-titles span{
	color:#f46094;
	padding:0 .02rem;
}
</style>