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
                fid: this.data.file.fid || this.data.file.fileId
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLElBQUksRUFBRSxNQUFNO1FBQ1osU0FBUyxFQUFFLE9BQU87S0FDbkI7SUFDRCxPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsSUFBSTtLQUNyQjtJQUlELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBRVAsTUFBTSxFQUFOO1lBQUEsaUJBd0VDO1lBdkVDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUVoQyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUNqQixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQztvQkFDN0IsT0FBTyxFQUFFLFVBQUMsR0FBMkQ7d0JBQ25FLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDTixFQUFFLENBQUMsU0FBUyxDQUFDO29DQUNYLEtBQUssRUFBRSxNQUFNO2lDQUNkLENBQUMsQ0FBQTtnQ0FDRixNQUFNOzZCQUNQOzRCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQ0FDWCxLQUFLLEVBQUUsS0FBSztpQ0FDYixDQUFDLENBQUE7Z0NBQ0YsTUFBTTs2QkFDUDs0QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7b0NBQ1gsS0FBSyxFQUFFLElBQUk7b0NBQ1gsT0FBTyxFQUFFLGtEQUFhLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksT0FBSTtvQ0FDN0MsT0FBTyxFQUFFLFVBQUMsR0FBRzt3Q0FDWCxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTs0Q0FDMUIsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7eUNBQ3hCLENBQUMsQ0FBQTtvQ0FDSixDQUFDO2lDQUNGLENBQUMsQ0FBQTs2QkFDSDt5QkFDRjtvQkFDSCxDQUFDO2lCQUNGLENBQUMsQ0FBQTthQUNIO2lCQUFNO2dCQUNMLEVBQUUsQ0FBQyxlQUFlLENBQUM7b0JBQ2pCLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQztvQkFDckMsT0FBTyxFQUFFLFVBQUMsR0FBMkQ7d0JBQ25FLFFBQVEsR0FBRyxDQUFDLFFBQVEsRUFBRTs0QkFDcEIsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDTixFQUFFLENBQUMsU0FBUyxDQUFDO29DQUNYLEtBQUssRUFBRSxNQUFNO2lDQUNkLENBQUMsQ0FBQTtnQ0FDRixNQUFNOzZCQUNQOzRCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztvQ0FDWCxLQUFLLEVBQUUsS0FBSztpQ0FDYixDQUFDLENBQUE7Z0NBQ0YsTUFBTTs2QkFDUDs0QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUNOLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO29DQUMzQixHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztpQ0FDeEIsQ0FBQyxDQUFDO2dDQUNILE1BQU07NkJBQ1A7NEJBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztnQ0FDTixFQUFFLENBQUMsU0FBUyxDQUFDO29DQUNYLEtBQUssRUFBRSxJQUFJO29DQUNYLE9BQU8sRUFBRSxrREFBYSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFNO29DQUMzQyxPQUFPLEVBQUUsVUFBQyxHQUFHO3dDQUNYLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFOzRDQUMxQixHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzt5Q0FDeEIsQ0FBQyxDQUFBO29DQUNKLENBQUM7aUNBQ0YsQ0FBQyxDQUFBOzZCQUNIO3lCQUNGO29CQUVILENBQUM7aUJBQ0YsQ0FBQyxDQUFBO2FBQ0g7UUFDSCxDQUFDO1FBRUQsUUFBUSxFQUFSLFVBQVMsQ0FBTTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO2dCQUMxQixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU07YUFDakQsQ0FBQyxDQUFBO1FBRUosQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L2RldGFpbC9maWxlLWl0ZW0vZmlsZS1pdGVtLmpzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgZmlsZTogT2JqZWN0LFxuICAgIGVkaXR0aW5nOiBCb29sZWFuLFxuICAgIHR5cGU6IFN0cmluZyxcbiAgICBpc0NoZWNrZWQ6IEJvb2xlYW4sXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxuICB9LFxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG5cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG5cbiAgICBvbk1vcmUoKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLnR5cGUgPT09ICdteV9maWxlJykge1xuICAgICAgICAvLyDmiJHnmoTmlofku7bmk43kvZxcbiAgICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHtcbiAgICAgICAgICBpdGVtTGlzdDogWyfliIbkuqsnLCAn6YeN5ZG95ZCNJywgJ+WIoOmZpCddLFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLlNob3dBY3Rpb25TaGVldFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChyZXMudGFwSW5kZXgpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6YCJ5oup5aW95Y+LJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6YeN5ZG95ZCNJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yig6ZmkJyxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDmgqjnoa7lrprliKDpmaTmlofku7YgLSAke3RoaXMuZGF0YS5maWxlLm5hbWV9ID9gLFxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZGVsZXRlJywge1xuICAgICAgICAgICAgICAgICAgICAgIGZpZDogdGhpcy5kYXRhLmZpbGUuZmlkXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd3guc2hvd0FjdGlvblNoZWV0KHsgLy8gQFRPRE86IOS/ruaUueatpOWkhOmAu+i+ke+8jOS9v+eUqOS4juS4ieWkhO+8mumhueebrumhtee8lui+ke+8jOa1j+iniOWOhuWPsuaTjeS9nO+8jOaIkeeahOaWh+S7tuaTjeS9nCAvLyDliIbkuKTnp43mqKHlvI/vvIzmnInml6An5re75Yqg5oiR55qEJ1xuICAgICAgICAgIGl0ZW1MaXN0OiBbJ+WIhuS6qycsICfph43lkb3lkI0nLCAn5re75Yqg5oiR55qEJywgJ+WIoOmZpCddLFxuICAgICAgICAgIHN1Y2Nlc3M6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLlNob3dBY3Rpb25TaGVldFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChyZXMudGFwSW5kZXgpIHtcbiAgICAgICAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6YCJ5oup5aW95Y+LJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6YeN5ZG95ZCNJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSAyOiB7XG4gICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2FkZFRvTXknLCB7XG4gICAgICAgICAgICAgICAgICBmaWQ6IHRoaXMuZGF0YS5maWxlLmZpZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGNhc2UgMzoge1xuICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICB0aXRsZTogJ+WIoOmZpCcsXG4gICAgICAgICAgICAgICAgICBjb250ZW50OiBg5oKo56Gu5a6a5Yig6Zmk5paH5Lu2IC0gJHt0aGlzLmRhdGEuZmlsZS5uYW1lfWAsXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdkZWxldGUnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZmlkOiB0aGlzLmRhdGEuZmlsZS5maWRcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgb25TZWxlY3QoZTogYW55KSB7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2VsZWN0Jywge1xuICAgICAgICBmaWQ6IHRoaXMuZGF0YS5maWxlLmZpZCB8fCB0aGlzLmRhdGEuZmlsZS5maWxlSWRcbiAgICAgIH0pXG5cbiAgICB9XG4gIH1cbn0pXG4iXX0=