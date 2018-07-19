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
		times: 60
	},
	methods: {
		checkPay: function checkPay(e) {
			var index = e.target.tabIndex;
			this.payType == index ? "" : this.payType = index;
		},
		getCode: function getCode(e) {
			var _this = this;

			if (this.iphone != '') {
				this.codeStatus = true;
				var stop = setInterval(function () {
					_this.times -= 1;
					if (_this.times <= 0) {
						clearInterval(stop);
						_this.codeStatus = false;
					}
				}, 1000);
			} else {
				alert('手机号不能为空');
			}
		},
		submitOrder: function submitOrder() {
			console.log(this.code + "===" + this.iphone);
			location.href="payOk.html";
		}
	},
	created: function created() {//创建 可访问data

	},
	mounted: function mounted() {//挂在

	},
	beforeDestroy: function beforeDestroy() {//销毁前

	}
});