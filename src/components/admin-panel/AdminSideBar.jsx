import './admin-panel.css'
import ScheduleAdminPanel from './SchduleAdminPanel';
import StandingsAdminPanel from './StandingsAdminPanel';
import StatisticsAdminPanel from './StatisticsAdminPanel';
export default function AdminSideBar({logoutClick, actLocation}) {
    function logoutHandler() {
        logoutClick(true)
    }
    const renderPanel = () => {
        switch (actLocation) {
            case '/':
              return (
                <StatisticsAdminPanel />
              );
            case '/schedule':
              return (
                <ScheduleAdminPanel />
              );
            case '/standings':
              return (
               <StandingsAdminPanel />
              );
            default:
              null
          }
        
    }
    return <>
        <nav>
            <h3>WELCOME ADMIN</h3>
            {renderPanel()}
            <button onClick={logoutHandler}>LOGOUT</button>
        </nav>
    </>
}