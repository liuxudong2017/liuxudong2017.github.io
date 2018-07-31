<template>
<div class="qy-pk-wrap">
   	<div class="qy-pk-tag">
   		<div :class="['qy-pk-tag-item',activeNum==key?'qy-active':'']" v-for='item,key in list' :key='key' @click='triggerPkRank(key)'>
   			{{item.label}}
   		</div>
   	</div>
   	<div class="qy-pk-list-group" v-for='item,key in list' :key='key' v-if='key==activeNum'>
		<div class="qy-pk-list-title">
			<span class="qy-pk-title-left"></span>
			<div class="qy-pk-title-center">{{item.label}}</div>
			<span class="qy-pk-title-right"></span>
		</div>
   		<div class="qy-pk-list-item" v-for='n in 10'>
   			<span class="qy-pk-ranking">{{n}}</span>
   			<img src="https://1000yan.com/static_src/web/images/blankHead.png" alt="">
   			<span class="qy-pk-user-name">实力肯定JFK是</span>
   			<span>拥有红玫瑰数量 12</span>
   		</div>
   		<div class="qy-page">
   			<span class="qy-top-page">上一页</span>
   			<span class="qy-next-page">上一页</span>
   		</div>
   	</div>
</div>
</template>
<script>
    export default {
    	name:'pkItem',
        data() {
            return {
                list: [
                    {label: '全站阅读排名'},
                    {label: '地区阅读排行榜'},
                    {label: '猫币排行榜'},
                    {label: '学神排行榜'},
                    {label: '红玫瑰排行榜'}
                ]
                ,activeNum:0
            }
        }
        ,methods:{
        	triggerPkRank(index){
        		this.activeNum=index;
        	}
        }
        ,mounted(){
        	let qy_pk_tag=document.getElementsByClassName('qy-pk-tag')[0];
        	let widths=this.list.length*2.8;//每个条目2.8rem
        		qy_pk_tag.style.width=widths+'rem';
        	let startX;
        		qy_pk_tag.addEventListener('touchstart',function(e){
        			startX=e.targetTouches[0].pageX;
        		});
        		qy_pk_tag.addEventListener('touchmove',function(e){
        			let fontSize=parseFloat(document.getElementsByTagName('html')[0].style.fontSize);
        			let slider_cha_zhi=window.innerWidth*0.9;
        			let endX=e.targetTouches[0].pageX,minMarginLeft=(widths*fontSize-slider_cha_zhi)*-1;
        			let marginLefts=qy_pk_tag.style.marginLeft;
        				marginLefts=marginLefts==''?0:parseFloat(marginLefts);
        			console.log(marginLefts);
        			marginLefts+=endX-startX;
        			startX=endX;
        			if(marginLefts>0){
        				marginLefts=0;
        			}else if(marginLefts<minMarginLeft){
        				marginLefts=minMarginLeft;
        			}
        			qy_pk_tag.style.marginLeft=marginLefts+'px';
        		});
        }
    }
</script>
<style scoped>
	.hide{
		display: none;
	}
	.qy-pk-wrap{
		width:90%;
		margin:.6rem auto .2rem;
		overflow:hidden;
		padding-bottom:1.1rem;
	}
	.qy-pk-tag{
		overflow: hidden;
	}
	.qy-pk-tag .qy-pk-tag-item{
		float: left;
		width:2.8rem;
		font-size:.35rem;
		font-weight:800;
		color: #4a4949;
		text-align: center;
	}
	.qy-pk-tag .qy-active{
		color: #f46094;
	}
	.qy-pk-list-group .qy-pk-list-item{
		color: #f46094;
    	margin: .2rem 0;
    	font-size:.3rem;
	}
	.qy-pk-list-group .qy-pk-list-item .qy-pk-ranking{
		vertical-align: top;
	    display: inline-block;
	    width: .5rem;
	    height: .5rem;
	    line-height: .5rem;
	    text-align: center;
	    background: #f46094;
	    color: #fff;
	    border-radius: 50%;
	}
	.qy-pk-list-group .qy-pk-list-item>img{
		width:.8rem;
	}
	.qy-pk-list-group .qy-pk-list-item .qy-pk-user-name{
		display: inline-block;
	    width: 1.6rem;
	    overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    vertical-align: bottom;
	}
	.qy-pk-list-group .qy-page{
		display: flex;
		justify-content: space-around;
	}
	.qy-pk-list-group .qy-page span{
		font-size: .3rem;
	    padding: .2rem;
	    color: #f46094;
	    border: .02rem solid;
	    text-align: center;
	    border-radius: .4rem;
	  	box-shadow: 1px;
	}
	.qy-pk-list-group .qy-pk-list-title{
		display: flex;
		justify-content:space-between;
		margin:.3rem 0;
	}
	.qy-pk-list-group .qy-pk-list-title span{
		display: inline-block;
	    width: 25%;
	    height: .04rem;
	    background: #f46094;
	    margin-top: 0.4rem
	}
	.qy-pk-list-group .qy-pk-list-title .qy-pk-title-center{
		font-size:.35rem;
		color:#fff;
		background:#f46094;
		border-radius:.5rem;
		padding:.2rem;
	}
</style>