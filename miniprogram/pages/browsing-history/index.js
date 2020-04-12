"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typing_1 = require("../../utils/typing");
Page({
    data: {
        files: [{
                name: '产品方法论',
                catagory: 0,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                isChecked: false,
                fid: 0
            }, {
                name: '浏览器战争史',
                catagory: 1,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                isChecked: false,
                fid: 1
            }, {
                name: '收购阿里巴巴的一千种方法',
                catagory: 2,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                isChecked: false,
                fid: 2
            }, {
                name: '小姐姐联系方式大全',
                catagory: 3,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                isChecked: false,
                fid: 3
            }, {
                name: '蓝精灵全集',
                catagory: 4,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                isChecked: false,
                fid: 4
            }, {
                name: '产品方法论',
                catagory: 5,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                isChecked: false,
                fid: 5
            }, {
                name: '产品方法论',
                catagory: 6,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                isChecked: false,
                fid: 6
            }, {
                name: '产品方法论',
                catagory: 7,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                isChecked: false,
                fid: 7
            }],
    },
    onLoad: function (options) {
        var uid = options.uid;
        var oFiles = this.data.files;
        oFiles.map(function (file) {
            file.catagory = typing_1.fileCatagory[file.catagory];
        });
        this.setData({
            files: oFiles
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
    onShareAppMessage: function () {
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLDZDQUEyRDtBQUczRCxJQUFJLENBQUM7SUFNSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLEdBQUcsRUFBRSxDQUFDO2FBQ1AsRUFBRTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLEdBQUcsRUFBRSxDQUFDO2FBQ1AsRUFBRTtnQkFDRCxJQUFJLEVBQUUsY0FBYztnQkFDcEIsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixHQUFHLEVBQUUsQ0FBQzthQUNQLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxDQUFlO0tBQ2pCO0lBS0QsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUNwQixJQUFBLGlCQUFHLENBQWE7UUFHeEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7WUFDYixJQUFJLENBQUMsUUFBZ0IsR0FBRyxxQkFBWSxDQUFDLElBQUksQ0FBQyxRQUFrQixDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ1gsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDLENBQUE7SUFFSixDQUFDO0lBS0QsT0FBTyxFQUFFO0lBRVQsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxNQUFNLEVBQUU7SUFFUixDQUFDO0lBS0QsUUFBUSxFQUFFO0lBRVYsQ0FBQztJQUtELGlCQUFpQixFQUFFO0lBRW5CLENBQUM7SUFLRCxhQUFhLEVBQUU7SUFFZixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7UUFDakIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gbWluaXByb2dyYW0vcGFnZXMvYnJvd3NpbmctaGlzdG9yeS9pbmRleC5qc1xuaW1wb3J0IHsgZmlsZUNhdGFnb3J5LCBGaWxlVHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGluZydcblxuXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuXG4gIGRhdGE6IHtcbiAgICBmaWxlczogW3tcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDAsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogMFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfmtY/op4jlmajmiJjkuonlj7InLFxuICAgICAgY2F0YWdvcnk6IDEsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogMVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfmlLbotK3pmL/ph4zlt7Tlt7TnmoTkuIDljYPnp43mlrnms5UnLFxuICAgICAgY2F0YWdvcnk6IDIsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogMlxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICflsI/lp5Dlp5DogZTns7vmlrnlvI/lpKflhagnLFxuICAgICAgY2F0YWdvcnk6IDMsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogM1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfok53nsr7ngbXlhajpm4YnLFxuICAgICAgY2F0YWdvcnk6IDQsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogNFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDUsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogNVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDYsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogNlxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDcsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogN1xuICAgIH1dIGFzIEZpbGVUeXBlW10sXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCB7IHVpZCB9ID0gb3B0aW9ucztcblxuXG4gICAgY29uc3Qgb0ZpbGVzID0gdGhpcy5kYXRhLmZpbGVzO1xuXG4gICAgb0ZpbGVzLm1hcCgoZmlsZSkgPT4ge1xuICAgICAgKGZpbGUuY2F0YWdvcnkgYXMgYW55KSA9IGZpbGVDYXRhZ29yeVtmaWxlLmNhdGFnb3J5IGFzIG51bWJlcl07XG4gICAgfSlcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZmlsZXM6IG9GaWxlc1xuICAgIH0pXG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93OiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaDogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4ge31cbiAgfVxufSkiXX0=