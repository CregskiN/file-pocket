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
                id: 0,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
                name: '官方项目群项目群项目群项目群项目群项目群项目群项目群项目群项目群',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                id: 1,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkk11.jpg',
                name: '用户群1',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                id: 2,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkCtJ.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                id: 3,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                id: 4,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                id: 5,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                id: 6,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                id: 7,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                id: 8,
                iconUrl: 'https://s1.ax1x.com/2020/04/02/GYkPh9.jpg',
                name: '用户群2',
                count: {
                    doc: 10,
                    img: 20
                }
            }, {
                id: 9,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBQ3JDLHlDQUFpRDtBQUVqRCxJQUFNLGtCQUFrQixHQUFHLENBQUM7UUFDM0IsaUJBQWlCLEVBQUUsc0JBQXNCO1FBQ3pDLGVBQWUsRUFBRSxJQUFJO0tBQ3JCLEVBQUU7UUFDRixpQkFBaUIsRUFBRSxzQkFBc0I7UUFDekMsZUFBZSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFBO0FBR0YsSUFBSSxDQUFDO0lBS0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLENBQUM7Z0JBQ1AsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLDJDQUEyQztnQkFDcEQsSUFBSSxFQUFFLGtDQUFrQztnQkFDeEMsS0FBSyxFQUFFO29CQUNOLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNQO2FBQ0QsRUFBRTtnQkFDRixFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsMkNBQTJDO2dCQUNwRCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUU7b0JBQ04sR0FBRyxFQUFFLEVBQUU7b0JBQ1AsR0FBRyxFQUFFLEVBQUU7aUJBQ1A7YUFDRCxFQUFFO2dCQUNGLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BELElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRTtvQkFDTixHQUFHLEVBQUUsRUFBRTtvQkFDUCxHQUFHLEVBQUUsRUFBRTtpQkFDUDthQUNELEVBQUU7Z0JBQ0YsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLDJDQUEyQztnQkFDcEQsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFO29CQUNOLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNQO2FBQ0QsRUFBRTtnQkFDRixFQUFF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RSxHQUFHLENBQUMsWUFBWTtnQkFDOUIsV0FBVyxFQUFFLEdBQUcsQ0FBQyxXQUFXO2FBQzVCLENBQUMsQ0FBQTtRQUNILENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUtELE9BQU87UUFDTixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMEJBQTBCO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWixVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsR0FBRzthQUN2QyxDQUFDLENBQUM7U0FDSDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWixTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRzthQUN2QyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDVixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgZ2V0V2luZG93SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xuXG5jb25zdCBmbG9hdEJ0bkljb25QYXJhbXMgPSBbe1xuXHRmbG9hdEJ0bkljb25DbGFzczogJ2ljb25mb250IGljb24tYmluZ3R1Jyxcblx0ZmxvYXRCdG5Db250ZW50OiAn5o6I5p2DJ1xufSwge1xuXHRmbG9hdEJ0bkljb25DbGFzczogJ2ljb25mb250IGljb24tYmluZ3R1Jyxcblx0ZmxvYXRCdG5Db250ZW50OiAn5Yib5bu6J1xufV1cblxuXG5QYWdlKHtcblxuXHQvKipcblx0ICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG5cdCAqL1xuXHRkYXRhOiB7XG5cdFx0aXRlbXM6IFt7XG5cdFx0XHRpZDogMCxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrRnBSLmpwZycsXG5cdFx0XHRuYW1lOiAn5a6Y5pa56aG555uu576k6aG555uu576k6aG555uu576k6aG555uu576k6aG555uu576k6aG555uu576k6aG555uu576k6aG555uu576k6aG555uu576k6aG555uu576kJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRpZDogMSxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrazExLmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMScsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0aWQ6IDIsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa0N0Si5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGlkOiAzLFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRpZDogNCxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0aWQ6IDUsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGlkOiA2LFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRpZDogNyxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0aWQ6IDgsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGlkOiA5LFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9XSxcblx0XHRpc0xvZ2luOiBmYWxzZSxcblx0XHRidXR0b25Ub3A6IDEwMDAwLFxuXHRcdGJ1dHRvbkxlZnQ6IDEwMDAwLFxuXHRcdHdpbmRvd0hlaWdodDogMCxcblx0XHR3aW5kb3dXaWR0aDogMCxcblx0XHRzdGFydFBvaW50OiBudWxsLFxuXHRcdGZsb2F0QnRuSWNvbkNsYXNzOiAnJyxcblx0XHRmbG9hdEJ0bkNvbnRlbnQ6ICcnXG5cdH0sXG5cblx0LyoqXG5cdCAqIFwi5pu05aSaXCLmjInpkq7ngrnlh7vkuovku7Zcblx0ICogQHBhcmFtIGUg54K55Ye75LqL5Lu2XG5cdCAqL1xuXHRvbk1vcmUoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Ly8gZW51bSBhY3Rpb25TaGVldCB7XG5cdFx0Ly8gXHQn5re75Yqg5YWx5Lqr5oiQ5ZGYJyA9IDAsXG5cdFx0Ly8gXHQn5L+u5pS56aG555uu5ZCN56ewJyA9IDEsXG5cdFx0Ly8gXHQn6YCA5Ye66aG555uuJyA9IDJcblx0XHQvLyB9XG5cdFx0d3guc2hvd0FjdGlvblNoZWV0KHtcblx0XHRcdGl0ZW1MaXN0OiBbJ+a3u+WKoOWFseS6q+aIkOWRmCcsICfkv67mlLnpobnnm67lkI3np7AnLCAn6YCA5Ye66aG555uuJ10sXG5cdFx0XHRzdWNjZXNzOiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5TaG93QWN0aW9uU2hlZXRTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpID0+IHtcblx0XHRcdFx0c3dpdGNoIChyZXMudGFwSW5kZXgpIHtcblx0XHRcdFx0XHRjYXNlIDA6IHtcblx0XHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5by55Ye65aW95Y+L6YCJ5oup55WM6Z2iJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlIDE6IHtcblx0XHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5by55Ye66L6T5YWl5qih5Z2XJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlIDI6IHtcblx0XHRcdFx0XHRcdHd4LnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5rOo5oSP4pqg77iPJyxcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+aCqOehruWumumAgOWHuuivpee+pOe7hO+8nycsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLlNob3dNb2RhbFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmk43kvZzmiJDlip8nXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH0sXG5cdFx0XHRmYWlsOiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZW5lcmFsQ2FsbGJhY2tSZXN1bHQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2ZhaWwnKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cdC8qKlxuXHQgKiDliJvlu7rpobnnm67ngrnlh7vkuovku7Zcblx0ICogQHBhcmFtIGUgXG5cdCAqL1xuXHRvbkNyZWF0ZShlOiBhbnkpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy9wYWdlcy9mb3VuZC9mb3VuZCdcblx0XHR9KVxuXHR9LFxuXG5cdC8qKlxuXHQgKiDojrflj5bmjojmnYPngrnlh7vkuovku7Zcblx0ICogQHBhcmFtIGUgXG5cdCAqL1xuXHRvbkdldEF1dGhvcml6YXRpb24oZTogYW55KSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IGRldGFpbDogV2VjaGF0TWluaXByb2dyYW0uR2V0VXNlckluZm9TdWNjZXNzQ2FsbGJhY2tSZXN1bHQgPSBlLmRldGFpbDtcblx0XHRcdFVzZXIuc2V0VXNlckluZm8oZGV0YWlsLnVzZXJJbmZvKTtcblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdGlzTG9naW46IHRydWUsXG5cdFx0XHRcdC4uLmZsb2F0QnRuSWNvblBhcmFtc1sxXSxcblx0XHRcdH0pXG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhlcnIpO1xuXHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0dGl0bGU6ICfmjojmnYPlpLHotKUnXG5cdFx0XHR9KVxuXHRcdH1cblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDpobnnm67or6bmg4Xngrnlh7vkuovku7Zcblx0ICovXG5cdHRvRGV0YWlsKCkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnL3BhZ2VzL2RldGFpbC9kZXRhaWw/Z2lkPTEnXG5cdFx0fSlcblx0fSxcblxuXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG5cdCAqL1xuXHRvbkxvYWQoKSB7XG5cdFx0d3guZ2V0U2V0dGluZyh7XG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdGlmIChyZXMuYXV0aFNldHRpbmdbXCJzY29wZS51c2VySW5mb1wiXSkge1xuXHRcdFx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdFx0XHRpc0xvZ2luOiB0cnVlLFxuXHRcdFx0XHRcdFx0Li4uZmxvYXRCdG5JY29uUGFyYW1zWzFdLFxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0XHRcdGlzTG9naW46IGZhbHNlLFxuXHRcdFx0XHRcdFx0Li4uZmxvYXRCdG5JY29uUGFyYW1zWzBdXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Z2V0V2luZG93SW5mbygocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZXRTeXN0ZW1JbmZvU3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IHJlcy53aW5kb3dIZWlnaHQsXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiByZXMud2luZG93V2lkdGhcblx0XHRcdH0pXG5cdFx0fSk7XG5cdFx0XG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG5cdCAqL1xuXHRvblJlYWR5KCkge1xuXHRcdHRoaXMuX2FkanVzdEZsb2F0QnV0dG9uTG9jYXRpb24oKTtcblx0fSxcblxuXHRfYWRqdXN0RmxvYXRCdXR0b25Mb2NhdGlvbigpIHtcblx0XHRpZiAodGhpcy5kYXRhLmJ1dHRvbkxlZnQgPj0gdGhpcy5kYXRhLndpbmRvd1dpZHRoKSB7XG5cdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHRidXR0b25MZWZ0OiB0aGlzLmRhdGEud2luZG93V2lkdGggLSAxMTBcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAodGhpcy5kYXRhLmJ1dHRvblRvcCA+PSB0aGlzLmRhdGEud2luZG93SGVpZ2h0KSB7XG5cdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHRidXR0b25Ub3A6IHRoaXMuZGF0YS53aW5kb3dIZWlnaHQgLSAxMjBcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcblx0ICovXG5cdG9uU2hvdygpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuXHQgKi9cblx0b25IaWRlKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG5cdCAqL1xuXHRvblVubG9hZCgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuXHQgKi9cblx0b25QdWxsRG93blJlZnJlc2goKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG5cdCAqL1xuXHRvblJlYWNoQm90dG9tKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuXHQgKi9cblx0b25TaGFyZUFwcE1lc3NhZ2Uob3B0cyk6IFdlY2hhdE1pbmlwcm9ncmFtLlBhZ2UuSUN1c3RvbVNoYXJlQ29udGVudCB7XG5cdFx0Y29uc29sZS5sb2cob3B0cy50YXJnZXQpXG5cdFx0cmV0dXJuIHt9XG5cdH1cbn0pIl19