"use strict";

var vm = new Vue({
	el: '#app',
	data: {
		skiObj:{
			shopId:'0',
			bannerSrc: 'img/banner_1.png',
			bannerSrc1: 'img/banner_1.png',
			skiSrc: 'img/shop_logo.png',
			skiName: "怀北国际滑雪场",
			skiAdrr: "怀柔城区九谷口自然风景区内",
			skiDistance: "55km",
			isShowMap: false,
			tel: "010-88886666",
			lon:'',//经度
			lat:'',//纬度
			info:'东蕴滑雪场....',
			rulseArr: ["预约租赁产品下单支付后生效,只能在下单的使用日期使用;", "下单支付成功之后,预约使用日期之前可以退款;", "使用当天去雪场,凭订单二维码领取归还雪具;", "如订单中包含多种雪具,则在雪场相应的柜台领取;", "订购的雪具允许超时30分钟,超时之后收取超时费10元/小时;"],
			orderTypeArr: [{
			orderTitle: "只能雪板一日租",
			rmb: 300,
			orderInclude: '含雪板'
			}, {
				orderTitle: "只能雪板一日租",
				rmb: 300,
				orderInclude: '含雪板',
				orderId:'',//套餐ID
				shopId:'' //商店 ID
			}, {
				orderTitle: "只能雪板一日租",
				rmb: 300,
				orderInclude: '含雪板'
			}]

		}
		
	},
	methods: {
		getMap(){
			location.href='bdMap.html?lon='+this.skiObj.lon+'&lat='+this.skiObj.lat;
			
		},
		loadPage(param={}){
			axios.post(ajaxUrl.leaseDetailInterface,param).then(res=>{
				if(res.data.code==0)
				{
					let data=res.data.data;
					let obj={},orderArr=[];
					obj.bannerSrc=data.imgDomain+data.shopImg;
					obj.bannerSrc1=data.imgDomain+data.fieldImg.split('^')[0];
					obj.skiSrc=data.imgDomain+data.shopLogo;
					obj.skiName=data.shopName;
					obj.skiAdrr=data.shopAddress;
					obj.skiDistance=formateNumber(data.distance);
					obj.tel=data.shopPhone;
					obj.lon=data.shopLon;
					obj.lat=data.shopLat;
					obj.info=data.shopDesc;
					obj.rulseArr=data.shopRule.split(/[1-9]、/);
					let arr1=data.goodsList;
					for(let i=0;i<arr1.length;i++)
					{
						let obj1={};
						obj1.orderTitle=arr1[i].goodsName;
						obj1.rmb=arr1[i].costPrice;
						obj1.orderInclude=arr1[i].goodsDetails;
						obj1.orderId=arr1[i].id;
						obj1.shopId=arr1[i].shopId;
						obj1.price=arr1[i].price;
						obj1.deposit=arr1[i].deposit;
						obj1.num=arr1[i].goodsDesc.indexOf('单板套餐')>=0?0:1;
						obj1.hrefs='order.html?orderId='+arr1[i].id+'&info='+arr1[i].goodsDetails+'&num='+obj1.num+'&shopId='+arr1[i].shopId+'&price='+arr1[i].price+'&deposit='+arr1[i].deposit+'&allRmb='+arr1[i].costPrice+'&shopName='+data.shopName;
						orderArr.push(obj1);
					}
					obj.orderTypeArr=orderArr;
					this.skiObj=obj;
				}
				console.log('-=-=');
				console.log(res);
			});
		}
	},
	created: function created() {
		this.skiObj.shopId=formateUrl().shopId;
		this.loadPage({languageCode:1,userId:'',lon:'',lat:'',shopId:this.skiObj.shopId});
	},
	mounted: function mounted() {//挂在

	}
});
