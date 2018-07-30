'use strict';

var vm = new Vue({
	el: '#app',
	data: {
		bannerSrc: 'img/banner_1.png',
		skiArr: [{
			skiSrc: 'img/shop_logo.png',
			skiName: "怀北国际滑雪场",
			skiAdrr: "怀柔城区九谷口自然风景区内",
			skiDistance: "55km",
			shopId: '9',
			lon: '', //经度
			lat: '', //纬度
			isShowMoreOrder: false,
			wxId:'--',
			orderTypeArr: [{
				orderTitle: "只能雪板一日租",
				rmb: 300,
				orderInclude: '含雪板',
				orderId: 0 //套餐id

				, shopId: 0 //商店id
			}, {
				orderTitle: "只能雪板一日租",
				rmb: 300,
				orderInclude: '含雪板、雪鞋'
			}, {
				orderTitle: "只能雪板一日租",
				rmb: 300,
				orderInclude: '含雪板'
			}, {
				orderTitle: "只能雪板一日租",
				rmb: 300,
				orderInclude: ''
			}]
		}, {
			skiSrc: '',
			skiName: '',
			skiAdrr: '',
			skiDistance: "55km",
			isShowMoreOrder: false,
			orderTypeArr: [{
				orderTitle: "只能雪板一日租",
				rmb: 300,
				orderInclude: '含雪板'
			}, {
				orderTitle: "只能雪板一日租",
				rmb: 300,
				orderInclude: '含雪板、雪鞋'
			}, {
				orderTitle: "只能雪板一日租",
				rmb: 300,
				orderInclude: '含雪板'
			}, {
				orderTitle: "只能雪板一日租",
				rmb: 300,
				orderInclude: '含雪板、雪鞋'
			}]
		}]
	},

	methods: {
		loadPage: function loadPage(param) {
			var _this = this;

			//加载页面数据
			axios.post(ajaxUrl.leaseListInterface, param).then(function (res) {
				if (res.data.code == 0) {
					var data = res.data.data;
					var arr = [];
					for (var i = 0; i < data.length; i++) {
						var obj = {},
						    arrList = [],
						    arr1 = [];
						obj.skiSrc = data[i].imgDomain + data[i].shopLogo;
						obj.skiName = data[i].shopName;
						obj.skiAdrr = data[i].shopAddress;
						obj.skiDistance = formateNumber(data[i].distance);
						obj.isShowMoreOrder = data[i].goodsList.length > 2 ? false : true;
						obj.shopId = data[i].id;
						obj.lon = data[i].shopLon;
						obj.lat = data[i].shopLat;
						arrList = data[i].goodsList;
						for (var j = 0; j < arrList.length; j++) {
							var obj1 = {};
							obj1.orderTitle = arrList[j].goodsName;
							obj1.orderInclude = arrList[j].goodsDetails;
							obj1.rmb = arrList[j].costPrice;
							obj1.orderId = arrList[j].id;
							obj1.shopId = arrList[j].shopId;
							obj1.num = arrList[j].goodsName.indexOf('单板套餐') >= 0 ? 0 : 1;
							obj1.hrefs = 'order.html?orderId=' + arrList[j].id + "&shopName=" + data[i].shopName + "&allRmb=" + arrList[j].costPrice + "&deposit=" + arrList[j].deposit + "&price=" + arrList[j].price + "&shopId=" + arrList[j].shopId + "&num=" + obj1.num + "&info=" + arrList[j].goodsDetails;

							arr1.push(obj1);
						}
						obj.orderTypeArr = arr1;
						arr.push(obj);
					}
					_this.skiArr = arr;
					//this.bannerSrc=res.data.imgDomain+res.data.fieldImg.split('^')[0];
				}
				console.log(res);
			});
		}
	},
	created: function created() {
		//创建 可访问data
		setCookieVal('wxId',formateUrl().wxId);
		this.wxId=getCookieVal('wxId');
		// alert(wxId);
		this.wxId!=undefined?"":location.href = ajaxUrl.wxAuthorizationInUrl;
		this.loadPage({});
	}
});