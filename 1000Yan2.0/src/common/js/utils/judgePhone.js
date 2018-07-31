/****************是否是IOS****************************/
let getIos=()=>{
		var ua=navigator.userAgent.toLowerCase();
        if (ua.match(/iPhone\sOS/i) == "iphone os"){
            return true;
        } else {
            return false;
        }
    }
/********************************************/ 

export{
	//判断是否是IOS系统
	getIos
}