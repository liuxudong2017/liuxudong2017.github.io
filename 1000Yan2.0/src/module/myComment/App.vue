<template>
<div class="myRank-wrap">
	<header-tag title='我的评论'></header-tag>
	<comment-item themes='1'></comment-item>
	<comment-item themes='2'></comment-item>
	<comment-item></comment-item>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import CommentItem from 'components/comment/comment';
export default{
	name:'myRank'
	,components:{HeaderTag,CommentItem}
}		
</script>
<style>
body{
		background: #fff;
	}	
</style>