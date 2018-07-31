<template>
<div class="qy-wrap">
	<header-tag title='意见反馈'></header-tag>
	<yd-textarea slot="right" placeholder="感谢您对千言提供的意见和建议" maxlength="1000" v-model='suggestions'></yd-textarea>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeaderBtn';
export default{
	name:''
	,components:{HeaderTag}
	,data(){
		return{
			suggestions:''
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