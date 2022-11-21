import React from 'react';


type ButtonType = {
name:string;
callback:()=>void
}

export const Button = (props:ButtonType) => {

    const onclickHandler = ()=> {
        props.callback()
    }
    return (
        <div>
           <button onClick={onclickHandler}>{props.name}</button>
        </div>
    );
};

