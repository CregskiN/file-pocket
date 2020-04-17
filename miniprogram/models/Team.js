"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var https_1 = __importDefault(require("../utils/https"));
var Team = (function () {
    function Team() {
    }
    Team.getOfficialTeamList = function () {
        return new Promise(function (resolve, reject) {
            var options = {
                url: '/team/query_official_team_list',
                method: 'GET',
            };
            https_1.default.request(options).then(function (res) {
                console.log('成功获取官方项目组列表', res);
                resolve(res);
            }).catch(function (err) {
                console.log('获取官方项目组列表失败', err);
                reject(err);
            });
        });
    };
    Team.getJoinedTeamList = function (uid) {
        return new Promise(function (resolve, reject) {
            var options = {
                url: '/user/query_joined_team_list_by_uid',
                method: "GET",
                data: {
                    uid: uid
                }
            };
            https_1.default.request(options).then(function (res) {
                console.log('成功获取我加入列表', res);
            }).catch(function (err) {
                console.log('获取我加入的项目组列表失败', err);
                reject(err);
            });
        });
    };
    Team.getCreatedTeamList = function (uid) {
        return new Promise(function (resolve, reject) {
            var options = {
                url: '/user/query_created_team_list_by_uid',
                method: 'GET',
                data: {
                    uid: uid
                }
            };
            https_1.default.request(options).then(function (res) {
                console.log('成功获取我创建的列表', res);
            }).catch(function (err) {
                console.log('获取我创建的列表失败', err);
                reject(err);
            });
        });
    };
    Team.getManagedTeamList = function (uid) {
        return new Promise(function (resolve, reject) {
            var options = {
                url: '/user/query_managed_team_list_by_uid',
                method: 'GET',
                data: {
                    uid: uid
                }
            };
            https_1.default.request(options).then(function (res) {
                console.log('成功获取我管理的项目列表', res);
            }).catch(function (err) {
                console.log('获取我管理的列表失败', err);
                reject(err);
            });
        });
    };
    return Team;
}());
exports.default = Team;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlRlYW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5REFBbUM7QUFHbkM7SUFBQTtJQXVGQSxDQUFDO0lBbkZVLHdCQUFtQixHQUExQjtRQUNJLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixJQUFNLE9BQU8sR0FBRztnQkFDWixHQUFHLEVBQUUsZ0NBQWdDO2dCQUNyQyxNQUFNLEVBQUUsS0FBYzthQUN6QixDQUFDO1lBQ0YsZUFBSyxDQUFDLE9BQU8sQ0FBa0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDNUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFNTSxzQkFBaUIsR0FBeEIsVUFBeUIsR0FBVztRQUNoQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDL0IsSUFBTSxPQUFPLEdBQUc7Z0JBQ1osR0FBRyxFQUFFLHFDQUFxQztnQkFDMUMsTUFBTSxFQUFFLEtBQWM7Z0JBQ3RCLElBQUksRUFBRTtvQkFDRixHQUFHLEVBQUUsR0FBYTtpQkFDckI7YUFDSixDQUFDO1lBQ0YsZUFBSyxDQUFDLE9BQU8sQ0FBOEQsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDeEYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDbEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBTU0sdUJBQWtCLEdBQXpCLFVBQTBCLEdBQVc7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQU0sT0FBTyxHQUFHO2dCQUNaLEdBQUcsRUFBRSxzQ0FBc0M7Z0JBQzNDLE1BQU0sRUFBRSxLQUFjO2dCQUN0QixJQUFJLEVBQUU7b0JBQ0YsR0FBRyxFQUFFLEdBQUc7aUJBQ1g7YUFDSixDQUFDO1lBQ0YsZUFBSyxDQUFDLE9BQU8sQ0FBZ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsR0FBRztnQkFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbkMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDUixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDL0IsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBT00sdUJBQWtCLEdBQXpCLFVBQTBCLEdBQVc7UUFDakMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQU0sT0FBTyxHQUFHO2dCQUNaLEdBQUcsRUFBRSxzQ0FBc0M7Z0JBQzNDLE1BQU0sRUFBRSxLQUFjO2dCQUN0QixJQUFJLEVBQUU7b0JBQ0YsR0FBRyxLQUFBO2lCQUNOO2FBQ0osQ0FBQztZQUNGLGVBQUssQ0FBQyxPQUFPLENBQWdFLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7Z0JBQzFGLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7Z0JBQ1IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLFdBQUM7QUFBRCxDQUFDLEFBdkZELElBdUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEh0dHBzIGZyb20gJy4uL3V0aWxzL2h0dHBzJztcbmltcG9ydCB7IFJlc3BvbnNlIH0gZnJvbSAnLi4vLi4vdHlwaW5ncy9yZXNwb25zZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlYW0ge1xuICAgIC8qKlxuICAgICAqIOiOt+WPluWumOaWuemhueebrue7hOWIl+ihqFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRPZmZpY2lhbFRlYW1MaXN0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvdGVhbS9xdWVyeV9vZmZpY2lhbF90ZWFtX2xpc3QnLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcgYXMgJ0dFVCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgSHR0cHMucmVxdWVzdDxSZXF1ZXN0LkdldE9mZmljaWFsVGVhbUxpc3RSZXEsIFJlc3BvbnNlLkdldE9mZmljaWFsVGVhbUxpc3RSZXM+KG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5oiQ5Yqf6I635Y+W5a6Y5pa56aG555uu57uE5YiX6KGoJywgcmVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5blrpjmlrnpobnnm67nu4TliJfooajlpLHotKUnLCBlcnIpO1xuICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmiJHliqDlhaXnmoTpobnnm67nu4TliJfooajvvIjkuI3ljIXmi6zlt7LnrqHnkIbpobnnm67nu4TliJfooajvvIlcbiAgICAgKiBAcGFyYW0gdWlkIFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRKb2luZWRUZWFtTGlzdCh1aWQ6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvdXNlci9xdWVyeV9qb2luZWRfdGVhbV9saXN0X2J5X3VpZCcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiIGFzIFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZCBhcyBzdHJpbmdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgSHR0cHMucmVxdWVzdDxSZXF1ZXN0LkdldEpvaW5lZFRlYW1MaXN0UmVxLCBSZXNwb25zZS5HZXRKb2luZWRUZWFtTGlzdFJlcz4ob3B0aW9ucykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiJDlip/ojrflj5bmiJHliqDlhaXliJfooagnLCByZXMpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5oiR5Yqg5YWl55qE6aG555uu57uE5YiX6KGo5aSx6LSlJywgZXJyKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5oiR5Yib5bu655qE6aG555uu5YiX6KGoXG4gICAgICogQHBhcmFtIHVpZFxuICAgICAqL1xuICAgIHN0YXRpYyBnZXRDcmVhdGVkVGVhbUxpc3QodWlkOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3VzZXIvcXVlcnlfY3JlYXRlZF90ZWFtX2xpc3RfYnlfdWlkJyxcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnIGFzIFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICB1aWQ6IHVpZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBIdHRwcy5yZXF1ZXN0PFJlcXVlc3QuR2V0Q3JlYXRlZFRlYW1MaXN0UmVxLCBSZXNwb25zZS5HZXRDcmVhdGVkVGVhbUxpc3RSZXM+KG9wdGlvbnMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5oiQ5Yqf6I635Y+W5oiR5Yib5bu655qE5YiX6KGoJywgcmVzKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPluaIkeWIm+W7uueahOWIl+ihqOWksei0pScsIGVycik7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5oiR566h55CG55qE6aG555uu5YiX6KGoXG4gICAgICogQHBhcmFtIHVpZCBcbiAgICAgKi9cbiAgICBzdGF0aWMgZ2V0TWFuYWdlZFRlYW1MaXN0KHVpZDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHVybDogJy91c2VyL3F1ZXJ5X21hbmFnZWRfdGVhbV9saXN0X2J5X3VpZCcsXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyBhcyBcIkdFVFwiLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgdWlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEh0dHBzLnJlcXVlc3Q8UmVxdWVzdC5HZXRNYW5hZ2VkVGVhbUxpc3RSZXEsIFJlc3BvbnNlLkdldE1hbmFnZWRUZWFtTGlzdFJlcz4ob3B0aW9ucykudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiJDlip/ojrflj5bmiJHnrqHnkIbnmoTpobnnm67liJfooagnLCByZXMpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W5oiR566h55CG55qE5YiX6KGo5aSx6LSlJywgZXJyKTtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG59Il19