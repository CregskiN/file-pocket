// import * as Response from './response';

declare namespace Request {

    /**
     * Https.request 配置类型
     */
    interface Options<T> {
        url: string;
        method: Method;
        data?: T;
        header?: any;
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

    /**
     * 获取项目组信息 reqData
     */
    interface QueryTeamInfoByTidReq {
        tid: string;
    }

    /**
     * 加入项目组 reqData
     */
    interface EnterTeamReq {
        uid: string;
        tid: string;
    }

    /**
     * 查询项目组文件列表(分页) reqData
     */
    interface QueryTeamFileListReq {
        tid: string;
        pageIndex: number;
        pageSize: number;
    }

    /**
     * 同步文件至项目组类型
     */
    interface SyncFileWithBackendFileType {
        fileKey: string;
        fileHash: string;
        fileName: string;
        fileUrl: string;
        fileSize?: number;
        mimeType: string;
    }

    /**
     * 同步文件至项目组类型 req
     */
    interface SyncFileWithBackendReq {
        tid: string;
        uid: string;
        fileInfoList: SyncFileWithBackendFileType[];
    }

    /**
     * 删除文件
     */
    interface DeleteFilesReq {
        tid: string;
        fileInfoList: {
            fileId: string
        }[];
    }

    /**
     * 获取成员列表
     */
    interface GetMemberListReq {
        tid: string;
    }

    /**
     * 更新项目组信息(重命名 + 更新头像)
     */
    interface UpdateTeamInfoReq {
        tid: string;
        newTeamName?: string;
        newTeamAvatarUrl?: string;
    }

    /**
     * 删除项目组成员
     */
    interface DeleteMemberReq {
        tid: string;
        uid: string;
    }

    /**
     * 添加至个人文件(收藏集)
     */
    interface AddToMyCollectionFromTeamReq {
        uid: string;
        collectionFileList: {
            fileId: string
        }[];
    }

    /**
     * 查询个人文件列表(收藏集列表)
     */
    interface QueryMyCollectionFileListReq {
        uid: string;
        pageIndex: number;
        pageSize: number;
    }

    /**
     * 批量删除个人文件(收藏集)
     */
    interface DeleteMyCollectionFilesReq {
        collectionId: string;
        idList: number[];
    }

    /**
     * 解散群聊
     */
    interface DisbandTeamReq {
        uid: string;
        tid: string;
    }

    /**
     * 文件重命名
     */
    interface RenameFileReq {
        uid: string;
        fileId: string;
        newFileName: string;
    }

    /**
     * 项目组接收来自收藏集的文件
     */
    interface ReceiveFilesFromCollectionReq {
        uid: string;
        tid: string;
        fileInfoList: {
            fileId: string
        }[];
    }

    /**
     * 获取分享的文件列表
     */
    interface GetShareFileListReq {
        fileInfoList: {
            fileId: string;
        }[];
    }

    /**
     * 以关键字搜索项目组内文件
     */
    interface QueryTeamFilesByKeywordsReq {
        tidList: string[];
        keyword: string;
        pageIndex: number;
        pageSize: number;
    }

    /**
     * 获取uid在tid中权限
     */
    interface GetMemberGradeInTeamReq {
        tid: string;
        uid: string;
    }

    type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'DELETE' | 'TRACE' | 'CONNECT';
    type MIME = 'image/jpeg' | string;
}