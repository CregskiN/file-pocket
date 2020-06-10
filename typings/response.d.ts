declare namespace Response {


    // type MimeType = "doc" | "docx" | "xls" | "xlsx" | "ppt" | "pptx" | "pdf";
    type MimeType = 'doc' | 'docx' | 'xls' | 'xlsx' | 'ppt' | 'pptx' | 'pdf' | 'png' | 'jpeg' | 'jpg' | string;

    /**
     * 基类
     */
    interface BaseResponse<T> {
        success: boolean;
        stateCode: number;
        stateMsg: string;
        data: T
    }

    /**
     * 登陆接口返回结果
     */
    interface LoginData {
        openid: string;
        session_key: string;
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
        id: null;
        teamName: string;
        avatarUrl: string;
        grade: null;
        numberCount: null;
        createdNumberCount: null;
        managedNumberCount: null;
        joinedNumberCount: null;
        fileCount: null;
        creationTime: null;
        modifiedTime: null;
        teamType?: string;
    }

    /**
     * 项目组信息(详)
     */
    interface TeamDetailType {
        tid: string;
        id: number | undefined;
        teamName: string;
        avatarUrl: string;
        grade: number;
        fileCount: number;
        creationTime: number | string;
        numberCount: number;
        createdNumberCount: number;
        joinedNumberCount: number;
        managedNumberCount: number;
        modifiedTime: string | undefined;
        isChecked: boolean;
        teamType: string;
    }

    /**
     * 查询项目组信息
     */
    type QueryTeamInfoData = TeamDetailType;

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
        mimeType: MimeType;
        isChecked?: boolean;
        tid: string;
        uid: string;
        username: string;
        modifiedTime?: string;
        creationTime: number | string;
        viewTime?: number;
        teamName?: string;
        id?: number;
    }

    /**
     * 收藏集文件类型
     */
    interface CollectionFileType {
        collectionId: string;
        creationTime: number | string;
        fileId: string;
        fileName: string;
        fileSize: number;
        fileUrl: string;
        id: null;
        mimeType: MimeType;
        modifiedTime: null | number;
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
        mimeType: MimeType;
        username: string;
    }

    /**
     * 获取uid在tid中对应的权限等级
     */
    interface GetMemberGradeInTeamData {
        tid: string;
        uid: string;
        userGrade: number;
    }


    type CodeToSessionRes = BaseResponse<LoginData>;
    type AuthorizeRes = BaseResponse<AuthorizeData>;
    type CreateTeamRes = BaseResponse<CreateTeamData>

    type GetOfficialTeamListRes = BaseResponse<OfficialTeam[]>;
    type GetJoinedTeamListRes = BaseResponse<TeamDetailType[]>;
    type GetCreatedTeamListRes = BaseResponse<TeamDetailType[]>;
    type GetManagedTeamListRes = BaseResponse<TeamDetailType[]>;

    type QueryTeamInfoRes = BaseResponse<QueryTeamInfoData>
    type EnterTeamDataRes = BaseResponse<EnterTeamData>;

    type UploadFileToTeamRes = BaseResponse<null>;

    type QueryTeamFileListRes = BaseResponse<FileType[]>;

    type DeleteFilesRes = BaseResponse<null>;

    type GetMemberListRes = BaseResponse<FilePocket.MemberType[]>;

    type UpdateTeamInfoRes = BaseResponse<Response.TeamDetailType>;

    type DeleteMemberRes = BaseResponse<null>;

    type AddToMyCollectionFromTeamRes = BaseResponse<null>;

    type QueryMyCollectionFileListRes = BaseResponse<CollectionFileType[]>;

    type DeleteMyCollectionFilesRes = BaseResponse<null>;

    type DisbandTeamRes = BaseResponse<null>;

    type RenameFileRes<T> = BaseResponse<T>;

    type ReceiveFilesFromCollectionRes = BaseResponse<null>;

    type GetShareFileListRes = BaseResponse<FileType[]>;

    type QueryTeamFilesByKeywordsRes = BaseResponse<FileType[]>;

    type GetMemberGradeInTeamRes = BaseResponse<GetMemberGradeInTeamData>;
}