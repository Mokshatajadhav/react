import React from "react";

const ConditionalRendering = () => {
    return (
        <>
        <div>ConditionalRendering</div> 
        <Child isValid={true}/>
        </>
       );
};

const Child=(props)=>{
    // if(props.isValid)
    // {
    //     return <h1>Valid Password</h1>
    // }
    // else
    // {
    //     return <h2>Invalid Password</h2>
    // }
     return (
     <>
        <div>Child Component</div>
        <p>This is {props.isValid}</p>
        </>
    );
}

export default ConditionalRendering