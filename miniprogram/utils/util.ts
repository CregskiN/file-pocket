import moment from 'moment';
/**
 * 获取
 */
export function getWindowInfo() {
	return new Promise<WechatMiniprogram.GetSystemInfoSuccessCallbackResult>((resolve, reject) => {
		wx.getSystemInfo({
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})

}


/**
 * wx.getSetting的Promise封装
 */
export function getSetting() {
	return new Promise<WechatMiniprogram.GetSettingSuccessCallbackResult>((resolve, reject) => {
		wx.getSetting({
			success: (res) => {
				resolve(res);
			},
			fail: (err) => {
				reject(err);
			}
		})
	})
}


/**
 * 检查response中是否有报错相关
 * @param res 
 */
export function checkRes(res: any) {

}

/**
 * 获取事件
 * @param nickName 用户昵称
 * @param ext 扩展名 jpeg png等
 */
export function getTime(nickName: string, ext: string) {
	return moment().format('YYYY-MM-DD');
}


