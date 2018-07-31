<template>
<div class="yq-book-directory-wrap">
	<header-tag title='目录'></header-tag>
	<directory :theme='theme'></directory>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import directory from 'components/directory/directory';
export default{
	name:'mu-lu'
	,components:{HeaderTag,directory}
	,data(){
		return{
			theme:2//1：代表无卷名；2代表有卷名
		}
	}
}		
</script>
<style>
	body{
		background: #fff;
	}	
</style>