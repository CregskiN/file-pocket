"use strict";
Component({
    properties: {
        hidden: Boolean,
        selectCount: Number,
    },
    options: {
        addGlobalClass: true
    },
    data: {},
    methods: {
        outEdit: function () {
            this.triggerEvent('outEdit');
        },
        onSelectAll: function () {
            this.triggerEvent('selectAll');
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLWJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvcC1iYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLE1BQU0sRUFBRSxPQUFPO1FBQ2YsV0FBVyxFQUFFLE1BQU07S0FDcEI7SUFDRCxPQUFPLEVBQUU7UUFDUCxjQUFjLEVBQUUsSUFBSTtLQUNyQjtJQUlELElBQUksRUFBRSxFQUVMO0lBS0QsT0FBTyxFQUFFO1FBS1AsT0FBTztZQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUE7UUFDOUIsQ0FBQztRQUVELFdBQVc7WUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ2hDLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudC9kZXRhaWwvdG9wLWxpbmUvdG9wLWxpbmUuanNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBoaWRkZW46IEJvb2xlYW4sXG4gICAgc2VsZWN0Q291bnQ6IE51bWJlcixcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXG4gIH0sXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcblxuICAgIC8qKlxuICAgICAqIOWPlua2iOaMiemSru+8jOmAgOWHuue8lui+keaooeW8jyBcbiAgICAgKi9cbiAgICBvdXRFZGl0KCl7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnb3V0RWRpdCcpXG4gICAgfSxcblxuICAgIG9uU2VsZWN0QWxsKCl7XG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnc2VsZWN0QWxsJylcbiAgICB9LFxuICB9XG59KVxuIl19