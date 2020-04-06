"use strict";
Component({
    properties: {
        gid: Number,
        icon: String,
        name: String,
        docCount: Number,
        imgCount: Number
    },
    options: {
        addGlobalClass: true
    },
    data: {},
    methods: {
        onMore: function () {
            this.triggerEvent('more', {
                id: this.properties.gid
            });
        },
        toDetail: function () {
            wx.navigateTo({
                url: "/pages/detail/detail?" + this.properties.gid
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUlULFVBQVUsRUFBRTtRQUNYLEdBQUcsRUFBRSxNQUFNO1FBQ1gsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNO0tBQ2hCO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsY0FBYyxFQUFFLElBQUk7S0FDcEI7SUFJRCxJQUFJLEVBQUUsRUFFTDtJQUtELE9BQU8sRUFBRTtRQUNSLE1BQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDekIsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRzthQUN2QixDQUFDLENBQUE7UUFDSCxDQUFDO1FBRUQsUUFBUTtZQUNQLEVBQUUsQ0FBQyxVQUFVLENBQUM7Z0JBQ2IsR0FBRyxFQUFFLDBCQUF3QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUs7YUFDbEQsQ0FBQyxDQUFBO1FBQ0gsQ0FBQztLQUNEO0NBQ0QsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50L2l0ZW0vaXRlbS5qc1xuQ29tcG9uZW50KHtcblx0LyoqXG5cdCAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuXHQgKi9cblx0cHJvcGVydGllczoge1xuXHRcdGdpZDogTnVtYmVyLFxuXHRcdGljb246IFN0cmluZyxcblx0XHRuYW1lOiBTdHJpbmcsXG5cdFx0ZG9jQ291bnQ6IE51bWJlcixcblx0XHRpbWdDb3VudDogTnVtYmVyXG5cdH0sXG5cdG9wdGlvbnM6IHtcblx0XHRhZGRHbG9iYWxDbGFzczogdHJ1ZVxuXHR9LFxuXHQvKipcblx0ICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG5cdCAqL1xuXHRkYXRhOiB7XG5cblx0fSxcblxuXHQvKipcblx0ICog57uE5Lu255qE5pa55rOV5YiX6KGoXG5cdCAqL1xuXHRtZXRob2RzOiB7XG5cdFx0b25Nb3JlKCkge1xuXHRcdFx0dGhpcy50cmlnZ2VyRXZlbnQoJ21vcmUnLCB7XG5cdFx0XHRcdGlkOiB0aGlzLnByb3BlcnRpZXMuZ2lkXG5cdFx0XHR9KVxuXHRcdH0sXG5cblx0XHR0b0RldGFpbCgpe1xuXHRcdFx0d3gubmF2aWdhdGVUbyh7XG5cdFx0XHRcdHVybDogYC9wYWdlcy9kZXRhaWwvZGV0YWlsPyR7dGhpcy5wcm9wZXJ0aWVzLmdpZH1gXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufSlcbiJdfQ==