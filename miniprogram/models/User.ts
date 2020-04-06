
interface GetUserInfoResult  {
        avatarUrl?: string;
        city?: string;
        country?: string;
        gender?: 0 | 1 | 2;
        language?: 'en' | 'zh_CN' | 'zh_TW';
        nickName?: string;
        province?: string;
}

class User {

    // private constructor() { }

    // private static instance?: User;

    // /**
    //  * 获取实例
    //  */
    // static getInstance() {
    //     if (!(this.instance instanceof User)) {
    //         this.instance = new User();
    //     }
    //     return this.instance;
    // }


    /**
     * 提取缓存中的userInfo(不包括open_id)
     */
    static getUserInfo(): GetUserInfoResult {
        try {
            let userInfo = wx.getStorageSync('userInfo');
            if (userInfo !== '') {
                userInfo = JSON.parse(userInfo);
            } else {
                userInfo = {};
            }
            return userInfo.userInfo;
        } catch (err) {
            console.log(err);
            return {};
        }
    }

    /**
     * 存储userInfo(不包括open_id)，增量存储。类似于this.serData
     * @param userInfo 
     */
    static setUserInfo(userInfo: WechatMiniprogram.UserInfo) {
        try {
            const oldInfo = this.getUserInfo() || {};
            const newUserInfo = {
                ...oldInfo,
                userInfo
            }
            wx.setStorageSync('userInfo', JSON.stringify(newUserInfo));
        } catch (err) {
            console.log(err);
        }

    }
}



export default User;
