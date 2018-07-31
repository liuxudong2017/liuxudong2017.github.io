<template>
<div class="myRank-wrap">
	<header-tag title='我的排名'></header-tag>
	<my-rank-body></my-rank-body>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import MyRankBody from 'components/myRank/MyRank'
export default{
	name:'myRank'
	,components:{HeaderTag,MyRankBody}
}		
</script>
<style>
		
</style>