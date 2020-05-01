"use strict";
(function () {
    var config = {
        qiniuRegion: '',
        qiniuBucketUrlPrefix: '',
        qiniuUploadToken: '',
        qiniuUploadTokenURL: 'https://jellyfishmix.com/wx-interchange/file/get_upload_token',
        qiniuUploadTokenFunction: function () { },
        qiniuShouldUseQiniuFileName: true
    };
    function init(options) {
        updateConfigWithOptions(options);
    }
    function updateConfigWithOptions(options) {
        if (options.region) {
            config.qiniuRegion = options.region;
        }
        else {
            console.error('qiniu uploader need your bucket region');
        }
        if (options.uptoken) {
            config.qiniuUploadToken = options.uptoken;
        }
        else if (options.uptokenURL) {
            config.qiniuUploadTokenURL = options.uptokenURL;
        }
        else if (options.uptokenFunc) {
            config.qiniuUploadTokenFunction = options.uptokenFunc;
        }
        if (options.domain) {
            config.qiniuBucketUrlPrefix = options.domain;
        }
        config.qiniuShouldUseQiniuFileName = options.shouldUseQiniuFileName;
    }
    function upload(filePath, success, fail, options, progress, cancelTask) {
        if (null == filePath) {
            console.error('qiniu uploader need filePath to upload');
            return;
        }
        if (options) {
            updateConfigWithOptions(options);
        }
        if (config.qiniuUploadToken) {
            doUpload(filePath, success, fail, options, progress, cancelTask);
        }
        else if (config.qiniuUploadTokenURL) {
            getQiniuToken(function () {
                doUpload(filePath, success, fail, options, progress, cancelTask);
            });
        }
        else if (config.qiniuUploadTokenFunction) {
            config.qiniuUploadToken = config.qiniuUploadTokenFunction();
            if (null == config.qiniuUploadToken && config.qiniuUploadToken.length > 0) {
                console.error('qiniu UploadTokenFunction result is null, please check the return value');
                return;
            }
            doUpload(filePath, success, fail, options, progress, cancelTask);
        }
        else {
            console.error('qiniu uploader need one of [uptoken, uptokenURL, uptokenFunc]');
            return;
        }
    }
    function doUpload(filePath, success, fail, options, progress, cancelTask) {
        console.log(arguments);
        if (null == config.qiniuUploadToken && config.qiniuUploadToken.length > 0) {
            console.error('qiniu UploadToken is null, please check the init config or networking');
            return;
        }
        var url = uploadURLFromRegionCode(config.qiniuRegion);
        var fileName = filePath.split('//')[1];
        if (options && options.key) {
            fileName = options.key;
        }
        var formData = {
            'token': config.qiniuUploadToken
        };
        if (!config.qiniuShouldUseQiniuFileName) {
            formData['key'] = fileName;
        }
        var uploadTask = wx.uploadFile({
            url: url,
            filePath: filePath,
            name: 'file',
            formData: formData,
            success: function (res) {
                var dataString = res.data;
                try {
                    var dataObject = JSON.parse(dataString);
                    var fileUrl = config.qiniuBucketUrlPrefix + '/' + dataObject.key;
                    dataObject.fileUrl = fileUrl;
                    if (success) {
                        success(dataObject);
                    }
                }
                catch (e) {
                    console.log('parse JSON failed, origin String is: ' + dataString);
                    if (fail) {
                        fail(e);
                    }
                }
            },
            fail: function (error) {
                console.error(error);
                if (fail) {
                    fail(error);
                }
            }
        });
        uploadTask.onProgressUpdate(function (res) {
            progress && progress(res);
        });
        cancelTask && cancelTask(function () {
            uploadTask.abort();
        });
    }
    function getQiniuToken(callback) {
        wx.request({
            url: config.qiniuUploadTokenURL,
            success: function (res) {
                var token = res.data.uptoken;
                if (token && token.length > 0) {
                    config.qiniuUploadToken = token;
                    if (callback) {
                        callback();
                    }
                }
                else {
                    console.error('qiniuUploader cannot get your token, please check the uptokenURL or server');
                }
            },
            fail: function (error) {
                console.error('qiniu UploadToken is null, please check the init config or networking: ' + error);
            }
        });
    }
    function uploadURLFromRegionCode(code) {
        var uploadURL = null;
        switch (code) {
            case 'ECN':
                uploadURL = 'https://up.qiniup.com';
                break;
            case 'NCN':
                uploadURL = 'https://up-z1.qiniup.com';
                break;
            case 'SCN':
                uploadURL = 'https://up-z2.qiniup.com';
                break;
            case 'NA':
                uploadURL = 'https://up-na0.qiniup.com';
                break;
            case 'ASG':
                uploadURL = 'https://up-as0.qiniup.com';
                break;
            default: console.error('please make the region is with one of [ECN, SCN, NCN, NA, ASG]');
        }
        return uploadURL;
    }
    module.exports = {
        init: init,
        upload: upload,
    };
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicWluaXVVcGxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInFpbml1VXBsb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQWFBLENBQUM7SUFFQyxJQUFJLE1BQU0sR0FBUTtRQUVoQixXQUFXLEVBQUUsRUFBRTtRQUVmLG9CQUFvQixFQUFFLEVBQUU7UUFJeEIsZ0JBQWdCLEVBQUUsRUFBRTtRQUVwQixtQkFBbUIsRUFBRSwrREFBK0Q7UUFFcEYsd0JBQXdCLEVBQUUsY0FBYyxDQUFDO1FBR3pDLDJCQUEyQixFQUFFLElBQUk7S0FDbEMsQ0FBQTtJQUtELFNBQVMsSUFBSSxDQUFDLE9BQWdCO1FBQzVCLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFZRCxTQUFTLHVCQUF1QixDQUFDLE9BQWdCO1FBQy9DLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixNQUFNLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7U0FDckM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUMzQzthQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUM3QixNQUFNLENBQUMsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztTQUNqRDthQUFNLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUM5QixNQUFNLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztTQUN2RDtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixNQUFNLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUM5QztRQUNELE1BQU0sQ0FBQywyQkFBMkIsR0FBRyxPQUFPLENBQUMs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S0FBSyxDQUFDO29CQUNoQyxJQUFJLFFBQVEsRUFBRTt3QkFDWixRQUFRLEVBQUUsQ0FBQztxQkFDWjtpQkFDRjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLDRFQUE0RSxDQUFDLENBQUE7aUJBQzVGO1lBQ0gsQ0FBQztZQUNELElBQUksRUFBRSxVQUFVLEtBQUs7Z0JBQ25CLE9BQU8sQ0FBQyxLQUFLLENBQUMseUVBQXlFLEdBQUcsS0FBSyxDQUFDLENBQUM7WUFDbkcsQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFHRCxTQUFTLHVCQUF1QixDQUFDLElBQVk7UUFDM0MsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxLQUFLO2dCQUFFLFNBQVMsR0FBRyx1QkFBdUIsQ0FBQztnQkFBQyxNQUFNO1lBQ3ZELEtBQUssS0FBSztnQkFBRSxTQUFTLEdBQUcsMEJBQTBCLENBQUM7Z0JBQUMsTUFBTTtZQUMxRCxLQUFLLEtBQUs7Z0JBQUUsU0FBUyxHQUFHLDBCQUEwQixDQUFDO2dCQUFDLE1BQU07WUFDMUQsS0FBSyxJQUFJO2dCQUFFLFNBQVMsR0FBRywyQkFBMkIsQ0FBQztnQkFBQyxNQUFNO1lBQzFELEtBQUssS0FBSztnQkFBRSxTQUFTLEdBQUcsMkJBQTJCLENBQUM7Z0JBQUMsTUFBTTtZQUMzRCxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLGdFQUFnRSxDQUFDLENBQUM7U0FDMUY7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRztRQUNmLElBQUksRUFBRSxJQUFJO1FBQ1YsTUFBTSxFQUFFLE1BQU07S0FDZixDQUFBO0FBQ0gsQ0FBQyxDQUFDLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNyZWF0ZWQgYnkgZ3Bha2Vcbi8vIHVwZGF0ZWQgYnkgamVsbHlmaXNobWl4XG5cbmludGVyZmFjZSBRaW5pdVVwbG9hZGVyUmVzRGF0YSB7XG4gIGZpbGVVcmw6IHN0cmluZyxcbiAgZnNpemU6IG51bWJlcixcbiAgaGFzaDogc3RyaW5nLFxuICBrZXk6IHN0cmluZyxcbiAgbWltZVR5cGU6IHN0cmluZ1xufVxuXG5cblxuKGZ1bmN0aW9uICgpIHtcbiAgLy8g6K+35Y+C6ICDZGVtb+eahGluZGV4Lmpz5Lit55qEaW5pdFFpbml1KCnmlrnms5XvvIzoi6XlnKjkvb/nlKjlpITlr7lvcHRpb25z6L+b6KGM5LqG6LWL5YC877yM5YiZ5q2k5aSEY29uZmln5LiN6ZyA6KaB6LWL6buY6K6k5YC844CCaW5pdChvcHRpb25zKSDljbN1cGRhdGVDb25maWdXaXRoT3B0aW9ucyhvcHRpb25zKe+8jOS8muWvuWNvbmZpZ+i/m+ihjOi1i+WAvFxuICB2YXIgY29uZmlnOiBhbnkgPSB7XG4gICAgLy8gYnVja2V0IOaJgOWcqOWMuuWfn+OAgkVDTiwgU0NOLCBOQ04sIE5BLCBBU0fvvIzliIbliKvlr7nlupTkuIPniZvkupHnmoTvvJrljY7kuJzvvIzljY7ljZfvvIzljY7ljJfvvIzljJfnvo7vvIzmlrDliqDlnaEgNSDkuKrljLrln59cbiAgICBxaW5pdVJlZ2lvbjogJycsXG4gICAgLy8g5LiD54mb5LqRYnVja2V0IOWklumTvuWJjee8gFxuICAgIHFpbml1QnVja2V0VXJsUHJlZml4OiAnJyxcblxuICAgIC8vIOiOt+WPlnVwdG9rZW7mlrnms5XkuInpgInkuIDljbPlj6/vvIzmiafooYzkvJjlhYjnuqfkuLrvvJp1cHRva2VuID4gdXB0b2tlblVSTCA+IHVwdG9rZW5GdW5j44CC5LiJ6YCJ5LiA77yM5Ymp5LiL5Lik5Liq572u56m644CC5o6o6I2Q5L2/55SodXB0b2tlblVSTO+8jOivpuaDheivt+ingSBSRUFETUUubWRcbiAgICAvLyDnlLHlhbbku5bnqIvluo/nlJ/miJDkuIPniZsgdXB0b2tlblxuICAgIHFpbml1VXBsb2FkVG9rZW46ICcnLFxuICAgIC8vIOS7juaMh+WumiB1cmwg6YCa6L+HIEhUVFAgR0VUIOiOt+WPliB1cHRva2Vu77yM6L+U5Zue55qE5qC85byP5b+F6aG75pivIGpzb24g5LiU5YyF5ZCrIHVwdG9rZW4g5a2X5q6177yM5L6L5aaC77yaIHtcInVwdG9rZW5cIjogXCIwTUx2V1BueXkuLi5cIn1cbiAgICBxaW5pdVVwbG9hZFRva2VuVVJMOiAnaHR0cHM6Ly9qZWxseWZpc2htaXguY29tL3d4LWludGVyY2hhbmdlL2ZpbGUvZ2V0X3VwbG9hZF90b2tlbicsXG4gICAgLy8gdXB0b2tlbkZ1bmMg6L+Z5Liq5bGe5oCn55qE5YC85Y+v5Lul5piv5LiA5Liq55So5p2l55Sf5oiQdXB0b2tlbueahOWHveaVsO+8jOivpuaDheivt+ingSBSRUFETUUubWRcbiAgICBxaW5pdVVwbG9hZFRva2VuRnVuY3Rpb246IGZ1bmN0aW9uICgpIHsgfSxcblxuICAgIC8vIOWmguaenOaYryB0cnVl77yM5YiZ5paH5Lu255qEIGtleSDnlLEgcWluaXUg5pyN5Yqh5Zmo5YiG6YWNICjlhajlsYDljrvph40p44CC5aaC5p6c5pivIGZhbHNl77yM5YiZ5paH5Lu255qEIGtleSDkvb/nlKjlvq7kv6Hoh6rliqjnlJ/miJDnmoQgZmlsZW5hbWXjgILpu5jorqTmmK8gdHJ1ZeOAguW7uuiuruS9v+eUqHRydWXvvIzlvq7kv6Hoh6rliqjnlJ/miJDnmoRmaWxlbmFtZeadguS5seS4lOmVv1xuICAgIHFpbml1U2hvdWxkVXNlUWluaXVGaWxlTmFtZTogdHJ1ZVxuICB9XG5cbiAgLy8gaW5pdChvcHRpb25zKSDlsIbkuIPniZvkupHnm7jlhbPphY3nva7liJ3lp4vljJbov5vmnKxzZGtcbiAgLy8g5Zyo5pW05Liq56iL5bqP55Sf5ZG95ZGo5pyf5Lit77yM5Y+q6ZyA6KaBIGluaXQob3B0aW9ucyk7IOS4gOasoeWNs+WPr1xuICAvLyDlpoLmnpzpnIDopoHlj5jmm7TkuIPniZvkupHphY3nva7vvIzlho3mrKHosIPnlKggaW5pdChvcHRpb25zKTsg5Y2z5Y+vXG4gIGZ1bmN0aW9uIGluaXQob3B0aW9uczogT3B0aW9ucykge1xuICAgIHVwZGF0ZUNvbmZpZ1dpdGhPcHRpb25zKG9wdGlvbnMpO1xuICB9XG5cbiAgaW50ZXJmYWNlIE9wdGlvbnMge1xuICAgIHJlZ2lvbjogYW55O1xuICAgIHVwdG9rZW46IHN0cmluZztcbiAgICB1cHRva2VuVVJMOiBzdHJpbmc7XG4gICAgdXB0b2tlbkZ1bmM6ICgpID0+IHZvaWQ7XG4gICAgZG9tYWluOiBzdHJpbmc7XG4gICAgc2hvdWxkVXNlUWluaXVGaWxlTmFtZTogYm9vbGVhbjtcbiAgfVxuXG4gIC8vIOabtOaWsOS4g+eJm+S6kemFjee9rlxuICBmdW5jdGlvbiB1cGRhdGVDb25maWdXaXRoT3B0aW9ucyhvcHRpb25zOiBPcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMucmVnaW9uKSB7XG4gICAgICBjb25maWcucWluaXVSZWdpb24gPSBvcHRpb25zLnJlZ2lvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcigncWluaXUgdXBsb2FkZXIgbmVlZCB5b3VyIGJ1Y2tldCByZWdpb24nKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMudXB0b2tlbikge1xuICAgICAgY29uZmlnLnFpbml1VXBsb2FkVG9rZW4gPSBvcHRpb25zLnVwdG9rZW47XG4gICAgfSBlbHNlIGlmIChvcHRpb25zLnVwdG9rZW5VUkwpIHtcbiAgICAgIGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuVVJMID0gb3B0aW9ucy51cHRva2VuVVJMO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy51cHRva2VuRnVuYykge1xuICAgICAgY29uZmlnLnFpbml1VXBsb2FkVG9rZW5GdW5jdGlvbiA9IG9wdGlvbnMudXB0b2tlbkZ1bmM7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLmRvbWFpbikge1xuICAgICAgY29uZmlnLnFpbml1QnVja2V0VXJsUHJlZml4ID0gb3B0aW9ucy5kb21haW47XG4gICAgfVxuICAgIGNvbmZpZy5xaW5pdVNob3VsZFVzZVFpbml1RmlsZU5hbWUgPSBvcHRpb25zLnNob3VsZFVzZVFpbml1RmlsZU5hbWVcbiAgfVxuXG4gIC8vIOato+W8j+S4iuS8oOeahOWJjee9ruaWueazle+8jOWBmumihOWkhOeQhu+8jOW6lOeUqOS4g+eJm+S6kemFjee9rlxuICBmdW5jdGlvbiB1cGxvYWQoZmlsZVBhdGg6IHN0cmluZywgc3VjY2VzczogYW55LCBmYWlsOiBhbnksIG9wdGlvbnM6IE9wdGlvbnMsIHByb2dyZXNzOiBhbnksIGNhbmNlbFRhc2s6IGFueSkge1xuICAgIGlmIChudWxsID09IGZpbGVQYXRoKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdxaW5pdSB1cGxvYWRlciBuZWVkIGZpbGVQYXRoIHRvIHVwbG9hZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgdXBkYXRlQ29uZmlnV2l0aE9wdGlvbnMob3B0aW9ucyk7XG4gICAgfVxuICAgIGlmIChjb25maWcucWluaXVVcGxvYWRUb2tlbikge1xuICAgICAgZG9VcGxvYWQoZmlsZVBhdGgsIHN1Y2Nlc3MsIGZhaWwsIG9wdGlvbnMsIHByb2dyZXNzLCBjYW5jZWxUYXNrKTtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuVVJMKSB7XG4gICAgICBnZXRRaW5pdVRva2VuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9VcGxvYWQoZmlsZVBhdGgsIHN1Y2Nlc3MsIGZhaWwsIG9wdGlvbnMsIHByb2dyZXNzLCBjYW5jZWxUYXNrKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLnFpbml1VXBsb2FkVG9rZW5GdW5jdGlvbikge1xuICAgICAgY29uZmlnLnFpbml1VXBsb2FkVG9rZW4gPSBjb25maWcucWluaXVVcGxvYWRUb2tlbkZ1bmN0aW9uKCk7XG4gICAgICBpZiAobnVsbCA9PSBjb25maWcucWluaXVVcGxvYWRUb2tlbiAmJiBjb25maWcucWluaXVVcGxvYWRUb2tlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1IFVwbG9hZFRva2VuRnVuY3Rpb24gcmVzdWx0IGlzIG51bGwsIHBsZWFzZSBjaGVjayB0aGUgcmV0dXJuIHZhbHVlJyk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZG9VcGxvYWQoZmlsZVBhdGgsIHN1Y2Nlc3MsIGZhaWwsIG9wdGlvbnMsIHByb2dyZXNzLCBjYW5jZWxUYXNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcigncWluaXUgdXBsb2FkZXIgbmVlZCBvbmUgb2YgW3VwdG9rZW4sIHVwdG9rZW5VUkwsIHVwdG9rZW5GdW5jXScpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIC8vIOato+W8j+S4iuS8oFxuICBmdW5jdGlvbiBkb1VwbG9hZChmaWxlUGF0aDogc3RyaW5nLCBzdWNjZXNzOiBhbnksIGZhaWw6IGFueSwgb3B0aW9uczogYW55LCBwcm9ncmVzczogYW55LCBjYW5jZWxUYXNrOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhhcmd1bWVudHMpO1xuXG4gICAgaWYgKG51bGwgPT0gY29uZmlnLnFpbml1VXBsb2FkVG9rZW4gJiYgY29uZmlnLnFpbml1VXBsb2FkVG9rZW4ubGVuZ3RoID4gMCkge1xuICAgICAgY29uc29sZS5lcnJvcigncWluaXUgVXBsb2FkVG9rZW4gaXMgbnVsbCwgcGxlYXNlIGNoZWNrIHRoZSBpbml0IGNvbmZpZyBvciBuZXR3b3JraW5nJyk7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIHVybCA9IHVwbG9hZFVSTEZyb21SZWdpb25Db2RlKGNvbmZpZy5xaW5pdVJlZ2lvbik7XG4gICAgdmFyIGZpbGVOYW1lID0gZmlsZVBhdGguc3BsaXQoJy8vJylbMV07XG4gICAgLy8g5aaC5p6cb3B0aW9uc+mdnuepuu+8jOWImeS9v+eUqG9wdGlvbnPkuK3nmoRrZXnkvZzkuLpmaWxlTmFtZVxuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMua2V5KSB7XG4gICAgICBmaWxlTmFtZSA9IG9wdGlvbnMua2V5O1xuICAgIH1cbiAgICB2YXIgZm9ybURhdGEgPSB7XG4gICAgICAndG9rZW4nOiBjb25maWcucWluaXVVcGxvYWRUb2tlblxuICAgIH07XG4gICAgLy8g5aaC5p6c5pivIHRydWXvvIzliJnmlofku7bnmoQga2V5IOeUsSBxaW5pdSDmnI3liqHlmajliIbphY0gKOWFqOWxgOWOu+mHjSnjgILlpoLmnpzmmK8gZmFsc2XvvIzliJnmlofku7bnmoQga2V5IOS9v+eUqOW+ruS/oeiHquWKqOeUn+aIkOeahCBmaWxlbmFtZeOAgum7mOiupOaYryB0cnVl44CC5bu66K6u5L2/55SodHJ1Ze+8jOW+ruS/oeiHquWKqOeUn+aIkOeahGZpbGVuYW1l5p2C5Lmx5LiU6ZW/XG4gICAgaWYgKCFjb25maWcucWluaXVTaG91bGRVc2VRaW5pdUZpbGVOYW1lKSB7XG4gICAgICAoZm9ybURhdGEgYXMgYW55KVsna2V5J10gPSBmaWxlTmFtZTtcbiAgICB9XG4gICAgdmFyIHVwbG9hZFRhc2sgPSB3eC51cGxvYWRGaWxlKHtcbiAgICAgIHVybDogdXJsIGFzIHN0cmluZyxcbiAgICAgIGZpbGVQYXRoOiBmaWxlUGF0aCxcbiAgICAgIG5hbWU6ICdmaWxlJyxcbiAgICAgIGZvcm1EYXRhOiBmb3JtRGF0YSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIGRhdGFTdHJpbmcgPSByZXMuZGF0YVxuICAgICAgICAvLyAgIC8vIHRoaXMgaWYgY2FzZSBpcyBhIGNvbXBhdGliaWxpdHkgd2l0aCB3ZWNoYXQgc2VydmVyIHJldHVybmVkIGEgY2hhcmNvZGUsIGJ1dCB3YXMgZml4ZWRcbiAgICAgICAgLy8gICBpZihyZXMuZGF0YS5oYXNPd25Qcm9wZXJ0eSgndHlwZScpICYmIHJlcy5kYXRhLnR5cGUgPT09ICdCdWZmZXInKXtcbiAgICAgICAgLy8gICAgIGRhdGFTdHJpbmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsIHJlcy5kYXRhLmRhdGEpXG4gICAgICAgIC8vICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciBkYXRhT2JqZWN0OiBRaW5pdVVwbG9hZGVyUmVzRGF0YSA9IEpTT04ucGFyc2UoZGF0YVN0cmluZyk7XG4gICAgICAgICAgLy8g5ou85o6lZmlsZVVybFxuICAgICAgICAgIHZhciBmaWxlVXJsID0gY29uZmlnLnFpbml1QnVja2V0VXJsUHJlZml4ICsgJy8nICsgZGF0YU9iamVjdC5rZXk7XG4gICAgICAgICAgZGF0YU9iamVjdC5maWxlVXJsID0gZmlsZVVybDtcblxuICAgICAgICAgIGlmIChzdWNjZXNzKSB7XG4gICAgICAgICAgICBzdWNjZXNzKGRhdGFPYmplY3QpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXJzZSBKU09OIGZhaWxlZCwgb3JpZ2luIFN0cmluZyBpczogJyArIGRhdGFTdHJpbmcpXG4gICAgICAgICAgaWYgKGZhaWwpIHtcbiAgICAgICAgICAgIGZhaWwoZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICBpZiAoZmFpbCkge1xuICAgICAgICAgIGZhaWwoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIOaWh+S7tuS4iuS8oOi/m+W6plxuICAgIHVwbG9hZFRhc2sub25Qcm9ncmVzc1VwZGF0ZSgocmVzKSA9PiB7XG4gICAgICBwcm9ncmVzcyAmJiBwcm9ncmVzcyhyZXMpXG4gICAgfSlcblxuICAgIC8vIOS4reaWreaWh+S7tuS4iuS8oFxuICAgIGNhbmNlbFRhc2sgJiYgY2FuY2VsVGFzaygoKSA9PiB7XG4gICAgICB1cGxvYWRUYXNrLmFib3J0KClcbiAgICB9KVxuICB9XG5cbiAgLy8g6I635Y+W5LiD54mb5LqRdXB0b2tlbiwgdXJs5Li65ZCO56uv5pyN5Yqh5Zmo6I635Y+W5LiD54mb5LqRdXB0b2tlbuaOpeWPo1xuICBmdW5jdGlvbiBnZXRRaW5pdVRva2VuKGNhbGxiYWNrOiBGdW5jdGlvbikge1xuICAgIHd4LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBjb25maWcucWluaXVVcGxvYWRUb2tlblVSTCxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgdmFyIHRva2VuID0gKHJlcy5kYXRhIGFzIGFueSkudXB0b2tlbjtcbiAgICAgICAgaWYgKHRva2VuICYmIHRva2VuLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25maWcucWluaXVVcGxvYWRUb2tlbiA9IHRva2VuO1xuICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcigncWluaXVVcGxvYWRlciBjYW5ub3QgZ2V0IHlvdXIgdG9rZW4sIHBsZWFzZSBjaGVjayB0aGUgdXB0b2tlblVSTCBvciBzZXJ2ZXInKVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1IFVwbG9hZFRva2VuIGlzIG51bGwsIHBsZWFzZSBjaGVjayB0aGUgaW5pdCBjb25maWcgb3IgbmV0d29ya2luZzogJyArIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgLy8g6YCJ5oup5LiD54mb5LqR5paH5Lu25LiK5Lyg5o6l5Y+j77yM5paH5Lu25ZCR5Yy56YWN55qE5o6l5Y+j5Lit5Lyg6L6T44CCRUNOLCBTQ04sIE5DTiwgTkEsIEFTR++8jOWIhuWIq+WvueW6lOS4g+eJm+S6keeahO+8muWNjuS4nO+8jOWNjuWNl++8jOWNjuWMl++8jOWMl+e+ju+8jOaWsOWKoOWdoSA1IOS4quWMuuWfn1xuICBmdW5jdGlvbiB1cGxvYWRVUkxGcm9tUmVnaW9uQ29kZShjb2RlOiBzdHJpbmcpIHtcbiAgICB2YXIgdXBsb2FkVVJMID0gbnVsbDtcbiAgICBzd2l0Y2ggKGNvZGUpIHtcbiAgICAgIGNhc2UgJ0VDTic6IHVwbG9hZFVSTCA9ICdodHRwczovL3VwLnFpbml1cC5jb20nOyBicmVhaztcbiAgICAgIGNhc2UgJ05DTic6IHVwbG9hZFVSTCA9ICdodHRwczovL3VwLXoxLnFpbml1cC5jb20nOyBicmVhaztcbiAgICAgIGNhc2UgJ1NDTic6IHVwbG9hZFVSTCA9ICdodHRwczovL3VwLXoyLnFpbml1cC5jb20nOyBicmVhaztcbiAgICAgIGNhc2UgJ05BJzogdXBsb2FkVVJMID0gJ2h0dHBzOi8vdXAtbmEwLnFpbml1cC5jb20nOyBicmVhaztcbiAgICAgIGNhc2UgJ0FTRyc6IHVwbG9hZFVSTCA9ICdodHRwczovL3VwLWFzMC5xaW5pdXAuY29tJzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb25zb2xlLmVycm9yKCdwbGVhc2UgbWFrZSB0aGUgcmVnaW9uIGlzIHdpdGggb25lIG9mIFtFQ04sIFNDTiwgTkNOLCBOQSwgQVNHXScpO1xuICAgIH1cbiAgICByZXR1cm4gdXBsb2FkVVJMO1xuICB9XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5pdDogaW5pdCxcbiAgICB1cGxvYWQ6IHVwbG9hZCxcbiAgfVxufSkoKTsiXX0=