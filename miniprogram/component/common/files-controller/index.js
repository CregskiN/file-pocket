"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Component({
    properties: {
        files: Array,
        type: String,
    },
    data: {
        editting: false,
        selectList: [],
    },
    methods: {
        inEdit: function () {
            var files = this.properties.files;
            files.forEach(function (file) {
                file.isChecked = false;
            });
            this.setData({
                editting: true,
                selectList: [],
                files: files,
            });
        },
        outEdit: function () {
            var files = this.properties.files;
            files.forEach(function (file) {
                file.isChecked = false;
            });
            this.setData({
                editting: false,
                selectList: [],
                files: files
            });
        },
        onSelect: function (e) {
            var hitFileId = e.detail.fid;
            var files = this.properties.files;
            var selectList = this.data.selectList;
            for (var _i = 0, _a = files; _i < _a.length; _i++) {
                var file = _a[_i];
                if (file.fileId === hitFileId) {
                    if (file.isChecked) {
                        file.isChecked = false;
                        selectList.splice(selectList.indexOf(hitFileId), 1);
                    }
                    else {
                        file.isChecked = true;
                        selectList.push(hitFileId);
                    }
                    this.setData({
                        files: files,
                        selectList: selectList
                    });
                    break;
                }
            }
        },
        onSelecteAll: function () {
            if (this.data.selectList.length === this.properties.files.length) {
                var files = this.data.files;
                files.forEach(function (file) {
                    file.isChecked = false;
                });
                this.setData({
                    files: files,
                    selectList: []
                });
            }
            else {
                var files = this.data.files;
                var selectList_1 = [];
                files.forEach(function (file) {
                    file.isChecked = true;
                    selectList_1.push(file.fileId);
                });
                this.setData({
                    files: files,
                    selectList: selectList_1
                });
            }
        },
        onUploadLocalImg: function (e) {
            console.log('file-controller出发上传本地图片事件', e);
            this.triggerEvent('uploadLocalImg', {
                chooseLocalImgs: e.detail.chooseLocalImgs
            });
        },
        onUploadMessageFile: function (e) {
            this.triggerEvent('uploadMessageFile', {
                fileObjects: e.detail.fileObjects
            });
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLFNBQVMsQ0FBQztJQUlSLFVBQVUsRUFBRTtRQUNWLEtBQUssRUFBRSxLQUFLO1FBQ1osSUFBSSxFQUFFLE1BQU07S0FDYjtJQUtELElBQUksRUFBRTtRQUNKLFFBQVEsRUFBRSxLQUFLO1FBQ2YsVUFBVSxFQUFFLEVBQWM7S0FDM0I7SUFLRCxPQUFPLEVBQUU7UUFJUCxNQUFNO1lBQ0osSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7WUFDcEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUk7Z0JBQ2hCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFBO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxVQUFVLEVBQUUsRUFBRTtnQkFDZCxLQUFLLE9BQUE7YUFDTixDQUFDLENBQUE7UUFDSixDQUFDO1FBS0QsT0FBTztZQUNMLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ3BDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN6QixDQUFDLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsVUFBVSxFQUFFLEVBQUU7Z0JBQ2QsS0FBSyxPQUFBO2FBQ04sQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQU1ELFFBQVEsRUFBUixVQUFTLENBQUM7WUFDUixJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMvQixJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUNwQyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztZQUN4QyxLQUFtQixVQUE0QixFQUE1QixLQUFBLEtBQTRCLEVBQTVCLGNBQTRCLEVBQTVCLElBQTRCLEVBQUU7Z0JBQTVDLElBQU0sSUFBSSxTQUFBO2dCQUNiLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxTQUFTLEVBQUU7b0JBQzdCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFFbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7d0JBQ3ZCLFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDckQ7eUJBQU07d0JBRUwsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7d0JBQ3RCLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzVCO29CQUNELElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ1gsS0FBSyxPQUFBO3dCQUNMLFVBQVUsWUFBQTtxQkFDWCxDQUFDLENBQUE7b0JBQ0YsTUFBTTtpQkFDUDthQUNGO1FBR0gsQ0FBQztRQUtELFlBQVksRUFBWjtZQUNFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDaEUsSUFBTSxLQUFLLEdBQXdCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNuRCxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtvQkFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsS0FBSyxPQUFBO29CQUNMLFVBQVUsRUFBRSxFQUFFO2lCQUNmLENBQUMsQ0FBQTthQUNIO2lCQUFNO2dCQUNMLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM5QixJQUFNLFlBQVUsR0FBYSxFQUFFLENBQUM7Z0JBQ2hDLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO29CQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDdEIsWUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLENBQUMsQ0FBQyxDQUFDO2dCQUNILElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ1gsS0FBSyxPQUFBO29CQUNMLFVBQVUsY0FBQTtpQkFDWCxDQUFDLENBQUE7YUFDSDtRQUVILENBQUM7UUFPRCxnQkFBZ0IsRUFBaEIsVUFBaUIsQ0FBTTtZQUNyQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLENBQUMsQ0FBQyxDQUFDO1lBRTVDLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ2xDLGVBQWUsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLGVBQWU7YUFDMUMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztRQU1ELG1CQUFtQixFQUFuQixVQUFvQixDQUFNO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ3JDLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVc7YUFDbEMsQ0FBQyxDQUFBO1FBQ0osQ0FBQztLQUVGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVwbG9hZCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvVXBsb2FkJztcblxuLy8gY29tcG9uZW50L2NvbW1vbi9maWxlcy1jb250cm9sbGVyL2luZGV4LmpzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgZmlsZXM6IEFycmF5LFxuICAgIHR5cGU6IFN0cmluZyxcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5Yid5aeL5pWw5o2uXG4gICAqL1xuICBkYXRhOiB7XG4gICAgZWRpdHRpbmc6IGZhbHNlLFxuICAgIHNlbGVjdExpc3Q6IFtdIGFzIHN0cmluZ1tdLFxuICB9LFxuXG4gIC8qKlxuICAgKiDnu4Tku7bnmoTmlrnms5XliJfooahcbiAgICovXG4gIG1ldGhvZHM6IHtcbiAgICAvKipcbiAgICAgKiDov5vlhaXnvJbovpHmqKHlvI9cbiAgICAgKi9cbiAgICBpbkVkaXQoKSB7XG4gICAgICBjb25zdCBmaWxlcyA9IHRoaXMucHJvcGVydGllcy5maWxlcztcbiAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGZpbGUuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZWRpdHRpbmc6IHRydWUsXG4gICAgICAgIHNlbGVjdExpc3Q6IFtdLFxuICAgICAgICBmaWxlcyxcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmAgOWHuue8lui+keaooeW8j1xuICAgICAqL1xuICAgIG91dEVkaXQoKSB7XG4gICAgICBjb25zdCBmaWxlcyA9IHRoaXMucHJvcGVydGllcy5maWxlcztcbiAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgIGZpbGUuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgICB9KVxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZWRpdHRpbmc6IGZhbHNlLFxuICAgICAgICBzZWxlY3RMaXN0OiBbXSxcbiAgICAgICAgZmlsZXNcbiAgICAgIH0pXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmAieaLqeS6i+S7tlxuICAgICAqIEBwYXJhbSBlIFxuICAgICAqL1xuICAgIG9uU2VsZWN0KGUpIHtcbiAgICAgIGNvbnN0IGhpdEZpbGVJZCA9IGUuZGV0YWlsLmZpZDtcbiAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5wcm9wZXJ0aWVzLmZpbGVzO1xuICAgICAgY29uc3Qgc2VsZWN0TGlzdCA9IHRoaXMuZGF0YS5zZWxlY3RMaXN0O1xuICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzIGFzIFJlc3BvbnNlLkZpbGVUeXBlW10pIHtcbiAgICAgICAgaWYgKGZpbGUuZmlsZUlkID09PSBoaXRGaWxlSWQpIHtcbiAgICAgICAgICBpZiAoZmlsZS5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIC8vIOiLpeW3sumAiVxuICAgICAgICAgICAgZmlsZS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGVjdExpc3Quc3BsaWNlKHNlbGVjdExpc3QuaW5kZXhPZihoaXRGaWxlSWQpLCAxKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g6Iul5pyq6YCJXG4gICAgICAgICAgICBmaWxlLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICBzZWxlY3RMaXN0LnB1c2goaGl0RmlsZUlkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIGZpbGVzLFxuICAgICAgICAgICAgc2VsZWN0TGlzdFxuICAgICAgICAgIH0pXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWFqOmAieS6i+S7tlxuICAgICAqL1xuICAgIG9uU2VsZWN0ZUFsbCgpIHtcbiAgICAgIGlmICh0aGlzLmRhdGEuc2VsZWN0TGlzdC5sZW5ndGggPT09IHRoaXMucHJvcGVydGllcy5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgZmlsZXM6IFJlc3BvbnNlLkZpbGVUeXBlW10gPSB0aGlzLmRhdGEuZmlsZXM7XG4gICAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICAgICAgZmlsZS5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgZmlsZXMsXG4gICAgICAgICAgc2VsZWN0TGlzdDogW11cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbGVzID0gdGhpcy5kYXRhLmZpbGVzO1xuICAgICAgICBjb25zdCBzZWxlY3RMaXN0OiBzdHJpbmdbXSA9IFtdO1xuICAgICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgICAgIGZpbGUuaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICBzZWxlY3RMaXN0LnB1c2goZmlsZS5maWxlSWQpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICBmaWxlcyxcbiAgICAgICAgICBzZWxlY3RMaXN0XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiDkuIrkvKDmnKzlnLDlm77niYdcbiAgICAgKiBAcGFyYW0gZSBcbiAgICAgKi9cbiAgICBvblVwbG9hZExvY2FsSW1nKGU6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coJ2ZpbGUtY29udHJvbGxlcuWHuuWPkeS4iuS8oOacrOWcsOWbvueJh+S6i+S7ticsIGUpO1xuXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgndXBsb2FkTG9jYWxJbWcnLCB7XG4gICAgICAgIGNob29zZUxvY2FsSW1nczogZS5kZXRhaWwuY2hvb3NlTG9jYWxJbWdzXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDkuIrkvKDnvqTogYrmlofku7ZcbiAgICAgKiBAcGFyYW0gZSBcbiAgICAgKi9cbiAgICBvblVwbG9hZE1lc3NhZ2VGaWxlKGU6IGFueSkge1xuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoJ3VwbG9hZE1lc3NhZ2VGaWxlJywge1xuICAgICAgICBmaWxlT2JqZWN0czogZS5kZXRhaWwuZmlsZU9iamVjdHNcbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cbn0pXG4iXX0=