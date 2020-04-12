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
        console.log(options);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkRBQXFDO0FBQ3JDLDZDQUEyRDtBQUUzRCxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixZQUFZLEVBQUUsRUFBRTtRQUNoQixLQUFLLEVBQUUsQ0FBQztnQkFDTixJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLEdBQUcsRUFBRSxDQUFDO2FBQ1AsRUFBRTtnQkFDRCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxTQUFTLEVBQUUsS0FBSztnQkFDaEIsSUFBSSxFQUFFLGtCQUFrQjtnQkFDeEIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLEdBQUcsRUFBRSxDQUFDO2FBQ1AsRUFBRTtnQkFDRCxJQUFJLEVBQUUsY0FBYztnQkFDcEIsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxrQkFBa0I7Z0JBQ3hCLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixHQUFHLEVBQUUsQ0FBQzthQUNQLEVBQUU7Z0JBQ0QsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxFQUFFO2dCQUNELElBQUksRUFBRSxPQUFPO2dCQUNiLFFBQVEsRUFBRSxDQUFDO2dCQUNYLFNBQVMsRUFBRSxLQUFLO2dCQUNoQixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixTQUFTLEVBQUUsS0FBSztnQkFDaEIsR0FBRyxFQUFFLENBQUM7YUFDUCxF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QUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQztZQUNYLFlBQVksRUFBRSxRQUFRO1lBQ3RCLEtBQUssRUFBRSxNQUFNO1lBQ2IsR0FBRyxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsR0FBYSxDQUFDO1NBQ3JDLENBQUMsQ0FBQTtJQUVKLENBQUM7SUFLRCxPQUFPO0lBRVAsQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxRQUFRO0lBRVIsQ0FBQztJQUtELGlCQUFpQjtJQUVqQixDQUFDO0lBS0QsYUFBYTtJQUViLENBQUM7SUFLRCxpQkFBaUIsRUFBakIsVUFBa0IsSUFBSTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUN4QixPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXNlciBmcm9tICcuLi8uLi9tb2RlbHMvVXNlcic7XG5pbXBvcnQgeyBmaWxlQ2F0YWdvcnksIEZpbGVUeXBlIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwaW5nJ1xuXG5QYWdlKHtcblxuICAvKipcbiAgICog6aG16Z2i55qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgZ3JvdXBDcmVhdG9yOiB7fSxcbiAgICBmaWxlczogW3tcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDAsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogMFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfmtY/op4jlmajmiJjkuonlj7InLFxuICAgICAgY2F0YWdvcnk6IDEsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogMVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfmlLbotK3pmL/ph4zlt7Tlt7TnmoTkuIDljYPnp43mlrnms5UnLFxuICAgICAgY2F0YWdvcnk6IDIsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogMlxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICflsI/lp5Dlp5DogZTns7vmlrnlvI/lpKflhagnLFxuICAgICAgY2F0YWdvcnk6IDMsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogM1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfok53nsr7ngbXlhajpm4YnLFxuICAgICAgY2F0YWdvcnk6IDQsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogNFxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDUsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogNVxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDYsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogNlxuICAgIH0sIHtcbiAgICAgIG5hbWU6ICfkuqflk4Hmlrnms5XorronLFxuICAgICAgY2F0YWdvcnk6IDcsXG4gICAgICBzdWJtaXR0ZXI6ICfok53nsr7ngbUnLFxuICAgICAgdGltZTogJzIwMjAtMDQtMDEgMTM6MTAnLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZSxcbiAgICAgIGZpZDogN1xuICAgIH1dLFxuICAgIGlzTG9naW46IHRydWUsXG4gICAgZWRpdHRpbmc6IGZhbHNlLFxuICAgIHNlbGVjdENvdW50OiAwLFxuICAgIHNlbGVjdExpc3Q6IFtdIGFzIEZpbGVUeXBlW10sXG4gICAgZ2lkOiAtMSxcbiAgICBvcGVuR2lkOiAnMTIzJ1xuICB9LFxuXG4gIC8qKlxuICAgKiDliKDpmaTmlofku7bkuovku7ZcbiAgICovXG4gIG9uRGVsZXRlKGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsKTtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6ICfliKDpmaTmiJDlip8nXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog6L+b5YWl57yW6L6R5qih5byP5LqL5Lu2XG4gICAqL1xuICBpbkVkaXQoKSB7XG4gICAgd3guc2V0TmF2aWdhdGlvbkJhclRpdGxlKHsgdGl0bGU6ICfmlofku7blpJrpgIknIH0pO1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBlZGl0dGluZzogdHJ1ZSxcbiAgICAgIHNlbGVjdExpc3Q6IFtdLFxuICAgICAgc2VsZWN0Q291bnQ6IDAsXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog6YCA5Ye657yW6L6R5qih5byP5LqL5Lu2XG4gICAqL1xuICBvdXRFZGl0KCkge1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5kYXRhLmZpbGVzO1xuICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgIGZpbGUuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgfVxuICAgIHd4LnNldE5hdmlnYXRpb25CYXJUaXRsZSh7IHRpdGxlOiAn5paH5Lu26K+m5oOFJyB9KTtcbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZmlsZXMsXG4gICAgICBlZGl0dGluZzogZmFsc2UsXG4gICAgICBzZWxlY3RMaXN0OiBbXSxcbiAgICAgIHNlbGVjdENvdW50OiAwLFxuICAgIH0pXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmAieaLqeWFqOmDqOS6i+S7tlxuICAgKi9cbiAgb25TZWxlY3RBbGwoKSB7XG4gICAgY29uc3QgZmlsZXMgPSB0aGlzLmRhdGEuZmlsZXM7XG4gICAgbGV0IHNlbGVjdExpc3QgPSB0aGlzLmRhdGEuc2VsZWN0TGlzdDtcbiAgICBsZXQgc2VsZWN0Q291bnQgPSB0aGlzLmRhdGEuc2VsZWN0Q291bnQ7XG4gICAgaWYgKHNlbGVjdENvdW50ICE9PSBmaWxlcy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgZmlsZS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICBzZWxlY3RMaXN0LnB1c2goZmlsZSk7XG4gICAgICB9XG4gICAgICBzZWxlY3RDb3VudCA9IGZpbGVzLmxlbmd0aDtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGZpbGVzLFxuICAgICAgICBzZWxlY3RMaXN0LFxuICAgICAgICBzZWxlY3RDb3VudCxcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGZpbGUgb2YgZmlsZXMpIHtcbiAgICAgICAgZmlsZS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHNlbGVjdExpc3QgPSBbXTtcbiAgICAgIHNlbGVjdENvdW50ID0gMDtcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIGZpbGVzLFxuICAgICAgICBzZWxlY3RMaXN0LFxuICAgICAgICBzZWxlY3RDb3VudCxcbiAgICAgIH0pXG4gICAgfVxuXG5cbiAgfSxcblxuICAvKipcbiAgICog5Yig6Zmk5bey6YCJXG4gICAqL1xuICBvbkRlbGV0ZVNlbGVjdExpc3QoZTogYW55KSB7XG4gICAgaWYgKHRoaXMuZGF0YS5zZWxlY3RDb3VudCA9PT0gMCkge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6ICfor7fpgInmi6nopoHliKDpmaTnmoTmlofku7YnXG4gICAgICB9KVxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygn6Kem5Y+RIC0g5Yig6Zmk5bey6YCJIOWIl+ihqOS4uu+8micsIHRoaXMuZGF0YS5zZWxlY3RMaXN0KTtcbiAgfSxcblxuICAvKipcbiAgICog5YiG5Lqr5bey6YCJ5paH5Lu2XG4gICAqL1xuICBvblNoYXJlU2VsZWN0TGlzdCgpIHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6ICfliIbkuqvmlofku7blip/og73mmoLmnKrlvIDmlL4nLFxuICAgICAgaWNvbjogJ25vbmUnXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog6YKA6K+35Yqg6aG555uu57uEXG4gICAqL1xuICBvbkludml0ZSgpIHtcbiAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgdGl0bGU6ICfpgInmi6nnvqTogYonLFxuICAgICAgaWNvbjogJ25vbmUnXG4gICAgfSlcbiAgfSxcblxuICAvKipcbiAgICog57yW6L6R5qih5byP5LiLIOmAieaLqeS6i+S7tlxuICAgKi9cbiAgb25TZWxlY3QoZTogYW55KSB7XG4gICAgY29uc3QgZmlkID0gZS5kZXRhaWwuZmlkO1xuICAgIGNvbnN0IGZpbGVzID0gdGhpcy5kYXRhLmZpbGVzO1xuICAgIGNvbnN0IHNlbGVjdExpc3QgPSB0aGlzLmRhdGEuc2VsZWN0TGlzdDtcbiAgICBsZXQgc2VsZWN0Q291bnQgPSB0aGlzLmRhdGEuc2VsZWN0Q291bnQ7XG4gICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xuICAgICAgaWYgKGZpbGUuZmlkID09PSBmaWQpIHtcbiAgICAgICAgaWYgKGZpbGUuaXNDaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgZmlsZS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICBzZWxlY3RDb3VudCA9IHNlbGVjdENvdW50IC0gMTtcbiAgICAgICAgICBzZWxlY3RMaXN0LnNwbGljZShzZWxlY3RMaXN0LmZpbmRJbmRleChzRmlsZSA9PiAoc0ZpbGUgYXMgYW55KS5maWQgPT09IGZpZCksIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZmlsZS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgIHNlbGVjdENvdW50ID0gc2VsZWN0Q291bnQgKyAxO1xuICAgICAgICAgIHNlbGVjdExpc3QucHVzaChmaWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZmlsZXMsXG4gICAgICBzZWxlY3RMaXN0LFxuICAgICAgc2VsZWN0Q291bnQsXG4gICAgfSlcbiAgfSxcblxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICB3eC5oaWRlU2hhcmVNZW51KCk7XG4gICAgY29uc3QgdXNlckluZm8gPSBVc2VyLmdldFVzZXJJbmZvKCk7XG4gICAgY29uc3Qgb0ZpbGVzID0gdGhpcy5kYXRhLmZpbGVzO1xuICAgIGZvciAobGV0IGZpbGUgb2Ygb0ZpbGVzKSB7XG4gICAgICAoZmlsZS5jYXRhZ29yeSBhcyBhbnkpID0gZmlsZUNhdGFnb3J5W2ZpbGUuY2F0YWdvcnldO1xuICAgIH1cbiAgICB0aGlzLnNldERhdGEoe1xuICAgICAgZ3JvdXBDcmVhdG9yOiB1c2VySW5mbyxcbiAgICAgIGZpbGVzOiBvRmlsZXMsXG4gICAgICBnaWQ6IHBhcnNlSW50KG9wdGlvbnMuZ2lkIGFzIHN0cmluZylcbiAgICB9KVxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuICAgIGNvbnNvbGUubG9nKG9wdHMudGFyZ2V0KVxuICAgIHJldHVybiB7fVxuICB9XG59KSJdfQ==