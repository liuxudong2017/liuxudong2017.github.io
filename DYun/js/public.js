'use strict';

/**
 * 
 * 	接口 
 * */

var https = 'http://180.76.170.44:8080/ewsports-portal';
var ajaxUrl = {
	leaseListInterface: https + '/v2/lease/getLeaseShopList' //租赁点列表
	, leaseShopListInterface: https + '/v2/lease/getSportRecordDetail' //租赁点下商品列表
	, leaseDetailInterface: https + '/v2/lease/getLeaseShopDetail' //查询租赁点详情
	, createOrderInterface: https + '/v2/lease/generateLeaseOrder' //生成订单
	, leaseOrderListInterface: https + '/v2/lease/getLeaseOrderList' //租赁订单列表
	, leaseOrderDetailInterface: https + '/v2/lease/getLeaseOrderDetail' //租赁订单详情
	, cancelOrderInterface: https + '/v2/lease/opLeaseOrder' //取消删除订单
	, orderInterface: https + '/v2/lease/unifiedOrder' //统一下单（微信）
	, refundInterface: https + '/v2/lease/refund' //申请退款(微信)
	, getCodeInterface: https + '/verification/send' //发送短信
	, getCheckCodeInterface: https + '/verification/check' //检验验证码

	/**
  * 存储  sss
  * 
  * */

};function getStorage() {
	var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

	var storages = window.localStorage,
	    str = "";
	if (storages) {
		str = storages.keys;
	} else {
		console.log('浏览器版本低...');
	}
	return str;
}

function setStorage() {
	var keys = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
	var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";


	var storages = window.localStorage,
	    str = "";
	if (storages) {
		storages.setItem(keys, val);
	} else {
		console.log('浏览器版本低...');
	}
}

function removeAllStorage() {
	var storages = window.localStorage;
	if (storages) {
		storages.clear();
	} else {
		console.log('浏览器版本低...');
	}
}

function removeStorage(keys) {
	var storages = window.localStorage;
	if (storages) {
		storages.removeItem(keys);
	} else {
		console.log('浏览器版本低...');
	}
}
/**
 * 格式化 URL 取出 url中的 传值
 * 
 * 
 * */
function formateUrl() {
	var urls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : decodeURI(location.href);

	var obj = {};
	if (urls.indexOf('?') >= 0) {
		var param = urls.split('?')[1];
		console.log('param=' + param);
		if (param.indexOf('&') >= 0) {
			var kvArr = [];
			kvArr = param.split('&');
			for (var i = 0; i < kvArr.length; i++) {
				var arr = kvArr[i].split('=');
				obj[arr[0].trim()] = arr[0].trim() == 'cmd' ? JSON.parse(arr[1].trim()) : arr[1].trim();
			}
		} else {
			var _arr = param.split('=');
			obj[_arr[0]] = _arr[1];
		}
	}

	return obj;
}

function formateNumber(num) {
	var nums = num * 1 / 1000;
	var str = nums >= 1 ? nums.toFixed(2) + ' km' : num + ' m';
	return str;
}

//微信支付 

//调用微信JS api 支付
function jsApiCall(param) {
	console.log('callPay..6666.');
	WeixinJSBridge.invoke('getBrandWCPayRequest', param, function (res) {
		WeixinJSBridge.log(res.err_msg);
		alert(res);
		//alert(res.err_code+"|"+res.err_desc+"|"+res.err_msg);
		if (res.err_msg == "get_brand_wcpay_request:ok") {
			console.log('callPay1111...');
			alert(res);
			//						var cur_chapter_id=document.getElementById('cur_chapter_id').value;
			//						var choose_chapter=document.getElementById('choose_chapter').value;
			//						var book_id=document.getElementById('book_id').value;
			//						if(cur_chapter_id!=0)
			//						{
			//							alert("充值成功！可以继续阅读了~~");
			//							window.location.href="/web/book/read/"+cur_chapter_id+".html?book_id="+book_id+"&choose_chapter="+choose_chapter;
			//						}else{
			//							window.location.href="/web/pay_order/index.html";
			//						}
		} else {
			alert(res);
			//返回跳转到订单详情页面
			//alert('支付失败');
		}
	});
}
function callpay(param) {
	console.log('callPay...');
	if (typeof WeixinJSBridge == "undefined") {
		if (document.addEventListener) {
			document.addEventListener('WeixinJSBridgeReady', jsApiCall.bind(param), false);
		} else if (document.attachEvent) {
			document.attachEvent('WeixinJSBridgeReady', jsApiCall.bind(param));
			document.attachEvent('onWeixinJSBridgeReady', jsApiCall.bind(param));
		}
	} else {
		jsApiCall(param);
	}
}