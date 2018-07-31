<template>
<div class="app-wrap">
	<header-tag title='充值记录'></header-tag>
	<div class="wrap">
		<div class="qy-wrap-title">
			明细
		</div>
		<qy-list :mess='consumeObj'></qy-list>
	</div>
</div>		
</template>
<script>
import HeaderTag from 'components/secondHeader/secondHeader';
import QyList from 'components/record/record';
export default{
	name:'app'
	,components:{HeaderTag,QyList}
	,data(){
		return{
			consumeObj:{
				payMethod:'微信支付'
				,yb:3434
				,czUnsuccess:false
				,time:'2017-08-09 11:44'
				,recordPay:true
			}
		}
	}	
}		
</script>
<style>
.wrap{
	background:url(../../common/img/img_xfjl_pj@3x.png) no-repeat;
	background-size: contain;
    min-height:10.72rem;
    width: 90%;
    margin: .5rem auto;
}

.qy-wrap-title{
	/*color:#9ca5ad;*/
	color:#9ca5ad;
	font-size:.48rem;
	border-bottom:.01rem solid #e8eaf1;
	font-weight:600;
	padding-top:.4rem;
}
.ellipsis{
		overflow:hidden;
		white-space:nowrap;
		text-overflow:ellipsis;
	}			
</style>