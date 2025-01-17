
import { NavLink, useLocation, useNavigate,  } from 'react-router-dom';
import logo from '../../assets/header/ball.png';

import headerStyles from './Header.module.css';
import LoginForm from '../login/LoginForm';
import { useState, useEffect } from 'react';
import AdminSideBar from '../admin-panel/AdminSideBar';

export default function Header() {
  const [loginStatus, loginStatusSet] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); 
  const [panelActive, setActivePanel] = useState(false)
  const [actLocation, setActLocation] = useState('stat')
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAdmin(true);
    }
  }, []);
  const location = useLocation();
  useEffect(() => {
    setActLocation(location.pathname);
  }, [location]);
  function panelActiveHandler() {
    setActivePanel((prevState) => !prevState)
  }
  function loginHandler() {
    loginStatusSet(true)
  }
  function hideLoginHandler() {
    loginStatusSet(false)
  }
  function handleLoginSuccess(token) {
    setIsAdmin(true); 
    localStorage.setItem("authToken", token); 
  }
  const handleLogout = () => {
    
    setIsAdmin(false);
    localStorage.removeItem("authToken"); 
    
  };
  return (
    <header className={headerStyles.header}>
     
      <ul className={headerStyles.ul}>
        <img className={headerStyles.img} src={logo} alt="logo" />
        <li >
          <NavLink
            to="/"
            
          >
            STATISTICS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/schedule"

          >
            SCHEDULE
          </NavLink>
        </li>
        <li >
          <NavLink
            to="/standings"
   
          >
            STANDINGS
          </NavLink>
        </li>
      </ul>

      <ul className={headerStyles.ul}>
        
          {isAdmin ? (
            <button className={headerStyles.panel_butt} onClick={panelActiveHandler}>{panelActive ? <span className={headerStyles.panel_on}>ON</span>: <span className={headerStyles.panel_off}>OFF</span>} PANEL</button>
            
          ) : (
            <button className={headerStyles.panel_butt} onClick={loginHandler}>LOG IN</button>
          )}
        
        
      </ul>
      {panelActive && isAdmin ? (<AdminSideBar logoutClick = {handleLogout} actLocation = {actLocation} />) : null}
      {loginStatus && <LoginForm hideClick={hideLoginHandler} onLoginSuccess={handleLoginSuccess} /> }
    </header>
  );
}