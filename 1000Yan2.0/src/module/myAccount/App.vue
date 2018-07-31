<template>
<div class="app-wrap">
	<div class="subclauses-wrap">
		<header-tag title='我的账户'></header-tag>
		<yd-cell-item arrow :href="hrefArr[0]" type="a" class='item'>
            <img src="./icon_myacount_xiaofei@3x.png" alt="" slot='icon'>
            <span slot="left" class="item-left">消费记录</span>
    	</yd-cell-item>
    	<yd-cell-item arrow :href="hrefArr[1]" type="a" class='item'>
            <img src="./icon_myacount_chongzhi@3x.png" alt="" slot='icon'>
            <span slot="left" class="item-left">充值记录</span>
    	</yd-cell-item>
    	<yd-cell-item :href="hrefArr[2]" type="div" class='item'>
            <img src="./icon_myacount_acount@3x.png" alt="" slot='icon'>
            <span slot="left" class="item-left">账户余额</span>
            <span slot="right" class="item-right">{{yb}}言币</span>
    	</yd-cell-item>			
	</div>
		
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
export default{
	name:'app'
	,components:{HeaderTag}
	,data(){
		return{
			yb:80
			,hrefArr:['consumeRecord.html','payRecord.html','#']
		}
	}
}		
</script>
<style>
body{
	background: #fff;
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
.yd-cell-item:not(:last-child):after{
	width:90%;
}
</style>