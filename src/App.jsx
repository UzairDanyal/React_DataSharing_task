import './App.css';
import { useState, useEffect} from 'react';
import Level2 from "./Child/Level2";


function App() {

  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Level 1 constructor");
  },[])

  useEffect(() => {
    console.log("level 1 update ");
  },[count]);

  useEffect(() => {
    return () => {
      console.log("level 1 destructor ");
    }
  },[])

  const increament = () =>{
    const newVal = count+1;
    setCount(newVal);
  }
  

  return (
    <div style={{backgroundColor:"#ff8080"}}>

      <h4 style={{textAlign:"center"}}> Level 1</h4>
      <button onClick={increament}>Add level1</button><span>Count: <b>{count}</b></span>
      
      <Level2 levelOneIncreament = {increament}/>

      
    </div>
  );
}

export default App;
