"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../../models/User"));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJEQUFxQztBQUVyQyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixnQkFBZ0IsRUFBRSxFQUFFO1FBQ3BCLGVBQWUsRUFBRSxFQUFFO1FBQ25CLEtBQUssRUFBRSxNQUFNO1FBQ2IsVUFBVSxFQUFFLEtBQUs7S0FDbEI7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVTtTQUNsQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsTUFBTTtRQUNKLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNuQixDQUFDO0lBRUQsVUFBVTtRQUNSLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDWCxLQUFLLEVBQUUsTUFBTTtTQUNkLENBQUMsQ0FBQztRQUNILFVBQVUsQ0FBQztZQUNULEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtRQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFDVixDQUFDO0lBS0QsTUFBTSxFQUFOO1FBQ0UsSUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxnQkFBZ0IsRUFBRSxRQUFTLENBQUMsU0FBUztZQUNyQyxlQUFlLEVBQUUsUUFBUyxDQUFDLFFBQVE7U0FDcEMsQ0FBQyxDQUFBO1FBQ0YsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNmLGVBQWUsRUFBRSxJQUFJO1NBQ3RCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUIsRUFBakIsVUFBa0IsSUFBSTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pCLE9BQU87WUFDTCxLQUFLLEVBQUUsV0FBVztZQUNsQixJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLFFBQVEsRUFBRSwyQ0FBMkM7U0FDdEQsQ0FBQTtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvVXNlcic7XG5cblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBjcmVhdG9yQXZhdGFyVXJsOiAnJyxcbiAgICBjcmVhdG9yTmlja05hbWU6ICcnLFxuICAgIHRoZW1lOiAn6aG555uu5ZCN56ewJyxcbiAgICBpc1NlbGVjdGVkOiBmYWxzZSxcbiAgfSxcblxuICBvblNlbGVjdCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgaXNTZWxlY3RlZDogIXRoaXMuZGF0YS5pc1NlbGVjdGVkXG4gICAgfSlcbiAgfSxcbiAgXG4gIG9uQmFjaygpIHtcbiAgICB3eC5uYXZpZ2F0ZUJhY2soKVxuICB9LFxuXG4gIG9uQ29tcGxldGUoKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yib5bu65oiQ5YqfJyxcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHd4Lm5hdmlnYXRlQmFjaygpXG4gICAgfSwgMTAwMClcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zdCB1c2VySW5mbyA9IFVzZXIuZ2V0VXNlckluZm8oKTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgY3JlYXRvckF2YXRhclVybDogdXNlckluZm8hLmF2YXRhclVybCxcbiAgICAgIGNyZWF0b3JOaWNrTmFtZTogdXNlckluZm8hLm5pY2tOYW1lXG4gICAgfSlcbiAgICB3eC5zaG93U2hhcmVNZW51KHtcbiAgICAgIHdpdGhTaGFyZVRpY2tldDogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuICAgIGNvbnNvbGUubG9nKG9wdHMpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5Yqg5YWl5oiR55qE6aG555uu57uE5ZCn77yBJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvZGV0YWlsL2RldGFpbCcsXG4gICAgICBpbWFnZVVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJ1xuICAgIH1cbiAgfVxufSkiXX0=