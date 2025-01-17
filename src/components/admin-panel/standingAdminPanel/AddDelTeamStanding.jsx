import {  useState } from 'react';

export default function AddDellTeamStanding({hideClick}) {
    const [teamData, setTeamData] = useState({
      team: '',
      action: '',
      season: ''
    })
    
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
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
    const handleSubmit = async (e) => {
        e.preventDefault(); 
     
        const { team,season, action} = teamData;

        if (!team ||!season || !action) {
            setError('All fields are required!');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/statistics/addDellTeamStanding', {
              method: action === 'add' ? 'POST' : 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ team, action, season }),
            });
      
            if (!response.ok) {
              const { message } = await response.json();
              setError(message || 'An error occurred');
              return;
            }
      
            setSuccessMessage(action === 'add' ? 'Team standing was added' : 'Team standing was deleted');
            setTeamData({ team: '', action: '', season: '' });
            setError('');
          } catch (err) {
            console.error('Error in team operation:', err);
            setError('An error occurred while processing your request.');
          }
        
        
    };
    return (
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className='popup-container'>
            <form onSubmit={handleSubmit}>
            <button type='submit' name='action' id='add' onClick={handleChange} value={'add'}>
                ADD TEAM     
            </button>   
            <button type='submit' name='action' id='del' onClick={handleChange} value={'del'}>
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
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
            
          </div>
        </div>
        )
}