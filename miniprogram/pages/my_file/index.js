"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Upload_1 = __importDefault(require("../../models/Upload"));
Page({
    data: {
        files: [{
                fid: 0,
                isChecked: false
            }, {
                fid: 1,
                isChecked: false
            }, {
                fid: 2,
                isChecked: false
            }, {
                fid: 3,
                isChecked: false
            }, {
                fid: 4,
                isChecked: false
            }, {
                fid: 5,
                isChecked: false
            }, {
                fid: 6,
                isChecked: false
            }, {
                fid: 7,
                isChecked: false
            }, {
                fid: 8,
                isChecked: false
            }]
    },
    onUploadLocalImg: function (e) {
        Upload_1.default.uploadLocalImg(e.detail.chooseLocalImgRes);
    },
    onUploadMessageFile: function (e) {
        var fileObjects = e.detail.fileObjects;
        var pormises = [];
        fileObjects.tempFiles.forEach(function (fileObject) {
            pormises.push(Upload_1.default.uploadMessageFile(fileObject));
        });
        Promise.all(pormises).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    },
    onLoad: function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtEQUF5QztBQUV6QyxJQUFJLENBQUM7SUFLSCxJQUFJLEVBQUU7UUFDSixLQUFLLEVBQUUsQ0FBQztnQkFDTixHQUFHLEVBQUUsQ0FBQztnQkFDTixTQUFTLEVBQUUsS0FBSzthQUNqQixFQUFFO2dCQUNELEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLEVBQUU7Z0JBQ0QsR0FBRyxFQUFFLENBQUM7Z0JBQ04sU0FBUyxFQUFFLEtBQUs7YUFDakIsRUFBRTtnQkFDRCxHQUFHLEVBQUUsQ0FBQztnQkFDTixTQUFTLEVBQUUsS0FBSzthQUNqQixFQUFFO2dCQUNELEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLEVBQUU7Z0JBQ0QsR0FBRyxFQUFFLENBQUM7Z0JBQ04sU0FBUyxFQUFFLEtBQUs7YUFDakIsRUFBRTtnQkFDRCxHQUFHLEVBQUUsQ0FBQztnQkFDTixTQUFTLEVBQUUsS0FBSzthQUNqQixFQUFFO2dCQUNELEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLEVBQUU7Z0JBQ0QsR0FBRyxFQUFFLENBQUM7Z0JBQ04sU0FBUyxFQUFFLEtBQUs7YUFDakIsQ0FBQztLQUNIO0lBTUQsZ0JBQWdCLEVBQWhCLFVBQWlCLENBQU07UUFDckIsZ0JBQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFNRCxtQkFBbUIsRUFBbkIsVUFBb0IsQ0FBTTtRQUN4QixJQUFNLFdBQVcsR0FBNkQsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUM7UUFDbkcsSUFBTSxRQUFRLEdBQW1CLEVBQUUsQ0FBQztRQUNwQyxXQUFXLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLFVBQVU7WUFDdEMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBTSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUVuQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE9BQU87SUFFUCxDQUFDO0lBS0QsTUFBTTtJQUVOLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELFFBQVE7SUFFUixDQUFDO0lBS0QsaUJBQWlCO0lBRWpCLENBQUM7SUFLRCxhQUFhO0lBRWIsQ0FBQztJQUtELGlCQUFpQixFQUFqQixVQUFrQixJQUFJO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3hCLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVcGxvYWQgZnJvbSAnLi4vLi4vbW9kZWxzL1VwbG9hZCc7XG5cblBhZ2Uoe1xuXG4gIC8qKlxuICAgKiDpobXpnaLnmoTliJ3lp4vmlbDmja5cbiAgICovXG4gIGRhdGE6IHtcbiAgICBmaWxlczogW3tcbiAgICAgIGZpZDogMCxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBmaWQ6IDEsXG4gICAgICBpc0NoZWNrZWQ6IGZhbHNlXG4gICAgfSwge1xuICAgICAgZmlkOiAyLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGZpZDogMyxcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBmaWQ6IDQsXG4gICAgICBpc0NoZWNrZWQ6IGZhbHNlXG4gICAgfSwge1xuICAgICAgZmlkOiA1LFxuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH0sIHtcbiAgICAgIGZpZDogNixcbiAgICAgIGlzQ2hlY2tlZDogZmFsc2VcbiAgICB9LCB7XG4gICAgICBmaWQ6IDcsXG4gICAgICBpc0NoZWNrZWQ6IGZhbHNlXG4gICAgfSwge1xuICAgICAgZmlkOiA4LFxuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH1dXG4gIH0sXG5cbiAgLyoqXG4gICog5LiK5Lyg5pys5Zyw5Zu+54mHXG4gICogQHBhcmFtIGUgXG4gICovXG4gIG9uVXBsb2FkTG9jYWxJbWcoZTogYW55KSB7XG4gICAgVXBsb2FkLnVwbG9hZExvY2FsSW1nKGUuZGV0YWlsLmNob29zZUxvY2FsSW1nUmVzKVxuICB9LFxuXG4gIC8qKlxuICAgKiDkuIrkvKDnvqTogYrmlofku7ZcbiAgICogQHBhcmFtIGUgXG4gICAqL1xuICBvblVwbG9hZE1lc3NhZ2VGaWxlKGU6IGFueSkge1xuICAgIGNvbnN0IGZpbGVPYmplY3RzOiBXZWNoYXRNaW5pcHJvZ3JhbS5DaG9vc2VNZXNzYWdlRmlsZVN1Y2Nlc3NDYWxsYmFja1Jlc3VsdCA9IGUuZGV0YWlsLmZpbGVPYmplY3RzO1xuICAgIGNvbnN0IHBvcm1pc2VzOiBQcm9taXNlPGFueT5bXSA9IFtdO1xuICAgIGZpbGVPYmplY3RzLnRlbXBGaWxlcy5mb3JFYWNoKGZpbGVPYmplY3QgPT4ge1xuICAgICAgcG9ybWlzZXMucHVzaChVcGxvYWQudXBsb2FkTWVzc2FnZUZpbGUoZmlsZU9iamVjdCkpO1xuICAgIH0pXG4gICAgUHJvbWlzZS5hbGwocG9ybWlzZXMpLnRoZW4ocmVzID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG5cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9KVxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWKoOi9vVxuICAgKi9cbiAgb25Mb2FkKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5pi+56S6XG4gICAqL1xuICBvblNob3coKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog55Sf5ZG95ZGo5pyf5Ye95pWwLS3nm5HlkKzpobXpnaLpmpDol49cbiAgICovXG4gIG9uSGlkZSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG5cbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i55u45YWz5LqL5Lu25aSE55CG5Ye95pWwLS3nm5HlkKznlKjmiLfkuIvmi4nliqjkvZxcbiAgICovXG4gIG9uUHVsbERvd25SZWZyZXNoKCkge1xuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouS4iuaLieinpuW6leS6i+S7tueahOWkhOeQhuWHveaVsFxuICAgKi9cbiAgb25SZWFjaEJvdHRvbSgpIHtcblxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuICAgIGNvbnNvbGUubG9nKG9wdHMudGFyZ2V0KVxuICAgIHJldHVybiB7fVxuICB9XG59KSJdfQ==