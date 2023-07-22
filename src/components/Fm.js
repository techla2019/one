import React, {useState} from 'react'

function Fm() {
    const [name, setname]=useState({firstname:'', lastname:''})
  return (
    <div>
        
        <form>
            <input type='text' onChange={e=>setname({...name,firstname: e.target.value})}/>
            <input type='text' onChange={e=>setname({...name,lastname: e.target.value})}/>
            <h2>Ensure your first name is {name.firstname}</h2>
            <h2>Ensure your last name is {name.lastname}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
        </div>
  ) 
}

export default Fm