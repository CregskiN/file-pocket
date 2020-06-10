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
    static deleteMyCollectionFiles(collectionId: string, ids: number[]) {
        return new Promise<Response.DeleteMyCollectionFilesRes>((resove, reject) => {
            const options = {
                url: '/collection/delete_file_list',
                method: 'POST' as "POST",
                data: {
                    collectionId,
                    idList: ids
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

    /**
     * 文件重命名
     * @param uid 
     * @param fileId 
     * @param newFileName 
     */
    static renameFile(uid: string, fileId: string, newFileName: string) {
        return new Promise<Response.FileType>((resolve, reject) => {
            const options = {
                url: '/file/update_file_info',
                method: 'POST' as "POST",
                data: {
                    uid,
                    fileId,
                    newFileName
                }
            };
            Https.request<Request.RenameFileReq, Response.RenameFileRes<Response.FileType>>(options).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err);
            })
        })

    }

    /**
     * 通过fileIds获取文件列表
     * @param fileIds 
     */
    static getShareFileList(fileIds: string[]) {
        return new Promise<Response.FileType[]>((resolve, reject) => {
            const fileInfoList: { fileId: string }[] = [];
            fileIds.forEach(fileId => {
                fileInfoList.push({ fileId })
            })
            const options = {
                url: '/file/query_file_info_list_by_file_id_list',
                method: 'POST' as "POST",
                data: {
                    fileInfoList
                },
                header: {
                    'Content-Type': 'application/json'
                }
            };
            Https.request<Request.GetShareFileListReq, Response.GetShareFileListRes>(options).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }




}