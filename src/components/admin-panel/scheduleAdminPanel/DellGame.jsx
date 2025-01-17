import { useState } from "react"

export default function DellGame() {
    const [delGameData, setGameData ] = useState({
        season: '',
        tournDate: '',
        gameNum: '',
        })
        const handleChange = (e) => {
            const { name, value } = e.target;          
            setGameData({
                ...delGameData,
                [name]: value,
            });
        }
        const submitHandler = (e) => {
            e.preventDefault();
            console.log(delGameData)
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
                    value={delGameData.season}
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
                    value={delGameData.gameNum}
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
                    value={delGameData.tournDate}
                    onChange={handleChange}
                    placeholder="Tournament Date"
                    />
                </div>
                
                <button type="submit">
                    DELETE GAME
                </button>
        </form>
        </>
    )
}