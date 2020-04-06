"use strict";
Component({
    properties: {
        file: Object,
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
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZmlsZS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixJQUFJLEVBQUUsTUFBTTtLQUNiO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLElBQUk7S0FDckI7SUFJRCxJQUFJLEVBQUUsRUFFTDtJQUtELE9BQU8sRUFBRTtRQUNQLE1BQU07WUFBTixpQkFpQ0M7WUFoQ0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxQixFQUFFLENBQUMsZUFBZSxDQUFDO2dCQUNqQixRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUM7Z0JBQ3JDLE9BQU8sRUFBRSxVQUFDLEdBQTJEO29CQUNuRSxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUU7d0JBQ3BCLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ04sRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWCxLQUFLLEVBQUUsTUFBTTs2QkFDZCxDQUFDLENBQUE7NEJBQ0YsTUFBTTt5QkFDUDt3QkFDRCxLQUFLLENBQUMsQ0FBQyxDQUFDOzRCQUNOLEVBQUUsQ0FBQyxTQUFTLENBQUM7Z0NBQ1gsS0FBSyxFQUFFLEtBQUs7NkJBQ2IsQ0FBQyxDQUFBOzRCQUNGLE1BQU07eUJBQ1A7d0JBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDTixFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNYLEtBQUssRUFBRSxJQUFJO2dDQUNYLE9BQU8sRUFBRSxrREFBYSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFNO2dDQUMzQyxPQUFPLEVBQUUsVUFBQyxHQUFHO29DQUNYLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3dDQUMxQixHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztxQ0FDeEIsQ0FBQyxDQUFBO2dDQUNKLENBQUM7NkJBQ0YsQ0FBQyxDQUFBO3lCQUNIO3FCQUNGO2dCQUVILENBQUM7YUFDRixDQUFDLENBQUE7UUFDSixDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnQvZGV0YWlsL2ZpbGUtaXRlbS9maWxlLWl0ZW0uanNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBmaWxlOiBPYmplY3QsXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxuICB9LFxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG5cbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgb25Nb3JlKCkge1xuICAgICAgY29uc29sZS5sb2coJ2NsaWNrIG1vcmUnKTtcbiAgICAgIHd4LnNob3dBY3Rpb25TaGVldCh7XG4gICAgICAgIGl0ZW1MaXN0OiBbJ+WIhuS6qycsICfph43lkb3lkI0nLCAn5re75Yqg5oiR55qEJywgJ+WIoOmZpCddLFxuICAgICAgICBzdWNjZXNzOiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5TaG93QWN0aW9uU2hlZXRTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpID0+IHtcbiAgICAgICAgICBzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xuICAgICAgICAgICAgY2FzZSAwOiB7XG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfpgInmi6nlpb3lj4snXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAxOiB7XG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfph43lkb3lkI0nXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAzOiB7XG4gICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICfliKDpmaQnLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDmgqjnoa7lrprliKDpmaTmlofku7YgLSAke3RoaXMuZGF0YS5maWxlLm5hbWV9YCxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudCgnZGVsZXRlJywge1xuICAgICAgICAgICAgICAgICAgICBmaWQ6IHRoaXMuZGF0YS5maWxlLmZpZFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=