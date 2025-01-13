import { useState } from 'react'

import '../admin-panel.css'
import AddForm from './addForm';
import DelForm from './delForm';
export default function AddDelPlayer({hideClick}) {
    const [formActive, setFormActive] = useState(true);
    function formHandler(choice) {
        setFormActive(choice)
    }
    const handleOverlayClick = (e) => {
  
      if (e.target.classList.contains('popup-overlay')) {
        hideClick(null);
      }
    };
    return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className='popup-container'>
        <button onClick={() => formHandler(true)}>
            ADD PLAYER     
        </button>   
        <button onClick={() => formHandler(false)}>
            DELETE PLAYER     
        </button> 
        {formActive ? (<AddForm />) : (<DelForm />)}
      </div>
    </div>
    )
}