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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFtQztBQWVuQztJQUFBO0lBNE1BLENBQUM7SUF2TVUsVUFBSyxHQUFaO1FBQ0ksT0FBTyxJQUFJLE9BQU8sQ0FBd0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN0RCxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUNaLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBTWIsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO2dCQUVWLENBQUM7Z0JBQ0QsUUFBUSxFQUFFO29CQUNOLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ0wsT0FBTyxFQUFFLFVBQUMsR0FBRzs0QkFDVCxJQUFNLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQ2hDLElBQU0sT0FBTyxHQUFHO2dDQUNaLEdBQUcsRUFBRSw0QkFBNEI7Z0NBQ2pDLE1BQU0sRUFBRSxLQUFjO2dDQUN0QixJQUFJLEVBQUUsSUFBSTs2QkFDYixDQUFBOzRCQUNELElBQU0sUUFBUSxHQUFHLGVBQUssQ0FBQyxPQUFPLENBQXNELE9BQU8sQ0FBQyxDQUFDOzRCQUM3RixRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBUTtnQ0FHbkIsSUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO2dDQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLGlCQUFpQixDQUFDLENBQUM7Z0NBQzlELElBQUksQ0FBQywwQkFBMEIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dDQUNuRCxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQzs0QkFDL0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBUTtnQ0FDZCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztn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TSxnQkFBVyxHQUFsQixVQUFtQixRQUFvQztRQUNuRCxJQUFJO1lBQ0EsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUN6QyxJQUFNLFdBQVcseUJBQ1YsT0FBTyxLQUNWLFFBQVEsVUFBQSxHQUNYLENBQUE7WUFDRCxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDOUQ7UUFBQyxPQUFPLEdBQUcsRUFBRTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7SUFDTCxDQUFDO0lBQ0wsV0FBQztBQUFELENBQUMsQUE1TUQsSUE0TUM7QUFJRCxrQkFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSHR0cHMgZnJvbSAnLi4vdXRpbHMvaHR0cHMnO1xuXG5pbXBvcnQgeyBPcGVuaWRfU2Vzc2lvbktleVR5cGUsIEN1c3RvbVVzZXJJbmZvIH0gZnJvbSAnLi4vdXRpbHMvdHlwaW5nJztcblxuXG5pbnRlcmZhY2UgR2V0VXNlckluZm9SZXN1bHQge1xuICAgIGF2YXRhclVybD86IHN0cmluZztcbiAgICBjaXR5Pzogc3RyaW5nO1xuICAgIGNvdW50cnk/OiBzdHJpbmc7XG4gICAgZ2VuZGVyPzogMCB8IDEgfCAyO1xuICAgIGxhbmd1YWdlPzogJ2VuJyB8ICd6aF9DTicgfCAnemhfVFcnO1xuICAgIG5pY2tOYW1lPzogc3RyaW5nO1xuICAgIHByb3ZpbmNlPzogc3RyaW5nO1xufVxuXG5jbGFzcyBVc2VyIHtcblxuICAgIC8qKlxuICAgICAqIOeZu+mZhu+8miB3eC5jaGVja1Nlc3Npb27mo4Dmn6XmmK/lkKbov4fmnJ8g77yfIHd4LmxvZ2luICsg5Yqg5YWl57yT5a2YIDog5LuO57yT5a2Y5o+Q5Y+Wb3BlbmlkICsgc2Vzc2lvbl9rZXlcbiAgICAgKi9cbiAgICBzdGF0aWMgbG9naW4oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxPcGVuaWRfU2Vzc2lvbktleVR5cGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHd4LmNoZWNrU2Vzc2lvbih7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnd3guY2hlY2tTZXNzaW9u5oiQ5YqfJyxyZXMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIChyZXMuZXJyTXNnID09PSAnY2hlY2tTZXNzaW9uOm9rJykge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcmVzb2x2ZShVc2VyLmdldE9wZW5pZFNlc3Npb25LZXlTdG9yYWdlKCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0geyBjb2RlOiByZXMuY29kZSB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy93eG1hX2F1dGgvY29kZV90b19zZXNzaW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyBhcyBcIkdFVFwiLCAvLyB0c+exu+Wei+aOqOaWreS4jeWHuuadpVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVzID0gSHR0cHMucmVxdWVzdDxSZXF1ZXN0LkNvZGVUb1Nlc3Npb25SZXEsIFJlc3BvbnNlLkNvZGVUb1Nlc3Npb25SZXM+KG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEBUT0RPOuatpOWkhOW6lOivpeagoemqjHJlc+aYr+WQpuWQiOazlVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5pZF9zZXNzaW9uS2V5ID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbuaOpeWPo+iOt+WPlueahG9wZW5pZF9zZXNzaW9uS2V5Jywgb3BlbmlkX3Nlc3Npb25LZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyLnNldE9wZW5pZFNlc3Npb25LZXlTdG9yYWdlKG9wZW5pZF9zZXNzaW9uS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcGVuaWRfc2Vzc2lvbktleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbumAu+i+keacieivryAtICcsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3d4LmxvZ2lu5o6l5Y+j6LCD55So5aSx6LSlJywgZXJyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmjojmnYPkv6Hmga9cbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0QXV0aG9yaXplKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8Q3VzdG9tVXNlckluZm8+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHd4LmdldFNldHRpbmcoe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bey5o6I5p2D5aSE55CG5aaC5LiLXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlckluZm8gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXNlckluZm9TdG9yYWdlID0gVXNlci5nZXRVc2VySW5mb1N0b3JhZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VySW5mb1N0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlt7LmjojmnYPvvIzkuJTmnInnvJPlrZhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VySW5mbyA9IHVzZXJJbmZvU3RvcmFnZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW3sue7j+aOiOadg++8jOS9huaXoOe8k+WtmFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVzZXIuc2V0VXNlckluZm9TdG9yYWdlKHJlcy51c2VySW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy51c2VySW5mbyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXJlcy5hdXRoU2V0dGluZ1snc2NvcGUudXNlckluZm8nXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7fSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Zug572R57uc6Zeu6aKYXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rnVzZXJpbmZv57yT5a2YXG4gICAgICogQHBhcmFtIHVzZXJJbmZvIFxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRVc2VySW5mb1N0b3JhZ2UodXNlckluZm86IEN1c3RvbVVzZXJJbmZvKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9Vc2VySW5mbyA9IHRoaXMuZ2V0VXNlckluZm9TdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IG5Vc2VySW5mbyA9IHtcbiAgICAgICAgICAgIC4uLm9Vc2VySW5mbyxcbiAgICAgICAgICAgIC4uLnVzZXJJbmZvXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIG5Vc2VySW5mb1sndXNlcm5hbWUnXTtcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ1VTRVJJTkZPJywgblVzZXJJbmZvKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5ZvcGVuaWRfc2Vzc2lvbktleee8k+WtmFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRPcGVuaWRTZXNzaW9uS2V5U3RvcmFnZSgpOiBPcGVuaWRfU2Vzc2lvbktleVR5cGUge1xuICAgICAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoJ09QRU5JRF9TRVNTSU9OS0VZJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572ub3BlbmlkX3Nlc3Npb25LZXnnvJPlrZhcbiAgICAgKiBAcGFyYW0gb3BlbmlkX3Nlc3Npb25LZXkgXG4gICAgICovXG4gICAgc3RhdGljIHNldE9wZW5pZFNlc3Npb25LZXlTdG9yYWdlKG9wZW5pZF9zZXNzaW9uS2V5OiBPcGVuaWRfU2Vzc2lvbktleVR5cGUpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb09wZW5pZF9zZXNzaW9uS2V5ID0gdGhpcy5nZXRPcGVuaWRTZXNzaW9uS2V5U3RvcmFnZSgpO1xuICAgICAgICBjb25zdCBuT3BlbmlkX3Nlc3Npb25LZXkgPSB7XG4gICAgICAgICAgICAuLi5vT3BlbmlkX3Nlc3Npb25LZXksXG4gICAgICAgICAgICAuLi5vcGVuaWRfc2Vzc2lvbktleVxuICAgICAgICB9O1xuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnT1BFTklEX1NFU1NJT05LRVknLCBuT3BlbmlkX3Nlc3Npb25LZXkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog5L2/55SodWlk6I635Y+WdXNlckluZm9cbiAgICAgKiBAcGFyYW0gdWlkIFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRVc2VySW5mb0J5VWlkKHVpZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHVybDogJy91c2VyL3F1ZXJ5X3VzZXJfaW5mb19ieV91aWQnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcgYXMgXCJHRVRcIixcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHVpZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEh0dHBzLnJlcXVlc3Qob3B0aW9ucykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiJDlip/ojrflj5Z1c2VySW5mbycsIHJlcyk7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+WdXNlckluZm/lpLHotKUnLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgLyoqXG4gICAgICog6I635Y+WdXNlcmluZm/nvJPlrZhcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0VXNlckluZm9TdG9yYWdlKCk6IEN1c3RvbVVzZXJJbmZvIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3eC5nZXRTdG9yYWdlU3luYygnVVNFUklORk8nKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVU0VSSU5GT+aPkOWPluWksei0pScsIGVycik7XG4gICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaPkOWPlue8k+WtmOS4reeahHVzZXJJbmZvKOS4jeWMheaLrG9wZW5faWQpXG4gICAgICovXG4gICAgc3RhdGljIGdldFVzZXJJbmZvKCk6IEdldFVzZXJJbmZvUmVzdWx0IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpO1xuICAgICAgICAgICAgaWYgKHVzZXJJbmZvICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mbyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXNlckluZm8udXNlckluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWtmOWCqHVzZXJJbmZvKOS4jeWMheaLrG9wZW5faWQp77yM5aKe6YeP5a2Y5YKo44CC57G75Ly85LqOdGhpcy5zZXJEYXRhXG4gICAgICogQHBhcmFtIHVzZXJJbmZvIFxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRVc2VySW5mbyh1c2VySW5mbzogV2VjaGF0TWluaXByb2dyYW0uVXNlckluZm8pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG9sZEluZm8gPSB0aGlzLmdldFVzZXJJbmZvKCkgfHwge307XG4gICAgICAgICAgICBjb25zdCBuZXdVc2VySW5mbyA9IHtcbiAgICAgICAgICAgICAgICAuLi5vbGRJbmZvLFxuICAgICAgICAgICAgICAgIHVzZXJJbmZvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeShuZXdVc2VySW5mbykpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl19