"use strict";
var fileCatagory;
(function (fileCatagory) {
    fileCatagory[fileCatagory["doc"] = 0] = "doc";
    fileCatagory[fileCatagory["docx"] = 1] = "docx";
    fileCatagory[fileCatagory["xls"] = 2] = "xls";
    fileCatagory[fileCatagory["xlsx"] = 3] = "xlsx";
    fileCatagory[fileCatagory["ppt"] = 4] = "ppt";
    fileCatagory[fileCatagory["pptx"] = 5] = "pptx";
    fileCatagory[fileCatagory["zip"] = 6] = "zip";
    fileCatagory[fileCatagory["pdf"] = 7] = "pdf";
})(fileCatagory || (fileCatagory = {}));
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
            file.catagory = fileCatagory[file.catagory];
        });
        this.setData({
            files: oFiles,
            uid: uid,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBWUEsSUFBSyxZQVNKO0FBVEQsV0FBSyxZQUFZO0lBQ2YsNkNBQVMsQ0FBQTtJQUNULCtDQUFVLENBQUE7SUFDViw2Q0FBUyxDQUFBO0lBQ1QsK0NBQVUsQ0FBQTtJQUNWLDZDQUFTLENBQUE7SUFDVCwrQ0FBVSxDQUFBO0lBQ1YsNkNBQVMsQ0FBQTtJQUNULDZDQUFTLENBQUE7QUFDWCxDQUFDLEVBVEksWUFBWSxLQUFaLFlBQVksUUFTaEI7QUFFRCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLEdBQUcsRUFBRSxDQUFDO2FBQ1AsRUFBRTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLEdBQUcsRUFBRSxDQUFDO2FBQ1AsRUFBRTtnQkFDRCxJQUFJLEVBQUUsY0FBYztnQkFDcEIsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixHQUFHLEVBQUUsQ0FBQzthQUNQLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxDQUFlO0tBQ2pCO0lBS0QsTUFBTSxFQUFFLFVBQVUsT0FBWTtRQUNwQixJQUFBLGlCQUFHLENBQWE7UUFFeEIsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFDLElBQUk7WUFDYixJQUFJLENBQUMsUUFBZ0IsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQWtCLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLEdBQUcsS0FBQTtTQUNKLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFLRCxPQUFPLEVBQUU7SUFFVCxDQUFDO0lBS0QsTUFBTSxFQUFFO0lBRVIsQ0FBQztJQUtELE1BQU0sRUFBRTtJQUVSLENBQUM7SUFLRCxRQUFRLEVBQUU7SUFFVixDQUFDO0lBS0QsaUJBQWlCLEVBQUU7SUFFbkIsQ0FBQztJQUtELGFBQWEsRUFBRTtJQUVmLENBQUM7SUFLRCxpQkFBaUIsRUFBRTtRQUNqQixPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBtaW5pcHJvZ3JhbS9wYWdlcy9icm93c2luZy1oaXN0b3J5L2luZGV4LmpzXG5cbmludGVyZmFjZSBGaWxlVHlwZSB7XG4gIGZpZD86IG51bWJlclxuICBuYW1lPzogc3RyaW5nLFxuICBjYXRhZ29yeT86IG51bWJlcixcbiAgc3VibWl0dGVyPzogc3RyaW5nLFxuICB0aW1lPzogc3RyaW5nLFxuICBpc0NoZWNrZWQ/OiBib29sZWFuO1xufVxuXG5cbmVudW0gZmlsZUNhdGFnb3J5IHtcbiAgJ2RvYycgPSAwLFxuICAnZG9jeCcgPSAxLFxuICAneGxzJyA9IDIsXG4gICd4bHN4JyA9IDMsXG4gICdwcHQnID0gNCxcbiAgJ3BwdHgnID0gNSxcbiAgJ3ppcCcgPSA2LFxuICAncGRmJyA9IDcsXG59XG5cblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBmaWxlczogW3tcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDAsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogMFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfmtY/op4jlmajmiJjkuonlj7InLFxuICAgICAgY2F0YWdvcnk6IDEsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogMVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfmlLbotK3pmL/ph4zlt7Tlt7TnmoTkuIDljYPnp43mlrnms5UnLFxuICAgICAgY2F0YWdvcnk6IDIsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogMlxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICflsI/lp5Dlp5DogZTns7vmlrnlvI/lpKflhagnLFxuICAgICAgY2F0YWdvcnk6IDMsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogM1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfok53nsr7ngbXlhajpm4YnLFxuICAgICAgY2F0YWdvcnk6IDQsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogNFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDUsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogNVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDYsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogNlxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDcsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogN1xuICAgIH1dIGFzIEZpbGVUeXBlW10sXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQ6IGZ1bmN0aW9uIChvcHRpb25zOiBhbnkpIHtcbiAgICBjb25zdCB7IHVpZCB9ID0gb3B0aW9ucztcblxuICAgIGNvbnN0IG9GaWxlcyA9IHRoaXMuZGF0YS5maWxlcztcblxuICAgIG9GaWxlcy5tYXAoKGZpbGUpID0+IHtcbiAgICAgIChmaWxlLmNhdGFnb3J5IGFzIGFueSkgPSBmaWxlQ2F0YWdvcnlbZmlsZS5jYXRhZ29yeSBhcyBudW1iZXJdO1xuICAgIH0pXG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGZpbGVzOiBvRmlsZXMsXG4gICAgICB1aWQsXG4gICAgfSlcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeTogZnVuY3Rpb24gKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3c6IGZ1bmN0aW9uICgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tOiBmdW5jdGlvbiAoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZTogZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7fVxuICB9XG59KSJdfQ==