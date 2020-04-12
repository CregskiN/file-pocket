"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("./config/config"));
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
        console.log('globalData is', this.globalData);
        wx.getShareInfo({
            shareTicket: this.globalData.shareTicket,
            success: function (getShareInfoRes) {
                console.log('wx.getShareInfo rereive', getShareInfoRes);
                var js_encryptedData = getShareInfoRes.encryptedData;
                var js_iv = getShareInfoRes.iv;
                wx.login({
                    success: function (loginRes) {
                        var js_code = loginRes.code;
                        wx.request({
                            url: "http://" + config_1.default.server.host + ":" + config_1.default.server.port + "/api/login",
                            method: 'POST',
                            data: {
                                code: js_code,
                                session_key: '123',
                                encryptedData: js_encryptedData,
                                iv: js_iv
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
            }
        });
        return this.globalData.shareTicket;
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkRBQXFDO0FBYXJDLEdBQUcsQ0FBa0I7SUFDcEIsVUFBVSxFQUFFO1FBQ1gsT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsRUFBRTtLQUNmO0lBQ0QsUUFBUSxZQUFDLENBQUM7SUFrQ1YsQ0FBQztJQUNELE1BQU0sWUFBQyxPQUFPO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFFdEMsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDbEQ7SUFDRixDQUFDO0lBRUQsY0FBYyxZQUFDLEVBQUU7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDZixXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXO1lBRXhDLE9BQU8sRUFBRSxVQUFDLGVBQWU7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUMsZUFBZSxDQUFDLENBQUM7Z0JBRXZELElBQU0sZ0JBQWdCLEdBQUcsZUFBZSxDQUFDLGFBQWEsQ0FBQztnQkFDdkQsSUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDLEVBQUUsQ0FBQztnQkFDakMsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDUixPQUFPLEVBQUUsVUFBQyxRQUFRO3dCQUNqQixJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFBO3dCQUc3QixFQUFFLENBQUMsT0FBTyxDQUFDOzRCQUNWLEdBQUcsRUFBRSxZQUFVLGdCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksU0FBSSxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLGVBQVk7NEJBQ25FLE1BQU0sRUFBRSxNQUFNOzRCQUNkLElBQUksRUFBRTtnQ0FDTCxJQUFJLEVBQUUsT0FBTztnQ0FFYixXQUFXLEVBQUUsS0FBSztnQ0FDbEIsYUFBYSxFQUFFLGdCQUFnQjtnQ0FDL0IsRUFBRSxFQUFFLEtBQUs7NkJBQ1Q7NEJBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRztnQ0FDWixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDOzRCQUNsQixDQUFDOzRCQUNELElBQUksRUFBRSxVQUFVLEdBQUc7Z0NBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBOzRCQUN6RCxDQUFDO3lCQUNELENBQUMsQ0FBQTtvQkFDSCxDQUFDO2lCQUNELENBQUMsQ0FBQTtZQUNILENBQUM7U0FDRCxDQUFDLENBQUE7UUFDRixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBQ3BDLENBQUM7Q0FJRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2NvbmZpZyc7XG5cbmludGVyZmFjZSBBcHBPcHRpb25DdXN0b20ge1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0dXNlckluZm8/OiBXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbyxcblx0XHRvcGVuR2lkPzogc3RyaW5nLFxuXHRcdHNoYXJlVGlja2V0OiBzdHJpbmcsXG5cdH1cblx0dXNlckluZm9SZWFkeUNhbGxiYWNrPzogV2VjaGF0TWluaXByb2dyYW0uR2V0VXNlckluZm9TdWNjZXNzQ2FsbGJhY2ssXG5cdGdldFNoYXJlVGlja2V0KGNnPzogRnVuY3Rpb24pOiBzdHJpbmc7XG59XG5cbi8vIGFwcC50c1xuQXBwPEFwcE9wdGlvbkN1c3RvbT4oe1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0b3BlbkdpZDogJycsXG5cdFx0c2hhcmVUaWNrZXQ6ICcnLFxuXHR9LFxuXHRvbkxhdW5jaChlKSB7XG5cblx0XHQvLyAvLyDlsZXnpLrmnKzlnLDlrZjlgqjog73liptcblx0XHQvLyBjb25zdCBsb2dzID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXVxuXHRcdC8vIGxvZ3MudW5zaGlmdChEYXRlLm5vdygpKVxuXHRcdC8vIHd4LnNldFN0b3JhZ2VTeW5jKCdsb2dzJywgbG9ncylcblxuXHRcdC8vIC8vIOeZu+W9lVxuXHRcdC8vIHd4LmxvZ2luKHtcblx0XHQvLyBcdHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0Ly8gXHRcdGNvbnNvbGUubG9nKHJlcy5jb2RlKVxuXHRcdC8vIFx0XHQvLyDlj5HpgIEgcmVzLmNvZGUg5Yiw5ZCO5Y+w5o2i5Y+WIG9wZW5JZCwgc2Vzc2lvbktleSwgdW5pb25JZFxuXHRcdC8vIFx0fSxcblx0XHQvLyB9KVxuXHRcdC8vIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuXHRcdC8vIHd4LmdldFNldHRpbmcoe1xuXHRcdC8vIFx0c3VjY2VzczogcmVzID0+IHtcblx0XHQvLyBcdFx0aWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuXHRcdC8vIFx0XHRcdC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcblx0XHQvLyBcdFx0XHR3eC5nZXRVc2VySW5mbyh7XG5cdFx0Ly8gXHRcdFx0XHRzdWNjZXNzOiByZXMgPT4ge1xuXHRcdC8vIFx0XHRcdFx0XHQvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG5cdFx0Ly8gXHRcdFx0XHRcdHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuXG5cdFx0Ly8gXHRcdFx0XHRcdC8vIOeUseS6jiBnZXRVc2VySW5mbyDmmK/nvZHnu5zor7fmsYLvvIzlj6/og73kvJrlnKggUGFnZS5vbkxvYWQg5LmL5ZCO5omN6L+U5ZueXG5cdFx0Ly8gXHRcdFx0XHRcdC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcblx0XHQvLyBcdFx0XHRcdFx0aWYgKHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKSB7XG5cdFx0Ly8gXHRcdFx0XHRcdFx0dGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2socmVzKVxuXHRcdC8vIFx0XHRcdFx0XHR9XG5cdFx0Ly8gXHRcdFx0XHR9LFxuXHRcdC8vIFx0XHRcdH0pXG5cdFx0Ly8gXHRcdH1cblx0XHQvLyBcdH0sXG5cdFx0Ly8gfSlcblx0fSxcblx0b25TaG93KG9wdGlvbnMpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwLm9uU2hvdyDojrflj5YnLCBvcHRpb25zKTtcblx0XHRcblx0XHRpZiAob3B0aW9ucy5zY2VuZSA9PT0gMTA0NCAmJiBvcHRpb25zLnNoYXJlVGlja2V0KSB7XG5cdFx0XHR0aGlzLmdsb2JhbERhdGEuc2hhcmVUaWNrZXQgPSBvcHRpb25zLnNoYXJlVGlja2V0O1xuXHRcdH1cblx0fSxcblxuXHRnZXRTaGFyZVRpY2tldChjYikge1xuXHRcdGNvbnNvbGUubG9nKCdnbG9iYWxEYXRhIGlzJyx0aGlzLmdsb2JhbERhdGEpO1xuXHRcdHd4LmdldFNoYXJlSW5mbyh7XG5cdFx0XHRzaGFyZVRpY2tldDogdGhpcy5nbG9iYWxEYXRhLnNoYXJlVGlja2V0LFxuXG5cdFx0XHRzdWNjZXNzOiAoZ2V0U2hhcmVJbmZvUmVzKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd3eC5nZXRTaGFyZUluZm8gcmVyZWl2ZScsZ2V0U2hhcmVJbmZvUmVzKTtcblx0XHRcdFx0XG5cdFx0XHRcdGNvbnN0IGpzX2VuY3J5cHRlZERhdGEgPSBnZXRTaGFyZUluZm9SZXMuZW5jcnlwdGVkRGF0YTtcblx0XHRcdFx0Y29uc3QganNfaXYgPSBnZXRTaGFyZUluZm9SZXMuaXY7XG5cdFx0XHRcdHd4LmxvZ2luKHtcblx0XHRcdFx0XHRzdWNjZXNzOiAobG9naW5SZXMpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGpzX2NvZGUgPSBsb2dpblJlcy5jb2RlXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhnZXRTaGFyZUluZm9SZXMsIGxvZ2luUmVzKTtcblxuXHRcdFx0XHRcdFx0d3gucmVxdWVzdCh7XG5cdFx0XHRcdFx0XHRcdHVybDogYGh0dHA6Ly8ke2NvbmZpZy5zZXJ2ZXIuaG9zdH06JHtjb25maWcuc2VydmVyLnBvcnR9L2FwaS9sb2dpbmAsXG5cdFx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29kZToganNfY29kZSwgLy8g5o2i5Y+Wb3BlbmlkXG5cdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0c2Vzc2lvbl9rZXk6ICcxMjMnLFxuXHRcdFx0XHRcdFx0XHRcdGVuY3J5cHRlZERhdGE6IGpzX2VuY3J5cHRlZERhdGEsIC8vIFxuXHRcdFx0XHRcdFx0XHRcdGl2OiBqc19pdlxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdnZXRTaGFyZVRpa2V0LS0tZXJyJyArIEpTT04uc3RyaW5naWZ5KGVycikpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS5zaGFyZVRpY2tldDtcblx0fSxcblx0LyoqXG5cdCAqIOatpOWkhOWGmeaOiOadg+i3s+i9rOWKn+iDvVxuXHQgKiAgKi8gXG59KSJdfQ==