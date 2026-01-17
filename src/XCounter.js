import React, { useState } from 'react';
export default function XCounter() {
    const [valueOfCount, setvalueOfCount] = useState(0);
  return (
    <div>

        <h2 style={{bottom:"10px"}}>Counter App</h2>

        <p>Count: {valueOfCount}</p>
        
        <button onClick={()=> setvalueOfCount(valueOfCount + 1)}>Increment</button>
        <button onClick={()=> setvalueOfCount(valueOfCount - 1)}>Decrement</button>

     
    </div>
  );
}