let vm = new Vue({
	el: "#app",
	data: {
		mm: '00',

		ss: '00',
		rmb: 300,
		tel:'--',
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
		cancleOrder() { //取消订单成功
			console.log(ajaxUrl.cancelOrderInterface);
			let params = {
				languageCode: 1,
				userId: 1,
				orderId: this.paramObj.orderId,
				type: 1
			}
			axios.post(ajaxUrl.cancelOrderInterface, params).then(res => {
				console.log(res);
				if(res.data.code == 0) {
					console.log('code-=-=' + res.data.code);
					location.href = 'payOk.html?orderId=' + this.paramObj.orderId;
				}
			})
		},
		pay() {
			console.log(ajaxUrl.wxOrderInterface);
			let params = {
				languageCode: 1,
				userId: 1,
				orderCode: this.orderMess.orderNum,
				totalPrice: this.rmb,
				userIp: returnCitySN.cip,
				tradeType: "JSAPI",
				notifyUrl: 'http://testapi.ew-sports.com:8080/ewsports-portal/wx',
				wxId: getCookieVal('wxId')
			}
			console.log(params);
			axios.post(ajaxUrl.wxOrderInterface, params).then(res => {
				console.log(res)
				if(res.data.code == 0) {
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
			})
		},
		formTime(timeStr) { //
			let orderTime = new Date(timeStr);
			let that = this;
			orderTime.setMinutes(orderTime.getMinutes() + 30);
			let payOverTime = orderTime.getTime();
			let stop = setInterval(() => {
				let currTime = new Date();
				currTime = currTime.getTime();
				let waitTime = parseInt((payOverTime - currTime) / 1000);
				let waitTimeM = Math.floor(waitTime / 60);
				let waitTimeS = Math.floor(waitTime - waitTimeM * 60);

				if(waitTimeM <= 0 && waitTimeS <= 0) {
					//支付超时
					clearInterval(stop);
					location.href = "payOk.html?orderId=" + this.paramObj.orderId;
				} else {
					this.mm = waitTimeM < 10 ? '0' + waitTimeM : waitTimeM;
					this.ss = waitTimeS < 10 ? '0' + waitTimeS : waitTimeS;
				}
			}, 1000)

		},
		loadPage() {
			console.log(ajaxUrl.leaseOrderDetailInterface);
			let params = {
				languageCode: 1,
				userId: 1,
				orderId: this.paramObj.orderId
			};
			console.log(params);
			axios.post(ajaxUrl.leaseOrderDetailInterface, params).then(res => {
				console.log(res);
				let data = res.data.data;
				if(res.data.code == 0) {
					let obj1 = {},
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
					this.orderObj = obj3;
					this.rmb = data.totalPrice;
					this.mealMess = obj2;
					this.orderMess = obj1;
					this.tel=data.serviceTel;
					console.log('0000');
					this.formTime(data.orderTime);
				}
			});
		}
	},
	created() { //创建 可访问data
		let param = formateUrl();
		this.paramObj = param;
		console.log(param);
		this.loadPage();
	},
	mounted() { //挂在

	},
	beforeDestroy() { //销毁前

	}
});