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
                console.log('login接口调用完成，获取OPENID_SESSIONKEY', OPENID_SESSIONKEY);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBcUM7QUFFckMsdURBQWlDO0FBYWpDLEdBQUcsQ0FBa0I7SUFDcEIsVUFBVSxFQUFFO1FBQ1gsT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsRUFBRTtRQUNmLFFBQVEsRUFBRSxFQUFFO1FBQ1osaUJBQWlCLEVBQUUsRUFBRTtRQUNyQixPQUFPLEVBQUUsS0FBSztRQUNkLFlBQVksRUFBRSxLQUFLO0tBQ25CO0lBRUQsUUFBUSxZQUFDLE9BQU87SUFHaEIsQ0FBQztJQUVELE1BQU0sWUFBQyxPQUFPO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFekQsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxXQUFXLENBQUM7U0FDbEQ7SUFDRixDQUFDO0lBTUQsYUFBYSxZQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsVUFBVSx5QkFDWCxJQUFJLENBQUMsVUFBVSxHQUNmLENBQUMsQ0FDSixDQUFBO0lBQ0YsQ0FBQztJQU1ELGFBQWEsRUFBYixVQUFjLENBQU07UUFDbkIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hCLENBQUM7SUFNRCxJQUFJO1FBQUosaUJBOENDO1FBN0NBLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNsQyxjQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsaUJBQWlCO2dCQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLGlDQUFp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QUFHLENBQUMsQ0FBQyxDQUFBOzRCQUN6RCxDQUFDO3lCQUNELENBQUMsQ0FBQTtvQkFDSCxDQUFDO2lCQUNELENBQUMsQ0FBQTtZQUNILENBQUM7U0FDRCxDQUFDLENBQUE7UUFDRixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO0lBQ3BDLENBQUM7Q0FJRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4vY29uZmlnL2NvbmZpZyc7XG5pbXBvcnQgeyBHbG9iYWxEYXRhVHlwZSB9IGZyb20gJy4vdXRpbHMvdHlwaW5nJztcbmltcG9ydCBVc2VyIGZyb20gJy4vbW9kZWxzL1VzZXInO1xuXG5cbmludGVyZmFjZSBBcHBPcHRpb25DdXN0b20ge1xuXHRnbG9iYWxEYXRhOiBHbG9iYWxEYXRhVHlwZTtcblx0c2V0R2xvYmFsRGF0YTogKGU6IGFueSkgPT4gdm9pZDtcblx0Z2V0R2xvYmFsRGF0YTogKGU6IGFueSkgPT4gR2xvYmFsRGF0YVR5cGU7XG5cdGluaXQ6ICgpID0+IFByb21pc2U8YW55Pjtcblx0Z2V0U2hhcmVUaWNrZXQ6IChjYj86IEZ1bmN0aW9uKSA9PiBhbnk7XG59XG5cblxuLy8gYXBwLnRzXG5BcHA8QXBwT3B0aW9uQ3VzdG9tPih7XG5cdGdsb2JhbERhdGE6IHtcblx0XHRvcGVuR2lkOiAnJyxcblx0XHRzaGFyZVRpY2tldDogJycsXG5cdFx0dXNlckluZm86IHt9LFxuXHRcdG9wZW5pZF9zZXNzaW9uS2V5OiB7fSxcblx0XHRpc0xvZ2luOiBmYWxzZSxcblx0XHRpc0F1dGhvcml6ZWQ6IGZhbHNlLFxuXHR9LFxuXG5cdG9uTGF1bmNoKG9wdGlvbnMpIHtcblxuXG5cdH0sXG5cblx0b25TaG93KG9wdGlvbnMpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwLm9uU2hvdyDojrflj5YnLCBvcHRpb25zKTtcblx0XHRjb25zb2xlLmxvZygnQXBwLm9uU2hvdyDojrflj5YgZ2xvYmFsRGF0YScsIHRoaXMuZ2xvYmFsRGF0YSk7XG5cblx0XHRpZiAob3B0aW9ucy5zY2VuZSA9PT0gMTA0NCAmJiBvcHRpb25zLnNoYXJlVGlja2V0KSB7XG5cdFx0XHR0aGlzLmdsb2JhbERhdGEuc2hhcmVUaWNrZXQgPSBvcHRpb25zLnNoYXJlVGlja2V0O1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICog6K6+572uZ2xvYmFsRGF0YeS5i+eUqFxuXHQgKiBAcGFyYW0gZSBcblx0ICovXG5cdHNldEdsb2JhbERhdGEoZSkge1xuXHRcdHRoaXMuZ2xvYmFsRGF0YSA9IHtcblx0XHRcdC4uLnRoaXMuZ2xvYmFsRGF0YSxcblx0XHRcdC4uLmUsXG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiDojrflj5ZnbG9iYWxEYXRhXG5cdCAqIEBwYXJhbSBlIFxuXHQgKi9cblx0Z2V0R2xvYmFsRGF0YShlOiBhbnkpIHtcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxEYXRhO1xuXHR9LFxuXG5cblx0LyoqXG5cdCAqIOmhtemdouWIneWni+WMllxuXHQgKi9cblx0aW5pdCgpIHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0VXNlci5sb2dpbigpLnRoZW4oT1BFTklEX1NFU1NJT05LRVkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnbG9naW7mjqXlj6PosIPnlKjlrozmiJDvvIzojrflj5ZPUEVOSURfU0VTU0lPTktFWScsIE9QRU5JRF9TRVNTSU9OS0VZKTtcblx0XHRcdFx0XG5cdFx0XHRcdHRoaXMuZ2xvYmFsRGF0YSA9IHtcblx0XHRcdFx0XHQuLi50aGlzLmdsb2JhbERhdGEsXG5cdFx0XHRcdFx0b3BlbmlkX3Nlc3Npb25LZXk6IE9QRU5JRF9TRVNTSU9OS0VZLFxuXHRcdFx0XHRcdGlzTG9naW46IHRydWVcblx0XHRcdFx0fTtcblxuXHRcdFx0XHRVc2VyLmdldEF1dGhvcml6ZSgpLnRoZW4odXNlckluZm8gPT4ge1xuXHRcdFx0XHRcdGlmICh1c2VySW5mby5uaWNrTmFtZSkge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ0FwcC5vbkxhdW5jaCDliJ3lp4vljJblrozmiJAnKTtcblx0XHRcdFx0XHRcdHRoaXMuZ2xvYmFsRGF0YSA9IHtcblx0XHRcdFx0XHRcdFx0Li4udGhpcy5nbG9iYWxEYXRhLFxuXHRcdFx0XHRcdFx0XHR1c2VySW5mbyxcblx0XHRcdFx0XHRcdFx0aXNBdXRob3JpemVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHQvLyDml6Dms5Xojrflj5Z1c2VySW5mb++8jOmcgOi3s+i9rOaOiOadg1xuXHRcdFx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhID0ge1xuXHRcdFx0XHRcdFx0XHQuLi50aGlzLmdsb2JhbERhdGEsXG5cdFx0XHRcdFx0XHRcdHVzZXJJbmZvOiB7fSxcblx0XHRcdFx0XHRcdFx0aXNBdXRob3JpemVkOiBmYWxzZSxcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmVzb2x2ZSh0aGlzLmdsb2JhbERhdGEpOyAvLyDmnIDnu4jlh7rlj6PvvIFcblx0XHRcdFx0fSkuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5o6I5p2D6LCD55So5aSx6LSlJywgZXJyKTtcblx0XHRcdFx0XHR0aGlzLmdsb2JhbERhdGEgPSB7XG5cdFx0XHRcdFx0XHQuLi50aGlzLmdsb2JhbERhdGEsXG5cdFx0XHRcdFx0XHRpc0F1dGhvcml6ZWQ6IGZhbHNlLFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdFx0fSlcblx0XHRcdH0pLmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdsb2dpbuWksei0pScsIGVycik7XG5cdFx0XHRcdHRoaXMuZ2xvYmFsRGF0YSA9IHtcblx0XHRcdFx0XHQuLi50aGlzLmdsb2JhbERhdGEsXG5cdFx0XHRcdFx0dXNlckluZm86IHt9LFxuXHRcdFx0XHRcdGlzTG9naW46IGZhbHNlLFxuXHRcdFx0XHR9XG5cdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0fSlcblx0XHR9KVxuXHR9LFxuXG5cblxuXG5cdGdldFNoYXJlVGlja2V0KGNiKSB7XG5cdFx0Y29uc29sZS5sb2coJ2dsb2JhbERhdGEgaXMnLCB0aGlzLmdsb2JhbERhdGEpO1xuXHRcdHd4LmdldFNoYXJlSW5mbyh7XG5cdFx0XHRzaGFyZVRpY2tldDogdGhpcy5nbG9iYWxEYXRhLnNoYXJlVGlja2V0IGFzIHN0cmluZyxcblxuXHRcdFx0c3VjY2VzczogKGdldFNoYXJlSW5mb1JlcykgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnd3guZ2V0U2hhcmVJbmZvIHJlcmVpdmUnLCBnZXRTaGFyZUluZm9SZXMpO1xuXG5cdFx0XHRcdGNvbnN0IGpzX2VuY3J5cHRlZERhdGEgPSBnZXRTaGFyZUluZm9SZXMuZW5jcnlwdGVkRGF0YTtcblx0XHRcdFx0Y29uc3QganNfaXYgPSBnZXRTaGFyZUluZm9SZXMuaXY7XG5cdFx0XHRcdHd4LmxvZ2luKHtcblx0XHRcdFx0XHRzdWNjZXNzOiAobG9naW5SZXMpID0+IHtcblx0XHRcdFx0XHRcdGNvbnN0IGpzX2NvZGUgPSBsb2dpblJlcy5jb2RlXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhnZXRTaGFyZUluZm9SZXMsIGxvZ2luUmVzKTtcblxuXHRcdFx0XHRcdFx0d3gucmVxdWVzdCh7XG5cdFx0XHRcdFx0XHRcdHVybDogYGh0dHA6Ly8ke2NvbmZpZy5zZXJ2ZXIuaG9zdH06JHtjb25maWcuc2VydmVyLnBvcnR9L2FwaS9sb2dpbmAsXG5cdFx0XHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnLFxuXHRcdFx0XHRcdFx0XHRkYXRhOiB7XG5cdFx0XHRcdFx0XHRcdFx0Y29kZToganNfY29kZSwgLy8g5o2i5Y+Wb3BlbmlkXG5cblx0XHRcdFx0XHRcdFx0XHRzZXNzaW9uX2tleTogJzEyMycsXG5cdFx0XHRcdFx0XHRcdFx0ZW5jcnlwdGVkRGF0YToganNfZW5jcnlwdGVkRGF0YSwgLy8gXG5cdFx0XHRcdFx0XHRcdFx0aXY6IGpzX2l2XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRmYWlsOiBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2dldFNoYXJlVGlrZXQtLS1lcnInICsgSlNPTi5zdHJpbmdpZnkoZXJyKSlcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSlcblx0XHRyZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnNoYXJlVGlja2V0O1xuXHR9LFxuXHQvKipcblx0ICog5q2k5aSE5YaZ5o6I5p2D6Lez6L2s5Yqf6IO9XG5cdCAqICAqL1xufSkiXX0=