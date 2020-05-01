import User from './User';
import Https from '../utils/https';

export default class Team {
    /**
     * 获取官方项目组列表
     */
    static getOfficialTeamList() {
        return new Promise((resolve, reject) => {
            const options = {
                url: '/team/query_official_team_list',
                method: 'GET' as 'GET',
            };
            Https.request<Request.GetOfficialTeamListReq, Response.GetOfficialTeamListRes>(options).then(res => {
                console.log('成功获取官方项目组列表', res);
                resolve(res);
            }).catch(err => {
                console.log('获取官方项目组列表失败', err);
                reject(err);
            })
        })
    }

    /**
     * 获取我加入的项目组列表（不包括已管理项目组列表）
     * @param uid 
     */
    static getJoinedTeamList(uid: string) {
        return new Promise((resolve, reject) => {
            const options = {
                url: '/user/query_joined_team_list_by_uid',
                method: "GET" as "GET",
                data: {
                    uid: uid as string
                }
            };
            Https.request<Request.GetJoinedTeamListReq, Response.GetJoinedTeamListRes>(options).then(res => {
                console.log('成功获取我加入列表', res);
            }).catch(err => {
                console.log('获取我加入的项目组列表失败', err);
                reject(err);
            })
        })
    }

    /**
     * 获取我创建的项目列表
     * @param uid
     */
    static getCreatedTeamList(uid: string) {
        return new Promise((resolve, reject) => {
            const options = {
                url: '/user/query_created_team_list_by_uid',
                method: 'GET' as "GET",
                data: {
                    uid: uid
                }
            };
            Https.request<Request.GetCreatedTeamListReq, Response.GetCreatedTeamListRes>(options).then(res => {
                console.log('成功获取我创建的列表', res);
            }).catch(err => {
                console.log('获取我创建的列表失败', err);
                reject(err);
            })
        })
    }


    /**
     * 获取我管理的项目列表
     * @param uid 
     */
    static getManagedTeamList(uid: string) {
        return new Promise((resolve, reject) => {
            const options = {
                url: '/user/query_managed_team_list_by_uid',
                method: 'GET' as "GET",
                data: {
                    uid
                }
            };
            Https.request<Request.GetManagedTeamListReq, Response.GetManagedTeamListRes>(options).then(res => {
                console.log('成功获取我管理的项目列表', res);
                resolve(res);
            }).catch(err => {
                console.log('获取我管理的列表失败', err);
                reject(err);
            })
        })
    }


    /**
     * 进入项目组，使用tid查询项目组信息
     * @param tid
     */
    static getTeamInfoByTid(tid: string) {
        return new Promise<Response.TeamDetailType>((resolve, reject) => {
            const uid = User.getUserInfoStorage().uid;
            const options = {
                url: '/team/query_team_info_by_tid',
                method: 'GET' as "GET",
                data: {
                    uid: uid as string,
                    tid: tid as string
                }
            }
            Https.request<Request.EnterTeamReq, Response.EnterTeamDataRes>(options).then(res => {
                console.log('成功查询到项目组信息', res);
                resolve(res.data);
            }).catch(err => {
                console.log('查询项目组信息失败', err);
                reject(err);
            })
        })

    }


    /**
     * 使用tid查询项目组成员列表
     * @param tid 
     */
    static getTeamUserListByTid(tid: string) {
        return new Promise((resolve, reject) => {
            const options = {
                url: '/team/query_team_user_list_by_tid',
                method: 'GET' as "GET",
                data: {
                    tid
                }
            }
            Https.request(options).then(res => {
                console.log('成功查询成员列表', res);
                resolve(res);
            }).catch(err => {
                console.log('查询成员列表失败', err);
                reject(err);
            })
        })
    }


    /**
     * 使用tid和pageIndex获取项目组文件列表，分页一页10个
     * @param tid 
     * @param pageIndex 
     */
    static queryTeamFileList(tid: string, pageIndex: number) {
        return new Promise<Response.FileType[]>((resolve, reject) => {
            const options = {
                url: '/team/query_team_file_list_order_by_creation_time',
                method: 'GET' as 'GET',
                data: {
                    tid,
                    pageIndex,
                    pageSize: 10,
                }
            }
            Https.request<Request.QueryTeamFileListReq, Response.QueryTeamFileListRes>(options).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }


}
