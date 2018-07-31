<template>
<div class="search-result-wrap">
<div v-if='isEmpty' class="is-empty">没有搜到您要找的内容...</div>
<Book></Book>		
</div>
	
</template>
<script>
import Book from 'components/books/book';
export default{
	name:'searchResult',
	components:{Book}
	,data()
	{
		return{
			isEmpty:false
		}
	}
}		
</script>
<style scoped>
.is-empty{
	height: 1rem;
	line-height: 1rem;
	font-size:.4rem;
	text-align: center;
	background: #f0f3f6;
	color: #c9cfd5;
}	
</style>