import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./Components/Full_Input";

function App() {


  let[message,setmessage]=useState([{message:'Yo'},{message: 'Bro'}])


    const callback = (inputValue:string)=> {
      setmessage([{message: inputValue},...message])
    }

  return (
    <div className="App">
      <FullInput callback={callback}/>
        {message.map((el,index)=>{
            return(
                <div>{el.message}</div>
            )
        })}


    </div>
  );
}

export default App;
