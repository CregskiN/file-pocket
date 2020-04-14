
/**
 * 文件类型
 */
export interface FileType {
    fid?: number
    name?: string,
    catagory?: number,
    submitter?: string,
    time?: string,
    isChecked?: boolean;
}

/**
 * 自定义用户信息userInfo类型
 */
export interface CustomUserInfo {
    nickName?: string;
    avatarUrl?: string;
    city?: string;
    country?: string;
    gender?: 0 | 1 | 2;
    language?: 'en' | 'zh_CN' | 'zh_TW';
    province?: string;
    uid?: string;
    username?: string;
    createdTeamCounts?: number;
    managedTeamCounts?: number;
    joinedTeamCounts?: number;
}

/**
 * openid + sessionKey
 */
export type Openid_SessionKeyType = Response.LoginData;


/**
 *  GlobalDataType
 */
export interface GlobalDataType {
    openGid?: string;
    shareTicket?: string;
    userInfo?: CustomUserInfo;
    openid_sessionKey?: Openid_SessionKeyType;
    isLogin?: boolean;
    isAuthorized?: boolean;
}

/**
 * desprated
 */
export enum fileCatagory {
    'doc' = 0,
    'docx' = 1,
    'xls' = 2,
    'xlsx' = 3,
    'ppt' = 4,
    'pptx' = 5,
    'zip' = 6,
    'pdf' = 7,
}