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
Object.defineProperty(exports, "__esModule", { value: true });
var User = (function () {
    function User() {
    }
    User.getUserInfo = function () {
        try {
            var userInfo = wx.getStorageSync('userInfo');
            if (userInfo !== '') {
                userInfo = JSON.parse(userInfo);
            }
            else {
                userInfo = {};
            }
            return userInfo.userInfo;
        }
        catch (err) {
            console.log(err);
            return {};
        }
    };
    User.setUserInfo = function (userInfo) {
        try {
            var oldInfo = this.getUserInfo() || {};
            var newUserInfo = __assign({}, oldInfo, { userInfo: userInfo });
            wx.setStorageSync('userInfo', JSON.stringify(newUserInfo));
        }
        catch (err) {
            console.log(err);
        }
    };
    return User;
}());
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQVdBO0lBQUE7SUFvREEsQ0FBQztJQWhDVSxnQkFBVyxHQUFsQjtRQUNJLElBQUk7WUFDQSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdDLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtnQkFDakIsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0gsUUFBUSxHQUFHLEVBQUUsQ0FBQzthQUNqQjtZQUNELE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztTQUM1QjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLEVBQUUsQ0FBQztTQUNiO0lBQ0wsQ0FBQztJQU1NLGdCQUFXLEdBQWxCLFVBQW1CLFFBQW9DO1FBQ25ELElBQUk7WUFDQSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ3pDLElBQU0sV0FBVyxnQkFDVixPQUFPLElBQ1YsUUFBUSxVQUFBLEdBQ1gsQ0FBQTtZQUNELEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUM5RDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUVMLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQXBERCxJQW9EQztBQUlELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW50ZXJmYWNlIEdldFVzZXJJbmZvUmVzdWx0ICB7XG4gICAgICAgIGF2YXRhclVybD86IHN0cmluZztcbiAgICAgICAgY2l0eT86IHN0cmluZztcbiAgICAgICAgY291bnRyeT86IHN0cmluZztcbiAgICAgICAgZ2VuZGVyPzogMCB8IDEgfCAyO1xuICAgICAgICBsYW5ndWFnZT86ICdlbicgfCAnemhfQ04nIHwgJ3poX1RXJztcbiAgICAgICAgbmlja05hbWU/OiBzdHJpbmc7XG4gICAgICAgIHByb3ZpbmNlPzogc3RyaW5nO1xufVxuXG5jbGFzcyBVc2VyIHtcblxuICAgIC8vIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIC8vIHByaXZhdGUgc3RhdGljIGluc3RhbmNlPzogVXNlcjtcblxuICAgIC8vIC8qKlxuICAgIC8vICAqIOiOt+WPluWunuS+i1xuICAgIC8vICAqL1xuICAgIC8vIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAvLyAgICAgaWYgKCEodGhpcy5pbnN0YW5jZSBpbnN0YW5jZW9mIFVzZXIpKSB7XG4gICAgLy8gICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFVzZXIoKTtcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICAvLyB9XG5cblxuICAgIC8qKlxuICAgICAqIOaPkOWPlue8k+WtmOS4reeahHVzZXJJbmZvKOS4jeWMheaLrG9wZW5faWQpXG4gICAgICovXG4gICAgc3RhdGljIGdldFVzZXJJbmZvKCk6IEdldFVzZXJJbmZvUmVzdWx0IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpO1xuICAgICAgICAgICAgaWYgKHVzZXJJbmZvICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mbyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXNlckluZm8udXNlckluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWtmOWCqHVzZXJJbmZvKOS4jeWMheaLrG9wZW5faWQp77yM5aKe6YeP5a2Y5YKo44CC57G75Ly85LqOdGhpcy5zZXJEYXRhXG4gICAgICogQHBhcmFtIHVzZXJJbmZvIFxuICAgICAqL1xuICAgIHN0YXRpYyBzZXRVc2VySW5mbyh1c2VySW5mbzogV2VjaGF0TWluaXByb2dyYW0uVXNlckluZm8pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IG9sZEluZm8gPSB0aGlzLmdldFVzZXJJbmZvKCkgfHwge307XG4gICAgICAgICAgICBjb25zdCBuZXdVc2VySW5mbyA9IHtcbiAgICAgICAgICAgICAgICAuLi5vbGRJbmZvLFxuICAgICAgICAgICAgICAgIHVzZXJJbmZvXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeShuZXdVc2VySW5mbykpO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXX0=