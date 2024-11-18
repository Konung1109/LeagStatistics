import './Seasons.css' 
import lublinHerb from '../../../assets/seasons/lublin-herb.png'

import BubleGames from './BubleGames';
const logoMapping = {
    lublinHerb: lublinHerb
    
};
export default function BubleContainer({ prevBuble, handleBubleSelect, ...item }) {
    const isActive = prevBuble === item.id;
    
    
    const logoUrl = logoMapping[item.logo] || null;
    return (
        <div className='buble'>
            <div>
            <div id='buble-info' className={isActive ? '': 'buble-wide'} onClick={() => handleBubleSelect(item.id)} >
                <img id='buble-img' src={logoUrl} alt="" />
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.bubleDate}</p>
                </div>
            </div>
            {isActive ? <BubleGames bubleInd = {prevBuble} ></BubleGames>: null} 
            </div>
            
        </div>
    )
}