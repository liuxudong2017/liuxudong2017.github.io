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