import './Standings.css'
import { useState, useEffect } from 'react';
import StandingStatistic from './StandingStatistic';
export default function Standings() {
    const [standStatisticData, setStandStatisticData] = useState([]);
    useEffect(() => {
        const fetchStandStatisticData = async () => {
            try {
              const response = await fetch(`http://localhost:5000/statistics/seasonstanding2023`);
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
              const result = await response.json();
              setStandStatisticData(result);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        
          fetchStandStatisticData();
        }, []);
    return <>
    <div class="table-container">
        <div class="table-title">PALS Season 2023</div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>TEAM</th>
                    <th>W</th>
                    <th>P</th>
                    <th>M</th>
                    <th>R+</th>
                    <th>R-</th>
                    <th>RD</th>
                </tr>
            </thead>
                {standStatisticData.map((item, index) => <StandingStatistic key={item.id} index = {index} {...item}></StandingStatistic>)}
            <tbody>
                
            </tbody>
        </table>
    </div>
    </>
}