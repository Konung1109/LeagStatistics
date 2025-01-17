import { useState } from "react"

export default function AddGame() {
    const [addGameData, setGameData ] = useState({
        season: '',
        tournDate: '',
        gameNum: '',
        teamName1: '',
        teamName2: '',
        teamTag1: '',
        teamTag2: ''
        })
        const handleChange = (e) => {
            const { name, value } = e.target;          
            setGameData({
                ...addGameData,
                [name]: value,
            });
        }
        const submitHandler = (e) => {
            e.preventDefault();
            console.log(addGameData)
        }
    return (
        <>
        <form onSubmit={submitHandler}>
            
            <div className="form-group">
                    <label htmlFor="season">Season</label>
                    <input
                    type="number"
                    id="season"
                    name='season'
                    value={addGameData.season}
                    onChange={handleChange}
                    placeholder="Season"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gameNum">Game Number</label>
                    <input
                    type="text"
                    id="gameNum"
                    name='gameNum'
                    value={addGameData.gameNum}
                    onChange={handleChange}
                    placeholder="Game Number"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="tournDate">Tournament Date</label>
                    <input
                    type="date"
                    id="tournDate"
                    name='tournDate'
                    value={addGameData.tournDate}
                    onChange={handleChange}
                    placeholder="Tournament Date"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="teamName1">Team 1 Name</label>
                    <input
                    type="text"
                    id="teamName1"
                    name='teamName1'
                    value={addGameData.teamName1}
                    onChange={handleChange}
                    placeholder="Team 1 Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="teamName2">Team 2 Name</label>
                    <input
                    type="text"
                    id="teamName2"
                    name='teamName2'
                    value={addGameData.teamName2}
                    onChange={handleChange}
                    placeholder="Team 2 Name"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="teamTag1">Team 1 Tag</label>
                    <input
                    type="text"
                    id="teamTag1"
                    name='teamTag1'
                    value={addGameData.teamTag1}
                    onChange={handleChange}
                    placeholder="Team 1 Tag"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="teamTag2">Team 2 Tag</label>
                    <input
                    type="text"
                    id="teamTag2"
                    name='teamTag2'
                    value={addGameData.teamTag2}
                    onChange={handleChange}
                    placeholder="Team 2 Tag"
                    />
                </div>
                <button type="submit">
                    ADD GAME
                </button>
        </form>
        </>
    )
}