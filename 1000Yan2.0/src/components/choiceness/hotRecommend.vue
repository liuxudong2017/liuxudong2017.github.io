<template>
<div class='yd-wraps'>
<div class='title'>热门推荐</div>
	<yd-grids-group :rows="3">
        <yd-grids-item v-for="n in 6" type='a' href="detail.html" class='img-wrap'>
		    <img class="img-auto" src="http://www.1000yan.com/upload/image/20171220/1513758700334203.jpg" alt="" slot='else'>
		    <h1 slot='else' class="ellipsis">打赏打赏打赏打赏打赏打赏打赏打赏打赏打赏打赏打赏</h1>
	    </yd-grids-item>
    </yd-grids-group>		

</div>	
</template>
<script>
export default{
	name:'hotRecommend'
}	
</script>
<style scoped>
.img-wrap{
		text-align: center;
	}
	.img-wrap h1{
		width:90%;
		padding:.1rem;
	}
	
	.yd-grids-item{
		padding-top:0;
	}
	.title{
		width:100%;
		height:1rem;
		line-height: 1rem;
		font-size:.5rem;
		margin-bottom: .44rem;
		text-align: center;
		background-image:url('./img_jingxuan_tuan@3x.png');
		color:#f46094;
		font-weight: 600;
	}
</style>