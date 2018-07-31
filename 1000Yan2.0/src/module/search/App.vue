<template>
	<div>
		<search-tag></search-tag>
		<search-start v-if='isShow'></search-start>
		<search-result v-if='!isShow'></search-result>
	</div>	
</template>
<script>
import searchTag from 'components/search/searchTag';
import searchStart from 'components/search/searchStart';
import searchResult from 'components/search/searchResult';
export default{
	name:'app',
	components:{searchTag,searchStart,searchResult}
	,created()
	{
		console.log(location.href)
	}
	,data()
	{
		return{
			isShow:true
		}
	}
}	
</script>
<style>
body{
	background: #fff;
}		
</style>