
import React from "react";
import { useState } from "react";
import openCurl  from "../../assets/sheet/openCurl.png"
import closeCurl  from "../../assets/sheet/closeCurl.png"
export default function TabFilter( {disabled, data, isOpen, onToggle, filterSelect, selectedValue} ) {
    const [prevChoice, choiceSelected] = useState(selectedValue)
    function clickHandler(prevChoice) {
        choiceSelected(prevChoice)
        filterSelect(prevChoice)
        onToggle()
    }
    return (
         
        <div>
            <div onClick={!disabled ? onToggle : undefined} className={`tab-filter ${disabled ? 'disabled': ''}`}>
                {selectedValue} <img src={isOpen ? openCurl: closeCurl}></img>
            </div>
            {isOpen && (
                <ul id="dropdown">
                    {data.map((item) => (
                        <li key={item} onClick={() => clickHandler(item)}>
                            <p>{item}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div> 
       
    )
}