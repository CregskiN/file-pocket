"use strict";
Component({
    properties: {
        id: Number,
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
                id: this.properties.id
            });
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIml0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLFNBQVMsQ0FBQztJQUlULFVBQVUsRUFBRTtRQUNYLEVBQUUsRUFBRSxNQUFNO1FBQ1YsSUFBSSxFQUFFLE1BQU07UUFDWixJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFFBQVEsRUFBRSxNQUFNO0tBQ2hCO0lBQ0QsT0FBTyxFQUFFO1FBQ1IsY0FBYyxFQUFFLElBQUk7S0FDcEI7SUFJRCxJQUFJLEVBQUUsRUFFTDtJQUtELE9BQU8sRUFBRTtRQUNSLE1BQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDekIsRUFBRSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTthQUN0QixDQUFDLENBQUE7UUFDSCxDQUFDO0tBQ0Q7Q0FDRCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnQvaXRlbS9pdGVtLmpzXG5Db21wb25lbnQoe1xuXHQvKipcblx0ICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG5cdCAqL1xuXHRwcm9wZXJ0aWVzOiB7XG5cdFx0aWQ6IE51bWJlcixcblx0XHRpY29uOiBTdHJpbmcsXG5cdFx0bmFtZTogU3RyaW5nLFxuXHRcdGRvY0NvdW50OiBOdW1iZXIsXG5cdFx0aW1nQ291bnQ6IE51bWJlclxuXHR9LFxuXHRvcHRpb25zOiB7XG5cdFx0YWRkR2xvYmFsQ2xhc3M6IHRydWVcblx0fSxcblx0LyoqXG5cdCAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuXHQgKi9cblx0ZGF0YToge1xuXG5cdH0sXG5cblx0LyoqXG5cdCAqIOe7hOS7tueahOaWueazleWIl+ihqFxuXHQgKi9cblx0bWV0aG9kczoge1xuXHRcdG9uTW9yZSgpIHtcblx0XHRcdHRoaXMudHJpZ2dlckV2ZW50KCdtb3JlJywge1xuXHRcdFx0XHRpZDogdGhpcy5wcm9wZXJ0aWVzLmlkXG5cdFx0XHR9KVxuXHRcdH0sXG5cdH1cbn0pXG4iXX0=