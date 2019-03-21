function fetch(type, url, data, success, failed){
    // 创建ajax对象
    var xhr = null;
    if(window.XMLHttpRequest){
    	if(window.navigator.userAgent.indexOf('MSIE 9.0')!==-1){
    		var query="";
    		if(data){
    			for(var key in data){
    				if(key=="Ans"){
    					query+=key+"="+data[key]+"&";
    				}else{
    					query+=key+"="+encodeURIComponent(data[key])+"&";
    				}
	    		}
    		}
    		query=query.substring(0,query.length-1);
    		xhr = new XDomainRequest();
    		var url=url+"?"+query;
		    xhr.open("post", url);
		    setTimeout(function() {
			    xhr.send();
			}, 0);
			xhr.onload = function () {
				success(xhr.responseText,'ie');
		    }
    		xhr.onerror = function () {
    			failed(xhr.responseText)
		    }
    		return
    	}else{
       		xhr = new XMLHttpRequest();
    	}
    } else {
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
 
    var type = type.toUpperCase();
    // 用于清除缓存
    var random = Math.random();
    if(typeof data == 'object'){
        var str = '';
        for(var key in data){
            str += key+'='+data[key]+'&';
        }
        data = str.replace(/&$/, '');
    }
   	
    if(type == 'GET'){
        if(data){
            xhr.open('GET', url + '?' + data, true);
        } else {
            xhr.open('GET', url + '?t=' + random, true);
        }
        xhr.send();
   
    } else if(type == 'POST'){
        xhr.open('POST', url, true);
        // 如果需要像 html 表单那样 POST 数据，请使用 setRequestHeader() 来添加 http 头。
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(data);
    }
   
    // 处理返回数据
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status == 200){
                success(xhr.responseText);
            } else {
                if(failed){
                    failed(xhr.responseText);
                }
            }
        }
    }
}