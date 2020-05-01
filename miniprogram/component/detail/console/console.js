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
                                count: 10,
                                type: 'all',
                                success: function (res) {
                                    wx.showModal({
                                        title: '提示',
                                        content: "\u60A8\u5C06\u6DFB\u52A0" + res.tempFiles.length + "\u4E2A\u6587\u4EF6",
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
                                count: 5,
                                sourceType: ['album'],
                                success: function (res) {
                                    _this.triggerEvent('uploadLocalImg', {
                                        chooseLocalImgs: res
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc29sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnNvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFdBQVcsRUFBRSxNQUFNO1FBQ25CLEdBQUcsRUFBRSxNQUFNO1FBQ1gsSUFBSSxFQUFFLE1BQU07S0FDYjtJQUNELE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxJQUFJO0tBQ3JCO0lBSUQsSUFBSSxFQUFFO1FBQ0osT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFO2dCQUNKLEtBQUssRUFBRTtvQkFDTCxNQUFNLEVBQUUscUNBQXFDO29CQUM3QyxNQUFNLEVBQUUscUNBQXFDO2lCQUM5QztnQkFDRCxRQUFRLEVBQUU7b0JBQ1IsTUFBTSxFQUFFLHdDQUF3QztvQkFDaEQsTUFBTSxFQUFFLHdDQUF3QztpQkFDakQ7YUFDRjtTQUNGO0tBQ0Y7SUFLRCxPQUFPLEVBQUU7UUFNUCxRQUFRO1lBQVIsaUJBc0NDO1lBckNDLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQ2pCLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7Z0JBQzFCLE9BQU8sRUFBRSxVQUFDLEdBQUc7b0JBQ1gsUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFO3dCQUNwQixLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNOLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztnQ0FDbkIsS0FBSyxFQUFFLEVBQUU7Z0NBQ1QsSUFBSSxFQUFFLEtBQUs7Z0NBQ1gsT0FBTyxFQUFFLFVBQUMsR0FBRztvQ0FDWCxFQUFFLENBQUMsU0FBUyxDQUFDO3dDQUNYLEtBQUssRUFBRSxJQUFJO3dDQUNYLE9BQU8sRUFBRSw2QkFBTyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sdUJBQUs7d0NBQ3pDLE9BQU8sRUFBRTs0Q0FDUCxLQUFJLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFO2dEQUNyQyxXQUFXLEVBQUUsR0FBRzs2Q0FDakIsQ0FBQyxDQUFBO3dDQUNKLENBQUM7cUNBQ0YsQ0FBQyxDQUFBO2dDQUNKLENBQUM7NkJBQ0YsQ0FBQyxDQUFBOzRCQUNGLE1BQU07eUJBQ1A7d0JBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDTixFQUFFLENBQUMsV0FBVyxDQUFDO2dDQUNiLEtBQUssRUFBRSxDQUFDO2dDQUNSLFVBQVUsRUFBQyxDQUFDLE9BQU8sQ0FBQztnQ0FDcEIsT0FBTyxFQUFFLFVBQUMsR0FBRztvQ0FDWCxLQUFJLENBQUMsWUFBWSxDQUFDLGdCQUFnQixFQUFFO3dDQUNsQyxlQUFlLEVBQUUsR0FBRztxQ0FDckIsQ0FBQyxDQUFBO2dDQUNKLENBQUM7NkJBQ0YsQ0FBQyxDQUFBOzRCQUNGLE1BQU07eUJBQ1A7cUJBQ0Y7Z0JBQ0gsQ0FBQzthQUNGLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFLRCxRQUFRO1lBQ04sRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsNEJBQTRCO2FBQ2xDLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFLRCxNQUFNO1lBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBS0QsUUFBUTtZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO2dCQUMxQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO2FBQ25CLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFLRCxPQUFPO1lBQ0wsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBS0QsUUFBUTtZQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDOUIsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L2RldGFpbC9jb25zb2xlL2NvbnNvbGUuanNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBlZGl0dGluZzogQm9vbGVhbixcbiAgICBzZWxlY3RDb3VudDogTnVtYmVyLFxuICAgIHRpZDogTnVtYmVyLFxuICAgIHR5cGU6IFN0cmluZywgLy8g5o6n5Yi25Y+w57G75Z6L77yaMS50ZWFtIDIubXlfZmlsZSBcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXG4gIH0sXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBjbGFzc2VzOiB7XG4gICAgICBidG5zOiB7XG4gICAgICAgIHNoYXJlOiB7XG4gICAgICAgICAgYWN0aXZlOiAnZGV0YWlsX2NvbnNvbGVfYnRuIGJ0bl9zaGFyZV9hY3RpdmUnLFxuICAgICAgICAgIG5vcm1hbDogJ2RldGFpbF9jb25zb2xlX2J0biBidG5fc2hhcmVfbm9ybWFsJ1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZToge1xuICAgICAgICAgIGFjdGl2ZTogJ2RldGFpbF9jb25zb2xlX2J0biBidG5fY29tcGxldGVfYWN0aXZlJyxcbiAgICAgICAgICBub3JtYWw6ICdkZXRhaWxfY29uc29sZV9idG4gYnRuX2NvbXBsZXRlX25vcm1hbCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG5cblxuICAgIC8qKlxuICAgICAgICog5LiK5LygXG4gICAgICAgKi9cbiAgICBvblVwbG9hZCgpIHtcbiAgICAgIHd4LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICAgIGl0ZW1MaXN0OiBbJ+iBiuWkqeaWh+S7ticsICfmnKzlnLDlm77niYcnXSxcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgIHN3aXRjaCAocmVzLnRhcEluZGV4KSB7XG4gICAgICAgICAgICBjYXNlIDA6IHtcbiAgICAgICAgICAgICAgd3guY2hvb3NlTWVzc2FnZUZpbGUoe1xuICAgICAgICAgICAgICAgIGNvdW50OiAxMCxcbiAgICAgICAgICAgICAgICB0eXBlOiAnYWxsJyxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDmgqjlsIbmt7vliqAke3Jlcy50ZW1wRmlsZXMubGVuZ3RofeS4quaWh+S7tmAsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgndXBsb2FkTWVzc2FnZUZpbGUnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlT2JqZWN0czogcmVzXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICBjb3VudDogNSxcbiAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOlsnYWxidW0nXSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgndXBsb2FkTG9jYWxJbWcnLCB7XG4gICAgICAgICAgICAgICAgICAgIGNob29zZUxvY2FsSW1nczogcmVzXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDot7Povazoh7PmiJDlkZjpobVcbiAgICAgKi9cbiAgICB0b01lbWJlcigpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbWVtYmVyL21lbWJlcj90aWQ9MSdcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOi/m+WFpee8lui+keeKtuaAgVxuICAgICAqL1xuICAgIGluRWRpdCgpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdpbkVkaXQnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6YKA6K+3XG4gICAgICovXG4gICAgb25JbnZpdGUoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnaW52aXRlJywge1xuICAgICAgICB0aWQ6IHRoaXMuZGF0YS50aWRcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWIhuS6q+W3sumAieaWh+S7tlxuICAgICAqL1xuICAgIG9uU2hhcmUoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2hhcmUnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5Yig6Zmk5bey6YCJXG4gICAgICovXG4gICAgb25EZWxldGUoKSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZGVsZXRlJyk7XG4gICAgfVxuICB9XG59KVxuIl19