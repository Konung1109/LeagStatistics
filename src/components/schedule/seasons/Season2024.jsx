import BubleContainer from "./BubleContainer"
import '../../statSheet/StatSheets.css'
import { useState, useEffect } from "react"

import YearDropDown from "../../YearDropDown"
export default function Season2024() {
    const [dataPrev, setBubleData] = useState([]);
    const [prevBuble, setBuble] = useState(null);
    const [prevSeason, setSeason] = useState('2023')
    const [dataYear, setDataYear] = useState([])
    
    useEffect(() => {
        const fetchBubleData = async () => {
          try {
            const responseBubleData = await fetch(`http://localhost:5000/statistics/bubles?sId=${prevSeason}`);
            const responseYearData = await fetch ('http://localhost:5000/statistics/filters_year')
            if (!responseBubleData.ok || !responseYearData.ok) {
              throw new Error(`HTTP error! status: ${!responseBubleData.ok ? responseBubleData.status : responseYearData.status}`);
            }
            const resultBubleData = await responseBubleData.json();
            const resultYearData = await responseYearData.json();
            setBubleData(resultBubleData);
            setDataYear(resultYearData)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchBubleData();
      }, [prevSeason]);
      const handleBubleSelect = (id) => {
        setBuble(prevBuble === id ? null : id);
      };
      function handleSeasonSelection(prevSeason) {
        setSeason(prevSeason)
        
      }
    return (
        <section className="season-section">
            <div className="seasonFilter">
            <h1 >{prevSeason} Sesason Schedule</h1>
            <div>
              <YearDropDown yearData = {dataYear} yearSelected={handleSeasonSelection}></YearDropDown>
            </div>
            </div>
            {dataPrev.map((item) => <BubleContainer key={item.id} prevBuble = {prevBuble} season = {prevSeason} handleBubleSelect={handleBubleSelect}  {...item}></BubleContainer>)}
            
        </section>
    )
}