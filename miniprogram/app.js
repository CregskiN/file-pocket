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
        isLogin: false,
        isAuthorized: false,
    },
    onLaunch: function (options) {
        try {
            wx.getStorageSync('VIEWHISTORY');
        }
        catch (err) {
            wx.setStorageSync('VIEWHISTORY', JSON.stringify([]));
        }
    },
    onShow: function (options) {
        console.log('App.onShow 获取', options);
        console.log('App.onShow 获取 globalData', this.globalData);
        if (options.scene === 1044 && options.shareTicket) {
            this.globalData.shareTicket = options.shareTicket;
        }
    },
    setGlobalData: function (e) {
        this.globalData = __assign(__assign({}, this.globalData), e);
    },
    getGlobalData: function (e) {
        return this.globalData;
    },
    init: function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            User_1.default.login().then(function (OPENID_SESSIONKEY) {
                console.log('login接口调用完成，获取OPENID_SESSIONKEY', OPENID_SESSIONKEY);
                _this.setGlobalData({
                    openid_sessionKey: OPENID_SESSIONKEY,
                    isLogin: true
                });
                User_1.default.getAuthorize().then(function (userInfo) {
                    if (userInfo.nickName) {
                        console.log('App.onLaunch 初始化完成');
                        _this.setGlobalData({
                            userInfo: userInfo,
                            isAuthorized: true,
                        });
                    }
                    else {
                        _this.setGlobalData({
                            userInfo: {},
                            isAuthorized: false,
                        });
                    }
                    resolve(_this.globalData);
                });
            });
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBcUM7QUFFckMsdURBQWlDO0FBYWpDLEdBQUcsQ0FBa0I7SUFDcEIsVUFBVSxFQUFFO1FBQ1gsT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsRUFBRTtRQUNmLFFBQVEsRUFBRSxFQUFFO1FBQ1osaUJBQWlCLEVBQUUsRUFBd0I7UUFDM0MsT0FBTyxFQUFFLEtBQUs7UUFDZCxZQUFZLEVBQUUsS0FBSztLQUNuQjtJQUVELFFBQVEsWUFBQyxPQUFPO1FBQ2YsSUFBSTtZQUNILEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLENBQUE7U0FDaEM7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNiLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQTtTQUNwRDtJQUNGLENBQUM7SUFFRCxNQUFNLFlBQUMsT0FBTztRQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXpELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUNsRCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDO1NBQ2xEO0lBQ0YsQ0FBQztJQU1ELGFBQWEsWUFBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUseUJBQ1gsSUFBSSxDQUFDLFVBQVUsR0FDZixDQUFDLENBQ0osQ0FBQTtJQUNGLENBQUM7SUFNRCxhQUFhLEVBQWIsVUFBYyxDQUFNO1FBQ25CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUN4QixDQUFDO0lBTUQsSUFBSSxFQUFKO1FBQUEsaUJBMkJDO1FBMUJBLE9BQU8sSUFBSSxPQUFPLENBQWlCLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbEQsY0FBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLGlCQUFpQjtnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2dCQUNsRSxLQUFJLENBQUMsYUFBYSxDQUFDO29CQUNsQixpQkFBaUIsRUFBRSxpQkFBaUI7b0JBQ3BDLE9BQU8sRUFBRSxJQUFJO2lCQUNiLENBQUMsQ0FBQztnQkFFSCxjQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsUUFBUTtvQkFDaEMsSUFBSSxRQUFRLENBQUMsUUFBUSxFQUFDO3dCQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7d0JBQ2xDLEtBQUksQ0FBQyxhQUFhLENBQUM7NEJBQ2xCLFFBQVEsVUFBQTs0QkFDUixZQUFZLEVBQUUsSUFBSTt5QkFDbEIsQ0FBQyxDQUFBO3FCQUNGO3lCQUFNO3dCQUVOLEtBQUksQ0FBQyxhQUFhLENBQUM7NEJBQ2xCLFFBQVEsRUFBRSxFQUFFOzRCQUNaLFlBQVksRUFBRSxLQUFLO3lCQUNuQixDQUFDLENBQUE7cUJBQ0Y7b0JBQ0QsT0FBTyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLENBQUE7WUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUdELGNBQWMsRUFBZCxVQUFlLEVBQUU7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzlDLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDZixXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFxQjtZQUVsRCxPQUFPLEVBQUUsVUFBQyxlQUFlO2dCQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixFQUFFLGVBQWUsQ0FBQyxDQUFDO2dCQUV4RCxJQUFNLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxhQUFhLENBQUM7Z0JBQ3ZELElBQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pDLEVBQUUsQ0FBQyxLQUFLLENBQUM7b0JBQ1IsT0FBTyxFQUFFLFVBQUMsUUFBUTt3QkFDakIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQTt3QkFHN0IsRUFBRSxDQUFDLE9BQU8sQ0FBQzs0QkFDVixHQUFHLEVBQUUsWUFBVSxnQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLFNBQUksZ0JBQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFZOzRCQUNuRSxNQUFNLEVBQUUsTUFBTTs0QkFDZCxJQUFJLEVBQUU7Z0NBQ0wsSUFBSSxFQUFFLE9BQU87Z0NBRWIsV0FBVyxFQUFFLEtBQUs7Z0NBQ2xCLGFBQWEsRUFBRSxnQkFBZ0I7Z0NBQy9CLEVBQUUsRUFBRSxLQUFLOzZCQUNUOzRCQUNELE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0NBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDbEIsQ0FBQzs0QkFDRCxJQUFJLEVBQUUsVUFBVSxHQUFHO2dDQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTs0QkFDekQsQ0FBQzt5QkFDRCxDQUFDLENBQUE7b0JBQ0gsQ0FBQztpQkFDRCxDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0NBRUQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHsgR2xvYmFsRGF0YVR5cGUgfSBmcm9tICcuL3V0aWxzL3R5cGluZyc7XG5pbXBvcnQgVXNlciBmcm9tICcuL21vZGVscy9Vc2VyJztcblxuXG5pbnRlcmZhY2UgQXBwT3B0aW9uQ3VzdG9tIHtcblx0Z2xvYmFsRGF0YTogR2xvYmFsRGF0YVR5cGU7XG5cdHNldEdsb2JhbERhdGE6IChlOiBhbnkpID0+IHZvaWQ7XG5cdGdldEdsb2JhbERhdGE6IChlOiBhbnkpID0+IEdsb2JhbERhdGFUeXBlO1xuXHRpbml0OiAoKSA9PiBQcm9taXNlPGFueT47XG5cdGdldFNoYXJlVGlja2V0OiAoY2I/OiBGdW5jdGlvbikgPT4gYW55O1xufVxuXG5cbi8vIGFwcC50c1xuQXBwPEFwcE9wdGlvbkN1c3RvbT4oe1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0b3BlbkdpZDogJycsXG5cdFx0c2hhcmVUaWNrZXQ6ICcnLFxuXHRcdHVzZXJJbmZvOiB7fSxcblx0XHRvcGVuaWRfc2Vzc2lvbktleToge30gYXMgUmVzcG9uc2UuTG9naW5EYXRhLFxuXHRcdGlzTG9naW46IGZhbHNlLFxuXHRcdGlzQXV0aG9yaXplZDogZmFsc2UsXG5cdH0sXG5cblx0b25MYXVuY2gob3B0aW9ucykge1xuXHRcdHRyeSB7XG5cdFx0XHR3eC5nZXRTdG9yYWdlU3luYygnVklFV0hJU1RPUlknKVxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0d3guc2V0U3RvcmFnZVN5bmMoJ1ZJRVdISVNUT1JZJywgSlNPTi5zdHJpbmdpZnkoW10pKVxuXHRcdH1cblx0fSxcblxuXHRvblNob3cob3B0aW9ucykge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAub25TaG93IOiOt+WPlicsIG9wdGlvbnMpO1xuXHRcdGNvbnNvbGUubG9nKCdBcHAub25TaG93IOiOt+WPliBnbG9iYWxEYXRhJywgdGhpcy5nbG9iYWxEYXRhKTtcblxuXHRcdGlmIChvcHRpb25zLnNjZW5lID09PSAxMDQ0ICYmIG9wdGlvbnMuc2hhcmVUaWNrZXQpIHtcblx0XHRcdHRoaXMuZ2xvYmFsRGF0YS5zaGFyZVRpY2tldCA9IG9wdGlvbnMuc2hhcmVUaWNrZXQ7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiDorr7nva5nbG9iYWxEYXRh5LmL55SoXG5cdCAqIEBwYXJhbSBlIFxuXHQgKi9cblx0c2V0R2xvYmFsRGF0YShlKSB7XG5cdFx0dGhpcy5nbG9iYWxEYXRhID0ge1xuXHRcdFx0Li4udGhpcy5nbG9iYWxEYXRhLFxuXHRcdFx0Li4uZSxcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIOiOt+WPlmdsb2JhbERhdGFcblx0ICogQHBhcmFtIGUgXG5cdCAqL1xuXHRnZXRHbG9iYWxEYXRhKGU6IGFueSkge1xuXHRcdHJldHVybiB0aGlzLmdsb2JhbERhdGE7XG5cdH0sXG5cblxuXHQvKipcblx0ICog6aG16Z2i5Yid5aeL5YyWXG5cdCAqL1xuXHRpbml0KCkge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZTxHbG9iYWxEYXRhVHlwZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0VXNlci5sb2dpbigpLnRoZW4oT1BFTklEX1NFU1NJT05LRVkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnbG9naW7mjqXlj6PosIPnlKjlrozmiJDvvIzojrflj5ZPUEVOSURfU0VTU0lPTktFWScsIE9QRU5JRF9TRVNTSU9OS0VZKTtcblx0XHRcdFx0dGhpcy5zZXRHbG9iYWxEYXRhKHtcblx0XHRcdFx0XHRvcGVuaWRfc2Vzc2lvbktleTogT1BFTklEX1NFU1NJT05LRVksXG5cdFx0XHRcdFx0aXNMb2dpbjogdHJ1ZVxuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRVc2VyLmdldEF1dGhvcml6ZSgpLnRoZW4odXNlckluZm8gPT4ge1xuXHRcdFx0XHRcdGlmICh1c2VySW5mby5uaWNrTmFtZSl7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQXBwLm9uTGF1bmNoIOWIneWni+WMluWujOaIkCcpO1xuXHRcdFx0XHRcdFx0dGhpcy5zZXRHbG9iYWxEYXRhKHtcblx0XHRcdFx0XHRcdFx0dXNlckluZm8sXG5cdFx0XHRcdFx0XHRcdGlzQXV0aG9yaXplZDogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIOaXoOazleiOt+WPlnVzZXJJbmZv77yM6ZyA6Lez6L2s5o6I5p2DXG5cdFx0XHRcdFx0XHR0aGlzLnNldEdsb2JhbERhdGEoe1xuXHRcdFx0XHRcdFx0XHR1c2VySW5mbzoge30sXG5cdFx0XHRcdFx0XHRcdGlzQXV0aG9yaXplZDogZmFsc2UsXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXNvbHZlKHRoaXMuZ2xvYmFsRGF0YSk7IC8vIOacgOe7iOWHuuWPo++8gVxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHR9KVxuXHR9LFxuXG5cblx0Z2V0U2hhcmVUaWNrZXQoY2IpIHtcblx0XHRjb25zb2xlLmxvZygnZ2xvYmFsRGF0YSBpcycsIHRoaXMuZ2xvYmFsRGF0YSk7XG5cdFx0d3guZ2V0U2hhcmVJbmZvKHtcblx0XHRcdHNoYXJlVGlja2V0OiB0aGlzLmdsb2JhbERhdGEuc2hhcmVUaWNrZXQgYXMgc3RyaW5nLFxuXG5cdFx0XHRzdWNjZXNzOiAoZ2V0U2hhcmVJbmZvUmVzKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd3eC5nZXRTaGFyZUluZm8gcmVyZWl2ZScsIGdldFNoYXJlSW5mb1Jlcyk7XG5cblx0XHRcdFx0Y29uc3QganNfZW5jcnlwdGVkRGF0YSA9IGdldFNoYXJlSW5mb1Jlcy5lbmNyeXB0ZWREYXRhO1xuXHRcdFx0XHRjb25zdCBqc19pdiA9IGdldFNoYXJlSW5mb1Jlcy5pdjtcblx0XHRcdFx0d3gubG9naW4oe1xuXHRcdFx0XHRcdHN1Y2Nlc3M6IChsb2dpblJlcykgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QganNfY29kZSA9IGxvZ2luUmVzLmNvZGVcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGdldFNoYXJlSW5mb1JlcywgbG9naW5SZXMpO1xuXG5cdFx0XHRcdFx0XHR3eC5yZXF1ZXN0KHtcblx0XHRcdFx0XHRcdFx0dXJsOiBgaHR0cDovLyR7Y29uZmlnLnNlcnZlci5ob3N0fToke2NvbmZpZy5zZXJ2ZXIucG9ydH0vYXBpL2xvZ2luYCxcblx0XHRcdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0XHRjb2RlOiBqc19jb2RlLCAvLyDmjaLlj5ZvcGVuaWRcblxuXHRcdFx0XHRcdFx0XHRcdHNlc3Npb25fa2V5OiAnMTIzJyxcblx0XHRcdFx0XHRcdFx0XHRlbmNyeXB0ZWREYXRhOiBqc19lbmNyeXB0ZWREYXRhLCAvLyBcblx0XHRcdFx0XHRcdFx0XHRpdjoganNfaXZcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZ2V0U2hhcmVUaWtldC0tLWVycicgKyBKU09OLnN0cmluZ2lmeShlcnIpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLmdsb2JhbERhdGEuc2hhcmVUaWNrZXQ7XG5cdH0sXG5cbn0pIl19