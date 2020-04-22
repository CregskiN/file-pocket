"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxDQUFDO0lBS0gsSUFBSSxFQUFFO1FBQ0osS0FBSyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxFQUFFLENBQUM7Z0JBQ04sU0FBUyxFQUFFLEtBQUs7YUFDakIsRUFBQztnQkFDQSxHQUFHLEVBQUUsQ0FBQztnQkFDTixTQUFTLEVBQUUsS0FBSzthQUNqQixFQUFDO2dCQUNBLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLEVBQUM7Z0JBQ0EsR0FBRyxFQUFFLENBQUM7Z0JBQ04sU0FBUyxFQUFFLEtBQUs7YUFDakIsRUFBQztnQkFDQSxHQUFHLEVBQUUsQ0FBQztnQkFDTixTQUFTLEVBQUUsS0FBSzthQUNqQixFQUFDO2dCQUNBLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLEVBQUM7Z0JBQ0EsR0FBRyxFQUFFLENBQUM7Z0JBQ04sU0FBUyxFQUFFLEtBQUs7YUFDakIsRUFBQztnQkFDQSxHQUFHLEVBQUUsQ0FBQztnQkFDTixTQUFTLEVBQUUsS0FBSzthQUNqQixFQUFDO2dCQUNBLEdBQUcsRUFBRSxDQUFDO2dCQUNOLFNBQVMsRUFBRSxLQUFLO2FBQ2pCLENBQUM7S0FDSDtJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsT0FBTztJQUVQLENBQUM7SUFLRCxNQUFNO0lBRU4sQ0FBQztJQUtELE1BQU07SUFFTixDQUFDO0lBS0QsUUFBUTtJQUVSLENBQUM7SUFLRCxpQkFBaUI7SUFFakIsQ0FBQztJQUtELGFBQWE7SUFFYixDQUFDO0lBS0QsaUJBQWlCLEVBQWpCLFVBQWtCLElBQUk7UUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0YsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiUGFnZSh7XG5cbiAgLyoqXG4gICAqIOmhtemdoueahOWIneWni+aVsOaNrlxuICAgKi9cbiAgZGF0YToge1xuICAgIGZpbGVzOiBbe1xuICAgICAgZmlkOiAwLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH0se1xuICAgICAgZmlkOiAxLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH0se1xuICAgICAgZmlkOiAyLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH0se1xuICAgICAgZmlkOiAzLFxuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH0se1xuICAgICAgZmlkOiA0LFxuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH0se1xuICAgICAgZmlkOiA1LFxuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH0se1xuICAgICAgZmlkOiA2LFxuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH0se1xuICAgICAgZmlkOiA3LFxuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH0se1xuICAgICAgZmlkOiA4LFxuICAgICAgaXNDaGVja2VkOiBmYWxzZVxuICAgIH1dXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yqg6L29XG4gICAqL1xuICBvbkxvYWQoKSB7XG4gICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIOeUn+WRveWRqOacn+WHveaVsC0t55uR5ZCs6aG16Z2i5Yid5qyh5riy5p+T5a6M5oiQXG4gICAqL1xuICBvblJlYWR5KCkge1xuICAgIFxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouaYvuekulxuICAgKi9cbiAgb25TaG93KCkge1xuICAgIFxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdoumakOiXj1xuICAgKi9cbiAgb25IaWRlKCkge1xuICAgIFxuICB9LFxuXG4gIC8qKlxuICAgKiDnlJ/lkb3lkajmnJ/lh73mlbAtLeebkeWQrOmhtemdouWNuOi9vVxuICAgKi9cbiAgb25VbmxvYWQoKSB7XG4gICAgXG4gIH0sXG5cbiAgLyoqXG4gICAqIOmhtemdouebuOWFs+S6i+S7tuWkhOeQhuWHveaVsC0t55uR5ZCs55So5oi35LiL5ouJ5Yqo5L2cXG4gICAqL1xuICBvblB1bGxEb3duUmVmcmVzaCgpIHtcbiAgICBcbiAgfSxcblxuICAvKipcbiAgICog6aG16Z2i5LiK5ouJ6Kem5bqV5LqL5Lu255qE5aSE55CG5Ye95pWwXG4gICAqL1xuICBvblJlYWNoQm90dG9tKCkge1xuICAgIFxuICB9LFxuXG4gIC8qKlxuICAgKiDnlKjmiLfngrnlh7vlj7PkuIrop5LliIbkuqtcbiAgICovXG4gIG9uU2hhcmVBcHBNZXNzYWdlKG9wdHMpOiBXZWNoYXRNaW5pcHJvZ3JhbS5QYWdlLklDdXN0b21TaGFyZUNvbnRlbnQge1xuICAgIGNvbnNvbGUubG9nKG9wdHMudGFyZ2V0KVxuICAgIHJldHVybiB7fVxuICB9XG59KSJdfQ==