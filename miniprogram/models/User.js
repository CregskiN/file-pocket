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
            return null;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUtBO0lBQUE7SUFvREEsQ0FBQztJQWhDVSxnQkFBVyxHQUFsQjtRQUNJLElBQUk7WUFDQSxJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdDLElBQUksUUFBUSxLQUFLLEVBQUUsRUFBRTtnQkFDakIsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbkM7aUJBQU07Z0JBQ0gsUUFBUSxHQUFHLEVBQUUsQ0FBQzthQUNqQjtZQUNELE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQztTQUM1QjtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQU1NLGdCQUFXLEdBQWxCLFVBQW1CLFFBQW9DO1FBQ25ELElBQUk7WUFDQSxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO1lBQ3pDLElBQU0sV0FBVyxnQkFDVixPQUFPLElBQ1YsUUFBUSxVQUFBLEdBQ1gsQ0FBQTtZQUNELEVBQUUsQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztTQUM5RDtRQUFDLE9BQU8sR0FBRyxFQUFFO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQjtJQUVMLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQXBERCxJQW9EQztBQUlELGtCQUFlLElBQUksQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW50ZXJmYWNlIEdldFVzZXJJbmZvUmVzdWx0IGV4dGVuZHMgV2VjaGF0TWluaXByb2dyYW0uVXNlckluZm8ge1xuXG59XG5cbmNsYXNzIFVzZXIge1xuXG4gICAgLy8gcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgLy8gcHJpdmF0ZSBzdGF0aWMgaW5zdGFuY2U/OiBVc2VyO1xuXG4gICAgLy8gLyoqXG4gICAgLy8gICog6I635Y+W5a6e5L6LXG4gICAgLy8gICovXG4gICAgLy8gc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgIC8vICAgICBpZiAoISh0aGlzLmluc3RhbmNlIGluc3RhbmNlb2YgVXNlcikpIHtcbiAgICAvLyAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgVXNlcigpO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIC8vIH1cblxuXG4gICAgLyoqXG4gICAgICog5o+Q5Y+W57yT5a2Y5Lit55qEdXNlckluZm8o5LiN5YyF5ousb3Blbl9pZClcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0VXNlckluZm8oKTogR2V0VXNlckluZm9SZXN1bHQgfCBudWxsIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCB1c2VySW5mbyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpO1xuICAgICAgICAgICAgaWYgKHVzZXJJbmZvICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0gSlNPTi5wYXJzZSh1c2VySW5mbyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVzZXJJbmZvID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXNlckluZm8udXNlckluZm87XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5a2Y5YKodXNlckluZm8o5LiN5YyF5ousb3Blbl9pZCnvvIzlop7ph4/lrZjlgqjjgILnsbvkvLzkuo50aGlzLnNlckRhdGFcbiAgICAgKiBAcGFyYW0gdXNlckluZm8gXG4gICAgICovXG4gICAgc3RhdGljIHNldFVzZXJJbmZvKHVzZXJJbmZvOiBXZWNoYXRNaW5pcHJvZ3JhbS5Vc2VySW5mbykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3Qgb2xkSW5mbyA9IHRoaXMuZ2V0VXNlckluZm8oKSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1VzZXJJbmZvID0ge1xuICAgICAgICAgICAgICAgIC4uLm9sZEluZm8sXG4gICAgICAgICAgICAgICAgdXNlckluZm9cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycsIEpTT04uc3RyaW5naWZ5KG5ld1VzZXJJbmZvKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdfQ==