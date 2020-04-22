"use strict";
Component({
    properties: {
        file: Object,
        editting: Boolean,
        type: String,
        isChecked: Boolean,
    },
    options: {
        addGlobalClass: true
    },
    data: {},
    methods: {
        onMore: function () {
            var _this = this;
            if (this.data.type === 'my_file') {
                wx.showActionSheet({
                    itemList: ['分享', '重命名', '删除'],
                    success: function (res) {
                        switch (res.tapIndex) {
                            case 0: {
                                wx.showToast({
                                    title: '选择好友'
                                });
                                break;
                            }
                            case 1: {
                                wx.showToast({
                                    title: '重命名'
                                });
                                break;
                            }
                            case 2: {
                                wx.showModal({
                                    title: '删除',
                                    content: "\u60A8\u786E\u5B9A\u5220\u9664\u6587\u4EF6 - " + _this.data.file.name + " ?",
                                    success: function (res) {
                                        _this.triggerEvent('delete', {
                                            fid: _this.data.file.fid
                                        });
                                    },
                                });
                            }
                        }
                    },
                });
            }
            else {
                wx.showActionSheet({
                    itemList: ['分享', '重命名', '添加我的', '删除'],
                    success: function (res) {
                        switch (res.tapIndex) {
                            case 0: {
                                wx.showToast({
                                    title: '选择好友'
                                });
                                break;
                            }
                            case 1: {
                                wx.showToast({
                                    title: '重命名'
                                });
                                break;
                            }
                            case 2: {
                                _this.triggerEvent('addToMy', {
                                    fid: _this.data.file.fid
                                });
                                break;
                            }
                            case 3: {
                                wx.showModal({
                                    title: '删除',
                                    content: "\u60A8\u786E\u5B9A\u5220\u9664\u6587\u4EF6 - " + _this.data.file.name,
                                    success: function (res) {
                                        _this.triggerEvent('delete', {
                                            fid: _this.data.file.fid
                                        });
                                    },
                                });
                            }
                        }
                    },
                });
            }
        },
        onSelect: function (e) {
            this.triggerEvent('select', {
                fid: this.data.file.fid
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLE9BQU87S0FDbkI7SUFDRCxPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsSUFBSTtLQUNyQjtJQUlELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBRVAsTUFBTSxFQUFOO1lBQUEsaUJBd0VDO1lBdkVDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUVoQyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUNqQixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQztvQkFDN0IsT0FBTyxFQUFFLFVBQUMsR0FBMkQ7d0JBQ25FLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDTixFQUFFLENBQUMsU0FBUyxDQUFDO29DQUNYLEtBQUssRUFBRSxNQUFNO2lDQUNkLENBQUMsQ0FBQTtnQ0FDRixNQUFNOzZCQUNQOzRCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQ0FDWCxLQUFLLEVBQUUsS0FBSztpQ0FDYixDQUFDLENBQUE7Z0NBQ0YsTUFBTTs2QkFDUDs0QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0NBQ1gsS0FBSyxFQUFFLElBQUk7b0NBQ1gsT0FBTyxFQUFFLGtEQUFhLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksT0FBSTtvQ0FDN0MsT0FBTyxFQUFFLFVBQUMsR0FBRzt3Q0FDWCxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTs0Q0FDMUIsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7eUNBQ3hCLENBQUMsQ0FBQTtvQ0FDSixDQUFDO2lDQUNGLENBQUMsQ0FBQTs2QkFDSDt5QkFDRjtvQkFDSCxDQUFDO2lCQUNGLENBQUMsQ0FBQTthQUNIO2lCQUFNO2dCQUNMLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQ2pCLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztvQkFDckMsT0FBTyxFQUFFLFVBQUMsR0FBMkQ7d0JBQ25FLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDTixFQUFFLENBQUMsU0FBUyxDQUFDO29DQUNYLEtBQUssRUFBRSxNQUFNO2lDQUNkLENBQUMsQ0FBQTtnQ0FDRixNQUFNOzZCQUNQOzRCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQ0FDWCxLQUFLLEVBQUUsS0FBSztpQ0FDYixDQUFDLENBQUE7Z0NBQ0YsTUFBTTs2QkFDUDs0QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNOLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO29DQUMzQixHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztpQ0FDeEIsQ0FBQyxDQUFDO2dDQUNILE1BQU07NkJBQ1A7NEJBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDTixFQUFFLENBQUMsU0FBUyxDQUFDO29DQUNYLEtBQUssRUFBRSxJQUFJO29DQUNYLE9BQU8sRUFBRSxrREFBYSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFNO29DQUMzQyxPQUFPLEVBQUUsVUFBQyxHQUFHO3dDQUNYLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFOzRDQUMxQixHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzt5Q0FDeEIsQ0FBQyxDQUFBO29DQUNKLENBQUM7aUNBQ0YsQ0FBQyxDQUFBOzZCQUNIO3lCQUNGO29CQUVILENBQUM7aUJBQ0YsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDO1FBRUQsUUFBUSxFQUFSLFVBQVMsQ0FBTTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO2dCQUMxQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzthQUN4QixDQUFDLENBQUE7UUFFSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnQvZGV0YWlsL2ZpbGUtaXRlbS9maWxlLWl0ZW0uanNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBmaWxlOiBPYmplY3QsXG4gICAgZWRpdHRpbmc6IEJvb2xlYW4sXG4gICAgdHlwZTogU3RyaW5nLFxuICAgIGlzQ2hlY2tlZDogQm9vbGVhbixcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXG4gIH0sXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcblxuICAgIG9uTW9yZSgpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEudHlwZSA9PT0gJ215X2ZpbGUnKSB7XG4gICAgICAgIC8vIOaIkeeahOaWh+S7tuaTjeS9nFxuICAgICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICAgIGl0ZW1MaXN0OiBbJ+WIhuS6qycsICfph43lkb3lkI0nLCAn5Yig6ZmkJ10sXG4gICAgICAgICAgc3VjY2VzczogKHJlczogV2VjaGF0TWluaXByb2dyYW0uU2hvd0FjdGlvblNoZWV0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xuICAgICAgICAgICAgICBjYXNlIDA6IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfpgInmi6nlpb3lj4snXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfph43lkb3lkI0nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfliKDpmaQnLFxuICAgICAgICAgICAgICAgICAgY29udGVudDogYOaCqOehruWumuWIoOmZpOaWh+S7tiAtICR7dGhpcy5kYXRhLmZpbGUubmFtZX0gP2AsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdkZWxldGUnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlkOiB0aGlzLmRhdGEuZmlsZS5maWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5zaG93QWN0aW9uU2hlZXQoeyAvLyBAVE9ETzog5L+u5pS55q2k5aSE6YC76L6R77yM5L2/55So5LiO5LiJ5aSE77ya6aG555uu6aG157yW6L6R77yM5rWP6KeI5Y6G5Y+y5pON5L2c77yM5oiR55qE5paH5Lu25pON5L2cIC8vIOWIhuS4pOenjeaooeW8j++8jOacieaXoCfmt7vliqDmiJHnmoQnXG4gICAgICAgICAgaXRlbUxpc3Q6IFsn5YiG5LqrJywgJ+mHjeWRveWQjScsICfmt7vliqDmiJHnmoQnLCAn5Yig6ZmkJ10sXG4gICAgICAgICAgc3VjY2VzczogKHJlczogV2VjaGF0TWluaXByb2dyYW0uU2hvd0FjdGlvblNoZWV0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xuICAgICAgICAgICAgICBjYXNlIDA6IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfpgInmi6nlpb3lj4snXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfph43lkb3lkI0nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnYWRkVG9NeScsIHtcbiAgICAgICAgICAgICAgICAgIGZpZDogdGhpcy5kYXRhLmZpbGUuZmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yig6ZmkJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDmgqjnoa7lrprliKDpmaTmlofku7YgLSAke3RoaXMuZGF0YS5maWxlLm5hbWV9YCxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2RlbGV0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWQ6IHRoaXMuZGF0YS5maWxlLmZpZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBvblNlbGVjdChlOiBhbnkpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdzZWxlY3QnLCB7XG4gICAgICAgIGZpZDogdGhpcy5kYXRhLmZpbGUuZmlkXG4gICAgICB9KVxuXG4gICAgfVxuICB9XG59KVxuIl19