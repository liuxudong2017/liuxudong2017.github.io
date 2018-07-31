<template>
<div>
	<div class='title'>最新更新</div>
<a href="" class='yd-wraps' v-for='n in 2'>
	<yd-flexbox>
        	<img src="http://www.1000yan.com/upload/image/20171113/1510565239241622.jpg" alt="" class='img-auto'>
        <yd-flexbox-item align='top'>
        	<yd-flexbox direction="vertical">
        		<yd-flexbox-item>
        			<div class='book-name ellipsis'>的历史记录方式的历史记录方式的历史记录方式的历史记录方式</div>
        		</yd-flexbox-item>
        		<yd-flexbox-item>
        			<div class='book-chapter ellipsis'>第23章:的老师附件的老师附件的老师附件</div>
        		</yd-flexbox-item>
        		<yd-flexbox-item>
        			<img src="http://www.1000yan.com/upload/image/20170706/1499334942340261.png" alt="" class="user-head-img">
        			<span class='book-author ellipsis'>的老师附件的老师附件的老师附件的老师附件的老师附件</span>
        		</yd-flexbox-item>
				<yd-flexbox-item>
					<span class="book-read-num">34541</span>
					<span class="book-read">人正在阅读</span>
				</yd-flexbox-item>

        	</yd-flexbox>
        </yd-flexbox-item>
        <div>em</div>
    </yd-flexbox>
</a>
<div class='add'>点击加载更多</div>	
</div>
</template>
<script>
export default{
	name:'update',
	
	methods:{
		
	}
}	
</script>
<style scoped>
.img-auto{

	width: 27%;
    margin: 0 3%;
}
.user-head-img{
	width:0.64rem;
	height:0.64rem;
	border-radius: 50%;
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
.yd-wraps{
	display: block;
	margin-bottom: .6rem;
}
.book-name{
	font-size:.4rem;
	color:#3e3e3e;
	width:40%;
	padding:.1rem 0;
}
.book-chapter{
	font-size:0.3rem;
	color:#8c929b;
	width:40%;
	margin-bottom: .3rem;
}
.book-author{
	width:33%;
}
.book-author,.book-read,.book-read-num{
	font-size:0.24rem;
	color:#a3a9b2;
	display: inline-block;
	padding-bottom: .12rem;
	padding-top:.24rem;

}
.book-read-num{
	color:#f46094;
}
.add{
	height: .5rem;
	line-height: .5rem;
	background: rgba(128, 128, 128, .4);
	text-align: center;
	color:gray;
}
</style>