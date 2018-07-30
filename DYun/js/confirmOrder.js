"use strict";

var vm = new Vue({
	el: "#app",
	data: {
		iphone: "",
		code: '',
		codeStatus: false,
		mess: {
			skiName: '北京南山滑雪场',
			info: '双板、雪鞋',
			cm: 175,
			kg: 70,
			shoeNum: 43
		},
		payType: 1 //0 阿里支付 1微信支付

		, allRMB: 300,
		times: 60,
		hintText: '请输入正确的手机号码!',
		isHint: false,
		paramObj: {},
		id: 0
	},
	methods: {
		checkPay: function checkPay(index) {
			//			let index=e.target.tabIndex;
			this.payType == index ? "" : this.payType = index;
		},
		getCode: function getCode(e) {
			var _this = this;

			if (this.iphone != '' && !this.isHint) {
				this.codeStatus = true;
				var stop = setInterval(function () {
					_this.times -= 1;
					if (_this.times <= 0) {
						clearInterval(stop);
						_this.codeStatus = false;
					}
				}, 1000);
			} else {
				this.isHint = true;
			}
		},
		pay: function pay(params) {
			var _this2 = this;

			axios.post(ajaxUrl.leaseOrderDetailInterface, params).then(function (res) {
				console.log(res);
				if (res.data.code == 0) {
					var data = res.data.data;
					var _params = {
						languageCode: 1,
						userId: 1,
						body: '',
						orderCode: data.orderCode,
						totalPrice: data.totalPrice,
						userIp: returnCitySN.cip,
						tradeType: data.payType,
						notifyUrl: 'http://testapi.ew-sports.com:8080/ewsports-portal/wx'
					};
					_this2.wxPay(_params);
					console.log('wx params sssss');
					console.log(_params);
					console.log('wx params eeeeee');
				}
			});
		},
		wxPay: function wxPay(params) {
			console.log('wx-------0');
			console.log(ajaxUrl.orderInterface);
			console.log(params);
			axios.post(ajaxUrl.orderInterface, params).then(function (res) {
				console.log('wxPayInterface....SSSS');
				console.log(res);
				console.log('wxPayInterface....eeeee');
			});
		},
		submitOrder: function submitOrder() {
			var param = {
				languageCode: 1,
				userId: 1,
				orderCode: this.paramObj.orderCode,
				totalPrice: this.paramObj.allRmb,
				userIp: returnCitySN.cip,
				tradeType: "JSAPI",
				notifyUrl: "http://testapi.ew-sports.com:8080/ewsports-portal/wx"
			};
			console.log(ajaxUrl.orderInterface);
			console.log(param);
			axios.post(ajaxUrl.orderInterface, param).then(function (res) {
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
				console.log('909090');
				console.log(callpay);
			});
		},
		regIphone: function regIphone(e) {
			var reg = /^1[3|5|7|8]\d{9}$/;
			var isTure = reg.test(this.iphone);
			this.isHint = !isTure;
			isTure ? '' : this.hintText = "请输入正确的手机号码！";
		},
		loadPage: function loadPage() {
			var _this3 = this;

			console.log(ajaxUrl.leaseOrderDetailInterface);
			var params = {
				languageCode: 1,
				userId: 1,
				orderId: this.id
			};
			console.log(params);
			axios.post(ajaxUrl.leaseOrderDetailInterface, params).then(function (res) {
				console.log(res);
				if (res.data.code == 0) {
					var data = res.data.data;
					var obj = {};
					obj.allRmb = data.totalPrice;
					obj.orderCode = data.orderCode;
					obj.info = data.goodsDetails;
					obj.shopName = data.shopName;
					obj.cm = data.userHeight;
					obj.kg = data.userWeight;
					obj.num = data.userShoeSize;
					_this3.payType = data.payType;
					_this3.paramObj = obj;
				}
				console.log('-=-=-==');

				console.log('======');
			});
		}
	},
	created: function created() {
		//创建 可访问data
		this.id = formateUrl().id;
		this.loadPage();
	},
	mounted: function mounted() {//挂在

	},
	beforeDestroy: function beforeDestroy() {//销毁前

	}
});