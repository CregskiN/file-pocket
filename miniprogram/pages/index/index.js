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
                isLoading: false
            });
        }).catch(function (err) {
            console.log('页面初始化错误', err);
        });
        Team_1.default.getOfficialTeamList().then(function (res) {
            console.log(res);
            _this.setData({
                teams: res.data,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDJEQUFxQztBQUNyQyx5Q0FBaUQ7QUFNakQsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFFckIsSUFBTSxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQztBQUdqRCxJQUFJLENBQUM7SUFLSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBZ0I7UUFDdkIsT0FBTyxFQUFFLElBQUk7UUFDYixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixZQUFZLEVBQUUsQ0FBQztRQUNmLFdBQVcsRUFBRSxDQUFDO1FBQ2QsVUFBVSxFQUFFLElBQUk7UUFDaEIsaUJBQWlCLEVBQUUsRUFBRTtRQUNyQixZQUFZLEVBQUUsSUFBSTtRQUNsQixRQUFRLEVBQUUsRUFBb0I7UUFDOUIsS0FBSyxFQUFFO1lBQ04sT0FBTyxFQUFFLFNBQVM7U0FDbEI7UUFDRCxTQUFTLEVBQUUsSUFBSTtLQUNmO0lBUUQsUUFBUSxFQUFSLFVBQVMsQ0FBTTtRQUNkLEVBQUUsQ0FBQyxVQUFVLENBQUM7WUFDYixHQUFHLEVBQUUsb0JBQW9CO1NBQ3pCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFNRCxXQUFXO1FBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNaLFlBQVksRUFBRSxJQUFJO1NBQ2xCLENBQUMsQ0FBQTtRQUNGLGNBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFPRCxNQUFNLEVBQU47UUFBQSxpQkFzQkM7UUFyQkEsSUFBTSxJQUFJLEdBQTRCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUEsVUFBVTtZQUNYLElBQUEsc0NBQVksRUFBRSw0QkFBTyxFQUFFLDhCQUFRLENBQWdCO1lBQ3ZELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDeEQsS0FBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWixRQUFRLFVBQUE7Z0JBQ1IsT0FBTyxTQUFBO2dCQUNQLFlBQVksY0FBQTtnQkFDWixpQkFBaUIsbUJBQUE7Z0JBQ2pCLFNBQVMsRUFBRSxLQUFLO2FBQ2hCLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztRQUNILGNBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVqQixLQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNaLEtBQUssRUFBRyxHQUFXLENBQUMsSUFBSTthQUN4QixDQUFDLENBQUE7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFNRCxPQUFPO1FBQVAsaUJBVUM7UUFUQSxvQkFBYSxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNmLElBQUEsK0JBQVksRUFBRSw2QkFBVyxDQUFTO1lBQzFDLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1osWUFBWSxFQUFFLEdBQUcsQ0FBQyxZQUFZO2dCQUM5QixXQUFXLEVBQUUsR0FBRyxDQUFDLFdBQVc7YUFDNUIsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsQ0FBQTtJQUVILENBQUM7SUFFRCwwQkFBMEIsRUFBMUIsVUFBMkIsWUFBb0IsRUFBRSxXQUFtQjtRQUNuRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1osVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUU7YUFDdEMsQ0FBQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1osU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUc7YUFDdkMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDO0lBS0QsTUFBTTtRQUNMLElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osWUFBWSxjQUFBO1NBQ1osQ0FBQyxDQUFBO0lBRUgsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDVixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vLi4vbW9kZWxzL1RlYW0nO1xuaW1wb3J0IHsgZ2V0V2luZG93SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xuaW1wb3J0IHsgR2xvYmFsRGF0YVR5cGUsIEN1c3RvbVVzZXJJbmZvLCBUZWFtVHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGluZyc7XG5pbXBvcnQgSHR0cHMgZnJvbSAnLi4vLi4vdXRpbHMvaHR0cHMnO1xuLy8gaW1wb3J0IHsgcmVsYXRpdmVUaW1lVGhyZXNob2xkIH0gZnJvbSAnbW9tZW50JztcblxuXG5jb25zdCBhcHAgPSBnZXRBcHAoKTtcblxuY29uc3QgZmxvYXRCdG5JY29uQ2xhc3MgPSAnaWNvbmZvbnQgaWNvbi1iaW5ndHUnO1xuXG5cblBhZ2Uoe1xuXG5cdC8qKlxuXHQgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cblx0ICovXG5cdGRhdGE6IHtcblx0XHR0ZWFtczogW10gYXMgVGVhbVR5cGVbXSxcblx0XHRpc0xvZ2luOiB0cnVlLFxuXHRcdGJ1dHRvblRvcDogMTAwMDAsXG5cdFx0YnV0dG9uTGVmdDogMTAwMDAsXG5cdFx0d2luZG93SGVpZ2h0OiAwLFxuXHRcdHdpbmRvd1dpZHRoOiAwLFxuXHRcdHN0YXJ0UG9pbnQ6IG51bGwsXG5cdFx0ZmxvYXRCdG5JY29uQ2xhc3M6ICcnLFxuXHRcdGlzQXV0aG9yaXplZDogdHJ1ZSxcblx0XHR1c2VySW5mbzoge30gYXMgQ3VzdG9tVXNlckluZm8sXG5cdFx0bGludHM6IHtcblx0XHRcdGxvYWRpbmc6ICfmraPlnKjliqDovb0uLi4nXG5cdFx0fSxcblx0XHRpc0xvYWRpbmc6IHRydWUsXG5cdH0sXG5cblxuXG5cdC8qKlxuXHQgKiDliJvlu7rpobnnm67ngrnlh7vkuovku7Zcblx0ICogQHBhcmFtIGUgXG5cdCAqL1xuXHRvbkNyZWF0ZShlOiBhbnkpIHtcblx0XHR3eC5yZWRpcmVjdFRvKHtcblx0XHRcdHVybDogJy9wYWdlcy9mb3VuZC9mb3VuZCdcblx0XHR9KVxuXHR9LFxuXG5cblx0LyoqXG5cdCAqIOWujOaIkOaOiOadg+mAu+i+ke+8jOaSpOmZpOaOiOadg+eql+WPo1xuXHQgKi9cblx0b25BdXRob3JpemUoKSB7XG5cdFx0Y29uc29sZS5sb2coJ3Rvb2dsZSBpc0F1dGhvcml6ZWQnLCB0aGlzLmRhdGEpO1xuXHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRpc0F1dGhvcml6ZWQ6IHRydWVcblx0XHR9KVxuXHRcdFRlYW0uZ2V0T2ZmaWNpYWxUZWFtTGlzdCgpLnRoZW4ocmVzID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0fSlcblx0fSxcblxuXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG5cdCAqL1xuXHRvbkxvYWQoKSB7XG5cdFx0Y29uc3QgaW5pdDogUHJvbWlzZTxHbG9iYWxEYXRhVHlwZT4gPSBhcHAuaW5pdCgpO1xuXHRcdGluaXQudGhlbihnbG9iYWxEYXRhID0+IHtcblx0XHRcdGNvbnN0IHsgaXNBdXRob3JpemVkLCBpc0xvZ2luLCB1c2VySW5mbyB9ID0gZ2xvYmFsRGF0YTtcblx0XHRcdGNvbnNvbGUubG9nKCdJbmRleC5vbmxvYWQgLSBnbG9iYWxEYXRhIGlzJywgZ2xvYmFsRGF0YSk7XG5cdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHR1c2VySW5mbyxcblx0XHRcdFx0aXNMb2dpbixcblx0XHRcdFx0aXNBdXRob3JpemVkLFxuXHRcdFx0XHRmbG9hdEJ0bkljb25DbGFzcyxcblx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZVxuXHRcdFx0fSlcblx0XHR9KS5jYXRjaChlcnIgPT4geyAvLyDmiqXplJnpgLvovpHnmoTmnIDlkI7kuIDpgZPpmLLnur9cblx0XHRcdGNvbnNvbGUubG9nKCfpobXpnaLliJ3lp4vljJbplJnor68nLCBlcnIpO1xuXHRcdH0pO1xuXHRcdFRlYW0uZ2V0T2ZmaWNpYWxUZWFtTGlzdCgpLnRoZW4ocmVzID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdHRlYW1zOiAocmVzIGFzIGFueSkuZGF0YSxcblx0XHRcdH0pXG5cdFx0fSk7XG5cdH0sXG5cblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcblx0ICovXG5cdG9uUmVhZHkoKSB7XG5cdFx0Z2V0V2luZG93SW5mbygpLnRoZW4ocmVzID0+IHtcblx0XHRcdGNvbnN0IHsgd2luZG93SGVpZ2h0LCB3aW5kb3dXaWR0aCB9ID0gcmVzO1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0d2luZG93SGVpZ2h0OiByZXMud2luZG93SGVpZ2h0LFxuXHRcdFx0XHR3aW5kb3dXaWR0aDogcmVzLndpbmRvd1dpZHRoXG5cdFx0XHR9KTtcblx0XHRcdHRoaXMuX2FkanVzdEZsb2F0QnV0dG9uTG9jYXRpb24od2luZG93SGVpZ2h0LCB3aW5kb3dXaWR0aCk7XG5cdFx0fSlcblxuXHR9LFxuXG5cdF9hZGp1c3RGbG9hdEJ1dHRvbkxvY2F0aW9uKHdpbmRvd0hlaWdodDogbnVtYmVyLCB3aW5kb3dXaWR0aDogbnVtYmVyKSB7XG5cdFx0aWYgKHRoaXMuZGF0YS5idXR0b25MZWZ0ID49IHRoaXMuZGF0YS53aW5kb3dXaWR0aCkge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0YnV0dG9uTGVmdDogdGhpcy5kYXRhLndpbmRvd1dpZHRoIC0gODBcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAodGhpcy5kYXRhLmJ1dHRvblRvcCA+PSB0aGlzLmRhdGEud2luZG93SGVpZ2h0KSB7XG5cdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHRidXR0b25Ub3A6IHRoaXMuZGF0YS53aW5kb3dIZWlnaHQgLSAxMDBcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcblx0ICovXG5cdG9uU2hvdygpIHtcblx0XHRjb25zdCBpc0F1dGhvcml6ZWQgPSBhcHAuZ2V0R2xvYmFsRGF0YSgpO1xuXHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRpc0F1dGhvcml6ZWRcblx0XHR9KVxuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG5cdCAqL1xuXHRvbkhpZGUoKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cblx0ICovXG5cdG9uVW5sb2FkKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG5cdCAqL1xuXHRvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcblx0ICovXG5cdG9uUmVhY2hCb3R0b20oKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG5cdCAqL1xuXHRvblNoYXJlQXBwTWVzc2FnZShvcHRzKTogV2VjaGF0TWluaXByb2dyYW0uUGFnZS5JQ3VzdG9tU2hhcmVDb250ZW50IHtcblx0XHRjb25zb2xlLmxvZyhvcHRzLnRhcmdldClcblx0XHRyZXR1cm4ge31cblx0fVxufSkiXX0=