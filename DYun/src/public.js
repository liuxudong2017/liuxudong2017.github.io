/**
 * 存储  sss
 * 
 * */

function getStorage(key=""){
	let storages=window.localStorage,str="";
	if(storages){
		str=storages.keys;
	}else{console.log('浏览器版本低...')}
	return str;
}

function setStorage(keys="",val=""){
	
	let storages=window.localStorage,str="";
	if(storages){
		storages.setItem(keys,val);
	}else{console.log('浏览器版本低...')}
}

function removeAllStorage(){
	let storages=window.localStorage;
	if(storages){
		storages.clear();
	}else{console.log('浏览器版本低...')}
}

function removeStorage(keys){
	let storages=window.localStorage;
	if(storages){
		storages.removeItem(keys);
	}else{console.log('浏览器版本低...')}
}
