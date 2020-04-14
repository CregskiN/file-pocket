declare namespace Response {
    



    interface BaseResponse<T> extends WechatMiniprogram.RequestSuccessCallbackResult{
        success: boolean;
        stateCode: number;
        stateMsg: string;
        data: T
    }

    interface LoginRes {
        openid?: string;
        session_key?: string;
    }

    export type CodeToSessionRes = BaseResponse<LoginRes>


}