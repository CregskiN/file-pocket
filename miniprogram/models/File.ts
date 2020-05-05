import Https from '../utils/https';

export default class File {

    /**
     * 批量同步文件至后端
     * @param fileObject 
     */
    static syncFileWithBackend(uploadToTeamFiles: Request.SyncFileWithBackendFileType[], tid: string, uid: string) {
        return new Promise<Response.UploadFileToTeamRes>((resolve, reject) => {
            const options = {
                url: '/team/upload_file_list_to_team',
                method: 'POST' as "POST",
                data: {
                    tid,
                    uid,
                    fileInfoList: uploadToTeamFiles
                },
                header: {
                    'Content-Type': 'application/json'
                }
            };
            Https.request<Request.SyncFileWithBackendReq, Response.UploadFileToTeamRes>(options).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }

    /**
     * 批量删除文件
     * @param fileIds 
     * @param tid 
     */
    static deleteFiles(fileIds: string[], tid: string) {
        return new Promise<Response.DeleteMyCollectionFilesRes>((resolve, rejecct) => {
            const fileInfoList = [];
            for (const fileId of fileIds) {
                fileInfoList.push({ fileId })
            }
            const options = {
                url: '/team/delete_file_list_from_team',
                method: 'POST' as "POST",
                data: {
                    tid,
                    fileInfoList
                },
                header: {
                    'Content-Type': 'application/json'
                }
            };
            Https.request<Request.DeleteFilesReq, Response.DeleteFilesRes>(options).then(res => {
                resolve(res);
            }).catch(err => {
                rejecct(err);
            })
        })
    }


    /**
     * 删除收藏集的文件
     * @param collection 
     * @param fileIds 
     */
    static deleteMyCollectionFiles(collectionId: string, fileIds: string[]) {
        return new Promise<Response.DeleteMyCollectionFilesRes>((resove, reject) => {
            const collectionFileList = [];
            for (const fileId of fileIds) {
                collectionFileList.push({ fileId });
            }
            const options = {
                url: '/collection/delete_file_list',
                method: 'POST' as "POST",
                data: {
                    collectionId,
                    collectionFileList
                },
                header: {
                    'Content-Type': 'application/json'
                }
            };
            Https.request<Request.DeleteMyCollectionFilesReq, Response.DeleteMyCollectionFilesRes>(options).then(res => {
                resove(res);
            }).catch(err => {
                reject(err);
            })
        })

    }

    // static syncCollectionFileWithBackend(uploadToTeamFiles: Request.SyncCollectionFileWithBackendFileType[], tid: string, uid: string) {

    // }



}