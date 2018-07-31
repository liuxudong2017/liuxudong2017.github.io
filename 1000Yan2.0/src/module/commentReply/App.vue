<template>
<div class="qy-comment-send-wrap">
	<header-tag :title='title'></header-tag>
	<div class="qy-comment-one">
		<comment-item :replyNum='replyNum'></comment-item>
	</div>
	<reply-item></reply-item>
</div>	
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import ReplyItem from 'components/comment/replyItem';
import commentItem from 'components/comment/commentItem';
export default{
	name:'fa-biao-pinglun'
	,components:{HeaderTag,ReplyItem,commentItem}
	,data(){
		return{
			replyNum:'5555'
		}
	}
	,computed:{
		title(){
			return this.replyNum+'条回复'
		}
	}
}		
</script>
<style>
	.qy-comment-one{
	   padding: 1px 10px;
	   background: #fff;
	   border-bottom:.2rem solid #F2F4F7;
	}	
</style>