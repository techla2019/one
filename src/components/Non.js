import React,{useState} from 'react'

function Non() {
    const [count, setcount]=useState(0)
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setcount(count + 1)}>increase</button>
        <button onClick={()=>setcount(count - count )}>reset</button>
        <button onClick={()=>setcount(count - 1)}>decrease</button>
    </div>
  )
}

export default Non