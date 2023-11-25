import React, { useState } from 'react' 
import CustomDatePicker from './CustomDatePicker'

const App = () => {
  const[mydate,setMydate]=useState();
  const[Popup,setPopup]=useState(false);

  const handleTextboxClick=()=>{
    setPopup(true)
  }
  return (
    <div style={{margin:'300px'}}>
      <label>Date </label>
      <input type='text' value={mydate} onFocus={handleTextboxClick}/>
      {Popup &&
      <CustomDatePicker value={mydate} setValue={setMydate} pop={setPopup} />
      
}</div>
  )
}
export default App;