import React from 'react'
import './CheckOut.css'
import Subtotal from './Subtotal'
import CheckOutProduct from './CheckOutProduct'
import { useBasketValue } from './BasketProvider'

function CheckOut() {
   const {details}=useBasketValue()
   const length=details.basket?Object.keys(details.basket).length:0
   const email=details.email?details.email.split('@')[0]:'Guest'
   const price = details.basket?.reduce((total, item) => total + parseFloat(item.price), 0);

   
  return (
    <div className='checkout'>
       <div className='checkout_left'>
        <img className="checkout_ad" 
        src='https://tse1.mm.bing.net/th?id=OIP.KKYw5zx2ohFQunWzGLdp0QHaBF&pid=Api&P=0&h=180' alt=''/>
         <div>
            <h3 className='checkout_name'>Hello - {email}</h3>
            <h2 className='checkout_title'>
                Your shopping Basket</h2>
         </div>
         <div>
         {length > 0 ? (
            details.basket.map(item => (
            <CheckOutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
         ))
         ) : (
            <p className='checkout_basket'>No items in the basket.</p>
         )}

         </div>
      </div>
       <div className='checkout_right'>
        <h2><Subtotal length={length} price={price} /></h2>
       </div>
    </div>
  )
}

export default CheckOut
