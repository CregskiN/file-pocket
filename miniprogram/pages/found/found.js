"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../../models/User");
var userInstance = User_1.default.getInstance();
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
        var userInfo = userInstance.getUserInfo();
        this.setData({
            creatorAvatarUrl: userInfo.avatarUrl,
            creatorNickName: userInfo.nickName
        });
        wx.showShareMenu({
            withShareTicket: true,
            success: function (res) {
                console.log(res);
            }
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
            path: '/pages/detail',
            imageUrl: 'https://s1.ax1x.com/2020/04/02/GYkFpR.jpg'
        };
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBDQUFxQztBQUNyQyxJQUFNLFlBQVksR0FBRyxjQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7QUFFeEMsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osZ0JBQWdCLEVBQUUsRUFBRTtRQUNwQixlQUFlLEVBQUUsRUFBRTtRQUNuQixLQUFLLEVBQUUsTUFBTTtRQUNiLFVBQVUsRUFBRSxLQUFLO0tBQ2xCO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVU7U0FDbEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNELE1BQU07UUFDSixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUNELFVBQVU7UUFDUixFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1gsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDLENBQUM7UUFDSCxVQUFVLENBQUM7WUFDVCxFQUFFLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBQ1YsQ0FBQztJQUtELE1BQU07UUFDSixJQUFNLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLGdCQUFnQixFQUFFLFFBQVMsQ0FBQyxTQUFTO1lBQ3JDLGVBQWUsRUFBRSxRQUFTLENBQUMsUUFBUTtTQUNwQyxDQUFDLENBQUE7UUFDRixFQUFFLENBQUMsYUFBYSxDQUFDO1lBQ2YsZUFBZSxFQUFFLElBQUk7WUFDckIsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ25CLENBQUM7U0FDRixDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNqQixPQUFPO1lBQ0wsS0FBSyxFQUFFLFdBQVc7WUFDbEIsSUFBSSxFQUFFLGVBQWU7WUFDckIsUUFBUSxFQUFFLDJDQUEyQztTQUN0RCxDQUFBO0lBQ0gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy9Vc2VyJztcbmNvbnN0IHVzZXJJbnN0YW5jZSA9IFVzZXIuZ2V0SW5zdGFuY2UoKTtcblxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGNyZWF0b3JBdmF0YXJVcmw6ICcnLFxuICAgIGNyZWF0b3JOaWNrTmFtZTogJycsXG4gICAgdGhlbWU6ICfpobnnm67lkI3np7AnLFxuICAgIGlzU2VsZWN0ZWQ6IGZhbHNlLFxuICB9LFxuXG4gIG9uU2VsZWN0KCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBpc1NlbGVjdGVkOiAhdGhpcy5kYXRhLmlzU2VsZWN0ZWRcbiAgICB9KVxuICB9LFxuICBvbkJhY2soKSB7XG4gICAgd3gubmF2aWdhdGVCYWNrKClcbiAgfSxcbiAgb25Db21wbGV0ZSgpIHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6ICfliJvlu7rmiJDlip8nLFxuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgd3gubmF2aWdhdGVCYWNrKClcbiAgICB9LCAxMDAwKVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKCkge1xuICAgIGNvbnN0IHVzZXJJbmZvID0gdXNlckluc3RhbmNlLmdldFVzZXJJbmZvKCk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGNyZWF0b3JBdmF0YXJVcmw6IHVzZXJJbmZvIS5hdmF0YXJVcmwsXG4gICAgICBjcmVhdG9yTmlja05hbWU6IHVzZXJJbmZvIS5uaWNrTmFtZVxuICAgIH0pXG4gICAgd3guc2hvd1NoYXJlTWVudSh7XG4gICAgICB3aXRoU2hhcmVUaWNrZXQ6IHRydWUsXG4gICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2Uob3B0cyk6IFdlY2hhdE1pbmlwcm9ncmFtLlBhZ2UuSUN1c3RvbVNoYXJlQ29udGVudCB7XG4gICAgY29uc29sZS5sb2cob3B0cylcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfliqDlhaXmiJHnmoTpobnnm67nu4TlkKfvvIEnLFxuICAgICAgcGF0aDogJy9wYWdlcy9kZXRhaWwnLFxuICAgICAgaW1hZ2VVcmw6ICdodHRwczovL3MxLmF4MXguY29tLzIwMjAvMDQvMDIvR1lrRnBSLmpwZydcbiAgICB9XG4gIH1cbn0pIl19