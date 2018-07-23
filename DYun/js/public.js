"use strict";

/**
 * 存储  sss
 * 
 * */

function getStorage() {
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
	var urls = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : unescape(location.href);

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