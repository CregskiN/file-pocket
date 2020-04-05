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
    User.getInstance = function () {
        if (!(this.instance instanceof User)) {
            this.instance = new User();
        }
        return this.instance;
    };
    User.prototype.getUserInfo = function () {
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
            return null;
        }
    };
    User.prototype.setUserInfo = function (userInfo) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQU9BO0lBRUk7SUFBd0IsQ0FBQztJQU9sQixnQkFBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLFlBQVksSUFBSSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFNRCwwQkFBVyxHQUFYO1FBQ0ksSUFBSTtZQUNBLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDN0MsSUFBSSxRQUFRLEtBQUssRUFBRSxFQUFFO2dCQUNqQixRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNuQztpQkFBTTtnQkFDSCxRQUFRLEdBQUcsRUFBRSxDQUFDO2FBQ2pCO1lBQ0QsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDO1NBQzVCO1FBQUMsT0FBTyxHQUFHLEVBQUU7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7SUFDTCxDQUFDO0lBTUQsMEJBQVcsR0FBWCxVQUFZLFFBQW9DO1FBQzVDLElBQUk7WUFDQSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ3pDLElBQU0sV0FBVyxnQkFDVixPQUFPLElBQ1YsUUFBUSxVQUFBLEdBQ1gsQ0FBQTtZQUNELEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUM5RDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUVMLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQXBERCxJQW9EQztBQUlELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIOWNleS+i+aooeW8j1xuLy8g5bCG55So5oi35L+h5oGv5L+d5a2Y5Zyo5q2kXG5cbmludGVyZmFjZSBHZXRVc2VySW5mb1Jlc3VsdCBleHRlbmRzIFdlY2hhdE1pbmlwcm9ncmFtLlVzZXJJbmZvIHtcblxufVxuXG5jbGFzcyBVc2VyIHtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cblxuICAgIHByaXZhdGUgc3RhdGljIGluc3RhbmNlPzogVXNlcjtcblxuICAgIC8qKlxuICAgICAqIOiOt+WPluWunuS+i1xuICAgICAqL1xuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCEodGhpcy5pbnN0YW5jZSBpbnN0YW5jZW9mIFVzZXIpKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IFVzZXIoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZTtcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIOaPkOWPlue8k+WtmOS4reeahHVzZXJJbmZvKOS4jeWMheaLrG9wZW5faWQpXG4gICAgICovXG4gICAgZ2V0VXNlckluZm8oKTogR2V0VXNlckluZm9SZXN1bHQgfCBudWxsIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpO1xuICAgICAgICAgICAgaWYgKHVzZXJJbmZvICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mbyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXNlckluZm8udXNlckluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5a2Y5YKodXNlckluZm8o5LiN5YyF5ousb3Blbl9pZCnvvIzlop7ph4/lrZjlgqjjgILnsbvkvLzkuo50aGlzLnNlckRhdGFcbiAgICAgKiBAcGFyYW0gdXNlckluZm8gXG4gICAgICovXG4gICAgc2V0VXNlckluZm8odXNlckluZm86IFdlY2hhdE1pbmlwcm9ncmFtLlVzZXJJbmZvKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBvbGRJbmZvID0gdGhpcy5nZXRVc2VySW5mbygpIHx8IHt9O1xuICAgICAgICAgICAgY29uc3QgbmV3VXNlckluZm8gPSB7XG4gICAgICAgICAgICAgICAgLi4ub2xkSW5mbyxcbiAgICAgICAgICAgICAgICB1c2VySW5mb1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJywgSlNPTi5zdHJpbmdpZnkobmV3VXNlckluZm8pKTtcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgICAgICB9XG5cbiAgICB9XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl19