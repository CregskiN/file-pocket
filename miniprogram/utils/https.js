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
        var url = options.url, method = options.method, data = options.data, header = options.header;
        var promise = new Promise(function (resolve, reject) {
            wx.request({
                url: config_1.default.baseUrl + url,
                method: method,
                data: data,
                header: header ? header : {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHR0cHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJodHRwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDREQUFzQztBQUd0QztJQUFBO0lBK0JBLENBQUM7SUFyQlUsYUFBTyxHQUFkLFVBQXFCLE9BQTJCO1FBQ3BDLElBQUEsaUJBQUcsRUFBRSx1QkFBTSxFQUFFLG1CQUFJLEVBQUUsdUJBQU0sQ0FBYTtRQUM5QyxJQUFNLE9BQU8sR0FBRyxJQUFJLE9BQU8sQ0FBSSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzNDLEVBQUUsQ0FBQyxPQUFPLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLGdCQUFNLENBQUMsT0FBTyxHQUFHLEdBQUc7Z0JBQ3pCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLElBQUksRUFBRSxJQUFJO2dCQUNWLE1BQU0sRUFBRSxNQUFNLENBQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ3JCLGNBQWMsRUFBRSxtQ0FBbUM7aUJBQ3REO2dCQUNELE9BQU8sRUFBRSxVQUFDLEdBQUc7b0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFTLENBQUMsQ0FBQTtnQkFDMUIsQ0FBQztnQkFDRCxJQUFJLEVBQUUsVUFBQyxHQUFHO29CQUNOLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDZixDQUFDO2FBQ0osQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLE9BQU8sQ0FBQztJQUVuQixDQUFDO0lBQ0wsWUFBQztBQUFELENBQUMsQUEvQkQsSUErQkM7QUFHRCxrQkFBZSxLQUFLLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29uZmlnIGZyb20gJy4uL2NvbmZpZy9jb25maWcnO1xuXG5cbmNsYXNzIEh0dHBzIHtcblxuICAgIC8qKlxuICAgICAqIOWwgeijheeahFByb21pc2VcbiAgICAgKiBAVCByZXF1ZXN05LitZGF0YeeahOexu+Wei1xuICAgICAqIEBQIHByb21pc2XkuK1yZXNvbHZl5o6l5pS255qE57G75Z6LXG4gICAgICogQHBhcmFtIHVybCBcbiAgICAgKiBAcGFyYW0gbWV0aG9kIFxuICAgICAqIEBwYXJhbSBkYXRhIFxuICAgICAqL1xuICAgIHN0YXRpYyByZXF1ZXN0PFQsIFA+KG9wdGlvbnM6IFJlcXVlc3QuT3B0aW9uczxUPikge1xuICAgICAgICBjb25zdCB7IHVybCwgbWV0aG9kLCBkYXRhLCBoZWFkZXIgfSA9IG9wdGlvbnM7XG4gICAgICAgIGNvbnN0IHByb21pc2UgPSBuZXcgUHJvbWlzZTxQPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB3eC5yZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmw6IGNvbmZpZy5iYXNlVXJsICsgdXJsLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgaGVhZGVyOiBoZWFkZXI/IGhlYWRlciA6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSBhcyBQKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogKGVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuXG4gICAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEh0dHBzOyJdfQ==