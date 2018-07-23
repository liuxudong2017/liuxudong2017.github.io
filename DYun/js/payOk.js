'use strict';

var vm = new Vue({
	el: "#app",
	data: {
		isCancelOrder: false,
		ewSrc: 'img/er-wei-ma.png',
		orStatus: 1,
		orderMess: {
			orderNum: '6545165465165',
			orderStatus: ['', '待使用', '使用中', '已完成', '已失效', '已取消'] //1 待使用 2 使用中 3 已完成 4 已失效 5 已取消
			, skiName: "南山雪场",
			orderTime: '2018-03-26 17:33'
		},
		mealMess: {
			info: '双板、一日票',
			rmb: 200,
			pledgeRMB: 100
		},
		getStatusMess: [{ status: 0, content: '待领取', title: '智能双板' //status 2 已归还
		}, { status: 1, content: '待归还', title: '2小时家庭雪场' }, { status: 2, content: '已归还', title: '雪服' }],
		colorClassArr: ['wait', 'wait', 'over'],
		colorClassOrderArr: ['', 'wait', 'wait', 'over', 'over', 'over']
	},
	methods: {
		cancleOrder: function cancleOrder() {
			location.href = "myOrder.html";
		}
	},
	created: function created() {
		//创建 可访问data
		this.orStatus = formateUrl().status * 1;
	},
	mounted: function mounted() {//挂在

	},
	beforeDestroy: function beforeDestroy() {//销毁前

	}
});