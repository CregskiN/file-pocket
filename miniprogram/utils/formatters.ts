import moment from 'moment';

export function teamInfoFormatter(teamInfo: Response.TeamDetailType) {
    const newTeamInfo = teamInfo;
    newTeamInfo.creationTime = moment(newTeamInfo.creationTime).format('YYYY-MM-DD');
    return newTeamInfo;
}