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
                    if (res.errMsg === 'checkSession:ok') {
                        resolve(User.getOpenidSessionKeyStorage());
                    }
                },
                fail: function (err) {
                    wx.login({
                        success: function (res) {
                            var data = { code: res.code };
                            var options = {
                                url: '/wxma_auth/code_to_session',
                                method: 'POST',
                                data: data
                            };
                            var loginRes = https_1.default.request(options);
                            loginRes.then(function (res) {
                                var openid_sessionKey = res.data;
                                User.setOpenidSessionKeyStorage(openid_sessionKey);
                                resolve(openid_sessionKey);
                            }).catch(function (err) {
                                console.log('login逻辑有误 - ', err);
                                reject(err);
                            });
                        },
                        fail: function (err) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFtQztBQWVuQztJQUFBO0lBZ01BLENBQUM7SUExTFUsVUFBSyxHQUFaO1FBQ0ksT0FBTyxJQUFJLE9BQU8sQ0FBd0IsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN0RCxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUNaLE9BQU8sRUFBRSxVQUFDLEdBQUc7b0JBQ1QsSUFBSSxHQUFHLENBQUMsTUFBTSxLQUFLLGlCQUFpQixFQUFFO3dCQUNsQyxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUMsQ0FBQztxQkFDOUM7Z0JBQ0wsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO29CQUNOLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0JBQ0wsT0FBTyxFQUFFLFVBQUMsR0FBRzs0QkFDVCxJQUFNLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7NEJBQ2hDLElBQU0sT0FBTyxHQUFHO2dDQUNaLEdBQUcsRUFBRSw0QkFBNEI7Z0NBQ2pDLE1BQU0sRUFBRSxNQUFnQjtnQ0FDeEIsSUFBSSxFQUFFLElBQUk7NkJBQ2IsQ0FBQTs0QkFDRCxJQUFNLFFBQVEsR0FBRyxlQUFLLENBQUMsT0FBTyxDQUFzRCxPQUFPLENBQUMsQ0FBQzs0QkFDN0YsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFDLEdBQVE7Z0NBRW5CLElBQU0saUJBQWlCLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQ0FDbkMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0NBQ25ELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDOzRCQUMvQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQyxHQUFRO2dDQUNkLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dDQUNqQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7NEJBQ2YsQ0FBQyxDQUFDLENBQUE7d0JBQ04sQ0FBQzt3QkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHOzRCQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTt3QkFDZixDQUFDO3FCQUNKLENBQUMsQ0FBQTtnQkFDTixDQUFDO2FBQ0osQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBS00saUJBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksT0FBTyxDQUFpQixVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9DLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1YsT0FBTyxFQUFFLFVBQUMsR0FBRztvQkFFVCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixJQUFJLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTt3QkFFbkMsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO3dCQUNwQixJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzt3QkFDbEQsSUFBSSxlQUFlLEVBQUU7NEJBRWpCLFFBQVEsR0FBRyxlQUFlLENBQUM7NEJBQzNCLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzs0QkFDbEIsT0FBTzt5QkFDVjs2QkFBTTs0QkFFSCxFQUFFLENBQUMsV0FBVyxDQUFDO2dDQUNYLE9BQU8sRUFBRSxVQUFBLEdBQUc7b0NBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQ0FDdEIsT0FBTztnQ0FDWCxDQUFDO2dDQUNELElBQUksRUFBRSxVQUFBLEdBQUc7b0NBQ0wsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29DQUNaLE9BQU87Z0NBQ1gsQ0FBQzs2QkFDSixDQUFDLENBQUE7eUJBQ0w7cUJBQ0o7eUJBQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsRUFBRTt3QkFDM0MsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUNaLE9BQU87cUJBQ1Y7Z0JBQ0wsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO29CQUVOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDWixPQUFPO2dCQUNYLENBQUM7YUFDSixDQUFDLENBQUE7UUFxQk4sQ0FBQyxDQUFDLENBQUE7SUFFTixDQUFDO0lBT00sdUJBQWtCLEdBQXpCLFVBQTBCLFFBQXdCO1FBQzlDLElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzVDLElBQU0sU0FBUyx5QkFDUixTQUFTLEdBQ1QsUUFBUSxDQUNkLENBQUE7UUFDRCxPQUFPLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBS00sK0JBQTBCLEdBQWpDO1FBQ0ksT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbEQsQ0FBQztJQU1NLCtCQUEwQixHQUFqQyxVQUFrQyxpQkFBd0M7UUFDdEUsSUFBTSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUM3RCxJQUFNLGtCQUFrQix5QkFDakIsa0JBQWtCLEdBQ2xCLGlCQUFpQixDQUN2QixDQUFDO1FBQ0YsRUFBRSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFNTSx1QkFBa0IsR0FBekI7UUFDSSxJQUFJO1lBQ0EsT0FBTyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1NBQ3ZDO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUNqQyxPQUFPLEVBQUUsQ0FBQTtTQUNaO0lBQ0wsQ0FBQztJQUtNLGdCQUFXLEdBQWxCO1FBQ0ksSUFBSTtZQUNBLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0MsSUFBSSxRQUFRLEtBQUssRUFBRSxFQUFFO2dCQUNqQixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuQztpQkFBTTtnQkFDSCxRQUFRLEdBQUcsRUFBRSxDQUFDO2FBQ2pCO1lBQ0QsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDO1NBQzVCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sRUFBRSxDQUFDO1NBQ2I7SUFDTCxDQUFDO0lBTU0sZ0JBQVcsR0FBbEIsVUFBbUIsUUFBb0M7UUFDbkQsSUFBSTtZQUNBLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDekMsSUFBTSxXQUFXLHlCQUNWLE9BQU8sS0FDVixRQUFRLFVBQUEsR0FDWCxDQUFBO1lBQ0QsRUFBRSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3BCO0lBRUwsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBaE1ELElBZ01DO0FBSUQsa0JBQWUsSUFBSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEh0dHBzIGZyb20gJy4uL3V0aWxzL2h0dHBzJztcblxuaW1wb3J0IHsgT3BlbmlkX1Nlc3Npb25LZXlUeXBlLCBDdXN0b21Vc2VySW5mbyB9IGZyb20gJy4uL3V0aWxzL3R5cGluZyc7XG5cblxuaW50ZXJmYWNlIEdldFVzZXJJbmZvUmVzdWx0IHtcbiAgICBhdmF0YXJVcmw/OiBzdHJpbmc7XG4gICAgY2l0eT86IHN0cmluZztcbiAgICBjb3VudHJ5Pzogc3RyaW5nO1xuICAgIGdlbmRlcj86IDAgfCAxIHwgMjtcbiAgICBsYW5ndWFnZT86ICdlbicgfCAnemhfQ04nIHwgJ3poX1RXJztcbiAgICBuaWNrTmFtZT86IHN0cmluZztcbiAgICBwcm92aW5jZT86IHN0cmluZztcbn1cblxuY2xhc3MgVXNlciB7XG5cblxuICAgIC8qKlxuICAgICAqIOeZu+mZhu+8miB3eC5jaGVja1Nlc3Npb27mo4Dmn6XmmK/lkKbov4fmnJ8g77yfIHd4LmxvZ2luICsg5Yqg5YWl57yT5a2YIDog5LuO57yT5a2Y5o+Q5Y+Wb3BlbmlkICsgc2Vzc2lvbl9rZXlcbiAgICAgKi9cbiAgICBzdGF0aWMgbG9naW4oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxPcGVuaWRfU2Vzc2lvbktleVR5cGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHd4LmNoZWNrU2Vzc2lvbih7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmVyck1zZyA9PT0gJ2NoZWNrU2Vzc2lvbjpvaycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoVXNlci5nZXRPcGVuaWRTZXNzaW9uS2V5U3RvcmFnZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3eC5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHsgY29kZTogcmVzLmNvZGUgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvd3htYV9hdXRoL2NvZGVfdG9fc2Vzc2lvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnIGFzIFwiUE9TVFwiLCAvLyB0c+exu+Wei+aOqOaWreS4jeWHuuadpVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxvZ2luUmVzID0gSHR0cHMucmVxdWVzdDxSZXF1ZXN0LkNvZGVUb1Nlc3Npb25SZXEsIFJlc3BvbnNlLkNvZGVUb1Nlc3Npb25SZXM+KG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2luUmVzLnRoZW4oKHJlczogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOatpOWkhOW6lOivpeagoemqjHJlc+aYr+WQpuWQiOazlVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVuaWRfc2Vzc2lvbktleSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBVc2VyLnNldE9wZW5pZFNlc3Npb25LZXlTdG9yYWdlKG9wZW5pZF9zZXNzaW9uS2V5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvcGVuaWRfc2Vzc2lvbktleSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycjogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbumAu+i+keacieivryAtICcsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaOiOadg+S/oeaBr1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRBdXRob3JpemUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxDdXN0b21Vc2VySW5mbz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgd3guZ2V0U2V0dGluZyh7XG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmF1dGhTZXR0aW5nWydzY29wZS51c2VySW5mbyddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlt7LmjojmnYPlpITnkIblpoLkuItcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1c2VySW5mb1N0b3JhZ2UgPSBVc2VyLmdldFVzZXJJbmZvU3RvcmFnZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJJbmZvU3RvcmFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOW3suaOiOadg++8jOS4lOaciee8k+WtmFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gdXNlckluZm9TdG9yYWdlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodXNlckluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bey57uP5o6I5p2D77yM5L2G5peg57yT5a2YXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guZ2V0VXNlckluZm8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMudXNlckluZm8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBlcnIgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoe30pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWboOe9kee7nOmXrumimFxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgICAgIC8vIHd4LmdldFNldHRpbmcoe1xuICAgICAgICAgICAgLy8gXHRzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAgICAgLy8gXHRcdGlmIChyZXMuYXV0aFNldHRpbmdbJ3Njb3BlLnVzZXJJbmZvJ10pIHtcbiAgICAgICAgICAgIC8vIFx0XHRcdC8vIOW3sue7j+aOiOadg++8jOWPr+S7peebtOaOpeiwg+eUqCBnZXRVc2VySW5mbyDojrflj5blpLTlg4/mmLXnp7DvvIzkuI3kvJrlvLnmoYZcbiAgICAgICAgICAgIC8vIFx0XHRcdHd4LmdldFVzZXJJbmZvKHtcbiAgICAgICAgICAgIC8vIFx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcbiAgICAgICAgICAgIC8vIFx0XHRcdFx0XHQvLyDlj6/ku6XlsIYgcmVzIOWPkemAgee7meWQjuWPsOino+eggeWHuiB1bmlvbklkXG4gICAgICAgICAgICAvLyBcdFx0XHRcdFx0dGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG5cbiAgICAgICAgICAgIC8vIFx0XHRcdFx0XHQvLyDnlLHkuo4gZ2V0VXNlckluZm8g5piv572R57uc6K+35rGC77yM5Y+v6IO95Lya5ZyoIFBhZ2Uub25Mb2FkIOS5i+WQjuaJjei/lOWbnlxuICAgICAgICAgICAgLy8gXHRcdFx0XHRcdC8vIOaJgOS7peatpOWkhOWKoOWFpSBjYWxsYmFjayDku6XpmLLmraLov5nnp43mg4XlhrVcbiAgICAgICAgICAgIC8vIFx0XHRcdFx0XHRpZiAodGhpcy51c2VySW5mb1JlYWR5Q2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIFx0XHRcdFx0XHRcdHRoaXMudXNlckluZm9SZWFkeUNhbGxiYWNrKHJlcylcbiAgICAgICAgICAgIC8vIFx0XHRcdFx0XHR9XG4gICAgICAgICAgICAvLyBcdFx0XHRcdH0sXG4gICAgICAgICAgICAvLyBcdFx0XHR9KVxuICAgICAgICAgICAgLy8gXHRcdH1cbiAgICAgICAgICAgIC8vIFx0fSxcbiAgICAgICAgICAgIC8vIH0pXG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOiuvue9rnVzZXJpbmZv57yT5a2YXG4gICAgICogQHBhcmFtIHVzZXJJbmZvIFxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRVc2VySW5mb1N0b3JhZ2UodXNlckluZm86IEN1c3RvbVVzZXJJbmZvKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IG9Vc2VySW5mbyA9IHRoaXMuZ2V0VXNlckluZm9TdG9yYWdlKCk7XG4gICAgICAgIGNvbnN0IG5Vc2VySW5mbyA9IHtcbiAgICAgICAgICAgIC4uLm9Vc2VySW5mbyxcbiAgICAgICAgICAgIC4uLnVzZXJJbmZvXG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIG5Vc2VySW5mb1sndXNlcm5hbWUnXTtcbiAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ1VTRVJJTkZPJywgblVzZXJJbmZvKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5ZvcGVuaWRfc2Vzc2lvbktleee8k+WtmFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRPcGVuaWRTZXNzaW9uS2V5U3RvcmFnZSgpOiBPcGVuaWRfU2Vzc2lvbktleVR5cGUge1xuICAgICAgICByZXR1cm4gd3guZ2V0U3RvcmFnZVN5bmMoJ09QRU5JRF9TRVNTSU9OS0VZJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572ub3BlbmlkX3Nlc3Npb25LZXnnvJPlrZhcbiAgICAgKiBAcGFyYW0gb3BlbmlkX3Nlc3Npb25LZXkgXG4gICAgICovXG4gICAgc3RhdGljIHNldE9wZW5pZFNlc3Npb25LZXlTdG9yYWdlKG9wZW5pZF9zZXNzaW9uS2V5OiBPcGVuaWRfU2Vzc2lvbktleVR5cGUpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb09wZW5pZF9zZXNzaW9uS2V5ID0gdGhpcy5nZXRPcGVuaWRTZXNzaW9uS2V5U3RvcmFnZSgpO1xuICAgICAgICBjb25zdCBuT3BlbmlkX3Nlc3Npb25LZXkgPSB7XG4gICAgICAgICAgICAuLi5vT3BlbmlkX3Nlc3Npb25LZXksXG4gICAgICAgICAgICAuLi5vcGVuaWRfc2Vzc2lvbktleVxuICAgICAgICB9O1xuICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnT1BFTklEX1NFU1NJT05LRVknLCBuT3BlbmlkX3Nlc3Npb25LZXkpO1xuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog6I635Y+WdXNlcmluZm/nvJPlrZhcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0VXNlckluZm9TdG9yYWdlKCk6IEN1c3RvbVVzZXJJbmZvIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB3eC5nZXRTdG9yYWdlU3luYygnVVNFUklORk8nKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVU0VSSU5GT+aPkOWPluWksei0pScsIGVycik7XG4gICAgICAgICAgICByZXR1cm4ge31cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaPkOWPlue8k+WtmOS4reeahHVzZXJJbmZvKOS4jeWMheaLrG9wZW5faWQpXG4gICAgICovXG4gICAgc3RhdGljIGdldFVzZXJJbmZvKCk6IEdldFVzZXJJbmZvUmVzdWx0IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpO1xuICAgICAgICAgICAgaWYgKHVzZXJJbmZvICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mbyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXNlckluZm8udXNlckluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWtmOWCqHVzZXJJbmZvKOS4jeWMheaLrG9wZW5faWQp77yM5aKe6YeP5a2Y5YKo44CC57G75Ly85LqOdGhpcy5zZXJEYXRhXG4gICAgICogQHBhcmFtIHVzZXJJbmZvIFxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRVc2VySW5mbyh1c2VySW5mbzogV2VjaGF0TWluaXByb2dyYW0uVXNlckluZm8pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG9sZEluZm8gPSB0aGlzLmdldFVzZXJJbmZvKCkgfHwge307XG4gICAgICAgICAgICBjb25zdCBuZXdVc2VySW5mbyA9IHtcbiAgICAgICAgICAgICAgICAuLi5vbGRJbmZvLFxuICAgICAgICAgICAgICAgIHVzZXJJbmZvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeShuZXdVc2VySW5mbykpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXX0=