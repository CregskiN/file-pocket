"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../../models/User"));
Page({
    data: {
        nickName: '',
        tid: -1,
        members: [{
                uid: 0,
                tid: 1,
                username: '产品大刘',
                createdTeamCounts: 20,
                managedTeamCounts: 30,
                joinedTeamCounts: 40,
                avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
            }, {
                uid: 1,
                tid: 1,
                username: '产品良木',
                createdTeamCounts: 20,
                managedTeamCounts: 30,
                joinedTeamCounts: 40,
                avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
            }, {
                uid: 2,
                tid: 1,
                username: '后端士杰',
                createdTeamCounts: 20,
                managedTeamCounts: 30,
                joinedTeamCounts: 40,
                avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
            }, {
                uid: 3,
                tid: 1,
                username: '前端老吴',
                createdTeamCounts: 20,
                managedTeamCounts: 30,
                joinedTeamCounts: 40,
                avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
            }, {
                uid: 3,
                tid: 1,
                username: '前端老吴',
                createdTeamCounts: 20,
                managedTeamCounts: 30,
                joinedTeamCounts: 40,
                avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
            }, {
                uid: 3,
                tid: 1,
                username: '前端老吴',
                createdTeamCounts: 20,
                managedTeamCounts: 30,
                joinedTeamCounts: 40,
                avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
            }, {
                uid: 3,
                tid: 1,
                username: '前端老吴',
                createdTeamCounts: 20,
                managedTeamCounts: 30,
                joinedTeamCounts: 40,
                avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
            }, {
                uid: 3,
                tid: 1,
                username: '前端老吴',
                createdTeamCounts: 20,
                managedTeamCounts: 30,
                joinedTeamCounts: 40,
                avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
            }, {
                uid: 3,
                tid: 1,
                username: '前端老吴',
                createdTeamCounts: 20,
                managedTeamCounts: 30,
                joinedTeamCounts: 40,
                avatarUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
            }]
    },
    onDelete: function (options) {
        var _a = options.detail, uid = _a.uid, tid = _a.tid;
    },
    onInvite: function () {
    },
    onLoad: function (options) {
        console.log('member 页面 onload获取 - ', options);
        var nickName = User_1.default.getUserInfo().nickName;
        var tid = options.tid;
        this.setData({
            tid: tid,
            nickName: nickName,
        });
        wx.showShareMenu({
            withShareTicket: true
        });
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
        if (this.data.tid !== -1 && this.data.nickName !== '') {
            return {
                title: "\u6211\u662F" + this.data.nickName,
                path: "/pages/detail/detail?tid=" + this.data.members.length,
                imageUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
            };
        }
        return {
            title: "\u5C0F\u7A0B\u5E8F\u5361\u7247\u8F6C\u53D1\u51FA\u9519\uFF0C\u8BF7\u4E0D\u8981\u70B9\u51FB",
            path: "/pages/detail/detail",
            imageUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg',
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVtYmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkRBQXFDO0FBRXJDLElBQUksQ0FBQztJQUtILElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxFQUFFO1FBQ1osR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNQLE9BQU8sRUFBRSxDQUFDO2dCQUNSLEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixpQkFBaUIsRUFBRSxFQUFFO2dCQUNyQixpQkFBaUIsRUFBRSxFQUFFO2dCQUNyQixnQkFBZ0IsRUFBRSxFQUFFO2dCQUNwQixTQUFTLEVBQUUsMkNBQTJDO2FBQ3ZELEVBQUU7Z0JBQ0QsR0FBRyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxFQUFFLENBQUM7Z0JBQ04sUUFBUSxFQUFFLE1BQU07Z0JBQ2hCLGlCQUFpQixFQUFFLEVBQUU7Z0JBQ3JCLGlCQUFpQixFQUFFLEVBQUU7Z0JBQ3JCLGdCQUFnQixFQUFFLEVBQUU7Z0JBQ3BCLFNBQVMsRUFBRSwyQ0FBMkM7YUFDdkQsRUFBRTtnQkFDRCxHQUFHLEVBQUUsQ0FBQztnQkFDTixHQUFHLEVBQUUsQ0FBQztnQkFDTixRQUFRLEVBQUUsTUFBTTtnQkFDaEIsaUJBQWlCLEVBQUUsRUFBRTtnQkFDckIsaUJBQWlCLEVBQUUsRUFBRTtnQkFDckIsZ0JBQWdCLEVBQUUsRUFBRTtnQkFDcEIsU0FBUyxFQUFFLDJDQUEyQzthQUN2RCxFQUFFO2dCQUNELEdBQUcsRUFBRSxDQUFDO2dCQUNOLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFFBQVEsRUFBRSxNQUFNO2dCQUNoQixpQkFBaUIsRUFBRSxFQUFFO2dCQUNyQixpQkFBaUIsRUFBRSxFQUFFO2dCQUNyQixnQkFBZ0IsRUFBRSxFQUFFO2dCQUNwQixTQUFTLEVBQUUsMkNBQTJDO2FBQ3ZELEVBQUU7Z0JBQ0QsR0FBRyxF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cG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy9Vc2VyJztcblxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIG5pY2tOYW1lOiAnJyxcbiAgICB0aWQ6IC0xLFxuICAgIG1lbWJlcnM6IFt7XG4gICAgICB1aWQ6IDAsXG4gICAgICB0aWQ6IDEsXG4gICAgICB1c2VybmFtZTogJ+S6p+WTgeWkp+WImCcsXG4gICAgICBjcmVhdGVkVGVhbUNvdW50czogMjAsXG4gICAgICBtYW5hZ2VkVGVhbUNvdW50czogMzAsXG4gICAgICBqb2luZWRUZWFtQ291bnRzOiA0MCxcbiAgICAgIGF2YXRhclVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJyxcbiAgICB9LCB7XG4gICAgICB1aWQ6IDEsXG4gICAgICB0aWQ6IDEsXG4gICAgICB1c2VybmFtZTogJ+S6p+WTgeiJr+acqCcsXG4gICAgICBjcmVhdGVkVGVhbUNvdW50czogMjAsXG4gICAgICBtYW5hZ2VkVGVhbUNvdW50czogMzAsXG4gICAgICBqb2luZWRUZWFtQ291bnRzOiA0MCxcbiAgICAgIGF2YXRhclVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJyxcbiAgICB9LCB7XG4gICAgICB1aWQ6IDIsXG4gICAgICB0aWQ6IDEsXG4gICAgICB1c2VybmFtZTogJ+WQjuerr+Wjq+adsCcsXG4gICAgICBjcmVhdGVkVGVhbUNvdW50czogMjAsXG4gICAgICBtYW5hZ2VkVGVhbUNvdW50czogMzAsXG4gICAgICBqb2luZWRUZWFtQ291bnRzOiA0MCxcbiAgICAgIGF2YXRhclVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJyxcbiAgICB9LCB7XG4gICAgICB1aWQ6IDMsXG4gICAgICB0aWQ6IDEsXG4gICAgICB1c2VybmFtZTogJ+WJjeerr+iAgeWQtCcsXG4gICAgICBjcmVhdGVkVGVhbUNvdW50czogMjAsXG4gICAgICBtYW5hZ2VkVGVhbUNvdW50czogMzAsXG4gICAgICBqb2luZWRUZWFtQ291bnRzOiA0MCxcbiAgICAgIGF2YXRhclVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJyxcbiAgICB9LCB7XG4gICAgICB1aWQ6IDMsXG4gICAgICB0aWQ6IDEsXG4gICAgICB1c2VybmFtZTogJ+WJjeerr+iAgeWQtCcsXG4gICAgICBjcmVhdGVkVGVhbUNvdW50czogMjAsXG4gICAgICBtYW5hZ2VkVGVhbUNvdW50czogMzAsXG4gICAgICBqb2luZWRUZWFtQ291bnRzOiA0MCxcbiAgICAgIGF2YXRhclVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJyxcbiAgICB9LCB7XG4gICAgICB1aWQ6IDMsXG4gICAgICB0aWQ6IDEsXG4gICAgICB1c2VybmFtZTogJ+WJjeerr+iAgeWQtCcsXG4gICAgICBjcmVhdGVkVGVhbUNvdW50czogMjAsXG4gICAgICBtYW5hZ2VkVGVhbUNvdW50czogMzAsXG4gICAgICBqb2luZWRUZWFtQ291bnRzOiA0MCxcbiAgICAgIGF2YXRhclVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJyxcbiAgICB9LCB7XG4gICAgICB1aWQ6IDMsXG4gICAgICB0aWQ6IDEsXG4gICAgICB1c2VybmFtZTogJ+WJjeerr+iAgeWQtCcsXG4gICAgICBjcmVhdGVkVGVhbUNvdW50czogMjAsXG4gICAgICBtYW5hZ2VkVGVhbUNvdW50czogMzAsXG4gICAgICBqb2luZWRUZWFtQ291bnRzOiA0MCxcbiAgICAgIGF2YXRhclVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJyxcbiAgICB9LCB7XG4gICAgICB1aWQ6IDMsXG4gICAgICB0aWQ6IDEsXG4gICAgICB1c2VybmFtZTogJ+WJjeerr+iAgeWQtCcsXG4gICAgICBjcmVhdGVkVGVhbUNvdW50czogMjAsXG4gICAgICBtYW5hZ2VkVGVhbUNvdW50czogMzAsXG4gICAgICBqb2luZWRUZWFtQ291bnRzOiA0MCxcbiAgICAgIGF2YXRhclVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJyxcbiAgICB9LCB7XG4gICAgICB1aWQ6IDMsXG4gICAgICB0aWQ6IDEsXG4gICAgICB1c2VybmFtZTogJ+WJjeerr+iAgeWQtCcsXG4gICAgICBjcmVhdGVkVGVhbUNvdW50czogMjAsXG4gICAgICBtYW5hZ2VkVGVhbUNvdW50czogMzAsXG4gICAgICBqb2luZWRUZWFtQ291bnRzOiA0MCxcbiAgICAgIGF2YXRhclVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJyxcbiAgICB9XVxuICB9LFxuXG4gIC8qKlxuICAgKiDouKLpmaTmiJDlkZjkuovku7ZcbiAgICovXG4gIG9uRGVsZXRlKG9wdGlvbnM6IGFueSkge1xuICAgIGNvbnN0IHsgdWlkLCB0aWQgfSA9IG9wdGlvbnMuZGV0YWlsO1xuXG5cbiAgfSxcblxuXG4gIC8qKlxuICAgKiDkuIDplK7pgoDor7fmm7TlpJrlpb3lj4tcbiAgICovXG4gIG9uSW52aXRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQob3B0aW9uczogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ21lbWJlciDpobXpnaIgb25sb2Fk6I635Y+WIC0gJywgb3B0aW9ucyk7XG4gICAgY29uc3QgeyBuaWNrTmFtZSB9ID0gVXNlci5nZXRVc2VySW5mbygpO1xuICAgIGNvbnN0IHsgdGlkIH0gPSBvcHRpb25zO1xuXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHRpZCxcbiAgICAgIG5pY2tOYW1lLFxuICAgIH0pXG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZShvcHRzKTogV2VjaGF0TWluaXByb2dyYW0uUGFnZS5JQ3VzdG9tU2hhcmVDb250ZW50IHtcbiAgICBjb25zb2xlLmxvZyhvcHRzLnRhcmdldClcbiAgICBpZiAodGhpcy5kYXRhLnRpZCAhPT0gLTEgJiYgdGhpcy5kYXRhLm5pY2tOYW1lICE9PSAnJykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGU6IGDmiJHmmK8ke3RoaXMuZGF0YS5uaWNrTmFtZX1gLFxuICAgICAgICBwYXRoOiBgL3BhZ2VzL2RldGFpbC9kZXRhaWw/dGlkPSR7dGhpcy5kYXRhLm1lbWJlcnMubGVuZ3RofWAsXG4gICAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa0ZwUi5qcGcnLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6IGDlsI/nqIvluo/ljaHniYfovazlj5Hlh7rplJnvvIzor7fkuI3opoHngrnlh7tgLFxuICAgICAgcGF0aDogYC9wYWdlcy9kZXRhaWwvZGV0YWlsYCxcbiAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa0ZwUi5qcGcnLFxuICAgIH1cbiAgfVxufSkiXX0=