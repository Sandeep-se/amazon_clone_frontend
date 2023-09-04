import React from 'react'
import './Subtotal.css'
import axios from 'axios'

function Subtotal({length,price}) {
  const checkout=async()=>
  {
      const check=await axios.delete('http://localhost:8000/checkout',{withCredentials:true})
  }
  return (
    <div className='subtotal'>
       <p>subtotal ({length} items): <strong> {'₹ '} {price}</strong></p>
       <p>
        <small className='subtotal_gift'>
          <input type='checkbox'/>
           this order contains gift
        </small>
        </p>
  
        <button onClick={()=>checkout()}>check out</button>
    </div>
  )
}

export default Subtotal