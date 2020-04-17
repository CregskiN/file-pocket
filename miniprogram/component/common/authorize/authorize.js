"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../../../models/User"));
var https_1 = __importDefault(require("../../../utils/https"));
var app = getApp();
Component({
    properties: {
        isAuthorized: Boolean,
    },
    data: {
        title: '提示',
        content: '请授权我们使用您的昵称、头像'
    },
    methods: {
        onAuthorize: function (e) {
            var _this = this;
            console.log(e);
            var userInfo = e.detail.userInfo;
            if (userInfo) {
                User_1.default.setUserInfoStorage(userInfo);
                var globalData = app.getGlobalData();
                var openid = globalData.openid_sessionKey.openid;
                var _a = User_1.default.getUserInfoStorage(), nickName = _a.nickName, avatarUrl = _a.avatarUrl;
                var options = {
                    url: '/wxma_auth/login',
                    method: 'POST',
                    data: {
                        openid: openid,
                        username: nickName,
                        avatarUrl: avatarUrl
                    }
                };
                https_1.default.request(options).then(function (res) {
                    User_1.default.setUserInfoStorage(res.data);
                    var userInfo = User_1.default.getUserInfoStorage();
                    app.setGlobalData({ userInfo: userInfo, isAuthorized: true });
                    _this.triggerEvent('authorize');
                }).catch(function (err) {
                    console.log('授权接口出错', err);
                });
            }
            else {
                wx.showToast({
                    title: '授权失败'
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aG9yaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsOERBQXdDO0FBQ3hDLCtEQUF5QztBQUd6QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUVyQixTQUFTLENBQUM7SUFJVCxVQUFVLEVBQUU7UUFHWCxZQUFZLEVBQUUsT0FBTztLQUNyQjtJQUtELElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxJQUFJO1FBQ1gsT0FBTyxFQUFFLGdCQUFnQjtLQUN6QjtJQUtELE9BQU8sRUFBRTtRQU1SLFdBQVcsRUFBWCxVQUFZLENBQUM7WUFBYixpQkFrQ0M7WUFqQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ25DLElBQUksUUFBUSxFQUFFO2dCQUNiLGNBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEMsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMvQixJQUFBLDRDQUFNLENBQWtDO2dCQUMxQyxJQUFBLHdDQUFtRCxFQUFqRCxzQkFBUSxFQUFFLHdCQUF1QyxDQUFDO2dCQUMxRCxJQUFNLE9BQU8sR0FBRztvQkFDZixHQUFHLEVBQUUsa0JBQWtCO29CQUN2QixNQUFNLEVBQUUsTUFBZ0I7b0JBQ3hCLElBQUksRUFBRTt3QkFDTCxNQUFNLFFBQUE7d0JBQ04sUUFBUSxFQUFFLFFBQWtCO3dCQUM1QixTQUFTLEVBQUUsU0FBbUI7cUJBQzlCO2lCQUNELENBQUE7Z0JBQ0QsZUFBSyxDQUFDLE9BQU8sQ0FBOEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztvQkFFM0UsY0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQzNDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFFcEQsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFaEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFFNUIsQ0FBQyxDQUFDLENBQUE7YUFDRjtpQkFBTTtnQkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNaLEtBQUssRUFBRSxNQUFNO2lCQUNiLENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQztLQUNEO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L2NvbW1vbi9hdXRob3JpemUvYXV0aG9yaXplLmpzXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvVXNlcic7XG5pbXBvcnQgSHR0cHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cHMnO1xuaW1wb3J0IHsgUmVzcG9uc2UgfSBmcm9tICcuLi8uLi8uLi8uLi90eXBpbmdzL3Jlc3BvbnNlJztcblxuY29uc3QgYXBwID0gZ2V0QXBwKCk7XG5cbkNvbXBvbmVudCh7XG5cdC8qKlxuXHQgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcblx0ICovXG5cdHByb3BlcnRpZXM6IHtcblx0XHQvLyB0aXRsZTogU3RyaW5nLFxuXHRcdC8vIGNvbnRlbnQ6IFN0cmluZyxcblx0XHRpc0F1dGhvcml6ZWQ6IEJvb2xlYW4sXG5cdH0sXG5cblx0LyoqXG5cdCAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuXHQgKi9cblx0ZGF0YToge1xuXHRcdHRpdGxlOiAn5o+Q56S6Jyxcblx0XHRjb250ZW50OiAn6K+35o6I5p2D5oiR5Lus5L2/55So5oKo55qE5pi156ew44CB5aS05YOPJ1xuXHR9LFxuXG5cdC8qKlxuXHQgKiDnu4Tku7bnmoTmlrnms5XliJfooahcblx0ICovXG5cdG1ldGhvZHM6IHtcblxuXHRcdC8qKlxuXHRcdCAqIOaOiOadg+S6i+S7tlxuXHRcdCAqIEBwYXJhbSBlIFxuXHRcdCAqL1xuXHRcdG9uQXV0aG9yaXplKGUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdFx0Y29uc3QgdXNlckluZm8gPSBlLmRldGFpbC51c2VySW5mbztcblx0XHRcdGlmICh1c2VySW5mbykge1xuXHRcdFx0XHRVc2VyLnNldFVzZXJJbmZvU3RvcmFnZSh1c2VySW5mbyk7XG5cdFx0XHRcdGNvbnN0IGdsb2JhbERhdGEgPSBhcHAuZ2V0R2xvYmFsRGF0YSgpO1xuXHRcdFx0XHRjb25zdCB7IG9wZW5pZCB9ID0gZ2xvYmFsRGF0YS5vcGVuaWRfc2Vzc2lvbktleTtcblx0XHRcdFx0Y29uc3QgeyBuaWNrTmFtZSwgYXZhdGFyVXJsIH0gPSBVc2VyLmdldFVzZXJJbmZvU3RvcmFnZSgpO1xuXHRcdFx0XHRjb25zdCBvcHRpb25zID0ge1xuXHRcdFx0XHRcdHVybDogJy93eG1hX2F1dGgvbG9naW4nLFxuXHRcdFx0XHRcdG1ldGhvZDogJ1BPU1QnIGFzIFwiUE9TVFwiLFxuXHRcdFx0XHRcdGRhdGE6IHtcblx0XHRcdFx0XHRcdG9wZW5pZCxcblx0XHRcdFx0XHRcdHVzZXJuYW1lOiBuaWNrTmFtZSBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0XHRhdmF0YXJVcmw6IGF2YXRhclVybCBhcyBzdHJpbmdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0SHR0cHMucmVxdWVzdDxSZXF1ZXN0LkF1dGhvcml6ZVJlcSwgUmVzcG9uc2UuQXV0aG9yaXplUmVzPihvcHRpb25zKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ+aOiOadg+aOpeWPo+i/lOWbnicsIHJlcyk7XG5cdFx0XHRcdFx0VXNlci5zZXRVc2VySW5mb1N0b3JhZ2UocmVzLmRhdGEpO1xuXHRcdFx0XHRcdGNvbnN0IHVzZXJJbmZvID0gVXNlci5nZXRVc2VySW5mb1N0b3JhZ2UoKTtcblx0XHRcdFx0XHRhcHAuc2V0R2xvYmFsRGF0YSh7IHVzZXJJbmZvLCBpc0F1dGhvcml6ZWQ6IHRydWUgfSk7XG5cdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coJ+aOiOadg+mAu+i+keWujOaIkO+8jGdsb2JhbERhdGEgLSAnLCBhcHAuZ2xvYmFsRGF0YSk7XG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyRXZlbnQoJ2F1dGhvcml6ZScpO1xuXG5cdFx0XHRcdH0pLmNhdGNoKGVyciA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coJ+aOiOadg+aOpeWPo+WHuumUmScsIGVycik7XG5cblx0XHRcdFx0fSlcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0dGl0bGU6ICfmjojmnYPlpLHotKUnXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KVxuIl19