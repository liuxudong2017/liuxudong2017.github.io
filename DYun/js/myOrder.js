'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var vm = new Vue({
	el: "#app",
	data: {
		listArr: [{
			orderStatus: 0 // 0 待付款  1 待使用 2 使用中 3 已完成 4 已失效 5 已取消
			, skiName: '北京国际滑雪场',
			info: '只能雪板+雪鞋一日套餐',
			rmb: 300,
			orderId: ''
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
			orderStatus: 3 // 0 待付款  1 待使用 2 已完成
			, skiName: '北京国际滑雪场',
			info: '只能雪板+雪鞋一日套餐',
			rmb: 300
		}, {
			orderStatus: 4 // 0 待付款  1 待使用 2 已完成
			, skiName: '北京国际滑雪场',
			info: '只能雪板+雪鞋一日套餐',
			rmb: 300
		}, {
			orderStatus: 5 // 0 待付款  1 待使用 2 已完成
			, skiName: '北京国际滑雪场',
			info: '只能雪板+雪鞋一日套餐',
			rmb: 300
		}],
		pageNum: 1,
		isShowModel: false
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
		goPay: function goPay(orderId) {
			location.href = 'waitPay.html?orderId=' + orderId;
		},
		goUse: function goUse(status, orderId) {
			location.href = 'payOk.html?status=' + status + '&orderId=' + orderId;
		},
		goDel: function goDel(e) {
			var arr = this.listArr;
			arr.splice(this.delIndex, 1);
			this.delIndex = -1;
		},
		loadPage: function loadPage() {
			var _this = this;

			axios.post(ajaxUrl.leaseOrderListInterface, { languageCode: 1, userId: '1' }).then(function (res) {
				console.log(res);
				if (res.data.code == 0) {
					var data = res.data.data;
					var arr = [];
					for (var i = 0; i < data.length; i++) {
						var obj = {};
						obj.orderStatus = data[i].state;
						obj.skiName = data[i].shopName;
						obj.rmb = data[i].totalPrice;
						obj.orderId = data[i].goodsId;
						obj.info = data[i].goodsDetails;
						obj.orderId = data[i].id;
						obj.payType = data[i].payType;
						arr.push(obj);
					}

					_this.listArr = arr;
				}
			});
		}
	},
	created: function created() {
		//创建 可访问data
		this.loadPage();
	},
	mounted: function mounted() {//挂在

	},
	beforeDestroy: function beforeDestroy() {//销毁前

	}
});