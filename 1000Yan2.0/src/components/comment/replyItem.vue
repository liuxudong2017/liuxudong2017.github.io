<template>
<div class="reply-group">
	<yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
        <yd-list theme="4" slot="list">
            <yd-list-item v-for="item, key in list" :key="key" type='div'>
                <yd-list-other slot="other">
                 <ul class="reply-item-wrap">
                 	<li class="reply-item-1">
                 		<img :src="item.headerImg" alt="" class="header-img">
                 		<span class="send-name ellipsis">
                 			{{item.sendName}}
                 		</span>
                 	</li>
                 	<li class="reply-item-2">
                 		<img src="../../common/img/icon_time@3x.png" alt="" class="time-img">
                 		<span>{{item.time}}</span>
                 		<span v-if='item.replyName'>
                 			回复了{{item.replyName}}
                 		</span>
                 	</li>
                 	<!-- <div style="position:relative"> -->
                 	<li :class="{'reply-item-3':true,'ellipsis-list-3':isShowClass(key)}" v-html='item.replyContent' ref="profile" style='-webkit-box-orient:vertical;'>
                 	</li>
                 	<b class="b" v-if='isShow(key)' @click.stop='trigger(key)'>
                 		<b v-if='isShowClass(key)'>展开&or;</b>
                 		<b v-if='!isShowClass(key)'>收起&and;</b>
                 	</b>
                 	<!-- </div> -->
                 	<li class="reply-item-4">
                 		<span>回复</span>
                 	</li>
                 </ul>  
                </yd-list-other>
            </yd-list-item>
        </yd-list>
        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg"/>
    </yd-infinitescroll>
	<send-btn></send-btn>
</div>	
</template>
<script>
import SendBtn from './sendMessage'
export default{
	name:'replyGroup'
	,components:{SendBtn}
	,data(){
		return{
			 page: 1,
             pageSize: 10
             ,showIndexArr:[]//要显示【展开/收起】的列下标
			 ,isHides:[]//来控制每列显示【展开/收起】
			 ,list:[
				{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名发送回复的人名发送回复的人名发送回复的人名发送回复的人名发送回复的人名发送回复的人名发送回复的人名发送回复的人名发送回复的人名'
				,replyContent:'回复的内容.<span class="highlight">@ddd</span>...回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>'

				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,replyContent:'回复的内容.<span class="highlight">@ddd</span>...回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>回复的内容.<span class="highlight">@ddd</span>'

				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,replyContent:'回复的内容.<span>@ddd</span>...'
				
				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,replyContent:'<img src="https://www.1000yan.com/static/web/plug/qqFace/arclist/1.gif" 回复的内容.<span>@ddd</span>...'
				
				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,replyContent:'回复的内容.<span>@ddd</span>...'
				
				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,replyContent:'回复的内容.<span>@ddd</span>...'
				
				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,replyContent:'回复的内容.<span>@ddd</span>...'
				
				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,replyContent:'回复的内容.<span>@ddd</span>...'
				
				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,replyContent:'回复的内容.<span>@ddd</span>...'
				
				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,replyContent:'回复的内容.<span>@ddd</span>...'
				
				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,replyContent:'回复的内容.<span>@ddd</span>...'
				
				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,replyContent:'回复的内容.<span>ddd</span>...'
				
				}
				,{
				headerImg:'http://tva2.sinaimg.cn/crop.0.0.720.720.50/b6b99100jw8ew1600avxzj20k00k0wi9.jpg'
				,time:'4小时前'
				,replayName:'被@的人名'
				,sendName:'发送回复的人名'
				,replyContent:'回复的内容.<span>ddd</span>...'
				
				}
			 ]
			 ,showIndexArr:[]
			 ,isHide:true
		}
	}
	,methods:
	{
       loadList() 
       {
            this.$http.jsonp('http://list.ydui.org/getdata.php?type=backposition', {
                    params: {
                        page: this.page,
                        pagesize: this.pageSize
                    }
            }).then(function (response) {
                    const _list = response.body;

                    this.list = [...this.list, ..._list];

                    if (_list.length < this.pageSize || this.page == 3) {
                        /* 所有数据加载完毕 */
                        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
                        return;
                    }

                    /* 单次请求数据完毕 */
                    this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');

                    this.page++;
            });
        }
        ,isShow(index){
         	for(let i=0;i<this.showIndexArr.length;i++){
         		if(index==this.showIndexArr[i])
         			return true
         	}
         	return false
        }
        // 显示展开/收起点击事件
		,trigger(index){
			let val=-1;
			if(this.isHides[index]==index){
				this.isHides[index]=val;
			}else if(this.isHides[index]==-1){
				val=index;
				this.isHides[index]=val;
			}
			this.$set(this.isHides,index,val);	
		}
		// 显示省略号
		,isShowClass(index){
			return this.isHides[index]==index?true:false;
		}
    }
    ,mounted(){
    	 let elem=document.getElementsByClassName('reply-item-3');
    	 let doc=document.getElementsByTagName('html')[0];
    	 let maxHeight=parseFloat(doc.style.fontSize)*1.72;//1.72 三行是.reply-item-3 rem高度
    	 for(let i=0;i<elem.length;i++)
    	{
    	 	let height=elem[i].scrollHeight;
    	 	// 内容超过三行
    	 	if(height>maxHeight){
    	 		this.showIndexArr.push(i);//要显示【展开/收起】的列下标
    	 		this.isHides[i]=i;//来控制显示【展开/收起】
    	 	}
    	}
    }
}	
</script>
<style>
.ellipsis-list-3
{
    -webkit-box-orient:vertical;
	display:-webkit-box;
    -webkit-line-clamp: 3;
    overflow:hidden;
}
.yd-list-theme4 .yd-list-item .yd-list-img{
	display: none;
}
.reply-item-wrap{
	width:100%;
	margin:0 auto;
	position: relative;
	
}
.reply-item-wrap .highlight{
	color:#61a4e9;
}
.reply-item-wrap .header-img{
	width:.6rem;
	border-radius: 50%;
	vertical-align: middle;
}
.reply-item-wrap .send-name{
	font-size:.3rem;
	color:#818181;
	display: inline-block;
	width:2rem;
}
.reply-item-wrap li{
	margin:.1rem auto;
}
.reply-item-wrap .reply-item-2{
	font-size:.3rem;
	color:#a3a9b2;
	padding-left: .6rem;
}
.reply-item-wrap .reply-item-2 span{
	padding-right: .2rem;
}
.reply-item-wrap .reply-item-3{
	font-size:.4rem;
	color:black;
	padding-left:.6rem;
	padding-right:.9rem;
	line-height: 1.5em;
	
}
.reply-item-wrap .reply-item-4{
	font-size:.3rem;
	text-align: right;
}
.reply-item-wrap .time-img{
	width: .35rem;
    vertical-align: top;
}	
.b{
	position: absolute;
    right: 0;
    bottom:.55rem;
    font-size:.3rem;
    color: #61a4e9;
    width:1rem;
}	
.ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>