"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("./config/config"));
var User_1 = __importDefault(require("./models/User"));
App({
    globalData: {
        openGid: '',
        shareTicket: '',
        userInfo: {},
        openid_sessionKey: {},
        isAuthorized: null,
    },
    onLaunch: function (e) {
        var _this = this;
        User_1.default.login().then(function (OPENID_SESSIONKEY) {
            _this.globalData.openid_sessionKey = __assign({}, OPENID_SESSIONKEY);
        });
    },
    onShow: function (options) {
        var _this = this;
        console.log('App.onShow 获取', options);
        console.log('App.onShow 获取 globalData', this.globalData);
        User_1.default.getAuthorize().then(function (userInfo) {
            if (userInfo) {
                console.log('App.onLaunch 初始化完成');
                _this.globalData = __assign(__assign({}, _this.globalData), { userInfo: userInfo, isAuthorized: true });
            }
            else {
                _this.globalData = __assign(__assign({}, _this.globalData), { isAuthorized: false });
            }
        });
        if (options.scene === 1044 && options.shareTicket) {
            this.globalData.shareTicket = options.shareTicket;
        }
    },
    setGlobalData: function (e) {
        return;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBcUM7QUFFckMsdURBQWlDO0FBbUJqQyxHQUFHLENBQWtCO0lBQ3BCLFVBQVUsRUFBRTtRQUNYLE9BQU8sRUFBRSxFQUFFO1FBQ1gsV0FBVyxFQUFFLEVBQUU7UUFDZixRQUFRLEVBQUUsRUFBRTtRQUNaLGlCQUFpQixFQUFFLEVBQUU7UUFDckIsWUFBWSxFQUFFLElBQUk7S0FDbEI7SUFDRCxRQUFRLFlBQUMsQ0FBQztRQUFWLGlCQU1DO1FBSkEsY0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLGlCQUFpQjtZQUNsQyxLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixnQkFBUSxpQkFBaUIsQ0FBRSxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFBO0lBRUgsQ0FBQztJQUNELE1BQU0sWUFBQyxPQUFPO1FBQWQsaUJBd0JDO1FBdkJBLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXpELGNBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxRQUFRO1lBQ2hDLElBQUksUUFBUSxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztnQkFDbEMsS0FBSSxDQUFDLFVBQVUseUJBQ1gsS0FBSSxDQUFDLFVBQVUsS0FDbEIsUUFBUSxVQUFBLEVBQ1IsWUFBWSxFQUFFLElBQUksR0FDbEIsQ0FBQTthQUNEO2lCQUFNO2dCQUVOLEtBQUksQ0FBQyxVQUFVLHlCQUNYLEtBQUksQ0FBQyxVQUFVLEtBQ2xCLFlBQVksRUFBRSxLQUFLLEdBQ25CLENBQUE7YUFDRDtRQUNGLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDbEQ7SUFDRixDQUFDO0lBTUQsYUFBYSxZQUFDLENBQUM7UUFDZCxPQUFPO0lBQ1IsQ0FBQztJQUdELGNBQWMsWUFBQyxFQUFFO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM5QyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVztZQUV4QyxPQUFPLEVBQUUsVUFBQyxlQUFlO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUV4RCxJQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUM7Z0JBQ3ZELElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ1IsT0FBTyxFQUFFLFVBQUMsUUFBUTt3QkFDakIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQTt3QkFHN0IsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0QkFDVixHQUFHLEVBQUUsWUFBVSxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQUksZ0JBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFZOzRCQUNuRSxNQUFNLEVBQUUsTUFBTTs0QkFDZCxJQUFJLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLE9BQU87Z0NBRWIsV0FBVyxFQUFFLEtBQUs7Z0NBQ2xCLGFBQWEsRUFBRSxnQkFBZ0I7Z0NBQy9CLEVBQUUsRUFBRSxLQUFLOzZCQUNUOzRCQUNELE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0NBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDbEIsQ0FBQzs0QkFDRCxJQUFJLEVBQUUsVUFBVSxHQUFHO2dDQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTs0QkFDekQsQ0FBQzt5QkFDRCxDQUFDLENBQUE7b0JBQ0gsQ0FBQztpQkFDRCxDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0NBSUQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHsgQ3VzdG9tVXNlckluZm8sIE9wZW5pZF9TZXNzaW9uS2V5VHlwZSB9IGZyb20gJy4vdXRpbHMvdHlwaW5nJztcbmltcG9ydCBVc2VyIGZyb20gJy4vbW9kZWxzL1VzZXInO1xuXG5cbmludGVyZmFjZSBBcHBPcHRpb25DdXN0b20ge1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0b3BlbkdpZD86IHN0cmluZztcblx0XHRzaGFyZVRpY2tldDogc3RyaW5nO1xuXHRcdHVzZXJJbmZvPzogQ3VzdG9tVXNlckluZm87XG5cdFx0b3BlbmlkX3Nlc3Npb25LZXk/OiBPcGVuaWRfU2Vzc2lvbktleVR5cGU7XG5cdFx0aXNBdXRob3JpemVkPzogYm9vbGVhbiB8IG51bGw7XG5cdH1cblx0c2V0R2xvYmFsRGF0YTogKGU6IGFueSkgPT4gdm9pZDtcblx0Z2V0U2hhcmVUaWNrZXQ6IChjZz86IEZ1bmN0aW9uKSA9PiBzdHJpbmc7XG59XG5cblxuXG5cbi8vIGFwcC50c1xuQXBwPEFwcE9wdGlvbkN1c3RvbT4oe1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0b3BlbkdpZDogJycsXG5cdFx0c2hhcmVUaWNrZXQ6ICcnLFxuXHRcdHVzZXJJbmZvOiB7fSxcblx0XHRvcGVuaWRfc2Vzc2lvbktleToge30sXG5cdFx0aXNBdXRob3JpemVkOiBudWxsLFxuXHR9LFxuXHRvbkxhdW5jaChlKSB7XG5cblx0XHRVc2VyLmxvZ2luKCkudGhlbihPUEVOSURfU0VTU0lPTktFWSA9PiB7XG5cdFx0XHR0aGlzLmdsb2JhbERhdGEub3BlbmlkX3Nlc3Npb25LZXkgPSB7IC4uLk9QRU5JRF9TRVNTSU9OS0VZIH07XG5cdFx0fSlcblxuXHR9LFxuXHRvblNob3cob3B0aW9ucykge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAub25TaG93IOiOt+WPlicsIG9wdGlvbnMpO1xuXHRcdGNvbnNvbGUubG9nKCdBcHAub25TaG93IOiOt+WPliBnbG9iYWxEYXRhJywgdGhpcy5nbG9iYWxEYXRhKTtcblxuXHRcdFVzZXIuZ2V0QXV0aG9yaXplKCkudGhlbih1c2VySW5mbyA9PiB7XG5cdFx0XHRpZiAodXNlckluZm8pIHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ0FwcC5vbkxhdW5jaCDliJ3lp4vljJblrozmiJAnKTtcblx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhID0ge1xuXHRcdFx0XHRcdC4uLnRoaXMuZ2xvYmFsRGF0YSxcblx0XHRcdFx0XHR1c2VySW5mbyxcblx0XHRcdFx0XHRpc0F1dGhvcml6ZWQ6IHRydWUsXG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIOaXoOazleiOt+WPlnVzZXJJbmZv77yM6ZyA6Lez6L2s5o6I5p2DXG5cdFx0XHRcdHRoaXMuZ2xvYmFsRGF0YSA9IHtcblx0XHRcdFx0XHQuLi50aGlzLmdsb2JhbERhdGEsXG5cdFx0XHRcdFx0aXNBdXRob3JpemVkOiBmYWxzZSxcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHRpZiAob3B0aW9ucy5zY2VuZSA9PT0gMTA0NCAmJiBvcHRpb25zLnNoYXJlVGlja2V0KSB7XG5cdFx0XHR0aGlzLmdsb2JhbERhdGEuc2hhcmVUaWNrZXQgPSBvcHRpb25zLnNoYXJlVGlja2V0O1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICog5o+Q5L6b57uZUGFnZeiuvue9rmdsb2JhbERhdGHkuYvnlKhcblx0ICogQHBhcmFtIGUgXG5cdCAqL1xuXHRzZXRHbG9iYWxEYXRhKGUpIHtcblx0XHRyZXR1cm47XG5cdH0sXG5cblxuXHRnZXRTaGFyZVRpY2tldChjYikge1xuXHRcdGNvbnNvbGUubG9nKCdnbG9iYWxEYXRhIGlzJywgdGhpcy5nbG9iYWxEYXRhKTtcblx0XHR3eC5nZXRTaGFyZUluZm8oe1xuXHRcdFx0c2hhcmVUaWNrZXQ6IHRoaXMuZ2xvYmFsRGF0YS5zaGFyZVRpY2tldCxcblxuXHRcdFx0c3VjY2VzczogKGdldFNoYXJlSW5mb1JlcykgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnd3guZ2V0U2hhcmVJbmZvIHJlcmVpdmUnLCBnZXRTaGFyZUluZm9SZXMpO1xuXG5cdFx0XHRcdGNvbnN0IGpzX2VuY3J5cHRlZERhdGEgPSBnZXRTaGFyZUluZm9SZXMuZW5jcnlwdGVkRGF0YTtcblx0XHRcdFx0Y29uc3QganNfaXYgPSBnZXRTaGFyZUluZm9SZXMuaXY7XG5cdFx0XHRcdHd4LmxvZ2luKHtcblx0XHRcdFx0XHRzdWNjZXNzOiAobG9naW5SZXMpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGpzX2NvZGUgPSBsb2dpblJlcy5jb2RlXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhnZXRTaGFyZUluZm9SZXMsIGxvZ2luUmVzKTtcblxuXHRcdFx0XHRcdFx0d3gucmVxdWVzdCh7XG5cdFx0XHRcdFx0XHRcdHVybDogYGh0dHA6Ly8ke2NvbmZpZy5zZXJ2ZXIuaG9zdH06JHtjb25maWcuc2VydmVyLnBvcnR9L2FwaS9sb2dpbmAsXG5cdFx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29kZToganNfY29kZSwgLy8g5o2i5Y+Wb3BlbmlkXG5cblx0XHRcdFx0XHRcdFx0XHRzZXNzaW9uX2tleTogJzEyMycsXG5cdFx0XHRcdFx0XHRcdFx0ZW5jcnlwdGVkRGF0YToganNfZW5jcnlwdGVkRGF0YSwgLy8gXG5cdFx0XHRcdFx0XHRcdFx0aXY6IGpzX2l2XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2dldFNoYXJlVGlrZXQtLS1lcnInICsgSlNPTi5zdHJpbmdpZnkoZXJyKSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnNoYXJlVGlja2V0O1xuXHR9LFxuXHQvKipcblx0ICog5q2k5aSE5YaZ5o6I5p2D6Lez6L2s5Yqf6IO9XG5cdCAqICAqL1xufSkiXX0=