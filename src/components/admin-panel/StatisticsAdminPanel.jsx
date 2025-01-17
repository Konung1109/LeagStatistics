import { useState } from "react"
import AddDelPlayer from "./statAdminPanel/add-delPlayer"
import AddDellTeam from "./statAdminPanel/AddDelTeam/Add-DellTeam";
import AddDelYear from "./statAdminPanel/AddDelYear/AddDelYear";
import UpdatePlayer from "./statAdminPanel/updatePlayer/UpdatePlayer";
export default function StatisticsAdminPanel() {
    const [activeContent, setActiveContent] = useState(null)
    const renderPanelContent = () => {
        switch (activeContent) {
          case "addDeleteYear":
            return <AddDelYear hideClick={setActiveContent}/>;
          case "updatePlayer":
            return <UpdatePlayer hideClick = {setActiveContent}/>;
          case "addDeleteTeam":
            return <AddDellTeam hideClick={setActiveContent}/>;
          case "addDeletePlayer":
            return <AddDelPlayer hideClick={setActiveContent}/>;
          default:
            return null;
        }
      };
      
      
    return (
        <>
        <button onClick={() => setActiveContent("addDeleteYear")}>ADD/DELETE YEAR</button>
        <button onClick={() => setActiveContent("updatePlayer")}>UPDATE PLAYER</button>
        <button onClick={() => setActiveContent("addDeleteTeam")}>ADD/DELETE TEAM</button>
        <button onClick={() => setActiveContent("addDeletePlayer")}>ADD/DELETE PLAYER</button>
        {renderPanelContent()}
        </>
    )
}