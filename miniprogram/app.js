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
                }).catch(function (err) {
                    console.log('授权调用失败', err);
                    _this.setGlobalData({
                        isAuthorized: false,
                    });
                    reject(err);
                });
            }).catch(function (err) {
                console.log('login失败', err);
                _this.setGlobalData({
                    userInfo: {},
                    isLogin: false,
                });
                reject(err);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBcUM7QUFFckMsdURBQWlDO0FBYWpDLEdBQUcsQ0FBa0I7SUFDcEIsVUFBVSxFQUFFO1FBQ1gsT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsRUFBRTtRQUNmLFFBQVEsRUFBRSxFQUFFO1FBQ1osaUJBQWlCLEVBQUUsRUFBRTtRQUNyQixPQUFPLEVBQUUsS0FBSztRQUNkLFlBQVksRUFBRSxLQUFLO0tBQ25CO0lBRUQsUUFBUSxZQUFDLE9BQU87UUFDZixJQUFJO1lBQ0gsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsQ0FBQTtTQUNoQztRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ2IsRUFBRSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1NBQ3BEO0lBQ0YsQ0FBQztJQUVELE1BQU0sWUFBQyxPQUFPO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDbEQ7SUFDRixDQUFDO0lBTUQsYUFBYSxZQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSx5QkFDWCxJQUFJLENBQUMsVUFBVSxHQUNmLENBQUMsQ0FDSixDQUFBO0lBQ0YsQ0FBQztJQU1ELGFBQWEsRUFBYixVQUFjLENBQU07UUFDbkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENB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QUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs0QkFDbEIsQ0FBQzs0QkFDRCxJQUFJLEVBQUUsVUFBVSxHQUFHO2dDQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTs0QkFDekQsQ0FBQzt5QkFDRCxDQUFDLENBQUE7b0JBQ0gsQ0FBQztpQkFDRCxDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0NBSUQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHsgR2xvYmFsRGF0YVR5cGUgfSBmcm9tICcuL3V0aWxzL3R5cGluZyc7XG5pbXBvcnQgVXNlciBmcm9tICcuL21vZGVscy9Vc2VyJztcblxuXG5pbnRlcmZhY2UgQXBwT3B0aW9uQ3VzdG9tIHtcblx0Z2xvYmFsRGF0YTogR2xvYmFsRGF0YVR5cGU7XG5cdHNldEdsb2JhbERhdGE6IChlOiBhbnkpID0+IHZvaWQ7XG5cdGdldEdsb2JhbERhdGE6IChlOiBhbnkpID0+IEdsb2JhbERhdGFUeXBlO1xuXHRpbml0OiAoKSA9PiBQcm9taXNlPGFueT47XG5cdGdldFNoYXJlVGlja2V0OiAoY2I/OiBGdW5jdGlvbikgPT4gYW55O1xufVxuXG5cbi8vIGFwcC50c1xuQXBwPEFwcE9wdGlvbkN1c3RvbT4oe1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0b3BlbkdpZDogJycsXG5cdFx0c2hhcmVUaWNrZXQ6ICcnLFxuXHRcdHVzZXJJbmZvOiB7fSxcblx0XHRvcGVuaWRfc2Vzc2lvbktleToge30sXG5cdFx0aXNMb2dpbjogZmFsc2UsXG5cdFx0aXNBdXRob3JpemVkOiBmYWxzZSxcblx0fSxcblxuXHRvbkxhdW5jaChvcHRpb25zKSB7XG5cdFx0dHJ5IHtcblx0XHRcdHd4LmdldFN0b3JhZ2VTeW5jKCdWSUVXSElTVE9SWScpXG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHR3eC5zZXRTdG9yYWdlU3luYygnVklFV0hJU1RPUlknLCBKU09OLnN0cmluZ2lmeShbXSkpXG5cdFx0fVxuXHR9LFxuXG5cdG9uU2hvdyhvcHRpb25zKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcC5vblNob3cg6I635Y+WJywgb3B0aW9ucyk7XG5cdFx0Y29uc29sZS5sb2coJ0FwcC5vblNob3cg6I635Y+WIGdsb2JhbERhdGEnLCB0aGlzLmdsb2JhbERhdGEpO1xuXG5cdFx0aWYgKG9wdGlvbnMuc2NlbmUgPT09IDEwNDQgJiYgb3B0aW9ucy5zaGFyZVRpY2tldCkge1xuXHRcdFx0dGhpcy5nbG9iYWxEYXRhLnNoYXJlVGlja2V0ID0gb3B0aW9ucy5zaGFyZVRpY2tldDtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIOiuvue9rmdsb2JhbERhdGHkuYvnlKhcblx0ICogQHBhcmFtIGUgXG5cdCAqL1xuXHRzZXRHbG9iYWxEYXRhKGUpIHtcblx0XHR0aGlzLmdsb2JhbERhdGEgPSB7XG5cdFx0XHQuLi50aGlzLmdsb2JhbERhdGEsXG5cdFx0XHQuLi5lLFxuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICog6I635Y+WZ2xvYmFsRGF0YVxuXHQgKiBAcGFyYW0gZSBcblx0ICovXG5cdGdldEdsb2JhbERhdGEoZTogYW55KSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsRGF0YTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiDpobXpnaLliJ3lp4vljJZcblx0ICovXG5cdGluaXQoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlPEdsb2JhbERhdGFUeXBlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRVc2VyLmxvZ2luKCkudGhlbihPUEVOSURfU0VTU0lPTktFWSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdsb2dpbuaOpeWPo+iwg+eUqOWujOaIkO+8jOiOt+WPlk9QRU5JRF9TRVNTSU9OS0VZJywgT1BFTklEX1NFU1NJT05LRVkpO1xuXHRcdFx0XHR0aGlzLnNldEdsb2JhbERhdGEoe1xuXHRcdFx0XHRcdG9wZW5pZF9zZXNzaW9uS2V5OiBPUEVOSURfU0VTU0lPTktFWSxcblx0XHRcdFx0XHRpc0xvZ2luOiB0cnVlXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0VXNlci5nZXRBdXRob3JpemUoKS50aGVuKHVzZXJJbmZvID0+IHtcblx0XHRcdFx0XHRpZiAodXNlckluZm8ubmlja05hbWUpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdBcHAub25MYXVuY2gg5Yid5aeL5YyW5a6M5oiQJyk7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEdsb2JhbERhdGEoe1xuXHRcdFx0XHRcdFx0XHR1c2VySW5mbyxcblx0XHRcdFx0XHRcdFx0aXNBdXRob3JpemVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Ly8g5peg5rOV6I635Y+WdXNlckluZm/vvIzpnIDot7PovazmjojmnYNcblx0XHRcdFx0XHRcdHRoaXMuc2V0R2xvYmFsRGF0YSh7XG5cdFx0XHRcdFx0XHRcdHVzZXJJbmZvOiB7fSxcblx0XHRcdFx0XHRcdFx0aXNBdXRob3JpemVkOiBmYWxzZSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlc29sdmUodGhpcy5nbG9iYWxEYXRhKTsgLy8g5pyA57uI5Ye65Y+j77yBXG5cdFx0XHRcdH0pLmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aOiOadg+iwg+eUqOWksei0pScsIGVycik7XG5cdFx0XHRcdFx0dGhpcy5zZXRHbG9iYWxEYXRhKHtcblx0XHRcdFx0XHRcdGlzQXV0aG9yaXplZDogZmFsc2UsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdFx0fSlcblx0XHRcdH0pLmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdsb2dpbuWksei0pScsIGVycik7XG5cdFx0XHRcdHRoaXMuc2V0R2xvYmFsRGF0YSh7XG5cdFx0XHRcdFx0dXNlckluZm86IHt9LFxuXHRcdFx0XHRcdGlzTG9naW46IGZhbHNlLFxuXHRcdFx0XHR9KVxuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH0pXG5cdFx0fSlcblx0fSxcblxuXG5cblxuXHRnZXRTaGFyZVRpY2tldChjYikge1xuXHRcdGNvbnNvbGUubG9nKCdnbG9iYWxEYXRhIGlzJywgdGhpcy5nbG9iYWxEYXRhKTtcblx0XHR3eC5nZXRTaGFyZUluZm8oe1xuXHRcdFx0c2hhcmVUaWNrZXQ6IHRoaXMuZ2xvYmFsRGF0YS5zaGFyZVRpY2tldCBhcyBzdHJpbmcsXG5cblx0XHRcdHN1Y2Nlc3M6IChnZXRTaGFyZUluZm9SZXMpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ3d4LmdldFNoYXJlSW5mbyByZXJlaXZlJywgZ2V0U2hhcmVJbmZvUmVzKTtcblxuXHRcdFx0XHRjb25zdCBqc19lbmNyeXB0ZWREYXRhID0gZ2V0U2hhcmVJbmZvUmVzLmVuY3J5cHRlZERhdGE7XG5cdFx0XHRcdGNvbnN0IGpzX2l2ID0gZ2V0U2hhcmVJbmZvUmVzLml2O1xuXHRcdFx0XHR3eC5sb2dpbih7XG5cdFx0XHRcdFx0c3VjY2VzczogKGxvZ2luUmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBqc19jb2RlID0gbG9naW5SZXMuY29kZVxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coZ2V0U2hhcmVJbmZvUmVzLCBsb2dpblJlcyk7XG5cblx0XHRcdFx0XHRcdHd4LnJlcXVlc3Qoe1xuXHRcdFx0XHRcdFx0XHR1cmw6IGBodHRwOi8vJHtjb25maWcuc2VydmVyLmhvc3R9OiR7Y29uZmlnLnNlcnZlci5wb3J0fS9hcGkvbG9naW5gLFxuXHRcdFx0XHRcdFx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRcdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0XHRcdGNvZGU6IGpzX2NvZGUsIC8vIOaNouWPlm9wZW5pZFxuXG5cdFx0XHRcdFx0XHRcdFx0c2Vzc2lvbl9rZXk6ICcxMjMnLFxuXHRcdFx0XHRcdFx0XHRcdGVuY3J5cHRlZERhdGE6IGpzX2VuY3J5cHRlZERhdGEsIC8vIFxuXHRcdFx0XHRcdFx0XHRcdGl2OiBqc19pdlxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2cocmVzKTtcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0ZmFpbDogZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdnZXRTaGFyZVRpa2V0LS0tZXJyJyArIEpTT04uc3RyaW5naWZ5KGVycikpXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pXG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS5zaGFyZVRpY2tldDtcblx0fSxcblx0LyoqXG5cdCAqIOatpOWkhOWGmeaOiOadg+i3s+i9rOWKn+iDvVxuXHQgKiAgKi9cbn0pIl19