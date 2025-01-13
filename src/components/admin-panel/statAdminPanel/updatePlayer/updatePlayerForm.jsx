import { useState } from 'react';
import './updatePlayerForm.css'; // Стилі для двоколонної форми

export default function EditPlayerForm() {
    const formFields = [
    { label: 'Player Number', name: 'playerNum', type: 'number', placeholder: 'Player Number' },
    { label: 'Player Name', name: 'playerName', type: 'text', placeholder: 'Player Name' },
    { label: 'Player Surname', name: 'playerSurname', type: 'text', placeholder: 'Player Surname' },
    { label: 'Position', name: 'playerPos', type: 'text', placeholder: 'Position (e.g., LF)' },
    { label: 'Team Tag', name: 'playerTeam', type: 'text', placeholder: 'Team Tag' },
    { label: 'Games', name: 'G', type: 'number', placeholder: 'Games' },
    { label: 'At Bats (AB)', name: 'AB', type: 'number', placeholder: 'At Bats' },
    { label: 'Runs (R)', name: 'R', type: 'number', placeholder: 'Runs' },
    { label: 'Hits (H)', name: 'H', type: 'number', placeholder: 'Hits' },
    { label: 'Doubles (2B)', name: '_2B', type: 'number', placeholder: 'Doubles' },
    { label: 'Triples (3B)', name: '_3B', type: 'number', placeholder: 'Triples' },
    { label: 'Home Runs (HR)', name: 'HR', type: 'number', placeholder: 'HR' },
    { label: 'Run Batted In (RBI)', name: 'RBI', type: 'number', placeholder: 'RBI' },
    { label: 'Walk (BB)', name: 'BB', type: 'number', placeholder: 'BB' },
    { label: 'Strikeout (K)', name: 'K', type: 'number', placeholder: 'K' },
    { label: 'Average (AVG)', name: 'AVG', type: 'number', step: '0.001', placeholder: 'AVG' },
    { label: 'On-base Perc. (OBP)', name: 'OBP', type: 'number', step: '0.001', placeholder: 'OBP' },
    { label: 'BA/RSP', name: 'BA_RSP', type: 'number', step: '0.001', placeholder: 'BA_RSP' },
    { label: 'Full Team', name: 'fteam', type: 'text', placeholder: 'Full Team' }
];
    const [playerData, setPlayerData] = useState({
        playerId: '',
        playerNum: '',
        playerName: '',
        playerSurname: '',
        playerPos: '',
        playerTeam: '',
        G: '',
        AB: '',
        R: '',
        H: '',
        _2B: '',
        _3B: '',
        HR: '',
        RBI: '',
        BB: '',
        K: '',
        AVG: '',
        OBP: '',
        BA_RSP: '',
        fteam: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPlayerData({
            ...playerData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!playerData.playerId) {
            alert('Player ID is required!');
            return;
        }
        setPlayerData({
            playerId: '',
            playerNum: '',
            playerName: '',
            playerSurname: '',
            playerPos: '',
            playerTeam: '',
            G: '',
            AB: '',
            R: '',
            H: '',
            _2B: '',
            _3B: '',
            HR: '',
            RBI: '',
            BB: '',
            K: '',
            AVG: '',
            OBP: '',
            BA_RSP: '',
            fteam: ''
        });
        console.log(playerData)
    };

    return (
        <form onSubmit={handleSubmit} className="edit-player-form">
            <div className='form-column'>
            <div className="form-group">
                        <label htmlFor="playerId">Player ID</label>
                        <input
                            type="number"
                            id="playerId"
                            name="playerId"
                            value={playerData.playerId}
                            onChange={handleChange}
                            placeholder="Player ID"
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
            <button type="submit" className="submit-btn">Save Changes</button>
        </form>
    );
}
