import { useState } from "react"
import './statSheet/StatSheets.css'
import openCurl  from "../assets/sheet/openCurl.png"
import closeCurl  from "../assets/sheet/closeCurl.png"
export default function YearDropDown({yearData, yearSelected}) {
    const [isOpen, setIsOpen] = useState(false)
    const [prevSeason, setSeason] = useState('2023')
    function handleDropDownOpen() {
        setIsOpen(!isOpen)
      }
      function handleSeasonSelect(prevSeason) {
        setSeason(prevSeason);
        setIsOpen(false)
        yearSelected(prevSeason)
    }
    const years = yearData
    return(
     <>
        <div>
            <div className="tab-filter" onClick={handleDropDownOpen} >{prevSeason} <img src={isOpen ? closeCurl: openCurl}></img></div>
            {isOpen && (
              <ul id="dropdown">
                  {years.map((year) => (<li key={year.id} onClick={() => handleSeasonSelect(year.year)}><p>{year.year}</p></li>))}
              </ul>
            )}
        </div>
    </>)
}