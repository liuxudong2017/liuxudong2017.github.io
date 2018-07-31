<template>
<div class="app-wrap">
	<header-tag title='登陆'></header-tag>
	<login-content></login-content>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import LoginContent from 'components/loginPage/loginComponent';
export default{
	name:'app',
	components:{HeaderTag,LoginContent}
}	
</script>
<style>
	body{
		background: #fff;
	}	
</style>