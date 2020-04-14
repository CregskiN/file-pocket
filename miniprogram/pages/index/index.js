"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        isLogin: false,
        buttonTop: 10000,
        buttonLeft: 10000,
        windowHeight: 0,
        windowWidth: 0,
        startPoint: null,
        floatBtnIconClass: '',
        isAuthorized: false,
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
    onAuthorize: function () {
        console.log('toogle isAuthorized', this.data);
        this.setData({
            isAuthorized: true
        });
    },
    onLoad: function () {
        var _this = this;
        var init = app.init();
        init.then(function (globalData) {
            var isAuthorized = globalData.isAuthorized, isLogin = globalData.isLogin;
            console.log('Index.onload - globalData is', globalData);
            _this.setData({
                isLogin: isLogin,
                floatBtnIconClass: floatBtnIconClass,
                isAuthorized: isAuthorized
            });
            util_1.getWindowInfo().then(function (res) {
                _this.setData({
                    windowHeight: res.windowHeight,
                    windowWidth: res.windowWidth
                });
            });
        }).catch(function (err) {
            console.log('页面初始化错误', err);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHlDQUFpRDtBQUdqRCxJQUFNLEdBQUcsR0FBRyxNQUFNLEVBQUUsQ0FBQztBQUVyQixJQUFNLGlCQUFpQixHQUFHLHNCQUFzQixDQUFDO0FBR2pELElBQUksQ0FBQztJQUtKLElBQUksRUFBRTtRQUNMLEtBQUssRUFBRSxDQUFDO2dCQUNQLEdBQUcsRUFBRSxDQUFDO2dCQUNOLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BELElBQUksRUFBRSxrQ0FBa0M7Z0JBQ3hDLEtBQUssRUFBRTtvQkFDTixHQUFHLEVBQUUsRUFBRTtvQkFDUCxHQUFHLEVBQUUsRUFBRTtpQkFDUDthQUNELEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLENBQUM7Z0JBQ04sT0FBTyxFQUFFLDJDQUEyQztnQkFDcEQsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFO29CQUNOLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNQO2FBQ0QsRUFBRTtnQkFDRixHQUFHLEVBQUUsQ0FBQztnQkFDTixPQUFPLEVBQUUsMkNBQTJDO2dCQUNwRCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUU7b0JBQ04sR0FBRyxFQUFFLEVBQUU7b0JBQ1AsR0FBRyxFQUFFLEVBQUU7aUJBQ1A7YUFDRCxFQUFFO2dCQUNGLEdBQUcsRUFBRSxDQUFDO2dCQUNOLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BELElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRTtvQkFDTixHQUFHLEVBQUUsRUFBRTtvQkFDUCxHQUFHLEVBQUUsRUFBRTtpQkFDUDthQUNELEVBQUU7Z0JBQ0YsR0FBRyxFQUFFLENBQUM7Z0JBQ04sT0FBTyxFQUFFLDJDQUEyQztnQkFDcEQsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFO29CQUNOLEdBQUcsRUFBRSxFQUFFO29CQUNQ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QUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFO2FBQ3RDLENBQUMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNsRCxJQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNaLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHO2FBQ3ZDLENBQUMsQ0FBQztTQUNIO0lBQ0YsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUIsRUFBakIsVUFBa0IsSUFBSTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixPQUFPLEVBQUUsQ0FBQTtJQUNWLENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvVXNlcic7XG5pbXBvcnQgeyBnZXRXaW5kb3dJbmZvIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCc7XG5pbXBvcnQgeyBHbG9iYWxEYXRhVHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGluZyc7XG5cbmNvbnN0IGFwcCA9IGdldEFwcCgpO1xuXG5jb25zdCBmbG9hdEJ0bkljb25DbGFzcyA9ICdpY29uZm9udCBpY29uLWJpbmd0dSc7XG5cblxuUGFnZSh7XG5cblx0LyoqXG5cdCAqIOmhtemdoueahOWIneWni+aVsOaNrlxuXHQgKi9cblx0ZGF0YToge1xuXHRcdGl0ZW1zOiBbe1xuXHRcdFx0Z2lkOiAwLFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJyxcblx0XHRcdG5hbWU6ICflrpjmlrnpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqQnLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGdpZDogMSxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrazExLmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMScsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Z2lkOiAyLFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtDdEouanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRnaWQ6IDMsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGdpZDogNCxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Z2lkOiA1LFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRnaWQ6IDYsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGdpZDogNyxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0Z2lkOiA4LFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRnaWQ6IDksXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH1dLFxuXHRcdGlzTG9naW46IGZhbHNlLFxuXHRcdGJ1dHRvblRvcDogMTAwMDAsXG5cdFx0YnV0dG9uTGVmdDogMTAwMDAsXG5cdFx0d2luZG93SGVpZ2h0OiAwLFxuXHRcdHdpbmRvd1dpZHRoOiAwLFxuXHRcdHN0YXJ0UG9pbnQ6IG51bGwsXG5cdFx0ZmxvYXRCdG5JY29uQ2xhc3M6ICcnLFxuXHRcdGlzQXV0aG9yaXplZDogZmFsc2UsXG5cdH0sXG5cblx0LyoqXG5cdCAqIFwi5pu05aSaXCLmjInpkq7ngrnlh7vkuovku7Zcblx0ICogQHBhcmFtIGUg54K55Ye75LqL5Lu2XG5cdCAqL1xuXHRvbk1vcmUoZTogYW55KSB7XG5cdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0Ly8gZW51bSBhY3Rpb25TaGVldCB7XG5cdFx0Ly8gXHQn5re75Yqg5YWx5Lqr5oiQ5ZGYJyA9IDAsXG5cdFx0Ly8gXHQn5L+u5pS56aG555uu5ZCN56ewJyA9IDEsXG5cdFx0Ly8gXHQn6YCA5Ye66aG555uuJyA9IDJcblx0XHQvLyB9XG5cdFx0d3guc2hvd0FjdGlvblNoZWV0KHtcblx0XHRcdGl0ZW1MaXN0OiBbJ+a3u+WKoOWFseS6q+aIkOWRmCcsICfkv67mlLnpobnnm67lkI3np7AnLCAn6YCA5Ye66aG555uuJ10sXG5cdFx0XHRzdWNjZXNzOiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5TaG93QWN0aW9uU2hlZXRTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpID0+IHtcblx0XHRcdFx0c3dpdGNoIChyZXMudGFwSW5kZXgpIHtcblx0XHRcdFx0XHRjYXNlIDA6IHtcblx0XHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5by55Ye65aW95Y+L6YCJ5oup55WM6Z2iJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlIDE6IHtcblx0XHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5by55Ye66L6T5YWl5qih5Z2XJ1xuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjYXNlIDI6IHtcblx0XHRcdFx0XHRcdHd4LnNob3dNb2RhbCh7XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAn5rOo5oSP4pqg77iPJyxcblx0XHRcdFx0XHRcdFx0Y29udGVudDogJ+aCqOehruWumumAgOWHuuivpee+pOe7hO+8nycsXG5cdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLlNob3dNb2RhbFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0d3guc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICfmk43kvZzmiJDlip8nXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdH0sXG5cdFx0XHRmYWlsOiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZW5lcmFsQ2FsbGJhY2tSZXN1bHQpID0+IHtcblx0XHRcdFx0Y29uc29sZS5sb2coJ2ZhaWwnKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXG5cdC8qKlxuXHQgKiDliJvlu7rpobnnm67ngrnlh7vkuovku7Zcblx0ICogQHBhcmFtIGUgXG5cdCAqL1xuXHRvbkNyZWF0ZShlOiBhbnkpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy9wYWdlcy9mb3VuZC9mb3VuZCdcblx0XHR9KVxuXHR9LFxuXG5cblx0LyoqXG5cdCAqIOWujOaIkOaOiOadg+mAu+i+ke+8jOaSpOmZpOaOiOadg+eql+WPo1xuXHQgKi9cblx0b25BdXRob3JpemUoKSB7XG5cdFx0Y29uc29sZS5sb2coJ3Rvb2dsZSBpc0F1dGhvcml6ZWQnLCB0aGlzLmRhdGEpO1xuXG5cdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdGlzQXV0aG9yaXplZDogdHJ1ZVxuXHRcdH0pXG5cdH0sXG5cblxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuXHQgKi9cblx0b25Mb2FkKCkge1xuXG5cblx0XHRjb25zdCBpbml0OiBQcm9taXNlPEdsb2JhbERhdGFUeXBlPiA9IGFwcC5pbml0KCk7XG5cdFx0aW5pdC50aGVuKGdsb2JhbERhdGEgPT4ge1xuXHRcdFx0Y29uc3QgeyBpc0F1dGhvcml6ZWQsIGlzTG9naW4gfSA9IGdsb2JhbERhdGE7XG5cdFx0XHRjb25zb2xlLmxvZygnSW5kZXgub25sb2FkIC0gZ2xvYmFsRGF0YSBpcycsIGdsb2JhbERhdGEpO1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0aXNMb2dpbixcblx0XHRcdFx0ZmxvYXRCdG5JY29uQ2xhc3MsXG5cdFx0XHRcdGlzQXV0aG9yaXplZFxuXHRcdFx0fSlcblxuXHRcdFx0Z2V0V2luZG93SW5mbygpLnRoZW4ocmVzID0+IHtcblx0XHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0XHR3aW5kb3dIZWlnaHQ6IHJlcy53aW5kb3dIZWlnaHQsXG5cdFx0XHRcdFx0d2luZG93V2lkdGg6IHJlcy53aW5kb3dXaWR0aFxuXHRcdFx0XHR9KVxuXHRcdFx0fSlcblx0XHR9KS5jYXRjaChlcnIgPT4geyAvLyDmiqXplJnpgLvovpHnmoTmnIDlkI7kuIDpgZPpmLLnur9cblx0XHRcdGNvbnNvbGUubG9nKCfpobXpnaLliJ3lp4vljJbplJnor68nLCBlcnIpO1xuXHRcdH0pXG5cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcblx0ICovXG5cdG9uUmVhZHkoKSB7XG5cdFx0dGhpcy5fYWRqdXN0RmxvYXRCdXR0b25Mb2NhdGlvbigpO1xuXHR9LFxuXG5cdF9hZGp1c3RGbG9hdEJ1dHRvbkxvY2F0aW9uKCkge1xuXHRcdGlmICh0aGlzLmRhdGEuYnV0dG9uTGVmdCA+PSB0aGlzLmRhdGEud2luZG93V2lkdGgpIHtcblx0XHRcdHRoaXMuc2V0RGF0YSh7XG5cdFx0XHRcdGJ1dHRvbkxlZnQ6IHRoaXMuZGF0YS53aW5kb3dXaWR0aCAtIDgwXG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZGF0YS5idXR0b25Ub3AgPj0gdGhpcy5kYXRhLndpbmRvd0hlaWdodCkge1xuXHRcdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdFx0YnV0dG9uVG9wOiB0aGlzLmRhdGEud2luZG93SGVpZ2h0IC0gMTAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG5cdCAqL1xuXHRvblNob3coKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cblx0ICovXG5cdG9uSGlkZSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuXHQgKi9cblx0b25VbmxvYWQoKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcblx0ICovXG5cdG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuXHQgKi9cblx0b25SZWFjaEJvdHRvbSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcblx0ICovXG5cdG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuXHRcdGNvbnNvbGUubG9nKG9wdHMudGFyZ2V0KVxuXHRcdHJldHVybiB7fVxuXHR9XG59KSJdfQ==