import User from './User';
import Https from '../utils/https';

export default class Team {
    /**
     * 获取官方项目组列表
     */
    static getOfficialTeamList() {
        return new Promise<Response.OfficialTeam[]>((resolve, reject) => {
            const options = {
                url: '/team/query_official_team_list',
                method: 'GET' as 'GET',
            };
            Https.request<Request.GetOfficialTeamListReq, Response.GetOfficialTeamListRes>(options).then(res => {
                console.log('成功获取官方项目组列表', res);
                resolve(res.data);
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
        return new Promise<Response.TeamDetailType[]>((resolve, reject) => {
            const options = {
                url: '/user/query_joined_team_list_by_uid',
                method: "GET" as "GET",
                data: {
                    uid: uid as string
                },
                header: {
                    'Content-Type': 'application/json'
                }
            };
            Https.request<Request.GetJoinedTeamListReq, Response.GetJoinedTeamListRes>(options).then(res => {
                console.log('成功获取我加入列表', res);
                resolve(res.data);
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
        return new Promise<Response.TeamDetailType[]>((resolve, reject) => {
            const options = {
                url: '/user/query_created_team_list_by_uid',
                method: 'GET' as "GET",
                data: {
                    uid: uid
                }
            };
            Https.request<Request.GetCreatedTeamListReq, Response.GetCreatedTeamListRes>(options).then(res => {
                console.log('成功获取我创建的列表', res);
                resolve(res.data);
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
     * 使用tid查询项目组信息
     * @param tid
     */
    static queryTeamInfoByTid(tid: string) {
        return new Promise<Response.QueryTeamInfoData>((resolve, reject) => {
            const options = {
                url: '/team/query_team_info_by_tid',
                method: 'GET' as "GET",
                data: {
                    tid: tid
                }
            }
            Https.request<Request.QueryTeamInfoByTidReq, Response.QueryTeamInfoRes>(options).then(res => {
                console.log('成功查询到项目组信息', res);
                resolve(res.data);
            }).catch(err => {
                console.log('查询项目组信息失败', err);
                reject(err);
            })
        })

    }

    /**
     * 加入项目组
     * @param tid 
     * @param uid 
     */
    static enterTeamByTidAndUid(tid: string, uid: string) {
        return new Promise<Response.EnterTeamData>((resolve, reject) => {
            const options = {
                url: '/team/enter_team',
                method: 'POST' as "POST",
                data: {
                    tid,
                    uid,
                }
            };
            Https.request<Request.QueryTeamInfoByTidReq, Response.EnterTeamDataRes>(options).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })

    }


    /**
     * 使用tid查询项目组成员列表
     * @param tid 
     */
    static getTeamMemberListByTid(tid: string, pageIndex: number) {
        return new Promise<FilePocket.MemberType[]>((resolve, reject) => {
            const options = {
                url: '/team/query_team_user_list_by_tid',
                method: 'GET' as "GET",
                data: {
                    tid,
                    pageIndex,
                    pageSize: 10
                }
            }
            Https.request<Request.GetMemberListReq, Response.GetMemberListRes>(options).then(res => {
                console.log('成功查询成员列表', res);
                resolve(res.data);
            }).catch(err => {
                console.log('查询成员列表失败', err);
                reject(err);
            })
        })
    }

    /**
     * 查询成员权限等级
     * @param tid 
     * @param uid 
     */
    static getMemberGradeInTeam(tid: string, uid: string) {
        return new Promise<Response.GetMemberGradeInTeamRes>((resolve, reject) => {
            const options = {
                url: '/team/query_user_grade',
                method: 'GET' as 'GET',
                data: {
                    tid,
                    uid,
                }
            }
            Https.request<Request.GetMemberGradeInTeamReq, Response.GetMemberGradeInTeamRes>(options).then(res => {
                console.log(res);
                resolve(res);
            }).catch(err => {
                console.log(err);
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


    /**
     * 更新项目组信息（重命名、更换头像）
     * @param tid 
     * @param newTeamName 
     * @param newTeamValue 
     */
    static updateTeamInfo(tid: string, newTeamName?: string, newTeamAvatarUrl?: string) {
        return new Promise<Response.TeamDetailType>((resolve, reject) => {
            const data: Request.UpdateTeamInfoReq = {
                tid
            };
            if (newTeamName) {
                data.newTeamName = newTeamName;
            } else if (newTeamAvatarUrl) {
                data.newTeamAvatarUrl = newTeamAvatarUrl;
            }

            const options = {
                url: '/team/update_team_info',
                method: 'POST' as "POST",
                data: data
            }
            Https.request<Request.UpdateTeamInfoReq, Response.UpdateTeamInfoRes>(options).then(res => {
                resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    }


    /**
     * 删除成员
     * @param uid 
     * @param tid 
     */
    static deleteMember(uid: string, tid: string) {
        return new Promise<Response.DeleteMemberRes>((resolve, reject) => {
            const options = {
                url: '/team/delete_team_user',
                method: 'POST' as "POST",
                data: {
                    uid,
                    tid,
                }
            };
            Https.request<Request.DeleteMemberReq, Response.DeleteMemberRes>(options).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })

        })
    }


    /**
     * 解散项目组
     * @param tid 
     * @param uid 
     */
    static disbandTeam(tid: string, uid: string) {
        return new Promise<Response.DisbandTeamRes>((resolve, reject) => {
            const options = {
                url: '/team/disband_group',
                method: 'POST' as "POST",
                data: {
                    tid,
                    uid
                }/* ,
                header: {
                    'Content-Type': 'application'
                } */
            };
            Https.request<Request.DisbandTeamReq, Response.DisbandTeamRes>(options).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })

    }

    /**
     * 文件：收藏集 -> 项目组
     * @param tid 
     * @param uid 
     * @param fileIds 
     */
    static receiveFilesFromCollection(tid: string, uid: string, fileIds: string[]) {
        return new Promise((resolve, reject) => {
            const fileInfoList: { fileId: string }[] = [];
            fileIds.forEach(fileId => {
                fileInfoList.push({ fileId })
            })
            const options = {
                url: '/team/add_file_list_to_team_by_file_id_list',
                method: 'POST' as "POST",
                data: {
                    tid,
                    uid,
                    fileInfoList
                },
                header: {
                    'Content-Type': 'application/json'
                }
            };
            Https.request<Request.ReceiveFilesFromCollectionReq, Response.ReceiveFilesFromCollectionRes>(options).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            })
        })
    }

    /**
     * 关键字查询项目组内文件
     * @param tid 
     * @param keyword 
     * @param pageIndex 
     */
    static queryTeamFilesByKeywords(tid: string, keyword: string, pageIndex: number, teamName: string) {
        return new Promise<Response.FileType[]>((resolve, reject) => {
            const options = {
                url: '/team/search_team_file_list_by_keyword',
                method: 'GET' as "GET",
                data: {
                    tid,
                    keyword,
                    pageIndex,
                    pageSize: 10
                }
            };
            Https.request<Request.QueryTeamFilesByKeywordsReq, Response.QueryTeamFilesByKeywordsRes>(options).then(res => {
                const files = res.data;
                for (let i = 0; i < res.data.length; i++) {
                    files[i].teamName = teamName;
                }
                resolve(files);
            }).catch(err => {
                reject(err);
            })
        })
    }
}
