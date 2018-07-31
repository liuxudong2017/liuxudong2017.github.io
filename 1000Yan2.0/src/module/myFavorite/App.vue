<template>
<div class="myRank-wrap">
	<header-tag title='我的收藏'></header-tag>
	<bookrack-item></bookrack-item>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import BookrackItem from 'components/bookrack/bookrackItem';
export default{
	name:'myRank'
	,components:{HeaderTag,BookrackItem}
}		
</script>
<style>
body{
		background: #fff;
	}
	.ellipsis{
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
	.ellipsis-list-2{
		    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
	}
	
	:after, :before{
	    border: 0!important;
	}
	.yd-list-theme4{
		padding:0 2%;
	}
	.yd-list-title{
		font-size:.3rem;
		color:#3e3e3e;
		text-align: left;
		font-weight: 600;
	}
	.yd-list-theme4 .yd-list-item .yd-list-img{
	height:auto;
	padding-bottom: 0;
}		
</style>