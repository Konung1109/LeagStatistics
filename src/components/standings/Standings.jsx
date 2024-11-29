import './Standings.css'
import YearDropDown from '../YearDropDown';
import { useState, useEffect } from 'react';
import StandingStatistic from './StandingStatistic';
export default function Standings() {
    const [standStatisticData, setStandStatisticData] = useState([]);
    const [prevSeason, setSeason] = useState('2023')
    const [yearData, setYearData] = useState([])
    function handleSeasonSelection(prevSeason) {
      setSeason(prevSeason)
    }
    useEffect(() => {
        const fetchStandStatisticData = async () => {
            try {
              const responseStandData = await fetch(`http://localhost:5000/statistics/seasonstanding2023`);
              const responseYearData = await fetch ('http://localhost:5000/statistics/filters_year')
              
              if (!responseStandData.ok || !responseYearData.ok) {
                throw new Error(`HTTP error! status: ${!responseStandData.ok ? responseStandData.status : responseYearData.status}`);
              }
              const resultStandData = await responseStandData.json();
              const resultYearData = await responseYearData.json();
              
              setStandStatisticData(resultStandData);
              setYearData(resultYearData)
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        
          fetchStandStatisticData();
        }, []);
    return <>
    <div className="standingFilter">
            <h1 >{prevSeason} Season Standings</h1>
            <YearDropDown yearData = {yearData} yearSelected={handleSeasonSelection}></YearDropDown>
    </div>
    <div className="table-container">
        
        <div className="table-title"></div>
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