window.onload = function() {
	$.ajax({//利用jsonp跨域访问新浪天气接口
				type: 'GET',
				url: "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=西安&day=3&charset=utf-8",//'http://php.weather.sina.com.cn/xml.php?city=%B1%B1%BE%A9&password=DJOYnieT8234jlsK&day=0',
				dataType: 'script',//*
				scriptCharset: 'utf-8',
				success: function(data) {
					console.log(window.SWther.w);
				},
				error: function(info) {
					console.log("error: ", info);
				}
	});
	new Vue({
		el: "#weather",
		data: {
			weather: [],
			city: ''
		},
		methods: {
			showOrHideWeather: function() {
				var trList = $("tr+tr");
				console.log(trList);
				for(var key in trList) {
					$(trList[key]).addClass("display_none");
				}
			}
		},
		beforeCreate: function() {
			var model = {};
			var _self=this;
			$.ajax({//利用jsonp跨域访问新浪天气接口
				type: 'GET',
				url: "http://php.weather.sina.com.cn/iframe/index/w_cl.php?code=js&city=&day=2&charset=utf-8",//'http://php.weather.sina.com.cn/xml.php?city=%B1%B1%BE%A9&password=DJOYnieT8234jlsK&day=0',
				dataType: 'script',//*
				scriptCharset: 'utf-8',
				success: function(data) {
					console.log(window.SWther.w);
					for(var i in window.SWther.w) {
						model.city = i;
						model.weather = window.SWther.w[i];
						model.weather[0].date = "今天";
						model.weather[1].date = "明天";
						model.weather[2].date = "后天";
						//model.weather[3].date = "大后天";
						console.log("model: ", model);
						_self.weather = model.weather;
						_self.city = model.city;
					}
				},
				error: function(data) {
					console.log("error: ", data);
				}
			});
		}
	})
}