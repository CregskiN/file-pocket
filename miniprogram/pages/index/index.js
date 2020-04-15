"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
var https_1 = __importDefault(require("../../utils/https"));
var app = getApp();
var floatBtnIconClass = 'iconfont icon-bingtu';
Page({
    data: {
        teams: [],
        isLogin: true,
        buttonTop: 10000,
        buttonLeft: 10000,
        windowHeight: 0,
        windowWidth: 0,
        startPoint: null,
        floatBtnIconClass: '',
        isAuthorized: true,
        userInfo: {},
    },
    onCreate: function (e) {
        wx.redirectTo({
            url: '/pages/found/found'
        });
    },
    onAuthorize: function () {
        console.log('toogle isAuthorized', this.data);
        this.setData({
            isAuthorized: true
        });
        this._getTeamList();
    },
    onLoad: function () {
        var _this = this;
        var init = app.init();
        init.then(function (globalData) {
            var isAuthorized = globalData.isAuthorized, isLogin = globalData.isLogin, userInfo = globalData.userInfo;
            console.log('Index.onload - globalData is', globalData);
            _this.setData({
                userInfo: userInfo,
                isLogin: isLogin,
                isAuthorized: isAuthorized,
                floatBtnIconClass: floatBtnIconClass,
            });
            _this._getTeamList();
        }).catch(function (err) {
            console.log('页面初始化错误', err);
        });
    },
    _getTeamList: function () {
        var _this = this;
        var uid = app.getGlobalData().userInfo.uid;
        var options = {
            url: '/user/query_created_team_list_by_uid',
            method: "GET",
            data: {
                uid: uid
            }
        };
        https_1.default.request(options).then(function (res) {
            console.log('获取teams数据成功！', res);
            _this.setData({
                teams: res.data
            });
        });
    },
    onReady: function () {
        var _this = this;
        util_1.getWindowInfo().then(function (res) {
            var windowHeight = res.windowHeight, windowWidth = res.windowWidth;
            _this.setData({
                windowHeight: res.windowHeight,
                windowWidth: res.windowWidth
            });
            _this._adjustFloatButtonLocation(windowHeight, windowWidth);
        });
    },
    _adjustFloatButtonLocation: function (windowHeight, windowWidth) {
        if (this.data.buttonLeft >= this.data.windowWidth) {
            this.setData({
                buttonLeft: this.data.windowWidth - 80
            });
        }
        if (this.data.buttonTop >= this.data.windowHeight) {
            this.setData({
                buttonTop: this.data.windowHeight - 100
            });
        }
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function (opts) {
        console.log(opts.target);
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLHlDQUFpRDtBQUVqRCw0REFBc0M7QUFHdEMsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFFckIsSUFBTSxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQztBQUdqRCxJQUFJLENBQUM7SUFLSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBUztRQUNoQixPQUFPLEVBQUUsSUFBSTtRQUNiLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFVBQVUsRUFBRSxLQUFLO1FBQ2pCLFlBQVksRUFBRSxDQUFDO1FBQ2YsV0FBVyxFQUFFLENBQUM7UUFDZCxVQUFVLEVBQUUsSUFBSTtRQUNoQixpQkFBaUIsRUFBRSxFQUFFO1FBQ3JCLFlBQVksRUFBRSxJQUFJO1FBQ2xCLFFBQVEsRUFBRSxFQUFvQjtLQUM5QjtJQVFELFFBQVEsRUFBUixVQUFTLENBQU07UUFDZCxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsR0FBRyxFQUFFLG9CQUFvQjtTQUN6QixDQUFDLENBQUE7SUFDSCxDQUFDO0lBTUQsV0FBVztRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWixZQUFZLEVBQUUsSUFBSTtTQUNsQixDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQU9ELE1BQU0sRUFBTjtRQUFBLGlCQWdCQztRQWZBLElBQU0sSUFBSSxHQUE0QixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDakQsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFBLFVBQVU7WUFDWCxJQUFBLHNDQUFZLEVBQUUsNEJBQU8sRUFBRSw4QkFBUSxDQUFnQjtZQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1osUUFBUSxVQUFBO2dCQUNSLE9BQU8sU0FBQTtnQkFDUCxZQUFZLGNBQUE7Z0JBQ1osaUJBQWlCLG1CQUFBO2FBQ2pCLENBQUMsQ0FBQTtZQUNGLEtBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1gsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7SUFFSCxDQUFDO0lBS0QsWUFBWSxFQUFaO1FBQUEsaUJBZ0JDO1FBZlEsSUFBQSxzQ0FBRyxDQUFrQztRQUM3QyxJQUFNLE9BQU8sR0FBRztZQUNmLEdBQUcsRUFBRSxzQ0FBc0M7WUFDM0MsTUFBTSxFQUFFLEtBQWM7WUFDdEIsSUFBSSxFQUFFO2dCQUNMLEdBQUcsRUFBRSxHQUFhO2FBQ2xCO1NBQ0QsQ0FBQTtRQUVELGVBQUssQ0FBQyxPQUFPLENBQXNELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbkYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWixLQUFLLEVBQUUsR0FBRyxDQUFDLElBQUk7YUFDZixDQUFDLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFLRCxPQUFPO1FBQVAsaUJBVUM7UUFUQSxvQkFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNmLElBQUEsK0JBQVksRUFBRSw2QkFBVyxDQUFTO1lBQzFDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1osWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2dCQUM5QixXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVc7YUFDNUIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUVILENBQUM7SUFFRCwwQkFBMEIsRUFBMUIsVUFBMkIsWUFBb0IsRUFBRSxXQUFtQjtRQUNuRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1osVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUU7YUFDdEMsQ0FBQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1osU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUc7YUFDdkMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQixFQUFqQixVQUFrQixJQUFJO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sRUFBRSxDQUFBO0lBQ1YsQ0FBQztDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy9Vc2VyJztcbmltcG9ydCB7IGdldFdpbmRvd0luZm8gfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcbmltcG9ydCB7IEdsb2JhbERhdGFUeXBlLCBDdXN0b21Vc2VySW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGluZyc7XG5pbXBvcnQgSHR0cHMgZnJvbSAnLi4vLi4vdXRpbHMvaHR0cHMnO1xuaW1wb3J0IHsgcmVsYXRpdmVUaW1lVGhyZXNob2xkIH0gZnJvbSAnbW9tZW50JztcblxuY29uc3QgYXBwID0gZ2V0QXBwKCk7XG5cbmNvbnN0IGZsb2F0QnRuSWNvbkNsYXNzID0gJ2ljb25mb250IGljb24tYmluZ3R1JztcblxuXG5QYWdlKHtcblxuXHQvKipcblx0ICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG5cdCAqL1xuXHRkYXRhOiB7XG5cdFx0dGVhbXM6IFtdIGFzIGFueSxcblx0XHRpc0xvZ2luOiB0cnVlLFxuXHRcdGJ1dHRvblRvcDogMTAwMDAsXG5cdFx0YnV0dG9uTGVmdDogMTAwMDAsXG5cdFx0d2luZG93SGVpZ2h0OiAwLFxuXHRcdHdpbmRvd1dpZHRoOiAwLFxuXHRcdHN0YXJ0UG9pbnQ6IG51bGwsXG5cdFx0ZmxvYXRCdG5JY29uQ2xhc3M6ICcnLFxuXHRcdGlzQXV0aG9yaXplZDogdHJ1ZSxcblx0XHR1c2VySW5mbzoge30gYXMgQ3VzdG9tVXNlckluZm8sXG5cdH0sXG5cblxuXG5cdC8qKlxuXHQgKiDliJvlu7rpobnnm67ngrnlh7vkuovku7Zcblx0ICogQHBhcmFtIGUgXG5cdCAqL1xuXHRvbkNyZWF0ZShlOiBhbnkpIHtcblx0XHR3eC5yZWRpcmVjdFRvKHtcblx0XHRcdHVybDogJy9wYWdlcy9mb3VuZC9mb3VuZCdcblx0XHR9KVxuXHR9LFxuXG5cblx0LyoqXG5cdCAqIOWujOaIkOaOiOadg+mAu+i+ke+8jOaSpOmZpOaOiOadg+eql+WPo1xuXHQgKi9cblx0b25BdXRob3JpemUoKSB7XG5cdFx0Y29uc29sZS5sb2coJ3Rvb2dsZSBpc0F1dGhvcml6ZWQnLCB0aGlzLmRhdGEpO1xuXHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRpc0F1dGhvcml6ZWQ6IHRydWVcblx0XHR9KVxuXHRcdHRoaXMuX2dldFRlYW1MaXN0KCk7XG5cdH0sXG5cblxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuXHQgKi9cblx0b25Mb2FkKCkge1xuXHRcdGNvbnN0IGluaXQ6IFByb21pc2U8R2xvYmFsRGF0YVR5cGU+ID0gYXBwLmluaXQoKTtcblx0XHRpbml0LnRoZW4oZ2xvYmFsRGF0YSA9PiB7XG5cdFx0XHRjb25zdCB7IGlzQXV0aG9yaXplZCwgaXNMb2dpbiwgdXNlckluZm8gfSA9IGdsb2JhbERhdGE7XG5cdFx0XHRjb25zb2xlLmxvZygnSW5kZXgub25sb2FkIC0gZ2xvYmFsRGF0YSBpcycsIGdsb2JhbERhdGEpO1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0dXNlckluZm8sXG5cdFx0XHRcdGlzTG9naW4sXG5cdFx0XHRcdGlzQXV0aG9yaXplZCxcblx0XHRcdFx0ZmxvYXRCdG5JY29uQ2xhc3MsXG5cdFx0XHR9KVxuXHRcdFx0dGhpcy5fZ2V0VGVhbUxpc3QoKTtcblx0XHR9KS5jYXRjaChlcnIgPT4geyAvLyDmiqXplJnpgLvovpHnmoTmnIDlkI7kuIDpgZPpmLLnur9cblx0XHRcdGNvbnNvbGUubG9nKCfpobXpnaLliJ3lp4vljJbplJnor68nLCBlcnIpO1xuXHRcdH0pXG5cblx0fSxcblxuXHQvKipcblx0ICog6I635Y+W6aaW6aG1IOaIkeWKoOWFpeeahOmhueebrue7hOWIl+ihqFxuXHQgKi9cblx0X2dldFRlYW1MaXN0KCkge1xuXHRcdGNvbnN0IHsgdWlkIH0gPSBhcHAuZ2V0R2xvYmFsRGF0YSgpLnVzZXJJbmZvO1xuXHRcdGNvbnN0IG9wdGlvbnMgPSB7XG5cdFx0XHR1cmw6ICcvdXNlci9xdWVyeV9jcmVhdGVkX3RlYW1fbGlzdF9ieV91aWQnLFxuXHRcdFx0bWV0aG9kOiBcIkdFVFwiIGFzIFwiR0VUXCIsXG5cdFx0XHRkYXRhOiB7XG5cdFx0XHRcdHVpZDogdWlkIGFzIHN0cmluZ1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdEh0dHBzLnJlcXVlc3Q8UmVxdWVzdC5RdWVyeVRlYW1MaXN0UmVxLCBSZXNwb25zZS5RdWVyeVRlYW1MaXN0UmVzPihvcHRpb25zKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZygn6I635Y+WdGVhbXPmlbDmja7miJDlip/vvIEnLCByZXMpO1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0dGVhbXM6IHJlcy5kYXRhXG5cdFx0XHR9KVxuXHRcdH0pXG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG5cdCAqL1xuXHRvblJlYWR5KCkge1xuXHRcdGdldFdpbmRvd0luZm8oKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRjb25zdCB7IHdpbmRvd0hlaWdodCwgd2luZG93V2lkdGggfSA9IHJlcztcblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdHdpbmRvd0hlaWdodDogcmVzLndpbmRvd0hlaWdodCxcblx0XHRcdFx0d2luZG93V2lkdGg6IHJlcy53aW5kb3dXaWR0aFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9hZGp1c3RGbG9hdEJ1dHRvbkxvY2F0aW9uKHdpbmRvd0hlaWdodCwgd2luZG93V2lkdGgpO1xuXHRcdH0pXG5cblx0fSxcblxuXHRfYWRqdXN0RmxvYXRCdXR0b25Mb2NhdGlvbih3aW5kb3dIZWlnaHQ6IG51bWJlciwgd2luZG93V2lkdGg6IG51bWJlcikge1xuXHRcdGlmICh0aGlzLmRhdGEuYnV0dG9uTGVmdCA+PSB0aGlzLmRhdGEud2luZG93V2lkdGgpIHtcblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdGJ1dHRvbkxlZnQ6IHRoaXMuZGF0YS53aW5kb3dXaWR0aCAtIDgwXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZGF0YS5idXR0b25Ub3AgPj0gdGhpcy5kYXRhLndpbmRvd0hlaWdodCkge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0YnV0dG9uVG9wOiB0aGlzLmRhdGEud2luZG93SGVpZ2h0IC0gMTAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG5cdCAqL1xuXHRvblNob3coKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cblx0ICovXG5cdG9uSGlkZSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuXHQgKi9cblx0b25VbmxvYWQoKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcblx0ICovXG5cdG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuXHQgKi9cblx0b25SZWFjaEJvdHRvbSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcblx0ICovXG5cdG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuXHRcdGNvbnNvbGUubG9nKG9wdHMudGFyZ2V0KVxuXHRcdHJldHVybiB7fVxuXHR9XG59KSJdfQ==