import React from 'react'
import { useState, useEffect} from 'react';
import Level_Three_One from './Level_Three_One';
import Level3_2 from './Level_three_two'

export default  function Level2({levelOneIncreament}) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Level 2 constructor");
      },[])
    
      useEffect(() => {
        console.log("level 2 update ");
      },[count]);
    
      useEffect(() => {
        return () => {
          console.log("level 2 destructor ");
        }
      },[])

      const increament = () =>{
        const newVal = count+1;
        setCount(newVal);
      }
      

    return (
        <div style={{backgroundColor:"#ffff66"}}>
            <h4 style={{textAlign:"center"}}> Level 2</h4>
            <button onClick={increament}>Add level2</button> <span>Count: <b>{count}</b></span>
            <br />
            <button style={{marginTop:"10px"}} onClick={levelOneIncreament}>Add level1</button>

            <Level_Three_One levelOneIncreament={levelOneIncreament} levelTwoIncreament={increament}/>
            <Level3_2 levelOneIncreament={levelOneIncreament} levelTwoIncreament={increament}/>

        </div>
    )
}
