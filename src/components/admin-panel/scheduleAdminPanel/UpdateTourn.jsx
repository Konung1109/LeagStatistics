import { useState } from "react";
import FindedTourn from "./FindedTourn";

export default function UpdateTourn({hideClick}) {
    const [activeUpdate, setActiveUpdate] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [updateTourn, setUpdateTourn ] = useState({
           season: '',
           tournDate: '',
           })
           const handleChange = (e) => {
               const { name, value } = e.target;          
               setUpdateTourn({
                   ...updateTourn,
                   [name]: value,
               });
           }
           const handleOverlayClick = (e) => {
            if (e.target.classList.contains('popup-overlay')) {
              hideClick(null);
            }
          };
           const submitHandler = (e) => {
               e.preventDefault();
               if (!updateTourn.season || !updateTourn.tournDate) {
                setErrorMessage("All fields are required.");
                setActiveUpdate(false);
           } else {
            setActiveUpdate(true)
            console.log(updateTourn)
           }
        }
       return (
           <>
           <div className="popup-overlay" onClick={handleOverlayClick}>
           <div className="popup-container">
           <form onSubmit={submitHandler}>
              <div className="form-groups"> 
               <div className="form-group">
                       <label htmlFor="season">Season</label>
                       <input
                       type="number"
                       id="season"
                       name='season'
                       value={updateTourn.season}
                       onChange={handleChange}
                       placeholder="Season"
                       />
                   </div>
                   <div className="form-group">
                       <label htmlFor="tournDate">Tournament Date</label>
                       <input
                       type="date"
                       id="tournDate"
                       name='tournDate'
                       value={updateTourn.tournDate}
                       onChange={handleChange}
                       placeholder="Tournament Date"
                       />
                   </div>
                   </div> 
                   <button type="submit">
                       FIND TOURNAMENT
                   </button>
           </form>
           {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          {activeUpdate && !errorMessage ? (
            <FindedTourn />
          ) : (
            <p>There is no tournament like this!</p>
          )}
           </div>
           </div>
           </>
       )
}