import { useState } from 'react'
import '../admin-panel.css'
export default function AddForm() {
    const [playerData, setPlayerData] = useState(
        {playerNumb: '',
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
        const handleSubmit = (e) => {
            e.preventDefault();            
        };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="playerNumb">Player number</label>
                    <input
                    type="number"
                    id="playerNumb"
                    name='playerNumb'
                    value={playerData.playerNumb}
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
                <button type="submit" className="submit-btn">
                    ADD PLAYER
                </button>
            </form>
        </>
    )
}