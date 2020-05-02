import User from './User';
import { getTime } from '../utils/util';
import { QiniuUploaderResData } from '../utils/qiniuUploader'

const qiniuUploader = require('../utils/qiniuUploader');


// 初始化七牛云相关配置
function initQiniu() {
    var options = {
        // bucket所在区域，这里是华北区。ECN, SCN, NCN, NA, ASG，分别对应七牛云的：华东，华南，华北，北美，新加坡 5 个区域
        region: 'NCN',

        // 获取uptoken方法三选一即可，执行优先级为：uptoken > uptokenURL > uptokenFunc。三选一，剩下两个置空。推荐使用uptokenURL，详情请见 README.md
        // 由其他程序生成七牛 uptoken
        uptoken: '',
        // 从指定 url 通过 HTTP GET 获取 uptoken，返回的格式必须是 json 且包含 uptoken 字段，例如： {"uptoken": "0MLvWPnyy..."}
        uptokenURL: 'https://jellyfishmix.com/wx-interchange/file/get_upload_token',
        // uptokenFunc 这个属性的值可以是一个用来生成uptoken的函数，详情请见 README.md
        uptokenFunc: function () { },

        // bucket 外链域名，下载资源时用到。如果设置，会在 success callback 的 res 参数加上可以直接使用的 fileUrl 字段。否则需要自己拼接
        domain: 'https://wx-interchange.oss.jellyfishmix.com',
        // 如果是 true，则文件的 key 由 qiniu 服务器分配 (全局去重)。如果是 false，则文件的 key 使用微信自动生成的 filename。默认是 true。建议使用true，微信自动生成的filename杂乱且长
        shouldUseQiniuFileName: true
    };
    // 将七牛云相关配置初始化进本sdk
    qiniuUploader.init(options);
}

export default class Upload {


    /**
     * 上传本地图片
     * @param imgObject 
     */
    static uploadLocalImg(imgObject: WechatMiniprogram.ChooseImageSuccessCallbackResult) {
        return new Promise((resolve, reject) => {
            // 初始化七牛云配置
            initQiniu();

            console.log(imgObject);
            const userInfo = User.getUserInfoStorage();

            var filePath = imgObject.tempFilePaths[0];
            const chunks = filePath.split('.');
            const time = getTime(userInfo.nickName!);

            // 向七牛云上传
            qiniuUploader.upload(
                filePath,
                (res: QiniuUploaderResData) => {
                    resolve(res);
                },
                (error: any) => {
                    // console.log('上传本地图片错误', error);
                    reject(error);
                },
                null,
                (progress: any) => {
                    // console.log('上传进程', progress);
                },
                // (cancelTask: any) => that.setData({ cancelTask })
                (cancelTask: any) => {
                    console.log('中断上传', cancelTask);
                }
            );
        })
    }


    /**
     * 上传聊天文件
     * @param imgObject 
     */
    static uploadMessageFile(fileObject: WechatMiniprogram.ChooseFile) {
        return new Promise<QiniuUploaderResData>((resolve, reject) => {
            // 初始化七牛云相关参数
            initQiniu();
            // 微信 API 选择文件
            const filePath = fileObject.path;
            const fileName = fileObject.name;

            qiniuUploader.upload(
                filePath,
                (res: QiniuUploaderResData) => {
                    res.fileName = fileName;
                    resolve(res);
                },
                (error: any) => {
                    console.error('error: ' + JSON.stringify(error));
                    reject(error);
                },
                null,
                (progress: any) => {
                    console.log('上传进程为', progress);

                    // console.log('上传进度', progress.progress);
                    // console.log('已经上传的数据长度', progress.totalBytesSent);
                    // console.log('预期需要上传的数据总长度', progress.totalBytesExpectedToSend);
                },
                (cancelTask: any) => {
                    console.log('中断上传', cancelTask);
                }
            );
        })

    }


}

