import {  useState } from 'react'
import logo from '../../assets/header/ball.png'
import login from '../../assets/header/user-interface.png'

import headerStyles from  './Header.module.css'
export default function Header({selectedTopic}) {
    const [prevSelect, setSelect] = useState('stats')
    function clickHandler(prevSelect) {
        setSelect(prevSelect)
        selectedTopic(prevSelect)
    }
    
    return (
        <header className={headerStyles.header}>
            <ul className={headerStyles.ul}>
                <img className={headerStyles.img} src={logo} alt="logo" />
                <li className={prevSelect == 'stats' ? headerStyles.active : ''} onClick = {() => clickHandler('stats')}>STATS</li>
                <li className={prevSelect == 'schedule' ? headerStyles.active : ''} onClick = {() => clickHandler('schedule')}>SCHEDULE </li>
                <li className={prevSelect == 'standings' ? headerStyles.active : ''} onClick = {() => clickHandler('standings')}>STANDINGS</li>
            </ul>
            
            <ul className={headerStyles.ul}>
                <li className={prevSelect == 'log in' ? headerStyles.active : ''} onClick = {() => clickHandler('log in')}>LOG IN</li>
                <img className={headerStyles.img} src={login} alt="login" />
            </ul>
        </header>
    )
}