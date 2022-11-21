import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./Components/Full_Input";

function App() {


  let[message,setMessage]=useState([{message:'Yo'},{message: 'Bro'}])


    const callback = (inputValue:string)=> {
      setMessage([{message: inputValue},...message])

    }

  return (
    <div className="App">
      <FullInput callback={callback}/>
        {message.map((el,index)=>{
            return(
                <div key={index}>{el.message}</div>
            )
        })}


    </div>
  );
}

export default App;
