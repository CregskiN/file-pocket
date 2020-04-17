import { TeamType, OfficialTeam } from '../miniprogram/utils/typing';

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

    // /**
    //  * 获取官方项目组列表 resData
    //  */
    // interface GetOfficialTeamListData {
    //     teamUserList: OfficialTeam[];
    // }

    // /**
    //  * 获取我加入的项目组列表 resData
    //  */
    // interface GetJoinedTeamListData {
    //     teamUserList: Team[];
    // }

    // /**
    //  * 获取我管理的项目组列表 resData
    //  */
    // interface GetManagedTeamListData {
    //     teamUserList: Team[];
    // }

    // /**
    //  * 获取我创建的项目组列表 resData
    //  */
    // interface GetCreatedTeamListData {
    //     teamUserList: Team[];
    // }


    type CodeToSessionRes = BaseResponse<LoginData>;
    type AuthorizeRes = BaseResponse<AuthorizeData>;
    type CreateTeamRes = BaseResponse<CreateTeamData>
    type QueryTeamListRes = BaseResponse<QueryTeamListData>;

    type GetOfficialTeamListRes = BaseResponse<OfficialTeam[]>;
    type GetJoinedTeamListRes = BaseResponse<TeamType[]>;
    type GetCreatedTeamListRes = BaseResponse<TeamType[]>;
    type GetManagedTeamListRes = BaseResponse<TeamType[]>;
}