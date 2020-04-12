"use strict";
Component({
    properties: {
        item: Object,
        uid: Number,
    },
    options: {
        addGlobalClass: true
    },
    data: {},
    methods: {
        toPage: function () {
            wx.navigateTo({
                url: this.data.item.baseUrl + '?uid=' + this.data.uid
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxNQUFNO1FBQ1osR0FBRyxFQUFFLE1BQU07S0FDWjtJQUNELE9BQU8sRUFBRTtRQUNQLGNBQWMsRUFBRSxJQUFJO0tBQ3JCO0lBSUQsSUFBSSxFQUFFLEVBRUw7SUFLRCxPQUFPLEVBQUU7UUFDUCxNQUFNO1lBQ0osRUFBRSxDQUFDLFVBQVUsQ0FBQztnQkFDWixHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7YUFDdEQsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L215L215LWl0ZW0vbXktaXRlbS5qc1xuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIGl0ZW06IE9iamVjdCxcbiAgICB1aWQ6IE51bWJlcixcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXG4gIH0sXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICB0b1BhZ2UoKSB7XG4gICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiB0aGlzLmRhdGEuaXRlbS5iYXNlVXJsICsgJz91aWQ9JyArIHRoaXMuZGF0YS51aWRcbiAgICAgIH0pXG4gICAgfVxuICB9XG59KVxuIl19