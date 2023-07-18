import React, {useState} from 'react'

function Count() {
    const {count, setcount} =useState(0)
  return (
    
    <>
    <h1>Count: {setcount}</h1>
    </>
  )
}

export default Count