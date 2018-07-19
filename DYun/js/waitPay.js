'use strict';

var vm = new Vue({
	el: "#app",
	data: {
		time: '23 小时 55 分',
		rmb: 300,
		orderMess: {
			orderNum: '6545165465165',
			orderStatus: '待使用',
			skiName: "南山雪场",
			orderTime: '2018-03-26 17:33'
		},
		mealMess: {
			info: '双板、一日票',
			rmb: 200,
			pledgeRMB: 100
		},
		isShowModel: false
	},
	methods: {
		cancleOrder: function cancleOrder() {
			//取消订单成功
			location.href = "myOrder.html";
		},
		pay: function pay() {
			location.href = 'payOk.html';
		}
	},
	created: function created() {//创建 可访问data

	},
	mounted: function mounted() {//挂在

	},
	beforeDestroy: function beforeDestroy() {//销毁前

	}
});