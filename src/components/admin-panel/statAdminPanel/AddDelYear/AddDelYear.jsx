import { useState } from "react"

export default function AddDelYear({hideClick}) {
    const [year, setYear] = useState(null)
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
          hideClick(null);
        }
      };
    const handleChange = (e) => {
        setYear(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const action = e.nativeEvent.submitter.value;
        console.log(action)            
    };
    return (
        <>
        <div className="popup-overlay" onClick={handleOverlayClick}>
          <div className='popup-container'>
            <form onSubmit={handleSubmit}>
            <button type='submit' value={"add"}>
                ADD YEAR     
            </button>   
            <button type='submit' value={"del"}>
                DELETE YEAR     
            </button> 
                <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input
                    type="number"
                    id="year"
                    name='year'
                    value={year}
                    onChange={handleChange}
                    placeholder="Year"
                    />
                </div>
            </form>
          </div>
        </div>
        </>
    )
}