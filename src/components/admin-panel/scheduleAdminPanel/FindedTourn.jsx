import { useState } from "react";

export default function FindedTourn() {
    const [findedTourn, setFindedTourn ] = useState({
               tournHerb: '',
               tournDateUpdate: '',
               tournName: ''
            })
            const handleChange = (e) => {
                   const { name, value } = e.target;          
                   setFindedTourn({
                       ...findedTourn,
                       [name]: value,
                   });
               }
            
            const submitHandler = (e) => {
                   e.preventDefault();
                   console.log(findedTourn)
            }
           return (
               <>
               <form onSubmit={submitHandler}>
                   <div className="form-group">
                           <label htmlFor="tournHerb">Tournament Herb</label>
                           <input
                           type="text"
                           id="tournHerb"
                           name='tournHerb'
                           value={findedTourn.tournHerb}
                           onChange={handleChange}
                           placeholder="Tournament Herb"
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="tournName">Tournament Name</label>
                           <input
                           type="text"
                           id="tournName"
                           name='tournName'
                           value={findedTourn.tournName}
                           onChange={handleChange}
                           placeholder="Tournament Name"
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="tournDateUpdate">Tournament Date</label>
                           <input
                           type="date"
                           id="tournDateUpdate"
                           name='tournDateUpdate'
                           value={findedTourn.tournDateUpdate}
                           onChange={handleChange}
                           placeholder="Tournament Date"
                           />
                       </div>
                       <button type="submit">
                           SAVE CHANGES
                       </button>
               </form>
               </>
           );
        
    }