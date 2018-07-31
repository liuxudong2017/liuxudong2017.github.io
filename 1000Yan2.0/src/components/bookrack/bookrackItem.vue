<template>
    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
        <yd-list theme="4" slot="list">
            <v-touch v-for="item, key in list" :key="key" class='item' :index='key' @panleft='showDelbtn(key,$event)' @panright='hideDelbtn(key,$event)'>
            <yd-list-item>
                <img slot="img" :src="item.img" class='book-img'>
                <span slot="title">{{item.title}}</span>
                <yd-list-other slot="other" class='wrap-rank-tiem'>
                    <div>
                    	<p class='top-read-chapter user-author'>上次看到第2章</p>
                    	<p class='now-all-chapter user-author'>
                    		已完结 共1111章
                    	</p>
	                    <p>
		          			<img src="http://www.1000yan.com/upload/image/20170621/1498008997595975.png" alt="" class='header-img'>
		          			<span class='user-author ellipsis'>夏季青少年衣服男生潮牌t恤夏季青少年衣服男生潮牌t恤</span>
		          		</p> 		
                    </div>
                    <div class='rank-item-img'>
                    	
                    </div>
	                <div class="del-btn" @click.stop='delItem(key,$event)' :index='key'>
	                	删除
	                </div>
                </yd-list-other>
            </yd-list-item>
            </v-touch>
        </yd-list>

        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>

    </yd-infinitescroll>
</template>

<script type="text/babel">
    export default {
        data() {
            return {
                page: 1,
                pageSize: 10,
                longTime:0,
                list: [
                    {
                        img: "http://www.1000yan.com/upload/image/20170621/1498008997595975.png",
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
        methods: 
        {
            loadList() 
            {
                // 请求下一页参考书库
                
            },
            showDelbtn(index,ev)
            {
            	let btn=document.getElementsByClassName('del-btn')[index];
            	btn.style.width='70px';
        		console.log('------'+index)
        	},
        	hideDelbtn(index,ev)
        	{
        		let btn=document.getElementsByClassName('del-btn')[index];
            	btn.style.width='0px';
        		console.log('hide'+index)
        	},
        	delItem(index,ev)
        	{
        		let btn=document.getElementsByClassName('del-btn')[index];
                btn.style.width='0px';
                this.list.splice(index,1);
                console.log(index+'-----');
                console.log('删除')
        	}
        }

    }
</script>
<style scoped>
	.book-img{
		width: 1.8rem;
	    border-radius: 0.16rem;
	}
	.header-img{
		width:0.64rem;
		border-radius:50%;
	}
	.user-author{
		font-size: 0.26rem;
	    display: inline-block;
	    padding-top: 0.16rem;
	    vertical-align: top;
	    width:2rem;  
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
	.rank-item-img img{
		width:.8rem;
	}
	.top-read-chapter,.now-all-chapter{
		display: block;
		width:3rem;
	}
	.yd-list-theme4 .yd-list-item{
		border-bottom: 6px solid #f2f4f7;
	}
	.del-btn{
		position: absolute;
		right:0;
		top:0;
		width:0;
		height:2.8rem;
		line-height:2.8rem;
		text-align: center;
		font-size:.32rem;
		background:#f46094;
		color: #fff;
		transition: width 1s;
		-webkit-transition: width 1s;
		overflow: hidden;
	}
</style>