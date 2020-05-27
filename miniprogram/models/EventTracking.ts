import Https from '../utils/https';

export default class EventTracking {

    static viewTrigger(fileId: string, uid: string) {
        const options = {
            url: '/file/trigger_view_file_online',
            method: 'POST' as 'POST',
            data: {
                fileId,
                uid
            }
        };
        Https.request(options).then(res => {
            console.log('浏览文件埋点提交成功', res)
        }).catch(err => {
            console.log('浏览文件埋点error', err);
        })

    }
}