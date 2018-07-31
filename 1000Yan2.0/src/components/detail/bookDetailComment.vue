<template>
<div class="qy-detail-group">
	<ul class="qy-detail-wrap qy-detail-4">
		<li class='qy-title'>
			<img src="./img/icon_sjxq_comment@3x.png" alt="">
			<b>本书评论</b>
		</li>
		<comment-item></comment-item>
		<a class="qy-more" href="commentAll.html">查看更多评论</a>
	</ul>
</div>		
</template>
<script>
import CommentItem from 'components/comment/commentItem'
export default{
	name:'comment'
	,components:{CommentItem}
	,data(){
		return{

		}
	}
}		
</script>
<style>
	.qy-detail-4 .qy-title{
		font-size:.4rem;
		color:#757575;
	}
	.qy-detail-4 .qy-title img{
		height:.4rem;
		vertical-align: middle;
	}
	.qy-detail-4 .qy-more{
		display: block;
		font-size:.4rem;
		text-align: center;
		color:#f46094;
		border-top:.02rem solid #d9d9d9;
		padding-top:.3rem;
	}
</style>