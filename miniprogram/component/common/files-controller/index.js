"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Upload_1 = __importDefault(require("../../../models/Upload"));
Component({
    properties: {
        files: Array,
        editting: Boolean,
    },
    data: {
        editting: false,
        selectList: [],
    },
    methods: {
        inEdit: function () {
            this.setData({
                editting: true,
                selectList: []
            });
        },
        outEdit: function () {
            this.setData({
                editting: false,
                selectList: []
            });
        },
        onSelect: function (e) {
            this.data.selectList.forEach(function (value) {
                if (value.fid === e.detail.fid) {
                }
            });
        },
        onSelecteAll: function () {
            this.setData({
                selectList: this.data.files
            });
        },
        onUploadLocalImg: function (e) {
            Upload_1.default.uploadLocalImg(e.detail.chooseLocalImgRes);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtFQUE0QztBQUc1QyxTQUFTLENBQUM7SUFJUixVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsS0FBSztRQUNaLFFBQVEsRUFBRSxPQUFPO0tBRWxCO0lBS0QsSUFBSSxFQUFFO1FBQ0osUUFBUSxFQUFFLEtBQUs7UUFDZixVQUFVLEVBQUUsRUFBRTtLQUNmO0lBS0QsT0FBTyxFQUFFO1FBSVAsTUFBTTtZQUNKLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsVUFBVSxFQUFFLEVBQUU7YUFDZixDQUFDLENBQUE7UUFDSixDQUFDO1FBS0QsT0FBTztZQUNMLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ1gsUUFBUSxFQUFFLEtBQUs7Z0JBQ2YsVUFBVSxFQUFFLEVBQUU7YUFDZixDQUFDLENBQUE7UUFDSixDQUFDO1FBTUQsUUFBUSxFQUFSLFVBQVMsQ0FBQztZQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBeUIsQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO2dCQUNoRCxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUU7aUJBRS9CO1lBQ0gsQ0FBQyxDQUFDLENBQUE7UUFHSixDQUFDO1FBS0QsWUFBWSxFQUFaO1lBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDWCxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFZO2FBQ25DLENBQUMsQ0FBQTtRQUNKLENBQUM7UUFPRCxnQkFBZ0IsRUFBaEIsVUFBaUIsQ0FBTTtZQUNyQixnQkFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDbkQsQ0FBQztLQUVGO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVwbG9hZCBmcm9tICcuLi8uLi8uLi9tb2RlbHMvVXBsb2FkJztcblxuLy8gY29tcG9uZW50L2NvbW1vbi9maWxlcy1jb250cm9sbGVyL2luZGV4LmpzXG5Db21wb25lbnQoe1xuICAvKipcbiAgICog57uE5Lu255qE5bGe5oCn5YiX6KGoXG4gICAqL1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgZmlsZXM6IEFycmF5LFxuICAgIGVkaXR0aW5nOiBCb29sZWFuLFxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIOe7hOS7tueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGVkaXR0aW5nOiBmYWxzZSxcbiAgICBzZWxlY3RMaXN0OiBbXSxcbiAgfSxcblxuICAvKipcbiAgICog57uE5Lu255qE5pa55rOV5YiX6KGoXG4gICAqL1xuICBtZXRob2RzOiB7XG4gICAgLyoqXG4gICAgICog6L+b5YWl57yW6L6R5qih5byPXG4gICAgICovXG4gICAgaW5FZGl0KCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZWRpdHRpbmc6IHRydWUsXG4gICAgICAgIHNlbGVjdExpc3Q6IFtdXG4gICAgICB9KVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDpgIDlh7rnvJbovpHmqKHlvI9cbiAgICAgKi9cbiAgICBvdXRFZGl0KCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgZWRpdHRpbmc6IGZhbHNlLFxuICAgICAgICBzZWxlY3RMaXN0OiBbXVxuICAgICAgfSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6YCJ5oup5LqL5Lu2XG4gICAgICogQHBhcmFtIGUgXG4gICAgICovXG4gICAgb25TZWxlY3QoZSkge1xuICAgICAgKHRoaXMuZGF0YS5zZWxlY3RMaXN0IGFzIEFycmF5PGFueT4pLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICBpZiAodmFsdWUuZmlkID09PSBlLmRldGFpbC5maWQpIHtcblxuICAgICAgICB9XG4gICAgICB9KVxuXG5cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog5YWo6YCJ5LqL5Lu2XG4gICAgICovXG4gICAgb25TZWxlY3RlQWxsKCkge1xuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgc2VsZWN0TGlzdDogdGhpcy5kYXRhLmZpbGVzIGFzIGFueVxuICAgICAgfSlcbiAgICB9LFxuXG5cbiAgICAvKipcbiAgICAgKiDkuIrkvKDmnKzlnLDlm77niYdcbiAgICAgKiBAcGFyYW0gZSBcbiAgICAgKi9cbiAgICBvblVwbG9hZExvY2FsSW1nKGU6IGFueSkge1xuICAgICAgVXBsb2FkLnVwbG9hZExvY2FsSW1nKGUuZGV0YWlsLmNob29zZUxvY2FsSW1nUmVzKVxuICAgIH1cblxuICB9XG59KVxuIl19