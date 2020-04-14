import config from '../config/config';


/**
 * 封装的Promise
 * @T request中data的类型
 * @P promise中resolve接收的类型
 * @param url 
 * @param method 
 * @param data 
 */
export function request<T,P>(url: string, method: WechatMiniprogram.RequestOption['method'], data: T) {

    const promise = new Promise<P>((resolve, reject) => {
        wx.request({
            url: config.baseUrl + url,
            method: method,
            data: data,
            header: {
                'Content-Type': "application/x-www-form-urlencoded"
            },
            success: (res) => {
                resolve(res.data as any)
            },
            fail: (err) => {
                reject(err)
            }
        })
    })
    return promise;

}