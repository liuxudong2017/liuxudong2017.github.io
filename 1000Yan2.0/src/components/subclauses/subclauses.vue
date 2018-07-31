<!-- 我的账户页面是否有箭头 -->
<template>
<div class='subclauses-wrap'>
	<yd-cell-item arrow :href="hrefs" :type="types" class='item'>
            <img :src="srcs" alt="" slot='icon'>
            <span slot="left" class="item-left">{{leftContext}}</span>
    </yd-cell-item>	
    <yd-cell-item v-if="!hasNexts" :href="hrefs" :type="types" class='item'>
        <img :src="srcs" alt="" slot='icon'>
        <span slot="left" class="item-left">{{leftContext}}</span>
        <span slot="right" class="item-right">{{rightContext}}言币</span>
    </yd-cell-item>
</div>
</template>
<script>
export default{
	name:'subclauses'
	,props:['hasNext','leftText','rightText','href','type','src']
	,data(){
		return {
			types:this.type
			,hrefs:this.href
			,rightContext:this.rightText
			,leftContext:this.leftText
		}
	}
	,computed:{
		hasNexts:function(){
			return !this.hasNext?true:false;
		}
		,srcs:function(){
			return '/static/img/'+this.src;
		}

	}
}		
</script>
<style>
.subclauses-wrap .item{
	border-bottom: 1px solid #e8eaf1;
}
.subclauses-wrap .item-left{
	font-size:.4rem;
	color:#2c2c2c;
	font-weight:600;
}	
.subclauses-wrap .item-right{
	font-size:.4rem;
	color:#f46094;
}
</style>