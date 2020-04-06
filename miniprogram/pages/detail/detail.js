"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../../models/User");
var app = getApp();
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
        groupCreator: {},
        files: [{
                name: '产品方法论',
                catagory: 0,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                fid: 0
            }, {
                name: '浏览器战争史',
                catagory: 1,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                fid: 1
            }, {
                name: '收购阿里巴巴的一千种方法',
                catagory: 2,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                fid: 2
            }, {
                name: '小姐姐联系方式大全',
                catagory: 3,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                fid: 3
            }, {
                name: '蓝精灵全集',
                catagory: 4,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                fid: 4
            }, {
                name: '产品方法论',
                catagory: 5,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                fid: 5
            }, {
                name: '产品方法论',
                catagory: 6,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                fid: 6
            }, {
                name: '产品方法论',
                catagory: 7,
                submitter: '蓝精灵',
                time: '2020-04-01 13:10',
                fid: 7
            }],
    },
    onDelete: function (e) {
        console.log(e.detail);
        wx.showToast({
            title: '删除成功'
        });
    },
    onUpload: function () {
        wx.showActionSheet({
            itemList: ['群聊文件', '本地文件'],
            success: function (res) {
                switch (res.tapIndex) {
                    case 0: {
                        wx.chooseMessageFile({
                            count: 100,
                            type: 'file',
                            success: function (res) {
                                var names = [];
                                for (var _i = 0, _a = res.tempFiles; _i < _a.length; _i++) {
                                    var file = _a[_i];
                                    names.push(file.name);
                                }
                                wx.showModal({
                                    title: '提示',
                                    content: "\u60A8\u5C06\u6DFB\u52A0\u6587\u4EF6" + JSON.stringify(names),
                                    success: function () {
                                        wx.showToast({
                                            title: '添加成功'
                                        });
                                    }
                                });
                            }
                        });
                        break;
                    }
                    case 1: {
                        wx.showModal({
                            title: '提示',
                            content: '抱歉，微信暂不支持此功能'
                        });
                        break;
                    }
                }
            }
        });
    },
    onLoad: function () {
        var userInfo = User_1.default.getUserInfo();
        var oFiles = this.data.files;
        for (var _i = 0, oFiles_1 = oFiles; _i < oFiles_1.length; _i++) {
            var file = oFiles_1[_i];
            file.catagory = fileCatagory[file.catagory];
        }
        this.setData({
            groupCreator: userInfo,
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
    onShareAppMessage: function (opts) {
        console.log(opts.target);
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQXFDO0FBQ3JDLElBQU0sR0FBRyxHQUFHLE1BQU0sRUFBRSxDQUFDO0FBRXJCLElBQUssWUFTSjtBQVRELFdBQUssWUFBWTtJQUNmLDZDQUFTLENBQUE7SUFDVCwrQ0FBVSxDQUFBO0lBQ1YsNkNBQVMsQ0FBQTtJQUNULCtDQUFVLENBQUE7SUFDViw2Q0FBUyxDQUFBO0lBQ1QsK0NBQVUsQ0FBQTtJQUNWLDZDQUFTLENBQUE7SUFDVCw2Q0FBUyxDQUFBO0FBQ1gsQ0FBQyxFQVRJLFlBQVksS0FBWixZQUFZLFFBU2hCO0FBRUQsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLEVBQUU7UUFDaEIsS0FBSyxFQUFFLENBQUM7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLEdBQUcsRUFBRSxDQUFDO2FBQ1AsRUFBRTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxjQUFjO2dCQUNwQixRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUks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Q0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQixFQUFqQixVQUFrQixJQUFJO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy9Vc2VyJztcbmNvbnN0IGFwcCA9IGdldEFwcCgpO1xuXG5lbnVtIGZpbGVDYXRhZ29yeSB7XG4gICdkb2MnID0gMCxcbiAgJ2RvY3gnID0gMSxcbiAgJ3hscycgPSAyLFxuICAneGxzeCcgPSAzLFxuICAncHB0JyA9IDQsXG4gICdwcHR4JyA9IDUsXG4gICd6aXAnID0gNixcbiAgJ3BkZicgPSA3LFxufVxuXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgZ3JvdXBDcmVhdG9yOiB7fSxcbiAgICBmaWxlczogW3tcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDAsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgZmlkOiAwXG4gICAgfSwge1xuICAgICAgbmFtZTogJ+a1j+iniOWZqOaImOS6ieWPsicsXG4gICAgICBjYXRhZ29yeTogMSxcbiAgICAgIHN1Ym1pdHRlcjogJ+iTneeyvueBtScsXG4gICAgICB0aW1lOiAnMjAyMC0wNC0wMSAxMzoxMCcsXG4gICAgICBmaWQ6IDFcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5pS26LSt6Zi/6YeM5be05be055qE5LiA5Y2D56eN5pa55rOVJyxcbiAgICAgIGNhdGFnb3J5OiAyLFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGZpZDogMlxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICflsI/lp5Dlp5DogZTns7vmlrnlvI/lpKflhagnLFxuICAgICAgY2F0YWdvcnk6IDMsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgZmlkOiAzXG4gICAgfSwge1xuICAgICAgbmFtZTogJ+iTneeyvueBteWFqOmbhicsXG4gICAgICBjYXRhZ29yeTogNCxcbiAgICAgIHN1Ym1pdHRlcjogJ+iTneeyvueBtScsXG4gICAgICB0aW1lOiAnMjAyMC0wNC0wMSAxMzoxMCcsXG4gICAgICBmaWQ6IDRcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5Lqn5ZOB5pa55rOV6K66JyxcbiAgICAgIGNhdGFnb3J5OiA1LFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGZpZDogNVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDYsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgZmlkOiA2XG4gICAgfSwge1xuICAgICAgbmFtZTogJ+S6p+WTgeaWueazleiuuicsXG4gICAgICBjYXRhZ29yeTogNyxcbiAgICAgIHN1Ym1pdHRlcjogJ+iTneeyvueBtScsXG4gICAgICB0aW1lOiAnMjAyMC0wNC0wMSAxMzoxMCcsXG4gICAgICBmaWQ6IDdcbiAgICB9XSxcbiAgfSxcblxuICAvKipcbiAgICog5Yig6Zmk5paH5Lu2XG4gICAqL1xuICBvbkRlbGV0ZShlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlLmRldGFpbCk7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJ1xuICAgIH0pXG4gIH0sXG5cblxuICAvKipcbiAgICog5LiK5LygXG4gICAqL1xuICBvblVwbG9hZCgpIHtcbiAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgaXRlbUxpc3Q6IFsn576k6IGK5paH5Lu2JywgJ+acrOWcsOaWh+S7tiddLFxuICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICBzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xuICAgICAgICAgIGNhc2UgMDoge1xuICAgICAgICAgICAgd3guY2hvb3NlTWVzc2FnZUZpbGUoe1xuICAgICAgICAgICAgICBjb3VudDogMTAwLFxuICAgICAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgZmlsZSBvZiByZXMudGVtcEZpbGVzKXtcbiAgICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDmgqjlsIbmt7vliqDmlofku7Yke0pTT04uc3RyaW5naWZ5KG5hbWVzKX1gLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5re75Yqg5oiQ5YqfJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfmirHmrYnvvIzlvq7kv6HmmoLkuI3mlK/mjIHmraTlip/og70nXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSxcblxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKCkge1xuICAgIGNvbnN0IHVzZXJJbmZvID0gVXNlci5nZXRVc2VySW5mbygpO1xuICAgIGNvbnN0IG9GaWxlcyA9IHRoaXMuZGF0YS5maWxlcztcbiAgICBmb3IgKGxldCBmaWxlIG9mIG9GaWxlcykge1xuICAgICAgKGZpbGUuY2F0YWdvcnkgYXMgYW55KSA9IGZpbGVDYXRhZ29yeVtmaWxlLmNhdGFnb3J5XTtcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGdyb3VwQ3JlYXRvcjogdXNlckluZm8sXG4gICAgICBmaWxlczogb0ZpbGVzXG4gICAgfSlcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZShvcHRzKTogV2VjaGF0TWluaXByb2dyYW0uUGFnZS5JQ3VzdG9tU2hhcmVDb250ZW50IHtcbiAgICBjb25zb2xlLmxvZyhvcHRzLnRhcmdldClcbiAgICByZXR1cm4ge31cbiAgfVxufSkiXX0=