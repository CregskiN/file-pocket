"use strict";
Component({
    properties: {
        editting: Boolean,
        selectCount: Number,
        tid: Number,
        type: String,
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
            var _this = this;
            wx.showActionSheet({
                itemList: ['聊天文件', '本地图片'],
                success: function (res) {
                    switch (res.tapIndex) {
                        case 0: {
                            wx.chooseMessageFile({
                                count: 100,
                                type: 'all',
                                success: function (res) {
                                    console.log(res);
                                    var names = [];
                                    for (var _i = 0, _a = res.tempFiles; _i < _a.length; _i++) {
                                        var file = _a[_i];
                                        names.push(file.name);
                                    }
                                    wx.showModal({
                                        title: '提示',
                                        content: "\u60A8\u5C06\u6DFB\u52A0\u6587\u4EF6" + JSON.stringify(names),
                                        success: function () {
                                            _this.triggerEvent('uploadMessageFile', {
                                                fileObjects: res
                                            });
                                        }
                                    });
                                }
                            });
                            break;
                        }
                        case 1: {
                            wx.chooseImage({
                                success: function (res) {
                                    _this.triggerEvent('uploadLocalImg', {
                                        chooseLocalImgRes: res
                                    });
                                }
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
            this.triggerEvent('inEdit');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnNvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSxNQUFNO1FBQ25CLEdBQUcsRUFBRSxNQUFNO1FBQ1gsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxJQUFJO0tBQ3JCO0lBSUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUUscUNBQXFDO29CQUM3QyxNQUFNLEVBQUUscUNBQXFDO2lCQUM5QztnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsTUFBTSxFQUFFLHdDQUF3QztvQkFDaEQsTUFBTSxFQUFFLHdDQUF3QztpQkFDakQ7YUFDRjtTQUNGO0tBQ0Y7SUFLRCxPQUFPLEVBQUU7UUFNUCxRQUFRO1lBQVIsaUJBa0RDO1lBakRDLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQ2pCLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSxVQUFDLEdBQUc7b0JBQ1gsUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFO3dCQUNwQixLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNOLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQ0FDbkIsS0FBSyxFQUFFLEdBQUc7Z0NBQ1YsSUFBSSxFQUFFLEtBQUs7Z0NBQ1gsT0FBTyxFQUFFLFVBQUMsR0FBRztvQ0FDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29DQUVqQixJQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7b0NBQ2pCLEtBQWlCLFVBQWEsRUFBYixLQUFBLEdBQUcsQ0FBQyxTQUFTLEVBQWIsY0FBYSxFQUFiLElBQWEsRUFBRTt3Q0FBM0IsSUFBSSxJQUFJLFNBQUE7d0NBQ1gsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7cUNBQ3ZCO29DQUNELEVBQUUsQ0FBQyxTQUFTLENBQUM7d0NBQ1gsS0FBSyxFQUFFLElBQUk7d0NBQ1gsT0FBTyxFQUFFLHlDQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFHO3dDQUN6QyxPQUFPLEVBQUU7NENBQ1AsS0FBSSxDQUFDLFlBQVksQ0FBQyxtQkFBbUIsRUFBRTtnREFDckMsV0FBVyxFQUFFLEdBQUc7NkNBQ2pCLENBQUMsQ0FBQTt3Q0FDSixDQUFDO3FDQUNGLENBQUMsQ0FBQTtnQ0FDSixDQUFDOzZCQUNGLENBQUMsQ0FBQTs0QkFDRixNQUFNO3lCQUNQO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ04sRUFBRSxDQUFDLFdBQVcsQ0FBQztnQ0FDYixPQUFPLEVBQUUsVUFBQyxHQUFHO29DQUVYLEtBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUU7d0NBQ2xDLGlCQUFpQixFQUFFLEdBQUc7cUNBQ3ZCLENBQUMsQ0FBQTtnQ0FDSixDQUFDOzZCQUNGLENBQUMsQ0FBQTs0QkFDRixNQUFNO3lCQUNQO3FCQVFGO2dCQUNILENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO1FBS0QsUUFBUTtZQUNOLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ1osR0FBRyxFQUFFLDRCQUE0QjthQUNsQyxDQUFDLENBQUE7UUFDSixDQUFDO1FBS0QsTUFBTTtZQUNKLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDN0IsQ0FBQztRQUtELFFBQVE7WUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtnQkFDMUIsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzthQUNuQixDQUFDLENBQUE7UUFDSixDQUFDO1FBS0QsT0FBTztZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDNUIsQ0FBQztRQUtELFFBQVE7WUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzdCLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudC9kZXRhaWwvY29uc29sZS9jb25zb2xlLmpzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgZWRpdHRpbmc6IEJvb2xlYW4sXG4gICAgc2VsZWN0Q291bnQ6IE51bWJlcixcbiAgICB0aWQ6IE51bWJlcixcbiAgICB0eXBlOiBTdHJpbmcsIC8vIOaOp+WItuWPsOexu+Wei++8mjEudGVhbSAyLm15X2ZpbGUgXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxuICB9LFxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgY2xhc3Nlczoge1xuICAgICAgYnRuczoge1xuICAgICAgICBzaGFyZToge1xuICAgICAgICAgIGFjdGl2ZTogJ2RldGFpbF9jb25zb2xlX2J0biBidG5fc2hhcmVfYWN0aXZlJyxcbiAgICAgICAgICBub3JtYWw6ICdkZXRhaWxfY29uc29sZV9idG4gYnRuX3NoYXJlX25vcm1hbCdcbiAgICAgICAgfSxcbiAgICAgICAgY29tcGxldGU6IHtcbiAgICAgICAgICBhY3RpdmU6ICdkZXRhaWxfY29uc29sZV9idG4gYnRuX2NvbXBsZXRlX2FjdGl2ZScsXG4gICAgICAgICAgbm9ybWFsOiAnZGV0YWlsX2NvbnNvbGVfYnRuIGJ0bl9jb21wbGV0ZV9ub3JtYWwnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuXG5cbiAgICAvKipcbiAgICAgICAqIOS4iuS8oFxuICAgICAgICovXG4gICAgb25VcGxvYWQoKSB7XG4gICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICBpdGVtTGlzdDogWyfogYrlpKnmlofku7YnLCAn5pys5Zyw5Zu+54mHJ10sXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xuICAgICAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgICAgIHd4LmNob29zZU1lc3NhZ2VGaWxlKHtcbiAgICAgICAgICAgICAgICBjb3VudDogMTAwLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdhbGwnLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVzID0gW107XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWxlIG9mIHJlcy50ZW1wRmlsZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZXMucHVzaChmaWxlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBg5oKo5bCG5re75Yqg5paH5Lu2JHtKU09OLnN0cmluZ2lmeShuYW1lcyl9YCxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCd1cGxvYWRNZXNzYWdlRmlsZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVPYmplY3RzOiByZXNcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgndXBsb2FkTG9jYWxJbWcnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNob29zZUxvY2FsSW1nUmVzOiByZXNcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNhc2UgMToge1xuICAgICAgICAgICAgLy8gICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgLy8gICAgIHRpdGxlOiAn5o+Q56S6JyxcbiAgICAgICAgICAgIC8vICAgICBjb250ZW50OiAn5oqx5q2J77yM5b6u5L+h5bCP56iL5bqP5pqC5LiN5pSv5oyB5q2k5Yqf6IO9J1xuICAgICAgICAgICAgLy8gICB9KVxuICAgICAgICAgICAgLy8gICBicmVhaztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOi3s+i9rOiHs+aIkOWRmOmhtVxuICAgICAqL1xuICAgIHRvTWVtYmVyKCkge1xuICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJy9wYWdlcy9tZW1iZXIvbWVtYmVyP3RpZD0xJ1xuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6L+b5YWl57yW6L6R54q25oCBXG4gICAgICovXG4gICAgaW5FZGl0KCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2luRWRpdCcpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmCgOivt1xuICAgICAqL1xuICAgIG9uSW52aXRlKCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2ludml0ZScsIHtcbiAgICAgICAgdGlkOiB0aGlzLmRhdGEudGlkXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDliIbkuqvlt7LpgInmlofku7ZcbiAgICAgKi9cbiAgICBvblNoYXJlKCkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ3NoYXJlJylcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yig6Zmk5bey6YCJXG4gICAgICovXG4gICAgb25EZWxldGUoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZGVsZXRlJylcbiAgICB9XG4gIH1cbn0pXG4iXX0=