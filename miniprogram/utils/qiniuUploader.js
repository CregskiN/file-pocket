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
                    console.log(dataObject);
                    console.log('upload.success', res);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicWluaXVVcGxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInFpbml1VXBsb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUtBLENBQUM7SUFFQyxJQUFJLE1BQU0sR0FBUTtRQUVoQixXQUFXLEVBQUUsRUFBRTtRQUVmLG9CQUFvQixFQUFFLEVBQUU7UUFJeEIsZ0JBQWdCLEVBQUUsRUFBRTtRQUVwQixtQkFBbUIsRUFBRSwrREFBK0Q7UUFFcEYsd0JBQXdCLEVBQUUsY0FBYyxDQUFDO1FBR3pDLDJCQUEyQixFQUFFLElBQUk7S0FDbEMsQ0FBQTtJQUtELFNBQVMsSUFBSSxDQUFDLE9BQWdCO1FBQzVCLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFZRCxTQUFTLHVCQUF1QixDQUFDLE9BQWdCO1FBQy9DLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixNQUFNLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7U0FDckM7YUFBTTtZQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQXdDLENBQUMsQ0FBQztTQUN6RDtRQUNELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTtZQUNuQixNQUFNLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQztTQUMzQzthQUFNLElBQUksT0FBTyxDQUFDLFVBQVUsRUFBRTtZQUM3QixNQUFNLENBQUMsbUJBQW1CLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQztTQUNqRDthQUFNLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRTtZQUM5QixNQUFNLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQztTQUN2RDtRQUNELElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixNQUFNLENBQUMsb0JBQW9CLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztTQUM5QztRQUNELE1BQU0sQ0FBQywyQkFBMkIsR0FBRyxPQUFPLENBQUMs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bnRlbnQiOlsiLy8gY3JlYXRlZCBieSBncGFrZVxuLy8gdXBkYXRlZCBieSBqZWxseWZpc2htaXhcblxuXG5cbihmdW5jdGlvbiAoKSB7XG4gIC8vIOivt+WPguiAg2RlbW/nmoRpbmRleC5qc+S4reeahGluaXRRaW5pdSgp5pa55rOV77yM6Iul5Zyo5L2/55So5aSE5a+5b3B0aW9uc+i/m+ihjOS6hui1i+WAvO+8jOWImeatpOWkhGNvbmZpZ+S4jemcgOimgei1i+m7mOiupOWAvOOAgmluaXQob3B0aW9ucykg5Y2zdXBkYXRlQ29uZmlnV2l0aE9wdGlvbnMob3B0aW9ucynvvIzkvJrlr7ljb25maWfov5vooYzotYvlgLxcbiAgdmFyIGNvbmZpZzogYW55ID0ge1xuICAgIC8vIGJ1Y2tldCDmiYDlnKjljLrln5/jgIJFQ04sIFNDTiwgTkNOLCBOQSwgQVNH77yM5YiG5Yir5a+55bqU5LiD54mb5LqR55qE77ya5Y2O5Lic77yM5Y2O5Y2X77yM5Y2O5YyX77yM5YyX576O77yM5paw5Yqg5Z2hIDUg5Liq5Yy65Z+fXG4gICAgcWluaXVSZWdpb246ICcnLFxuICAgIC8vIOS4g+eJm+S6kWJ1Y2tldCDlpJbpk77liY3nvIBcbiAgICBxaW5pdUJ1Y2tldFVybFByZWZpeDogJycsXG5cbiAgICAvLyDojrflj5Z1cHRva2Vu5pa55rOV5LiJ6YCJ5LiA5Y2z5Y+v77yM5omn6KGM5LyY5YWI57qn5Li677yadXB0b2tlbiA+IHVwdG9rZW5VUkwgPiB1cHRva2VuRnVuY+OAguS4iemAieS4gO+8jOWJqeS4i+S4pOS4que9ruepuuOAguaOqOiNkOS9v+eUqHVwdG9rZW5VUkzvvIzor6bmg4Xor7fop4EgUkVBRE1FLm1kXG4gICAgLy8g55Sx5YW25LuW56iL5bqP55Sf5oiQ5LiD54mbIHVwdG9rZW5cbiAgICBxaW5pdVVwbG9hZFRva2VuOiAnJyxcbiAgICAvLyDku47mjIflrpogdXJsIOmAmui/hyBIVFRQIEdFVCDojrflj5YgdXB0b2tlbu+8jOi/lOWbnueahOagvOW8j+W/hemhu+aYryBqc29uIOS4lOWMheWQqyB1cHRva2VuIOWtl+aute+8jOS+i+Wmgu+8miB7XCJ1cHRva2VuXCI6IFwiME1MdldQbnl5Li4uXCJ9XG4gICAgcWluaXVVcGxvYWRUb2tlblVSTDogJ2h0dHBzOi8vamVsbHlmaXNobWl4LmNvbS93eC1pbnRlcmNoYW5nZS9maWxlL2dldF91cGxvYWRfdG9rZW4nLFxuICAgIC8vIHVwdG9rZW5GdW5jIOi/meS4quWxnuaAp+eahOWAvOWPr+S7peaYr+S4gOS4queUqOadpeeUn+aIkHVwdG9rZW7nmoTlh73mlbDvvIzor6bmg4Xor7fop4EgUkVBRE1FLm1kXG4gICAgcWluaXVVcGxvYWRUb2tlbkZ1bmN0aW9uOiBmdW5jdGlvbiAoKSB7IH0sXG5cbiAgICAvLyDlpoLmnpzmmK8gdHJ1Ze+8jOWImeaWh+S7tueahCBrZXkg55SxIHFpbml1IOacjeWKoeWZqOWIhumFjSAo5YWo5bGA5Y676YeNKeOAguWmguaenOaYryBmYWxzZe+8jOWImeaWh+S7tueahCBrZXkg5L2/55So5b6u5L+h6Ieq5Yqo55Sf5oiQ55qEIGZpbGVuYW1l44CC6buY6K6k5pivIHRydWXjgILlu7rorq7kvb/nlKh0cnVl77yM5b6u5L+h6Ieq5Yqo55Sf5oiQ55qEZmlsZW5hbWXmnYLkubHkuJTplb9cbiAgICBxaW5pdVNob3VsZFVzZVFpbml1RmlsZU5hbWU6IHRydWVcbiAgfVxuXG4gIC8vIGluaXQob3B0aW9ucykg5bCG5LiD54mb5LqR55u45YWz6YWN572u5Yid5aeL5YyW6L+b5pysc2RrXG4gIC8vIOWcqOaVtOS4queoi+W6j+eUn+WRveWRqOacn+S4re+8jOWPqumcgOimgSBpbml0KG9wdGlvbnMpOyDkuIDmrKHljbPlj69cbiAgLy8g5aaC5p6c6ZyA6KaB5Y+Y5pu05LiD54mb5LqR6YWN572u77yM5YaN5qyh6LCD55SoIGluaXQob3B0aW9ucyk7IOWNs+WPr1xuICBmdW5jdGlvbiBpbml0KG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICB1cGRhdGVDb25maWdXaXRoT3B0aW9ucyhvcHRpb25zKTtcbiAgfVxuXG4gIGludGVyZmFjZSBPcHRpb25zIHtcbiAgICByZWdpb246IGFueTtcbiAgICB1cHRva2VuOiBzdHJpbmc7XG4gICAgdXB0b2tlblVSTDogc3RyaW5nO1xuICAgIHVwdG9rZW5GdW5jOiAoKSA9PiB2b2lkO1xuICAgIGRvbWFpbjogc3RyaW5nO1xuICAgIHNob3VsZFVzZVFpbml1RmlsZU5hbWU6IGJvb2xlYW47XG4gIH1cblxuICAvLyDmm7TmlrDkuIPniZvkupHphY3nva5cbiAgZnVuY3Rpb24gdXBkYXRlQ29uZmlnV2l0aE9wdGlvbnMob3B0aW9uczogT3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLnJlZ2lvbikge1xuICAgICAgY29uZmlnLnFpbml1UmVnaW9uID0gb3B0aW9ucy5yZWdpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1IHVwbG9hZGVyIG5lZWQgeW91ciBidWNrZXQgcmVnaW9uJyk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnVwdG9rZW4pIHtcbiAgICAgIGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuID0gb3B0aW9ucy51cHRva2VuO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy51cHRva2VuVVJMKSB7XG4gICAgICBjb25maWcucWluaXVVcGxvYWRUb2tlblVSTCA9IG9wdGlvbnMudXB0b2tlblVSTDtcbiAgICB9IGVsc2UgaWYgKG9wdGlvbnMudXB0b2tlbkZ1bmMpIHtcbiAgICAgIGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuRnVuY3Rpb24gPSBvcHRpb25zLnVwdG9rZW5GdW5jO1xuICAgIH1cbiAgICBpZiAob3B0aW9ucy5kb21haW4pIHtcbiAgICAgIGNvbmZpZy5xaW5pdUJ1Y2tldFVybFByZWZpeCA9IG9wdGlvbnMuZG9tYWluO1xuICAgIH1cbiAgICBjb25maWcucWluaXVTaG91bGRVc2VRaW5pdUZpbGVOYW1lID0gb3B0aW9ucy5zaG91bGRVc2VRaW5pdUZpbGVOYW1lXG4gIH1cblxuICAvLyDmraPlvI/kuIrkvKDnmoTliY3nva7mlrnms5XvvIzlgZrpooTlpITnkIbvvIzlupTnlKjkuIPniZvkupHphY3nva5cbiAgZnVuY3Rpb24gdXBsb2FkKGZpbGVQYXRoOiBzdHJpbmcsIHN1Y2Nlc3M6IGFueSwgZmFpbDogYW55LCBvcHRpb25zOiBPcHRpb25zLCBwcm9ncmVzczogYW55LCBjYW5jZWxUYXNrOiBhbnkpIHtcbiAgICBpZiAobnVsbCA9PSBmaWxlUGF0aCkge1xuICAgICAgY29uc29sZS5lcnJvcigncWluaXUgdXBsb2FkZXIgbmVlZCBmaWxlUGF0aCB0byB1cGxvYWQnKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIHVwZGF0ZUNvbmZpZ1dpdGhPcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAoY29uZmlnLnFpbml1VXBsb2FkVG9rZW4pIHtcbiAgICAgIGRvVXBsb2FkKGZpbGVQYXRoLCBzdWNjZXNzLCBmYWlsLCBvcHRpb25zLCBwcm9ncmVzcywgY2FuY2VsVGFzayk7XG4gICAgfSBlbHNlIGlmIChjb25maWcucWluaXVVcGxvYWRUb2tlblVSTCkge1xuICAgICAgZ2V0UWluaXVUb2tlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvVXBsb2FkKGZpbGVQYXRoLCBzdWNjZXNzLCBmYWlsLCBvcHRpb25zLCBwcm9ncmVzcywgY2FuY2VsVGFzayk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuRnVuY3Rpb24pIHtcbiAgICAgIGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuID0gY29uZmlnLnFpbml1VXBsb2FkVG9rZW5GdW5jdGlvbigpO1xuICAgICAgaWYgKG51bGwgPT0gY29uZmlnLnFpbml1VXBsb2FkVG9rZW4gJiYgY29uZmlnLnFpbml1VXBsb2FkVG9rZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdxaW5pdSBVcGxvYWRUb2tlbkZ1bmN0aW9uIHJlc3VsdCBpcyBudWxsLCBwbGVhc2UgY2hlY2sgdGhlIHJldHVybiB2YWx1ZScpO1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGRvVXBsb2FkKGZpbGVQYXRoLCBzdWNjZXNzLCBmYWlsLCBvcHRpb25zLCBwcm9ncmVzcywgY2FuY2VsVGFzayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1IHVwbG9hZGVyIG5lZWQgb25lIG9mIFt1cHRva2VuLCB1cHRva2VuVVJMLCB1cHRva2VuRnVuY10nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICAvLyDmraPlvI/kuIrkvKBcbiAgZnVuY3Rpb24gZG9VcGxvYWQoZmlsZVBhdGg6IHN0cmluZywgc3VjY2VzczogYW55LCBmYWlsOiBhbnksIG9wdGlvbnM6IGFueSwgcHJvZ3Jlc3M6IGFueSwgY2FuY2VsVGFzazogYW55KSB7XG4gICAgY29uc29sZS5sb2coYXJndW1lbnRzKTtcblxuICAgIGlmIChudWxsID09IGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuICYmIGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3Fpbml1IFVwbG9hZFRva2VuIGlzIG51bGwsIHBsZWFzZSBjaGVjayB0aGUgaW5pdCBjb25maWcgb3IgbmV0d29ya2luZycpO1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciB1cmwgPSB1cGxvYWRVUkxGcm9tUmVnaW9uQ29kZShjb25maWcucWluaXVSZWdpb24pO1xuICAgIHZhciBmaWxlTmFtZSA9IGZpbGVQYXRoLnNwbGl0KCcvLycpWzFdO1xuICAgIC8vIOWmguaenG9wdGlvbnPpnZ7nqbrvvIzliJnkvb/nlKhvcHRpb25z5Lit55qEa2V55L2c5Li6ZmlsZU5hbWVcbiAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmtleSkge1xuICAgICAgZmlsZU5hbWUgPSBvcHRpb25zLmtleTtcbiAgICB9XG4gICAgdmFyIGZvcm1EYXRhID0ge1xuICAgICAgJ3Rva2VuJzogY29uZmlnLnFpbml1VXBsb2FkVG9rZW5cbiAgICB9O1xuICAgIC8vIOWmguaenOaYryB0cnVl77yM5YiZ5paH5Lu255qEIGtleSDnlLEgcWluaXUg5pyN5Yqh5Zmo5YiG6YWNICjlhajlsYDljrvph40p44CC5aaC5p6c5pivIGZhbHNl77yM5YiZ5paH5Lu255qEIGtleSDkvb/nlKjlvq7kv6Hoh6rliqjnlJ/miJDnmoQgZmlsZW5hbWXjgILpu5jorqTmmK8gdHJ1ZeOAguW7uuiuruS9v+eUqHRydWXvvIzlvq7kv6Hoh6rliqjnlJ/miJDnmoRmaWxlbmFtZeadguS5seS4lOmVv1xuICAgIGlmICghY29uZmlnLnFpbml1U2hvdWxkVXNlUWluaXVGaWxlTmFtZSkge1xuICAgICAgKGZvcm1EYXRhIGFzIGFueSlbJ2tleSddID0gZmlsZU5hbWU7XG4gICAgfVxuICAgIHZhciB1cGxvYWRUYXNrID0gd3gudXBsb2FkRmlsZSh7XG4gICAgICB1cmw6IHVybCBhcyBzdHJpbmcsXG4gICAgICBmaWxlUGF0aDogZmlsZVBhdGgsXG4gICAgICBuYW1lOiAnZmlsZScsXG4gICAgICBmb3JtRGF0YTogZm9ybURhdGEsXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgIHZhciBkYXRhU3RyaW5nID0gcmVzLmRhdGFcbiAgICAgICAgLy8gICAvLyB0aGlzIGlmIGNhc2UgaXMgYSBjb21wYXRpYmlsaXR5IHdpdGggd2VjaGF0IHNlcnZlciByZXR1cm5lZCBhIGNoYXJjb2RlLCBidXQgd2FzIGZpeGVkXG4gICAgICAgIC8vICAgaWYocmVzLmRhdGEuaGFzT3duUHJvcGVydHkoJ3R5cGUnKSAmJiByZXMuZGF0YS50eXBlID09PSAnQnVmZmVyJyl7XG4gICAgICAgIC8vICAgICBkYXRhU3RyaW5nID0gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCByZXMuZGF0YS5kYXRhKVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB2YXIgZGF0YU9iamVjdCA9IEpTT04ucGFyc2UoZGF0YVN0cmluZyk7XG4gICAgICAgICAgLy8g5ou85o6lZmlsZVVybFxuICAgICAgICAgIHZhciBmaWxlVXJsID0gY29uZmlnLnFpbml1QnVja2V0VXJsUHJlZml4ICsgJy8nICsgZGF0YU9iamVjdC5rZXk7XG4gICAgICAgICAgZGF0YU9iamVjdC5maWxlVXJsID0gZmlsZVVybDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhT2JqZWN0KTtcbiAgICAgICAgICBjb25zb2xlLmxvZygndXBsb2FkLnN1Y2Nlc3MnLCByZXMpO1xuXG4gICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIHN1Y2Nlc3MoZGF0YU9iamVjdCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3BhcnNlIEpTT04gZmFpbGVkLCBvcmlnaW4gU3RyaW5nIGlzOiAnICsgZGF0YVN0cmluZylcbiAgICAgICAgICBpZiAoZmFpbCkge1xuICAgICAgICAgICAgZmFpbChlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIGlmIChmYWlsKSB7XG4gICAgICAgICAgZmFpbChlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8g5paH5Lu25LiK5Lyg6L+b5bqmXG4gICAgdXBsb2FkVGFzay5vblByb2dyZXNzVXBkYXRlKChyZXMpID0+IHtcbiAgICAgIHByb2dyZXNzICYmIHByb2dyZXNzKHJlcylcbiAgICB9KVxuXG4gICAgLy8g5Lit5pat5paH5Lu25LiK5LygXG4gICAgY2FuY2VsVGFzayAmJiBjYW5jZWxUYXNrKCgpID0+IHtcbiAgICAgIHVwbG9hZFRhc2suYWJvcnQoKVxuICAgIH0pXG4gIH1cblxuICAvLyDojrflj5bkuIPniZvkupF1cHRva2VuLCB1cmzkuLrlkI7nq6/mnI3liqHlmajojrflj5bkuIPniZvkupF1cHRva2Vu5o6l5Y+jXG4gIGZ1bmN0aW9uIGdldFFpbml1VG9rZW4oY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XG4gICAgd3gucmVxdWVzdCh7XG4gICAgICB1cmw6IGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuVVJMLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gKHJlcykge1xuICAgICAgICB2YXIgdG9rZW4gPSAocmVzLmRhdGEgYXMgYW55KS51cHRva2VuO1xuICAgICAgICBpZiAodG9rZW4gJiYgdG9rZW4ubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbmZpZy5xaW5pdVVwbG9hZFRva2VuID0gdG9rZW47XG4gICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdxaW5pdVVwbG9hZGVyIGNhbm5vdCBnZXQgeW91ciB0b2tlbiwgcGxlYXNlIGNoZWNrIHRoZSB1cHRva2VuVVJMIG9yIHNlcnZlcicpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigncWluaXUgVXBsb2FkVG9rZW4gaXMgbnVsbCwgcGxlYXNlIGNoZWNrIHRoZSBpbml0IGNvbmZpZyBvciBuZXR3b3JraW5nOiAnICsgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICAvLyDpgInmi6nkuIPniZvkupHmlofku7bkuIrkvKDmjqXlj6PvvIzmlofku7blkJHljLnphY3nmoTmjqXlj6PkuK3kvKDovpPjgIJFQ04sIFNDTiwgTkNOLCBOQSwgQVNH77yM5YiG5Yir5a+55bqU5LiD54mb5LqR55qE77ya5Y2O5Lic77yM5Y2O5Y2X77yM5Y2O5YyX77yM5YyX576O77yM5paw5Yqg5Z2hIDUg5Liq5Yy65Z+fXG4gIGZ1bmN0aW9uIHVwbG9hZFVSTEZyb21SZWdpb25Db2RlKGNvZGU6IHN0cmluZykge1xuICAgIHZhciB1cGxvYWRVUkwgPSBudWxsO1xuICAgIHN3aXRjaCAoY29kZSkge1xuICAgICAgY2FzZSAnRUNOJzogdXBsb2FkVVJMID0gJ2h0dHBzOi8vdXAucWluaXVwLmNvbSc7IGJyZWFrO1xuICAgICAgY2FzZSAnTkNOJzogdXBsb2FkVVJMID0gJ2h0dHBzOi8vdXAtejEucWluaXVwLmNvbSc7IGJyZWFrO1xuICAgICAgY2FzZSAnU0NOJzogdXBsb2FkVVJMID0gJ2h0dHBzOi8vdXAtejIucWluaXVwLmNvbSc7IGJyZWFrO1xuICAgICAgY2FzZSAnTkEnOiB1cGxvYWRVUkwgPSAnaHR0cHM6Ly91cC1uYTAucWluaXVwLmNvbSc7IGJyZWFrO1xuICAgICAgY2FzZSAnQVNHJzogdXBsb2FkVVJMID0gJ2h0dHBzOi8vdXAtYXMwLnFpbml1cC5jb20nOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGNvbnNvbGUuZXJyb3IoJ3BsZWFzZSBtYWtlIHRoZSByZWdpb24gaXMgd2l0aCBvbmUgb2YgW0VDTiwgU0NOLCBOQ04sIE5BLCBBU0ddJyk7XG4gICAgfVxuICAgIHJldHVybiB1cGxvYWRVUkw7XG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0OiBpbml0LFxuICAgIHVwbG9hZDogdXBsb2FkLFxuICB9XG59KSgpOyJdfQ==