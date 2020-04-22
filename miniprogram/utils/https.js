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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUFzQztBQUd0QztJQUFBO0lBK0JBLENBQUM7SUFyQlUsYUFBTyxHQUFkLFVBQXFCLE9BQTJCO1FBQ3BDLElBQUEsaUJBQUcsRUFBRSx1QkFBTSxFQUFFLG1CQUFJLENBQWE7UUFDdEMsSUFBTSxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUksVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMzQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dCQUNQLEdBQUcsRUFBRSxnQkFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHO2dCQUN6QixNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSTtnQkFDVixNQUFNLEVBQUU7b0JBQ0osY0FBYyxFQUFFLG1DQUFtQztpQkFDdEQ7Z0JBQ0QsT0FBTyxFQUFFLFVBQUMsR0FBRztvQkFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQVMsQ0FBQyxDQUFBO2dCQUMxQixDQUFDO2dCQUNELElBQUksRUFBRSxVQUFDLEdBQUc7b0JBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO2dCQUNmLENBQUM7YUFDSixDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtRQUNGLE9BQU8sT0FBTyxDQUFDO0lBRW5CLENBQUM7SUFDTCxZQUFDO0FBQUQsQ0FBQyxBQS9CRCxJQStCQztBQUdELGtCQUFlLEtBQUssQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnLi4vY29uZmlnL2NvbmZpZyc7XG5cblxuY2xhc3MgSHR0cHMge1xuXG4gICAgLyoqXG4gICAgICog5bCB6KOF55qEUHJvbWlzZVxuICAgICAqIEBUIHJlcXVlc3TkuK1kYXRh55qE57G75Z6LXG4gICAgICogQFAgcHJvbWlzZeS4rXJlc29sdmXmjqXmlLbnmoTnsbvlnotcbiAgICAgKiBAcGFyYW0gdXJsIFxuICAgICAqIEBwYXJhbSBtZXRob2QgXG4gICAgICogQHBhcmFtIGRhdGEgXG4gICAgICovXG4gICAgc3RhdGljIHJlcXVlc3Q8VCwgUD4ob3B0aW9uczogUmVxdWVzdC5PcHRpb25zPFQ+KSB7XG4gICAgICAgIGNvbnN0IHsgdXJsLCBtZXRob2QsIGRhdGEgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxQPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmw6IGNvbmZpZy5iYXNlVXJsICsgdXJsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEgYXMgUClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gcHJvbWlzZTtcblxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIdHRwczsiXX0=