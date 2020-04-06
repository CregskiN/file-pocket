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
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../../models/User");
var util_1 = require("../../utils/util");
var floatBtnIconParams = [{
        floatBtnIconClass: 'iconfont icon-bingtu',
        floatBtnContent: '授权'
    }, {
        floatBtnIconClass: 'iconfont icon-bingtu',
        floatBtnContent: '创建'
    }];
Page({
    data: {
        items: [{
                gid: 0,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
                name: '官方项目群项目群项目群项目群项目群项目群项目群项目群项目群项目群',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                gid: 1,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkk11.jpg',
                name: '用户群1',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                gid: 2,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkCtJ.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                gid: 3,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                gid: 4,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                gid: 5,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                gid: 6,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                gid: 7,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                gid: 8,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                gid: 9,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }],
        isLogin: false,
        buttonTop: 10000,
        buttonLeft: 10000,
        windowHeight: 0,
        windowWidth: 0,
        startPoint: null,
        floatBtnIconClass: '',
        floatBtnContent: ''
    },
    onMore: function (e) {
        console.log(e);
        wx.showActionSheet({
            itemList: ['添加共享成员', '修改项目名称', '退出项目'],
            success: function (res) {
                switch (res.tapIndex) {
                    case 0: {
                        wx.showToast({
                            title: '弹出好友选择界面'
                        });
                        break;
                    }
                    case 1: {
                        wx.showToast({
                            title: '弹出输入模块'
                        });
                        break;
                    }
                    case 2: {
                        wx.showModal({
                            title: '注意⚠️',
                            content: '您确定退出该群组？',
                            success: function (res) {
                                if (res.confirm) {
                                    wx.showToast({
                                        title: '操作成功'
                                    });
                                }
                            },
                        });
                    }
                }
            },
            fail: function (res) {
                console.log('fail');
            }
        });
    },
    onCreate: function (e) {
        wx.navigateTo({
            url: '/pages/found/found'
        });
    },
    onGetAuthorization: function (e) {
        try {
            var detail = e.detail;
            User_1.default.setUserInfo(detail.userInfo);
            this.setData(__assign({ isLogin: true }, floatBtnIconParams[1]));
        }
        catch (err) {
            console.log(err);
            wx.showToast({
                title: '授权失败'
            });
        }
    },
    toDetail: function () {
        wx.navigateTo({
            url: '/pages/detail/detail?gid=1'
        });
    },
    onLoad: function () {
        var _this = this;
        wx.getSetting({
            success: function (res) {
                if (res.authSetting["scope.userInfo"]) {
                    _this.setData(__assign({ isLogin: true }, floatBtnIconParams[1]));
                }
                else {
                    _this.setData(__assign({ isLogin: false }, floatBtnIconParams[0]));
                }
            }
        });
        util_1.getWindowInfo(function (res) {
            _this.setData({
                windowHeight: res.windowHeight,
                windowWidth: res.windowWidth
            });
        });
    },
    onReady: function () {
        this._adjustFloatButtonLocation();
    },
    _adjustFloatButtonLocation: function () {
        if (this.data.buttonLeft >= this.data.windowWidth) {
            this.setData({
                buttonLeft: this.data.windowWidth - 110
            });
        }
        if (this.data.buttonTop >= this.data.windowHeight) {
            this.setData({
                buttonTop: this.data.windowHeight - 120
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBQ3JDLHlDQUFpRDtBQUVqRCxJQUFNLGtCQUFrQixHQUFHLENBQUM7UUFDM0IsaUJBQWlCLEVBQUUsc0JBQXNCO1FBQ3pDLGVBQWUsRUFBRSxJQUFJO0tBQ3JCLEVBQUU7UUFDRixpQkFBaUIsRUFBRSxzQkFBc0I7UUFDekMsZUFBZSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFBO0FBR0YsSUFBSSxDQUFDO0lBS0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLENBQUM7Z0JBQ04sT0FBTyxFQUFFLDJDQUEyQztnQkFDcEQsSUFBSSxFQUFFLGtDQUFrQztnQkFDeEMsS0FBSyxFQUFFO29CQUNOLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNQO2FBQ0QsRUFBRTtnQkFDRixHQUFHLEVBQUUsQ0FBQztnQkFDTixPQUFPLEVBQUUsMkNBQTJDO2dCQUNwRCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUU7b0JBQ04sR0FBRyxFQUFFLEVBQUU7b0JBQ1AsR0FBRyxFQUFFLEVBQUU7aUJBQ1A7YUFDRCxFQUFFO2dCQUNGLEdBQUcsRUFBRSxDQUFDO2dCQUNOLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BELElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRTtvQkFDTixHQUFHLEVBQUUsRUFBRTtvQkFDUCxHQUFHLEVBQUUsRUFBRTtpQkFDUDthQUNELEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLENBQUM7Z0JBQ04sT0FBTyxFQUFFLDJDQUEyQztnQkFDcEQsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFO29CQUNOLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNQO2FBQ0QsRUFBRTtnQkFDRixHQUFH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RSxHQUFHLENBQUMsWUFBWTtnQkFDOUIsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXO2FBQzVCLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUtELE9BQU87UUFDTixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMEJBQTBCO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRzthQUN2QyxDQUFDLENBQUM7U0FDSDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWixTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRzthQUN2QyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDVixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgZ2V0V2luZG93SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xuXG5jb25zdCBmbG9hdEJ0bkljb25QYXJhbXMgPSBbe1xuXHRmbG9hdEJ0bkljb25DbGFzczogJ2ljb25mb250IGljb24tYmluZ3R1Jyxcblx0ZmxvYXRCdG5Db250ZW50OiAn5o6I5p2DJ1xufSwge1xuXHRmbG9hdEJ0bkljb25DbGFzczogJ2ljb25mb250IGljb24tYmluZ3R1Jyxcblx0ZmxvYXRCdG5Db250ZW50OiAn5Yib5bu6J1xufV1cblxuXG5QYWdlKHtcblxuXHQvKipcblx0ICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG5cdCAqL1xuXHRkYXRhOiB7XG5cdFx0aXRlbXM6IFt7XG5cdFx0XHRnaWQ6IDAsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa0ZwUi5qcGcnLFxuXHRcdFx0bmFtZTogJ+WumOaWuemhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pCcsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Z2lkOiAxLFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtrMTEuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQxJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRnaWQ6IDIsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa0N0Si5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGdpZDogMyxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Z2lkOiA0LFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRnaWQ6IDUsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGdpZDogNixcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Z2lkOiA3LFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRnaWQ6IDgsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGdpZDogOSxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fV0sXG5cdFx0aXNMb2dpbjogZmFsc2UsXG5cdFx0YnV0dG9uVG9wOiAxMDAwMCxcblx0XHRidXR0b25MZWZ0OiAxMDAwMCxcblx0XHR3aW5kb3dIZWlnaHQ6IDAsXG5cdFx0d2luZG93V2lkdGg6IDAsXG5cdFx0c3RhcnRQb2ludDogbnVsbCxcblx0XHRmbG9hdEJ0bkljb25DbGFzczogJycsXG5cdFx0ZmxvYXRCdG5Db250ZW50OiAnJ1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBcIuabtOWkmlwi5oyJ6ZKu54K55Ye75LqL5Lu2XG5cdCAqIEBwYXJhbSBlIOeCueWHu+S6i+S7tlxuXHQgKi9cblx0b25Nb3JlKGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdC8vIGVudW0gYWN0aW9uU2hlZXQge1xuXHRcdC8vIFx0J+a3u+WKoOWFseS6q+aIkOWRmCcgPSAwLFxuXHRcdC8vIFx0J+S/ruaUuemhueebruWQjeensCcgPSAxLFxuXHRcdC8vIFx0J+mAgOWHuumhueebricgPSAyXG5cdFx0Ly8gfVxuXHRcdHd4LnNob3dBY3Rpb25TaGVldCh7XG5cdFx0XHRpdGVtTGlzdDogWyfmt7vliqDlhbHkuqvmiJDlkZgnLCAn5L+u5pS56aG555uu5ZCN56ewJywgJ+mAgOWHuumhueebriddLFxuXHRcdFx0c3VjY2VzczogKHJlczogV2VjaGF0TWluaXByb2dyYW0uU2hvd0FjdGlvblNoZWV0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG5cdFx0XHRcdHN3aXRjaCAocmVzLnRhcEluZGV4KSB7XG5cdFx0XHRcdFx0Y2FzZSAwOiB7XG5cdFx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W8ueWHuuWlveWPi+mAieaLqeeVjOmdoidcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSAxOiB7XG5cdFx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W8ueWHuui+k+WFpeaooeWdlydcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSAyOiB7XG5cdFx0XHRcdFx0XHR3eC5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+azqOaEj+KaoO+4jycsXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmgqjnoa7lrprpgIDlh7ror6XnvqTnu4TvvJ8nLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5TaG93TW9kYWxTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5pON5L2c5oiQ5YqfJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbDogKHJlczogV2VjaGF0TWluaXByb2dyYW0uR2VuZXJhbENhbGxiYWNrUmVzdWx0KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsJyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHQvKipcblx0ICog5Yib5bu66aG555uu54K55Ye75LqL5Lu2XG5cdCAqIEBwYXJhbSBlIFxuXHQgKi9cblx0b25DcmVhdGUoZTogYW55KSB7XG5cdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHR1cmw6ICcvcGFnZXMvZm91bmQvZm91bmQnXG5cdFx0fSlcblx0fSxcblxuXHQvKipcblx0ICog6I635Y+W5o6I5p2D54K55Ye75LqL5Lu2XG5cdCAqIEBwYXJhbSBlIFxuXHQgKi9cblx0b25HZXRBdXRob3JpemF0aW9uKGU6IGFueSkge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBkZXRhaWw6IFdlY2hhdE1pbmlwcm9ncmFtLkdldFVzZXJJbmZvU3VjY2Vzc0NhbGxiYWNrUmVzdWx0ID0gZS5kZXRhaWw7XG5cdFx0XHRVc2VyLnNldFVzZXJJbmZvKGRldGFpbC51c2VySW5mbyk7XG5cdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHRpc0xvZ2luOiB0cnVlLFxuXHRcdFx0XHQuLi5mbG9hdEJ0bkljb25QYXJhbXNbMV0sXG5cdFx0XHR9KVxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdHRpdGxlOiAn5o6I5p2D5aSx6LSlJ1xuXHRcdFx0fSlcblx0XHR9XG5cblx0fSxcblxuXHQvKipcblx0ICog6aG555uu6K+m5oOF54K55Ye75LqL5Lu2XG5cdCAqL1xuXHR0b0RldGFpbCgpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy9wYWdlcy9kZXRhaWwvZGV0YWlsP2dpZD0xJ1xuXHRcdH0pXG5cdH0sXG5cblxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuXHQgKi9cblx0b25Mb2FkKCkge1xuXHRcdHd4LmdldFNldHRpbmcoe1xuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmF1dGhTZXR0aW5nW1wic2NvcGUudXNlckluZm9cIl0pIHtcblx0XHRcdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHRcdFx0aXNMb2dpbjogdHJ1ZSxcblx0XHRcdFx0XHRcdC4uLmZsb2F0QnRuSWNvblBhcmFtc1sxXSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdFx0XHRpc0xvZ2luOiBmYWxzZSxcblx0XHRcdFx0XHRcdC4uLmZsb2F0QnRuSWNvblBhcmFtc1swXVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGdldFdpbmRvd0luZm8oKHJlczogV2VjaGF0TWluaXByb2dyYW0uR2V0U3lzdGVtSW5mb1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0d2luZG93SGVpZ2h0OiByZXMud2luZG93SGVpZ2h0LFxuXHRcdFx0XHR3aW5kb3dXaWR0aDogcmVzLndpbmRvd1dpZHRoXG5cdFx0XHR9KVxuXHRcdH0pO1xuXHRcdFxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuXHQgKi9cblx0b25SZWFkeSgpIHtcblx0XHR0aGlzLl9hZGp1c3RGbG9hdEJ1dHRvbkxvY2F0aW9uKCk7XG5cdH0sXG5cblx0X2FkanVzdEZsb2F0QnV0dG9uTG9jYXRpb24oKSB7XG5cdFx0aWYgKHRoaXMuZGF0YS5idXR0b25MZWZ0ID49IHRoaXMuZGF0YS53aW5kb3dXaWR0aCkge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0YnV0dG9uTGVmdDogdGhpcy5kYXRhLndpbmRvd1dpZHRoIC0gMTEwXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZGF0YS5idXR0b25Ub3AgPj0gdGhpcy5kYXRhLndpbmRvd0hlaWdodCkge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0YnV0dG9uVG9wOiB0aGlzLmRhdGEud2luZG93SGVpZ2h0IC0gMTIwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG5cdCAqL1xuXHRvblNob3coKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cblx0ICovXG5cdG9uSGlkZSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuXHQgKi9cblx0b25VbmxvYWQoKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcblx0ICovXG5cdG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuXHQgKi9cblx0b25SZWFjaEJvdHRvbSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcblx0ICovXG5cdG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuXHRcdGNvbnNvbGUubG9nKG9wdHMudGFyZ2V0KVxuXHRcdHJldHVybiB7fVxuXHR9XG59KSJdfQ==