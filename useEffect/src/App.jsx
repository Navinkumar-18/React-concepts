import React,{useEffect,useState} from "react";

function App(){
  const[num,setNum]=useState(1);
  const[name,setName]=useState(500);

  useEffect(()=>{

    console.log("useeffect is called");

    return {

        }
  },[num,name]);




  return (
    <div>
      <h1>{num}</h1>
      <button onClick={()=>setNum(curr=>curr+1)}>Add </button>
      <br />
      <h1>{name}</h1>
      <button onClick={()=>setName(curr=>curr+500)}>Change </button>
    </div>

  ) 
}

export default App;
