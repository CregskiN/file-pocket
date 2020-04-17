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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm91bmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmb3VuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJEQUFxQztBQUNyQyw0REFBc0M7QUFNdEMsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEVBQW9CO1FBQzlCLFVBQVUsRUFBRSxFQUFFO0tBQ2Y7SUFNRCxRQUFRLEVBQVIsVUFBUyxDQUFNO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFVBQVUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVU7U0FDaEMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUtELE1BQU07UUFDSixFQUFFLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDbkIsQ0FBQztJQUtELFVBQVUsRUFBVjtRQUNFLElBQU0sT0FBTyxHQUFHO1lBQ2QsR0FBRyxFQUFFLG1CQUFtQjtZQUN4QixNQUFNLEVBQUUsTUFBZ0I7WUFDeEIsSUFBSSxFQUFFO2dCQUNKLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFhO2dCQUNyQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLHVCQUFlO2dCQUNyRyxhQUFhLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBbUI7Z0JBQ3JELFNBQVMsRUFBRSxDQUFXO2FBQ3ZCO1NBQ0YsQ0FBQTtRQUNELGVBQUssQ0FBQyxPQUFPLENBQWdELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDNUUsSUFBSSxHQUFHLENBQUMsT0FBTyxFQUFFO2dCQUNmLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0JBQ1gsS0FBSyxFQUFFLE9BQU87b0JBQ2QsUUFBUSxFQUFFLElBQUk7aUJBQ2YsQ0FBQyxDQUFDO2dCQUNILFVBQVUsQ0FBQztvQkFDVCxFQUFFLENBQUMsU0FBUyxDQUFDO3dCQUNYLEdBQUcsRUFBRSxvQkFBb0I7cUJBQzFCLENBQUMsQ0FBQTtnQkFDSixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUE7YUFFVDtpQkFBTTtnQkFDTCxFQUFFLENBQUMsU0FBUyxDQUFDO29CQUNYLEtBQUssRUFBRSxNQUFNO29CQUNiLE9BQU8sRUFBRSxXQUFXO29CQUNwQixPQUFPLEVBQUUsVUFBQyxHQUFHO3dCQUNYLElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTs0QkFDZixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNuQjs2QkFBTTs0QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNuQjtvQkFDSCxDQUFDO2lCQUNGLENBQUMsQ0FBQTthQUNIO1FBRUgsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBS0QsTUFBTTtRQUNKLElBQU0sUUFBUSxHQUFHLGNBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFFekMsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFFBQVEsVUFBQTtTQUNULENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUIsRUFBakIsVUFBa0IsSUFBSTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pCLE9BQU87WUFDTCxLQUFLLEVBQUUsV0FBVztZQUNsQixJQUFJLEVBQUUsc0JBQXNCO1lBQzVCLFFBQVEsRUFBRSwyQ0FBMkM7U0FDdEQsQ0FBQTtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvVXNlcic7XG5pbXBvcnQgSHR0cHMgZnJvbSAnLi4vLi4vdXRpbHMvaHR0cHMnO1xuXG5pbXBvcnQgeyBDdXN0b21Vc2VySW5mbyB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGluZyc7XG5pbXBvcnQgeyBSZXNwb25zZSB9IGZyb20gJy4uLy4uLy4uL3R5cGluZ3MvcmVzcG9uc2UnO1xuXG5cblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICB1c2VySW5mbzoge30gYXMgQ3VzdG9tVXNlckluZm8sXG4gICAgaW5wdXRWYWx1ZTogJycsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOaOpeaUtui+k+WFpeahhuWkseeEpuS6i+S7tlxuICAgKiBAcGFyYW0gZSBcbiAgICovXG4gIG9uRmluaXNoKGU6IGFueSkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBpbnB1dFZhbHVlOiBlLmRldGFpbC5pbnB1dFZhbHVlXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog6L+U5ZueXG4gICAqL1xuICBvbkJhY2soKSB7XG4gICAgd3gubmF2aWdhdGVCYWNrKClcbiAgfSxcblxuICAvKipcbiAgICog5a6M5oiQXG4gICAqL1xuICBvbkNvbXBsZXRlKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICB1cmw6ICcvdGVhbS9jcmVhdGVfdGVhbScsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiIGFzIFwiUE9TVFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICB1aWQ6IHRoaXMuZGF0YS51c2VySW5mby51aWQgYXMgc3RyaW5nLFxuICAgICAgICB0ZWFtTmFtZTogdGhpcy5kYXRhLmlucHV0VmFsdWUgPyB0aGlzLmRhdGEuaW5wdXRWYWx1ZSA6IGAke3RoaXMuZGF0YS51c2VySW5mby5uaWNrTmFtZX3nmoTlj6PoootgIGFzIHN0cmluZyxcbiAgICAgICAgdGVhbUF2YXRhclVybDogdGhpcy5kYXRhLnVzZXJJbmZvLmF2YXRhclVybCBhcyBzdHJpbmcsXG4gICAgICAgIHRlYW1HcmFkZTogMSBhcyBudW1iZXIsXG4gICAgICB9XG4gICAgfVxuICAgIEh0dHBzLnJlcXVlc3Q8UmVxdWVzdC5DcmVhdGVUZWFtUmVxLCBSZXNwb25zZS5DcmVhdGVUZWFtUmVzPihvcHRpb25zKS50aGVuKHJlcyA9PiB7XG4gICAgICBpZiAocmVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICB0aXRsZTogJ+WIm+W7uuaIkOWKn++8gScsXG4gICAgICAgICAgZHVyYXRpb246IDE1MDAsXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2luZGV4L2luZGV4J1xuICAgICAgICAgIH0pXG4gICAgICAgIH0sIDE1MDApXG5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfmk43kvZzlpLHotKUnLFxuICAgICAgICAgIGNvbnRlbnQ6ICfngrnlh7tcIuehruWumlwi5Lul6YeN6K+VJyxcbiAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+mHjeivlScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+i/lOWbnicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQoKSB7XG4gICAgY29uc3QgdXNlckluZm8gPSBVc2VyLmdldFVzZXJJbmZvU3RvcmFnZSgpO1xuICAgIGNvbnNvbGUubG9nKCdmb3VuZOmhteWIneWni+WMluaVsOaNruS4uiAtICcsIHVzZXJJbmZvKTtcblxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICB1c2VySW5mb1xuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuICAgIGNvbnNvbGUubG9nKG9wdHMpXG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAn5Yqg5YWl5oiR55qE6aG555uu57uE5ZCn77yBJyxcbiAgICAgIHBhdGg6ICcvcGFnZXMvZGV0YWlsL2RldGFpbCcsXG4gICAgICBpbWFnZVVybDogJ2h0dHBzOi8vczEuYXgxeC5jb20vMjAyMC8wNC8wMi9HWWtGcFIuanBnJ1xuICAgIH1cbiAgfVxufSkiXX0=