import { useState } from "react";
import AddDelYear from "./statAdminPanel/AddDelYear/AddDelYear";

import UpdateStanding from "./standingAdminPanel/UpdateStanding";
import AddDellTeamStanding from "./standingAdminPanel/AddDelTeamStanding";

export default function StandingsAdminPanel() {
    const [activeContent, setActiveContent] = useState(null)
            const renderPanelContent = () => {
                switch (activeContent) {
                  case "AddDeleteYear":
                    return <AddDelYear hideClick={setActiveContent}/>;
                  case "AddDeleteTeam":
                    return <AddDellTeamStanding hideClick={setActiveContent}/>;
                  case "UpdateStanding":
                    return <UpdateStanding hideClick={setActiveContent}/>;
                  default:
                    return null;
                }
              };
    return (
        <>
            <button onClick={() => setActiveContent('AddDeleteYear')}>ADD/DELETE YEAR</button>
            <button onClick={() => setActiveContent('UpdateStanding')}>UPDATE STANDING</button>
            <button onClick={() => setActiveContent('AddDeleteTeam')}>ADD/DELETE TEAM</button>
            {renderPanelContent()}
        </>
    )
}