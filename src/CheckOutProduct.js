import {React} from 'react'
import './CheckOutProduct.css'
import axios from 'axios'
import image from './basket_image.webp'

function CheckOutProduct({id,title,price,rating}) {
    const removeFromBasket=async()=>
      {
        try{
          const response=await axios.delete(`http://localhost:8000/del/${id}`,{withCredentials:true})
        }
        catch(err)
        {
          console.log(err)
        }
          
      }
  return (
    <div className='checkOutProduct'>
       <img className='checkOutProduct_image' src={image} alt='products'/>
       <div className='checkOutProduct_info'>
          <p className='checkOutProduct_title'>{id}-{title}</p>
            
          <p className='checkOutProduct_price'>
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className='checkOutProduct_rating'>
             {Array(rating).fill().map((_,i)=>(<p>★</p>))}
          </div>
          <button onClick={removeFromBasket}>Remove from to Basket</button>
        </div>
        
    </div>
  )
}

export default CheckOutProduct
