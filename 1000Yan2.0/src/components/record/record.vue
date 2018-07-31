<template>
<div class="qy-record-wrap">
<!-- 充值列表 -->
	<div class="qy-record-item" v-if='recordPay==true'>
		<div class="qy-item-left">
			<div class="qy-cz-yb qy-cz">
				充值：{{yb}}言币
			</div>
			<div class="qy-left-time">
				<img src="../../common/img/icon_time@3x.png" alt="" class="icon-time icon">
				<div class="qy-time">
					{{time}}
				</div>
			</div>
		</div>
		<div class="qy-right-item">
			<div class="qy-cz-success" v-if='!czUnsuccess'>
				<img src="./icon_czjl_chenggong@3x.png" alt="" class="icon">
				<span>充值成功</span>
			</div>
			<div class="qy-cz-unsuccess" v-else-if='czUnsuccess'>
				<img src="./icon_czjl_shibai@3x.png" alt="" class="icon">
				<span>充值失败</span>
			</div>
			<div class="qy-pay-method">
				{{payMethod}}
			</div>
		</div>
	</div>
	<!-- 消费列表 -->
	<div class="qy-record-item qy-consume-item" v-else-if='recordPay==false'>
		<div class="qy-item-left">
			<div class="qy-cz-yb ellipsis">
				{{consumeMethod}}：{{consumeContext}}
			</div>
			<div class="qy-left-time">
				<img src="../../common/img/icon_time@3x.png" alt="" class="icon-time icon">
				<div class="qy-time">
					{{time}}
				</div>
			</div>
		</div>
		<div class="qy-right-item">
			<div class="qy-consume-status">
				<span>{{isConsumeSuccess?'消费成功':'消费失败'}}</span>
			</div>
			
			<div class="qy-consume-yb">
				{{consumeYb}}言币
			</div>
		</div>
	</div>

</div>		
</template>
<script>
export default{
	name:'record'//充值消费记录
	,props:['mess']
	/**
			 * recordPay：是否是充值页面条目
			 *payMethod：充值页面支付方式
			 *yb：充值页面充值方式
			 *time：条目时间
			 *czUnsuccess：是否充值失败
			 *isConsumeSuccess：是否消费成功
			 *consumeYb：消费言币
			 *consumeMethod：消费方式
			 *consumeContext：消费内容
			 */
	,data(){
		return{
			payMethod:this.mess.payMethod//
			,yb:this.mess.yb
			,time:this.mess.time
			,czUnsuccess:this.mess.czUnsuccess
			,isConsumeSuccess:this.mess.isConsumeSuccess
			,consumeYb:this.mess.consumeYb
			,consumeMethod:this.mess.consumeMethod
			,consumeContext:this.mess.consumeContext
			,recordPay:this.mess.recordPay

			
		}
	}
	,cumputed:{
		
	},
	mounted(){
		console.log(this.mess);
		console.log(this.recordPay);
		console.log(this.a);


	}
}		
</script>
<style scoped>
.qy-record-wrap{
	padding:.24rem;

}
.qy-record-item{
	display: flex;
	justify-content: space-between;
	padding-bottom:.2rem;
	border-bottom:.02rem solid #e8eaf1;
	margin-bottom: .2rem;
}
.qy-cz-success,.qy-consume-yb{
	color:#f46094;
	font-size:.4rem;
}
.qy-cz-unsuccess{
	font-size:.4rem;
	color:#70a7f1;
}
.qy-pay-method,.qy-consume-status{
	color:#b9c1c8;
	font-size:.4rem;
	padding-top:.1rem;
}
.qy-cz-yb{
	font-size:.5rem;
	max-width:4.2rem;
}
.qy-cz{
	max-width:4rem;
}
.qy-time{
	font-size:.25rem;
	color:#b9c1c8;
	display: inline-block;
}
.qy-left-time .icon{
	width:.25rem;
	padding-top:.2rem;
}
.qy-right-item .icon{
	width:.4rem;
	padding-top: .03rem;
	vertical-align: top;
}
.qy-right-item span{
	vertical-align: top;
}
/*----消费*/
.qy-consume-status{

}
</style>