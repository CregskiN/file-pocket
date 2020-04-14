"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __importDefault(require("../config/config"));
function request(url, method, data) {
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
}
exports.request = request;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUFzQztBQVd0QyxTQUFnQixPQUFPLENBQU0sR0FBVyxFQUFFLE1BQWlELEVBQUUsSUFBTztJQUVoRyxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQzNDLEVBQUUsQ0FBQyxPQUFPLENBQUM7WUFDUCxHQUFHLEVBQUUsZ0JBQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRztZQUN6QixNQUFNLEVBQUUsTUFBTTtZQUNkLElBQUksRUFBRSxJQUFJO1lBQ1YsTUFBTSxFQUFFO2dCQUNKLGNBQWMsRUFBRSxtQ0FBbUM7YUFDdEQ7WUFDRCxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBVyxDQUFDLENBQUE7WUFDNUIsQ0FBQztZQUNELElBQUksRUFBRSxVQUFDLEdBQUc7Z0JBQ04sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2YsQ0FBQztTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ0YsT0FBTyxPQUFPLENBQUM7QUFFbkIsQ0FBQztBQXBCRCwwQkFvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xuXG5cbi8qKlxuICog5bCB6KOF55qEUHJvbWlzZVxuICogQFQgcmVxdWVzdOS4rWRhdGHnmoTnsbvlnotcbiAqIEBQIHByb21pc2XkuK1yZXNvbHZl5o6l5pS255qE57G75Z6LXG4gKiBAcGFyYW0gdXJsIFxuICogQHBhcmFtIG1ldGhvZCBcbiAqIEBwYXJhbSBkYXRhIFxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdDxULFA+KHVybDogc3RyaW5nLCBtZXRob2Q6IFdlY2hhdE1pbmlwcm9ncmFtLlJlcXVlc3RPcHRpb25bJ21ldGhvZCddLCBkYXRhOiBUKSB7XG5cbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2U8UD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgIHVybDogY29uZmlnLmJhc2VVcmwgKyB1cmwsXG4gICAgICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhIGFzIGFueSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiAoZXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiBwcm9taXNlO1xuXG59Il19