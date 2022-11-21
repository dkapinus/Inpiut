import React, {ChangeEvent, useState} from 'react';

type InputButton = {
    callback:(inputValue:string)=>void
}

 export const FullInput = (props:InputButton) => {

     let[inputValue,setInputValue]=useState('')

     const onClickHandlerButton=()=> {
 props.callback(inputValue)
     }

     const onClickHandlerInput = (event:ChangeEvent<HTMLInputElement>)=> {
setInputValue(event.currentTarget.value)
     }

    return (
        <div>
            <input onChange={onClickHandlerInput}/>
            <button onClick={onClickHandlerButton}>+</button>
        </div>
    );
};

