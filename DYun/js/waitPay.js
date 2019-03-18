'use strict';

var vm = new Vue({
	el: "#app",
	data: {
		mm: '00',

		ss: '00',
		rmb: 300,
		tel: '--',
		orderMess: {
			orderNum: '6545165465165',
			orderStatus: '待付款',
			skiName: "南山雪场",
			orderTime: '2018-03-26 17:33'
		},
		mealMess: {
			info: '双板、一日票',
			rmb: 200,
			pledgeRMB: 100
		},
		isShowModel: false,
		paramObj: {},
		orderObj: {
			shopId: 1,
			payType: 1,
			orderId: 1,
			skiType: 1, //1 单板 套餐 2 双板套餐
			id: 1
		}
	},
	methods: {
		cancleOrder: function cancleOrder() {
			var _this = this;

			//取消订单成功
			console.log(ajaxUrl.cancelOrderInterface);
			var params = {
				languageCode: 1,
				userId: 1,
				orderId: this.paramObj.orderId,
				type: 1
			};
			axios.post(ajaxUrl.cancelOrderInterface, params).then(function (res) {
				console.log(res);
				if (res.data.code == 0) {
					console.log('code-=-=' + res.data.code);
					location.href = 'payOk.html?orderId=' + _this.paramObj.orderId;
				}
			});
		},
		pay: function pay() {
			console.log(ajaxUrl.wxOrderInterface);
			var params = {
				languageCode: 1,
				userId: 1,
				orderCode: this.orderMess.orderNum,
				totalPrice: this.rmb,
				userIp: returnCitySN.cip,
				tradeType: "JSAPI",
				notifyUrl: 'http://testapi.ew-sports.com:8080/ewsports-portal/wx',
				wxId: getCookieVal('wxId')
			};
			console.log(params);
			axios.post(ajaxUrl.wxOrderInterface, params).then(function (res) {
				console.log(res);
				if (res.data.code == 0) {
					var data = res.data.data.xml;
					var time = new Date();
					time = time.getTime();
					var obj = {
						"appId": data.appid,
						"nonceStr": data.nonce_str,
						"paySign": data.sign,
						"signType": "MD5",
						"package": "prepay_id=" + data.prepay_id,
						"timeStamp": time
					};
					console.log(obj);
					callpay(obj);
				}
			});
		},
		formTime: function formTime(timeStr) {
			var _this2 = this;

			//
			var orderTime = new Date(timeStr);
			var that = this;
			orderTime.setMinutes(orderTime.getMinutes() + 30);
			var payOverTime = orderTime.getTime();
			var stop = setInterval(function () {
				var currTime = new Date();
				currTime = currTime.getTime();
				var waitTime = parseInt((payOverTime - currTime) / 1000);
				var waitTimeM = Math.floor(waitTime / 60);
				var waitTimeS = Math.floor(waitTime - waitTimeM * 60);

				if (waitTimeM <= 0 && waitTimeS <= 0) {
					//支付超时
					clearInterval(stop);
					location.href = "payOk.html?orderId=" + _this2.paramObj.orderId;
				} else {
					_this2.mm = waitTimeM < 10 ? '0' + waitTimeM : waitTimeM;
					_this2.ss = waitTimeS < 10 ? '0' + waitTimeS : waitTimeS;
				}
			}, 1000);
		},
		loadPage: function loadPage() {
			var _this3 = this;

			console.log(ajaxUrl.leaseOrderDetailInterface);
			var params = {
				languageCode: 1,
				userId: 1,
				orderId: this.paramObj.orderId
			};
			console.log(params);
			axios.post(ajaxUrl.leaseOrderDetailInterface, params).then(function (res) {
				console.log(res);
				var data = res.data.data;
				if (res.data.code == 0) {
					var obj1 = {},
					    obj2 = {},
					    obj3 = {}; //
					obj1.orderNum = data.orderCode;
					obj1.orderStatus = '待付款';
					obj1.skiName = data.shopName;
					obj1.orderTime = data.orderTime;
					obj2.info = data.goodsDetails;
					obj2.rmb = data.goodsPrice;
					obj2.pledgeRMB = data.depositPrice;
					obj3.shopId = data.shopId;
					obj3.payType = data.payType;
					obj3.orderId = data.goodsId;
					obj3.id = data.id;
					obj3.skiType = data.skisType;
					_this3.orderObj = obj3;
					_this3.rmb = data.totalPrice;
					_this3.mealMess = obj2;
					_this3.orderMess = obj1;
					_this3.tel = data.serviceTel;
					console.log('0000');
					_this3.formTime(data.orderTime);
				}
			});
		}
	},
	created: function created() {
		//创建 可访问data
		var param = formateUrl();
		this.paramObj = param;
		console.log(param);
		this.loadPage();
	},
	mounted: function mounted() {//挂在

	},
	beforeDestroy: function beforeDestroy() {//销毁前

	}
});