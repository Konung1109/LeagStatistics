import './Seasons.css'
import HL from '../../../assets/seasons/hops.png'
import CL from '../../../assets/seasons/chmielarze.png'
import WW from '../../../assets/seasons/whoops.png'
import WC from '../../../assets/seasons/centaury1.png'
import BW from '../../../assets/seasons/barons.png'
import RK from '../../../assets/seasons/rawa.png'
const teamsLogo = {
    HL: HL,
    CL: CL,
    WW:WW,
    WC:WC,
    BW:BW,
    RK:RK
  };

export default function BubleGamesResult({logo, ...data}) {
    const logoUrlTeam1 = teamsLogo[data.team1_logo]
    const logoUrlTeam2 = teamsLogo[data.team2_logo]
    const team1Score = parseInt(data.team1_score, 10);
    const team2Score = parseInt(data.team2_score, 10);
    const team1Status = team1Score > team2Score ? 'W' : 'L';
    const team2Status = team2Score > team1Score ? 'W' : 'L';
    return <>
            
            <div className='score-card' >
            <div className="team">
                <div className="team-info">
                    <img src={logoUrlTeam1} alt=""></img>
                    <p className="team-name">{data.team1}</p>
                </div>
                <div className={`score ${team1Status === 'W' ? 'win' : 'lose'}`}>
                        {`${team1Status} ${team1Score}`}
                    </div>
            </div>
            <div className="team">
                <div className="team-info">
                    <img src={logoUrlTeam2} alt=""></img>
                    <p className="team-name">{data.team2}</p>
                </div>
                <div className={`score ${team2Status === 'W' ? 'win' : 'lose'}`}>
                        {`${team2Status} ${team2Score}`}
                    </div>
            </div>
            <div className="details">
            <p>Gm {data.game_number} | {data.game_date_text} | {data.game_time}</p>
            </div>
                    
            </div>
                    
           
    </>
}