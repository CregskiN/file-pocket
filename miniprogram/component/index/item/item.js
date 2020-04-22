"use strict";
var itemList = [];
Component({
    properties: {
        team: Object,
        docCount: Number,
        imgCount: Number,
        type: String,
    },
    options: {
        addGlobalClass: true
    },
    data: {},
    methods: {
        onMore: function (e) {
            var _this = this;
            switch (this.properties.type) {
                case 'normal': {
                    wx.showActionSheet({
                        itemList: ['邀请加入口袋', '重命名', '退出项目'],
                        success: function (res) {
                            switch (res.tapIndex) {
                                case 0: {
                                    _this.triggerEvent('invite', {
                                        tid: _this.data.team.tid
                                    });
                                    break;
                                }
                                case 1: {
                                    _this.triggerEvent('rename', {
                                        tid: _this.data.team.tid
                                    });
                                    break;
                                }
                                case 2: {
                                    _this.triggerEvent('dropOut', {
                                        tid: _this.data.team.tid
                                    });
                                    break;
                                }
                            }
                        },
                        fail: function (res) {
                            console.log('fail');
                        }
                    });
                    break;
                }
                case 'official': {
                    wx.showActionSheet({
                        itemList: ['分享口袋', '退出口袋'],
                        success: function (res) {
                            switch (res.tapIndex) {
                                case 0: {
                                    _this.triggerEvent('share', {
                                        tid: _this.data.team.tid
                                    });
                                    break;
                                }
                                case 1: {
                                    _this.triggerEvent('dropOut', {
                                        tid: _this.data.team.tid
                                    });
                                    break;
                                }
                            }
                        },
                        fail: function (res) {
                            console.log('fail');
                        }
                    });
                    break;
                }
            }
        },
        toDetail: function () {
            wx.navigateTo({
                url: "/pages/detail/detail?tid=" + this.data.team.tid
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLElBQUksUUFBUSxHQUFhLEVBQUUsQ0FBQztBQUU1QixTQUFTLENBQUM7SUFJVCxVQUFVLEVBQUU7UUFDWCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLElBQUksRUFBRSxNQUFNO0tBQ1o7SUFDRCxPQUFPLEVBQUU7UUFDUixjQUFjLEVBQUUsSUFBSTtLQUNwQjtJQUlELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBS1IsTUFBTSxFQUFOLFVBQU8sQ0FBTTtZQUFiLGlCQThEQztZQTdEQSxRQUFRLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO2dCQUM3QixLQUFLLFFBQVEsQ0FBQyxDQUFDO29CQUNkLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBQ2xCLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDO3dCQUNuQyxPQUFPLEVBQUUsVUFBQyxHQUEyRDs0QkFDcEUsUUFBUSxHQUFHLENBQUMsUUFBUSxFQUFFO2dDQUNyQixLQUFLLENBQUMsQ0FBQyxDQUFDO29DQUNQLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3dDQUMzQixHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztxQ0FDdkIsQ0FBQyxDQUFBO29DQUNGLE1BQU07aUNBQ047Z0NBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQztvQ0FDUCxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRTt3Q0FDM0IsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7cUNBQ3ZCLENBQUMsQ0FBQTtvQ0FDRixNQUFNO2lDQUNOO2dDQUNELEtBQUssQ0FBQyxDQUFDLENBQUM7b0NBQ1AsS0FBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7d0NBQzVCLEdBQUcsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO3FDQUN2QixDQUFDLENBQUE7b0NBQ0YsTUFBTTtpQ0FDTjs2QkFDRDt3QkFFRixDQUFDO3dCQUNELElBQUksRUFBRSxVQUFDLEdBQTRDOzRCQUNsRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUNyQixDQUFDO3FCQUNELENBQUMsQ0FBQTtvQkFDRixNQUFNO2lCQUNOO2dCQUNELEtBQUssVUFBVSxDQUFDLENBQUM7b0JBQ2hCLEVBQUUsQ0FBQyxlQUFlLENBQUM7d0JBQ2xCLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUM7d0JBQzFCLE9BQU8sRUFBRSxVQUFDLEdBQTJEOzRCQUNwRSxRQUFRLEdBQUcsQ0FBQyxRQUFRLEVBQUU7Z0NBQ3JCLEtBQUssQ0FBQyxDQUFDLENBQUM7b0NBQ1AsS0FBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUU7d0NBQzFCLEdBQUcsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHO3FDQUN2QixDQUFDLENBQUM7b0NBQ0gsTUFBTTtpQ0FDTjtnQ0FDRCxLQUFLLENBQUMsQ0FBQyxDQUFDO29DQUNQLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFO3dDQUM1QixHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRztxQ0FDdkIsQ0FBQyxDQUFBO29DQUNGLE1BQU07aUNBQ047NkJBQ0Q7d0JBRUYsQ0FBQzt3QkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHOzRCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3JCLENBQUM7cUJBQ0QsQ0FBQyxDQUFBO29CQUNGLE1BQU07aUJBQ047YUFDRDtRQUVGLENBQUM7UUFFRCxRQUFRO1lBQ1AsRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDYixHQUFHLEVBQUUsOEJBQTRCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUs7YUFDckQsQ0FBQyxDQUFBO1FBQ0gsQ0FBQztLQUNEO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L2l0ZW0vaXRlbS5qc1xuXG5sZXQgaXRlbUxpc3Q6IHN0cmluZ1tdID0gW107XG5cbkNvbXBvbmVudCh7XG5cdC8qKlxuXHQgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcblx0ICovXG5cdHByb3BlcnRpZXM6IHtcblx0XHR0ZWFtOiBPYmplY3QsXG5cdFx0ZG9jQ291bnQ6IE51bWJlcixcblx0XHRpbWdDb3VudDogTnVtYmVyLFxuXHRcdHR5cGU6IFN0cmluZyxcblx0fSxcblx0b3B0aW9uczoge1xuXHRcdGFkZEdsb2JhbENsYXNzOiB0cnVlXG5cdH0sXG5cdC8qKlxuXHQgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cblx0ICovXG5cdGRhdGE6IHtcblxuXHR9LFxuXG5cdC8qKlxuXHQgKiDnu4Tku7bnmoTmlrnms5XliJfooahcblx0ICovXG5cdG1ldGhvZHM6IHtcblx0XHQvKipcblx0ICogXCLmm7TlpJpcIuaMiemSrueCueWHu+S6i+S7tlxuXHQgKiBAcGFyYW0gZSDngrnlh7vkuovku7Zcblx0ICovXG5cdFx0b25Nb3JlKGU6IGFueSkge1xuXHRcdFx0c3dpdGNoICh0aGlzLnByb3BlcnRpZXMudHlwZSkge1xuXHRcdFx0XHRjYXNlICdub3JtYWwnOiB7XG5cdFx0XHRcdFx0d3guc2hvd0FjdGlvblNoZWV0KHtcblx0XHRcdFx0XHRcdGl0ZW1MaXN0OiBbJ+mCgOivt+WKoOWFpeWPo+iiiycsICfph43lkb3lkI0nLCAn6YCA5Ye66aG555uuJ10sXG5cdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzOiBXZWNoYXRNaW5pcHJvZ3JhbS5TaG93QWN0aW9uU2hlZXRTdWNjZXNzQ2FsbGJhY2tSZXN1bHQpID0+IHtcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChyZXMudGFwSW5kZXgpIHtcblx0XHRcdFx0XHRcdFx0XHRjYXNlIDA6IHtcblx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudHJpZ2dlckV2ZW50KCdpbnZpdGUnLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpZDogdGhpcy5kYXRhLnRlYW0udGlkXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgMToge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyRXZlbnQoJ3JlbmFtZScsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGlkOiB0aGlzLmRhdGEudGVhbS50aWRcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAyOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXJFdmVudCgnZHJvcE91dCcsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGlkOiB0aGlzLmRhdGEudGVhbS50aWRcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZhaWw6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLkdlbmVyYWxDYWxsYmFja1Jlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygnZmFpbCcpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSAnb2ZmaWNpYWwnOiB7XG5cdFx0XHRcdFx0d3guc2hvd0FjdGlvblNoZWV0KHtcblx0XHRcdFx0XHRcdGl0ZW1MaXN0OiBbJ+WIhuS6q+WPo+iiiycsICfpgIDlh7rlj6PooosnXSxcblx0XHRcdFx0XHRcdHN1Y2Nlc3M6IChyZXM6IFdlY2hhdE1pbmlwcm9ncmFtLlNob3dBY3Rpb25TaGVldFN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHJlcy50YXBJbmRleCkge1xuXHRcdFx0XHRcdFx0XHRcdGNhc2UgMDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGhpcy50cmlnZ2VyRXZlbnQoJ3NoYXJlJywge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aWQ6IHRoaXMuZGF0YS50ZWFtLnRpZFxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAxOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnRyaWdnZXJFdmVudCgnZHJvcE91dCcsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGlkOiB0aGlzLmRhdGEudGVhbS50aWRcblx0XHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdGZhaWw6IChyZXMpID0+IHtcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ2ZhaWwnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHR9LFxuXG5cdFx0dG9EZXRhaWwoKSB7XG5cdFx0XHR3eC5uYXZpZ2F0ZVRvKHtcblx0XHRcdFx0dXJsOiBgL3BhZ2VzL2RldGFpbC9kZXRhaWw/dGlkPSR7dGhpcy5kYXRhLnRlYW0udGlkfWBcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG59KVxuIl19