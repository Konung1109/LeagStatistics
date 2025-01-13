import logo from '../../assets/header/ball.png';
import { IMAGES } from './images';
import { useLocation } from 'react-router-dom';
import './Footer.css'
export default function Footer() {
    const location = useLocation()
    if (location.pathname === '/admin-panel') {
    return null;
  }
    return (
    <footer >
        <section className='footer-content'>
            <div className='footer-logo'>
                <img src={logo} alt="" />
                <h1>LeagStatistic</h1>
            </div>  
            <div className='about-us'>
                <h4>ABOUT US</h4>  
                <p> We provide in-depth baseball league statistics, tracking every game, player, and team detail to keep you informed and engaged</p>  
            </div> 
            <div className='information'>
                <h4>INFORMATION</h4>
                <p>SCHEDULE</p>
                <p>STANDINGS</p>
                <p>CONTACT</p>
            </div>
            <div>
                <h4>CONECTIONS WITH US</h4>
                <ul className='contact-icons'>
                    <li><img src={IMAGES[0]} alt="" /></li>
                    <li><img src={IMAGES[1]} alt="" /></li>
                    <li><img src={IMAGES[2]} alt="" /></li>
                </ul>
            </div>
        </section>
    </footer>
    
)}