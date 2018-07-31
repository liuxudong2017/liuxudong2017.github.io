<template>
<div class="qy-rechargeYb-wrap" @click.stop='rechargeYbColse'>
	<ul class="qy-rechargeYb-group" @click.stop=''>
		<li class="qy-rechargeYb-title">
			充值言币
		</li>
		<li class="qy-rechargeYb-balance">
			<img src="./img/icon_chongzhi@3x.png" alt="" class="qy-balance-img">
			<span>可用余额:</span><b class="font-color">{{qYBalance}}</b>
		</li>
		<li class="qy-checked-us" v-if='payMode=="payPal"'>
			<div class="active">
				<img class="qy-rechargeYb-img" src="./img/icon_chongzhi_money@3x.png" alt="">
				<span class="font-color">10$</span>
				<span class="font-color get-yb">1000言币</span>
			</div>
		</li>
		<li class="qy-checked-rnb" v-if='payMode!="payPal"'>
			<div v-for='(item,key) in rnbArr' :key='key' :class='{"active":rnbActiveArr[key]}' @click.stop='isRNBActive(key)'>
				<img class="qy-rechargeYb-img" src="./img/icon_chongzhi_money@3x.png" alt="">
				<span class="font-color">{{item.money}}元</span>
				<span class="font-color get-yb">{{item.yb}}言币</span>
			</div>	
		</li>
		<li>若您充值美元,将按10美元=6200言币充值</li>
		<li class="qy-recharge-type">
			<div :class="['ali-pay',payMode==payArr[0]?'active':'']" @click.stop='checkePayMode(0)'>
				<img src="./img/icon_chongzhi_paybao@3x.png" alt="" class="ali-pay-img">
				支付宝
			</div>
			<div :class="['weChat-pay',payMode==payArr[1]?'active':'']" @click.stop='checkePayMode(1)'>
				<img src="./img/icon_chongzhi_weixin@3x.png" alt="" class="ali-pay-img">
				微信
			</div>
			<div :class="['pay-pal',payMode==payArr[2]?'active':'']" @click.stop='checkePayMode(2)'>
				<img src="./img/icon_chongzhi_paypal@3x.png" alt="" class="ali-pay-img">
				PayPal
			</div>
		</li>
		<li class="qy-give-yb">
			<span>即将充值:</span><span class="font-color">{{payMoney}}{{payMode=='payPal'?'$':'元'}}</span>
			<span class="font-color">赠送{{giveYb}}言币!</span>
			<span>(获得 </span>
			<span class="font-color">{{yb}}+{{giveYb}}</span>
			<span>言币)</span>
		</li>
		<yd-button size="large" class='qy-btn'>去付款</yd-button>
	</ul>
</div>		
</template>
<script>
export default{
	name:''
	,props:['show']
	,data(){
		return{
			qYBalance:90//余额
			,payMoney:10//支付多少钱
			,giveYb:200//赠送言币
			,yb:1000//获得言币
			,payArr:['alipay','weChat','payPal']
			,payMode:'alipay'
			,rnbArr:[
				{'money':10,'yb':1000,'songYb':200}
				,{'money':30,'yb':3000,'songYb':220}
				,{'money':50,'yb':5000,'songYb':250}
				,{'money':100,'yb':10000,'songYb':300}
			]
			,usArr:[
				{'money':10,'yb':6200,'songYb':1000}
			]
			,rnbActiveArr:[true,false,false,false]
		}
	}
	,methods:{
		isRNBActive(index){
			for(let i=0;i<this.rnbActiveArr.length;i++){
				this.rnbActiveArr[i]=false;
			}
			this.rnbActiveArr.splice(index,1,true);
			let obj=this.rnbArr[index];
			this.yb=obj.yb;
			this.giveYb=obj.songYb;
			this.payMoney=obj.money;
		}
		,checkePayMode(index){//选中支付方式
			this.payMode=this.payArr[index];
			let obj=this.rnbArr[0];
			if(this.payMode=='payPal'){
				 obj=this.usArr[0];
			}else{
				// 切换支付方式：默认10元
				for(let i=0;i<this.rnbActiveArr.length;i++){
				this.rnbActiveArr[i]=false;
				}
				this.rnbActiveArr.splice(0,1,true);
			}
				this.yb=obj.yb;
				this.giveYb=obj.songYb;
				this.payMoney=obj.money;
		}
		,rechargeYbColse(){
			this.$emit('listenRechargeYb',false);
		}
	}
}	
</script>
<style>
.qy-rechargeYb-wrap{
	position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.5);
    z-index: 666;
}
.qy-rechargeYb-wrap .qy-rechargeYb-group{
	position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
}
.qy-rechargeYb-wrap .qy-rechargeYb-title{
	text-align: center;
    font-size: .5rem;
    padding: .3rem;
    border-bottom: .02rem solid #f1f2f6;
    color: black;
    font-weight: 600;
}
.qy-rechargeYb-wrap li{
	color: #9ca5ad;
    font-size: .3rem;
    padding: .25rem;
    text-align: center;
}
.qy-rechargeYb-wrap .qy-rechargeYb-balance{
	font-size: .4rem;
	text-align: left;

}

.qy-rechargeYb-balance img{
	height:.6rem;
	vertical-align: middle;
}
.qy-rechargeYb-wrap .get-yb{
	display: block;
}
.qy-rechargeYb-wrap .font-color{
	color:#f46094;
}
.qy-rechargeYb-wrap li .active{
	background:#f46094;
	
}
.qy-rechargeYb-wrap .active .font-color{
	color:#fff;
}
.qy-checked-rnb,.qy-checked-us{
	display: flex;
	justify-content:flex-start;
	flex-wrap: wrap;
}
.qy-checked-rnb div,.qy-checked-us div{
	padding: .15rem;
    border: .02rem solid #f46094;
    border-radius: .8rem;
    margin-right: .08rem;
}
.qy-checked-rnb img,.qy-checked-us img{
	height:.4rem;
	vertical-align: middle;
}
.qy-recharge-type{
	display: flex;
	justify-content: space-around;
	border-top:.02rem solid #f1f2f6;

}
.qy-recharge-type div{
	padding:.4rem 0;
	border-radius:.7rem;
	color:#fff;
	font-size:.4rem;
	width:33%;
}
.qy-recharge-type img{
	height:.6rem;
	vertical-align: middle;

}
.ali-pay{
	background:#3879D9;
}
.weChat-pay{
	background:#26d026;
}
.pay-pal{
	background:#243982;
}
.qy-rechargeYb-wrap .qy-give-yb{
    border-bottom:.02rem solid #f1f2f6;

}
.qy-rechargeYb-wrap .qy-btn{
	background: #f46094;
	color:#fff;
	border-radius:1rem;
	font-size: .5rem;
	margin-bottom:.3rem;
	width: 90%;
    margin: 0.3rem auto;
}
.qy-rechargeYb-wrap .qy-btn:active{
	background:#f45555;
}
</style>