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
                _this.globalData = __assign(__assign({}, _this.globalData), { openid_sessionKey: OPENID_SESSIONKEY, isLogin: true });
                User_1.default.getAuthorize().then(function (userInfo) {
                    if (userInfo.nickName) {
                        console.log('App.onLaunch 初始化完成');
                        _this.globalData = __assign(__assign({}, _this.globalData), { userInfo: userInfo, isAuthorized: true });
                    }
                    else {
                        _this.globalData = __assign(__assign({}, _this.globalData), { userInfo: {}, isAuthorized: false });
                    }
                    resolve(_this.globalData);
                }).catch(function (err) {
                    console.log('授权调用失败', err);
                    _this.globalData = __assign(__assign({}, _this.globalData), { isAuthorized: false });
                    reject(err);
                });
            }).catch(function (err) {
                console.log('login失败', err);
                _this.globalData = __assign(__assign({}, _this.globalData), { userInfo: {}, isLogin: false });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBcUM7QUFFckMsdURBQWlDO0FBYWpDLEdBQUcsQ0FBa0I7SUFDcEIsVUFBVSxFQUFFO1FBQ1gsT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsRUFBRTtRQUNmLFFBQVEsRUFBRSxFQUFFO1FBQ1osaUJBQWlCLEVBQUUsRUFBRTtRQUNyQixPQUFPLEVBQUUsS0FBSztRQUNkLFlBQVksRUFBRSxLQUFLO0tBQ25CO0lBRUQsUUFBUSxZQUFDLE9BQU87SUFHaEIsQ0FBQztJQUVELE1BQU0sWUFBQyxPQUFPO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDbEQ7SUFDRixDQUFDO0lBTUQsYUFBYSxZQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSx5QkFDWCxJQUFJLENBQUMsVUFBVSxHQUNmLENBQUMsQ0FDSixDQUFBO0lBQ0YsQ0FBQztJQU1ELGFBQWEsRUFBYixVQUFjLENBQU07UUFDbkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFNRCxJQUFJO1FBQUosaUJBNENDO1FBM0NBLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsQyxjQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsaUJBQWlCO2dCQUNsQyxLQUFJLENBQUMsVUFBVSx5QkFDWCxLQUFJ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QztpQkFDRCxDQUFDLENBQUE7WUFDSCxDQUFDO1NBQ0QsQ0FBQyxDQUFBO1FBQ0YsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUNwQyxDQUFDO0NBSUQsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbmZpZyBmcm9tICcuL2NvbmZpZy9jb25maWcnO1xuaW1wb3J0IHsgR2xvYmFsRGF0YVR5cGUgfSBmcm9tICcuL3V0aWxzL3R5cGluZyc7XG5pbXBvcnQgVXNlciBmcm9tICcuL21vZGVscy9Vc2VyJztcblxuXG5pbnRlcmZhY2UgQXBwT3B0aW9uQ3VzdG9tIHtcblx0Z2xvYmFsRGF0YTogR2xvYmFsRGF0YVR5cGU7XG5cdHNldEdsb2JhbERhdGE6IChlOiBhbnkpID0+IHZvaWQ7XG5cdGdldEdsb2JhbERhdGE6IChlOiBhbnkpID0+IEdsb2JhbERhdGFUeXBlO1xuXHRpbml0OiAoKSA9PiBQcm9taXNlPGFueT47XG5cdGdldFNoYXJlVGlja2V0OiAoY2I/OiBGdW5jdGlvbikgPT4gYW55O1xufVxuXG5cbi8vIGFwcC50c1xuQXBwPEFwcE9wdGlvbkN1c3RvbT4oe1xuXHRnbG9iYWxEYXRhOiB7XG5cdFx0b3BlbkdpZDogJycsXG5cdFx0c2hhcmVUaWNrZXQ6ICcnLFxuXHRcdHVzZXJJbmZvOiB7fSxcblx0XHRvcGVuaWRfc2Vzc2lvbktleToge30sXG5cdFx0aXNMb2dpbjogZmFsc2UsXG5cdFx0aXNBdXRob3JpemVkOiBmYWxzZSxcblx0fSxcblxuXHRvbkxhdW5jaChvcHRpb25zKSB7XG5cblxuXHR9LFxuXG5cdG9uU2hvdyhvcHRpb25zKSB7XG5cdFx0Y29uc29sZS5sb2coJ0FwcC5vblNob3cg6I635Y+WJywgb3B0aW9ucyk7XG5cdFx0Y29uc29sZS5sb2coJ0FwcC5vblNob3cg6I635Y+WIGdsb2JhbERhdGEnLCB0aGlzLmdsb2JhbERhdGEpO1xuXG5cdFx0aWYgKG9wdGlvbnMuc2NlbmUgPT09IDEwNDQgJiYgb3B0aW9ucy5zaGFyZVRpY2tldCkge1xuXHRcdFx0dGhpcy5nbG9iYWxEYXRhLnNoYXJlVGlja2V0ID0gb3B0aW9ucy5zaGFyZVRpY2tldDtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIOiuvue9rmdsb2JhbERhdGHkuYvnlKhcblx0ICogQHBhcmFtIGUgXG5cdCAqL1xuXHRzZXRHbG9iYWxEYXRhKGUpIHtcblx0XHR0aGlzLmdsb2JhbERhdGEgPSB7XG5cdFx0XHQuLi50aGlzLmdsb2JhbERhdGEsXG5cdFx0XHQuLi5lLFxuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICog6I635Y+WZ2xvYmFsRGF0YVxuXHQgKiBAcGFyYW0gZSBcblx0ICovXG5cdGdldEdsb2JhbERhdGEoZTogYW55KSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2xvYmFsRGF0YTtcblx0fSxcblxuXG5cdC8qKlxuXHQgKiDpobXpnaLliJ3lp4vljJZcblx0ICovXG5cdGluaXQoKSB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdFVzZXIubG9naW4oKS50aGVuKE9QRU5JRF9TRVNTSU9OS0VZID0+IHtcblx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhID0ge1xuXHRcdFx0XHRcdC4uLnRoaXMuZ2xvYmFsRGF0YSxcblx0XHRcdFx0XHRvcGVuaWRfc2Vzc2lvbktleTogT1BFTklEX1NFU1NJT05LRVksXG5cdFx0XHRcdFx0aXNMb2dpbjogdHJ1ZVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdFVzZXIuZ2V0QXV0aG9yaXplKCkudGhlbih1c2VySW5mbyA9PiB7XG5cdFx0XHRcdFx0aWYgKHVzZXJJbmZvLm5pY2tOYW1lKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnQXBwLm9uTGF1bmNoIOWIneWni+WMluWujOaIkCcpO1xuXHRcdFx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhID0ge1xuXHRcdFx0XHRcdFx0XHQuLi50aGlzLmdsb2JhbERhdGEsXG5cdFx0XHRcdFx0XHRcdHVzZXJJbmZvLFxuXHRcdFx0XHRcdFx0XHRpc0F1dGhvcml6ZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdC8vIOaXoOazleiOt+WPlnVzZXJJbmZv77yM6ZyA6Lez6L2s5o6I5p2DXG5cdFx0XHRcdFx0XHR0aGlzLmdsb2JhbERhdGEgPSB7XG5cdFx0XHRcdFx0XHRcdC4uLnRoaXMuZ2xvYmFsRGF0YSxcblx0XHRcdFx0XHRcdFx0dXNlckluZm86IHt9LFxuXHRcdFx0XHRcdFx0XHRpc0F1dGhvcml6ZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXNvbHZlKHRoaXMuZ2xvYmFsRGF0YSk7IC8vIOacgOe7iOWHuuWPo++8gVxuXHRcdFx0XHR9KS5jYXRjaChlcnIgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfmjojmnYPosIPnlKjlpLHotKUnLCBlcnIpO1xuXHRcdFx0XHRcdHRoaXMuZ2xvYmFsRGF0YSA9IHtcblx0XHRcdFx0XHRcdC4uLnRoaXMuZ2xvYmFsRGF0YSxcblx0XHRcdFx0XHRcdGlzQXV0aG9yaXplZDogZmFsc2UsXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHR9KVxuXHRcdFx0fSkuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2xvZ2lu5aSx6LSlJywgZXJyKTtcblx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhID0ge1xuXHRcdFx0XHRcdC4uLnRoaXMuZ2xvYmFsRGF0YSxcblx0XHRcdFx0XHR1c2VySW5mbzoge30sXG5cdFx0XHRcdFx0aXNMb2dpbjogZmFsc2UsXG5cdFx0XHRcdH1cblx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHR9KVxuXHRcdH0pXG5cdH0sXG5cblxuXG5cblx0Z2V0U2hhcmVUaWNrZXQoY2IpIHtcblx0XHRjb25zb2xlLmxvZygnZ2xvYmFsRGF0YSBpcycsIHRoaXMuZ2xvYmFsRGF0YSk7XG5cdFx0d3guZ2V0U2hhcmVJbmZvKHtcblx0XHRcdHNoYXJlVGlja2V0OiB0aGlzLmdsb2JhbERhdGEuc2hhcmVUaWNrZXQgYXMgc3RyaW5nLFxuXG5cdFx0XHRzdWNjZXNzOiAoZ2V0U2hhcmVJbmZvUmVzKSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCd3eC5nZXRTaGFyZUluZm8gcmVyZWl2ZScsIGdldFNoYXJlSW5mb1Jlcyk7XG5cblx0XHRcdFx0Y29uc3QganNfZW5jcnlwdGVkRGF0YSA9IGdldFNoYXJlSW5mb1Jlcy5lbmNyeXB0ZWREYXRhO1xuXHRcdFx0XHRjb25zdCBqc19pdiA9IGdldFNoYXJlSW5mb1Jlcy5pdjtcblx0XHRcdFx0d3gubG9naW4oe1xuXHRcdFx0XHRcdHN1Y2Nlc3M6IChsb2dpblJlcykgPT4ge1xuXHRcdFx0XHRcdFx0Y29uc3QganNfY29kZSA9IGxvZ2luUmVzLmNvZGVcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKGdldFNoYXJlSW5mb1JlcywgbG9naW5SZXMpO1xuXG5cdFx0XHRcdFx0XHR3eC5yZXF1ZXN0KHtcblx0XHRcdFx0XHRcdFx0dXJsOiBgaHR0cDovLyR7Y29uZmlnLnNlcnZlci5ob3N0fToke2NvbmZpZy5zZXJ2ZXIucG9ydH0vYXBpL2xvZ2luYCxcblx0XHRcdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0XHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdFx0XHRjb2RlOiBqc19jb2RlLCAvLyDmjaLlj5ZvcGVuaWRcblxuXHRcdFx0XHRcdFx0XHRcdHNlc3Npb25fa2V5OiAnMTIzJyxcblx0XHRcdFx0XHRcdFx0XHRlbmNyeXB0ZWREYXRhOiBqc19lbmNyeXB0ZWREYXRhLCAvLyBcblx0XHRcdFx0XHRcdFx0XHRpdjoganNfaXZcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZ2V0U2hhcmVUaWtldC0tLWVycicgKyBKU09OLnN0cmluZ2lmeShlcnIpKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9KVxuXHRcdHJldHVybiB0aGlzLmdsb2JhbERhdGEuc2hhcmVUaWNrZXQ7XG5cdH0sXG5cdC8qKlxuXHQgKiDmraTlpITlhpnmjojmnYPot7Povazlip/og71cblx0ICogICovXG59KSJdfQ==