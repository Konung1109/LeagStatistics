export default function StandingStatistic({index, ...data}) {
    return <>
                <tr >
                    <td>{index + 1}</td>
                    <td>{data.team_name}</td>
                    <td>{data.wins}</td>
                    <td>{data.losses}</td>
                    <td>{data.matches_played}</td>
                    <td>{data.runs_scored}</td>
                    <td>{data.runs_allowed}</td>
                    <td>{data.run_difference}</td>
                </tr>
    </>
}