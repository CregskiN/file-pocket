import EventTracking from '../models/EventTracking';

enum FileType {
    'doc' = 'msword',
    'docx' = 'vnd.openxmlformats-officedocument.wordprocessingml.document',
    'xls' = 'vnd.ms-excel',
    'xlsx' = 'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'pptx' = 'vnd.openxmlformats-officedocument.presentationml.presentation',
    'ppt' = 'vnd.ms-powerpoint',
    'pdf' = 'pdf',
    'jpeg' = 'jpeg',
    'png' = 'png'
}

type ftype = 'doc' | 'docx' | 'xls' | 'xlsx' | 'ppt' | 'pptx' | 'pdf';

enum ImageType {
    'png',
    'jpeg',
    'jpg'
}

export default class Viewer {

    /**
     * 文档查看器
     * @param file 
     * @param filePath 
     */
    static viewDocument(file: Response.FileType, uid: string, filePath?: string) {
        return new Promise((resolve, reject) => {
            if (!(FileType as any)[file.mimeType]) {
                console.log(file, (FileType as any)[file.mimeType as any]);
                wx.showToast({
                    title: '该文件不支持在线浏览',
                    icon: 'none'
                })
                resolve({ success: false });
                return;
            } else if (ImageType[file.mimeType as 'png' | 'jpeg' | 'jpg']) {
                wx.previewImage({
                    current: file.fileUrl,
                    urls: [file.fileUrl],
                    success: (res) => {
                        console.log('图片打开成功', res);

                        Viewer.writeHistoty(file);

                        EventTracking.viewTrigger(file.fileId, uid);

                        resolve({
                            success: true
                        });
                    },
                    fail: (err) => {
                        console.log('打开失败', err);
                        wx.showToast({
                            title: '打开失败',
                            icon: 'none'
                        })
                    }
                })
            } else {
                const downloadTask = wx.downloadFile({
                    url: file.fileUrl,
                    success: (res) => {
                        wx.openDocument({
                            filePath: res.tempFilePath,
                            fileType: file.mimeType as ftype,
                            success: (res) => {
                                resolve({
                                    success: true
                                });
                                
                                Viewer.writeHistoty(file);

                                EventTracking.viewTrigger(file.fileId, uid);
                            },
                            fail: (err) => {
                                console.log(err);
                                wx.showToast({
                                    title: '打开失败',
                                    icon: 'none'
                                })
                            }
                        })
                    },
                    fail: (err) => {
                        console.log(err);
                    }
                });
            }
        })


    }

    /**
     * 写入浏览历史
     * @param file 
     */
    static writeHistoty(file: Response.FileType) {
        return new Promise((resolve, reject) => {
            Viewer.getHistory().then(res => {
                const viewHistoryList = res;
                if (!(res instanceof Array)) {
                    res = new Array(file);
                }
                for (let i = 0; i < viewHistoryList.length; i++) {
                    if (viewHistoryList[i].fileId === file.fileId) {
                        viewHistoryList.splice(i, 1);
                        break;
                    }
                }
                file.viewTime = Date.now();
                viewHistoryList.unshift(file);
                wx.setStorage({
                    key: 'VIEWHISTORY',
                    data: (viewHistoryList),
                    success: (res) => {
                        resolve(res);
                    },
                    fail: (err) => {
                        console.log('浏览历史写入失败', err);
                        reject(err);
                    }
                })
            })


        })
    }

    /**
     * 获取浏览历史
     */
    static getHistory() {
        return new Promise<Response.FileType[]>((resolve, reject) => {
            wx.getStorage({
                key: 'VIEWHISTORY',
                success: (res) => {
                    console.log(res);
                    resolve(res.data);
                },
                fail: (err) => {
                    console.log('获取浏览历史失败', err);
                    resolve([]);
                }
            })
        })

    }
}


