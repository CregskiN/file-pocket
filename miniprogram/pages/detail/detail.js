"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = require("../../models/User");
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
        isLogin: true,
        editting: false,
        selectCount: 0,
        selectList: [],
        gid: -1,
    },
    onDelete: function (e) {
        console.log(e.detail);
        wx.showToast({
            title: '删除成功'
        });
    },
    inEdit: function () {
        this.setData({
            editting: true,
            selectList: [],
            selectCount: 0,
        });
    },
    outEdit: function () {
        var files = this.data.files;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            file.isChecked = false;
        }
        this.setData({
            files: files,
            editting: false,
            selectList: [],
            selectCount: 0,
        });
    },
    onSelectAll: function () {
        var files = this.data.files;
        var selectList = this.data.selectList;
        var selectCount = this.data.selectCount;
        if (selectCount !== files.length) {
            for (var _i = 0, files_2 = files; _i < files_2.length; _i++) {
                var file = files_2[_i];
                file.isChecked = true;
                selectList.push(file);
            }
            selectCount = files.length;
            this.setData({
                files: files,
                selectList: selectList,
                selectCount: selectCount,
            });
        }
        else {
            for (var _a = 0, files_3 = files; _a < files_3.length; _a++) {
                var file = files_3[_a];
                file.isChecked = false;
            }
            selectList = [];
            selectCount = 0;
            this.setData({
                files: files,
                selectList: selectList,
                selectCount: selectCount,
            });
        }
    },
    onDeleteSelectList: function (e) {
        console.log('触发 - 删除已选 列表为：', this.data.selectList);
    },
    onShareSelectList: function () {
        wx.showToast({
            title: '分享文件功能暂未开放',
            icon: 'none'
        });
    },
    onInvite: function () {
        wx.showToast({
            title: '选择群聊',
            icon: 'none'
        });
    },
    onSelect: function (e) {
        var fid = e.detail.fid;
        var files = this.data.files;
        var selectList = this.data.selectList;
        var selectCount = this.data.selectCount;
        for (var _i = 0, files_4 = files; _i < files_4.length; _i++) {
            var file = files_4[_i];
            if (file.fid === fid) {
                if (file.isChecked === true) {
                    file.isChecked = false;
                    selectCount = selectCount - 1;
                    selectList.splice(selectList.findIndex(function (sFile) { return sFile.fid === fid; }), 1);
                }
                else {
                    file.isChecked = true;
                    selectCount = selectCount + 1;
                    selectList.push(file);
                }
            }
        }
        this.setData({
            files: files,
            selectList: selectList,
            selectCount: selectCount,
        });
    },
    onLoad: function (options) {
        console.log(options);
        wx.hideShareMenu();
        var userInfo = User_1.default.getUserInfo();
        var oFiles = this.data.files;
        for (var _i = 0, oFiles_1 = oFiles; _i < oFiles_1.length; _i++) {
            var file = oFiles_1[_i];
            file.catagory = fileCatagory[file.catagory];
        }
        this.setData({
            groupCreator: userInfo,
            files: oFiles,
            gid: parseInt(options.gid)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsMENBQXFDO0FBV3JDLElBQUssWUFTSjtBQVRELFdBQUssWUFBWTtJQUNmLDZDQUFTLENBQUE7SUFDVCwrQ0FBVSxDQUFBO0lBQ1YsNkNBQVMsQ0FBQTtJQUNULCtDQUFVLENBQUE7SUFDViw2Q0FBUyxDQUFBO0lBQ1QsK0NBQVUsQ0FBQTtJQUNWLDZDQUFTLENBQUE7SUFDVCw2Q0FBUyxDQUFBO0FBQ1gsQ0FBQyxFQVRJLFlBQVksS0FBWixZQUFZLFFBU2hCO0FBRUQsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osWUFBWSxFQUFFLEVBQUU7UUFDaEIsS0FBSyxFQUFFLENBQUM7Z0JBQ04sSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixHQUFHLEVBQUUsQ0FBQzthQUNQLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixHQUFHLEVBQUUsQ0FBQzthQUNQLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLGNBQWM7Z0JBQ3BCLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxXQUFXO2dCQUNqQixRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxF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TyxDQUFDLEdBQWEsQ0FBQztTQUNyQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL1VzZXInO1xuXG5pbnRlcmZhY2UgU2VsZWN0TGlzdFR5cGUge1xuICBmaWQ/OiBudW1iZXJcbiAgbmFtZT86IHN0cmluZyxcbiAgY2F0YWdvcnk/OiBudW1iZXIsXG4gIHN1Ym1pdHRlcj86IHN0cmluZyxcbiAgdGltZT86IHN0cmluZyxcbiAgaXNDaGVja2VkPzogYm9vbGVhbjtcbn1cblxuZW51bSBmaWxlQ2F0YWdvcnkge1xuICAnZG9jJyA9IDAsXG4gICdkb2N4JyA9IDEsXG4gICd4bHMnID0gMixcbiAgJ3hsc3gnID0gMyxcbiAgJ3BwdCcgPSA0LFxuICAncHB0eCcgPSA1LFxuICAnemlwJyA9IDYsXG4gICdwZGYnID0gNyxcbn1cblxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGdyb3VwQ3JlYXRvcjoge30sXG4gICAgZmlsZXM6IFt7XG4gICAgICBuYW1lOiAn5Lqn5ZOB5pa55rOV6K66JyxcbiAgICAgIGNhdGFnb3J5OiAwLFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5rWP6KeI5Zmo5oiY5LqJ5Y+yJyxcbiAgICAgIGNhdGFnb3J5OiAxLFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDFcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5pS26LSt6Zi/6YeM5be05be055qE5LiA5Y2D56eN5pa55rOVJyxcbiAgICAgIGNhdGFnb3J5OiAyLFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDJcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5bCP5aeQ5aeQ6IGU57O75pa55byP5aSn5YWoJyxcbiAgICAgIGNhdGFnb3J5OiAzLFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDNcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn6JOd57K+54G15YWo6ZuGJyxcbiAgICAgIGNhdGFnb3J5OiA0LFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDRcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5Lqn5ZOB5pa55rOV6K66JyxcbiAgICAgIGNhdGFnb3J5OiA1LFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDVcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5Lqn5ZOB5pa55rOV6K66JyxcbiAgICAgIGNhdGFnb3J5OiA2LFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDZcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5Lqn5ZOB5pa55rOV6K66JyxcbiAgICAgIGNhdGFnb3J5OiA3LFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDdcbiAgICB9XSxcbiAgICBpc0xvZ2luOiB0cnVlLFxuICAgIGVkaXR0aW5nOiBmYWxzZSxcbiAgICBzZWxlY3RDb3VudDogMCxcbiAgICBzZWxlY3RMaXN0OiBbXSBhcyBTZWxlY3RMaXN0VHlwZVtdLFxuICAgIGdpZDogLTEsXG4gIH0sXG5cbiAgLyoqXG4gICAqIOWIoOmZpOaWh+S7tuS6i+S7tlxuICAgKi9cbiAgb25EZWxldGUoZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coZS5kZXRhaWwpO1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+WIoOmZpOaIkOWKnydcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDov5vlhaXnvJbovpHmqKHlvI/kuovku7ZcbiAgICovXG4gIGluRWRpdCgpIHtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZWRpdHRpbmc6IHRydWUsXG4gICAgICBzZWxlY3RMaXN0OiBbXSxcbiAgICAgIHNlbGVjdENvdW50OiAwLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmAgOWHuue8lui+keaooeW8j+S6i+S7tlxuICAgKi9cbiAgb3V0RWRpdCgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZGF0YS5maWxlcztcbiAgICBmb3IobGV0IGZpbGUgb2YgZmlsZXMpe1xuICAgICAgZmlsZS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGZpbGVzLFxuICAgICAgZWRpdHRpbmc6IGZhbHNlLFxuICAgICAgc2VsZWN0TGlzdDogW10sXG4gICAgICBzZWxlY3RDb3VudDogMCxcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDpgInmi6nlhajpg6jkuovku7ZcbiAgICovXG4gIG9uU2VsZWN0QWxsKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5kYXRhLmZpbGVzO1xuICAgIGxldCBzZWxlY3RMaXN0ID0gdGhpcy5kYXRhLnNlbGVjdExpc3Q7XG4gICAgbGV0IHNlbGVjdENvdW50ID0gdGhpcy5kYXRhLnNlbGVjdENvdW50O1xuICAgIGlmIChzZWxlY3RDb3VudCAhPT0gZmlsZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgIGZpbGUuaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0TGlzdC5wdXNoKGZpbGUpO1xuICAgICAgfVxuICAgICAgc2VsZWN0Q291bnQgPSBmaWxlcy5sZW5ndGg7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBmaWxlcyxcbiAgICAgICAgc2VsZWN0TGlzdCxcbiAgICAgICAgc2VsZWN0Q291bnQsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgIGZpbGUuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBzZWxlY3RMaXN0ID0gW107XG4gICAgICBzZWxlY3RDb3VudCA9IDA7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBmaWxlcyxcbiAgICAgICAgc2VsZWN0TGlzdCxcbiAgICAgICAgc2VsZWN0Q291bnQsXG4gICAgICB9KVxuICAgIH1cblxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOWIoOmZpOW3sumAiVxuICAgKi9cbiAgb25EZWxldGVTZWxlY3RMaXN0KGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCfop6blj5EgLSDliKDpmaTlt7LpgIkg5YiX6KGo5Li677yaJywgdGhpcy5kYXRhLnNlbGVjdExpc3QpO1xuICB9LFxuXG4gIC8qKlxuICAgKiDliIbkuqvlt7LpgInmlofku7ZcbiAgICovXG4gIG9uU2hhcmVTZWxlY3RMaXN0KCkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+WIhuS6q+aWh+S7tuWKn+iDveaaguacquW8gOaUvicsXG4gICAgICBpY29uOiAnbm9uZSdcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDpgoDor7fliqDpobnnm67nu4RcbiAgICovXG4gIG9uSW52aXRlKCkge1xuICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICB0aXRsZTogJ+mAieaLqee+pOiBiicsXG4gICAgICBpY29uOiAnbm9uZSdcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnvJbovpHmqKHlvI/kuIsg6YCJ5oup5LqL5Lu2XG4gICAqL1xuICBvblNlbGVjdChlOiBhbnkpIHtcbiAgICBjb25zdCBmaWQgPSBlLmRldGFpbC5maWQ7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmRhdGEuZmlsZXM7XG4gICAgY29uc3Qgc2VsZWN0TGlzdCA9IHRoaXMuZGF0YS5zZWxlY3RMaXN0O1xuICAgIGxldCBzZWxlY3RDb3VudCA9IHRoaXMuZGF0YS5zZWxlY3RDb3VudDtcbiAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBpZiAoZmlsZS5maWQgPT09IGZpZCkge1xuICAgICAgICBpZiAoZmlsZS5pc0NoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgICAgICBmaWxlLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgIHNlbGVjdENvdW50ID0gc2VsZWN0Q291bnQgLSAxO1xuICAgICAgICAgIHNlbGVjdExpc3Quc3BsaWNlKHNlbGVjdExpc3QuZmluZEluZGV4KHNGaWxlID0+IChzRmlsZSBhcyBhbnkpLmZpZCA9PT0gZmlkKSwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmaWxlLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgc2VsZWN0Q291bnQgPSBzZWxlY3RDb3VudCArIDE7XG4gICAgICAgICAgc2VsZWN0TGlzdC5wdXNoKGZpbGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBmaWxlcyxcbiAgICAgIHNlbGVjdExpc3QsXG4gICAgICBzZWxlY3RDb3VudCxcbiAgICB9KVxuICB9LFxuXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgIHd4LmhpZGVTaGFyZU1lbnUoKTtcbiAgICBjb25zdCB1c2VySW5mbyA9IFVzZXIuZ2V0VXNlckluZm8oKTtcbiAgICBjb25zdCBvRmlsZXMgPSB0aGlzLmRhdGEuZmlsZXM7XG4gICAgZm9yIChsZXQgZmlsZSBvZiBvRmlsZXMpIHtcbiAgICAgIChmaWxlLmNhdGFnb3J5IGFzIGFueSkgPSBmaWxlQ2F0YWdvcnlbZmlsZS5jYXRhZ29yeV07XG4gICAgfVxuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBncm91cENyZWF0b3I6IHVzZXJJbmZvLFxuICAgICAgZmlsZXM6IG9GaWxlcyxcbiAgICAgIGdpZDogcGFyc2VJbnQob3B0aW9ucy5naWQgYXMgc3RyaW5nKVxuICAgIH0pXG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2Uob3B0cyk6IFdlY2hhdE1pbmlwcm9ncmFtLlBhZ2UuSUN1c3RvbVNoYXJlQ29udGVudCB7XG4gICAgY29uc29sZS5sb2cob3B0cy50YXJnZXQpXG4gICAgcmV0dXJuIHt9XG4gIH1cbn0pIl19