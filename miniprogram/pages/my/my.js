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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../../models/User"));
function getBgUrl() {
    var bgUrls;
    (function (bgUrls) {
        bgUrls[bgUrls["../../../static/my/bg1.jpg"] = 0] = "../../../static/my/bg1.jpg";
        bgUrls[bgUrls["../../../static/my/bg2.jpg"] = 1] = "../../../static/my/bg2.jpg";
        bgUrls[bgUrls["../../../static/my/bg3.jpg"] = 2] = "../../../static/my/bg3.jpg";
        bgUrls[bgUrls["../../../static/my/bg4.jpg"] = 3] = "../../../static/my/bg4.jpg";
        bgUrls[bgUrls["../../../static/my/bg5.jpg"] = 4] = "../../../static/my/bg5.jpg";
        bgUrls[bgUrls["../../../static/my/bg6.jpg"] = 5] = "../../../static/my/bg6.jpg";
        bgUrls[bgUrls["../../../static/my/bg7.jpg"] = 6] = "../../../static/my/bg7.jpg";
        bgUrls[bgUrls["../../../static/my/bg8.jpg"] = 7] = "../../../static/my/bg8.jpg";
        bgUrls[bgUrls["../../../static/my/bg9.jpg"] = 8] = "../../../static/my/bg9.jpg";
        bgUrls[bgUrls["../../../static/my/bg10.jpg"] = 9] = "../../../static/my/bg10.jpg";
    })(bgUrls || (bgUrls = {}));
    var n = Math.floor(Math.random() * 10);
    return bgUrls[n];
}
Page({
    data: {
        bgUrl: '',
        user: {},
        items: [{
                title: '我的文件',
                baseUrl: '/pages/files-show/index',
                fontIconCLass: '',
                backIconClass: '',
            }, {
                title: '浏览历史',
                baseUrl: '/pages/browsing-history/index',
                fontIconCLass: '',
                backIconClass: '',
            }, {
                title: '用户反馈',
                baseUrl: '/pages/feedback/index',
                fontIconCLass: '',
                backIconClass: '',
            }]
    },
    onChangeBg: function () {
        var bgUrl = getBgUrl();
        while (bgUrl === this.data.bgUrl) {
            bgUrl = getBgUrl();
        }
        this.setData({
            bgUrl: bgUrl
        });
    },
    onDelete: function () {
        wx.showToast({
            title: '删除成功'
        });
    },
    onLoad: function (options) {
        var uid = options.uid;
        var bgUrl = getBgUrl();
        var userInfo = User_1.default.getUserInfo();
        this.setData({
            bgUrl: bgUrl,
            user: __assign(__assign({}, userInfo), { createdTeamCounts: 10, managedTeamCounts: 20, joinedTeamCounts: 30, uid: uid })
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
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkRBQXFDO0FBRXJDLFNBQVMsUUFBUTtJQUNoQixJQUFLLE1BV0o7SUFYRCxXQUFLLE1BQU07UUFDViwrRUFBNEIsQ0FBQTtRQUM1QiwrRUFBNEIsQ0FBQTtRQUM1QiwrRUFBNEIsQ0FBQTtRQUM1QiwrRUFBNEIsQ0FBQTtRQUM1QiwrRUFBNEIsQ0FBQTtRQUM1QiwrRUFBNEIsQ0FBQTtRQUM1QiwrRUFBNEIsQ0FBQTtRQUM1QiwrRUFBNEIsQ0FBQTtRQUM1QiwrRUFBNEIsQ0FBQTtRQUM1QixpRkFBNkIsQ0FBQTtJQUM5QixDQUFDLEVBWEksTUFBTSxLQUFOLE1BQU0sUUFXVjtJQUNELElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBO0lBRXhDLE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLENBQUM7QUFJRCxJQUFJLENBQUM7SUFLSixJQUFJLEVBQUU7UUFDTCxLQUFLLEVBQUUsRUFBRTtRQUNULElBQUksRUFBRSxFQUFFO1FBQ1IsS0FBSyxFQUFFLENBQUM7Z0JBQ1AsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsT0FBTyxFQUFFLHlCQUF5QjtnQkFDbEMsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGFBQWEsRUFBRSxFQUFFO2FBQ2pCLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsT0FBTyxFQUFFLCtCQUErQjtnQkFDeEMsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGFBQWEsRUFBRSxFQUFFO2FBQ2pCLEVBQUU7Z0JBQ0YsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsT0FBTyxFQUFFLHVCQUF1QjtnQkFDaEMsYUFBYSxFQUFFLEVBQUU7Z0JBQ2pCLGFBQWEsRUFBRSxFQUFFO2FBQ2pCLENBQUM7S0FDRjtJQUtELFVBQVU7UUFDVCxJQUFJLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUN2QixPQUFPLEtBQUssS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNqQyxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxPQUFBO1NBQ0wsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDO1lBQ1osS0FBSyxFQUFFLE1BQU07U0FDYixDQUFDLENBQUE7SUFDSCxDQUFDO0lBTUQsTUFBTSxZQUFDLE9BQU87UUFDTCxJQUFBLGlCQUFHLENBQWE7UUFFeEIsSUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUE7UUFDeEIsSUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWixLQUFLLE9BQUE7WUFDTCxJQUFJLHdCQUNBLFFBQVEsS0FDWCxpQkFBaUIsRUFBRSxFQUFFLEVBQ3JCLGlCQUFpQixFQUFFLEVBQUUsRUFDckIsZ0JBQWdCLEVBQUUsRUFBRSxFQUNwQixHQUFHLEtBQUEsR0FDSDtTQUNELENBQUMsQ0FBQTtJQUNILENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUIsRUFBakIsVUFBa0IsSUFBSTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixPQUFPLEVBQUUsQ0FBQTtJQUNWLENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvVXNlcic7XG5cbmZ1bmN0aW9uIGdldEJnVXJsKCkge1xuXHRlbnVtIGJnVXJscyB7XG5cdFx0Jy4uLy4uLy4uL3N0YXRpYy9teS9iZzEuanBnJywgLy8gMFxuXHRcdCcuLi8uLi8uLi9zdGF0aWMvbXkvYmcyLmpwZycsXG5cdFx0Jy4uLy4uLy4uL3N0YXRpYy9teS9iZzMuanBnJyxcblx0XHQnLi4vLi4vLi4vc3RhdGljL215L2JnNC5qcGcnLFxuXHRcdCcuLi8uLi8uLi9zdGF0aWMvbXkvYmc1LmpwZycsXG5cdFx0Jy4uLy4uLy4uL3N0YXRpYy9teS9iZzYuanBnJyxcblx0XHQnLi4vLi4vLi4vc3RhdGljL215L2JnNy5qcGcnLFxuXHRcdCcuLi8uLi8uLi9zdGF0aWMvbXkvYmc4LmpwZycsXG5cdFx0Jy4uLy4uLy4uL3N0YXRpYy9teS9iZzkuanBnJyxcblx0XHQnLi4vLi4vLi4vc3RhdGljL215L2JnMTAuanBnJyxcblx0fVxuXHRjb25zdCBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG5cdC8vIGNvbnNvbGUubG9nKCfmnKzmrKFiZ1VybOeahOS4i+agh+S4uicsIG4pO1xuXHRyZXR1cm4gYmdVcmxzW25dO1xufVxuXG5cblxuUGFnZSh7XG5cblx0LyoqXG5cdCAqIOmhtemdoueahOWIneWni+aVsOaNrlxuXHQgKi9cblx0ZGF0YToge1xuXHRcdGJnVXJsOiAnJyxcblx0XHR1c2VyOiB7fSxcblx0XHRpdGVtczogW3tcblx0XHRcdHRpdGxlOiAn5oiR55qE5paH5Lu2Jyxcblx0XHRcdGJhc2VVcmw6ICcvcGFnZXMvZmlsZXMtc2hvdy9pbmRleCcsXG5cdFx0XHRmb250SWNvbkNMYXNzOiAnJyxcblx0XHRcdGJhY2tJY29uQ2xhc3M6ICcnLFxuXHRcdH0sIHtcblx0XHRcdHRpdGxlOiAn5rWP6KeI5Y6G5Y+yJyxcblx0XHRcdGJhc2VVcmw6ICcvcGFnZXMvYnJvd3NpbmctaGlzdG9yeS9pbmRleCcsXG5cdFx0XHRmb250SWNvbkNMYXNzOiAnJyxcblx0XHRcdGJhY2tJY29uQ2xhc3M6ICcnLFxuXHRcdH0sIHtcblx0XHRcdHRpdGxlOiAn55So5oi35Y+N6aaIJyxcblx0XHRcdGJhc2VVcmw6ICcvcGFnZXMvZmVlZGJhY2svaW5kZXgnLFxuXHRcdFx0Zm9udEljb25DTGFzczogJycsXG5cdFx0XHRiYWNrSWNvbkNsYXNzOiAnJyxcblx0XHR9XVxuXHR9LFxuXG5cdC8qKlxuXHQgKiDkv67mlLnog4zmma9cblx0ICovXG5cdG9uQ2hhbmdlQmcoKSB7XG5cdFx0bGV0IGJnVXJsID0gZ2V0QmdVcmwoKTtcblx0XHR3aGlsZSAoYmdVcmwgPT09IHRoaXMuZGF0YS5iZ1VybCkge1xuXHRcdFx0YmdVcmwgPSBnZXRCZ1VybCgpO1xuXHRcdH1cblx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0YmdVcmxcblx0XHR9KVxuXHR9LFxuXG5cdG9uRGVsZXRlKCkge1xuXHRcdHd4LnNob3dUb2FzdCh7XG5cdFx0XHR0aXRsZTogJ+WIoOmZpOaIkOWKnydcblx0XHR9KVxuXHR9LFxuXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG5cdCAqL1xuXHRvbkxvYWQob3B0aW9ucykge1xuXHRcdGNvbnN0IHsgdWlkIH0gPSBvcHRpb25zO1xuXG5cdFx0Y29uc3QgYmdVcmwgPSBnZXRCZ1VybCgpXG5cdFx0Y29uc3QgdXNlckluZm8gPSBVc2VyLmdldFVzZXJJbmZvKCk7XG5cdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdGJnVXJsLFxuXHRcdFx0dXNlcjoge1xuXHRcdFx0XHQuLi51c2VySW5mbyxcblx0XHRcdFx0Y3JlYXRlZFRlYW1Db3VudHM6IDEwLFxuXHRcdFx0XHRtYW5hZ2VkVGVhbUNvdW50czogMjAsXG5cdFx0XHRcdGpvaW5lZFRlYW1Db3VudHM6IDMwLFxuXHRcdFx0XHR1aWQsXG5cdFx0XHR9XG5cdFx0fSlcblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcblx0ICovXG5cdG9uUmVhZHkoKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcblx0ICovXG5cdG9uU2hvdygpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuXHQgKi9cblx0b25IaWRlKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG5cdCAqL1xuXHRvblVubG9hZCgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuXHQgKi9cblx0b25QdWxsRG93blJlZnJlc2goKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG5cdCAqL1xuXHRvblJlYWNoQm90dG9tKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuXHQgKi9cblx0b25TaGFyZUFwcE1lc3NhZ2Uob3B0cyk6IFdlY2hhdE1pbmlwcm9ncmFtLlBhZ2UuSUN1c3RvbVNoYXJlQ29udGVudCB7XG5cdFx0Y29uc29sZS5sb2cob3B0cy50YXJnZXQpXG5cdFx0cmV0dXJuIHt9XG5cdH1cbn0pIl19