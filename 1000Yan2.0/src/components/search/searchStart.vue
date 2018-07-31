<template>
<div class='search-start-warp'>
	<div class="qy-list-group">
		<div class="qy-list-item">
			<div class="qy-title">
				<div>历史记录</div>
				<div>清空历史记录</div>
			</div>
			<div class="qy-content">
				<div class='qy-content-item'>
					<a href="#">冷水江市</a><img src="./close.png" alt="" class="qy-close-btn">
				</div>
			</div>
		</div>
		<div class="qy-list-item">
			<div class="qy-title">
				<div>热门搜索</div>
				<div>
					<yd-icon name="refresh" size='.33rem' color='#70a7f1'></yd-icon>
				换一批</div>
			</div>
			<div class="qy-content">
				<div class='qy-content-item'>
					<a href="#">冷水江市</a>
				</div>
				<div class='qy-content-item'>
					<a href="#">冷水江市</a>
				</div>
				<div class='qy-content-item'>
					<a href="#">冷水江市</a>
				</div>
			</div>
		</div>
	</div>
</div>		
</template>
<script>
export default{
	name:'searchStart'
}	
</script>
<style scoped>
.search-start-warp{
	padding:.24rem;
}
.search-start-warp .qy-title{
	display: -webkit-flex;
	justify-content:space-between;
	-webkit-justify-content:space-between;
}
.search-start-warp .qy-title div{
	font-size:.33rem;
	color:#9ca5ad;
	line-height: .4rem;
}
.search-start-warp .qy-title div:nth-child(1):before{
	content: '';
	border-left: .06rem solid #f46094;
	padding-right:.08rem;
}
.search-start-warp .qy-title div:nth-child(2){
	color:#70a7f1;
}
.search-start-warp .qy-close-btn{
	width:.4rem;
	vertical-align: top;
}
.search-start-warp .qy-content{
	display: -webkit-flex;
	flex-wrap:wrap;
	-webkit-flex-wrap:wrap;
	padding-top: .4rem;
}
.search-start-warp .qy-content div{
	border-radius: .5rem;
    border: .02rem solid #9ca5ad;
    color: #9ca5ad;
    font-size:.3rem;
    padding:.1rem;
    margin: 0 .1rem .1rem 0;
}
.search-start-warp .qy-list-item{
	padding-bottom: .2rem;
}
</style>