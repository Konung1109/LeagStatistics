import { useState } from "react";

export default function UpdateStanding({hideClick}) {
    const [standingChange, setStandingChange ] = useState({
            team_name: '',
            wins: '',
            losses: '',
            matches_played: '',
            runs_scored: '',
            runs_allowed: '',
            run_difference: ''
            })
    const [teamStandInt, setTeamStandInt] = useState({
            //id: '',
            season: ''
    })
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const prepareUpdates = (standingChange) => {
        const updates = {};
        Object.entries(standingChange).forEach(([key, value]) => {
          if (value !== '' && value !== null && value !== undefined) {
            updates[key] = value;
          }
        });
        return updates;
      };
                const handleOverlayClick = (e) => {
                    if (e.target.classList.contains('popup-overlay')) {
                      hideClick(null);
                    }
                  };
                const handleChange = (e) => {
                    const { name, value } = e.target;          
                       setStandingChange({
                           ...standingChange,
                           [name]: value,
                       });
                   }
                const handleChangeInt = (e) => {
                    const { name, value } = e.target;          
                    setTeamStandInt({
                        ...teamStandInt,
                        [name]: value,
                    });
                }
                const submitHandler = async (e) => {
                       e.preventDefault();
                       if ( !teamStandInt.season) {
                           setError('Season are required!');
                           return;
                         }
                         const updates = prepareUpdates(standingChange);
                         try {
                           console.log("Sending request with data:", {
                               updates,
                               season: teamStandInt.season,
                              
                           });
                           const response = await fetch('http://localhost:5000/statistics/updateTeamStanding', {
                             method: 'PUT', 
                             headers: {
                               'Content-Type': 'application/json',
                             },
                             body: JSON.stringify({ updates, season: teamStandInt.season }),
                           });
                       
                           if (!response.ok) {
                             const error = await response.json();
                             setError(`${error.message || 'Something went wrong!'}`);
                             return;
                           }
                       setSuccessMessage('Team standing updated successfully!');
                       setTeamStandInt({
                         
                           season: ''
                       })
                       setStandingChange({
                        team_name: '',
                        wins: '',
                        losses: '',
                        matches_played: '',
                        runs_scored: '',
                        runs_allowed: '',
                        run_difference: ''
                       });
                       console.log(updates)
                   } catch (error) {
                       console.error('Error updating team standing:', error);
                       setError('Failed to update team standing');
                     }
                   }
                
               return (
                   <>
                   <div className="popup-overlay" onClick={handleOverlayClick}>
                    <div className="popup-container">
                   <form onSubmit={submitHandler}>
                   <div className="form-group">
                               <label htmlFor="season">Season</label>
                               <input
                               type="number"
                               id="season"
                               name='season'
                               value={teamStandInt.season}
                               onChange={handleChangeInt}
                               placeholder="Season"
                               />
                           </div>
                           <div className="form-groups">
                           <div>
    
                           <div className="form-group">
                               <label htmlFor="team_name">Team Name</label>
                               <input
                               type="text"
                               id="team_name"
                               name='team_name'
                               value={standingChange.team_name}
                               onChange={handleChange}
                               placeholder="Team Name"
                               />
                           </div>
                           
                        </div>
                        <div>
                           <div className="form-group">
                               <label htmlFor="wins">Wins</label>
                               <input
                               type="number"
                               id="wins"
                               name='wins'
                               value={standingChange.wins}
                               onChange={handleChange}
                               placeholder="Wins"
                               />
                           </div>
                           <div className="form-group">
                               <label htmlFor="losses">Loses</label>
                               <input
                               type="number"
                               id="losses"
                               name='losses'
                               value={standingChange.losses}
                               onChange={handleChange}
                               placeholder="Loses"
                               />
                           </div>
                           <div className="form-group">
                               <label htmlFor="matches_played">Matches</label>
                               <input
                               type="number"
                               id="matches_played"
                               name='matches_played'
                               value={standingChange.matches_played}
                               onChange={handleChange}
                               placeholder="Matches"
                               />
                           </div>
                           
                          
                        </div>
                        <div>
                           <div className="form-group">
                               <label htmlFor="runs_scored">R+</label>
                               <input
                               type="number"
                               id="runs_scored"
                               name='runs_scored'
                               value={standingChange.runs_scored}
                               onChange={handleChange}
                               placeholder="R+"
                               />
                           </div>
                           <div className="form-group">
                               <label htmlFor="runs_allowed">R-</label>
                               <input
                               type="number"
                               id="runs_allowed"
                               name='runs_allowed'
                               value={standingChange.runs_allowed}
                               onChange={handleChange}
                               placeholder="R-"
                               />
                           </div>
                           <div className="form-group">
                               <label htmlFor="run_difference">RD</label>
                               <input
                               type="number"
                               id="run_difference"
                               name='run_difference'
                               value={standingChange.run_difference}
                               onChange={handleChange}
                               placeholder="RD"
                               />
                           </div>
                        </div>
                        </div>
                        {error && <p className="error-message">{error}</p>}
                        {successMessage && <p className="success-message">{successMessage}</p>}
                           <button type="submit">
                               SAVE CHANGES
                           </button>
                   </form>
                   </div>
                   </div>
                   </>
               );
}