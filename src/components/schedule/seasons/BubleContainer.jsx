import './Seasons.css' 
import lublinHerb from '../../../assets/seasons/lublin-herb.png'
export default function BubleContainer() {
    return (
        <div className='buble'>
            <div className='buble-info'>
                <img id='buble-img' src={lublinHerb} alt="" />
                <div>
                    <h3>Lublin Buble</h3>
                    <p>27.06.2024</p>
                </div>
            </div>
            <div className='buble-game'>
                <div className='buble-time'>
                    <p>Gm 1</p>
                    <p>|</p>
                    <p>Tuesday Oct 1</p>
                </div>
                <div className='buble-result'>   
                        <img src={lublinHerb} alt="" />
                        <p>HL</p>
                        <p>@</p>
                        
                        <img src={lublinHerb} alt="" />
                        <p>WC</p>
                        <p></p>
                </div>
            </div>
        </div>
    )
}