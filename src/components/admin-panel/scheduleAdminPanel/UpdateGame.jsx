import { useState } from "react";
import FindedGame from "./FindedGame";

export default function UpdateGame({hideClick}) {
    const [activeUpdate, setActiveUpdate] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [updateGame, setUpdateGame ] = useState({
            season: '',
            tournDate: '',
            gameNum: ''
            })
    const handleChange = (e) => {
        const { name, value } = e.target;          
        setUpdateGame({
            ...updateGame,
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
        if (!updateGame.season || !updateGame.tournDate || !updateGame.gameNum) {
         setErrorMessage("All fields are required.");
         setActiveUpdate(false);
    } else {
     setActiveUpdate(true)
     console.log(updateGame)
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
                          value={updateGame.season}
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
                          value={updateGame.tournDate}
                          onChange={handleChange}
                          placeholder="Tournament Date"
                          />
                      </div>
                      <div className="form-group">
                          <label htmlFor="gameNum">Game Number</label>
                          <input
                          type="number"
                          id="gameNum"
                          name='gameNum'
                          value={updateGame.gameNum}
                          onChange={handleChange}
                          placeholder="Game Number"
                          />
                      </div>
                      </div> 
                      <button type="submit">
                          FIND GAME
                      </button>
              </form>
              {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
             {activeUpdate && !errorMessage ? (
               <FindedGame />
             ) : (
               <p>There is no tournament like this!</p>
             )}
              </div>
              </div>
              </>
          )

}