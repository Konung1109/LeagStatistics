import { useState } from 'react';
import '../../admin-panel.css';
export default function AddDellTeam({hideClick}) {
    const [teamData, setTeamData] = useState({
      team: '',
      season: ''
    })
    
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
          hideClick(null);
        }
      };
    const handleChange = (e) => {
      const { name, value } = e.target;
            
      setTeamData({
          ...teamData,
          [name]: value,
          
      });
    }
    const handleSubmit = (e) => {
        e.preventDefault();           
    };
    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className='popup-container'>
            <form onSubmit={handleSubmit}>
            <button type='submit' value={"add"}>
                ADD TEAM     
            </button>   
            <button type='submit' value={"del"}>
                DELETE TEAM     
            </button> 
                <div className="form-group">
                    <label htmlFor="team">Team name</label>
                    <input
                    type="text"
                    id="team"
                    name='team'
                    value={teamData.team}
                    onChange={handleChange}
                    placeholder="Team name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="season">Season</label>
                    <input
                    type="number"
                    id="season"
                    name='season'
                    value={teamData.season}
                    onChange={handleChange}
                    placeholder="Season"
                    />
                </div>
            </form>
          </div>
        </div>
        )
}