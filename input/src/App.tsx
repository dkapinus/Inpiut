import React, {useState} from 'react';
import './App.css';
import {FullInput} from "./Components/Full_Input";
import {Button} from "./Components/Button";
import {Input} from "./Components/Input";


function App() {


  let[message,setMessage]=useState([{message:'Yo'},{message: 'Bro'}])

let [inputValue,setValue]=useState('')

const addMessage =(inputValue:string)=> {
    setMessage([{message: inputValue},...message])
}

const callback=()=> {
      addMessage(inputValue)
    setValue('')

}

  return (
    <div className="App">
      {/*<FullInput callback={callback}/>*/}
        <span>
             <div>  <Input inputValue={inputValue} setValue={setValue}/></div>
        <div><Button name={'+'} callback={callback}/></div>
        </span>


        {message.map((el,index)=>{
            return(
                <div key={index}>{el.message}</div>
            )
        })}


    </div>
  );
}

export default App;
