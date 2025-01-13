import FindingPlayerForm from "../findingPlayerForm";
import UpdatePlayerForm from "./updatePlayerForm";

export default function UpdatePlayer({hideClick}) {
    const handleOverlayClick = (e) => {
  
        if (e.target.classList.contains('popup-overlay')) {
          hideClick(null);
        }
      };
    return (
        <>
        <div className="popup-overlay" onClick={handleOverlayClick}>
            <div className="popup-container">
            <UpdatePlayerForm />
            </div>
        </div>
        
        </>
    )
}