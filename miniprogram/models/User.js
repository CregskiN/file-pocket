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
var https_1 = __importDefault(require("../utils/https"));
var User = (function () {
    function User() {
    }
    User.login = function () {
        return new Promise(function (resolve, reject) {
            wx.checkSession({
                success: function (res) {
                },
                fail: function (err) {
                },
                complete: function () {
                    wx.login({
                        success: function (res) {
                            var data = { code: res.code };
                            var options = {
                                url: '/wxma_auth/code_to_session',
                                method: 'GET',
                                data: data
                            };
                            var loginRes = https_1.default.request(options);
                            loginRes.then(function (res) {
                                var openid_sessionKey = res.data;
                                console.log('login接口获取的openid_sessionKey', openid_sessionKey);
                                User.setOpenidSessionKeyStorage(openid_sessionKey);
                                resolve(openid_sessionKey);
                            }).catch(function (err) {
                                console.log('login逻辑有误 - ', err);
                                reject(err);
                            });
                        },
                        fail: function (err) {
                            console.log('wx.login接口调用失败', err);
                            reject(err);
                        }
                    });
                }
            });
        });
    };
    User.getAuthorize = function () {
        return new Promise(function (resolve, reject) {
            wx.getSetting({
                success: function (res) {
                    console.log(res);
                    if (res.authSetting['scope.userInfo']) {
                        var userInfo = null;
                        var userInfoStorage = User.getUserInfoStorage();
                        if (userInfoStorage) {
                            userInfo = userInfoStorage;
                            resolve(userInfo);
                            return;
                        }
                        else {
                            wx.getUserInfo({
                                success: function (res) {
                                    User.setUserInfoStorage(res.userInfo);
                                    resolve(res.userInfo);
                                    return;
                                },
                                fail: function (err) {
                                    reject(err);
                                    return;
                                }
                            });
                        }
                    }
                    else if (!res.authSetting['scope.userInfo']) {
                        resolve({});
                        return;
                    }
                },
                fail: function (err) {
                    reject(err);
                    return;
                }
            });
        });
    };
    User.setUserInfoStorage = function (userInfo) {
        var oUserInfo = this.getUserInfoStorage();
        var nUserInfo = __assign(__assign({}, oUserInfo), userInfo);
        delete nUserInfo['username'];
        wx.setStorageSync('USERINFO', nUserInfo);
    };
    User.getOpenidSessionKeyStorage = function () {
        return wx.getStorageSync('OPENID_SESSIONKEY');
    };
    User.setOpenidSessionKeyStorage = function (openid_sessionKey) {
        var oOpenid_sessionKey = this.getOpenidSessionKeyStorage();
        var nOpenid_sessionKey = __assign(__assign({}, oOpenid_sessionKey), openid_sessionKey);
        wx.setStorageSync('OPENID_SESSIONKEY', nOpenid_sessionKey);
    };
    User.getUserInfoByUid = function (uid) {
        return new Promise(function (resolve, reject) {
            var options = {
                url: '/user/query_user_info_by_uid',
                method: 'GET',
                data: {
                    uid: uid
                }
            };
            https_1.default.request(options).then(function (res) {
                console.log('成功获取userInfo', res);
                resolve(res);
            }).catch(function (err) {
                console.log('获取userInfo失败', err);
                reject(err);
            });
        });
    };
    User.getUserInfoStorage = function () {
        try {
            return wx.getStorageSync('USERINFO');
        }
        catch (err) {
            console.log('USERINFO提取失败', err);
            return {};
        }
    };
    User.getUserInfo = function () {
        try {
            var userInfo = wx.getStorageSync('userInfo');
            if (userInfo !== '') {
                userInfo = JSON.parse(userInfo);
            }
            else {
                userInfo = {};
            }
            return userInfo.userInfo;
        }
        catch (err) {
            console.log(err);
            return {};
        }
    };
    User.setUserInfo = function (userInfo) {
        try {
            var oldInfo = this.getUserInfo() || {};
            var newUserInfo = __assign(__assign({}, oldInfo), { userInfo: userInfo });
            wx.setStorageSync('userInfo', JSON.stringify(newUserInfo));
        }
        catch (err) {
            console.log(err);
        }
    };
    return User;
}());
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFtQztBQWdCbkM7SUFBQTtJQTZNQSxDQUFDO0lBdk1VLFVBQUssR0FBWjtRQUNJLE9BQU8sSUFBSSxPQUFPLENBQXdCLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDdEQsRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDWixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQU1iLENBQUM7Z0JBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFFVixDQUFDO2dCQUNELFFBQVEsRUFBRTtvQkFDTixFQUFFLENBQUMsS0FBSyxDQUFDO3dCQUNMLE9BQU8sRUFBRSxVQUFDLEdBQUc7NEJBQ1QsSUFBTSxJQUFJLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDOzRCQUNoQyxJQUFNLE9BQU8sR0FBRztnQ0FDWixHQUFHLEVBQUUsNEJBQTRCO2dDQUNqQyxNQUFNLEVBQUUsS0FBYztnQ0FDdEIsSUFBSSxFQUFFLElBQUk7NkJBQ2IsQ0FBQTs0QkFDRCxJQUFNLFFBQVEsR0FBRyxlQUFLLENBQUMsT0FBTyxDQUFzRCxPQUFPLENBQUMsQ0FBQzs0QkFDN0YsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7Z0NBR25CLElBQU0saUJBQWlCLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQ0FDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO2dDQUM5RCxJQUFJLENBQUMsMEJBQTBCLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQ0FDbkQsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUM7NEJBQy9CLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLEdBQVE7Z0NBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7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TU0sZ0JBQVcsR0FBbEIsVUFBbUIsUUFBb0M7UUFDbkQsSUFBSTtZQUNBLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDekMsSUFBTSxXQUFXLHlCQUNWLE9BQU8sS0FDVixRQUFRLFVBQUEsR0FDWCxDQUFBO1lBQ0QsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBN01ELElBNk1DO0FBSUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEh0dHBzIGZyb20gJy4uL3V0aWxzL2h0dHBzJztcblxuaW1wb3J0IHsgT3BlbmlkX1Nlc3Npb25LZXlUeXBlLCBDdXN0b21Vc2VySW5mbyB9IGZyb20gJy4uL3V0aWxzL3R5cGluZyc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uLy4uL3R5cGluZ3MvcmVzcG9uc2UnO1xuXG5cbmludGVyZmFjZSBHZXRVc2VySW5mb1Jlc3VsdCB7XG4gICAgYXZhdGFyVXJsPzogc3RyaW5nO1xuICAgIGNpdHk/OiBzdHJpbmc7XG4gICAgY291bnRyeT86IHN0cmluZztcbiAgICBnZW5kZXI/OiAwIHwgMSB8IDI7XG4gICAgbGFuZ3VhZ2U/OiAnZW4nIHwgJ3poX0NOJyB8ICd6aF9UVyc7XG4gICAgbmlja05hbWU/OiBzdHJpbmc7XG4gICAgcHJvdmluY2U/OiBzdHJpbmc7XG59XG5cbmNsYXNzIFVzZXIge1xuXG5cbiAgICAvKipcbiAgICAgKiDnmbvpmYbvvJogd3guY2hlY2tTZXNzaW9u5qOA5p+l5piv5ZCm6L+H5pyfIO+8nyB3eC5sb2dpbiArIOWKoOWFpee8k+WtmCA6IOS7jue8k+WtmOaPkOWPlm9wZW5pZCArIHNlc3Npb25fa2V5XG4gICAgICovXG4gICAgc3RhdGljIGxvZ2luKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8T3BlbmlkX1Nlc3Npb25LZXlUeXBlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3eC5jaGVja1Nlc3Npb24oe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3d4LmNoZWNrU2Vzc2lvbuaIkOWKnycscmVzKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBpZiAocmVzLmVyck1zZyA9PT0gJ2NoZWNrU2Vzc2lvbjpvaycpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHJlc29sdmUoVXNlci5nZXRPcGVuaWRTZXNzaW9uS2V5U3RvcmFnZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3eC5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHsgY29kZTogcmVzLmNvZGUgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvd3htYV9hdXRoL2NvZGVfdG9fc2Vzc2lvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcgYXMgXCJHRVRcIiwgLy8gdHPnsbvlnovmjqjmlq3kuI3lh7rmnaVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2dpblJlcyA9IEh0dHBzLnJlcXVlc3Q8UmVxdWVzdC5Db2RlVG9TZXNzaW9uUmVxLCBSZXNwb25zZS5Db2RlVG9TZXNzaW9uUmVzPihvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpblJlcy50aGVuKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBAVE9ETzrmraTlpITlupTor6XmoKHpqoxyZXPmmK/lkKblkIjms5VcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVuaWRfc2Vzc2lvbktleSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW7mjqXlj6Pojrflj5bnmoRvcGVuaWRfc2Vzc2lvbktleScsIG9wZW5pZF9zZXNzaW9uS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVXNlci5zZXRPcGVuaWRTZXNzaW9uS2V5U3RvcmFnZShvcGVuaWRfc2Vzc2lvbktleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUob3BlbmlkX3Nlc3Npb25LZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnI6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbG9naW7pgLvovpHmnInor68gLSAnLCBlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3eC5sb2dpbuaOpeWPo+iwg+eUqOWksei0pScsIGVycik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5o6I5p2D5L+h5oGvXG4gICAgICovXG4gICAgc3RhdGljIGdldEF1dGhvcml6ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEN1c3RvbVVzZXJJbmZvPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3eC5nZXRTZXR0aW5nKHtcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW3suaOiOadg+WkhOeQhuWmguS4i1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJJbmZvU3RvcmFnZSA9IFVzZXIuZ2V0VXNlckluZm9TdG9yYWdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodXNlckluZm9TdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bey5o6I5p2D77yM5LiU5pyJ57yT5a2YXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckluZm8gPSB1c2VySW5mb1N0b3JhZ2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh1c2VySW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlt7Lnu4/mjojmnYPvvIzkvYbml6DnvJPlrZhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyLnNldFVzZXJJbmZvU3RvcmFnZShyZXMudXNlckluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMudXNlckluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWboOe9kee7nOmXrumimFxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva51c2VyaW5mb+e8k+WtmFxuICAgICAqIEBwYXJhbSB1c2VySW5mbyBcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0VXNlckluZm9TdG9yYWdlKHVzZXJJbmZvOiBDdXN0b21Vc2VySW5mbyk6IHZvaWQge1xuICAgICAgICBjb25zdCBvVXNlckluZm8gPSB0aGlzLmdldFVzZXJJbmZvU3RvcmFnZSgpO1xuICAgICAgICBjb25zdCBuVXNlckluZm8gPSB7XG4gICAgICAgICAgICAuLi5vVXNlckluZm8sXG4gICAgICAgICAgICAuLi51c2VySW5mb1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBuVXNlckluZm9bJ3VzZXJuYW1lJ107XG4gICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdVU0VSSU5GTycsIG5Vc2VySW5mbyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+Wb3BlbmlkX3Nlc3Npb25LZXnnvJPlrZhcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0T3BlbmlkU2Vzc2lvbktleVN0b3JhZ2UoKTogT3BlbmlkX1Nlc3Npb25LZXlUeXBlIHtcbiAgICAgICAgcmV0dXJuIHd4LmdldFN0b3JhZ2VTeW5jKCdPUEVOSURfU0VTU0lPTktFWScpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rm9wZW5pZF9zZXNzaW9uS2V557yT5a2YXG4gICAgICogQHBhcmFtIG9wZW5pZF9zZXNzaW9uS2V5IFxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRPcGVuaWRTZXNzaW9uS2V5U3RvcmFnZShvcGVuaWRfc2Vzc2lvbktleTogT3BlbmlkX1Nlc3Npb25LZXlUeXBlKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9PcGVuaWRfc2Vzc2lvbktleSA9IHRoaXMuZ2V0T3BlbmlkU2Vzc2lvbktleVN0b3JhZ2UoKTtcbiAgICAgICAgY29uc3Qgbk9wZW5pZF9zZXNzaW9uS2V5ID0ge1xuICAgICAgICAgICAgLi4ub09wZW5pZF9zZXNzaW9uS2V5LFxuICAgICAgICAgICAgLi4ub3BlbmlkX3Nlc3Npb25LZXlcbiAgICAgICAgfTtcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ09QRU5JRF9TRVNTSU9OS0VZJywgbk9wZW5pZF9zZXNzaW9uS2V5KTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOS9v+eUqHVpZOiOt+WPlnVzZXJJbmZvXG4gICAgICogQHBhcmFtIHVpZCBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0VXNlckluZm9CeVVpZCh1aWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvdXNlci9xdWVyeV91c2VyX2luZm9fYnlfdWlkJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnIGFzIFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1aWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBIdHRwcy5yZXF1ZXN0KG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5oiQ5Yqf6I635Y+WdXNlckluZm8nLCByZXMpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPlnVzZXJJbmZv5aSx6LSlJywgZXJyKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG5cblxuICAgIC8qKlxuICAgICAqIOiOt+WPlnVzZXJpbmZv57yT5a2YXG4gICAgICovXG4gICAgc3RhdGljIGdldFVzZXJJbmZvU3RvcmFnZSgpOiBDdXN0b21Vc2VySW5mbyB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoJ1VTRVJJTkZPJylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVVNFUklORk/mj5Dlj5blpLHotKUnLCBlcnIpO1xuICAgICAgICAgICAgcmV0dXJuIHt9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmj5Dlj5bnvJPlrZjkuK3nmoR1c2VySW5mbyjkuI3ljIXmi6xvcGVuX2lkKVxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRVc2VySW5mbygpOiBHZXRVc2VySW5mb1Jlc3VsdCB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgdXNlckluZm8gPSB3eC5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKTtcbiAgICAgICAgICAgIGlmICh1c2VySW5mbyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICB1c2VySW5mbyA9IEpTT04ucGFyc2UodXNlckluZm8pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB1c2VySW5mbyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHVzZXJJbmZvLnVzZXJJbmZvO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlrZjlgqh1c2VySW5mbyjkuI3ljIXmi6xvcGVuX2lkKe+8jOWinumHj+WtmOWCqOOAguexu+S8vOS6jnRoaXMuc2VyRGF0YVxuICAgICAqIEBwYXJhbSB1c2VySW5mbyBcbiAgICAgKi9cbiAgICBzdGF0aWMgc2V0VXNlckluZm8odXNlckluZm86IFdlY2hhdE1pbmlwcm9ncmFtLlVzZXJJbmZvKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBvbGRJbmZvID0gdGhpcy5nZXRVc2VySW5mbygpIHx8IHt9O1xuICAgICAgICAgICAgY29uc3QgbmV3VXNlckluZm8gPSB7XG4gICAgICAgICAgICAgICAgLi4ub2xkSW5mbyxcbiAgICAgICAgICAgICAgICB1c2VySW5mb1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJywgSlNPTi5zdHJpbmdpZnkobmV3VXNlckluZm8pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdfQ==