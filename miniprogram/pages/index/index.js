"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Team_1 = __importDefault(require("../../models/Team"));
var util_1 = require("../../utils/util");
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
        lints: {
            loading: '正在加载...'
        },
        isLoading: true,
        current: 0,
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
        Team_1.default.getOfficialTeamList().then(function (res) {
            console.log(res);
        });
    },
    onSwitchTap: function (e) {
        if (e.type === 'change') {
            var current = e.detail.current;
            this.setData({
                current: current
            });
        }
        else if (e.type === 'tap') {
            var current = e.target.dataset.current;
            this.setData({
                current: current
            });
        }
    },
    onLoad: function () {
        var _this = this;
        var init = app.init();
        init.then(function (globalData) {
            var isAuthorized = globalData.isAuthorized, isLogin = globalData.isLogin, userInfo = globalData.userInfo;
            console.log('Index.onload - globalData is', globalData);
            Team_1.default.getOfficialTeamList().then(function (res) {
                _this.setData({
                    teams: res.data,
                    userInfo: userInfo,
                    isLogin: isLogin,
                    isAuthorized: isAuthorized,
                    floatBtnIconClass: floatBtnIconClass,
                    isLoading: false
                });
            });
        }).catch(function (err) {
            console.log('页面初始化错误', err);
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
        var isAuthorized = app.getGlobalData();
        this.setData({
            isAuthorized: isAuthorized
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDJEQUFxQztBQUNyQyx5Q0FBaUQ7QUFNakQsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFFckIsSUFBTSxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQztBQUdqRCxJQUFJLENBQUM7SUFLSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBZ0I7UUFDdkIsT0FBTyxFQUFFLElBQUk7UUFDYixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixZQUFZLEVBQUUsQ0FBQztRQUNmLFdBQVcsRUFBRSxDQUFDO1FBQ2QsVUFBVSxFQUFFLElBQUk7UUFDaEIsaUJBQWlCLEVBQUUsRUFBRTtRQUNyQixZQUFZLEVBQUUsSUFBSTtRQUNsQixRQUFRLEVBQUUsRUFBb0I7UUFDOUIsS0FBSyxFQUFFO1lBQ04sT0FBTyxFQUFFLFNBQVM7U0FDbEI7UUFDRCxTQUFTLEVBQUUsSUFBSTtRQUVmLE9BQU8sRUFBRSxDQUFDO0tBQ1Y7SUFRRCxRQUFRLEVBQVIsVUFBUyxDQUFNO1FBQ2QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxvQkFBb0I7U0FDekIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQU1ELFdBQVc7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osWUFBWSxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO1FBQ0YsY0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQU9ELFdBQVcsRUFBWCxVQUFZLENB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LENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDVixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vLi4vbW9kZWxzL1RlYW0nO1xuaW1wb3J0IHsgZ2V0V2luZG93SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xuaW1wb3J0IHsgR2xvYmFsRGF0YVR5cGUsIEN1c3RvbVVzZXJJbmZvLCBUZWFtVHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGluZyc7XG5pbXBvcnQgSHR0cHMgZnJvbSAnLi4vLi4vdXRpbHMvaHR0cHMnO1xuLy8gaW1wb3J0IHsgcmVsYXRpdmVUaW1lVGhyZXNob2xkIH0gZnJvbSAnbW9tZW50JztcblxuXG5jb25zdCBhcHAgPSBnZXRBcHAoKTtcblxuY29uc3QgZmxvYXRCdG5JY29uQ2xhc3MgPSAnaWNvbmZvbnQgaWNvbi1iaW5ndHUnO1xuXG5cblBhZ2Uoe1xuXG5cdC8qKlxuXHQgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cblx0ICovXG5cdGRhdGE6IHtcblx0XHR0ZWFtczogW10gYXMgVGVhbVR5cGVbXSxcblx0XHRpc0xvZ2luOiB0cnVlLFxuXHRcdGJ1dHRvblRvcDogMTAwMDAsXG5cdFx0YnV0dG9uTGVmdDogMTAwMDAsXG5cdFx0d2luZG93SGVpZ2h0OiAwLFxuXHRcdHdpbmRvd1dpZHRoOiAwLFxuXHRcdHN0YXJ0UG9pbnQ6IG51bGwsXG5cdFx0ZmxvYXRCdG5JY29uQ2xhc3M6ICcnLFxuXHRcdGlzQXV0aG9yaXplZDogdHJ1ZSxcblx0XHR1c2VySW5mbzoge30gYXMgQ3VzdG9tVXNlckluZm8sXG5cdFx0bGludHM6IHtcblx0XHRcdGxvYWRpbmc6ICfmraPlnKjliqDovb0uLi4nXG5cdFx0fSxcblx0XHRpc0xvYWRpbmc6IHRydWUsXG5cblx0XHRjdXJyZW50OiAwLFxuXHR9LFxuXG5cblxuXHQvKipcblx0ICog5Yib5bu66aG555uu54K55Ye75LqL5Lu2XG5cdCAqIEBwYXJhbSBlIFxuXHQgKi9cblx0b25DcmVhdGUoZTogYW55KSB7XG5cdFx0d3gucmVkaXJlY3RUbyh7XG5cdFx0XHR1cmw6ICcvcGFnZXMvZm91bmQvZm91bmQnXG5cdFx0fSlcblx0fSxcblxuXG5cdC8qKlxuXHQgKiDlrozmiJDmjojmnYPpgLvovpHvvIzmkqTpmaTmjojmnYPnqpflj6Ncblx0ICovXG5cdG9uQXV0aG9yaXplKCkge1xuXHRcdGNvbnNvbGUubG9nKCd0b29nbGUgaXNBdXRob3JpemVkJywgdGhpcy5kYXRhKTtcblx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0aXNBdXRob3JpemVkOiB0cnVlXG5cdFx0fSlcblx0XHRUZWFtLmdldE9mZmljaWFsVGVhbUxpc3QoKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRjb25zb2xlLmxvZyhyZXMpO1xuXHRcdH0pXG5cdH0sXG5cblxuXHQvKipcblx0ICog5YiH5o2idGFwXG5cdCAqIEBwYXJhbSBlIFxuXHQgKi9cblx0b25Td2l0Y2hUYXAoZTogYW55KSB7XG5cdFx0aWYgKGUudHlwZSA9PT0gJ2NoYW5nZScpIHtcblx0XHRcdGNvbnN0IHsgY3VycmVudCB9ID0gZS5kZXRhaWw7XG5cdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHRjdXJyZW50XG5cdFx0XHR9KVxuXHRcdH0gZWxzZSBpZiAoZS50eXBlID09PSAndGFwJykge1xuXHRcdFx0Y29uc3QgY3VycmVudCA9IGUudGFyZ2V0LmRhdGFzZXQuY3VycmVudDtcblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdGN1cnJlbnRcblx0XHRcdH0pXG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuXHQgKi9cblx0b25Mb2FkKCkge1xuXHRcdGNvbnN0IGluaXQ6IFByb21pc2U8R2xvYmFsRGF0YVR5cGU+ID0gYXBwLmluaXQoKTtcblx0XHRpbml0LnRoZW4oZ2xvYmFsRGF0YSA9PiB7XG5cdFx0XHRjb25zdCB7IGlzQXV0aG9yaXplZCwgaXNMb2dpbiwgdXNlckluZm8gfSA9IGdsb2JhbERhdGE7XG5cdFx0XHRjb25zb2xlLmxvZygnSW5kZXgub25sb2FkIC0gZ2xvYmFsRGF0YSBpcycsIGdsb2JhbERhdGEpO1xuXG5cdFx0XHRUZWFtLmdldE9mZmljaWFsVGVhbUxpc3QoKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdFx0dGVhbXM6IChyZXMgYXMgYW55KS5kYXRhLFxuXHRcdFx0XHRcdHVzZXJJbmZvLFxuXHRcdFx0XHRcdGlzTG9naW4sXG5cdFx0XHRcdFx0aXNBdXRob3JpemVkLFxuXHRcdFx0XHRcdGZsb2F0QnRuSWNvbkNsYXNzLFxuXHRcdFx0XHRcdGlzTG9hZGluZzogZmFsc2Vcblx0XHRcdFx0fSlcblx0XHRcdH0pO1xuXHRcdH0pLmNhdGNoKGVyciA9PiB7IC8vIOaKpemUmemAu+i+keeahOacgOWQjuS4gOmBk+mYsue6v1xuXHRcdFx0Y29uc29sZS5sb2coJ+mhtemdouWIneWni+WMlumUmeivrycsIGVycik7XG5cdFx0fSk7XG5cblx0fSxcblxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuXHQgKi9cblx0b25SZWFkeSgpIHtcblx0XHRnZXRXaW5kb3dJbmZvKCkudGhlbihyZXMgPT4ge1xuXHRcdFx0Y29uc3QgeyB3aW5kb3dIZWlnaHQsIHdpbmRvd1dpZHRoIH0gPSByZXM7XG5cdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IHJlcy53aW5kb3dIZWlnaHQsXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiByZXMud2luZG93V2lkdGhcblx0XHRcdH0pO1xuXHRcdFx0dGhpcy5fYWRqdXN0RmxvYXRCdXR0b25Mb2NhdGlvbih3aW5kb3dIZWlnaHQsIHdpbmRvd1dpZHRoKTtcblx0XHR9KVxuXG5cdH0sXG5cblx0X2FkanVzdEZsb2F0QnV0dG9uTG9jYXRpb24od2luZG93SGVpZ2h0OiBudW1iZXIsIHdpbmRvd1dpZHRoOiBudW1iZXIpIHtcblx0XHRpZiAodGhpcy5kYXRhLmJ1dHRvbkxlZnQgPj0gdGhpcy5kYXRhLndpbmRvd1dpZHRoKSB7XG5cdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHRidXR0b25MZWZ0OiB0aGlzLmRhdGEud2luZG93V2lkdGggLSA4MFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmRhdGEuYnV0dG9uVG9wID49IHRoaXMuZGF0YS53aW5kb3dIZWlnaHQpIHtcblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdGJ1dHRvblRvcDogdGhpcy5kYXRhLndpbmRvd0hlaWdodCAtIDEwMFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuXHQgKi9cblx0b25TaG93KCkge1xuXHRcdGNvbnN0IGlzQXV0aG9yaXplZCA9IGFwcC5nZXRHbG9iYWxEYXRhKCk7XG5cdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdGlzQXV0aG9yaXplZFxuXHRcdH0pXG5cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cblx0ICovXG5cdG9uSGlkZSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuXHQgKi9cblx0b25VbmxvYWQoKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcblx0ICovXG5cdG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuXHQgKi9cblx0b25SZWFjaEJvdHRvbSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcblx0ICovXG5cdG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuXHRcdGNvbnNvbGUubG9nKG9wdHMudGFyZ2V0KVxuXHRcdHJldHVybiB7fVxuXHR9XG59KSJdfQ==