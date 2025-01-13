import { useState } from 'react'
import '../admin-panel.css'
import FindedPlayer from './findedPlayer'
export default function FindPlayerTab({playerFindData}) {
    const [playerId, setDelId] = useState('')
    const handleChange = (e) => {
        setDelId(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
   
      };
return (
    <>
<FindedPlayer  playerData = {playerFindData}/>
<form onSubmit={handleSubmit}>
<div className="form-group">
                    <label htmlFor="playerId">Please, type player ID for delete</label>
                    <input
                    type="number"
                    id="playerId"
                    name='playerId'
                    value={playerId}
                    onChange={handleChange}
                    placeholder="Player ID"
                    />
                </div>
<button type='submit'>
     DELETE PLAYER       
</button>
</form>
</>    
)
}