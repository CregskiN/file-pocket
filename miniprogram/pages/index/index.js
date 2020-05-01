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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLDJEQUFxQztBQUNyQyx5Q0FBaUQ7QUFNakQsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFFckIsSUFBTSxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQztBQUdqRCxJQUFJLENBQUM7SUFLSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBeUI7UUFDaEMsT0FBTyxFQUFFLElBQUk7UUFDYixTQUFTLEVBQUUsS0FBSztRQUNoQixVQUFVLEVBQUUsS0FBSztRQUNqQixZQUFZLEVBQUUsQ0FBQztRQUNmLFdBQVcsRUFBRSxDQUFDO1FBQ2QsVUFBVSxFQUFFLElBQUk7UUFDaEIsaUJBQWlCLEVBQUUsRUFBRTtRQUNyQixZQUFZLEVBQUUsSUFBSTtRQUNsQixRQUFRLEVBQUUsRUFBb0I7UUFDOUIsS0FBSyxFQUFFO1lBQ04sT0FBTyxFQUFFLFNBQVM7U0FDbEI7UUFDRCxTQUFTLEVBQUUsSUFBSTtRQUVmLE9BQU8sRUFBRSxDQUFDO0tBQ1Y7SUFRRCxRQUFRLEVBQVIsVUFBUyxDQUFNO1FBQ2QsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLEdBQUcsRUFBRSxvQkFBb0I7U0FDekIsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQU1ELFdBQVc7UUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osWUFBWSxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFBO1FBQ0YsY0FBSSxDQUFDLG1CQUFtQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNsQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQU9ELFdBQVcsRUFBWCxVQUFZLENB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LENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDVixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vLi4vbW9kZWxzL1RlYW0nO1xuaW1wb3J0IHsgZ2V0V2luZG93SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xuaW1wb3J0IHsgR2xvYmFsRGF0YVR5cGUsIEN1c3RvbVVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwaW5nJztcbmltcG9ydCBIdHRwcyBmcm9tICcuLi8uLi91dGlscy9odHRwcyc7XG4vLyBpbXBvcnQgeyByZWxhdGl2ZVRpbWVUaHJlc2hvbGQgfSBmcm9tICdtb21lbnQnO1xuXG5cbmNvbnN0IGFwcCA9IGdldEFwcCgpO1xuXG5jb25zdCBmbG9hdEJ0bkljb25DbGFzcyA9ICdpY29uZm9udCBpY29uLWJpbmd0dSc7XG5cblxuUGFnZSh7XG5cblx0LyoqXG5cdCAqIOmhtemdoueahOWIneWni+aVsOaNrlxuXHQgKi9cblx0ZGF0YToge1xuXHRcdHRlYW1zOiBbXSBhcyBSZXNwb25zZS5UZWFtVHlwZVtdLFxuXHRcdGlzTG9naW46IHRydWUsXG5cdFx0YnV0dG9uVG9wOiAxMDAwMCxcblx0XHRidXR0b25MZWZ0OiAxMDAwMCxcblx0XHR3aW5kb3dIZWlnaHQ6IDAsXG5cdFx0d2luZG93V2lkdGg6IDAsXG5cdFx0c3RhcnRQb2ludDogbnVsbCxcblx0XHRmbG9hdEJ0bkljb25DbGFzczogJycsXG5cdFx0aXNBdXRob3JpemVkOiB0cnVlLFxuXHRcdHVzZXJJbmZvOiB7fSBhcyBDdXN0b21Vc2VySW5mbyxcblx0XHRsaW50czoge1xuXHRcdFx0bG9hZGluZzogJ+ato+WcqOWKoOi9vS4uLidcblx0XHR9LFxuXHRcdGlzTG9hZGluZzogdHJ1ZSxcblxuXHRcdGN1cnJlbnQ6IDAsXG5cdH0sXG5cblxuXG5cdC8qKlxuXHQgKiDliJvlu7rpobnnm67ngrnlh7vkuovku7Zcblx0ICogQHBhcmFtIGUgXG5cdCAqL1xuXHRvbkNyZWF0ZShlOiBhbnkpIHtcblx0XHR3eC5yZWRpcmVjdFRvKHtcblx0XHRcdHVybDogJy9wYWdlcy9mb3VuZC9mb3VuZCdcblx0XHR9KVxuXHR9LFxuXG5cblx0LyoqXG5cdCAqIOWujOaIkOaOiOadg+mAu+i+ke+8jOaSpOmZpOaOiOadg+eql+WPo1xuXHQgKi9cblx0b25BdXRob3JpemUoKSB7XG5cdFx0Y29uc29sZS5sb2coJ3Rvb2dsZSBpc0F1dGhvcml6ZWQnLCB0aGlzLmRhdGEpO1xuXHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRpc0F1dGhvcml6ZWQ6IHRydWVcblx0XHR9KVxuXHRcdFRlYW0uZ2V0T2ZmaWNpYWxUZWFtTGlzdCgpLnRoZW4ocmVzID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKHJlcyk7XG5cdFx0fSlcblx0fSxcblxuXG5cdC8qKlxuXHQgKiDliIfmjaJ0YXBcblx0ICogQHBhcmFtIGUgXG5cdCAqL1xuXHRvblN3aXRjaFRhcChlOiBhbnkpIHtcblx0XHRpZiAoZS50eXBlID09PSAnY2hhbmdlJykge1xuXHRcdFx0Y29uc3QgeyBjdXJyZW50IH0gPSBlLmRldGFpbDtcblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdGN1cnJlbnRcblx0XHRcdH0pXG5cdFx0fSBlbHNlIGlmIChlLnR5cGUgPT09ICd0YXAnKSB7XG5cdFx0XHRjb25zdCBjdXJyZW50ID0gZS50YXJnZXQuZGF0YXNldC5jdXJyZW50O1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0Y3VycmVudFxuXHRcdFx0fSlcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG5cdCAqL1xuXHRvbkxvYWQoKSB7XG5cdFx0Y29uc3QgaW5pdDogUHJvbWlzZTxHbG9iYWxEYXRhVHlwZT4gPSBhcHAuaW5pdCgpO1xuXHRcdGluaXQudGhlbihnbG9iYWxEYXRhID0+IHtcblx0XHRcdGNvbnN0IHsgaXNBdXRob3JpemVkLCBpc0xvZ2luLCB1c2VySW5mbyB9ID0gZ2xvYmFsRGF0YTtcblx0XHRcdGNvbnNvbGUubG9nKCdJbmRleC5vbmxvYWQgLSBnbG9iYWxEYXRhIGlzJywgZ2xvYmFsRGF0YSk7XG5cblx0XHRcdFRlYW0uZ2V0T2ZmaWNpYWxUZWFtTGlzdCgpLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0XHR0ZWFtczogKHJlcyBhcyBhbnkpLmRhdGEsXG5cdFx0XHRcdFx0dXNlckluZm8sXG5cdFx0XHRcdFx0aXNMb2dpbixcblx0XHRcdFx0XHRpc0F1dGhvcml6ZWQsXG5cdFx0XHRcdFx0ZmxvYXRCdG5JY29uQ2xhc3MsXG5cdFx0XHRcdFx0aXNMb2FkaW5nOiBmYWxzZVxuXHRcdFx0XHR9KVxuXHRcdFx0fSk7XG5cdFx0fSkuY2F0Y2goZXJyID0+IHsgLy8g5oql6ZSZ6YC76L6R55qE5pyA5ZCO5LiA6YGT6Ziy57q/XG5cdFx0XHRjb25zb2xlLmxvZygn6aG16Z2i5Yid5aeL5YyW6ZSZ6K+vJywgZXJyKTtcblx0XHR9KTtcblxuXHR9LFxuXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG5cdCAqL1xuXHRvblJlYWR5KCkge1xuXHRcdGdldFdpbmRvd0luZm8oKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRjb25zdCB7IHdpbmRvd0hlaWdodCwgd2luZG93V2lkdGggfSA9IHJlcztcblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdHdpbmRvd0hlaWdodDogcmVzLndpbmRvd0hlaWdodCxcblx0XHRcdFx0d2luZG93V2lkdGg6IHJlcy53aW5kb3dXaWR0aFxuXHRcdFx0fSk7XG5cdFx0XHR0aGlzLl9hZGp1c3RGbG9hdEJ1dHRvbkxvY2F0aW9uKHdpbmRvd0hlaWdodCwgd2luZG93V2lkdGgpO1xuXHRcdH0pXG5cblx0fSxcblxuXHRfYWRqdXN0RmxvYXRCdXR0b25Mb2NhdGlvbih3aW5kb3dIZWlnaHQ6IG51bWJlciwgd2luZG93V2lkdGg6IG51bWJlcikge1xuXHRcdGlmICh0aGlzLmRhdGEuYnV0dG9uTGVmdCA+PSB0aGlzLmRhdGEud2luZG93V2lkdGgpIHtcblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdGJ1dHRvbkxlZnQ6IHRoaXMuZGF0YS53aW5kb3dXaWR0aCAtIDgwXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZGF0YS5idXR0b25Ub3AgPj0gdGhpcy5kYXRhLndpbmRvd0hlaWdodCkge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0YnV0dG9uVG9wOiB0aGlzLmRhdGEud2luZG93SGVpZ2h0IC0gMTAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG5cdCAqL1xuXHRvblNob3coKSB7XG5cdFx0Y29uc3QgaXNBdXRob3JpemVkID0gYXBwLmdldEdsb2JhbERhdGEoKTtcblx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0aXNBdXRob3JpemVkXG5cdFx0fSlcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuXHQgKi9cblx0b25IaWRlKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG5cdCAqL1xuXHRvblVubG9hZCgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuXHQgKi9cblx0b25QdWxsRG93blJlZnJlc2goKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG5cdCAqL1xuXHRvblJlYWNoQm90dG9tKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuXHQgKi9cblx0b25TaGFyZUFwcE1lc3NhZ2Uob3B0cyk6IFdlY2hhdE1pbmlwcm9ncmFtLlBhZ2UuSUN1c3RvbVNoYXJlQ29udGVudCB7XG5cdFx0Y29uc29sZS5sb2cob3B0cy50YXJnZXQpXG5cdFx0cmV0dXJuIHt9XG5cdH1cbn0pIl19