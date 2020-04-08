"use strict";
Component({
    properties: {
        editting: Boolean,
        selectCount: Number,
    },
    data: {
        classes: {
            btns: {
                share: {
                    active: 'detail_console_btn btn_share_active',
                    normal: 'detail_console_btn btn_share_normal'
                },
                complete: {
                    active: 'detail_console_btn btn_complete_active',
                    normal: 'detail_console_btn btn_complete_normal'
                }
            }
        }
    },
    methods: {
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
                                content: '抱歉，微信小程序暂不支持此功能'
                            });
                            break;
                        }
                    }
                }
            });
        },
        toMember: function () {
            wx.navigateTo({
                url: '/pages/member/member?gid=1'
            });
        },
        inEdit: function () {
            this.triggerEvent('edit');
        },
        onInvite: function () {
            this.triggerEvent('invite');
        },
        onShare: function () {
            this.triggerEvent('share');
        },
        onDelete: function () {
            this.triggerEvent('delete');
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnNvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSxNQUFNO0tBQ3BCO0lBS0QsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUUscUNBQXFDO29CQUM3QyxNQUFNLEVBQUUscUNBQXFDO2lCQUM5QztnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsTUFBTSxFQUFFLHdDQUF3QztvQkFDaEQsTUFBTSxFQUFFLHdDQUF3QztpQkFDakQ7YUFDRjtTQUNGO0tBQ0Y7SUFLRCxPQUFPLEVBQUU7UUFNUCxRQUFRO1lBQ04sRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDakIsUUFBUSxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQztnQkFDMUIsT0FBTyxFQUFFLFVBQUMsR0FBRztvQkFDWCxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUU7d0JBQ3BCLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ04sRUFBRSxDQUFDLGlCQUFpQixDQUFDO2dDQUNuQixLQUFLLEVBQUUsR0FBRztnQ0FDVixJQUFJLEVBQUUsTUFBTTtnQ0FDWixPQUFPLEVBQUUsVUFBQyxHQUFHO29DQUNYLElBQU0sS0FBSyxHQUFHLEVBQUUsQ0FBQztvQ0FDakIsS0FBaUIsVUFBYSxFQUFiLEtBQUEsR0FBRyxDQUFDLFNBQVMsRUFBYixjQUFhLEVBQWIsSUFBYSxFQUFFO3dDQUEzQixJQUFJLElBQUksU0FBQTt3Q0FDWCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztxQ0FDdkI7b0NBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQzt3Q0FDWCxLQUFLLEVBQUUsSUFBSTt3Q0FDWCxPQUFPLEVBQUUseUNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUc7d0NBQ3pDLE9BQU8sRUFBRTs0Q0FDUCxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNYLEtBQUssRUFBRSxNQUFNOzZDQUNkLENBQUMsQ0FBQTt3Q0FDSixDQUFDO3FDQUNGLENBQUMsQ0FBQTtnQ0FDSixDQUFDOzZCQUNGLENBQUMsQ0FBQTs0QkFDRixNQUFNO3lCQUNQO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxLQUFLLEVBQUUsSUFBSTtnQ0FDWCxPQUFPLEVBQUUsaUJBQWlCOzZCQUMzQixDQUFDLENBQUE7NEJBQ0YsTUFBTTt5QkFDUDtxQkFDRjtnQkFDSCxDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUtELFFBQVE7WUFDTixFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUNaLEdBQUcsRUFBRSw0QkFBNEI7YUFDbEMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUtELE1BQU07WUFDSixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQzNCLENBQUM7UUFLRCxRQUFRO1lBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM3QixDQUFDO1FBS0QsT0FBTztZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDNUIsQ0FBQztRQUtELFFBQVE7WUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzdCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudC9kZXRhaWwvY29uc29sZS9jb25zb2xlLmpzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgZWRpdHRpbmc6IEJvb2xlYW4sXG4gICAgc2VsZWN0Q291bnQ6IE51bWJlcixcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgY2xhc3Nlczoge1xuICAgICAgYnRuczoge1xuICAgICAgICBzaGFyZToge1xuICAgICAgICAgIGFjdGl2ZTogJ2RldGFpbF9jb25zb2xlX2J0biBidG5fc2hhcmVfYWN0aXZlJyxcbiAgICAgICAgICBub3JtYWw6ICdkZXRhaWxfY29uc29sZV9idG4gYnRuX3NoYXJlX25vcm1hbCdcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6IHtcbiAgICAgICAgICBhY3RpdmU6ICdkZXRhaWxfY29uc29sZV9idG4gYnRuX2NvbXBsZXRlX2FjdGl2ZScsXG4gICAgICAgICAgbm9ybWFsOiAnZGV0YWlsX2NvbnNvbGVfYnRuIGJ0bl9jb21wbGV0ZV9ub3JtYWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuXG5cbiAgICAvKipcbiAgICAgICAqIOS4iuS8oFxuICAgICAgICovXG4gICAgb25VcGxvYWQoKSB7XG4gICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICBpdGVtTGlzdDogWyfnvqTogYrmlofku7YnLCAn5pys5Zyw5paH5Lu2J10sXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xuICAgICAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgICAgIHd4LmNob29zZU1lc3NhZ2VGaWxlKHtcbiAgICAgICAgICAgICAgICBjb3VudDogMTAwLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBuYW1lcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiByZXMudGVtcEZpbGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWVzLnB1c2goZmlsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYOaCqOWwhua3u+WKoOaWh+S7tiR7SlNPTi5zdHJpbmdpZnkobmFtZXMpfWAsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmt7vliqDmiJDlip8nXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmirHmrYnvvIzlvq7kv6HlsI/nqIvluo/mmoLkuI3mlK/mjIHmraTlip/og70nXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6Lez6L2s6Iez5oiQ5ZGY6aG1XG4gICAgICovXG4gICAgdG9NZW1iZXIoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnL3BhZ2VzL21lbWJlci9tZW1iZXI/Z2lkPTEnXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDov5vlhaXnvJbovpHnirbmgIFcbiAgICAgKi9cbiAgICBpbkVkaXQoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZWRpdCcpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmCgOivt1xuICAgICAqL1xuICAgIG9uSW52aXRlKCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2ludml0ZScpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIhuS6q+W3sumAieaWh+S7tlxuICAgICAqL1xuICAgIG9uU2hhcmUoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2hhcmUnKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliKDpmaTlt7LpgIlcbiAgICAgKi9cbiAgICBvbkRlbGV0ZSgpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdkZWxldGUnKVxuICAgIH1cbiAgfVxufSlcbiJdfQ==