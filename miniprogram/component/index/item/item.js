"use strict";
Component({
    properties: {
        team: Object,
        docCount: Number,
        imgCount: Number
    },
    options: {
        addGlobalClass: true
    },
    data: {},
    methods: {
        onMore: function (e) {
            var _this = this;
            console.log(e);
            wx.showActionSheet({
                itemList: ['添加共享成员', '修改项目名称', '退出项目'],
                success: function (res) {
                    switch (res.tapIndex) {
                        case 0: {
                            wx.showToast({
                                title: '弹出好友选择界面'
                            });
                            break;
                        }
                        case 1: {
                            wx.showToast({
                                title: '弹出输入模块'
                            });
                            break;
                        }
                        case 2: {
                            wx.showModal({
                                title: '注意',
                                content: '您确定退出该群组？',
                                success: function (res) {
                                    if (res.confirm) {
                                        _this.triggerEvent('dropOut', {
                                            tid: _this.data.team.tid
                                        });
                                    }
                                },
                            });
                        }
                    }
                },
                fail: function (res) {
                    console.log('fail');
                }
            });
        },
        toDetail: function () {
            wx.navigateTo({
                url: "/pages/detail/detail?gid=" + this.data.team.tid
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUlULFVBQVUsRUFBRTtRQUNYLElBQUksRUFBRSxNQUFNO1FBQ1osUUFBUSxFQUFFLE1BQU07UUFDaEIsUUFBUSxFQUFFLE1BQU07S0FDaEI7SUFDRCxPQUFPLEVBQUU7UUFDUixjQUFjLEVBQUUsSUFBSTtLQUNwQjtJQUlELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBS1IsTUFBTSxFQUFOLFVBQU8sQ0FBTTtZQUFiLGlCQTJDQztZQTFDQSxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBTWYsRUFBRSxDQUFDLGVBQWUsQ0FBQztnQkFDbEIsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxVQUFDLEdBQTJEO29CQUNwRSxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUU7d0JBQ3JCLEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWixLQUFLLEVBQUUsVUFBVTs2QkFDakIsQ0FBQyxDQUFBOzRCQUNGLE1BQU07eUJBQ047d0JBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQzs0QkFDUCxFQUFFLENBQUMsU0FBUyxDQUFDO2dDQUNaLEtBQUssRUFBRSxRQUFROzZCQUNmLENBQUMsQ0FBQTs0QkFDRixNQUFNO3lCQUNOO3dCQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7NEJBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQ0FDWixLQUFLLEVBQUUsSUFBSTtnQ0FDWCxPQUFPLEVBQUUsV0FBVztnQ0FDcEIsT0FBTyxFQUFFLFVBQUMsR0FBcUQ7b0NBQzlELElBQUksR0FBRyxDQUFDLE9BQU8sRUFBRTt3Q0FDaEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7NENBQzVCLEdBQUcsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO3lDQUN2QixDQUFDLENBQUE7cUNBQ0Y7Z0NBQ0YsQ0FBQzs2QkFDRCxDQUFDLENBQUE7eUJBQ0Y7cUJBQ0Q7Z0JBRUYsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxHQUE0QztvQkFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDckIsQ0FBQzthQUNELENBQUMsQ0FBQTtRQUNILENBQUM7UUFFRCxRQUFRO1lBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDYixHQUFHLEVBQUUsOEJBQTRCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUs7YUFDckQsQ0FBQyxDQUFBO1FBQ0gsQ0FBQztLQUNEO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L2l0ZW0vaXRlbS5qc1xuQ29tcG9uZW50KHtcblx0LyoqXG5cdCAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuXHQgKi9cblx0cHJvcGVydGllczoge1xuXHRcdHRlYW06IE9iamVjdCxcblx0XHRkb2NDb3VudDogTnVtYmVyLFxuXHRcdGltZ0NvdW50OiBOdW1iZXJcblx0fSxcblx0b3B0aW9uczoge1xuXHRcdGFkZEdsb2JhbENsYXNzOiB0cnVlXG5cdH0sXG5cdC8qKlxuXHQgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cblx0ICovXG5cdGRhdGE6IHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnu4Tku7bnmoTmlrnms5XliJfooahcblx0ICovXG5cdG1ldGhvZHM6IHtcblx0XHQvKipcblx0ICogXCLmm7TlpJpcIuaMiemSrueCueWHu+S6i+S7tlxuXHQgKiBAcGFyYW0gZSDngrnlh7vkuovku7Zcblx0ICovXG5cdFx0b25Nb3JlKGU6IGFueSkge1xuXHRcdFx0Y29uc29sZS5sb2coZSk7XG5cdFx0XHQvLyBlbnVtIGFjdGlvblNoZWV0IHtcblx0XHRcdC8vIFx0J+a3u+WKoOWFseS6q+aIkOWRmCcgPSAwLFxuXHRcdFx0Ly8gXHQn5L+u5pS56aG555uu5ZCN56ewJyA9IDEsXG5cdFx0XHQvLyBcdCfpgIDlh7rpobnnm64nID0gMlxuXHRcdFx0Ly8gfVxuXHRcdFx0d3guc2hvd0FjdGlvblNoZWV0KHtcblx0XHRcdFx0aXRlbUxpc3Q6IFsn5re75Yqg5YWx5Lqr5oiQ5ZGYJywgJ+S/ruaUuemhueebruWQjeensCcsICfpgIDlh7rpobnnm64nXSxcblx0XHRcdFx0c3VjY2VzczogKHJlczogV2VjaGF0TWluaXByb2dyYW0uU2hvd0FjdGlvblNoZWV0U3VjY2Vzc0NhbGxiYWNrUmVzdWx0KSA9PiB7XG5cdFx0XHRcdFx0c3dpdGNoIChyZXMudGFwSW5kZXgpIHtcblx0XHRcdFx0XHRcdGNhc2UgMDoge1xuXHRcdFx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5by55Ye65aW95Y+L6YCJ5oup55WM6Z2iJ1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNhc2UgMToge1xuXHRcdFx0XHRcdFx0XHR3eC5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5by55Ye66L6T5YWl5qih5Z2XJ1xuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGNhc2UgMjoge1xuXHRcdFx0XHRcdFx0XHR3eC5zaG93TW9kYWwoe1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAn5rOo5oSPJyxcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiAn5oKo56Gu5a6a6YCA5Ye66K+l576k57uE77yfJyxcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5TaG93TW9kYWxTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuY29uZmlybSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXJFdmVudCgnZHJvcE91dCcsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aWQ6IHRoaXMuZGF0YS50ZWFtLnRpZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGZhaWw6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLkdlbmVyYWxDYWxsYmFja1Jlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCdmYWlsJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pXG5cdFx0fSxcblxuXHRcdHRvRGV0YWlsKCkge1xuXHRcdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHRcdHVybDogYC9wYWdlcy9kZXRhaWwvZGV0YWlsP2dpZD0ke3RoaXMuZGF0YS50ZWFtLnRpZH1gXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufSlcbiJdfQ==