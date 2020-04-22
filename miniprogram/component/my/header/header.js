"use strict";
Component({
    properties: {
        bgUrl: String,
        userInfo: Object,
    },
    options: {
        addGlobalClass: true
    },
    data: {},
    methods: {
        onShow: function () {
            console.log(this.data.userInfo);
        },
        onChangeBg: function () {
            this.triggerEvent('changeBg');
        },
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVhZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsTUFBTTtRQUNiLFFBQVEsRUFBRSxNQUFNO0tBQ2pCO0lBQ0QsT0FBTyxFQUFFO1FBQ1AsY0FBYyxFQUFFLElBQUk7S0FDckI7SUFJRCxJQUFJLEVBQUUsRUFHTDtJQUtELE9BQU8sRUFBRTtRQUlQLE1BQU07WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUtELFVBQVU7WUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQy9CLENBQUM7S0FDRjtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudC9jb21tb24vcG9wL3BvcC5qc1xuQ29tcG9uZW50KHtcbiAgLyoqXG4gICAqIOe7hOS7tueahOWxnuaAp+WIl+ihqFxuICAgKi9cbiAgcHJvcGVydGllczoge1xuICAgIGJnVXJsOiBTdHJpbmcsXG4gICAgdXNlckluZm86IE9iamVjdCxcbiAgfSxcbiAgb3B0aW9uczoge1xuICAgIGFkZEdsb2JhbENsYXNzOiB0cnVlXG4gIH0sXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcblxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOaWueazleWIl+ihqFxuICAgKi9cbiAgbWV0aG9kczoge1xuICAgIC8qKlxuICAgICAqIOWxleekulxuICAgICAqL1xuICAgIG9uU2hvdygpe1xuICAgICAgY29uc29sZS5sb2codGhpcy5kYXRhLnVzZXJJbmZvKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5pS55Y+Y6IOM5pmvXG4gICAgICovXG4gICAgb25DaGFuZ2VCZygpe1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ2NoYW5nZUJnJylcbiAgICB9LFxuICB9XG59KVxuIl19