$('#map').height(innerHeight);

$(function() {
	let d=formateUrl().lon;
	let b=formateUrl().lat;
	getMap(d,b);
})

function getMap(d=116.39564504,b=39.92998578) {
	var map = new BMap.Map("map");
	// 创建地图实例  
	var point = new BMap.Point(parseFloat(d),parseFloat(b));
	// 创建点坐标  
	map.centerAndZoom(point, 15);
	// 初始化地图，设置中心点坐标和地图级别  
	var marker = new BMap.Marker(point);
	map.addOverlay(marker);

}