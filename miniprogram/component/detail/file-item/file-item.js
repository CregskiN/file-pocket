"use strict";
Component({
    properties: {
        file: Object,
        editting: Boolean,
        checked: Boolean,
        isChecked: Boolean,
    },
    options: {
        addGlobalClass: true
    },
    data: {},
    methods: {
        onMore: function () {
            var _this = this;
            if (typeof this.data.checked === 'undefined' && typeof this.data.editting === 'undefined') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFNBQVMsRUFBRSxPQUFPO0tBQ25CO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLElBQUk7S0FDckI7SUFJRCxJQUFJLEVBQUUsRUFFTDtJQUtELE9BQU8sRUFBRTtRQUVQLE1BQU0sRUFBTjtZQUFBLGlCQTJFQztZQTFFQyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssV0FBVyxJQUFJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxFQUFFO2dCQUV6RixFQUFFLENBQUMsZUFBZSxDQUFDO29CQUNqQixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQztvQkFDN0IsT0FBTyxFQUFFLFVBQUMsR0FBMkQ7d0JBQ25FLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDTixFQUFFLENBQUMsU0FBUyxDQUFDO29DQUNYLEtBQUssRUFBRSxNQUFNO2lDQUNkLENBQUMsQ0FBQTtnQ0FDRixNQUFNOzZCQUNQOzRCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQ0FDWCxLQUFLLEVBQUUsS0FBSztpQ0FDYixDQUFDLENBQUE7Z0NBQ0YsTUFBTTs2QkFDUDs0QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0NBQ1gsS0FBSyxFQUFFLElBQUk7b0NBQ1gsT0FBTyxFQUFFLGtEQUFhLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksT0FBSTtvQ0FDN0MsT0FBTyxFQUFFLFVBQUMsR0FBRzt3Q0FDWCxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTs0Q0FDMUIsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7eUNBQ3hCLENBQUMsQ0FBQTtvQ0FDSixDQUFDO2lDQUNGLENBQUMsQ0FBQTs2QkFDSDt5QkFDRjtvQkFFSCxDQUFDO2lCQUNGLENBQUMsQ0FBQTthQUNIO2lCQUFNO2dCQUNMLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQ2pCLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztvQkFDckMsT0FBTyxFQUFFLFVBQUMsR0FBMkQ7d0JBQ25FLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDTixFQUFFLENBQUMsU0FBUyxDQUFDO29DQUNYLEtBQUssRUFBRSxNQUFNO2lDQUNkLENBQUMsQ0FBQTtnQ0FDRixNQUFNOzZCQUNQOzRCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQ0FDWCxLQUFLLEVBQUUsS0FBSztpQ0FDYixDQUFDLENBQUE7Z0NBQ0YsTUFBTTs2QkFDUDs0QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNOLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO29DQUMzQixHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztpQ0FDeEIsQ0FBQyxDQUFDO2dDQUNILE1BQU07NkJBQ1A7NEJBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDTixFQUFFLENBQUMsU0FBUyxDQUFDO29DQUNYLEtBQUssRUFBRSxJQUFJO29DQUNYLE9BQU8sRUFBRSxrREFBYSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFNO29DQUMzQyxPQUFPLEVBQUUsVUFBQyxHQUFHO3dDQUNYLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFOzRDQUMxQixHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzt5Q0FDeEIsQ0FBQyxDQUFBO29DQUNKLENBQUM7aUNBQ0YsQ0FBQyxDQUFBOzZCQUNIO3lCQUNGO29CQUVILENBQUM7aUJBQ0YsQ0FBQyxDQUFBO2FBQ0g7UUFHSCxDQUFDO1FBRUQsUUFBUSxFQUFSLFVBQVMsQ0FBTTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO2dCQUMxQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzthQUN4QixDQUFDLENBQUE7UUFFSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnQvZGV0YWlsL2ZpbGUtaXRlbS9maWxlLWl0ZW0uanNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBmaWxlOiBPYmplY3QsXG4gICAgZWRpdHRpbmc6IEJvb2xlYW4sXG4gICAgY2hlY2tlZDogQm9vbGVhbixcbiAgICBpc0NoZWNrZWQ6IEJvb2xlYW4sXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxuICB9LFxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG5cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG5cbiAgICBvbk1vcmUoKSB7XG4gICAgICBpZiAodHlwZW9mIHRoaXMuZGF0YS5jaGVja2VkID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgdGhpcy5kYXRhLmVkaXR0aW5nID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyDmiJHnmoTmlofku7bmk43kvZxcbiAgICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogWyfliIbkuqsnLCAn6YeN5ZG95ZCNJywgJ+WIoOmZpCddLFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLlNob3dBY3Rpb25TaGVldFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChyZXMudGFwSW5kZXgpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6YCJ5oup5aW95Y+LJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6YeN5ZG95ZCNJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yig6ZmkJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDmgqjnoa7lrprliKDpmaTmlofku7YgLSAke3RoaXMuZGF0YS5maWxlLm5hbWV9ID9gLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZGVsZXRlJywge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZDogdGhpcy5kYXRhLmZpbGUuZmlkXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3eC5zaG93QWN0aW9uU2hlZXQoeyAvLyBAVE9ETzog5L+u5pS55q2k5aSE6YC76L6R77yM5L2/55So5LiO5LiJ5aSE77ya6aG555uu6aG157yW6L6R77yM5rWP6KeI5Y6G5Y+y5pON5L2c77yM5oiR55qE5paH5Lu25pON5L2cIC8vIOWIhuS4pOenjeaooeW8j++8jOacieaXoCfmt7vliqDmiJHnmoQnXG4gICAgICAgICAgaXRlbUxpc3Q6IFsn5YiG5LqrJywgJ+mHjeWRveWQjScsICfmt7vliqDmiJHnmoQnLCAn5Yig6ZmkJ10sXG4gICAgICAgICAgc3VjY2VzczogKHJlczogV2VjaGF0TWluaXByb2dyYW0uU2hvd0FjdGlvblNoZWV0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xuICAgICAgICAgICAgICBjYXNlIDA6IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfpgInmi6nlpb3lj4snXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIDE6IHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgdGl0bGU6ICfph43lkb3lkI0nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIDI6IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnYWRkVG9NeScsIHtcbiAgICAgICAgICAgICAgICAgIGZpZDogdGhpcy5kYXRhLmZpbGUuZmlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yig6ZmkJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDmgqjnoa7lrprliKDpmaTmlofku7YgLSAke3RoaXMuZGF0YS5maWxlLm5hbWV9YCxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2RlbGV0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgICBmaWQ6IHRoaXMuZGF0YS5maWxlLmZpZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfVxuXG5cbiAgICB9LFxuXG4gICAgb25TZWxlY3QoZTogYW55KSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2VsZWN0Jywge1xuICAgICAgICBmaWQ6IHRoaXMuZGF0YS5maWxlLmZpZFxuICAgICAgfSlcblxuICAgIH1cbiAgfVxufSlcbiJdfQ==