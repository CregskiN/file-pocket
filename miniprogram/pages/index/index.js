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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsMENBQXFDO0FBQ3JDLHlDQUFpRDtBQUVqRCxJQUFNLGtCQUFrQixHQUFHLENBQUM7UUFDM0IsaUJBQWlCLEVBQUUsc0JBQXNCO1FBQ3pDLGVBQWUsRUFBRSxJQUFJO0tBQ3JCLEVBQUU7UUFDRixpQkFBaUIsRUFBRSxzQkFBc0I7UUFDekMsZUFBZSxFQUFFLElBQUk7S0FDckIsQ0FBQyxDQUFBO0FBR0YsSUFBSSxDQUFDO0lBS0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLENBQUM7Z0JBQ04sT0FBTyxFQUFFLDJDQUEyQztnQkFDcEQsSUFBSSxFQUFFLGtDQUFrQztnQkFDeEMsS0FBSyxFQUFFO29CQUNOLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNQO2FBQ0QsRUFBRTtnQkFDRixHQUFHLEVBQUUsQ0FBQztnQkFDTixPQUFPLEVBQUUsMkNBQTJDO2dCQUNwRCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUU7b0JBQ04sR0FBRyxFQUFFLEVBQUU7b0JBQ1AsR0FBRyxFQUFFLEVBQUU7aUJBQ1A7YUFDRCxFQUFFO2dCQUNGLEdBQUcsRUFBRSxDQUFDO2dCQUNOLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BELElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRTtvQkFDTixHQUFHLEVBQUUsRUFBRTtvQkFDUCxHQUFHLEVBQUUsRUFBRTtpQkFDUDthQUNELEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLENBQUM7Z0JBQ04sT0FBTyxFQUFFLDJDQUEyQztnQkFDcEQsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFO29CQUNOLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNQO2FBQ0QsRUFBRTtnQkFDRixHQUFH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QztJQUVKLENBQUM7SUFLRCxPQUFPO1FBQ04sSUFBSSxDQUFDLDBCQUEwQixFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELDBCQUEwQjtRQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1osVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEdBQUc7YUFDdkMsQ0FBQyxDQUFDO1NBQ0g7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xELElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1osU0FBUyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUc7YUFDdkMsQ0FBQyxDQUFDO1NBQ0g7SUFDRixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQixFQUFqQixVQUFrQixJQUFJO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sRUFBRSxDQUFBO0lBQ1YsQ0FBQztDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy9Vc2VyJztcbmltcG9ydCB7IGdldFdpbmRvd0luZm8gfSBmcm9tICcuLi8uLi91dGlscy91dGlsJztcblxuY29uc3QgZmxvYXRCdG5JY29uUGFyYW1zID0gW3tcblx0ZmxvYXRCdG5JY29uQ2xhc3M6ICdpY29uZm9udCBpY29uLWJpbmd0dScsXG5cdGZsb2F0QnRuQ29udGVudDogJ+aOiOadgydcbn0sIHtcblx0ZmxvYXRCdG5JY29uQ2xhc3M6ICdpY29uZm9udCBpY29uLWJpbmd0dScsXG5cdGZsb2F0QnRuQ29udGVudDogJ+WIm+W7uidcbn1dXG5cblxuUGFnZSh7XG5cblx0LyoqXG5cdCAqIOmhtemdoueahOWIneWni+aVsOaNrlxuXHQgKi9cblx0ZGF0YToge1xuXHRcdGl0ZW1zOiBbe1xuXHRcdFx0Z2lkOiAwLFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJyxcblx0XHRcdG5hbWU6ICflrpjmlrnpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqQnLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGdpZDogMSxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrazExLmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMScsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Z2lkOiAyLFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtDdEouanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRnaWQ6IDMsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGdpZDogNCxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Z2lkOiA1LFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRnaWQ6IDYsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGdpZDogNyxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Z2lkOiA4LFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRnaWQ6IDksXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH1dLFxuXHRcdGlzTG9naW46IGZhbHNlLFxuXHRcdGJ1dHRvblRvcDogMTAwMDAsXG5cdFx0YnV0dG9uTGVmdDogMTAwMDAsXG5cdFx0d2luZG93SGVpZ2h0OiAwLFxuXHRcdHdpbmRvd1dpZHRoOiAwLFxuXHRcdHN0YXJ0UG9pbnQ6IG51bGwsXG5cdFx0ZmxvYXRCdG5JY29uQ2xhc3M6ICcnLFxuXHRcdGZsb2F0QnRuQ29udGVudDogJydcblx0fSxcblxuXHQvKipcblx0ICogXCLmm7TlpJpcIuaMiemSrueCueWHu+S6i+S7tlxuXHQgKiBAcGFyYW0gZSDngrnlh7vkuovku7Zcblx0ICovXG5cdG9uTW9yZShlOiBhbnkpIHtcblx0XHRjb25zb2xlLmxvZyhlKTtcblx0XHQvLyBlbnVtIGFjdGlvblNoZWV0IHtcblx0XHQvLyBcdCfmt7vliqDlhbHkuqvmiJDlkZgnID0gMCxcblx0XHQvLyBcdCfkv67mlLnpobnnm67lkI3np7AnID0gMSxcblx0XHQvLyBcdCfpgIDlh7rpobnnm64nID0gMlxuXHRcdC8vIH1cblx0XHR3eC5zaG93QWN0aW9uU2hlZXQoe1xuXHRcdFx0aXRlbUxpc3Q6IFsn5re75Yqg5YWx5Lqr5oiQ5ZGYJywgJ+S/ruaUuemhueebruWQjeensCcsICfpgIDlh7rpobnnm64nXSxcblx0XHRcdHN1Y2Nlc3M6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLlNob3dBY3Rpb25TaGVldFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuXHRcdFx0XHRzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xuXHRcdFx0XHRcdGNhc2UgMDoge1xuXHRcdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflvLnlh7rlpb3lj4vpgInmi6nnlYzpnaInXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhc2UgMToge1xuXHRcdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICflvLnlh7rovpPlhaXmqKHlnZcnXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGNhc2UgMjoge1xuXHRcdFx0XHRcdFx0d3guc2hvd01vZGFsKHtcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICfms6jmhI/imqDvuI8nLFxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiAn5oKo56Gu5a6a6YCA5Ye66K+l576k57uE77yfJyxcblx0XHRcdFx0XHRcdFx0c3VjY2VzczogKHJlczogV2VjaGF0TWluaXByb2dyYW0uU2hvd01vZGFsU3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHJlcy5jb25maXJtKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+aTjeS9nOaIkOWKnydcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0fSxcblx0XHRcdGZhaWw6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLkdlbmVyYWxDYWxsYmFja1Jlc3VsdCkgPT4ge1xuXHRcdFx0XHRjb25zb2xlLmxvZygnZmFpbCcpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0sXG5cblx0LyoqXG5cdCAqIOWIm+W7uumhueebrueCueWHu+S6i+S7tlxuXHQgKiBAcGFyYW0gZSBcblx0ICovXG5cdG9uQ3JlYXRlKGU6IGFueSkge1xuXHRcdHd4Lm5hdmlnYXRlVG8oe1xuXHRcdFx0dXJsOiAnL3BhZ2VzL2ZvdW5kL2ZvdW5kJ1xuXHRcdH0pXG5cdH0sXG5cblx0LyoqXG5cdCAqIOiOt+WPluaOiOadg+eCueWHu+S6i+S7tlxuXHQgKiBAcGFyYW0gZSBcblx0ICovXG5cdG9uR2V0QXV0aG9yaXphdGlvbihlOiBhbnkpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGV0YWlsOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZXRVc2VySW5mb1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdCA9IGUuZGV0YWlsO1xuXHRcdFx0VXNlci5zZXRVc2VySW5mbyhkZXRhaWwudXNlckluZm8pO1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0aXNMb2dpbjogdHJ1ZSxcblx0XHRcdFx0Li4uZmxvYXRCdG5JY29uUGFyYW1zWzFdLFxuXHRcdFx0fSlcblx0XHR9IGNhdGNoIChlcnIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGVycik7XG5cdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHR0aXRsZTogJ+aOiOadg+Wksei0pSdcblx0XHRcdH0pXG5cdFx0fVxuXG5cdH0sXG5cblxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuXHQgKi9cblx0b25Mb2FkKCkge1xuXHRcdHd4LmdldFNldHRpbmcoe1xuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRpZiAocmVzLmF1dGhTZXR0aW5nW1wic2NvcGUudXNlckluZm9cIl0pIHtcblx0XHRcdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHRcdFx0aXNMb2dpbjogdHJ1ZSxcblx0XHRcdFx0XHRcdC4uLmZsb2F0QnRuSWNvblBhcmFtc1sxXSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdFx0XHRpc0xvZ2luOiBmYWxzZSxcblx0XHRcdFx0XHRcdC4uLmZsb2F0QnRuSWNvblBhcmFtc1swXVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdGdldFdpbmRvd0luZm8oKHJlczogV2VjaGF0TWluaXByb2dyYW0uR2V0U3lzdGVtSW5mb1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0d2luZG93SGVpZ2h0OiByZXMud2luZG93SGVpZ2h0LFxuXHRcdFx0XHR3aW5kb3dXaWR0aDogcmVzLndpbmRvd1dpZHRoXG5cdFx0XHR9KVxuXHRcdH0pO1xuXHRcdFxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuXHQgKi9cblx0b25SZWFkeSgpIHtcblx0XHR0aGlzLl9hZGp1c3RGbG9hdEJ1dHRvbkxvY2F0aW9uKCk7XG5cdH0sXG5cblx0X2FkanVzdEZsb2F0QnV0dG9uTG9jYXRpb24oKSB7XG5cdFx0aWYgKHRoaXMuZGF0YS5idXR0b25MZWZ0ID49IHRoaXMuZGF0YS53aW5kb3dXaWR0aCkge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0YnV0dG9uTGVmdDogdGhpcy5kYXRhLndpbmRvd1dpZHRoIC0gMTEwXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZGF0YS5idXR0b25Ub3AgPj0gdGhpcy5kYXRhLndpbmRvd0hlaWdodCkge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0YnV0dG9uVG9wOiB0aGlzLmRhdGEud2luZG93SGVpZ2h0IC0gMTIwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG5cdCAqL1xuXHRvblNob3coKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cblx0ICovXG5cdG9uSGlkZSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuXHQgKi9cblx0b25VbmxvYWQoKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcblx0ICovXG5cdG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuXHQgKi9cblx0b25SZWFjaEJvdHRvbSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcblx0ICovXG5cdG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuXHRcdGNvbnNvbGUubG9nKG9wdHMudGFyZ2V0KVxuXHRcdHJldHVybiB7fVxuXHR9XG59KSJdfQ==