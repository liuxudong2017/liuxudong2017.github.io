<template>
<div class="myMess-wrap">
<yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
	<yd-list theme="4" slot="list">
	    <yd-list-item v-for="item, key in list" :key="key" type='a' href='myMessageDetail.html'>
	        <yd-list-other slot="other" class='item-group'>
	           <img :src="item.img" alt="" class="icon-header-img">
	           <div class="right">
	           		<p :class="{unread:isRead,p:true}">dfdfsdfs</p>
	           		<p class='ellipsis p'>djlsjflsjdlfjs标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题标题lfjlksjdflksjflkjs</p>
	           </div>
	        </yd-list-other>
	    </yd-list-item>
	</yd-list>
	<!-- 数据全部加载完毕显示 -->
	<span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

	<!-- 加载中提示，不指定，将显示默认加载中图标 -->
	<img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
</yd-infinitescroll>
</div>		
</template>
<script>
export default{
	name:'myMess-wrap'
	,data(){
		return{
			 isRead:true
			,list: [
                    {
                        img: "http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36,
                        readNum:89898
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg",
                        title: "标题标题标题标题标题标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    }
                ]
		}
	}
}		
</script>
<style>
.yd-list-theme4 .yd-list-item .yd-list-img{
	width:0;
	height:0;
	overflow:hidden;
}
.icon-header-img{
	width:.6rem;
	border-radius: 50%;
}
.yd-list-theme4 .yd-list-item{
	height: 1.2rem;
}
.yd-list-other{
	justify-content:flex-start;
}
.right{
	padding-left:.1rem;
}
.right span{
	
}
.p{
	width:28%;
}	
.unread:after{
	display: inline-block;
    content: '';
    background: #f46094;
    border-radius: 50%;
    width:.2rem;
    height:.2rem;
    margin-left:.2rem;
}
.ellipsis{
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}
</style>