"use strict";

var vm = new Vue({
	el: '#app',
	data: {
		rulseArr: ["预约租赁产品下单支付后生效,只能在下单的使用日期使用;", "下单支付成功之后,预约使用日期之前可以退款;", "使用当天去雪场,凭订单二维码领取归还雪具;", "如订单中包含多种雪具,则在雪场相应的柜台领取;", "订购的雪具允许超时30分钟,超时之后收取超时费10元/小时;"],
		skiInfo: {
			info: "\n\t\t\t\u5317\u4EAC\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u5168\u540D\u4E3A\u80CC\u666F\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u6709\u9650\u8D23\u4EFB\u516C\u53F8\u5317\u4EAC\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u5168\u540D\u4E3A\u80CC\u666F\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u6709\u9650\u8D23\u4EFB\n\t\t\t\n\t\t\t\u5317\u4EAC\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u5168\u540D\u4E3A\u80CC\u666F\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u6709\u9650\u8D23\u4EFB\u516C\u53F8\n\t\t\t\u5317\u4EAC\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u5168\u540D\u4E3A\u80CC\u666F\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u6709\u9650\u8D23\u4EFB\u516C\u53F8\n\t\t\t\u5317\u4EAC\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u5168\u540D\u4E3A\u80CC\u666F\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u6709\u9650\u8D23\u4EFB\u516C\u53F8\n\t\t\t\n\t\t\t\u5317\u4EAC\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u5168\u540D\u4E3A\u80CC\u666F\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u6709\u9650\u8D23\u4EFB\u516C\u53F8\n\t\t\t\u516C\u53F8\u5317\u4EAC\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u5168\u540D\u4E3A\u80CC\u666F\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u6709\u9650\u8D23\u4EFB\u516C\u53F8\n\t\t\t\u5317\u4EAC\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u5168\u540D\u4E3A\u80CC\u666F\u6000\u5317\u56FD\u9645\u6ED1\u96EA\u573A\u6709\u9650\u8D23\u4EFB\u516C\u53F8\n\t\t\t\uFF0C\u662F\u5317\u4EAC\u6700\u65E9\u7684\u6ED1\u96EA\u573A\u4E4B\u4E00\uFF0C\u59CB\u5EFA\u4E8E2000\u5E74\n\t\t\t2001\u5E741skdjk sd slkj\n\t\t\t"
		},
		bannerSrc: 'img/banner_1.png',
		bannerSrc1: 'img/banner_1.png',
		skiSrc: 'img/shop_logo.png',
		skiName: "怀北国际滑雪场",
		skiAdrr: "怀柔城区九谷口自然风景区内",
		skiDistance: "55km",
		isShowMap: false,
		tel: "010-88886666",
		orderTypeArr: [{
			orderTitle: "只能雪板一日租",
			rmb: 300,
			orderInclude: '含雪板'
		}, {
			orderTitle: "只能雪板一日租",
			rmb: 300,
			orderInclude: '含雪板'
		}, {
			orderTitle: "只能雪板一日租",
			rmb: 300,
			orderInclude: '含雪板'
		}]

	},
	methods: {
		getMap: function getMap() {
			if (!this.isShowMap) {
				this.isShowMap = true; // 先赋值
				var map = new BMap.Map("map");
				// 创建地图实例  
				var point = new BMap.Point(116.404, 39.915);
				// 创建点坐标  
				map.centerAndZoom(point, 15);
				// 初始化地图，设置中心点坐标和地图级别  
				var marker = new BMap.Marker(point);
				map.addOverlay(marker);
				console.log('-=-=-=-');
			}
		}
	},
	created: function created() {},
	mounted: function mounted() {//挂在

	}
});
//var map = new BMap.Map("map");
//		// 创建地图实例  
//		var point = new BMap.Point(116.404, 39.915);
//		// 创建点坐标  
//		map.centerAndZoom(point, 15);
//		// 初始化地图，设置中心点坐标和地图级别  
//		var marker=new BMap.Marker(point);
//		
//		map.addOverlay(marker);