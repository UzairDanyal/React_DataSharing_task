import React from 'react'
import { useState, useEffect} from 'react';

export default function Level_Three_One({levelOneIncreament, levelTwoIncreament}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Level 3_1 constructor");
      },[])
    
      useEffect(() => {
        console.log("level 3_1 update ");
      },[count]);
    
      useEffect(() => {
        return () => {
          console.log("level 3_1 destructor ");
        }
      },[])

      const increament = () =>{
        const newVal = count+1;
        setCount(newVal);
      }
    return (
        <div style={{backgroundColor:"#66ff66"}}>
            <h4 style={{textAlign:"center"}}> Level 3 - 1</h4>
            <button onClick={increament}>Add level3_1 </button> <span>Count: <b>{count}</b></span>
            <br />
            <button style={{marginTop:"10px"}} onClick={levelTwoIncreament}>Add level2</button>
            <button style={{marginTop:"10px"}} onClick={levelOneIncreament}>Add level1</button>

            
        </div>
    )
}
