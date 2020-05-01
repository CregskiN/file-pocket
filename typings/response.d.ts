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
    type CreateTeamData = TeamDetailType;

    /**
     * 项目组信息(略)
     */
    interface TeamType {
        tid: string;
        uid: string;
        teamName: string;
        username: string;
        teamAvatarUrl: string;
        userAvatarUrl: string;
        userGrade: number;
        creationTime: string;
    }

    /**
     * 官方项目组信息(略)
     */
    interface OfficialTeam {
        tid: string;
        teamName: string;
        avatarUrl: string;
    }

    /**
     * 项目组信息(详)
     */
    interface TeamDetailType {
        tid: string;
        id?: number;
        teamName: string;
        avatarUrl: string;
        grade: number;
        fileCount: number;
        creationTime: number;
        numberCount: number;
        createdNumberCount: number;
        joinedNumberCount: number;
        managedNumberCount: number;
        modifiedTime?: string;
    }


    /**
     * 进入项目组，获取项目组信息(不包括文件列表)resData
     */
    type EnterTeamData = TeamDetailType;


    /**
     * 文件类型字段
     */
    interface FileType {
        fileId: string;
        fileName: string;
        fileSize: string | number;
        fileUrl: string;
        mimeType: Request.MIME;
        isChecked?: boolean;
        tid: string;
        uid: string;
        username: string;
        modifiedTime?: string;
        creationTime: number;
    }


    /**
     * 上传文件至项目组 resData
     */
    interface UploadFileToTeamData {
        fileId: string;
        key: string;
        hash: string;
        fileName: string;
        fileUrl: string;
        fileSize: number;
        mimeType: string;
        username: string;
    }



    type CodeToSessionRes = BaseResponse<LoginData>;
    type AuthorizeRes = BaseResponse<AuthorizeData>;
    type CreateTeamRes = BaseResponse<CreateTeamData>

    type GetOfficialTeamListRes = BaseResponse<OfficialTeam[]>;
    type GetJoinedTeamListRes = BaseResponse<TeamType[]>;
    type GetCreatedTeamListRes = BaseResponse<TeamType[]>;
    type GetManagedTeamListRes = BaseResponse<TeamType[]>;

    type EnterTeamDataRes = BaseResponse<EnterTeamData>;

    type UploadFileToTeamRes = BaseResponse<UploadFileToTeamData>

    type QueryTeamFileListRes = BaseResponse<FileType[]>
}