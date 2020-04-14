"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxTQUFnQixhQUFhO0lBQzVCLE9BQU8sSUFBSSxPQUFPLENBQXVELFVBQUMsT0FBTyxFQUFFLE1BQU07UUFDeEYsRUFBRSxDQUFDLGFBQWEsQ0FBQztZQUNoQixPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNaLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNiLENBQUM7WUFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO2dCQUNULE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNaLENBQUM7U0FDRCxDQUFDLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUVILENBQUM7QUFaRCxzQ0FZQztBQU1ELFNBQWdCLFVBQVU7SUFDekIsT0FBTyxJQUFJLE9BQU8sQ0FBb0QsVUFBQyxPQUFPLEVBQUUsTUFBTTtRQUNyRixFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ2IsT0FBTyxFQUFFLFVBQUMsR0FBRztnQkFDWixPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxDQUFDO1lBQ0QsSUFBSSxFQUFFLFVBQUMsR0FBRztnQkFDVCxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDO1NBQ0QsQ0FBQyxDQUFBO0lBQ0gsQ0FBQyxDQUFDLENBQUE7QUFDSCxDQUFDO0FBWEQsZ0NBV0M7QUFPRCxTQUFnQixRQUFRLENBQUMsR0FBUTtBQUVqQyxDQUFDO0FBRkQsNEJBRUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOiOt+WPllxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0V2luZG93SW5mbygpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlPFdlY2hhdE1pbmlwcm9ncmFtLkdldFN5c3RlbUluZm9TdWNjZXNzQ2FsbGJhY2tSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3eC5nZXRTeXN0ZW1JbmZvKHtcblx0XHRcdHN1Y2Nlc3M6IChyZXMpID0+IHtcblx0XHRcdFx0cmVzb2x2ZShyZXMpXG5cdFx0XHR9LFxuXHRcdFx0ZmFpbDogKGVycikgPT4ge1xuXHRcdFx0XHRyZWplY3QoZXJyKVxuXHRcdFx0fVxuXHRcdH0pXG5cdH0pXG5cbn1cblxuXG4vKipcbiAqIHd4LmdldFNldHRpbmfnmoRQcm9taXNl5bCB6KOFXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXR0aW5nKCkge1xuXHRyZXR1cm4gbmV3IFByb21pc2U8V2VjaGF0TWluaXByb2dyYW0uR2V0U2V0dGluZ1N1Y2Nlc3NDYWxsYmFja1Jlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHd4LmdldFNldHRpbmcoe1xuXHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHJlcyk7XG5cdFx0XHR9LFxuXHRcdFx0ZmFpbDogKGVycikgPT4ge1xuXHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdH1cblx0XHR9KVxuXHR9KVxufVxuXG5cbi8qKlxuICog5qOA5p+lcmVzcG9uc2XkuK3mmK/lkKbmnInmiqXplJnnm7jlhbNcbiAqIEBwYXJhbSByZXMgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1JlcyhyZXM6IGFueSkge1xuXG59XG5cblxuXG4iXX0=