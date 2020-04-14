"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../../models/User"));
var util_1 = require("../../utils/util");
var app = getApp();
var floatBtnIconClass = 'iconfont icon-bingtu';
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
        isLogin: true,
        buttonTop: 10000,
        buttonLeft: 10000,
        windowHeight: 0,
        windowWidth: 0,
        startPoint: null,
        floatBtnIconClass: '',
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
            this.setData({
                isLogin: true,
                floatBtnIconClass: floatBtnIconClass,
            });
        }
        catch (err) {
            console.log(err);
            wx.showToast({
                title: '授权失败'
            });
        }
    },
    onLoad: function () {
        var _this = this;
        console.log(app.globalData);
        wx.getSetting({
            success: function (res) {
                _this.setData({
                    floatBtnIconClass: floatBtnIconClass
                });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJEQUFxQztBQUNyQyx5Q0FBaUQ7QUFDakQsSUFBTSxHQUFHLEdBQUcsTUFBTSxFQUFFLENBQUM7QUFFckIsSUFBTSxpQkFBaUIsR0FBRyxzQkFBc0IsQ0FBQztBQUdqRCxJQUFJLENBQUM7SUFLSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsQ0FBQztnQkFDTixPQUFPLEVBQUUsMkNBQTJDO2dCQUNwRCxJQUFJLEVBQUUsa0NBQWtDO2dCQUN4QyxLQUFLLEVBQUU7b0JBQ04sR0FBRyxFQUFFLEVBQUU7b0JBQ1AsR0FBRyxFQUFFLEVBQUU7aUJBQ1A7YUFDRCxFQUFFO2dCQUNGLEdBQUcsRUFBRSxDQUFDO2dCQUNOLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BELElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRTtvQkFDTixHQUFHLEVBQUUsRUFBRTtvQkFDUCxHQUFHLEVBQUUsRUFBRTtpQkFDUDthQUNELEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLENBQUM7Z0JBQ04sT0FBTyxFQUFFLDJDQUEyQztnQkFDcEQsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFO29CQUNOLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNQO2FBQ0QsRUFBRTtnQkFDRixHQUFHLEVBQUUsQ0FBQztnQkFDTixPQUFPLEVBQUUsMkNBQTJDO2dCQUNwRCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUU7b0JBQ04sR0FBRyxFQUFFLEVBQUU7b0JBQ1AsR0FBRyxFQUFFLEVBQUU7aUJBQ1A7YUFDRCxFQUFFO2dCQUNGLEdBQUcsRUFBRSxDQUFDO2dCQUNOLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BELElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRTtvQkFDTixHQUFH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SUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRTthQUN0QyxDQUFDLENBQUM7U0FDSDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDbEQsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWixTQUFTLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsR0FBRzthQUN2QyxDQUFDLENBQUM7U0FDSDtJQUNGLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDVixDQUFDO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgZ2V0V2luZG93SW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xuY29uc3QgYXBwID0gZ2V0QXBwKCk7XG5cbmNvbnN0IGZsb2F0QnRuSWNvbkNsYXNzID0gJ2ljb25mb250IGljb24tYmluZ3R1JztcblxuXG5QYWdlKHtcblxuXHQvKipcblx0ICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG5cdCAqL1xuXHRkYXRhOiB7XG5cdFx0aXRlbXM6IFt7XG5cdFx0XHRnaWQ6IDAsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa0ZwUi5qcGcnLFxuXHRcdFx0bmFtZTogJ+WumOaWuemhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pOmhueebrue+pCcsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Z2lkOiAxLFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtrMTEuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQxJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRnaWQ6IDIsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa0N0Si5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGdpZDogMyxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Z2lkOiA0LFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRnaWQ6IDUsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGdpZDogNixcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Z2lkOiA3LFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRnaWQ6IDgsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGdpZDogOSxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fV0sXG5cdFx0aXNMb2dpbjogdHJ1ZSxcblx0XHRidXR0b25Ub3A6IDEwMDAwLFxuXHRcdGJ1dHRvbkxlZnQ6IDEwMDAwLFxuXHRcdHdpbmRvd0hlaWdodDogMCxcblx0XHR3aW5kb3dXaWR0aDogMCxcblx0XHRzdGFydFBvaW50OiBudWxsLFxuXHRcdGZsb2F0QnRuSWNvbkNsYXNzOiAnJyxcblx0fSxcblxuXHQvKipcblx0ICogXCLmm7TlpJpcIuaMiemSrueCueWHu+S6i+S7tlxuXHQgKiBAcGFyYW0gZSDngrnlh7vkuovku7Zcblx0ICovXG5cdG9uTW9yZShlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHQvLyBlbnVtIGFjdGlvblNoZWV0IHtcblx0XHQvLyBcdCfmt7vliqDlhbHkuqvmiJDlkZgnID0gMCxcblx0XHQvLyBcdCfkv67mlLnpobnnm67lkI3np7AnID0gMSxcblx0XHQvLyBcdCfpgIDlh7rpobnnm64nID0gMlxuXHRcdC8vIH1cblx0XHR3eC5zaG93QWN0aW9uU2hlZXQoe1xuXHRcdFx0aXRlbUxpc3Q6IFsn5re75Yqg5YWx5Lqr5oiQ5ZGYJywgJ+S/ruaUuemhueebruWQjeensCcsICfpgIDlh7rpobnnm64nXSxcblx0XHRcdHN1Y2Nlc3M6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLlNob3dBY3Rpb25TaGVldFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xuXHRcdFx0XHRcdGNhc2UgMDoge1xuXHRcdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflvLnlh7rlpb3lj4vpgInmi6nnlYzpnaInXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhc2UgMToge1xuXHRcdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflvLnlh7rovpPlhaXmqKHlnZcnXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhc2UgMjoge1xuXHRcdFx0XHRcdFx0d3guc2hvd01vZGFsKHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfms6jmhI/imqDvuI8nLFxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAn5oKo56Gu5a6a6YCA5Ye66K+l576k57uE77yfJyxcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlczogV2VjaGF0TWluaXByb2dyYW0uU2hvd01vZGFsU3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aTjeS9nOaIkOWKnydcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fSxcblx0XHRcdGZhaWw6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLkdlbmVyYWxDYWxsYmFja1Jlc3VsdCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZmFpbCcpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblx0LyoqXG5cdCAqIOWIm+W7uumhueebrueCueWHu+S6i+S7tlxuXHQgKiBAcGFyYW0gZSBcblx0ICovXG5cdG9uQ3JlYXRlKGU6IGFueSkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnL3BhZ2VzL2ZvdW5kL2ZvdW5kJ1xuXHRcdH0pXG5cdH0sXG5cblx0LyoqXG5cdCAqIOiOt+WPluaOiOadg+eCueWHu+S6i+S7tlxuXHQgKiBAcGFyYW0gZSBcblx0ICovXG5cdG9uR2V0QXV0aG9yaXphdGlvbihlOiBhbnkpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGV0YWlsOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZXRVc2VySW5mb1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdCA9IGUuZGV0YWlsO1xuXHRcdFx0VXNlci5zZXRVc2VySW5mbyhkZXRhaWwudXNlckluZm8pO1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0aXNMb2dpbjogdHJ1ZSxcblx0XHRcdFx0ZmxvYXRCdG5JY29uQ2xhc3MsXG5cdFx0XHR9KVxuXHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0Y29uc29sZS5sb2coZXJyKTtcblx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdHRpdGxlOiAn5o6I5p2D5aSx6LSlJ1xuXHRcdFx0fSlcblx0XHR9XG5cblx0fSxcblxuXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG5cdCAqL1xuXHRvbkxvYWQoKSB7XG5cdFx0Ly8gY29uc29sZS5sb2coJ2NsYXNzIGlzICcsZmxvYXRCdG5JY29uQ2xhc3MpXG5cdFx0Y29uc29sZS5sb2coYXBwLmdsb2JhbERhdGEpXG5cdFx0d3guZ2V0U2V0dGluZyh7XG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdFx0Ly8gaXNMb2dpbjogdHJ1ZSxcblx0XHRcdFx0XHRmbG9hdEJ0bkljb25DbGFzc1xuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Z2V0V2luZG93SW5mbygocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZXRTeXN0ZW1JbmZvU3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG5cdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHR3aW5kb3dIZWlnaHQ6IHJlcy53aW5kb3dIZWlnaHQsXG5cdFx0XHRcdHdpbmRvd1dpZHRoOiByZXMud2luZG93V2lkdGhcblx0XHRcdH0pXG5cdFx0fSk7XG5cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcblx0ICovXG5cdG9uUmVhZHkoKSB7XG5cdFx0dGhpcy5fYWRqdXN0RmxvYXRCdXR0b25Mb2NhdGlvbigpO1xuXHR9LFxuXG5cdF9hZGp1c3RGbG9hdEJ1dHRvbkxvY2F0aW9uKCkge1xuXHRcdGlmICh0aGlzLmRhdGEuYnV0dG9uTGVmdCA+PSB0aGlzLmRhdGEud2luZG93V2lkdGgpIHtcblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdGJ1dHRvbkxlZnQ6IHRoaXMuZGF0YS53aW5kb3dXaWR0aCAtIDgwXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZGF0YS5idXR0b25Ub3AgPj0gdGhpcy5kYXRhLndpbmRvd0hlaWdodCkge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0YnV0dG9uVG9wOiB0aGlzLmRhdGEud2luZG93SGVpZ2h0IC0gMTAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG5cdCAqL1xuXHRvblNob3coKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cblx0ICovXG5cdG9uSGlkZSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuXHQgKi9cblx0b25VbmxvYWQoKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcblx0ICovXG5cdG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuXHQgKi9cblx0b25SZWFjaEJvdHRvbSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcblx0ICovXG5cdG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuXHRcdGNvbnNvbGUubG9nKG9wdHMudGFyZ2V0KVxuXHRcdHJldHVybiB7fVxuXHR9XG59KSJdfQ==