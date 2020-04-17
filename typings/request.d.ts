// import * as Response from './response';

declare namespace Request {

    /**
     * Https.request 配置类型
     */
    interface Options<T> {
        url: string;
        method: Method;
        data?: T;
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
        teamName: string;
        teamAvatarUrl: string;
        teamGrade: number;
    }

    /**
     * 查询项目列表 reqData
     */
    interface QueryTeamListReq {
        uid: string;
    }



    /**
     * 获取我加入的项目组列表 reqData
     */
    interface GetJoinedTeamListReq {
        uid: string;
    }

    /**
     * 获取我创建的项目组列表 reqData
     */
    interface GetCreatedTeamListReq {
        uid: string;
    }

    /**
     * 获取官方项目组列表 reqData
     */
    interface GetOfficialTeamListReq {
        uid: string;
    }

    /**
     * 获取我管理的项目组列表 reqData
     */
    interface GetManagedTeamListReq {
        uid: string;
    }

    type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
}