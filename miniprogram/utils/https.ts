import config from '../config/config';






class Https {

    /**
     * 封装的Promise
     * @T request中data的类型
     * @P promise中resolve接收的类型
     * @param url 
     * @param method 
     * @param data 
     */
    static request<T, P>(options: Request.Options<T>) {
        const { url, method, data } = options;
        const promise = new Promise<P>((resolve, reject) => {
            wx.request({
                url: config.baseUrl + url,
                method: method,
                data: data,
                header: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                success: (res) => {
                    resolve(res.data as P)
                },
                fail: (err) => {
                    reject(err)
                }
            })
        })
        return promise;

    }
}


export default Https;