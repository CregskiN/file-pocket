"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Team_1 = __importDefault(require("../../models/Team"));
Page({
    data: {
        teams: [],
        isShareWindowVisible: false,
        isLoading: true,
        lints: {
            loading: '正在初始化'
        }
    },
    onInvite: function () {
    },
    onRename: function () {
    },
    onDropOut: function () {
    },
    onShare: function () {
        this.setData({
            isShareWindowVisible: true
        });
    },
    onLoad: function () {
        var _this = this;
        var officialTeams = Team_1.default.getOfficialTeamList();
        officialTeams.then(function (res) {
            _this.setData({
                teams: res.data,
                isLoading: false,
            });
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
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2ZmaWNpYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJvZmZpY2lhbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJEQUFxQztBQUNyQyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsRUFBRTtRQUNULG9CQUFvQixFQUFFLEtBQUs7UUFDM0IsU0FBUyxFQUFFLElBQUk7UUFDZixLQUFLLEVBQUU7WUFDTCxPQUFPLEVBQUUsT0FBTztTQUNqQjtLQUNGO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELFNBQVM7SUFFVCxDQUFDO0lBS0QsT0FBTztRQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxvQkFBb0IsRUFBRSxJQUFJO1NBQzNCLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFNRCxNQUFNLEVBQU47UUFBQSxpQkFRQztRQVBDLElBQU0sYUFBYSxHQUFHLGNBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ2pELGFBQWEsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ3BCLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsS0FBSyxFQUFHLEdBQVcsQ0FBQyxJQUFJO2dCQUN4QixTQUFTLEVBQUUsS0FBSzthQUNqQixDQUFDLENBQUE7UUFDSixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUIsRUFBakIsVUFBa0IsSUFBSTtRQUNwQixPQUFPLEVBRU4sQ0FBQTtJQUNILENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVhbSBmcm9tICcuLi8uLi9tb2RlbHMvVGVhbSc7XG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgdGVhbXM6IFtdLFxuICAgIGlzU2hhcmVXaW5kb3dWaXNpYmxlOiBmYWxzZSxcbiAgICBpc0xvYWRpbmc6IHRydWUsXG4gICAgbGludHM6IHtcbiAgICAgIGxvYWRpbmc6ICfmraPlnKjliJ3lp4vljJYnXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDpgoDor7fliqDlhaVcbiAgICovXG4gIG9uSW52aXRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmHjeWRveWQjVxuICAgKi9cbiAgb25SZW5hbWUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6YCA5Ye66aG555uu57uEXG4gICAqL1xuICBvbkRyb3BPdXQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog5YiG5Lqr6aG555uu57uEXG4gICAqL1xuICBvblNoYXJlKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBpc1NoYXJlV2luZG93VmlzaWJsZTogdHJ1ZVxuICAgIH0pXG4gIH0sXG5cblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZCgpIHtcbiAgICBjb25zdCBvZmZpY2lhbFRlYW1zID0gVGVhbS5nZXRPZmZpY2lhbFRlYW1MaXN0KCk7XG4gICAgb2ZmaWNpYWxUZWFtcy50aGVuKHJlcyA9PiB7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICB0ZWFtczogKHJlcyBhcyBhbnkpLmRhdGEsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICB9KVxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuICAgIHJldHVybiB7XG4gICAgICBcbiAgICB9XG4gIH1cbn0pIl19