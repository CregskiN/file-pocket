"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Component({
    properties: {
        isLogin: Boolean,
        buttonTop: Number,
        buttonLeft: Number,
        floatBtnIconClass: String,
        startPoint: Object,
        windowHeight: Number,
        windowWidth: Number,
    },
    options: {
        addGlobalClass: true
    },
    data: {},
    methods: {
        buttonStart: function (e) {
            this.setData({
                startPoint: e.touches[0]
            });
        },
        buttonMove: function (e) {
            var endPoint = e.touches[e.touches.length - 1];
            var translateX = endPoint.clientX - this.properties.startPoint.clientX;
            var translateY = endPoint.clientY - this.properties.startPoint.clientY;
            this.setData({
                startPoint: endPoint
            });
            var buttonTop = this.data.buttonTop + translateY;
            var buttonLeft = this.data.buttonLeft + translateX;
            if (buttonLeft + 50 >= this.properties.windowWidth) {
                buttonLeft = this.properties.windowWidth - 50;
            }
            if (buttonLeft <= 0) {
                buttonLeft = 0;
            }
            if (buttonTop <= 0) {
                buttonTop = 0;
            }
            if (buttonTop + 50 >= this.properties.windowHeight) {
                buttonTop = this.properties.windowHeight - 50;
            }
            this.setData({
                buttonTop: buttonTop,
                buttonLeft: buttonLeft
            });
        },
        buttonEnd: function (e) {
        },
        onGetUserInfo: function (e) {
            this.triggerEvent('getAuthorization', __assign({}, e.detail));
        },
        onCreate: function () {
            this.triggerEvent('create', {});
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxvYXRCdG4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmbG9hdEJ0bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUUsTUFBTTtRQUNqQixVQUFVLEVBQUUsTUFBTTtRQUNsQixpQkFBaUIsRUFBRSxNQUFNO1FBQ3pCLFVBQVUsRUFBRSxNQUFNO1FBQ2xCLFlBQVksRUFBRSxNQUFNO1FBQ3BCLFdBQVcsRUFBRSxNQUFNO0tBQ3BCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLElBQUk7S0FDckI7SUFJRCxJQUFJLEVBQUUsRUFDTDtJQUtELE9BQU8sRUFBRTtRQUNQLFdBQVcsRUFBWCxVQUFZLENBQU07WUFHaEIsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxVQUFVLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDekIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUVELFVBQVUsRUFBVixVQUFXLENBQU07WUFDZixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO1lBQzlDLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxPQUFPLEdBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFrQixDQUFDLE9BQU8sQ0FBQTtZQUMvRSxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsT0FBTyxHQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBa0IsQ0FBQyxPQUFPLENBQUE7WUFDL0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxVQUFVLEVBQUUsUUFBUTthQUNyQixDQUFDLENBQUE7WUFFRixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUE7WUFDaEQsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFBO1lBRWxELElBQUksVUFBVSxHQUFHLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQkFDbEQsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQzthQUMvQztZQUNELElBQUksVUFBVSxJQUFJLENBQUMsRUFBRTtnQkFDbkIsVUFBVSxHQUFHLENBQUMsQ0FBQzthQUNoQjtZQUNELElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTtnQkFDbEIsU0FBUyxHQUFHLENBQUMsQ0FBQTthQUNkO1lBQ0QsSUFBSSxTQUFTLEdBQUcsRUFBRSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxFQUFFO2dCQUNsRCxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO2FBQy9DO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxTQUFTLEVBQUUsU0FBUztnQkFDcEIsVUFBVSxFQUFFLFVBQVU7YUFDdkIsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQUVELFNBQVMsRUFBVCxVQUFVLENBQU07UUFHaEIsQ0FBQztRQUVELGFBQWEsRUFBYixVQUFjLENBQU07WUFDbEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsZUFDL0IsQ0FBQyxDQUFDLE1BQU0sRUFDWCxDQUFBO1FBQ0osQ0FBQztRQUVELFFBQVE7WUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNqQyxDQUFDO0tBQ0Y7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb21wb25lbnQvaW5kZXgvZmxvYXRCdG4vZmxvYXRCdG4uanNcbkNvbXBvbmVudCh7XG4gIC8qKlxuICAgKiDnu4Tku7bnmoTlsZ7mgKfliJfooahcbiAgICovXG4gIHByb3BlcnRpZXM6IHtcbiAgICBpc0xvZ2luOiBCb29sZWFuLFxuICAgIGJ1dHRvblRvcDogTnVtYmVyLFxuICAgIGJ1dHRvbkxlZnQ6IE51bWJlcixcbiAgICBmbG9hdEJ0bkljb25DbGFzczogU3RyaW5nLFxuICAgIHN0YXJ0UG9pbnQ6IE9iamVjdCxcbiAgICB3aW5kb3dIZWlnaHQ6IE51bWJlcixcbiAgICB3aW5kb3dXaWR0aDogTnVtYmVyLFxuICB9LFxuICBvcHRpb25zOiB7XG4gICAgYWRkR2xvYmFsQ2xhc3M6IHRydWVcbiAgfSxcbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICBidXR0b25TdGFydChlOiBhbnkpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGUudG91Y2hlcyk7XG5cbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHN0YXJ0UG9pbnQ6IGUudG91Y2hlc1swXVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgYnV0dG9uTW92ZShlOiBhbnkpIHtcbiAgICAgIHZhciBlbmRQb2ludCA9IGUudG91Y2hlc1tlLnRvdWNoZXMubGVuZ3RoIC0gMV1cbiAgICAgIHZhciB0cmFuc2xhdGVYID0gZW5kUG9pbnQuY2xpZW50WCAtICh0aGlzLnByb3BlcnRpZXMuc3RhcnRQb2ludCBhcyBhbnkpLmNsaWVudFhcbiAgICAgIHZhciB0cmFuc2xhdGVZID0gZW5kUG9pbnQuY2xpZW50WSAtICh0aGlzLnByb3BlcnRpZXMuc3RhcnRQb2ludCBhcyBhbnkpLmNsaWVudFlcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHN0YXJ0UG9pbnQ6IGVuZFBvaW50XG4gICAgICB9KVxuXG4gICAgICB2YXIgYnV0dG9uVG9wID0gdGhpcy5kYXRhLmJ1dHRvblRvcCArIHRyYW5zbGF0ZVlcbiAgICAgIHZhciBidXR0b25MZWZ0ID0gdGhpcy5kYXRhLmJ1dHRvbkxlZnQgKyB0cmFuc2xhdGVYXG4gICAgICAvL+WIpOaWreaYr+enu+WKqOWQpui2heWHuuWxj+W5lVxuICAgICAgaWYgKGJ1dHRvbkxlZnQgKyA1MCA+PSB0aGlzLnByb3BlcnRpZXMud2luZG93V2lkdGgpIHtcbiAgICAgICAgYnV0dG9uTGVmdCA9IHRoaXMucHJvcGVydGllcy53aW5kb3dXaWR0aCAtIDUwO1xuICAgICAgfVxuICAgICAgaWYgKGJ1dHRvbkxlZnQgPD0gMCkge1xuICAgICAgICBidXR0b25MZWZ0ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChidXR0b25Ub3AgPD0gMCkge1xuICAgICAgICBidXR0b25Ub3AgPSAwXG4gICAgICB9XG4gICAgICBpZiAoYnV0dG9uVG9wICsgNTAgPj0gdGhpcy5wcm9wZXJ0aWVzLndpbmRvd0hlaWdodCkge1xuICAgICAgICBidXR0b25Ub3AgPSB0aGlzLnByb3BlcnRpZXMud2luZG93SGVpZ2h0IC0gNTA7XG4gICAgICB9XG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBidXR0b25Ub3A6IGJ1dHRvblRvcCxcbiAgICAgICAgYnV0dG9uTGVmdDogYnV0dG9uTGVmdFxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgYnV0dG9uRW5kKGU6IGFueSkge1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhKTtcbiAgICAgIFxuICAgIH0sXG5cbiAgICBvbkdldFVzZXJJbmZvKGU6IGFueSkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2dldEF1dGhvcml6YXRpb24nLCB7XG4gICAgICAgIC4uLmUuZGV0YWlsXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICBvbkNyZWF0ZSgpIHtcbiAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdjcmVhdGUnLCB7fSlcbiAgICB9XG4gIH1cbn0pXG4iXX0=