import { useState } from 'react'
import '../admin-panel.css'
import FindPlayerTab from './findPlayerTab'
import FindingPlayerForm from './findingPlayerForm'



export default function DelForm() {  
        const [playerData, setData] = useState(null)
        function playerDataHandler(findPlayer) {
          setData(findPlayer)
        }
        
        return (
          <>
          
          <FindingPlayerForm findPlayer = {playerDataHandler}/>
          {playerData ? (<FindPlayerTab  playerFindData = {playerData}/>): null}
          </>
        )

        
        
    
}