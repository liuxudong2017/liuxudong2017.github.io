let vm=new Vue({
	el:"#app"
	,data:{
		isCancelOrder:false
		,ewSrc:'img/er-wei-ma.png'
		,orStatus:1
		,paramObj:{}
		,orderMess:{
			orderNum:'6545165465165'
			,orderStatus:['','待使用','使用中','已完成','已取消','已失效']//1 待使用 2 使用中 3 已完成 5 已失效4 已取消
			,skiName:"南山雪场"
			,orderTime:'2018-03-26 17:33'
		}
		,mealMess:{
			info:'双板、一日票'
			,rmb:200
			,pledgeRMB:100
		}
		,getStatusMess:[
			{status:0,content:'待领取',title:'智能双板'}
			,{status:1,content:'待归还',title:'2小时家庭雪场'}
			,{status:2,content:'已归还',title:'雪服'}
		]
		,colorClassArr:['wait','wait','over']
		,colorClassOrderArr:['','wait','wait','over','over','over']
		
		,obj:{//取消 订单 信息
			payType:1
			,skiType:1
			,allRmb:1
			,cm:1
			,kg:1
			,num:1
		}
		,tel:''
	}
	,methods:{
		cancleOrder(){
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
					orStatus==1?this.refund():'';
//					location.href='payOk.html?orderId='+this.paramObj.orderId;
				}
			});
		}
		,refund(){//申请退款
			let params={
				languageCode:1,
				userId:1,
				out_trade_no:this.orderMess.orderNum,
				totalPrice:this.rmb
			}
			axios.post(ajaxUrl.refundInterface,params).then(res=>{
				console.log(res);
			})
		}
		,loadPage(){
			console.log(ajaxUrl.leaseOrderDetailInterface);
			let params={languageCode:1,userId:1,orderId:this.paramObj.orderId};
			console.log(params);
			axios.post(ajaxUrl.leaseOrderDetailInterface,params).then(res=>{
				console.log(res);
				if(res.data.code==0){
					let data=res.data.data;
					let obj1={};
					obj1.orderNum=data.orderCode;
					obj1.orderStatus=['','待使用','使用中','已完成','已取消','已失效'];
					obj1.skiName=data.shopName;
					obj1.orderTime=data.orderTime;
					let obj2={},obj3={},arr4=[];
					obj2.info=data.goodsDetails;
					obj2.rmb=data.goodsPrice;
					obj2.pledgeRMB=data.depositPrice;
					obj3.payType=data.payType;
					obj3.skiType=data.skisType;
					obj3.allRmb=data.totalPrice;
					obj3.cm=data.userHeight;
					obj3.kg=data.userWeight;
					obj3.num=data.userShoeSize;
					let arrMess4=data.goodsDetails.split('+');
					
					for(let z=0;z<arrMess4.length;z++){
						let obj4={};
						obj4.title=arrMess4[z];
						if(data.state==1){
							obj4.content='待领取';
							obj4.status=0;
						}else if(data.state==2){
							obj4.content='待归还';
							obj4.status=1;
						}else if(data.state==3){
							obj4.content='已归还';
							obj4.status=2;
						}else{
							obj4.content='---';
							obj4.status=0;
						}
						arr4.push(obj4);
					}
					this.getStatusMess=arr4;
					this.tel=data.serviceTel;
					this.ewSrc=data.orderQrcode;
					this.obj=obj3;
					this.mealMess=obj2;
					this.orderMess=obj1;
					this.orStatus=data.state;
					
				}
			});
		}
	}
	,created(){ //创建 可访问data
		this.paramObj=formateUrl();
		console.log(formateUrl());
		this.loadPage();
	}
	,mounted(){//挂在

	}
	,beforeDestroy(){//销毁前

	}
});