import {React} from 'react'
import './Product.css'
import axios from 'axios'
import {useNavigate} from'react-router-dom'


function Product({id,title,price,rating,image}) {
  const navigate=useNavigate()
  const addToBasket = async() => {
    try{
      const basket=await axios.post('http://localhost:8000/add',{id,title,price,rating,image},{withCredentials:true})
      if(basket.data==='unauthorized')
      {
        navigate('/login')
      }
    }
    catch(err)
    {
      console.log(err)
    }
  };
  return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}-{id}</p>
            <p className='product_price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product_rating'>
               {Array(rating).fill().map((_,i)=>(<p>★</p>))}
             </div>
        </div>
        <img  src={image} alt="book"/>
        <button onClick={addToBasket} >Add to Basket</button>
    </div>
  )
}
export default Product
