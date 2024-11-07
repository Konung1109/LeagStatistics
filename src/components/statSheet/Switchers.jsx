
import React, {useState} from "react"
export default function Switchers({onSelect}) {
    const [activeSwitcher, setActSwitcher] = useState('player')

    function switchClickHandler(activeSwitcher) {
        setActSwitcher(activeSwitcher)
        onSelect(activeSwitcher) 
    }
    return (
                <ul id="switcher">
                    <li className={activeSwitcher === 'player' ? 'active-switcher': ''} onClick = {() => switchClickHandler('player')}>Player</li>
                    <li className={activeSwitcher === 'team' ? 'active-switcher': ''} onClick = {() => switchClickHandler('team')}>Team</li>
                </ul>
    )
}