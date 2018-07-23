'use strict';

var vm = new Vue({
	el: "#app",
	data: {
		isCancelOrder: false,
		ewSrc: 'img/er-wei-ma.png',
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
		getStatusMess: [{ status: 0, content: '待领取' //status 2 已归还
		}, { status: 1, content: '待归还' }, { status: 1, content: '待归还' }],
		colorClassArr: ['wait', 'wait', '']
	},
	methods: {
		cancleOrder: function cancleOrder() {
			location.href = "myOrder.html";
		}
	},
	created: function created() {//创建 可访问data

	},
	mounted: function mounted() {//挂在

	},
	beforeDestroy: function beforeDestroy() {//销毁前

	}
});