import React from "react";
import { useState } from "react";

export default function TabFilter( {children, data, isOpen, onToggle, filterSelect} ) {
    const [prevChoice, choiceSelected] = useState(children)
    

    function clickHandler(prevChoice) {
        choiceSelected(prevChoice)
        filterSelect(prevChoice)
        onToggle()
    }
    return (
         
        <div>
            <div onClick={onToggle} style={{ cursor: 'pointer' }}>
                {prevChoice} 
            </div>
            {isOpen && (
                <ul id="dropdown">
                    {data.map((item) => (
                        <li key={item} onClick={() => clickHandler(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div> 
       
    )
}