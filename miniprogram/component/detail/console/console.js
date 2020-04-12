"use strict";
Component({
    properties: {
        editting: Boolean,
        selectCount: Number,
        tid: Number,
    },
    options: {
        addGlobalClass: true
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
                url: '/pages/member/member?tid=1'
            });
        },
        inEdit: function () {
            this.triggerEvent('edit');
        },
        onInvite: function () {
            this.triggerEvent('invite', {
                tid: this.data.tid
            });
        },
        onShare: function () {
            this.triggerEvent('share');
        },
        onDelete: function () {
            this.triggerEvent('delete');
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnNvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSxNQUFNO1FBQ25CLEdBQUcsRUFBRSxNQUFNO0tBQ1o7SUFDRCxPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsSUFBSTtLQUNyQjtJQUlELElBQUksRUFBRTtRQUNKLE9BQU8sRUFBRTtZQUNQLElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUU7b0JBQ0wsTUFBTSxFQUFFLHFDQUFxQztvQkFDN0MsTUFBTSxFQUFFLHFDQUFxQztpQkFDOUM7Z0JBQ0QsUUFBUSxFQUFFO29CQUNSLE1BQU0sRUFBRSx3Q0FBd0M7b0JBQ2hELE1BQU0sRUFBRSx3Q0FBd0M7aUJBQ2pEO2FBQ0Y7U0FDRjtLQUNGO0lBS0QsT0FBTyxFQUFFO1FBTVAsUUFBUTtZQUNOLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQ2pCLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSxVQUFDLEdBQUc7b0JBQ1gsUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFO3dCQUNwQixLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNOLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQ0FDbkIsS0FBSyxFQUFFLEdBQUc7Z0NBQ1YsSUFBSSxFQUFFLE1BQU07Z0NBQ1osT0FBTyxFQUFFLFVBQUMsR0FBRztvQ0FDWCxJQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7b0NBQ2pCLEtBQWlCLFVBQWEsRUFBYixLQUFBLEdBQUcsQ0FBQyxTQUFTLEVBQWIsY0FBYSxFQUFiLElBQWEsRUFBRTt3Q0FBM0IsSUFBSSxJQUFJLFNBQUE7d0NBQ1gsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUNBQ3ZCO29DQUNELEVBQUUsQ0FBQyxTQUFTLENBQUM7d0NBQ1gsS0FBSyxFQUFFLElBQUk7d0NBQ1gsT0FBTyxFQUFFLHlDQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFHO3dDQUN6QyxPQUFPLEVBQUU7NENBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQztnREFDWCxLQUFLLEVBQUUsTUFBTTs2Q0FDZCxDQUFDLENBQUE7d0NBQ0osQ0FBQztxQ0FDRixDQUFDLENBQUE7Z0NBQ0osQ0FBQzs2QkFDRixDQUFDLENBQUE7NEJBQ0YsTUFBTTt5QkFDUDt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0NBQ1gsS0FBSyxFQUFFLElBQUk7Z0NBQ1gsT0FBTyxFQUFFLGlCQUFpQjs2QkFDM0IsQ0FBQyxDQUFBOzRCQUNGLE1BQU07eUJBQ1A7cUJBQ0Y7Z0JBQ0gsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFLRCxRQUFRO1lBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsNEJBQTRCO2FBQ2xDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFLRCxNQUFNO1lBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUMzQixDQUFDO1FBS0QsUUFBUTtZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO2dCQUMxQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO2FBQ25CLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFLRCxPQUFPO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUM1QixDQUFDO1FBS0QsUUFBUTtZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDN0IsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L2RldGFpbC9jb25zb2xlL2NvbnNvbGUuanNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBlZGl0dGluZzogQm9vbGVhbixcbiAgICBzZWxlY3RDb3VudDogTnVtYmVyLFxuICAgIHRpZDogTnVtYmVyLFxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcbiAgfSxcbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGNsYXNzZXM6IHtcbiAgICAgIGJ0bnM6IHtcbiAgICAgICAgc2hhcmU6IHtcbiAgICAgICAgICBhY3RpdmU6ICdkZXRhaWxfY29uc29sZV9idG4gYnRuX3NoYXJlX2FjdGl2ZScsXG4gICAgICAgICAgbm9ybWFsOiAnZGV0YWlsX2NvbnNvbGVfYnRuIGJ0bl9zaGFyZV9ub3JtYWwnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbXBsZXRlOiB7XG4gICAgICAgICAgYWN0aXZlOiAnZGV0YWlsX2NvbnNvbGVfYnRuIGJ0bl9jb21wbGV0ZV9hY3RpdmUnLFxuICAgICAgICAgIG5vcm1hbDogJ2RldGFpbF9jb25zb2xlX2J0biBidG5fY29tcGxldGVfbm9ybWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcblxuXG4gICAgLyoqXG4gICAgICAgKiDkuIrkvKBcbiAgICAgICAqL1xuICAgIG9uVXBsb2FkKCkge1xuICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgaXRlbUxpc3Q6IFsn576k6IGK5paH5Lu2JywgJ+acrOWcsOaWh+S7tiddLFxuICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChyZXMudGFwSW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMDoge1xuICAgICAgICAgICAgICB3eC5jaG9vc2VNZXNzYWdlRmlsZSh7XG4gICAgICAgICAgICAgICAgY291bnQ6IDEwMCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnZmlsZScsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZXMgPSBbXTtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGZpbGUgb2YgcmVzLnRlbXBGaWxlcykge1xuICAgICAgICAgICAgICAgICAgICBuYW1lcy5wdXNoKGZpbGUubmFtZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDmgqjlsIbmt7vliqDmlofku7Yke0pTT04uc3RyaW5naWZ5KG5hbWVzKX1gLFxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5re75Yqg5oiQ5YqfJ1xuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5oqx5q2J77yM5b6u5L+h5bCP56iL5bqP5pqC5LiN5pSv5oyB5q2k5Yqf6IO9J1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOi3s+i9rOiHs+aIkOWRmOmhtVxuICAgICAqL1xuICAgIHRvTWVtYmVyKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9tZW1iZXIvbWVtYmVyP3RpZD0xJ1xuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6L+b5YWl57yW6L6R54q25oCBXG4gICAgICovXG4gICAgaW5FZGl0KCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2VkaXQnKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDpgoDor7dcbiAgICAgKi9cbiAgICBvbkludml0ZSgpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdpbnZpdGUnLCB7XG4gICAgICAgIHRpZDogdGhpcy5kYXRhLnRpZFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5YiG5Lqr5bey6YCJ5paH5Lu2XG4gICAgICovXG4gICAgb25TaGFyZSgpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdzaGFyZScpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIoOmZpOW3sumAiVxuICAgICAqL1xuICAgIG9uRGVsZXRlKCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2RlbGV0ZScpXG4gICAgfVxuICB9XG59KVxuIl19