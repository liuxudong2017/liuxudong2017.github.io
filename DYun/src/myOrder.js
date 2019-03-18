let vm=new Vue({
	el:"#app"
	,data:{
		listArr:[
			{
				orderStatus:0// 0 待付款  1 待使用 2 使用中 3 已完成 4 已失效 5 已取消
				,skiName:'北京国际滑雪场'
				,info:'只能雪板+雪鞋一日套餐'
				,rmb:300
				,orderId:''
			},
			{
				orderStatus:1// 0 待付款  1 待使用 2 已完成
				,skiName:'北京国际滑雪场'
				,info:'只能雪板+雪鞋一日套餐'
				,rmb:300
			},
			{
				orderStatus:2// 0 待付款  1 待使用 2 已完成
				,skiName:'北京国际滑雪场'
				,info:'只能雪板+雪鞋一日套餐'
				,rmb:300
			},
			{
				orderStatus:3// 0 待付款  1 待使用 2 已完成
				,skiName:'北京国际滑雪场'
				,info:'只能雪板+雪鞋一日套餐'
				,rmb:300
			},
			{
				orderStatus:4// 0 待付款  1 待使用 2 已完成
				,skiName:'北京国际滑雪场'
				,info:'只能雪板+雪鞋一日套餐'
				,rmb:300
			},
			{
				orderStatus:5// 0 待付款  1 待使用 2 已完成
				,skiName:'北京国际滑雪场'
				,info:'只能雪板+雪鞋一日套餐'
				,rmb:300
			}
		]
		,pageNum:1
		,isShowModel:false
	}
	,methods:{
		addMoreOrder(e){
			let arr=[
				{
				orderStatus:0// 0 待付款  1 待使用 2 已完成
				,skiName:'北京国际滑雪场'
				,info:'只能雪板+雪鞋一日套餐'
				,rmb:300
				},
				{
				orderStatus:1// 0 待付款  1 待使用 2 已完成
				,skiName:'北京国际滑雪场'
				,info:'只能雪板+雪鞋一日套餐'
				,rmb:300
			},
			{
				orderStatus:2// 0 待付款  1 待使用 2 已完成
				,skiName:'北京国际滑雪场'
				,info:'只能雪板+雪鞋一日套餐'
				,rmb:300
			},
			{
				orderStatus:0// 0 待付款  1 待使用 2 已完成
				,skiName:'北京国际滑雪场'
				,info:'只能雪板+雪鞋一日套餐'
				,rmb:300
			}
			]
			this.listArr=[...this.listArr,...arr];
		}
		,goPay(orderId){
			location.href='waitPay.html?orderId='+orderId;
		}
		,goUse(status,orderId){
			location.href='payOk.html?status='+status+'&orderId='+orderId;
		}
		,goDel(e){
			let arr=this.listArr;
			arr.splice(this.delIndex,1);
			this.delIndex=-1;
		}
		,loadPage(){
			axios.post(ajaxUrl.leaseOrderListInterface,{languageCode:1,userId:'1'}).then(res=>{
				console.log(res);
				if(res.data.code==0){
					let data=res.data.data;
					let arr=[];
					for(let i=0;i<data.length;i++)
					{
						let obj={};
						obj.orderStatus=data[i].state;
						obj.skiName=data[i].shopName;
						obj.rmb=data[i].totalPrice;
						obj.orderId=data[i].goodsId;
						obj.info=data[i].goodsDetails;
						obj.orderId=data[i].id;
						obj.payType=data[i].payType;
						arr.push(obj);
					}
					
					this.listArr=arr;
				}
			});
		}
	}
	,created(){ //创建 可访问data
		this.loadPage();
	}
	,mounted(){//挂在

	}
	,beforeDestroy(){//销毁前

	}
});