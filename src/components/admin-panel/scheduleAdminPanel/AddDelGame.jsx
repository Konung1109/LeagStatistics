import { useState } from "react";
import AddGame from "./AddGame";
import DellGame from "./DellGame";

export default function AddDelGame({hideClick}) {
    const [formActive, setFormActive] = useState(true)
    function formHandler(choice) {
        setFormActive(choice)
    }
    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('popup-overlay')) {
          hideClick(null);
        }
      };
      
    return (
        <>
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <div className="popup-container">
            <button onClick={() => formHandler(true)}>
                ADD GAME    
            </button>   
            <button onClick={() => formHandler(false)}>
                DELETE GAME     
            </button>   
            {formActive ? (<AddGame />) : (<DellGame />)}
            </div>
            </div>
        
        </>
    )
}