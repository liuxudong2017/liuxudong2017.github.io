let vm=new Vue({
	el:"#app"
	,data:{
		listArr:[
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
		,goPay(e){
			location.href='waitPay.html';
		}
		,goUse(e){
			location.href='payOk.html';
		}
		,goDel(e){
			this.isShowModel=false;
			let index=e.target.tabIndex*1;
			let arr=this.listArr;
			arr.splice(index-1,1);
			console.log(arr.length);
		}
	}
	,created(){ //创建 可访问data

	}
	,mounted(){//挂在

	}
	,beforeDestroy(){//销毁前

	}
});