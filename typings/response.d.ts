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

    /**
     * 认证resData
     */
    interface AuthorizeData {
        uid: string;
        username: string;
        avatarUrl: string;
        createdTeamCounts: number;
        managedTeamCounts: number;
        joinedTeamCounts: number;
    }

    /**
     * 创建项目resData
     */
    interface CreateTeamData {
        tid: number;
        gid: number;
        teamName: string;
        avatarUrl: string;
        grade: number;
        numberCounts: number;
        createdNumberCounts: number;
        managedNumberCounts: number;
        joinedNumberCounts: number;
        fileCounts: number;
        creationTime: number;
    }  

    /**
     * 查询uid对应的项目列表resData
     */
    interface QueryTeamListData {
        tid: number;
        uid: number;
        teamName: string;
        username: string;
        teamAvatarUrl: string;
        userAvatarUrl: string;
        userGrade: number;
        creationTim: number;
    }

    type CodeToSessionRes = BaseResponse<LoginData>;
    type AuthorizeRes = BaseResponse<AuthorizeData>;
    type CreateTeamRes = BaseResponse<CreateTeamData>
    type QueryTeamListRes = BaseResponse<QueryTeamListData>;
}