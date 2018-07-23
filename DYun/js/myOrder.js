'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var vm = new Vue({
	el: "#app",
	data: {
		listArr: [{
			orderStatus: 0 // 0 待付款  1 待使用 2 已完成
			, skiName: '北京国际滑雪场',
			info: '只能雪板+雪鞋一日套餐',
			rmb: 300
		}, {
			orderStatus: 1 // 0 待付款  1 待使用 2 已完成
			, skiName: '北京国际滑雪场',
			info: '只能雪板+雪鞋一日套餐',
			rmb: 300
		}, {
			orderStatus: 2 // 0 待付款  1 待使用 2 已完成
			, skiName: '北京国际滑雪场',
			info: '只能雪板+雪鞋一日套餐',
			rmb: 300
		}, {
			orderStatus: 0 // 0 待付款  1 待使用 2 已完成
			, skiName: '北京国际滑雪场',
			info: '只能雪板+雪鞋一日套餐',
			rmb: 300
		}],
		pageNum: 1,
		isShowModel: false,
		delIndex: -1
	},
	methods: {
		addMoreOrder: function addMoreOrder(e) {
			var arr = [{
				orderStatus: 0 // 0 待付款  1 待使用 2 已完成
				, skiName: '北京国际滑雪场',
				info: '只能雪板+雪鞋一日套餐',
				rmb: 300
			}, {
				orderStatus: 1 // 0 待付款  1 待使用 2 已完成
				, skiName: '北京国际滑雪场',
				info: '只能雪板+雪鞋一日套餐',
				rmb: 300
			}, {
				orderStatus: 2 // 0 待付款  1 待使用 2 已完成
				, skiName: '北京国际滑雪场',
				info: '只能雪板+雪鞋一日套餐',
				rmb: 300
			}, {
				orderStatus: 0 // 0 待付款  1 待使用 2 已完成
				, skiName: '北京国际滑雪场',
				info: '只能雪板+雪鞋一日套餐',
				rmb: 300
			}];
			this.listArr = [].concat(_toConsumableArray(this.listArr), arr);
		},
		goPay: function goPay(e) {
			location.href = 'waitPay.html';
		},
		goUse: function goUse(e) {
			location.href = 'payOk.html';
		},
		goDel: function goDel(e) {
			var index = e.target.tabIndex * 1;
			var arr = this.listArr;
			arr.splice(this.delIndex, 1);
			this.delIndex = -1;
		}
	},
	created: function created() {//创建 可访问data

	},
	mounted: function mounted() {//挂在

	},
	beforeDestroy: function beforeDestroy() {//销毁前

	}
});