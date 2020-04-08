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
            console.log('click more');
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
        },
        onSelect: function (e) {
            this.triggerEvent('select', {
                fid: this.data.file.fid
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLFNBQVMsRUFBRSxPQUFPO0tBQ25CO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLElBQUk7S0FDckI7SUFJRCxJQUFJLEVBQUUsRUFFTDtJQUtELE9BQU8sRUFBRTtRQUNQLE1BQU07WUFBTixpQkFpQ0M7WUFoQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUNqQixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxVQUFDLEdBQTJEO29CQUNuRSxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUU7d0JBQ3BCLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxLQUFLLEVBQUUsTUFBTTs2QkFDZCxDQUFDLENBQUE7NEJBQ0YsTUFBTTt5QkFDUDt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0NBQ1gsS0FBSyxFQUFFLEtBQUs7NkJBQ2IsQ0FBQyxDQUFBOzRCQUNGLE1BQU07eUJBQ1A7d0JBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNYLEtBQUssRUFBRSxJQUFJO2dDQUNYLE9BQU8sRUFBRSxrREFBYSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFNO2dDQUMzQyxPQUFPLEVBQUUsVUFBQyxHQUFHO29DQUNYLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3dDQUMxQixHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztxQ0FDeEIsQ0FBQyxDQUFBO2dDQUNKLENBQUM7NkJBQ0YsQ0FBQyxDQUFBO3lCQUNIO3FCQUNGO2dCQUVILENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO1FBRUQsUUFBUSxZQUFDLENBQU07WUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTtnQkFDMUIsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7YUFDeEIsQ0FBQyxDQUFBO1FBRUosQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L2RldGFpbC9maWxlLWl0ZW0vZmlsZS1pdGVtLmpzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgZmlsZTogT2JqZWN0LFxuICAgIGVkaXR0aW5nOiBCb29sZWFuLFxuICAgIGNoZWNrZWQ6IEJvb2xlYW4sXG4gICAgaXNDaGVja2VkOiBCb29sZWFuLFxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcbiAgfSxcbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIG9uTW9yZSgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbGljayBtb3JlJyk7XG4gICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xuICAgICAgICBpdGVtTGlzdDogWyfliIbkuqsnLCAn6YeN5ZG95ZCNJywgJ+a3u+WKoOaIkeeahCcsICfliKDpmaQnXSxcbiAgICAgICAgc3VjY2VzczogKHJlczogV2VjaGF0TWluaXByb2dyYW0uU2hvd0FjdGlvblNoZWV0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG4gICAgICAgICAgc3dpdGNoIChyZXMudGFwSW5kZXgpIHtcbiAgICAgICAgICAgIGNhc2UgMDoge1xuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6YCJ5oup5aW95Y+LJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMToge1xuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn6YeN5ZG95ZCNJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgMzoge1xuICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Yig6ZmkJyxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBg5oKo56Gu5a6a5Yig6Zmk5paH5Lu2IC0gJHt0aGlzLmRhdGEuZmlsZS5uYW1lfWAsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2RlbGV0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgZmlkOiB0aGlzLmRhdGEuZmlsZS5maWRcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIG9uU2VsZWN0KGU6IGFueSkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ3NlbGVjdCcsIHtcbiAgICAgICAgZmlkOiB0aGlzLmRhdGEuZmlsZS5maWRcbiAgICAgIH0pXG5cbiAgICB9XG4gIH1cbn0pXG4iXX0=