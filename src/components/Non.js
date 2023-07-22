import React,{useState} from 'react'

function Non() {
    const initial =0;
    const [count, setcount]=useState(initial)
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setcount(count=>count + 2)}>increase</button>
        <button onClick={()=>setcount( initial)}>reset</button>
        <button onClick={()=>setcount(prevcount=> prevcount -1)}>decrease</button>
    </div>
  )
}

export default Non