"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../../models/User");
var userInstance = User_1.default.getInstance();
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
    getAuthorization: function (e) {
        this.setData({
            isLogin: true
        });
        var detail = e.detail;
        userInstance.setUserInfo(detail.userInfo);
    },
    onLoad: function () {
    },
    onReady: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUFxQztBQUVyQyxJQUFNLFlBQVksR0FBRyxjQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFeEMsSUFBSSxDQUFDO0lBY0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLENBQUM7Z0JBQ1AsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLDJDQUEyQztnQkFDcEQsSUFBSSxFQUFFLGtDQUFrQztnQkFDeEMsS0FBSyxFQUFFO29CQUNOLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNQO2FBQ0QsRUFBRTtnQkFDRixFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsMkNBQTJDO2dCQUNwRCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUU7b0JBQ04sR0FBRyxFQUFFLEVBQUU7b0JBQ1AsR0FBRyxFQUFFLEVBQUU7aUJBQ1A7YUFDRCxFQUFFO2dCQUNGLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSwyQ0FBMkM7Z0JBQ3BELElBQUksRUFBRSxNQUFNO2dCQUNaLEtBQUssRUFBRTtvQkFDTixHQUFHLEVBQUUsRUFBRTtvQkFDUCxHQUFHLEVBQUUsRUFBRTtpQkFDUDthQUNELEVBQUU7Z0JBQ0YsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLDJDQUEyQztnQkFDcEQsSUFBSSxFQUFFLE1BQU07Z0JBQ1osS0FBSyxFQUFFO29CQUNOLEdBQUcsRUFBRSxFQUFFO29CQUNQLEdBQUcsRUFBRSxFQUFFO2lCQUNQO2FBQ0QsRUFBRTtnQkFDRixFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsMkNBQTJDO2dCQUNwRCxJQUFJLEVBQUUsTUFBTTtnQkFDWixLQUFLLEVBQUU7b0JBQ04sR0FBRyxFQUFFLEVBQUU7b0JBQ1AsR0FBRyxFQUFFLEVBQUU7aUJBQ1A7YUFD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RCxNQUFNO0lBTU4sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQixFQUFqQixVQUFrQixJQUFJO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sRUFBRSxDQUFBO0lBQ1YsQ0FBQztDQUNELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy9Vc2VyJztcblxuY29uc3QgdXNlckluc3RhbmNlID0gVXNlci5nZXRJbnN0YW5jZSgpO1xuXG5QYWdlKHtcblxuXG5cdC8qKlxuXHQgKiBcblx0XG5cdGh0dHBzOi8vaW1nY2hyLmNvbS9pL0dZa0ZwUlxuXHRcblx0XG5cdCAqL1xuXG5cdC8qKlxuXHQgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cblx0ICovXG5cdGRhdGE6IHtcblx0XHRpdGVtczogW3tcblx0XHRcdGlkOiAwLFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJyxcblx0XHRcdG5hbWU6ICflrpjmlrnpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqTpobnnm67nvqQnLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGlkOiAxLFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtrMTEuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQxJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRpZDogMixcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrQ3RKLmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0aWQ6IDMsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGlkOiA0LFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRpZDogNSxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0aWQ6IDYsXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH0sIHtcblx0XHRcdGlkOiA3LFxuXHRcdFx0aWNvblVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtQaDkuanBnJyxcblx0XHRcdG5hbWU6ICfnlKjmiLfnvqQyJyxcblx0XHRcdGNvdW50OiB7XG5cdFx0XHRcdGRvYzogMTAsXG5cdFx0XHRcdGltZzogMjBcblx0XHRcdH1cblx0XHR9LCB7XG5cdFx0XHRpZDogOCxcblx0XHRcdGljb25Vcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrUGg5LmpwZycsXG5cdFx0XHRuYW1lOiAn55So5oi3576kMicsXG5cdFx0XHRjb3VudDoge1xuXHRcdFx0XHRkb2M6IDEwLFxuXHRcdFx0XHRpbWc6IDIwXG5cdFx0XHR9XG5cdFx0fSwge1xuXHRcdFx0aWQ6IDksXG5cdFx0XHRpY29uVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa1BoOS5qcGcnLFxuXHRcdFx0bmFtZTogJ+eUqOaIt+e+pDInLFxuXHRcdFx0Y291bnQ6IHtcblx0XHRcdFx0ZG9jOiAxMCxcblx0XHRcdFx0aW1nOiAyMFxuXHRcdFx0fVxuXHRcdH1dLFxuXHRcdGlzTG9naW46IGZhbHNlLFxuXHR9LFxuXG5cdC8qKlxuXHQgKiBcIuabtOWkmlwi5oyJ6ZKu54K55Ye75LqL5Lu2XG5cdCAqIEBwYXJhbSBlIOeCueWHu+S6i+S7tlxuXHQgKi9cblx0b25Nb3JlKGU6IGFueSkge1xuXHRcdGNvbnNvbGUubG9nKGUpO1xuXHRcdC8vIGVudW0gYWN0aW9uU2hlZXQge1xuXHRcdC8vIFx0J+a3u+WKoOWFseS6q+aIkOWRmCcgPSAwLFxuXHRcdC8vIFx0J+S/ruaUuemhueebruWQjeensCcgPSAxLFxuXHRcdC8vIFx0J+mAgOWHuumhueebricgPSAyXG5cdFx0Ly8gfVxuXHRcdHd4LnNob3dBY3Rpb25TaGVldCh7XG5cdFx0XHRpdGVtTGlzdDogWyfmt7vliqDlhbHkuqvmiJDlkZgnLCAn5L+u5pS56aG555uu5ZCN56ewJywgJ+mAgOWHuumhueebriddLFxuXHRcdFx0c3VjY2VzczogKHJlczogV2VjaGF0TWluaXByb2dyYW0uU2hvd0FjdGlvblNoZWV0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG5cdFx0XHRcdHN3aXRjaCAocmVzLnRhcEluZGV4KSB7XG5cdFx0XHRcdFx0Y2FzZSAwOiB7XG5cdFx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W8ueWHuuWlveWPi+mAieaLqeeVjOmdoidcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSAxOiB7XG5cdFx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W8ueWHuui+k+WFpeaooeWdlydcblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0Y2FzZSAyOiB7XG5cdFx0XHRcdFx0XHR3eC5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ+azqOaEj+KaoO+4jycsXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6ICfmgqjnoa7lrprpgIDlh7ror6XnvqTnu4TvvJ8nLFxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5TaG93TW9kYWxTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcblx0XHRcdFx0XHRcdFx0XHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5pON5L2c5oiQ5YqfJ1xuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbDogKHJlczogV2VjaGF0TWluaXByb2dyYW0uR2VuZXJhbENhbGxiYWNrUmVzdWx0KSA9PiB7XG5cdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsJyk7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHRvbkNyZWF0ZShlOiBhbnkpIHtcblx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdHVybDogJy9wYWdlcy9mb3VuZC9mb3VuZCdcblx0XHR9KVxuXHR9LFxuXHRnZXRBdXRob3JpemF0aW9uKGU6YW55KXtcblx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0aXNMb2dpbjogdHJ1ZVxuXHRcdH0pXG5cdFx0Y29uc3QgZGV0YWlsOiBXZWNoYXRNaW5pcHJvZ3JhbS5HZXRVc2VySW5mb1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdCA9IGUuZGV0YWlsO1xuXHRcdHVzZXJJbnN0YW5jZS5zZXRVc2VySW5mbyhkZXRhaWwudXNlckluZm8pO1xuXHR9LFxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cblx0ICovXG5cdG9uTG9hZCgpIHtcblx0XHQvLyB3eC5nZXRTZXR0aW5nKHtcblx0XHQvLyBcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHQvLyBcdFx0Y29uc3QgYXV0aFNldHRpbmdcblx0XHQvLyBcdH1cblx0XHQvLyB9KVxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuXHQgKi9cblx0b25SZWFkeSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuXHQgKi9cblx0b25TaG93KCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG5cdCAqL1xuXHRvbkhpZGUoKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cblx0ICovXG5cdG9uVW5sb2FkKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG5cdCAqL1xuXHRvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcblx0ICovXG5cdG9uUmVhY2hCb3R0b20oKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG5cdCAqL1xuXHRvblNoYXJlQXBwTWVzc2FnZShvcHRzKTogV2VjaGF0TWluaXByb2dyYW0uUGFnZS5JQ3VzdG9tU2hhcmVDb250ZW50IHtcblx0XHRjb25zb2xlLmxvZyhvcHRzLnRhcmdldClcblx0XHRyZXR1cm4ge31cblx0fVxufSkiXX0=