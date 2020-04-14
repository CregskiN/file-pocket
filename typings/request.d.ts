declare namespace Request {

    /**
     * Https.request 配置类型
     */
    interface Options<T> {
        url: string;
        method: Method;
        data: T;
    }

    /**
     * code_to_session 接口请求类型
     */
    interface CodeToSessionReq {
        code: string;
    }

    /**
     * login接口授权 请求data类型
     */
    interface AuthorizeReq {
        openid: string;
        username: string;
        avatarUrl: string;
    }

    type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
}