"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../../models/User"));
var typing_1 = require("../../utils/typing");
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
        openGid: '123'
    },
    onDelete: function (e) {
        console.log(e.detail);
        wx.showToast({
            title: '删除成功'
        });
    },
    inEdit: function () {
        wx.setNavigationBarTitle({ title: '文件多选' });
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
        wx.setNavigationBarTitle({ title: '文件详情' });
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
        if (this.data.selectCount === 0) {
            wx.showToast({
                title: '请选择要删除的文件'
            });
            return;
        }
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
        console.log(options.gid);
        wx.hideShareMenu();
        var userInfo = User_1.default.getUserInfo();
        var oFiles = this.data.files;
        for (var _i = 0, oFiles_1 = oFiles; _i < oFiles_1.length; _i++) {
            var file = oFiles_1[_i];
            file.catagory = typing_1.fileCatagory[file.catagory];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkRBQXFDO0FBQ3JDLDZDQUEyRDtBQUUzRCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixZQUFZLEVBQUUsRUFBRTtRQUNoQixLQUFLLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLEdBQUcsRUFBRSxDQUFDO2FBQ1AsRUFBRTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLEdBQUcsRUFBRSxDQUFDO2FBQ1AsRUFBRTtnQkFDRCxJQUFJLEVBQUUsY0FBYztnQkFDcEIsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixHQUFHLEVBQUUsQ0FBQzthQUNQLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxF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QUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN0RDtRQUNELElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxZQUFZLEVBQUUsUUFBUTtZQUN0QixLQUFLLEVBQUUsTUFBTTtZQUNiLEdBQUcsRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDLEdBQWEsQ0FBQztTQUNyQyxDQUFDLENBQUE7SUFFSixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSAnLi4vLi4vbW9kZWxzL1VzZXInO1xuaW1wb3J0IHsgZmlsZUNhdGFnb3J5LCBGaWxlVHlwZSB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGluZydcblxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGdyb3VwQ3JlYXRvcjoge30sXG4gICAgZmlsZXM6IFt7XG4gICAgICBuYW1lOiAn5Lqn5ZOB5pa55rOV6K66JyxcbiAgICAgIGNhdGFnb3J5OiAwLFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDBcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5rWP6KeI5Zmo5oiY5LqJ5Y+yJyxcbiAgICAgIGNhdGFnb3J5OiAxLFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDFcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5pS26LSt6Zi/6YeM5be05be055qE5LiA5Y2D56eN5pa55rOVJyxcbiAgICAgIGNhdGFnb3J5OiAyLFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDJcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5bCP5aeQ5aeQ6IGU57O75pa55byP5aSn5YWoJyxcbiAgICAgIGNhdGFnb3J5OiAzLFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDNcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn6JOd57K+54G15YWo6ZuGJyxcbiAgICAgIGNhdGFnb3J5OiA0LFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDRcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5Lqn5ZOB5pa55rOV6K66JyxcbiAgICAgIGNhdGFnb3J5OiA1LFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDVcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5Lqn5ZOB5pa55rOV6K66JyxcbiAgICAgIGNhdGFnb3J5OiA2LFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDZcbiAgICB9LCB7XG4gICAgICBuYW1lOiAn5Lqn5ZOB5pa55rOV6K66JyxcbiAgICAgIGNhdGFnb3J5OiA3LFxuICAgICAgc3VibWl0dGVyOiAn6JOd57K+54G1JyxcbiAgICAgIHRpbWU6ICcyMDIwLTA0LTAxIDEzOjEwJyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2UsXG4gICAgICBmaWQ6IDdcbiAgICB9XSxcbiAgICBpc0xvZ2luOiB0cnVlLFxuICAgIGVkaXR0aW5nOiBmYWxzZSxcbiAgICBzZWxlY3RDb3VudDogMCxcbiAgICBzZWxlY3RMaXN0OiBbXSBhcyBGaWxlVHlwZVtdLFxuICAgIGdpZDogLTEsXG4gICAgb3BlbkdpZDogJzEyMydcbiAgfSxcblxuICAvKipcbiAgICog5Yig6Zmk5paH5Lu25LqL5Lu2XG4gICAqL1xuICBvbkRlbGV0ZShlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhlLmRldGFpbCk7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5Yig6Zmk5oiQ5YqfJ1xuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOi/m+WFpee8lui+keaooeW8j+S6i+S7tlxuICAgKi9cbiAgaW5FZGl0KCkge1xuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7IHRpdGxlOiAn5paH5Lu25aSa6YCJJyB9KTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZWRpdHRpbmc6IHRydWUsXG4gICAgICBzZWxlY3RMaXN0OiBbXSxcbiAgICAgIHNlbGVjdENvdW50OiAwLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmAgOWHuue8lui+keaooeW8j+S6i+S7tlxuICAgKi9cbiAgb3V0RWRpdCgpIHtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZGF0YS5maWxlcztcbiAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICBmaWxlLmlzQ2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cbiAgICB3eC5zZXROYXZpZ2F0aW9uQmFyVGl0bGUoeyB0aXRsZTogJ+aWh+S7tuivpuaDhScgfSk7XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGZpbGVzLFxuICAgICAgZWRpdHRpbmc6IGZhbHNlLFxuICAgICAgc2VsZWN0TGlzdDogW10sXG4gICAgICBzZWxlY3RDb3VudDogMCxcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDpgInmi6nlhajpg6jkuovku7ZcbiAgICovXG4gIG9uU2VsZWN0QWxsKCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5kYXRhLmZpbGVzO1xuICAgIGxldCBzZWxlY3RMaXN0ID0gdGhpcy5kYXRhLnNlbGVjdExpc3Q7XG4gICAgbGV0IHNlbGVjdENvdW50ID0gdGhpcy5kYXRhLnNlbGVjdENvdW50O1xuICAgIGlmIChzZWxlY3RDb3VudCAhPT0gZmlsZXMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgIGZpbGUuaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgc2VsZWN0TGlzdC5wdXNoKGZpbGUpO1xuICAgICAgfVxuICAgICAgc2VsZWN0Q291bnQgPSBmaWxlcy5sZW5ndGg7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBmaWxlcyxcbiAgICAgICAgc2VsZWN0TGlzdCxcbiAgICAgICAgc2VsZWN0Q291bnQsXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgIGZpbGUuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBzZWxlY3RMaXN0ID0gW107XG4gICAgICBzZWxlY3RDb3VudCA9IDA7XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBmaWxlcyxcbiAgICAgICAgc2VsZWN0TGlzdCxcbiAgICAgICAgc2VsZWN0Q291bnQsXG4gICAgICB9KVxuICAgIH1cblxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOWIoOmZpOW3sumAiVxuICAgKi9cbiAgb25EZWxldGVTZWxlY3RMaXN0KGU6IGFueSkge1xuICAgIGlmICh0aGlzLmRhdGEuc2VsZWN0Q291bnQgPT09IDApIHtcbiAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgIHRpdGxlOiAn6K+36YCJ5oup6KaB5Yig6Zmk55qE5paH5Lu2J1xuICAgICAgfSlcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ+inpuWPkSAtIOWIoOmZpOW3sumAiSDliJfooajkuLrvvJonLCB0aGlzLmRhdGEuc2VsZWN0TGlzdCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIOWIhuS6q+W3sumAieaWh+S7tlxuICAgKi9cbiAgb25TaGFyZVNlbGVjdExpc3QoKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn5YiG5Lqr5paH5Lu25Yqf6IO95pqC5pyq5byA5pS+JyxcbiAgICAgIGljb246ICdub25lJ1xuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmCgOivt+WKoOmhueebrue7hFxuICAgKi9cbiAgb25JbnZpdGUoKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiAn6YCJ5oup576k6IGKJyxcbiAgICAgIGljb246ICdub25lJ1xuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe8lui+keaooeW8j+S4iyDpgInmi6nkuovku7ZcbiAgICovXG4gIG9uU2VsZWN0KGU6IGFueSkge1xuICAgIGNvbnN0IGZpZCA9IGUuZGV0YWlsLmZpZDtcbiAgICBjb25zdCBmaWxlcyA9IHRoaXMuZGF0YS5maWxlcztcbiAgICBjb25zdCBzZWxlY3RMaXN0ID0gdGhpcy5kYXRhLnNlbGVjdExpc3Q7XG4gICAgbGV0IHNlbGVjdENvdW50ID0gdGhpcy5kYXRhLnNlbGVjdENvdW50O1xuICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGlmIChmaWxlLmZpZCA9PT0gZmlkKSB7XG4gICAgICAgIGlmIChmaWxlLmlzQ2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIGZpbGUuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgc2VsZWN0Q291bnQgPSBzZWxlY3RDb3VudCAtIDE7XG4gICAgICAgICAgc2VsZWN0TGlzdC5zcGxpY2Uoc2VsZWN0TGlzdC5maW5kSW5kZXgoc0ZpbGUgPT4gKHNGaWxlIGFzIGFueSkuZmlkID09PSBmaWQpLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZpbGUuaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICBzZWxlY3RDb3VudCA9IHNlbGVjdENvdW50ICsgMTtcbiAgICAgICAgICBzZWxlY3RMaXN0LnB1c2goZmlsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGZpbGVzLFxuICAgICAgc2VsZWN0TGlzdCxcbiAgICAgIHNlbGVjdENvdW50LFxuICAgIH0pXG4gIH0sXG5cblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliqDovb1cbiAgICovXG4gIG9uTG9hZChvcHRpb25zKSB7XG4gICAgY29uc29sZS5sb2cob3B0aW9ucy5naWQpO1xuXG4gICAgd3guaGlkZVNoYXJlTWVudSgpO1xuICAgIGNvbnN0IHVzZXJJbmZvID0gVXNlci5nZXRVc2VySW5mbygpO1xuICAgIGNvbnN0IG9GaWxlcyA9IHRoaXMuZGF0YS5maWxlcztcbiAgICBmb3IgKGxldCBmaWxlIG9mIG9GaWxlcykge1xuICAgICAgKGZpbGUuY2F0YWdvcnkgYXMgYW55KSA9IGZpbGVDYXRhZ29yeVtmaWxlLmNhdGFnb3J5XTtcbiAgICB9XG4gICAgdGhpcy5zZXREYXRhKHtcbiAgICAgIGdyb3VwQ3JlYXRvcjogdXNlckluZm8sXG4gICAgICBmaWxlczogb0ZpbGVzLFxuICAgICAgZ2lkOiBwYXJzZUludChvcHRpb25zLmdpZCBhcyBzdHJpbmcpXG4gICAgfSlcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWIneasoea4suafk+WujOaIkFxuICAgKi9cbiAgb25SZWFkeSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i6ZqQ6JePXG4gICAqL1xuICBvbkhpZGUoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLljbjovb1cbiAgICovXG4gIG9uVW5sb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLkuIrmi4nop6blupXkuovku7bnmoTlpITnkIblh73mlbBcbiAgICovXG4gIG9uUmVhY2hCb3R0b20oKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55So5oi354K55Ye75Y+z5LiK6KeS5YiG5LqrXG4gICAqL1xuICBvblNoYXJlQXBwTWVzc2FnZShvcHRzKTogV2VjaGF0TWluaXByb2dyYW0uUGFnZS5JQ3VzdG9tU2hhcmVDb250ZW50IHtcbiAgICBjb25zb2xlLmxvZyhvcHRzLnRhcmdldClcbiAgICByZXR1cm4ge31cbiAgfVxufSkiXX0=