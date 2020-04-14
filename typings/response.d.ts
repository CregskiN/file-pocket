declare namespace Response {

    /**
     * 基类
     */
    interface BaseResponse<T> extends WechatMiniprogram.RequestSuccessCallbackResult {
        success: boolean;
        stateCode: number;
        stateMsg: string;
        data: T
    }

    /**
     * 登陆接口返回结果
     */
    interface LoginData {
        openid?: string;
        session_key?: string;
    }

    interface AuthorizeData {
        uid: string;
        username: string;
        avatarUrl: string;
        createdTeamCounts: number;
        managedTeamCounts: number;
        joinedTeamCounts: number;
    }

    type CodeToSessionRes = BaseResponse<LoginData>;
    type AuthorizeRes = BaseResponse<AuthorizeData>;

}