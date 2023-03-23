
import { useEffect, useState } from "react";

// import { useState,useEffect } from "react"; //page load hole akbar e run korbe


function App() {

    let [number , setNumber] = useState(10);

    let handleClick = () =>{
      number++;
      setNumber(number);
    };

    // useEffect(()=>{
    //     console.log("ami use effect");
    // },[])

    // useEffect(()=>{
    //     console.log("ami use effect");
    // },[number])   //number change hole abar execute hobe

    return (
      <>
          <h1> {number} </h1>
          <button onClick = {handleClick} >Click</button>
      </>
    );
}

export default App;



