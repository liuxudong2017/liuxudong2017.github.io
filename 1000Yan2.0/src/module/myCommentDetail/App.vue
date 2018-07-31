<template>
<div class="myRank-wrap">
	<header-tag title='我的评论'></header-tag>
	<comment-item themes='2'></comment-item>
	<div class="hr"></div>
	<reply-item></reply-item>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import CommentItem from 'components/comment/comment';
import ReplyItem from 'components/comment/replyItem';
export default{
	name:'myRank'
	,components:{HeaderTag,CommentItem,ReplyItem}
}		
</script>
<style>
body{
		background: #fff;
	}	
	.hr{
		width:100%;
		height:.2rem;
		background:#f2f4f7; 
	}
</style>