
export default function StatisticTab({...item}) {
    
    return (
        <ul  id="statistic-tab" className={item.select === 'player' ? 'player-grid' : 'team-grid'}>
            {item.select === 'player' ?  
            <><li>{item.numb}</li>
            <li>{item.fname} {item.surname}</li>
            <li>{item.pos}</li>
            <li>{item.team}</li>
            <li>{item.games}</li>
            <li>{item.ab}</li>
            <li>{item.r}</li>
            <li>{item.h}</li>
            <li>{item.secb}</li>
            <li>{item.thirtb}</li>
            <li>{item.hr}</li>
            <li>{item.rbi}</li>
            <li>{item.bb}</li>
            <li>{item.k}</li>
            <li>{item.avgg}</li>
            <li>{item.obp}</li>
            <li>{item.barsp}</li>
                </> : <>
            <li>{item.team}</li>
            <li>{item.g}</li>
            <li>{item.ab}</li>
            <li>{item.r}</li>
            <li>{item.h}</li>
            <li>{item.secb}</li>
            <li>{item.thirtb}</li>
            <li>{item.hr}</li>
            <li>{item.rbi}</li>
            <li>{item.bb}</li>
            <li>{item.k}</li>
            <li>{item.avgg}</li>
            <li>{item.obp}</li>
            <li>{item.barsp}</li></>}
        </ul>
    )
}