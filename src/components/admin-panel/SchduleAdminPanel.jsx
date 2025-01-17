import { useState } from "react";
import AddDelYear from "./statAdminPanel/AddDelYear/AddDelYear";
import AddDelTourn from "./scheduleAdminPanel/AddDeleteTourn";
import AddDelGame from "./scheduleAdminPanel/AddDelGame";
import UpdateTourn from "./scheduleAdminPanel/UpdateTourn";
import UpdateGame from "./scheduleAdminPanel/UpdateGame";

export default function ScheduleAdminPanel() {
    
    const [activeContent, setActiveContent] = useState(null)
        const renderPanelContent = () => {
            switch (activeContent) {
              case "AddDeleteYear":
                return <AddDelYear hideClick={setActiveContent}/>;
              case "addDeleteTourn":
                return <AddDelTourn hideClick={setActiveContent}/>;
              case "UpdateTourn":
                return <UpdateTourn hideClick={setActiveContent}/>;
              case "AddDeleteGame":
                return <AddDelGame hideClick={setActiveContent}/>;
              case "UpdateGame":
                return <UpdateGame hideClick={setActiveContent}/>;
              default:
                return null;
            }
          };
    return (
        <>
            <button onClick={() => setActiveContent("addDeleteTourn")}>ADD/DELETE TOURNAMENT</button>
            <button onClick={() => setActiveContent("AddDeleteYear")}>ADD/DELETE YEAR</button>
            <button onClick={() => setActiveContent("AddDeleteGame")}>ADD/DELETE GAME</button>
            <button onClick={() => setActiveContent("UpdateTourn")}>UPDATE TOURNAMENT</button>
            <button onClick={() => setActiveContent("UpdateGame")}>UPDATE GAME</button>
            {renderPanelContent()}
        </>
    )
}