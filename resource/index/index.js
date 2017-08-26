window.onload = function() {
	console.log(window);
	console.log($$.curLocation());
	function prompt(window, pref, message, callback) {
    let branch = Components.classes["@mozilla.org/preferences-service;1"]
                           .getService(Components.interfaces.nsIPrefBranch);

    if (branch.getPrefType(pref) === branch.PREF_STRING) {
        switch (branch.getCharPref(pref)) {
        case "always":
            return callback(true);
        case "never":
            return callback(false);
        }
    }

    let done = false;

    function remember(value, result) {
        return function() {
            done = true;
            branch.setCharPref(pref, value);
            callback(result);
        }
    }

    let self = window.PopupNotifications.show(
        window.gBrowser.selectedBrowser,
        "geolocation",
        message,
        "geo-notification-icon",
        {
            label: "Share Location",
            accessKey: "S",
            callback: function(notification) {
                done = true;
                callback(true);
            }
        }, [
            {
                label: "Always Share",
                accessKey: "A",
                callback: remember("always", true)
            },
            {
                label: "Never Share",
                accessKey: "N",
                callback: remember("never", false)
            }
        ], {
            eventCallback: function(event) {
                if (event === "dismissed") {
                    if (!done) callback(false);
                    done = true;
                    window.PopupNotifications.remove(self);
                }
            },
            persistWhileVisible: true
        });
}

prompt(window,
       "extensions.foo-addon.allowGeolocation",
       "Foo Add-on wants to know your location.",
       function callback(allowed) { alert(allowed); });
	var vm = new Vue({
		el: "",
		data: {data: {}},
		methods: {
			getData: function() {
				
			}
		}
	});
	var spareData = {
    "resultcode": "200",
    "reason": "查询成功!",
    "result": {
        "sk": {	/*当前实况天气*/
            "temp": "21",	/*当前温度*/
            "wind_direction": "西风",	/*当前风向*/
            "wind_strength": "2级",	/*当前风力*/	
            "humidity": "4%",	/*当前湿度*/
            "time": "14:25"	/*更新时间*/
        },
        "today": {
            "city": "天津",
            "date_y": "2014年03月21日",
            "week": "星期五",
            "temperature": "8℃~20℃",	/*今日温度*/
            "weather": "晴转霾",	/*今日天气*/
            "weather_id": {	/*天气唯一标识*/
                "fa": "00",	/*天气标识00：晴*/
                "fb": "53"	/*天气标识53：霾 如果fa不等于fb，说明是组合天气*/
            },
            "wind": "西南风微风",
            "dressing_index": "较冷", /*穿衣指数*/
            "dressing_advice": "建议着大衣、呢外套加毛衣、卫衣等服装。",	/*穿衣建议*/
            "uv_index": "中等",	/*紫外线强度*/
            "comfort_index": "",
            "wash_index": "较适宜",	/*洗车指数*/
            "travel_index": "适宜",	/*旅游指数*/
            "exercise_index": "较适宜",	/*晨练指数*/
            "drying_index": ""
        },
        "future": {	/*未来几天天气*/
            "day_20140321": {
                "temperature": "8℃~20℃",
                "weather": "晴转霾",
                "weather_id": {
                    "fa": "00",
                    "fb": "53"
                },
                "wind": "西南风微风",
                "week": "星期五",
                "date": "20140321"
            },
            "day_20140322": {
                "temperature": "9℃~21℃",
                "weather": "霾转多云",
                "weather_id": {
                    "fa": "53",
                    "fb": "01"
                },
                "wind": "东北风微风转东南风微风",
                "week": "星期六",
                "date": "20140322"
            },
            "day_20140323": {
                "temperature": "9℃~19℃",
                "weather": "阴",
                "weather_id": {
                    "fa": "02",
                    "fb": "02"
                },
                "wind": "南风微风",
                "week": "星期日",
                "date": "20140323"
            },
            "day_20140324": {
                "temperature": "8℃~19℃",
                "weather": "晴转多云",
                "weather_id": {
                    "fa": "00",
                    "fb": "01"
                },
                "wind": "西南风微风转南风微风",
                "week": "星期一",
                "date": "20140324"
            },
            "day_20140325": {
                "temperature": "9℃~20℃",
                "weather": "多云",
                "weather_id": {
                    "fa": "01",
                    "fb": "01"
                },
                "wind": "南风微风",
                "week": "星期二",
                "date": "20140325"
            },
            "day_20140326": {
                "temperature": "10℃~19℃",
                "weather": "多云",
                "weather_id": {
                    "fa": "01",
                    "fb": "01"
                },
                "wind": "南风微风",
                "week": "星期三",
                "date": "20140326"
            },
            "day_20140327": {
                "temperature": "11℃~20℃",
                "weather": "阴转多云",
                "weather_id": {
                    "fa": "02",
                    "fb": "01"
                },
                "wind": "南风微风转无持续风向微风",
                "week": "星期四",
                "date": "20140327"
            }
        }
    },
    "error_code": 0
	}
}