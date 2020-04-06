"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config/config");
App({
    globalData: {
        openGid: '',
        shareTicket: '',
    },
    onLaunch: function (e) {
    },
    onShow: function (options) {
        console.log('App.onShow 获取', options);
        if (options.scene === 1044 && options.shareTicket) {
            this.globalData.shareTicket = options.shareTicket;
        }
    },
    getShareTicket: function (cb) {
        wx.login({
            success: function (loginRes) {
                var js_code = loginRes.code;
                wx.request({
                    url: "http://" + config_1.default.server.host + ":" + config_1.default.server.port + "/api/login",
                    method: 'POST',
                    data: {
                        code: js_code,
                    },
                    success: function (res) {
                        console.log(res);
                    },
                    fail: function (err) {
                        console.log('getShareTiket---err' + JSON.stringify(err));
                    }
                });
            }
        });
        return this.globalData.shareTicket;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQXFDO0FBYXJDLEdBQUcsQ0FBa0I7SUFDcEIsVUFBVSxFQUFFO1FBQ1gsT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsRUFBRTtLQUNmO0lBQ0QsUUFBUSxZQUFDLENBQUM7SUFrQ1YsQ0FBQztJQUNELE1BQU0sWUFBQyxPQUFPO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDbEQ7SUFDRixDQUFDO0lBRUQsY0FBYyxZQUFDLEVBQUU7UUFTZCxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ1IsT0FBTyxFQUFFLFVBQUMsUUFBUTtnQkFDakIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQTtnQkFHN0IsRUFBRSxDQUFDLE9BQU8sQ0FBQztvQkFDVixHQUFHLEVBQUUsWUFBVSxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQUksZ0JBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFZO29CQUNuRSxNQUFNLEVBQUUsTUFBTTtvQkFDZCxJQUFJLEVBQUU7d0JBQ0wsSUFBSSxFQUFFLE9BQU87cUJBSWI7b0JBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRzt3QkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNsQixDQUFDO29CQUNELElBQUksRUFBRSxVQUFVLEdBQUc7d0JBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO29CQUN6RCxDQUFDO2lCQUNELENBQUMsQ0FBQTtZQUNILENBQUM7U0FDRCxDQUFDLENBQUE7UUFHSixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBQ3BDLENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2NvbmZpZyc7XG5cbmludGVyZmFjZSBBcHBPcHRpb25DdXN0b20ge1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0dXNlckluZm8/OiBXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbyxcblx0XHRvcGVuR2lkPzogc3RyaW5nLFxuXHRcdHNoYXJlVGlja2V0OiBzdHJpbmcsXG5cdH1cblx0dXNlckluZm9SZWFkeUNhbGxiYWNrPzogV2VjaGF0TWluaXByb2dyYW0uR2V0VXNlckluZm9TdWNjZXNzQ2FsbGJhY2ssXG5cdGdldFNoYXJlVGlja2V0KGNnPzogRnVuY3Rpb24pOiBzdHJpbmc7XG59XG5cbi8vIGFwcC50c1xuQXBwPEFwcE9wdGlvbkN1c3RvbT4oe1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0b3BlbkdpZDogJycsXG5cdFx0c2hhcmVUaWNrZXQ6ICcnLFxuXHR9LFxuXHRvbkxhdW5jaChlKSB7XG5cblx0XHQvLyAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcblx0XHQvLyBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuXHRcdC8vIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuXHRcdC8vIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcblxuXHRcdC8vIC8vIOeZu+W9lVxuXHRcdC8vIHd4LmxvZ2luKHtcblx0XHQvLyBcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuXHRcdC8vIFx0XHQvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuXHRcdC8vIFx0fSxcblx0XHQvLyB9KVxuXHRcdC8vIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuXHRcdC8vIHd4LmdldFNldHRpbmcoe1xuXHRcdC8vIFx0c3VjY2VzczogcmVzID0+IHtcblx0XHQvLyBcdFx0aWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuXHRcdC8vIFx0XHRcdC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcblx0XHQvLyBcdFx0XHR3eC5nZXRVc2VySW5mbyh7XG5cdFx0Ly8gXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xuXHRcdC8vIFx0XHRcdFx0XHQvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG5cdFx0Ly8gXHRcdFx0XHRcdHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuXG5cdFx0Ly8gXHRcdFx0XHRcdC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG5cdFx0Ly8gXHRcdFx0XHRcdC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcblx0XHQvLyBcdFx0XHRcdFx0aWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG5cdFx0Ly8gXHRcdFx0XHRcdFx0dGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKVxuXHRcdC8vIFx0XHRcdFx0XHR9XG5cdFx0Ly8gXHRcdFx0XHR9LFxuXHRcdC8vIFx0XHRcdH0pXG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH0sXG5cdFx0Ly8gfSlcblx0fSxcblx0b25TaG93KG9wdGlvbnMpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwLm9uU2hvdyDojrflj5YnLCBvcHRpb25zKTtcblx0XHRcblx0XHRpZiAob3B0aW9ucy5zY2VuZSA9PT0gMTA0NCAmJiBvcHRpb25zLnNoYXJlVGlja2V0KSB7XG5cdFx0XHR0aGlzLmdsb2JhbERhdGEuc2hhcmVUaWNrZXQgPSBvcHRpb25zLnNoYXJlVGlja2V0O1xuXHRcdH1cblx0fSxcblxuXHRnZXRTaGFyZVRpY2tldChjYikge1xuXHRcdC8vIGNvbnNvbGUubG9nKCdnbG9iYWxEYXRhIGlzJyx0aGlzLmdsb2JhbERhdGEpO1xuXHRcdC8vIHd4LmdldFNoYXJlSW5mbyh7XG5cdFx0Ly8gXHRzaGFyZVRpY2tldDogdGhpcy5nbG9iYWxEYXRhLnNoYXJlVGlja2V0LFxuXHRcdC8vIFx0c3VjY2VzczogKGdldFNoYXJlSW5mb1JlcykgPT4ge1xuXHRcdC8vIFx0XHRjb25zb2xlLmxvZygnd3guZ2V0U2hhcmVJbmZvIHJlcmVpdmUnLGdldFNoYXJlSW5mb1Jlcyk7XG5cdFx0XHRcdFxuXHRcdC8vIFx0XHRjb25zdCBqc19lbmNyeXB0ZWREYXRhID0gZ2V0U2hhcmVJbmZvUmVzLmVuY3J5cHRlZERhdGE7XG5cdFx0Ly8gXHRcdGNvbnN0IGpzX2l2ID0gZ2V0U2hhcmVJbmZvUmVzLml2O1xuXHRcdFx0XHR3eC5sb2dpbih7XG5cdFx0XHRcdFx0c3VjY2VzczogKGxvZ2luUmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBqc19jb2RlID0gbG9naW5SZXMuY29kZVxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZ2V0U2hhcmVJbmZvUmVzLCBsb2dpblJlcyk7XG5cblx0XHRcdFx0XHRcdHd4LnJlcXVlc3Qoe1xuXHRcdFx0XHRcdFx0XHR1cmw6IGBodHRwOi8vJHtjb25maWcuc2VydmVyLmhvc3R9OiR7Y29uZmlnLnNlcnZlci5wb3J0fS9hcGkvbG9naW5gLFxuXHRcdFx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRcdGNvZGU6IGpzX2NvZGUsXG5cdFx0XHRcdFx0XHRcdFx0Ly8gYXBwSWQ6IGNvbmZpZy5hcHAuYXBwSWQsXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZW5jcnlwdGVkRGF0YToganNfZW5jcnlwdGVkRGF0YSxcblx0XHRcdFx0XHRcdFx0XHQvLyBpdjoganNfaXZcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZ2V0U2hhcmVUaWtldC0tLWVycicgKyBKU09OLnN0cmluZ2lmeShlcnIpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHQvLyBcdH1cblx0XHQvLyB9KVxuXHRcdHJldHVybiB0aGlzLmdsb2JhbERhdGEuc2hhcmVUaWNrZXQ7XG5cdH1cbn0pIl19