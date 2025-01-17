import { useState } from "react"

export default function AddDelYear({hideClick}) {
    const [yearData, setYear] = useState({year: '', action: ''})
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
          hideClick(null);
        }
      };
    const handleChange = (e) => {
        const {name, value} = e.target
        setYear({
            ...yearData,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { year, action} = yearData;
        console.log(yearData)
        if (!year || !action) {
            setError('All fields are required!');
            return;
        }
        try {
            const response = await fetch('http://localhost:5000/statistics/addDelYear', {
              method: action === 'add' ? 'POST' : 'DELETE',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ year, action }),
            });
      
            if (!response.ok) {
              const { message } = await response.json();
              setError(message || 'An error occurred');
              return;
            }
      
            setSuccessMessage(action === 'add' ? 'Year was added' : 'Year was deleted');
            setYear({ year: '', action: '' });
            setError('');
          } catch (err) {
            console.error('Error in year operation:', err);
            setError('An error occurred while processing your request.');
          }
        
        
                
    };
    return (
        <>
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className='popup-container'>
            <form onSubmit={handleSubmit}>
            <button type='submit' name="action" id="add" onClick={handleChange} value={"add"}>
                ADD YEAR     
            </button>   
            <button type='submit' name="action" id="del" onClick={handleChange} value={"del"}>
                DELETE YEAR     
            </button> 
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input
                    type="number"
                    id="year"
                    name='year'
                    value={yearData.year}
                    onChange={handleChange}
                    placeholder="Year"
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