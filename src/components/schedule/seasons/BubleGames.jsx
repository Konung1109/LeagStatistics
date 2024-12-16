import './Seasons.css'

import BubleGamesResult from './BubleGamesResult'
import { useState, useEffect } from 'react'

export default function BubleGames({bubleInd, season}) {
    const [bubleGamesDataPrev, setBubleGamesData] = useState([]);
    
    useEffect(() => {
        const fetchBubleGamesData = async () => {
            try {
              const response = await fetch(`http://localhost:5000/statistics/bublegames?season=${season}&bId=${bubleInd}`);
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const result = await response.json();
              setBubleGamesData(result);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        
          fetchBubleGamesData();
        }, [bubleInd, season]);
        
    return <>
        <div className='buble-game'>
            {bubleGamesDataPrev.map((item) => <BubleGamesResult key = {item.id}  {...item}></BubleGamesResult>)}
                
                
        </div> 
    </>
}