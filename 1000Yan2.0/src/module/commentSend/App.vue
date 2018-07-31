<template>
<div class="qy-wrap">
	<header-tag title='发表评论'></header-tag>
	<yd-textarea slot="right" placeholder="少侠留下点墨宝吧...." maxlength="1000" v-model='commentContent'></yd-textarea>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeaderBtn';
export default{
	name:'fa-biao-pinglun'
	,components:{HeaderTag}
	,data(){
		return{
			commentContent:''
		}
	}
	
}	
</script>
<style>
body{
	background: #fff;
}
.qy-wrap .yd-textarea>textarea{
	height:6.5rem;
	padding:.25rem;
}
.qy-wrap .yd-textarea-counter{
	width:90%;
	margin: 0 auto;
}	
</style>