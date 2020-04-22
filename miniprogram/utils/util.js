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
function getTime(nickName, ext) {
    return moment_1.default().format('YYYY-MM-DD');
}
exports.getTime = getTime;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxrREFBNEI7QUFJNUIsU0FBZ0IsYUFBYTtJQUM1QixPQUFPLElBQUksT0FBTyxDQUF1RCxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3hGLEVBQUUsQ0FBQyxhQUFhLENBQUM7WUFDaEIsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDYixDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDVCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDWixDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFFSCxDQUFDO0FBWkQsc0NBWUM7QUFNRCxTQUFnQixVQUFVO0lBQ3pCLE9BQU8sSUFBSSxPQUFPLENBQW9ELFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDckYsRUFBRSxDQUFDLFVBQVUsQ0FBQztZQUNiLE9BQU8sRUFBRSxVQUFDLEdBQUc7Z0JBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2QsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ1QsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsQ0FBQztTQUNELENBQUMsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUFBO0FBQ0gsQ0FBQztBQVhELGdDQVdDO0FBT0QsU0FBZ0IsUUFBUSxDQUFDLEdBQVE7QUFFakMsQ0FBQztBQUZELDRCQUVDO0FBT0QsU0FBZ0IsT0FBTyxDQUFDLFFBQWdCLEVBQUUsR0FBVztJQUNwRCxPQUFPLGdCQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDdEMsQ0FBQztBQUZELDBCQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuLyoqXG4gKiDojrflj5ZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFdpbmRvd0luZm8oKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZTxXZWNoYXRNaW5pcHJvZ3JhbS5HZXRTeXN0ZW1JbmZvU3VjY2Vzc0NhbGxiYWNrUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0d3guZ2V0U3lzdGVtSW5mbyh7XG5cdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUocmVzKVxuXHRcdFx0fSxcblx0XHRcdGZhaWw6IChlcnIpID0+IHtcblx0XHRcdFx0cmVqZWN0KGVycilcblx0XHRcdH1cblx0XHR9KVxuXHR9KVxuXG59XG5cblxuLyoqXG4gKiB3eC5nZXRTZXR0aW5n55qEUHJvbWlzZeWwgeijhVxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2V0dGluZygpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlPFdlY2hhdE1pbmlwcm9ncmFtLkdldFNldHRpbmdTdWNjZXNzQ2FsbGJhY2tSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3eC5nZXRTZXR0aW5nKHtcblx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0cmVzb2x2ZShyZXMpO1xuXHRcdFx0fSxcblx0XHRcdGZhaWw6IChlcnIpID0+IHtcblx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHR9XG5cdFx0fSlcblx0fSlcbn1cblxuXG4vKipcbiAqIOajgOafpXJlc3BvbnNl5Lit5piv5ZCm5pyJ5oql6ZSZ55u45YWzXG4gKiBAcGFyYW0gcmVzIFxuICovXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tSZXMocmVzOiBhbnkpIHtcblxufVxuXG4vKipcbiAqIOiOt+WPluS6i+S7tlxuICogQHBhcmFtIG5pY2tOYW1lIOeUqOaIt+aYteensFxuICogQHBhcmFtIGV4dCDmianlsZXlkI0ganBlZyBwbmfnrYlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWUobmlja05hbWU6IHN0cmluZywgZXh0OiBzdHJpbmcpIHtcblx0cmV0dXJuIG1vbWVudCgpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xufVxuXG5cbiJdfQ==