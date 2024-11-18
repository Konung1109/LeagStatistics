import './Seasons.css'
export default function BubleGamesResult({...data}) {
    return <>
            <div >
                <div className='buble-time'>
                    
                        <p>Gm {data.game_number}</p>
                        <p>|</p>
                        <p>{data.game_date_text}</p>
                        <p>|</p>
                        <p>{data.game_time}</p>
                    
                </div>
                
                <div className='buble-game-container'>
                    <div className='buble-result-teams guest'>   
                        <img src={data.team1_logo} alt="" />
                        <p>{data.team1}</p>
                        
                    </div>
                    <div >
                        <div className='buble-result'>
                            <p>{data.team1_score}</p>
                            <p>-</p>
                            <p>{data.team2_score}</p>
                        </div>
                        
                    </div>
                    <div className='buble-result-teams home'>  
                        <p>{data.team2}</p>   
                        <img src={data.team2_logo} alt="" />
                    </div>
                </div>
                    
            </div>
    </>
}