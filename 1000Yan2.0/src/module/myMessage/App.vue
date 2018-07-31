<template>
<div class="wrap">
	<header-tag title='我的消息'></header-tag>	
	<my-message></my-message>
</div>	
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import MyMessage from 'components/myMessage/myMessage';
export default{
	name:'app'
	,components:{HeaderTag,MyMessage}
}		
</script>
<style>
		
</style>