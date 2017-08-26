(function() {
	if(typeof $$ == "undefined") {
		var util = {
			curLocation: function() {
				var position = {};
				var getLocation = function() {
					if(navigator.geolocation){
		         //浏览器支持geolocation
		         navigator.geolocation.getCurrentPosition(onSuccess,onError);
		         
		     	}else{
		         //浏览器不支持geolocation
		         alert("浏览器不支持geolocation");
		    	}
				};
				var onSuccess = function(position) {
		     	//经度
		     	var longitude =position.coords.longitude;
		     	//纬度
		     	var latitude = position.coords.latitude;
		     	position.longitude = longitude;
		     	position.latitude = latitude;
				};
				var onError = function(error) {
				 	switch(error.code){
		        case 1:
		        alert("位置服务被拒绝");
		        break;

		        case 2:
		        alert("暂时获取不到位置信息");
		        break;

		        case 3:
		        alert("获取信息超时");
		        break;

		        case 4:
		        alert("未知错误");
		        break;
		     	}
				};
				getLocation();
				return position;
			}
		};
		$$ = util;
	}
}())