"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var https_1 = __importDefault(require("../utils/https"));
var File = (function () {
    function File() {
    }
    File.syncFileWithBackend = function (uploadToTeamFiles) {
        return new Promise(function (resolve, reject) {
            var options = {
                url: '/team/upload_file_list_to_team',
                method: 'POST',
                data: uploadToTeamFiles,
                header: {
                    'Content-Type': 'application/json'
                }
            };
            https_1.default.request(options).then(function (res) {
                console.log(res);
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    };
    return File;
}());
exports.default = File;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmlsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIkZpbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5REFBbUM7QUFFbkM7SUFBQTtJQTRCQSxDQUFDO0lBdEJVLHdCQUFtQixHQUExQixVQUEyQixpQkFBaUQ7UUFDeEUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQU0sT0FBTyxHQUFHO2dCQUNaLEdBQUcsRUFBRSxnQ0FBZ0M7Z0JBQ3JDLE1BQU0sRUFBRSxNQUFnQjtnQkFDeEIsSUFBSSxFQUFFLGlCQUFpQjtnQkFDdkIsTUFBTSxFQUFFO29CQUNKLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ3JDO2FBQ0osQ0FBQztZQUNGLGVBQUssQ0FBQyxPQUFPLENBQStELE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQ3pGLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRWpCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO2dCQUNSLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQztJQUdMLFdBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEh0dHBzIGZyb20gJy4uL3V0aWxzL2h0dHBzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlsZSB7XG5cbiAgICAvKipcbiAgICAgKiDlkIzmraXkuIrkvKDmlofku7boh7PlkI7nq69cbiAgICAgKiBAcGFyYW0gZmlsZU9iamVjdCBcbiAgICAgKi9cbiAgICBzdGF0aWMgc3luY0ZpbGVXaXRoQmFja2VuZCh1cGxvYWRUb1RlYW1GaWxlczogUmVxdWVzdC5TeW5jRmlsZVdpdGhCYWNrZW5kUmVxKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHVybDogJy90ZWFtL3VwbG9hZF9maWxlX2xpc3RfdG9fdGVhbScsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcgYXMgXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgZGF0YTogdXBsb2FkVG9UZWFtRmlsZXMsXG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgSHR0cHMucmVxdWVzdDxSZXF1ZXN0LlN5bmNGaWxlV2l0aEJhY2tlbmRSZXEsIFJlc3BvbnNlLlVwbG9hZEZpbGVUb1RlYW1SZXM+KG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuXG4gICAgfVxuXG5cbn0iXX0=