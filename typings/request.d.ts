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
     * code_to_session reqData
     */
    interface CodeToSessionReq {
        code: string;
    }

    /**
     * login接口授权 reqData类型
     */
    interface AuthorizeReq {
        openid: string;
        username: string;
        avatarUrl: string;
    }

    /**
     * 创建项目组 请求reqData
     */
    interface CreateTeamReq {
        uid: string;
        teamName:  string;
        teamAvatarUrl: string;
        teamGrade: number;
    }

    /**
     * 查询项目列表 reqData
     */
    interface QueryTeamListReq {
        uid: string;
    }


    type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
}