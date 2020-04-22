// interface Config {
//     qiniuRegion: string,
//     qiniuBucketUrlPrefix: string,
//     qiniuUploadToken: string,
//     qiniuUploadTokenURL: string,
//     qiniuUploadTokenFunction: () => void,
//     qiniuShouldUseQiniuFileName: boolean,
// }

// interface Options {
//     region: string;
//     uptoken: string;
//     uptokenURL: string;
//     uptokenFunc: () => void;
//     domain: string;
//     shouldUseQiniuFileName: boolean;
// }

// const defaultConfig = {
//     // bucket 所在区域。ECN, SCN, NCN, NA, ASG，分别对应七牛云的：华东，华南，华北，北美，新加坡 5 个区域
//     qiniuRegion: '',
//     // 七牛云bucket 外链前缀
//     qiniuBucketUrlPrefix: '',

//     // 获取uptoken方法三选一即可，执行优先级为：uptoken > uptokenURL > uptokenFunc。三选一，剩下两个置空。推荐使用uptokenURL，详情请见 README.md
//     // 由其他程序生成七牛 uptoken
//     qiniuUploadToken: '',
//     // 从指定 url 通过 HTTP GET 获取 uptoken，返回的格式必须是 json 且包含 uptoken 字段，例如： {"uptoken": "0MLvWPnyy..."}
//     qiniuUploadTokenURL: 'https://jellyfishmix.com/wx-interchange/file/get_upload_token',
//     // uptokenFunc 这个属性的值可以是一个用来生成uptoken的函数，详情请见 README.md
//     qiniuUploadTokenFunction: function () { },

//     // 如果是 true，则文件的 key 由 qiniu 服务器分配 (全局去重)。如果是 false，则文件的 key 使用微信自动生成的 filename。默认是 true。建议使用true，微信自动生成的filename杂乱且长
//     qiniuShouldUseQiniuFileName: true
// };

// export default class QiniuUploader {
//     private static instance: QiniuUploader;
//     private config?: Config;

//     private constructor() {
//         this.updateConfigWithOptions();
//     }

//     /**
//      * 获取实例
//      */
//     public static getUploader(): QiniuUploader {
//         if (!this.instance) {
//             this.instance = new QiniuUploader();
//         }
//         return this.instance;
//     }

//     updateConfigWithOptions(options?: Options) {
//         if (typeof options === 'undefined') {
//             this.config = defaultConfig;
//         } else {
//             this.config = {
//                 ...this.config,
//                 qiniuRegion: options.region ? options.region : this.config.qiniuRegion
//             }
//         }
//     }

// }