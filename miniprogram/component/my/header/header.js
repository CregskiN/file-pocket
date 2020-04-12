"use strict";
Component({
    properties: {
        bgUrl: String,
        user: Object,
    },
    options: {
        addGlobalClass: true
    },
    data: {},
    methods: {
        onShow: function () {
            console.log(this.data.user);
        },
        onChangeBg: function () {
            this.triggerEvent('changeBg');
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsTUFBTTtRQUNiLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsSUFBSTtLQUNyQjtJQUlELElBQUksRUFBRSxFQUdMO0lBS0QsT0FBTyxFQUFFO1FBQ1AsTUFBTTtZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQ0QsVUFBVTtZQUNSLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUE7UUFDL0IsQ0FBQztLQUNGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L2NvbW1vbi9wb3AvcG9wLmpzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgYmdVcmw6IFN0cmluZyxcbiAgICB1c2VyOiBPYmplY3QsXG4gIH0sXG4gIG9wdGlvbnM6IHtcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxuICB9LFxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG5cblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBvblNob3coKXtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZGF0YS51c2VyKTtcbiAgICB9LFxuICAgIG9uQ2hhbmdlQmcoKXtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjaGFuZ2VCZycpXG4gICAgfSxcbiAgfVxufSlcbiJdfQ==