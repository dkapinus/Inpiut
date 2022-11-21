import React, {ChangeEvent} from 'react';


type InputType = {
    setValue:(inputValue:string)=>void
    inputValue:string;
}

export  const Input = (props:InputType) => {
    const onChangeClick = (event:ChangeEvent<HTMLInputElement>)=> {
        props.setValue(event.currentTarget.value)
    }
    return (
        <div>
<input    value={props.inputValue} onChange={onChangeClick}/>
        </div>
    );
};

