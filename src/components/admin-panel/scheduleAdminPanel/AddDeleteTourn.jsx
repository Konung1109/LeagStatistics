import { useState } from "react";

export default function AddDelTourn({hideClick}) {
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [tournData, setTournData] = useState({
        tournHerb: '',
        tournName: '',
        tournDate: '', 
        season: '',
        action: ''
    })
    const handleOverlayClick = (e) => {
            if (e.target.classList.contains('popup-overlay')) {
              hideClick(null);
            }
          };
    const handleChange = (e) => {
            const { name, value } = e.target;          
            setTournData({
                ...tournData,
                [name]: value,
                
            });
        }
        const handleSubmit = async (e) => {
            e.preventDefault(); 
         
            const { tournHerb, tournName, tournDate, season, action } = tournData;
    
            if (!tournHerb || !tournDate || !tournName || !action || !season) {
                setError('All fields are required!');
                return;
            }
            try {
                const response = await fetch('http://localhost:5000/statistics/addDelTournament', {
                  method: action === 'add' ? 'POST' : 'DELETE',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ tournHerb, tournDate, tournName, season, action }),
                });
          
                if (!response.ok) {
                  const { message } = await response.json();
                  setError(message || 'An error occurred');
                  return;
                }
          
                setSuccessMessage(action === 'add' ? 'Tournament was added' : 'Tournament was deleted');
                setTournData({
                    tournHerb: '',
                    tournName: '',
                    tournDate: '', 
                    season: '',
                    action: '' 
                });
                setError('');
              } catch (err) {
                console.error('Error in tournament operation:', err);
                setError('An error occurred while processing your request.');
              }
            
            
        };
    return (
        <>
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className='popup-container'>
            <form onSubmit={handleSubmit}>
            <button type='submit' name='action' id='add' onClick={handleChange} value={'add'}>
                ADD TOURNAMENT     
            </button>   
            <button type='submit' name='action' id='del' onClick={handleChange} value={'del'}>
                DELETE TOURNAMENT     
            </button> 
                <div className="form-group">
                    <label htmlFor="tournHerb">Tournament Herb</label>
                    <input
                    type="text"
                    id="tournHerb"
                    name='tournHerb'
                    value={tournData.tournHerb}
                    onChange={handleChange}
                    placeholder="Tournament Herb"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tournName">Tournament Name</label>
                    <input
                    type="text"
                    id="tournName"
                    name='tournName'
                    value={tournData.tournName}
                    onChange={handleChange}
                    placeholder="Tournament Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tournDate">Tournament Date</label>
                    <input
                    type="date"
                    id="tournDate"
                    name='tournDate'
                    value={tournData.tournDate}
                    onChange={handleChange}
                    placeholder="Tournament Date"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="season">Year</label>
                    <input
                    type="number"
                    id="season"
                    name='season'
                    value={tournData.season}
                    onChange={handleChange}
                    placeholder="Season"
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
            </form>
          </div>
        </div>
        </>
    )
}