"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../../models/User");
Page({
    data: {
        creatorAvatarUrl: '',
        creatorNickName: '',
        theme: '项目名称',
        isSelected: false,
    },
    onSelect: function () {
        this.setData({
            isSelected: !this.data.isSelected
        });
    },
    onBack: function () {
        wx.navigateBack();
    },
    onComplete: function () {
        wx.showToast({
            title: '创建成功',
        });
        setTimeout(function () {
            wx.navigateBack();
        }, 1000);
    },
    onLoad: function () {
        var userInfo = User_1.default.getUserInfo();
        this.setData({
            creatorAvatarUrl: userInfo.avatarUrl,
            creatorNickName: userInfo.nickName
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
        console.log(opts);
        return {
            title: '加入我的项目组吧！',
            path: '/pages/detail/detail',
            imageUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg'
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUFxQztBQUVyQyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGVBQWUsRUFBRSxFQUFFO1FBQ25CLEtBQUssRUFBRSxNQUFNO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtTQUNsQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsTUFBTTtRQUNKLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBQ0QsVUFBVTtRQUNSLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsTUFBTTtTQUNkLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQztZQUNULEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDVixDQUFDO0lBS0QsTUFBTTtRQUNKLElBQU0sUUFBUSxHQUFHLGNBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsZ0JBQWdCLEVBQUUsUUFBUyxDQUFDLFNBQVM7WUFDckMsZUFBZSxFQUFFLFFBQVMsQ0FBQyxRQUFRO1NBQ3BDLENBQUMsQ0FBQTtRQUNGLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDZixlQUFlLEVBQUUsSUFBSTtTQUN0QixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQixPQUFPO1lBQ0wsS0FBSyxFQUFFLFdBQVc7WUFDbEIsSUFBSSxFQUFFLHNCQUFzQjtZQUM1QixRQUFRLEVBQUUsMkNBQTJDO1NBQ3RELENBQUE7SUFDSCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL1VzZXInO1xuXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgY3JlYXRvckF2YXRhclVybDogJycsXG4gICAgY3JlYXRvck5pY2tOYW1lOiAnJyxcbiAgICB0aGVtZTogJ+mhueebruWQjeensCcsXG4gICAgaXNTZWxlY3RlZDogZmFsc2UsXG4gIH0sXG5cbiAgb25TZWxlY3QoKSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGlzU2VsZWN0ZWQ6ICF0aGlzLmRhdGEuaXNTZWxlY3RlZFxuICAgIH0pXG4gIH0sXG4gIG9uQmFjaygpIHtcbiAgICB3eC5uYXZpZ2F0ZUJhY2soKVxuICB9LFxuICBvbkNvbXBsZXRlKCkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+WIm+W7uuaIkOWKnycsXG4gICAgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB3eC5uYXZpZ2F0ZUJhY2soKVxuICAgIH0sIDEwMDApXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQoKSB7XG4gICAgY29uc3QgdXNlckluZm8gPSBVc2VyLmdldFVzZXJJbmZvKCk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGNyZWF0b3JBdmF0YXJVcmw6IHVzZXJJbmZvIS5hdmF0YXJVcmwsXG4gICAgICBjcmVhdG9yTmlja05hbWU6IHVzZXJJbmZvIS5uaWNrTmFtZVxuICAgIH0pXG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWVcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZShvcHRzKTogV2VjaGF0TWluaXByb2dyYW0uUGFnZS5JQ3VzdG9tU2hhcmVDb250ZW50IHtcbiAgICBjb25zb2xlLmxvZyhvcHRzKVxuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogJ+WKoOWFpeaIkeeahOmhueebrue7hOWQp++8gScsXG4gICAgICBwYXRoOiAnL3BhZ2VzL2RldGFpbC9kZXRhaWwnLFxuICAgICAgaW1hZ2VVcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrRnBSLmpwZydcbiAgICB9XG4gIH1cbn0pIl19