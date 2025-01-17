import { useState } from 'react'
import '../admin-panel.css'
export default function AddForm() {
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [playerData, setPlayerData] = useState({
        playerNum: '',
        playerName: '',
        playerSurname: '',
        playerPos: '',
        playerTeam: '',
        season: ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setPlayerData({
            ...playerData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { playerNum, playerName, playerSurname, playerPos, playerTeam, season } = playerData;

        if (!playerNum || !playerName || !playerSurname || !playerPos || !playerTeam || !season) {
            setError('All fields are required!');
            return;
        }
        console.log('Received data:', playerData);
        try {
            const response = await fetch('http://localhost:5000/statistics/addPlayer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    season,
                    playerName,
                    playerSurname,
                    playerPos,
                    playerTeam,
                    playerNum
                }),
            });

            if (!response.ok) {
                const { message } = await response.json();
                setError(message || 'An error occurred');
                return;
            }

            setSuccessMessage('Player added successfully!');
            setPlayerData({
                playerNum: '',
                playerName: '',
                playerSurname: '',
                playerPos: '',
                playerTeam: '',
                season: ''
            });
            setError('');
        } catch (err) {
            console.error('Error fetching player data:', err);
            setError('Failed to fetch player data');
        }
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="playerNum">Player number</label>
                    <input
                    type="number"
                    id="playerNum"
                    name='playerNum'
                    value={playerData.playerNum}
                    onChange={handleChange}
                    placeholder="Player number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="playerName">Player name</label>
                    <input
                    type="text"
                    id="playerName"
                    name='playerName'
                    value={playerData.playerName}
                    onChange={handleChange}
                    placeholder="Player name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="playerSurname">Player surname</label>
                    <input
                    type="text"
                    id="playerSurname"
                    name='playerSurname'
                    value={playerData.playerSurname}
                    onChange={handleChange}
                    placeholder="Player surname"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="playerPos">Player position</label>
                    <input
                    type="text"
                    id="playerPos"
                    name='playerPos'
                    value={playerData.playerPos}
                    onChange={handleChange}
                    placeholder="Player position"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="playerTeam">Player team</label>
                    <input
                    type="text"
                    id="playerTeam"
                    name='playerTeam'
                    value={playerData.playerTeam}
                    onChange={handleChange}
                    placeholder="Player team"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="season">season</label>
                    <input
                    type="season"
                    id="season"
                    name='season'
                    value={playerData.season}
                    onChange={handleChange}
                    placeholder="Season"
                    />
                </div>
                {error && <p className="error-message">{error}</p>}
                {successMessage && <p className="success-message">{successMessage}</p>}
                <button type="submit" className="submit-btn">
                    ADD PLAYER
                </button>
            </form>
        </>
    )
}