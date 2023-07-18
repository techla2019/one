import React, {useState} from 'react'

function Count() {
    const [count, setcount] =useState(0)
  return (
    
    <>
    <h1>Count: {count}</h1>
    <button onClick={()=>setcount(count +1)}>increase</button>
    <button onClick={()=>setcount(count - count)}>reset</button>
    <button onClick={()=>setcount(count -1)}>decrease</button>
    </>
  )
}

export default Count