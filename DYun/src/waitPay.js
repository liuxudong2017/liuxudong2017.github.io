let vm=new Vue({
	el:"#app"
	,data:{
		time:'23 小时 55 分'
		,rmb:300
		,orderMess:{
			orderNum:'6545165465165'
			,orderStatus:'待付款'
			,skiName:"南山雪场"
			,orderTime:'2018-03-26 17:33'
		}
		,mealMess:{
			info:'双板、一日票'
			,rmb:200
			,pledgeRMB:100
		}
		,isShowModel:false
		,paramObj:{}
		,orderObj:{
			shopId:1,
			payType:1,
			orderId:1,
			skiType:1, //1 单板 套餐 2 双板套餐
			id:1
		}
	}
	,methods:{
		cancleOrder(){ //取消订单成功
//			location.href="myOrder.html";
			console.log(ajaxUrl.cancelOrderInterface);
			let params={
				languageCode:1,
				userId:1,
				orderId:this.paramObj.orderId,
				type:1
			}
			console.log(params);
			axios.post(ajaxUrl.cancelOrderInterface,params).then(res=>{
				console.log(res);
				if(res.data.code==0){
					console.log('code-=-='+res.data.code);
					this.refund();
//					location.href='payOk.html?orderId='+this.paramObj.orderId;
				}
			})
		}
		,refund(){
			let params={
				languageCode:1,
				userId:this.userID,
				out_trade_no:this.orderMess.orderNum,
				totalPrice:this.rmb,
				outRefundNo:'',
				refundFee:''
			}
			axios.post(ajaxUrl.refundInterface,params).then(res=>{
				console.log(res);
			})
		}
		,pay(){
//			location.href='payOk.html';
			console.log(ajaxUrl.orderInterface);
			let params={
				languageCode:1,
				userId:1,
				body:'',
				orderCode:this.orderMess.orderNum,
				totalPrice:this.rmb,
				userIp:returnCitySN.cip,
				tradeType:this.orderObj.payType,
				notifyUrl:'http://testapi.ew-sports.com:8080/ewsports-portal/wx'
			}
			console.log(params);
			axios.post(ajaxUrl.orderInterface,params).then(res=>{console.log(res)})
		}
		,loadPage(){
			console.log(ajaxUrl.leaseOrderDetailInterface);
			let params={languageCode:1,userId:1,orderId:this.paramObj.orderId};
			console.log(params);
			axios.post(ajaxUrl.leaseOrderDetailInterface,params).then(res=>{
				console.log(res);
				let data=res.data.data;
				if(res.data.code==0){
					let obj1={},obj2={},obj3={};//
					obj1.orderNum=data.orderCode;
					obj1.orderStatus='待付款';
					obj1.skiName=data.shopName;
					obj1.orderTime='2018-13-26 17:33';
					obj2.info=data.goodsDetails;
					obj2.rmb=data.goodsPrice;
					obj2.pledgeRMB=data.depositPrice;
					obj3.shopId=data.shopId;
					obj3.payType=data.payType;
					obj3.orderId=data.goodsId;
					obj3.id=data.id;
					obj3.skiType=data.skisType;
					this.orderObj=obj3;
					this.rmb=data.totalPrice;
					this.mealMess=obj2;
					this.orderMess=obj1;	
					console.log('0000');
				}
			});
		}
	}
	,created(){ //创建 可访问data
		let param=formateUrl();
		this.paramObj=param;
		console.log(param);
		this.loadPage();
	}
	,mounted(){//挂在

	}
	,beforeDestroy(){//销毁前

	}
});