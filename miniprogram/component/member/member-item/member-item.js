"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Component({
    properties: {
        member: Object,
    },
    data: {},
    options: {
        addGlobalClass: true
    },
    methods: {
        onDelete: function () {
            var _this = this;
            wx.showModal({
                title: '注意⚠️',
                content: "\u6B64\u6B21\u64CD\u4F5C\u5C06\u8E22\u9664 - " + this.data.member.username,
                success: function () {
                    _this.triggerEvent('delete', {
                        uid: _this.data.member.uid,
                        tid: _this.data.member.tid,
                    });
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVtYmVyLWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZW1iZXItaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxNQUFNO0tBQ2Y7SUFLRCxJQUFJLEVBQUUsRUFFTDtJQUNELE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxJQUFJO0tBQ3JCO0lBSUQsT0FBTyxFQUFFO1FBQ1AsUUFBUTtZQUFSLGlCQVdDO1lBVkMsRUFBRSxDQUFDLFNBQVMsQ0FBQztnQkFDWCxLQUFLLEVBQUUsTUFBTTtnQkFDYixPQUFPLEVBQUUsa0RBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBVTtnQkFDakQsT0FBTyxFQUFFO29CQUNQLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFO3dCQUMxQixHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRzt3QkFDekIsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUc7cUJBQzFCLENBQUMsQ0FBQTtnQkFDSixDQUFDO2FBQ0YsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L21lbWJlci9tZW1iZXItaXRlbS9tZW1iZXItaXRlbS5qc1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIG1lbWJlcjogT2JqZWN0LFxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcbiAgfSxcbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIG9uRGVsZXRlKCl7XG4gICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICB0aXRsZTogJ+azqOaEj+KaoO+4jycsXG4gICAgICAgIGNvbnRlbnQ6IGDmraTmrKHmk43kvZzlsIbouKLpmaQgLSAke3RoaXMuZGF0YS5tZW1iZXIudXNlcm5hbWV9YCxcbiAgICAgICAgc3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdkZWxldGUnLCB7XG4gICAgICAgICAgICB1aWQ6IHRoaXMuZGF0YS5tZW1iZXIudWlkLFxuICAgICAgICAgICAgdGlkOiB0aGlzLmRhdGEubWVtYmVyLnRpZCxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxufSlcbiJdfQ==