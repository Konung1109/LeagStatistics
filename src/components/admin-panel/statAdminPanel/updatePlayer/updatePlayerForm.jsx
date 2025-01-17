import { useState } from 'react';
import './updatePlayerForm.css'; 

export default function EditPlayerForm() {
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const formFields = [
    { label: 'Player Number', name: 'numb', type: 'number', placeholder: 'Player Number' },
    { label: 'Player Name', name: 'fname', type: 'text', placeholder: 'Player Name' },
    { label: 'Player Surname', name: 'surname', type: 'text', placeholder: 'Player Surname' },
    { label: 'Position', name: 'pos', type: 'text', placeholder: 'Position (e.g., LF)' },
    { label: 'Team Tag', name: 'team', type: 'text', placeholder: 'Team Tag' },
    { label: 'Games', name: 'games', type: 'number', placeholder: 'Games' },
    { label: 'At Bats (AB)', name: 'ab', type: 'number', placeholder: 'At Bats' },
    { label: 'Runs (R)', name: 'r', type: 'number', placeholder: 'Runs' },
    { label: 'Hits (H)', name: 'h', type: 'number', placeholder: 'Hits' },
    { label: 'Doubles (2B)', name: 'secb', type: 'number', placeholder: 'Doubles' },
    { label: 'Triples (3B)', name: 'thirtb', type: 'number', placeholder: 'Triples' },
    { label: 'Home Runs (HR)', name: 'hr', type: 'number', placeholder: 'HR' },
    { label: 'Run Batted In (RBI)', name: 'rbi', type: 'number', placeholder: 'RBI' },
    { label: 'Walk (BB)', name: 'bb', type: 'number', placeholder: 'BB' },
    { label: 'Strikeout (K)', name: 'k', type: 'number', placeholder: 'K' },
    { label: 'Average (AVG)', name: 'avgg', type: 'number', step: '0.001', placeholder: 'AVG' },
    { label: 'On-base Perc. (OBP)', name: 'obp', type: 'number', step: '0.001', placeholder: 'OBP' },
    { label: 'BA/RSP', name: 'barsp', type: 'number', step: '0.001', placeholder: 'BA_RSP' },
    { label: 'Full Team', name: 'fteam', type: 'text', placeholder: 'Full Team' }
];
    const [playerInt, setPlayerInt] = useState({
        id: '',
        season: ''
    })
    const [playerData, setPlayerData] = useState({
        numb: '',
        fname: '',
        surname: '',
        pos: '',
        team: '',
        g: '',
        ab: '',
        r: '',
        h: '',
        secb: '',
        thirtb: '',
        hr: '',
        rbi: '',
        bb: '',
        Kk: '',
        avgg: '',
        obp: '',
        barsp: '',
        fteam: ''
    });
    const prepareUpdates = (playerData) => {
        const updates = {};
        Object.entries(playerData).forEach(([key, value]) => {
          if (value !== '' && value !== null && value !== undefined) {
            updates[key] = value;
          }
        });
        return updates;
      };
      const handleChangeInt = (e) => {
        const { name, value } = e.target;
        setPlayerInt({
            ...playerInt,
            [name]: value
        });
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayerData({
            ...playerData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!playerInt.id || !playerInt.season) {
            setError('Player ID and Season are required!');
            return;
          }
          const updates = prepareUpdates(playerData);
          try {
            console.log("Sending request with data:", {
                updates,
                season: playerInt.season,
                id: playerInt.id
            });
            const response = await fetch('http://localhost:5000/statistics/updatePlayer', {
              method: 'PUT', 
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ updates, season: playerInt.season, id: playerInt.id }),
            });
        
            if (!response.ok) {
              const error = await response.json();
              setError(`${error.message || 'Something went wrong!'}`);
              return;
            }
        setSuccessMessage('Player updated successfully!');
        setPlayerInt({
            id: '',
            season: ''
        })
        setPlayerData({
        numb: '',
        fname: '',
        surname: '',
        pos: '',
        team: '',
        g: '',
        ab: '',
        r: '',
        h: '',
        secb: '',
        thirtb: '',
        hr: '',
        rbi: '',
        bb: '',
        Kk: '',
        avgg: '',
        obp: '',
        barsp: '',
        fteam: ''
        });
        console.log(updates)
    } catch (error) {
        console.error('Error updating player:', error);
        setError('Failed to update player');
      }
    }

    return (
        <form onSubmit={handleSubmit} className="edit-player-form">
            <div className='form-column'>
            <div className="form-group">
                        <label htmlFor="id">Player ID</label>
                        <input
                            type="number"
                            id="id"
                            name="id"
                            value={playerInt.id}
                            onChange={handleChangeInt}
                            placeholder="Player ID"
                        />
                        
                    </div>
                    <div className='form-group'>
                    <label htmlFor="season">Season</label>
                        <input
                            type="number"
                            id="season"
                            name="season"
                            value={playerInt.season}
                            onChange={handleChangeInt}
                            placeholder="Season"
                        />
                    </div>
                    <p className='warning-text'>Warning: Before making any changes, please ensure you have selected the correct player ID. This will help prevent errors and unnecessary modifications to the player's data. Double-check the ID before applying any changes!</p>
                    <p className='warning-text'>You can check the ID in the "ADD/DEL PLAYER" section in the form to search for the player. </p>
            </div>
            <div className="form-columns">
                {/* Dynamically render fields */}
                <div  className="form-column">
                {formFields.slice(0, 5).map(field => (
                    
                        <div className="form-group">
                            <label htmlFor={field.name}>{field.label}</label>
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={playerData[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                step={field.step}
                            />
                        </div>
                    
                ))}
                </div>

                <div className="form-column">
                    {/* Additional fields */}
                    {formFields.slice(5, 10).map(field => (
                        <div key={field.name} className="form-group">
                            <label htmlFor={field.name}>{field.label}</label>
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={playerData[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                step={field.step}
                            />
                        </div>
                    ))}
                </div>
                <div className="form-column">
                    {/* Additional fields */}
                    {formFields.slice(10, 15).map(field => (
                        <div key={field.name} className="form-group">
                            <label htmlFor={field.name}>{field.label}</label>
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={playerData[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                step={field.step}
                            />
                        </div>
                    ))}
                </div>
                <div className="form-column">
                    {/* Additional fields */}
                    {formFields.slice(15, 19).map(field => (
                        <div key={field.name} className="form-group">
                            <label htmlFor={field.name}>{field.label}</label>
                            <input
                                type={field.type}
                                id={field.name}
                                name={field.name}
                                value={playerData[field.name]}
                                onChange={handleChange}
                                placeholder={field.placeholder}
                                step={field.step}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {error && <p className="error-message">{error}</p>}
            {successMessage && <p className="success-message">{successMessage}</p>}
            <button type="submit" >Save Changes</button>
        </form>
    );
}
