'use strict';

var vm = new Vue({
	el: "#app",
	data: {
		leaseRMB: 200,
		pledgeRMB: 100,
		Dcm: '175',
		Dkg: '80',
		Dnum: '43',
		cm: '',
		kg: '',
		num: '',
		checkNum: 1 //0 未知 1 单板； 2 双板；

		, isCm: true,
		isKg: true,
		isNum: true,
		hintText: '请输入正确的	身高(数字)/体重(数字)/鞋码(数字) ...',
		allRMB: 300,
		paramObj: {},
		times: 60,
		code: '',
		isCode: '',
		iphone: '',
		codeStatus: false,
		isIphoneHint: false,
		iphoneText: '请输入正确的手机号码!'
	},
	computed: {
		isHint: function isHint() {
			return !(this.isCm && this.isKg && this.isNum);
		}
	},
	methods: {
		submitLease: function submitLease(e) {
			console.log(this.cm + '---' + this.kg + '---' + this.num + '-----');
			if (this.cm != '' && this.kg != '' && this.num != '' && !this.isHint) {
				console.log('c.---' + this.cm);

				//				
				if (this.iphone != '' && this.code != '' && !this.isBindIphone) {
					//					let param={
					//						userAccount:this.iphone,
					//						verificationCode:this.code
					//					}
					var param = new URLSearchParams();
					param.append('userAccount', this.iphone);
					param.append('verificationCode', this.code);
					this.checkCode(param);
				} else if (this.iphone == '' && this.code == '' && !this.isBindIphone) {
					this.iphoneText = '请输入正确的手机号和验证码！';
					this.isIphoneHint = true;
				} else {
					this.cretaOrderAjax();
				}
			} else {
				this.cm == "" ? this.isCm = false : this.kg == '' ? this.isKg = false : this.num == '' ? this.isNum = false : '';
			}
		},
		toggleNav: function toggleNav(e) {
			var index = e.target.tabIndex;
			this.checkNum == index ? "" : this.checkNum = index;
		},
		blurs: function blurs(e) {
			var index = e.target.tabIndex;
			var reg = /^[1-9][0-9]{1,}$/;
			var val = '';
			if (index == 0) {
				val = this.cm;
				var isTure = reg.test(val);
				this.isCm = isTure;
			} else if (index == 1) {
				val = this.kg;
				var _isTure = reg.test(val);
				this.isKg = _isTure;
			} else if (index == 2) {
				val = this.num;
				var _isTure2 = reg.test(val);
				this.isNum = _isTure2;
			}

			console.log(this.isCm + '-' + this.isKg + '-' + this.isNum + 'all=' + this.isHint);
		},
		getCode: function getCode(e) {
			var _this = this;

			if (this.iphone != '' && !this.isHint) {
				//-----------------------------
				var tel = '86-' + this.iphone;
				var keys = hex_md5('' + 101 + tel + 2 + '33fcabff0d7e10b8b5e99df251e1299c');
				var param = {
					languageCode: 1,
					modeType: 2,
					businessType: 101,
					recipients: tel,
					privatekey: keys
					//				let param=new URLSearchParams();
					//				param.append('languageCode',1);
					//				param.append('modeType',2);
					//				param.append('businessType',101);
					//				param.append('recipients',tel);
					//				param.append('privatekey',keys);
				};console.log(keys);
				console.log(ajaxUrl.getCodeInterface);
				console.log(param);
				axios.post(ajaxUrl.getCodeInterface, param).then(function (res) {
					console.log(res);
					if (res.data.code == 0) {
						_this.isCode = res.data.data;
					}
				});
				//-----------------------
				this.codeStatus = true;
				var stop = setInterval(function () {
					_this.times -= 1;
					if (_this.times <= 0) {
						clearInterval(stop);
						_this.codeStatus = false;
					}
				}, 1000);
			} else {
				this.isIphoneHint = true;
			}
		},
		checkCode: function checkCode(param, callBack) {
			var _this2 = this;

			//let urls='http://180.76.189.195:8082/ewsports-portal/verification/check';
			axios.post(ajaxUrl.getCheckCodeInterface, param).then(function (res) {
				console.log(ajaxUrl.getCheckCodeInterface);
				console.log(res);
				callBack ? callBack(res) : '';
				if (res.data.code == 0) {
					setCookieVal('isBindIphone', false);
					_this2.cretaOrderAjax();
				}
			});
		},
		regIphone: function regIphone(e) {
			var reg = /^1[3|5|7|8]\d{9}$/;
			var isTure = reg.test(this.iphone);
			this.isIphoneHint = !isTure;
			isTure ? '' : this.iphoneText = "请输入正确的手机号码！";
		},
		cretaOrderAjax: function cretaOrderAjax() {
			var _this3 = this;

			var ot = parseFloat(this.checkNum) + 1;
			var param = {
				languageCode: 1,
				userId: 1,
				order: {
					shopId: this.paramObj.shopId,
					goodsId: this.paramObj.orderId,
					totalPrice: this.paramObj.allRmb,
					goodsPrice: this.paramObj.price,
					depositPrice: this.paramObj.deposit,
					payType: 1,
					shopName: this.paramObj.shopName,
					skisType: ot,
					userHeight: this.cm,
					userWeight: this.kg,
					userShoeSize: this.num
				}
			};
			console.log(ajaxUrl.createOrderInterface);
			console.log(param);
			axios.post(ajaxUrl.createOrderInterface, param).then(function (res) {
				console.log(res);
				if (res.data.code == 0) {
					var _ot = parseFloat(_this3.checkNum) + 1;
					//location.href = 'confirmOrder.html?orderId=' + this.paramObj.orderId+'&id='+res.data.data + "&orderType=" + ot + '&info=' + this.paramObj.info + '&shopId=' + this.paramObj.shopId + '&allRmb=' + this.paramObj.allRmb + '&price=' + this.paramObj.price + '&depositPrice=' + this.paramObj.deposit + '&shopName=' + this.paramObj.shopName + '&skiType=' + this.checkNum + "&cm=" + this.cm + '&kg=' + this.kg + '&num=' + this.num;
					location.href = 'confirmOrder.html?orderId=' + _this3.paramObj.orderId + '&id=' + res.data.data;
					console.log('pay00000');
				}
			});
		}
	},
	created: function created() {
		//创建 可访问data
		var param = formateUrl();
		this.paramObj = param;
		console.log(param.shopName);
		this.checkNum = param.num;
		this.isBindIphone = getCookieVal('isBindIphone');
		console.log('cookdddddie==' + this.isBindIphone);
	},
	mounted: function mounted() {//挂在

	}
});