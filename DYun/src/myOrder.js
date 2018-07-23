let vm=new Vue({
	el:"#app"
	,data:{
		listArr:[
			{
				orderStatus:0// 0 待付款  1 待使用 2 使用中 3 已完成 4 已失效 5 已取消
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
		,delIndex:-1
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
		,goPay(e){
			location.href='waitPay.html';
		}
		,goUse(status){
			location.href='payOk.html?status='+status;
		}
		,goDel(e){
			let arr=this.listArr;
			arr.splice(this.delIndex,1);
			this.delIndex=-1;
		}
	}
	,created(){ //创建 可访问data

	}
	,mounted(){//挂在

	}
	,beforeDestroy(){//销毁前

	}
});