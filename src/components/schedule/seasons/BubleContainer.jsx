import './Seasons.css' 
import lublinHerb from '../../../assets/seasons/lublin-herb.png'
import warsawHerb from '../../../assets/seasons/warsawHerb.png'
import wroclawHerb from '../../../assets/seasons/wroclawHerb.png'
import katowiceHerb from '../../../assets/seasons/katowiceHerb.png'
import BubleGames from './BubleGames';
const logoMapping = {
    lublinHerb: lublinHerb,
    warsawHerb: warsawHerb,
    wroclawHerb: wroclawHerb,
    katowiceHerb: katowiceHerb
};
export default function BubleContainer({ prevBuble, season, handleBubleSelect, ...item }) {
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
            {isActive ? <BubleGames bubleInd = {prevBuble} season = {season} ></BubleGames>: null} 
            </div>
            
        </div>
    )
}