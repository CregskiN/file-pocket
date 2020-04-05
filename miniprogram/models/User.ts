// 单例模式
// 将用户信息保存在此

interface GetUserInfoResult extends WechatMiniprogram.UserInfo {

}

class User {

    private constructor() { }

    private static instance?: User;

    /**
     * 获取实例
     */
    static getInstance() {
        if (!(this.instance instanceof User)) {
            this.instance = new User();
        }
        return this.instance;
    }


    /**
     * 提取缓存中的userInfo(不包括open_id)
     */
    getUserInfo(): GetUserInfoResult | null {
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
            return null;
        }
    }

    /**
     * 存储userInfo(不包括open_id)，增量存储。类似于this.serData
     * @param userInfo 
     */
    setUserInfo(userInfo: WechatMiniprogram.UserInfo) {
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
