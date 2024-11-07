
export default function FilterConcept({text, select}) {
    return (
        <ul key={select} id="stats-filter" className={select === 'player' ? 'player-grid' : 'team-grid'}>
            {select === 'player' ? 
            <>
            <li>{text.num}</li>
            <li >{text.player}</li>
            <li>{text.pos}</li>
            <li >{text.team}</li>         
            <li >{text.games}</li>
            <li >{text.ab}</li>
            <li >{text.r}</li>
            <li >{text.h}</li>
            <li >{text.seb}</li>
            <li >{text.thb}</li>
            <li >{text.hr}</li>
            <li >{text.rbi}</li>
            <li >{text.bb}</li>
            <li >{text.k}</li>
            <li >{text.avg}</li>
            <li >{text.obp}</li>
            <li >{text.barsp}</li>
            </>
                : 
            <>
            <li >{text.team}</li>         
            <li >{text.games}</li>
            <li >{text.ab}</li>
            <li >{text.r}</li>
            <li >{text.h}</li>
            <li >{text.seb}</li>
            <li >{text.thb}</li>
            <li >{text.hr}</li>
            <li >{text.rbi}</li>
            <li >{text.bb}</li>
            <li >{text.k}</li>
            <li >{text.avg}</li>
            <li >{text.obp}</li>
            <li >{text.barsp}</li>
            </>}
        </ul>
    )
}