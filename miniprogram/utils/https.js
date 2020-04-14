"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config/config"));
var Https = (function () {
    function Https() {
    }
    Https.request = function (options) {
        var url = options.url, method = options.method, data = options.data;
        var promise = new Promise(function (resolve, reject) {
            wx.request({
                url: config_1.default.baseUrl + url,
                method: method,
                data: data,
                header: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                success: function (res) {
                    resolve(res.data);
                },
                fail: function (err) {
                    reject(err);
                }
            });
        });
        return promise;
    };
    return Https;
}());
exports.default = Https;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUFzQztBQU90QztJQUFBO0lBK0JBLENBQUM7SUFyQlUsYUFBTyxHQUFkLFVBQXFCLE9BQTJCO1FBQ3BDLElBQUEsaUJBQUcsRUFBRSx1QkFBTSxFQUFFLG1CQUFJLENBQWE7UUFDdEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUksVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMzQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNQLEdBQUcsRUFBRSxnQkFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHO2dCQUN6QixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUU7b0JBQ0osY0FBYyxFQUFFLG1DQUFtQztpQkFDdEQ7Z0JBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRztvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQVMsQ0FBQyxDQUFBO2dCQUMxQixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFDLEdBQUc7b0JBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNmLENBQUM7YUFDSixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sT0FBTyxDQUFDO0lBRW5CLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQUdELGtCQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XG5cblxuXG5cblxuXG5jbGFzcyBIdHRwcyB7XG5cbiAgICAvKipcbiAgICAgKiDlsIHoo4XnmoRQcm9taXNlXG4gICAgICogQFQgcmVxdWVzdOS4rWRhdGHnmoTnsbvlnotcbiAgICAgKiBAUCBwcm9taXNl5LitcmVzb2x2ZeaOpeaUtueahOexu+Wei1xuICAgICAqIEBwYXJhbSB1cmwgXG4gICAgICogQHBhcmFtIG1ldGhvZCBcbiAgICAgKiBAcGFyYW0gZGF0YSBcbiAgICAgKi9cbiAgICBzdGF0aWMgcmVxdWVzdDxULCBQPihvcHRpb25zOiBSZXF1ZXN0Lk9wdGlvbnM8VD4pIHtcbiAgICAgICAgY29uc3QgeyB1cmwsIG1ldGhvZCwgZGF0YSB9ID0gb3B0aW9ucztcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlPFA+KChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgIHVybDogY29uZmlnLmJhc2VVcmwgKyB1cmwsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSBhcyBQKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBzOyJdfQ==