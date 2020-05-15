import moment from 'moment';

enum FileType {
    'msword' = 'doc',
    'vnd.openxmlformats-officedocument.wordprocessingml.document' = 'docx',
    'vnd.ms-excel' = 'xls',
    'vnd.openxmlformats-officedocument.spreadsheetml.sheet' = 'xlsx',
    'vnd.openxmlformats-officedocument.presentationml.presentation' = 'pptx',
    'vnd.ms-powerpoint' = 'ppt',
    'pdf' = 'pdf',
    'vnd.rn-realpix' = 'rp',
}

enum teamType {
    'official' = 1,
    'normal' = 2
}

enum userGrade_teamType {
    'create' = 1,
    'join' = 3
}

/**
 * 格式化项目组信息
 * @param teamInfo 
 */
export function teamInfoFormatter(teamInfo: Response.TeamDetailType | Response.OfficialTeam, userGradeInTeam?: number) {
    if (teamInfo.creationTime) {
        teamInfo.creationTime = moment(teamInfo.creationTime).format('YYYY-MM-DD');
    }
    if (userGradeInTeam) {
        teamInfo.teamType = userGrade_teamType[userGradeInTeam] as string;
    } else if (teamInfo.grade) {
        teamInfo.teamType = teamType[teamInfo.grade as number];
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
            teamInfoFormatter(team);
            team.isChecked = false;
        }
    }
    return teamList;
}

export function fileFormatter(file: Response.FileType) {
    const newFile = file;
    const chunks = newFile.mimeType.split('/');
    if (chunks.length === 2) {
        if ((FileType as any)[(chunks[1] as any)]) {
            newFile.mimeType = (FileType as any)[(chunks[1] as any)];
        } else {
            newFile.mimeType = chunks[1];
        }
    }
    return newFile;
}

/**
 * 格式化文件列表
 * @param fileList 
 */
export function fileListFormatter(fileList: Response.FileType[]) {
    const newFileList = fileList;

    for (const file of newFileList) {
        const chunks = file.mimeType.split('/');
        if (chunks.length === 2) {
            if ((FileType as any)[(chunks[1] as any)]) {
                file.mimeType = (FileType as any)[(chunks[1] as any)];
            } else {
                file.mimeType = chunks[1];
            }
        }
    }
    return newFileList;
}


/**
 * 格式化收藏集文件
 * @param collectionFileList 
 */
export function collectionFileListFormatter(collectionFileList: Response.CollectionFileType[]) {
    for (const file of collectionFileList) {
        const chunks = file.mimeType.split('/');
        if ((FileType as any)[(chunks[1] as any)]) {
            file.mimeType = (FileType as any)[(file.mimeType.split('/')[1] as any)];
        } else {
            file.mimeType = chunks[1];
        }
    }
    return collectionFileList;
}

/**
 * 收藏集文件列表格式化
 * @param collectionFile 
 */
export function collectionFileFormatter(collectionFile: Response.CollectionFileType) {
    const file = collectionFile;
    const chunks = file.mimeType.split('/');
    if ((FileType as any)[(chunks[1] as any)]) {
        file.mimeType = (FileType as any)[(file.mimeType.split('/')[1] as any)];
    } else {
        file.mimeType = chunks[1];
    }
    return file;
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