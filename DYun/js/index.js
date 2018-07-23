'use strict';

var vm = new Vue({
	el: '#app',
	data: {
		ab: "jkljk",
		bannerSrc: 'img/banner_1.png',
		skiArr: [{
			skiSrc: 'img/shop_logo.png',
			skiName: "怀北国际滑雪场",
			skiAdrr: "怀柔城区九谷口自然风景区内",
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
	created: function created() {//创建 可访问data
		var urls='http://180.76.170.44:8080/ewsports-portal/v2/lease/getLeaseShopList';
//		$.ajax({
//			url:urls,
//			type:'post',
//			headers:{'Content-Type':'application/json'},
//			data:{userId:"15176396467",languageCode:1,lon:0,lat:0},
//			success:function(res){
//				console.log(res);
//			}
//		});
	},
});