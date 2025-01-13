import { useState } from "react";

export default function FindingPlayerForm({findPlayer}) {
    const [delPlayerData, setDelPlayerData] = useState({
            playerName: '',
            playerSurname: '',
            season: ''
        })
        const handleChange = (e) => {
            const { name, value } = e.target;
            setDelPlayerData({
                ...delPlayerData,
                [name]: value,
            })
        }
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            findPlayer(delPlayerData);

        }
        return (
            <>
            <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="playerName">Player name</label>
                        <input
                        type="text"
                        id="playerName"
                        name='playerName'
                        value={delPlayerData.playerName}
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
                        value={delPlayerData.playerSurname}
                        onChange={handleChange}
                        placeholder="Player surname"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="season">Season</label>
                        <input
                        type="number"
                        id="season"
                        name='season'
                        value={delPlayerData.season}
                        onChange={handleChange}
                        placeholder="Season"
                        />
                    </div>
                    <button type='submit'>
                        SEARCH
                    </button>
    
            </form>
            </>
        )
}