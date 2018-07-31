<template>
    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
		<yd-list theme="4" slot="list">
	            <yd-list-item v-for="item, key in list" :key="key" href=''>
	                <yd-list-other slot="other">
	                	<img :src="item.img" alt="" class="book-img">
	          			<div class='mess-right'>
	          				<div class="mess-header">
	          					<h1 class='book-name ellipsis'>啊老觉得分厘卡撒酒疯胜多负少发射点</h1>
	          					<div class="time">
	          						<img src="./icon_time@3x.png" alt="">
	          						<span class='time-num'>2017-11-11 11:33</span>
	          					</div>
	          				</div>
	          				<p class="book-chapter ellipsis">第32章：顺利对接方式JFK是上来就分手就分手势力对抗肌肤是发</p>
	          				<p>
	          					<img src="http://www.1000yan.com/upload/image/20170621/1498008997595975.png" alt="" class='header-img'>
	          					<span class='user-author ellipsis'>老子就是作者</span>
	          					<span class='book-num'><b>6451545</b>万字</span>
	          				</p>
	          				<div class="last-mess">
	          					<p class='book-detail ellipsis-list-2' style='-webkit-box-orient: vertical;'>
		          					超过两行生咯超过两行生咯超过两行生咯超过两行生咯超过两行生咯
		          					超过两行生咯超过两行生咯超过两行生咯超过两行生咯超过两行生咯超过两行生咯
		          					超过两行生咯超过两行生咯超过两行生咯超过两行生咯超过两行生咯
		          					超过两行生咯超过两行生咯超过两行生咯超过两行生咯超过两行生咯
	          					</p>
	          					<div class='book-tag'>
	          						<Labels :value='item' v-for="item in labelArr"></Labels>
	          					</div>
	          				</div>
	          			</div>	
		            </yd-list-other>
	            </yd-list-item>

        </yd-list>

        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

    </yd-infinitescroll>
</template>

<script type="text/babel">
import axios from 'axios';
import Labels from '../labelLib/label';
    export default {
    	components:{Labels},
        data() {
            return {
            	labelArr:[
            		{index:1,content:'最新'},
            		{index:2,content:'VIP'}
            	],
                page: 1,
                pageSize: 10,
                list: [
                    {
                        img: "http://www.1000yan.com/upload/image/20171113/1510552305251182.jpg",
                        title: "标题标题标题标题标题",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://www.1000yan.com/upload/image/20171113/1510552305251182.jpg",
                        title: "骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg",
                        title: "条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg",
                        title: "夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                        title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                        title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男",
                        marketprice: 56.23,
                        productprice: 89.36
                    }
                ]
            }
        },
        methods: {
            loadList() 
            {
            	let _list=[
            		{
                        img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                        title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                        title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                        title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                        title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg",
                        title: "2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服",
                        marketprice: 56.23,
                        productprice: 89.36
                    },
                    {
                        img: "http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg",
                        title: "男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男",
                        marketprice: 56.23,
                        productprice: 89.36
                    }
            	]
            	this.list=[...this.list,..._list];
            	console.log('SSSS');
            	 this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
            	 console.log('EEEEEE');
            }
        },
        mounted()
        {
           
        }
    }
</script>
<style scoped>
img{
	border-radius: 50%;
}
	.title{
		display:inline-block;
		width:50%;
	}
	.header-img{
		width:0.64rem;
	}
	.yd-list-other,.yd-list-other>div{
		height: 100%;
	}
	.yd-list-other>div:nth-child(1){
		width:70%;
	}

	.mess-header{
		overflow: hidden;
	}
	.mess-right{
		width:5.4rem;
		padding:0 .2rem;
	}
	.book-name{
		font-size:0.3rem;
		color:black;
	}
	.book-name,.time{
		width:49%;
		float: left;
	}
	.time{
		width:51%;
	}
	.time img{
		width:0.24rem;

	}
	.book-img{
		width:1.8rem;
		border-radius: 0.16rem
	}
	.book-chapter{
		color: #8c929b;
	    font-size: 0.26rem;
	    margin: 0.16rem 0;
	    font-weight: 600;
	}
	.book-num{
		display: inline-block;
	    vertical-align: top;
	    padding-top: .16rem;
	    padding-left: 0.14rem;
	}
	.book-num b{
		color:#f78ab1;
	}
	.user-author{
		font-size: 0.26rem;
	    display: inline-block;
	    padding-top: 0.16rem;
	    vertical-align: top;
	    max-width: 1.6rem;
	}
	
	.book-detail{
		width:60%;
		float: left;
	}
	.book-tag{
		width:35%;
		float:right;
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