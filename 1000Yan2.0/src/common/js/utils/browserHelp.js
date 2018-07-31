/**
 * localStorage
 * sessionStorage
 * 
 */
let storage={
	setLocal(key,val){
		(typeof val).toLowerCase() == 'object'?val=JSON.stringify(val):'';
		window.localStorage.setItem(key,val);
	}
	,getLocal(key,isObj){
		//isObj:是否转换成JSON：默认不转
		let objStr=window.localStorage.getItem(key);
		isObj?objStr=JSON.parse(objStr):'';
		return objStr;
	}
	,clear(){
		window.localStorage.clear();
	}
}
export {
	storage
}