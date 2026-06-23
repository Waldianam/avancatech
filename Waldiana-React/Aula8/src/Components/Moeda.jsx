import React, { useState } from "react";

function Moeda(){
    const[ moeda,setmoeda] = useState(0);
    const aumentar = () =>{
        setmoeda (moeda +1);
    }


    return (
        <>
        <h1>Moeda:{moeda}</h1>
        <button onClick={aumentar}>Click me</button>

        </>
    );
}
    




export default Moeda;
