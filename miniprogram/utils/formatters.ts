import moment from 'moment';

/**
 * 格式化项目组信息
 * @param teamInfo 
 */
export function teamInfoFormatter(teamInfo: Response.TeamDetailType | Response.OfficialTeam) {
    if (teamInfo.creationTime) {
        teamInfo.creationTime = moment(teamInfo.creationTime).format('YYYY-MM-DD');
    }
    return teamInfo;
}

/**
 * 格式化项目组列表
 * @param teamList 
 */
export function teamListFormatter(teamList: Response.TeamDetailType[] | Response.OfficialTeam[]) {
    for (const team of teamList) {
        if (team.creationTime) {
            team.creationTime = moment(team.creationTime).format('YYYY-MM-DD');
        }
    }
    return teamList;
}


/**
 * 格式化项目组文件
 * @param fileList 
 */
export function fileInfoFormatter(fileList: Response.FileType[]) {
    for (const file of fileList) {
        file.mimeType = file.mimeType.split('/')[1];
    }
}

/**
 * 格式化收藏集文件
 * @param collectionFileList 
 */
export function collectionFileInfoFormatter(collectionFileList: Response.CollectionFileType[]) {
    for (const file of collectionFileList) {
        file.mimeType = file.mimeType.split('/')[1];
    }
    return collectionFileList;
}

/**
 * 格式化成员列表
 * @param memberList 
 */
export function memberListFormatter(memberList: FilePocket.MemberType[]) {
    const newMemberList = memberList;
    newMemberList.forEach(member => {
        if (member.creationTime) {
            member.creationTime = moment(member.creationTime).format('YYYY-MM-DD');
        }
    })
    return newMemberList;
}