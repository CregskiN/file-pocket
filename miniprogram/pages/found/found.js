"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../../models/User"));
var https_1 = __importDefault(require("../../utils/https"));
Page({
    data: {
        userInfo: {},
        inputValue: '',
    },
    onFinish: function (e) {
        this.setData({
            inputValue: e.detail.inputValue
        });
    },
    onBack: function () {
        wx.navigateBack();
    },
    onComplete: function () {
        var options = {
            url: '/team/create_team',
            method: "POST",
            data: {
                uid: this.data.userInfo.uid,
                teamName: this.data.inputValue ? this.data.inputValue : this.data.userInfo.nickName + "\u7684\u53E3\u888B",
                teamAvatarUrl: this.data.userInfo.avatarUrl,
                teamGrade: 1,
            }
        };
        https_1.default.request(options).then(function (res) {
            if (res.success) {
                wx.showToast({
                    title: '创建成功！',
                    duration: 1500,
                });
                setTimeout(function () {
                    wx.switchTab({
                        url: '/pages/index/index'
                    });
                }, 1500);
            }
            else {
                wx.showModal({
                    title: '操作失败',
                    content: '点击"确定"以重试',
                    success: function (res) {
                        if (res.confirm) {
                            console.log('重试');
                        }
                        else {
                            console.log('返回');
                        }
                    }
                });
            }
        });
    },
    onLoad: function () {
        var userInfo = User_1.default.getUserInfoStorage();
        console.log('found页初始化数据为 - ', userInfo);
        this.setData({
            userInfo: userInfo
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJEQUFxQztBQUNyQyw0REFBc0M7QUFLdEMsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQW9CO1FBQzlCLFVBQVUsRUFBRSxFQUFFO0tBQ2Y7SUFNRCxRQUFRLEVBQVIsVUFBUyxDQUFNO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVU7U0FDaEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE1BQU07UUFDSixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUtELFVBQVUsRUFBVjtRQUNFLElBQU0sT0FBTyxHQUFHO1lBQ2QsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixNQUFNLEVBQUUsTUFBZ0I7WUFDeEIsSUFBSSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFhO2dCQUNyQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLHVCQUFlO2dCQUNyRyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBbUI7Z0JBQ3JELFNBQVMsRUFBRSxDQUFXO2FBQ3ZCO1NBQ0YsQ0FBQTtRQUNELGVBQUssQ0FBQyxPQUFPLENBQWdELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDNUUsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUNmLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE9BQU87b0JBQ2QsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQztvQkFDVCxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEdBQUcsRUFBRSxvQkFBb0I7cUJBQzFCLENBQUMsQ0FBQTtnQkFDSixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFFVDtpQkFBTTtnQkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBRSxNQUFNO29CQUNiLE9BQU8sRUFBRSxXQUFXO29CQUNwQixPQUFPLEVBQUUsVUFBQyxHQUFHO3dCQUNYLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTs0QkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNuQjs2QkFBTTs0QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNuQjtvQkFDSCxDQUFDO2lCQUNGLENBQUMsQ0FBQTthQUNIO1FBRUgsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsTUFBTTtRQUNKLElBQU0sUUFBUSxHQUFHLGNBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsVUFBQTtTQUNULENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUIsRUFBakIsVUFBa0IsSUFBSTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pCLE9BQU87WUFDTCxLQUFLLEVBQUUsV0FBVztZQUNsQixJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLFFBQVEsRUFBRSwyQ0FBMkM7U0FDdEQsQ0FBQTtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvVXNlcic7XG5pbXBvcnQgSHR0cHMgZnJvbSAnLi4vLi4vdXRpbHMvaHR0cHMnO1xuXG5pbXBvcnQgeyBDdXN0b21Vc2VySW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGluZyc7XG5cblxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIHVzZXJJbmZvOiB7fSBhcyBDdXN0b21Vc2VySW5mbyxcbiAgICBpbnB1dFZhbHVlOiAnJyxcbiAgfSxcblxuICAvKipcbiAgICog5o6l5pS26L6T5YWl5qGG5aSx54Sm5LqL5Lu2XG4gICAqIEBwYXJhbSBlIFxuICAgKi9cbiAgb25GaW5pc2goZTogYW55KSB7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGlucHV0VmFsdWU6IGUuZGV0YWlsLmlucHV0VmFsdWVcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDov5Tlm55cbiAgICovXG4gIG9uQmFjaygpIHtcbiAgICB3eC5uYXZpZ2F0ZUJhY2soKVxuICB9LFxuXG4gIC8qKlxuICAgKiDlrozmiJBcbiAgICovXG4gIG9uQ29tcGxldGUoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgIHVybDogJy90ZWFtL2NyZWF0ZV90ZWFtJyxcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIgYXMgXCJQT1NUXCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVpZDogdGhpcy5kYXRhLnVzZXJJbmZvLnVpZCBhcyBzdHJpbmcsXG4gICAgICAgIHRlYW1OYW1lOiB0aGlzLmRhdGEuaW5wdXRWYWx1ZSA/IHRoaXMuZGF0YS5pbnB1dFZhbHVlIDogYCR7dGhpcy5kYXRhLnVzZXJJbmZvLm5pY2tOYW1lfeeahOWPo+iii2AgYXMgc3RyaW5nLFxuICAgICAgICB0ZWFtQXZhdGFyVXJsOiB0aGlzLmRhdGEudXNlckluZm8uYXZhdGFyVXJsIGFzIHN0cmluZyxcbiAgICAgICAgdGVhbUdyYWRlOiAxIGFzIG51bWJlcixcbiAgICAgIH1cbiAgICB9XG4gICAgSHR0cHMucmVxdWVzdDxSZXF1ZXN0LkNyZWF0ZVRlYW1SZXEsIFJlc3BvbnNlLkNyZWF0ZVRlYW1SZXM+KG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgIGlmIChyZXMuc3VjY2Vzcykge1xuICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAn5Yib5bu65oiQ5Yqf77yBJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTUwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvaW5kZXgvaW5kZXgnXG4gICAgICAgICAgfSlcbiAgICAgICAgfSwgMTUwMClcblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICB0aXRsZTogJ+aTjeS9nOWksei0pScsXG4gICAgICAgICAgY29udGVudDogJ+eCueWHu1wi56Gu5a6aXCLku6Xph43or5UnLFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6YeN6K+VJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6L+U5ZueJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zdCB1c2VySW5mbyA9IFVzZXIuZ2V0VXNlckluZm9TdG9yYWdlKCk7XG4gICAgY29uc29sZS5sb2coJ2ZvdW5k6aG15Yid5aeL5YyW5pWw5o2u5Li6IC0gJywgdXNlckluZm8pO1xuXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIHVzZXJJbmZvXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2Uob3B0cyk6IFdlY2hhdE1pbmlwcm9ncmFtLlBhZ2UuSUN1c3RvbVNoYXJlQ29udGVudCB7XG4gICAgY29uc29sZS5sb2cob3B0cylcbiAgICByZXR1cm4ge1xuICAgICAgdGl0bGU6ICfliqDlhaXmiJHnmoTpobnnm67nu4TlkKfvvIEnLFxuICAgICAgcGF0aDogJy9wYWdlcy9kZXRhaWwvZGV0YWlsJyxcbiAgICAgIGltYWdlVXJsOiAnaHR0cHM6Ly9zMS5heDF4LmNvbS8yMDIwLzA0LzAyL0dZa0ZwUi5qcGcnXG4gICAgfVxuICB9XG59KSJdfQ==