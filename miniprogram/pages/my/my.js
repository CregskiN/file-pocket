"use strict";
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
        userInfo: {},
        items: [{
                title: '我的文件',
                baseUrl: '/pages/my_file/index',
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
        var userInfo = User_1.default.getUserInfoStorage();
        console.log('My.onLoad获取 - ', userInfo);
        var bgUrl = getBgUrl();
        this.setData({
            bgUrl: bgUrl,
            userInfo: userInfo,
        });
    },
    onReady: function () {
    },
    onShow: function () {
        if (this.data.userInfo === {}) {
            var userInfo = User_1.default.getUserInfoStorage();
            this.setData({
                userInfo: userInfo,
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDJEQUFxQztBQUVyQyxTQUFTLFFBQVE7SUFDaEIsSUFBSyxNQVdKO0lBWEQsV0FBSyxNQUFNO1FBQ1YsK0VBQTRCLENBQUE7UUFDNUIsK0VBQTRCLENBQUE7UUFDNUIsK0VBQTRCLENBQUE7UUFDNUIsK0VBQTRCLENBQUE7UUFDNUIsK0VBQTRCLENBQUE7UUFDNUIsK0VBQTRCLENBQUE7UUFDNUIsK0VBQTRCLENBQUE7UUFDNUIsK0VBQTRCLENBQUE7UUFDNUIsK0VBQTRCLENBQUE7UUFDNUIsaUZBQTZCLENBQUE7SUFDOUIsQ0FBQyxFQVhJLE1BQU0sS0FBTixNQUFNLFFBV1Y7SUFDRCxJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQTtJQUV4QyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixDQUFDO0FBSUQsSUFBSSxDQUFDO0lBS0osSUFBSSxFQUFFO1FBQ0wsS0FBSyxFQUFFLEVBQUU7UUFDVCxRQUFRLEVBQUUsRUFBRTtRQUNaLEtBQUssRUFBRSxDQUFDO2dCQUNQLEtBQUssRUFBRSxNQUFNO2dCQUNiLE9BQU8sRUFBRSxzQkFBc0I7Z0JBQy9CLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixhQUFhLEVBQUUsRUFBRTthQUNqQixFQUFFO2dCQUNGLEtBQUssRUFBRSxNQUFNO2dCQUNiLE9BQU8sRUFBRSwrQkFBK0I7Z0JBQ3hDLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixhQUFhLEVBQUUsRUFBRTthQUNqQixFQUFFO2dCQUNGLEtBQUssRUFBRSxNQUFNO2dCQUNiLE9BQU8sRUFBRSx1QkFBdUI7Z0JBQ2hDLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixhQUFhLEVBQUUsRUFBRTthQUNqQixDQUFDO0tBQ0Y7SUFLRCxVQUFVO1FBQ1QsSUFBSSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFDdkIsT0FBTyxLQUFLLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDakMsS0FBSyxHQUFHLFFBQVEsRUFBRSxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNaLEtBQUssT0FBQTtTQUNMLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQztZQUNaLEtBQUssRUFBRSxNQUFNO1NBQ2IsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQU1ELE1BQU0sWUFBQyxPQUFPO1FBQ2IsSUFBTSxRQUFRLEdBQUcsY0FBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLENBQUMsQ0FBQztRQUV4QyxJQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1osS0FBSyxPQUFBO1lBQ0wsUUFBUSxVQUFBO1NBQ1IsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtRQUNMLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssRUFBRSxFQUFFO1lBQzlCLElBQU0sUUFBUSxHQUFHLGNBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1lBQzNDLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1osUUFBUSxVQUFBO2FBQ1IsQ0FBQyxDQUFBO1NBQ0Y7SUFDRixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUIsRUFBakIsVUFBa0IsSUFBSTtRQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixPQUFPLEVBQUUsQ0FBQTtJQUNWLENBQUM7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvVXNlcic7XG5cbmZ1bmN0aW9uIGdldEJnVXJsKCkge1xuXHRlbnVtIGJnVXJscyB7XG5cdFx0Jy4uLy4uLy4uL3N0YXRpYy9teS9iZzEuanBnJywgLy8gMFxuXHRcdCcuLi8uLi8uLi9zdGF0aWMvbXkvYmcyLmpwZycsXG5cdFx0Jy4uLy4uLy4uL3N0YXRpYy9teS9iZzMuanBnJyxcblx0XHQnLi4vLi4vLi4vc3RhdGljL215L2JnNC5qcGcnLFxuXHRcdCcuLi8uLi8uLi9zdGF0aWMvbXkvYmc1LmpwZycsXG5cdFx0Jy4uLy4uLy4uL3N0YXRpYy9teS9iZzYuanBnJyxcblx0XHQnLi4vLi4vLi4vc3RhdGljL215L2JnNy5qcGcnLFxuXHRcdCcuLi8uLi8uLi9zdGF0aWMvbXkvYmc4LmpwZycsXG5cdFx0Jy4uLy4uLy4uL3N0YXRpYy9teS9iZzkuanBnJyxcblx0XHQnLi4vLi4vLi4vc3RhdGljL215L2JnMTAuanBnJyxcblx0fVxuXHRjb25zdCBuID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG5cdC8vIGNvbnNvbGUubG9nKCfmnKzmrKFiZ1VybOeahOS4i+agh+S4uicsIG4pO1xuXHRyZXR1cm4gYmdVcmxzW25dO1xufVxuXG5cblxuUGFnZSh7XG5cblx0LyoqXG5cdCAqIOmhtemdoueahOWIneWni+aVsOaNrlxuXHQgKi9cblx0ZGF0YToge1xuXHRcdGJnVXJsOiAnJyxcblx0XHR1c2VySW5mbzoge30sXG5cdFx0aXRlbXM6IFt7XG5cdFx0XHR0aXRsZTogJ+aIkeeahOaWh+S7ticsXG5cdFx0XHRiYXNlVXJsOiAnL3BhZ2VzL215X2ZpbGUvaW5kZXgnLFxuXHRcdFx0Zm9udEljb25DTGFzczogJycsXG5cdFx0XHRiYWNrSWNvbkNsYXNzOiAnJyxcblx0XHR9LCB7XG5cdFx0XHR0aXRsZTogJ+a1j+iniOWOhuWPsicsXG5cdFx0XHRiYXNlVXJsOiAnL3BhZ2VzL2Jyb3dzaW5nLWhpc3RvcnkvaW5kZXgnLFxuXHRcdFx0Zm9udEljb25DTGFzczogJycsXG5cdFx0XHRiYWNrSWNvbkNsYXNzOiAnJyxcblx0XHR9LCB7XG5cdFx0XHR0aXRsZTogJ+eUqOaIt+WPjemmiCcsXG5cdFx0XHRiYXNlVXJsOiAnL3BhZ2VzL2ZlZWRiYWNrL2luZGV4Jyxcblx0XHRcdGZvbnRJY29uQ0xhc3M6ICcnLFxuXHRcdFx0YmFja0ljb25DbGFzczogJycsXG5cdFx0fV1cblx0fSxcblxuXHQvKipcblx0ICog5L+u5pS56IOM5pmvXG5cdCAqL1xuXHRvbkNoYW5nZUJnKCkge1xuXHRcdGxldCBiZ1VybCA9IGdldEJnVXJsKCk7XG5cdFx0d2hpbGUgKGJnVXJsID09PSB0aGlzLmRhdGEuYmdVcmwpIHtcblx0XHRcdGJnVXJsID0gZ2V0QmdVcmwoKTtcblx0XHR9XG5cdFx0dGhpcy5zZXREYXRhKHtcblx0XHRcdGJnVXJsXG5cdFx0fSlcblx0fSxcblxuXHRvbkRlbGV0ZSgpIHtcblx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0dGl0bGU6ICfliKDpmaTmiJDlip8nXG5cdFx0fSlcblx0fSxcblxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuXHQgKi9cblx0b25Mb2FkKG9wdGlvbnMpIHtcblx0XHRjb25zdCB1c2VySW5mbyA9IFVzZXIuZ2V0VXNlckluZm9TdG9yYWdlKCk7XG5cdFx0Y29uc29sZS5sb2coJ015Lm9uTG9hZOiOt+WPliAtICcsIHVzZXJJbmZvKTtcblxuXHRcdGNvbnN0IGJnVXJsID0gZ2V0QmdVcmwoKTtcblx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0YmdVcmwsXG5cdFx0XHR1c2VySW5mbyxcblx0XHR9KVxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuXHQgKi9cblx0b25SZWFkeSgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuXHQgKi9cblx0b25TaG93KCkge1xuXHRcdGlmICh0aGlzLmRhdGEudXNlckluZm8gPT09IHt9KSB7XG5cdFx0XHRjb25zdCB1c2VySW5mbyA9IFVzZXIuZ2V0VXNlckluZm9TdG9yYWdlKCk7XG5cdFx0XHR0aGlzLnNldERhdGEoe1xuXHRcdFx0XHR1c2VySW5mbyxcblx0XHRcdH0pXG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuXHQgKi9cblx0b25IaWRlKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG5cdCAqL1xuXHRvblVubG9hZCgpIHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuXHQgKi9cblx0b25QdWxsRG93blJlZnJlc2goKSB7XG5cblx0fSxcblxuXHQvKipcblx0ICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG5cdCAqL1xuXHRvblJlYWNoQm90dG9tKCkge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuXHQgKi9cblx0b25TaGFyZUFwcE1lc3NhZ2Uob3B0cyk6IFdlY2hhdE1pbmlwcm9ncmFtLlBhZ2UuSUN1c3RvbVNoYXJlQ29udGVudCB7XG5cdFx0Y29uc29sZS5sb2cob3B0cy50YXJnZXQpXG5cdFx0cmV0dXJuIHt9XG5cdH1cbn0pIl19