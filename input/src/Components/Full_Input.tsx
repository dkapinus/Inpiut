import React, {ChangeEvent, useState} from 'react';

type InputButton = {
    callback:(inputValue:string)=>void
}

 export const FullInput = (props:InputButton) => {

     let[inputValue,setInputValue]=useState('')

     const onClickHandlerButton=()=> {
 props.callback(inputValue)
         setInputValue('')
     }

     const onClickHandlerInput = (event:ChangeEvent<HTMLInputElement>)=> {
setInputValue(event.currentTarget.value)

     }

    return (
        <div>
            <input  value={inputValue} onChange={onClickHandlerInput}/>
            <button onClick={onClickHandlerButton}>+</button>
        </div>
    );
};

