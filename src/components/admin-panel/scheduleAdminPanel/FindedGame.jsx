import { useState } from "react";

export default function FindedGame() {
    const [findedGame, setFindedGame ] = useState({
        gameDateUpdate: '',
        gameNum: '',
        teamName1: '',
        teamName2: '',
        teamTag1: '',
        teamTag2: '',
        teamScore1: '',
        teamScore2: '',
        gameTime: ''
            })
            const handleChange = (e) => {
                   const { name, value } = e.target;          
                   setFindedGame({
                       ...findedGame,
                       [name]: value,
                   });
               }
            
            const submitHandler = (e) => {
                   e.preventDefault();
                   console.log(findedGame)
            }
           return (
               <>
               <form onSubmit={submitHandler}>
                    <div className="form-groups">
                        <div className="form-group">
                           <label htmlFor="gameNum">Game Number</label>
                           <input
                           type="number"
                           id="gameNum"
                           name='gameNum'
                           value={findedGame.gameNum}
                           onChange={handleChange}
                           placeholder="Game Number"
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="gameDateUpdate">Game Date</label>
                           <input
                           type="text"
                           id="gameDateUpdate"
                           name='gameDateUpdate'
                           value={findedGame.gameDateUpdate}
                           onChange={handleChange}
                           placeholder="Game Date (np. Saturday Jun 22)"
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="gameTime">Game Time</label>
                           <input
                           type="text"
                           id="gameTime"
                           name='gameTime'
                           value={findedGame.gameTime}
                           onChange={handleChange}
                           placeholder="Game Time (np. 09:00)"
                           />
                       </div>
                       </div>
                       <div className="form-groups">
                       <div>
                       <div className="form-group">
                           <label htmlFor="teamName1">Team 1 Name</label>
                           <input
                           type="text"
                           id="teamName1"
                           name='teamName1'
                           value={findedGame.teamName1}
                           onChange={handleChange}
                           placeholder="Team 1 Name"
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="teamTag1">Team 1 Tag</label>
                           <input
                           type="text"
                           id="teamTag1"
                           name='teamTag1'
                           value={findedGame.teamTag1}
                           onChange={handleChange}
                           placeholder="Team 1 Tag"
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="teamScore1">Team 1 Score</label>
                           <input
                           type="number"
                           id="teamScore1"
                           name='teamScore1'
                           value={findedGame.teamScore1}
                           onChange={handleChange}
                           placeholder="Team 1 Score"
                           />
                       </div>
                       </div>
                       <div>
                       <div className="form-group">
                           <label htmlFor="teamName2">Team 2 Name</label>
                           <input
                           type="text"
                           id="teamName2"
                           name='teamName2'
                           value={findedGame.teamName2}
                           onChange={handleChange}
                           placeholder="Team 2 Name"
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="teamTag2">Team 2 Tag</label>
                           <input
                           type="text"
                           id="teamTag2"
                           name='teamTag2'
                           value={findedGame.teamTag2}
                           onChange={handleChange}
                           placeholder="Team 2 Tag"
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="teamScore2">Team 2 Score</label>
                           <input
                           type="number"
                           id="teamScore2"
                           name='teamScore2'
                           value={findedGame.teamScore2}
                           onChange={handleChange}
                           placeholder="Team 2 Score"
                           />
                       </div>
                       </div>
                       </div>
                       <button type="submit">
                           SAVE CHANGES
                       </button>
               </form>
               
               </>
           );
        
    }