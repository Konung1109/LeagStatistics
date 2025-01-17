import { useState } from 'react'
import '../admin-panel.css'
import FindedPlayer from './findedPlayer'
import { use } from 'react'
export default function FindPlayerTab({playerFindData}) {
    const [playerId, setDelId] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [success, setSuccess] = useState('')
    const [errorF, setErrorF] = useState(false)
    
    const handleChange = (e) => {
        setDelId(e.target.value)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');
        setSuccess('');
        
        if (!playerFindData.season || !playerId) {
            setErrorMessage('Season and player ID are required');
            return;
          }
          try {
            const response = await fetch('http://localhost:5000/statistics/delPlayer', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    season: playerFindData.season,
                    playerId: playerId,
                }),
            });

            if (!response.ok) {
                const { message } = await response.json();
                setErrorMessage(message || 'Failed to delete player');
                return;
            }

            const { message } = await response.json();
            setSuccess('Player was deleted succesfuly');
            setDelId('')
        } catch (err) {
            console.error('Error deleting player:', err);
            setErrorMessage('Server error');
        }
    };

return (
    <>
<FindedPlayer errorFinding={setErrorF} playerData = {playerFindData}/>
{errorF == true ? null : (<form onSubmit={handleSubmit}>
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
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                {success && <p className="success-message">{success}</p>}              
<button type='submit'>
     DELETE PLAYER       
</button>
</form>)}
</>    
)
}