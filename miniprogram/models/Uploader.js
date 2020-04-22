"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var qiniuUploader = require('../utils/qiniuUploader');
function initQiniu() {
    var options = {
        region: 'NCN',
        uptoken: '',
        uptokenURL: 'https://jellyfishmix.com/wx-interchange/file/get_upload_token',
        uptokenFunc: function () { },
        domain: 'https://wx-interchange.oss.jellyfishmix.com',
        shouldUseQiniuFileName: true
    };
    qiniuUploader.init(options);
}
var Uploader = (function () {
    function Uploader() {
    }
    Uploader.uploadImg = function () {
        initQiniu();
        wx.chooseImage({
            count: 1,
            success: function (res) {
                console.log(res);
            }
        });
    };
    return Uploader;
}());
exports.default = Uploader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBsb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJVcGxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBR3hELFNBQVMsU0FBUztJQUNkLElBQUksT0FBTyxHQUFHO1FBRVYsTUFBTSxFQUFFLEtBQUs7UUFJYixPQUFPLEVBQUUsRUFBRTtRQUVYLFVBQVUsRUFBRSwrREFBK0Q7UUFFM0UsV0FBVyxFQUFFLGNBQWMsQ0FBQztRQUc1QixNQUFNLEVBQUUsNkNBQTZDO1FBRXJELHNCQUFzQixFQUFFLElBQUk7S0FDL0IsQ0FBQztJQUVGLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEMsQ0FBQztBQUVEO0lBQUE7SUFrREEsQ0FBQztJQS9DVSxrQkFBUyxHQUFoQjtRQUVJLFNBQVMsRUFBRSxDQUFDO1FBRVosRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUNYLEtBQUssRUFBRSxDQUFDO1lBQ1IsT0FBTyxFQUFFLFVBQVUsR0FBRztnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQWtDckIsQ0FBQztTQUNKLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFJTCxlQUFDO0FBQUQsQ0FBQyxBQWxERCxJQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHFpbml1VXBsb2FkZXIgPSByZXF1aXJlKCcuLi91dGlscy9xaW5pdVVwbG9hZGVyJyk7XG5cbi8vIOWIneWni+WMluS4g+eJm+S6keebuOWFs+mFjee9rlxuZnVuY3Rpb24gaW5pdFFpbml1KCkge1xuICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAvLyBidWNrZXTmiYDlnKjljLrln5/vvIzov5nph4zmmK/ljY7ljJfljLrjgIJFQ04sIFNDTiwgTkNOLCBOQSwgQVNH77yM5YiG5Yir5a+55bqU5LiD54mb5LqR55qE77ya5Y2O5Lic77yM5Y2O5Y2X77yM5Y2O5YyX77yM5YyX576O77yM5paw5Yqg5Z2hIDUg5Liq5Yy65Z+fXG4gICAgICAgIHJlZ2lvbjogJ05DTicsXG5cbiAgICAgICAgLy8g6I635Y+WdXB0b2tlbuaWueazleS4iemAieS4gOWNs+WPr++8jOaJp+ihjOS8mOWFiOe6p+S4uu+8mnVwdG9rZW4gPiB1cHRva2VuVVJMID4gdXB0b2tlbkZ1bmPjgILkuInpgInkuIDvvIzliankuIvkuKTkuKrnva7nqbrjgILmjqjojZDkvb/nlKh1cHRva2VuVVJM77yM6K+m5oOF6K+36KeBIFJFQURNRS5tZFxuICAgICAgICAvLyDnlLHlhbbku5bnqIvluo/nlJ/miJDkuIPniZsgdXB0b2tlblxuICAgICAgICB1cHRva2VuOiAnJyxcbiAgICAgICAgLy8g5LuO5oyH5a6aIHVybCDpgJrov4cgSFRUUCBHRVQg6I635Y+WIHVwdG9rZW7vvIzov5Tlm57nmoTmoLzlvI/lv4XpobvmmK8ganNvbiDkuJTljIXlkKsgdXB0b2tlbiDlrZfmrrXvvIzkvovlpoLvvJoge1widXB0b2tlblwiOiBcIjBNTHZXUG55eS4uLlwifVxuICAgICAgICB1cHRva2VuVVJMOiAnaHR0cHM6Ly9qZWxseWZpc2htaXguY29tL3d4LWludGVyY2hhbmdlL2ZpbGUvZ2V0X3VwbG9hZF90b2tlbicsXG4gICAgICAgIC8vIHVwdG9rZW5GdW5jIOi/meS4quWxnuaAp+eahOWAvOWPr+S7peaYr+S4gOS4queUqOadpeeUn+aIkHVwdG9rZW7nmoTlh73mlbDvvIzor6bmg4Xor7fop4EgUkVBRE1FLm1kXG4gICAgICAgIHVwdG9rZW5GdW5jOiBmdW5jdGlvbiAoKSB7IH0sXG5cbiAgICAgICAgLy8gYnVja2V0IOWklumTvuWfn+WQje+8jOS4i+i9vei1hOa6kOaXtueUqOWIsOOAguWmguaenOiuvue9ru+8jOS8muWcqCBzdWNjZXNzIGNhbGxiYWNrIOeahCByZXMg5Y+C5pWw5Yqg5LiK5Y+v5Lul55u05o6l5L2/55So55qEIGZpbGVVcmwg5a2X5q6144CC5ZCm5YiZ6ZyA6KaB6Ieq5bex5ou85o6lXG4gICAgICAgIGRvbWFpbjogJ2h0dHBzOi8vd3gtaW50ZXJjaGFuZ2Uub3NzLmplbGx5ZmlzaG1peC5jb20nLFxuICAgICAgICAvLyDlpoLmnpzmmK8gdHJ1Ze+8jOWImeaWh+S7tueahCBrZXkg55SxIHFpbml1IOacjeWKoeWZqOWIhumFjSAo5YWo5bGA5Y676YeNKeOAguWmguaenOaYryBmYWxzZe+8jOWImeaWh+S7tueahCBrZXkg5L2/55So5b6u5L+h6Ieq5Yqo55Sf5oiQ55qEIGZpbGVuYW1l44CC6buY6K6k5pivIHRydWXjgILlu7rorq7kvb/nlKh0cnVl77yM5b6u5L+h6Ieq5Yqo55Sf5oiQ55qEZmlsZW5hbWXmnYLkubHkuJTplb9cbiAgICAgICAgc2hvdWxkVXNlUWluaXVGaWxlTmFtZTogdHJ1ZVxuICAgIH07XG4gICAgLy8g5bCG5LiD54mb5LqR55u45YWz6YWN572u5Yid5aeL5YyW6L+b5pysc2RrXG4gICAgcWluaXVVcGxvYWRlci5pbml0KG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVcGxvYWRlciB7XG5cblxuICAgIHN0YXRpYyB1cGxvYWRJbWcoKSB7XG4gICAgICAgIC8vIOWIneWni+WMluS4g+eJm+S6kemFjee9rlxuICAgICAgICBpbml0UWluaXUoKTtcbiAgICAgICAgLy8g5b6u5L+hIEFQSSDpgInmi6nlm77niYdcbiAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgY291bnQ6IDEsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyB2YXIgZmlsZVBhdGggPSByZXMudGVtcEZpbGVQYXRoc1swXTtcbiAgICAgICAgICAgICAgICAvLyB2YXIgZmlsZU5hbWUgPSByZXMudGVtcEZpbGVzWzBdLm5hbWU7XG4gICAgICAgICAgICAgICAgLy8gLy8g5ZCR5LiD54mb5LqR5LiK5LygXG4gICAgICAgICAgICAgICAgLy8gcWluaXVVcGxvYWRlci51cGxvYWQoZmlsZVBhdGgsIChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhhdC5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICdpbWFnZU9iamVjdCc6IHJlc1xuICAgICAgICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2ZpbGUgcGF0aCBpczogJyArIGZpbGVQYXRoKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ2ZpbGUgdXJsIGlzOiAnICsgcmVzLmZpbGVVcmwpO1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnZmlsZSBuYW1lIGlzOiAnICsgZmlsZU5hbWUpO1xuICAgICAgICAgICAgICAgIC8vIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKCdlcnJvcjogJyArIEpTT04uc3RyaW5naWZ5KGVycm9yKSk7XG4gICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8g5q2k6aG55Li6cWluaXVVcGxvYWRlci51cGxvYWTnmoTnrKzlm5vkuKrlj4LmlbBvcHRpb25z44CC6Iul5oOz5Zyo5Y2V5Liq5pa55rOV5Lit5Y+Y5pu05LiD54mb5LqR55u45YWz6YWN572u77yM5Y+v5Lul5L2/55So5LiK6L+w5Y+C5pWw44CC5aaC5p6c5LiN6ZyA6KaB5Zyo5Y2V5Liq5pa55rOV5Lit5Y+Y5pu05LiD54mb5LqR55u45YWz6YWN572u77yM5YiZ5Y+v5L2/55SoIG51bGwg5L2c5Li65Y+C5pWw5Y2g5L2N56ym44CC5o6o6I2Q5aGr5YaZaW5pdFFpbml1KCnkuK3nmoTkuIPniZvkupHnm7jlhbPlj4LmlbDvvIznhLblkI7mraTlpITkvb/nlKhudWxs5YGa5Y2g5L2N56ym44CCXG4gICAgICAgICAgICAgICAgLy8gICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICByZWdpb246ICdOQ04nLCAvLyDljY7ljJfljLpcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICB1cHRva2VuVVJMOiAnaHR0cHM6Ly9beW91cnNlcnZlci5jb21dL2FwaS91cHRva2VuJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICBkb21haW46ICdodHRwOi8vW3lvdXJCdWNrZXRJZF0uYmt0LmNsb3VkZG4uY29tJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICBzaG91bGRVc2VRaW5pdUZpbGVOYW1lOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICBrZXk6ICd0ZXN0S2V5TmFtZUxTQUtES0FTSkRIS0FTJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgLy8gICB1cHRva2VuVVJMOiAnbXlTZXJ2ZXIuY29tL2FwaS91cHRva2VuJ1xuICAgICAgICAgICAgICAgIC8vICAgICAvLyB9LFxuICAgICAgICAgICAgICAgIC8vICAgICBudWxsLFxuICAgICAgICAgICAgICAgIC8vICAgICAocHJvZ3Jlc3MpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoYXQuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgJ3Byb2dyZXNzJzogcHJvZ3Jlc3MucHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ+S4iuS8oOi/m+W6picsIHByb2dyZXNzLnByb2dyZXNzKVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ+W3sue7j+S4iuS8oOeahOaVsOaNrumVv+W6picsIHByb2dyZXNzLnRvdGFsQnl0ZXNTZW50KVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ+mihOacn+mcgOimgeS4iuS8oOeahOaVsOaNruaAu+mVv+W6picsIHByb2dyZXNzLnRvdGFsQnl0ZXNFeHBlY3RlZFRvU2VuZClcbiAgICAgICAgICAgICAgICAvLyAgICAgfSwgY2FuY2VsVGFzayA9PiB0aGF0LnNldERhdGEoeyBjYW5jZWxUYXNrIH0pXG4gICAgICAgICAgICAgICAgLy8gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG59XG5cbiJdfQ==