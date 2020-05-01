"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var User_1 = __importDefault(require("../../models/User"));
var Team_1 = __importDefault(require("../../models/Team"));
var Upload_1 = __importDefault(require("../../models/Upload"));
var util_1 = require("../../utils/util");
var File_1 = __importDefault(require("../../models/File"));
Page({
    data: {
        groupCreator: {},
        files: [],
        isLogin: true,
        selectCount: 0,
        selectList: [],
        tid: '',
        teamInfo: {},
        uploadCount: -1,
        isUploading: false,
    },
    onUploadLocalImg: function (e) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var chooseLocalImgs = e.detail.chooseLocalImgs;
            _this.setData({
                uploadCount: chooseLocalImgs.tempFilePaths.length
            });
            var promises = [];
            chooseLocalImgs.tempFiles.forEach(function (value, index) {
                var imgObject = {
                    errMsg: chooseLocalImgs.errMsg,
                    tempFilePaths: new Array(chooseLocalImgs.tempFilePaths[index]),
                    tempFiles: new Array(chooseLocalImgs.tempFiles[index])
                };
                promises.push(Upload_1.default.uploadLocalImg(imgObject));
            });
            if (promises.length === chooseLocalImgs.tempFilePaths.length) {
                Promise.all(promises).then(function (res) {
                    var uploadToTeamFiles = [];
                    res.forEach(function (uploaderResData) {
                        var _a = User_1.default.getUserInfoStorage(), uid = _a.uid, nickName = _a.nickName;
                        uploadToTeamFiles.push({
                            fileSize: uploaderResData.fsize,
                            fileUrl: uploaderResData.fileUrl,
                            key: uploaderResData.key,
                            hash: uploaderResData.hash,
                            mimeType: uploaderResData.mimeType,
                            tid: _this.data.teamInfo.tid,
                            uid: uid,
                            fileName: util_1.generateFileNameAuto(uploaderResData.mimeType, nickName)
                        });
                        File_1.default.syncFileWithBackend(uploadToTeamFiles).then(function (res) {
                            resolve(res);
                        });
                    });
                }).catch(function (err) {
                    reject(err);
                });
            }
        });
    },
    onUploadMessageFile: function (e) {
        return new Promise(function (resolve, reject) {
            var fileObjects = e.detail.fileObjects;
            var pormises = [];
            fileObjects.tempFiles.forEach(function (fileObject) {
                pormises.push(Upload_1.default.uploadMessageFile(fileObject));
            });
            Promise.all(pormises).then(function (res) {
                resolve(res);
            }).catch(function (err) {
                reject(err);
            });
        });
    },
    onLoad: function (options) {
        var _this = this;
        if (options.tid) {
            Team_1.default.getTeamInfoByTid('1717d492d49').then(function (teamInfo) {
                _this.setData({
                    teamInfo: teamInfo
                });
                Team_1.default.queryTeamFileList('1717d492d49', 1).then(function (res) {
                    res.forEach(function (file) {
                        file.isChecked = false;
                    });
                    _this.setData({
                        files: res
                    });
                });
            });
        }
    },
    onReady: function () {
    },
    onShow: function () {
    },
    onHide: function () {
    },
    onUnload: function () {
    },
    onPullDownRefresh: function () {
    },
    onReachBottom: function () {
    },
    onShareAppMessage: function (opts) {
        console.log(opts.target);
        return {};
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGV0YWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZGV0YWlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkRBQXFDO0FBQ3JDLDJEQUFxQztBQUNyQywrREFBeUM7QUFDekMseUNBQXdEO0FBRXhELDJEQUFxQztBQUVyQyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixZQUFZLEVBQUUsRUFBRTtRQUNoQixLQUFLLEVBQUUsRUFBeUI7UUFDaEMsT0FBTyxFQUFFLElBQUk7UUFDYixXQUFXLEVBQUUsQ0FBQztRQUNkLFVBQVUsRUFBRSxFQUFjO1FBQzFCLEdBQUcsRUFBRSxFQUFFO1FBQ1AsUUFBUSxFQUFFLEVBQTZCO1FBRXZDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDZixXQUFXLEVBQUUsS0FBSztLQUNuQjtJQU9ELGdCQUFnQixFQUFoQixVQUFpQixDQUFNO1FBQXZCLGlCQTJDQztRQTFDQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsSUFBTSxlQUFlLEdBQXVELENBQUMsQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDO1lBQ3JHLEtBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsV0FBVyxFQUFFLGVBQWUsQ0FBQyxhQUFhLENBQUMsTUFBTTthQUNsRCxDQUFDLENBQUE7WUFDRixJQUFNLFFBQVEsR0FBbUIsRUFBRSxDQUFDO1lBQ3BDLGVBQWUsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7Z0JBQzdDLElBQU0sU0FBUyxHQUFHO29CQUNoQixNQUFNLEVBQUUsZUFBZSxDQUFDLE1BQU07b0JBQzlCLGFBQWEsRUFBRSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUM5RCxTQUFTLEVBQUUsSUFBSSxLQUFLLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDdkQsQ0FB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LENBQUE7b0JBQ0YsS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDWCxLQUFLLEVBQUUsR0FBRztxQkFDWCxDQUFDLENBQUE7Z0JBRUosQ0FBQyxDQUFDLENBQUE7WUFFSixDQUFDLENBQUMsQ0FBQTtTQUNIO0lBRUgsQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQixFQUFqQixVQUFrQixJQUFJO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVc2VyIGZyb20gJy4uLy4uL21vZGVscy9Vc2VyJztcbmltcG9ydCBUZWFtIGZyb20gJy4uLy4uL21vZGVscy9UZWFtJztcbmltcG9ydCBVcGxvYWQgZnJvbSAnLi4vLi4vbW9kZWxzL1VwbG9hZCc7XG5pbXBvcnQgeyBnZW5lcmF0ZUZpbGVOYW1lQXV0byB9IGZyb20gJy4uLy4uL3V0aWxzL3V0aWwnO1xuaW1wb3J0IHsgZmlsZUNhdGFnb3J5LCBRaW5pdVVwbG9hZGVyUmVzRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGluZydcbmltcG9ydCBGaWxlIGZyb20gJy4uLy4uL21vZGVscy9GaWxlJztcblxuUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGdyb3VwQ3JlYXRvcjoge30sXG4gICAgZmlsZXM6IFtdIGFzIFJlc3BvbnNlLkZpbGVUeXBlW10sXG4gICAgaXNMb2dpbjogdHJ1ZSxcbiAgICBzZWxlY3RDb3VudDogMCxcbiAgICBzZWxlY3RMaXN0OiBbXSBhcyBzdHJpbmdbXSxcbiAgICB0aWQ6ICcnLFxuICAgIHRlYW1JbmZvOiB7fSBhcyBSZXNwb25zZS5UZWFtRGV0YWlsVHlwZSxcblxuICAgIHVwbG9hZENvdW50OiAtMSxcbiAgICBpc1VwbG9hZGluZzogZmFsc2UsXG4gIH0sXG5cblxuICAvKipcbiAqIOS4iuS8oOacrOWcsOWbvueJh++8jOS4iuS8oOWkmuW8oOeahOacrOi0qOaYr+WkmuasoeinpuWPkemAieaLqeS6i+S7tlxuICogQHBhcmFtIGUgXG4gKi9cbiAgb25VcGxvYWRMb2NhbEltZyhlOiBhbnkpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgY2hvb3NlTG9jYWxJbWdzOiBXZWNoYXRNaW5pcHJvZ3JhbS5DaG9vc2VJbWFnZVN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCA9IGUuZGV0YWlsLmNob29zZUxvY2FsSW1ncztcbiAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgIHVwbG9hZENvdW50OiBjaG9vc2VMb2NhbEltZ3MudGVtcEZpbGVQYXRocy5sZW5ndGhcbiAgICAgIH0pXG4gICAgICBjb25zdCBwcm9taXNlczogUHJvbWlzZTxhbnk+W10gPSBbXTtcbiAgICAgIGNob29zZUxvY2FsSW1ncy50ZW1wRmlsZXMuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGltZ09iamVjdCA9IHtcbiAgICAgICAgICBlcnJNc2c6IGNob29zZUxvY2FsSW1ncy5lcnJNc2csXG4gICAgICAgICAgdGVtcEZpbGVQYXRoczogbmV3IEFycmF5KGNob29zZUxvY2FsSW1ncy50ZW1wRmlsZVBhdGhzW2luZGV4XSksXG4gICAgICAgICAgdGVtcEZpbGVzOiBuZXcgQXJyYXkoY2hvb3NlTG9jYWxJbWdzLnRlbXBGaWxlc1tpbmRleF0pXG4gICAgICAgIH1cbiAgICAgICAgcHJvbWlzZXMucHVzaChVcGxvYWQudXBsb2FkTG9jYWxJbWcoaW1nT2JqZWN0KSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHByb21pc2VzLmxlbmd0aCA9PT0gY2hvb3NlTG9jYWxJbWdzLnRlbXBGaWxlUGF0aHMubGVuZ3RoKSB7XG4gICAgICAgIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICBjb25zdCB1cGxvYWRUb1RlYW1GaWxlczogUmVxdWVzdC5TeW5jRmlsZVdpdGhCYWNrZW5kUmVxID0gW107XG4gICAgICAgICAgKHJlcyBhcyBRaW5pdVVwbG9hZGVyUmVzRGF0YVtdKS5mb3JFYWNoKCh1cGxvYWRlclJlc0RhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgdWlkLCBuaWNrTmFtZSB9ID0gVXNlci5nZXRVc2VySW5mb1N0b3JhZ2UoKTtcbiAgICAgICAgICAgIHVwbG9hZFRvVGVhbUZpbGVzLnB1c2goe1xuICAgICAgICAgICAgICBmaWxlU2l6ZTogdXBsb2FkZXJSZXNEYXRhLmZzaXplLFxuICAgICAgICAgICAgICBmaWxlVXJsOiB1cGxvYWRlclJlc0RhdGEuZmlsZVVybCxcbiAgICAgICAgICAgICAga2V5OiB1cGxvYWRlclJlc0RhdGEua2V5LFxuICAgICAgICAgICAgICBoYXNoOiB1cGxvYWRlclJlc0RhdGEuaGFzaCxcbiAgICAgICAgICAgICAgbWltZVR5cGU6IHVwbG9hZGVyUmVzRGF0YS5taW1lVHlwZSxcbiAgICAgICAgICAgICAgdGlkOiB0aGlzLmRhdGEudGVhbUluZm8udGlkLFxuICAgICAgICAgICAgICB1aWQ6IHVpZCBhcyBzdHJpbmcsXG4gICAgICAgICAgICAgIGZpbGVOYW1lOiBnZW5lcmF0ZUZpbGVOYW1lQXV0byh1cGxvYWRlclJlc0RhdGEubWltZVR5cGUsIG5pY2tOYW1lIGFzIHN0cmluZylcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgRmlsZS5zeW5jRmlsZVdpdGhCYWNrZW5kKHVwbG9hZFRvVGVhbUZpbGVzKS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUocmVzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgfSlcbiAgICAgIH1cblxuXG4gICAgfSlcblxuICB9LFxuXG4gIC8qKlxuICAgKiDkuIrkvKDnvqTogYrmlofku7ZcbiAgICogQHBhcmFtIGUgXG4gICAqL1xuICBvblVwbG9hZE1lc3NhZ2VGaWxlKGU6IGFueSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBmaWxlT2JqZWN0czogV2VjaGF0TWluaXByb2dyYW0uQ2hvb3NlTWVzc2FnZUZpbGVTdWNjZXNzQ2FsbGJhY2tSZXN1bHQgPSBlLmRldGFpbC5maWxlT2JqZWN0cztcbiAgICAgIGNvbnN0IHBvcm1pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdO1xuICAgICAgZmlsZU9iamVjdHMudGVtcEZpbGVzLmZvckVhY2goZmlsZU9iamVjdCA9PiB7XG4gICAgICAgIHBvcm1pc2VzLnB1c2goVXBsb2FkLnVwbG9hZE1lc3NhZ2VGaWxlKGZpbGVPYmplY3QpKTtcbiAgICAgIH0pXG4gICAgICBQcm9taXNlLmFsbChwb3JtaXNlcykudGhlbihyZXMgPT4ge1xuICAgICAgICByZXNvbHZlKHJlcyk7XG4gICAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgIH0pXG4gICAgfSlcbiAgfSxcblxuXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnRpZCkge1xuICAgICAgVGVhbS5nZXRUZWFtSW5mb0J5VGlkKCcxNzE3ZDQ5MmQ0OScpLnRoZW4odGVhbUluZm8gPT4ge1xuICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgIHRlYW1JbmZvOiB0ZWFtSW5mb1xuICAgICAgICB9KVxuICAgICAgICBUZWFtLnF1ZXJ5VGVhbUZpbGVMaXN0KCcxNzE3ZDQ5MmQ0OScsIDEpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICByZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgICAgICAgIGZpbGUuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgfSlcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgZmlsZXM6IHJlc1xuICAgICAgICAgIH0pXG5cbiAgICAgICAgfSlcblxuICAgICAgfSlcbiAgICB9XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLliJ3mrKHmuLLmn5PlrozmiJBcbiAgICovXG4gIG9uUmVhZHkoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLmmL7npLpcbiAgICovXG4gIG9uU2hvdygpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Y246L29XG4gICAqL1xuICBvblVubG9hZCgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDpobXpnaLnm7jlhbPkuovku7blpITnkIblh73mlbAtLeebkeWQrOeUqOaIt+S4i+aLieWKqOS9nFxuICAgKi9cbiAgb25QdWxsRG93blJlZnJlc2goKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUqOaIt+eCueWHu+WPs+S4iuinkuWIhuS6q1xuICAgKi9cbiAgb25TaGFyZUFwcE1lc3NhZ2Uob3B0cyk6IFdlY2hhdE1pbmlwcm9ncmFtLlBhZ2UuSUN1c3RvbVNoYXJlQ29udGVudCB7XG4gICAgY29uc29sZS5sb2cob3B0cy50YXJnZXQpXG4gICAgcmV0dXJuIHt9XG4gIH1cbn0pIl19