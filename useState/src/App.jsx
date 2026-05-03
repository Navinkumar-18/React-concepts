import React,{useState} from 'react';

const App = () => {
  const [num, setNum] = useState(10);

  const handleClick = () => {
    setNum((curr)=>curr+1);
  };

  return (
    <>
    <div>{num}</div>
   <button onClick={handleClick}>Click me</button>

    </>
  );
};

export default App;