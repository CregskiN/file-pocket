"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var moment_1 = __importDefault(require("moment"));
function getWindowInfo() {
    return new Promise(function (resolve, reject) {
        wx.getSystemInfo({
            success: function (res) {
                resolve(res);
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
}
exports.getWindowInfo = getWindowInfo;
function getSetting() {
    return new Promise(function (resolve, reject) {
        wx.getSetting({
            success: function (res) {
                resolve(res);
            },
            fail: function (err) {
                reject(err);
            }
        });
    });
}
exports.getSetting = getSetting;
function checkRes(res) {
}
exports.checkRes = checkRes;
function getTime(nickName) {
    return moment_1.default().format('YYYY-MM-DD');
}
exports.getTime = getTime;
function generateFileNameAuto(mimeType, nickName) {
    return nickName + "_" + getTime(nickName) + "." + mimeType.split('/')[1];
}
exports.generateFileNameAuto = generateFileNameAuto;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBNEI7QUFJNUIsU0FBZ0IsYUFBYTtJQUM1QixPQUFPLElBQUksT0FBTyxDQUF1RCxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3hGLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDaEIsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDYixDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDVCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDWixDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFFSCxDQUFDO0FBWkQsc0NBWUM7QUFNRCxTQUFnQixVQUFVO0lBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQW9ELFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDckYsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ1QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQVhELGdDQVdDO0FBT0QsU0FBZ0IsUUFBUSxDQUFDLEdBQVE7QUFFakMsQ0FBQztBQUZELDRCQUVDO0FBT0QsU0FBZ0IsT0FBTyxDQUFDLFFBQWdCO0lBQ3ZDLE9BQU8sZ0JBQU0sRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBRkQsMEJBRUM7QUFHRCxTQUFnQixvQkFBb0IsQ0FBQyxRQUFnQixFQUFFLFFBQWdCO0lBQ3RFLE9BQVUsUUFBUSxTQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsU0FBSSxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBRyxDQUFBO0FBQ3BFLENBQUM7QUFGRCxvREFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50Jztcbi8qKlxuICog6I635Y+WXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRXaW5kb3dJbmZvKCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2U8V2VjaGF0TWluaXByb2dyYW0uR2V0U3lzdGVtSW5mb1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHd4LmdldFN5c3RlbUluZm8oe1xuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHJlcylcblx0XHRcdH0sXG5cdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdHJlamVjdChlcnIpXG5cdFx0XHR9XG5cdFx0fSlcblx0fSlcblxufVxuXG5cbi8qKlxuICogd3guZ2V0U2V0dGluZ+eahFByb21pc2XlsIHoo4VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNldHRpbmcoKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZTxXZWNoYXRNaW5pcHJvZ3JhbS5HZXRTZXR0aW5nU3VjY2Vzc0NhbGxiYWNrUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d3guZ2V0U2V0dGluZyh7XG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUocmVzKTtcblx0XHRcdH0sXG5cdFx0XHRmYWlsOiAoZXJyKSA9PiB7XG5cdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0fVxuXHRcdH0pXG5cdH0pXG59XG5cblxuLyoqXG4gKiDmo4Dmn6VyZXNwb25zZeS4reaYr+WQpuacieaKpemUmeebuOWFs1xuICogQHBhcmFtIHJlcyBcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUmVzKHJlczogYW55KSB7XG5cbn1cblxuLyoqXG4gKiDojrflj5bkuovku7ZcbiAqIEBwYXJhbSBuaWNrTmFtZSDnlKjmiLfmmLXnp7BcbiAqIEBwYXJhbSBleHQg5omp5bGV5ZCNIGpwZWcgcG5n562JXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lKG5pY2tOYW1lOiBzdHJpbmcpIHtcblx0cmV0dXJuIG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZUZpbGVOYW1lQXV0byhtaW1lVHlwZTogc3RyaW5nLCBuaWNrTmFtZTogc3RyaW5nKSB7XG5cdHJldHVybiBgJHtuaWNrTmFtZX1fJHtnZXRUaW1lKG5pY2tOYW1lKX0uJHttaW1lVHlwZS5zcGxpdCgnLycpWzFdfWBcbn1cblxuXG4iXX0=