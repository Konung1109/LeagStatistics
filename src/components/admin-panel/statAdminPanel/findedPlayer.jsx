import { useEffect, useState } from 'react';
import '../admin-panel.css'

export default function FindedPlayer({playerData, errorFinding}) {
    const [findPlayer, setFindPlayer] = useState([])
    const [error, setError] = useState('')

    const fetchDataPlayer = async (e) => {
        setError('');
        setFindPlayer([]);
        if (!playerData) {
            setError('Player data is not provided');
            return;
        }

        const { season, playerName, playerSurname } = playerData;
        try {
          const response = await fetch('http://localhost:5000/statistics/find-player', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                season,
                playerName,
                playerSurname
            }),
            
          });
          if (!response.ok) {
            const { message } = await response.json();
            setError(message || 'An error occurred');
            errorFinding(true)
            return;
          }
    
          const data = await response.json();
          setFindPlayer(data);
        } catch (err) {
          console.error('Error fetching player data:', err);
          setError('Failed to fetch player data');
        }
        
      };
      useEffect(() => {
        fetchDataPlayer();
      }, [playerData]);
    return (
        <>
        {error ? (<p className='error-message'>{error}</p>): (<table className='find-player'>
        <thead>
        <tr className='table-column'>
          <th>ID</th>
          <th>Num</th>
          <th>Player</th>
          <th>Pos</th>
          <th>Team</th>
          <th>G</th>
          <th>AB</th>
          <th>R</th>
          <th>H</th>
          <th>2B</th>
          <th>3B</th>
          <th>HR</th>
          <th>RBI</th>
          <th>BB</th>
          <th>K</th>
          <th>AVG</th>
          <th>OBP</th>
          <th>BA/RSP</th>
        </tr>
        </thead>
        <tbody>
            {findPlayer.map((item, index) => (
                <tr key={index} className='table-column'>
                    <th>{item.id}</th>
                    <th>{item.numb}</th>
                    <th>{item.fname} {item.surname}</th>
                    <th>{item.pos}</th>
                    <th>{item.team}</th>
                    <th>{item.games}</th>
                    <th>{item.ab}</th>
                    <th>{item.r}</th>
                    <th>{item.h}</th>
                    <th>{item.secb}</th>
                    <th>{item.thirtb}</th>
                    <th>{item.hr}</th>
                    <th>{item.rbi}</th>
                    <th>{item.bb}</th>
                    <th>{item.k}</th>
                    <th>{item.avgg}</th>
                    <th>{item.obp}</th>
                    <th>{item.barsp}</th>
                </tr>
            ))}
        </tbody>
</table>)}
        
        </>
    )
}