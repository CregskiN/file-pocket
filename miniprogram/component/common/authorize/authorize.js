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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aG9yaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsOERBQXdDO0FBQ3hDLCtEQUF5QztBQUV6QyxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUVyQixTQUFTLENBQUM7SUFJVCxVQUFVLEVBQUU7UUFHWCxZQUFZLEVBQUUsT0FBTztLQUNyQjtJQUtELElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxJQUFJO1FBQ1gsT0FBTyxFQUFFLGdCQUFnQjtLQUN6QjtJQUtELE9BQU8sRUFBRTtRQU1SLFdBQVcsRUFBWCxVQUFZLENBQUM7WUFBYixpQkFrQ0M7WUFqQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNmLElBQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1lBQ25DLElBQUksUUFBUSxFQUFFO2dCQUNiLGNBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDbEMsSUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUMvQixJQUFBLDRDQUFNLENBQWtDO2dCQUMxQyxJQUFBLHdDQUFtRCxFQUFqRCxzQkFBUSxFQUFFLHdCQUF1QyxDQUFDO2dCQUMxRCxJQUFNLE9BQU8sR0FBRztvQkFDZixHQUFHLEVBQUUsa0JBQWtCO29CQUN2QixNQUFNLEVBQUUsTUFBZ0I7b0JBQ3hCLElBQUksRUFBRTt3QkFDTCxNQUFNLFFBQUE7d0JBQ04sUUFBUSxFQUFFLFFBQWtCO3dCQUM1QixTQUFTLEVBQUUsU0FBbUI7cUJBQzlCO2lCQUNELENBQUE7Z0JBQ0QsZUFBSyxDQUFDLE9BQU8sQ0FBOEMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztvQkFFM0UsY0FBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDbEMsSUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7b0JBQzNDLEdBQUcsQ0FBQyxhQUFhLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFFcEQsS0FBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFFaEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztvQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFFNUIsQ0FBQyxDQUFDLENBQUE7YUFDRjtpQkFBTTtnQkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNaLEtBQUssRUFBRSxNQUFNO2lCQUNiLENBQUMsQ0FBQTthQUNGO1FBQ0YsQ0FBQztLQUNEO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L2NvbW1vbi9hdXRob3JpemUvYXV0aG9yaXplLmpzXG5pbXBvcnQgVXNlciBmcm9tICcuLi8uLi8uLi9tb2RlbHMvVXNlcic7XG5pbXBvcnQgSHR0cHMgZnJvbSAnLi4vLi4vLi4vdXRpbHMvaHR0cHMnO1xuXG5jb25zdCBhcHAgPSBnZXRBcHAoKTtcblxuQ29tcG9uZW50KHtcblx0LyoqXG5cdCAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuXHQgKi9cblx0cHJvcGVydGllczoge1xuXHRcdC8vIHRpdGxlOiBTdHJpbmcsXG5cdFx0Ly8gY29udGVudDogU3RyaW5nLFxuXHRcdGlzQXV0aG9yaXplZDogQm9vbGVhbixcblx0fSxcblxuXHQvKipcblx0ICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG5cdCAqL1xuXHRkYXRhOiB7XG5cdFx0dGl0bGU6ICfmj5DnpLonLFxuXHRcdGNvbnRlbnQ6ICfor7fmjojmnYPmiJHku6zkvb/nlKjmgqjnmoTmmLXnp7DjgIHlpLTlg48nXG5cdH0sXG5cblx0LyoqXG5cdCAqIOe7hOS7tueahOaWueazleWIl+ihqFxuXHQgKi9cblx0bWV0aG9kczoge1xuXG5cdFx0LyoqXG5cdFx0ICog5o6I5p2D5LqL5Lu2XG5cdFx0ICogQHBhcmFtIGUgXG5cdFx0ICovXG5cdFx0b25BdXRob3JpemUoZSkge1xuXHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHRjb25zdCB1c2VySW5mbyA9IGUuZGV0YWlsLnVzZXJJbmZvO1xuXHRcdFx0aWYgKHVzZXJJbmZvKSB7XG5cdFx0XHRcdFVzZXIuc2V0VXNlckluZm9TdG9yYWdlKHVzZXJJbmZvKTtcblx0XHRcdFx0Y29uc3QgZ2xvYmFsRGF0YSA9IGFwcC5nZXRHbG9iYWxEYXRhKCk7XG5cdFx0XHRcdGNvbnN0IHsgb3BlbmlkIH0gPSBnbG9iYWxEYXRhLm9wZW5pZF9zZXNzaW9uS2V5O1xuXHRcdFx0XHRjb25zdCB7IG5pY2tOYW1lLCBhdmF0YXJVcmwgfSA9IFVzZXIuZ2V0VXNlckluZm9TdG9yYWdlKCk7XG5cdFx0XHRcdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0XHRcdFx0dXJsOiAnL3d4bWFfYXV0aC9sb2dpbicsXG5cdFx0XHRcdFx0bWV0aG9kOiAnUE9TVCcgYXMgXCJQT1NUXCIsXG5cdFx0XHRcdFx0ZGF0YToge1xuXHRcdFx0XHRcdFx0b3BlbmlkLFxuXHRcdFx0XHRcdFx0dXNlcm5hbWU6IG5pY2tOYW1lIGFzIHN0cmluZyxcblx0XHRcdFx0XHRcdGF2YXRhclVybDogYXZhdGFyVXJsIGFzIHN0cmluZ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRIdHRwcy5yZXF1ZXN0PFJlcXVlc3QuQXV0aG9yaXplUmVxLCBSZXNwb25zZS5BdXRob3JpemVSZXM+KG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygn5o6I5p2D5o6l5Y+j6L+U5ZueJywgcmVzKTtcblx0XHRcdFx0XHRVc2VyLnNldFVzZXJJbmZvU3RvcmFnZShyZXMuZGF0YSk7XG5cdFx0XHRcdFx0Y29uc3QgdXNlckluZm8gPSBVc2VyLmdldFVzZXJJbmZvU3RvcmFnZSgpO1xuXHRcdFx0XHRcdGFwcC5zZXRHbG9iYWxEYXRhKHsgdXNlckluZm8sIGlzQXV0aG9yaXplZDogdHJ1ZSB9KTtcblx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZygn5o6I5p2D6YC76L6R5a6M5oiQ77yMZ2xvYmFsRGF0YSAtICcsIGFwcC5nbG9iYWxEYXRhKTtcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXJFdmVudCgnYXV0aG9yaXplJyk7XG5cblx0XHRcdFx0fSkuY2F0Y2goZXJyID0+IHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZygn5o6I5p2D5o6l5Y+j5Ye66ZSZJywgZXJyKTtcblxuXHRcdFx0XHR9KVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHR0aXRsZTogJ+aOiOadg+Wksei0pSdcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pXG4iXX0=