import React,{useEffect,useState} from 'react';

function App() {
 const[num1,setNum1]=useState(10000000);
 const[num2,setNum2]=useState(1000);

 useEffect(()=>{
    setNum1(200);
    console.log("From useEffect");

    return()=>{
      setNum1(0);
      console.log("Memory Cleaned Up");
    }    
 },[num1,num2]);1

 console.log(num1);
 console.log(num2);


  return (
    <>
    <div>{num1}</div>
    <button onClick={() => setNum1(num1+1)} >Add Num1</button>

    <div>{num2}</div>
    <button onClick={() => setNum2(num2+1)} >Add Num2</button>
    </>
  );
}

export default App;