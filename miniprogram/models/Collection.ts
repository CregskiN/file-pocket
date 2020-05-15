import Https from "../utils/https";

export default class Collection {

    /**
     * 从项目组添加文件至个人文件(收藏集)
     * @param uid 
     * @param fileIds 
     */
    static addToMyCollectionFromTeam(uid: string, fileIds: string[]) {
        return new Promise<Response.AddToMyCollectionFromTeamRes>((resolve, reject) => {
            const collectionFileList: any[] = [];
            for (const fileId of fileIds) {
                collectionFileList.push({ fileId })
            }
            
            const options = {
                url: '/collection/added_file_list_from_team',
                method: 'POST' as "POST",
                data: {
                    uid,
                    collectionFileList
                },
                header: {
                    'Content-Type':'application/json'
                }
            };
            Https.request<Request.AddToMyCollectionFromTeamReq, Response.AddToMyCollectionFromTeamRes>(options).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }


    /**
     * 查询个人文件列表(收藏集)
     * @param uid 
     * @param pageIndex 
     */
    static queryMyCollectionFileList(uid: string, pageIndex: number) {
        return new Promise<Response.CollectionFileType[]>((resolve, reject) => {
            const options = {
                url: '/collection/query_file_list_by_uid',
                method: 'GET' as "GET",
                data: {
                    uid,
                    pageIndex,
                    pageSize: 10
                }
            };
            Https.request<Request.QueryMyCollectionFileListReq, Response.QueryMyCollectionFileListRes>(options).then(res => {
                resolve(res.data);
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
        return new Promise<Response.CollectionFileType>((resolve, reject) => {
            const options = {
                url: '/file/update_file_info',
                method: 'POST' as "POST",
                data: {
                    uid,
                    fileId,
                    newFileName
                }
            };
            Https.request<Request.RenameFileReq, Response.RenameFileRes<Response.CollectionFileType>>(options).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err);
            })
        })

    }
}