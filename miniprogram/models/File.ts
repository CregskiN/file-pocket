import Https from '../utils/https';

export default class File {

    /**
     * 同步上传文件至后端
     * @param fileObject 
     */
    static syncFileWithBackend(uploadToTeamFiles: Request.SyncFileWithBackendReq) {
        return new Promise((resolve, reject) => {
            const options = {
                url: '/team/upload_file_list_to_team',
                method: 'POST' as "POST",
                data: uploadToTeamFiles,
                header: {
                    'Content-Type': 'application/json'
                }
            };
            Https.request<Request.SyncFileWithBackendReq, Response.UploadFileToTeamRes>(options).then(res => {
                console.log(res);
                
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })

    }


}