import React from 'react'
import './Home.css'
import Product from './Product'
import phone from './phone.jpeg'
import iphone from './iphone.png'
import watch from './watch.jpeg'
import headset from './headset.jpeg'
import speaker from './speaker.webp'
import tv from './tv.jpeg'
import homeLogo from './home.jpg'


function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
         <img className='home_image' src={homeLogo}
          alt='homepage'/>
      </div>
      <div className='home_row'>
        <Product 
        id='123'
        title={"Android phone" }
        price={5000} 
        rating={4}
        image={phone}
        />
        <Product
        id='345'
        title={"IPhone 14-pro"} 
        price={20000} 
        rating={4}
      image={iphone}/>
      </div>

      <div className='home_row'>
        <Product
        id='567'
        title={"LED TV " }
        price={50000} 
        rating={5}
        image={tv}/>
      </div>

      <div className='home_row'>
        <Product
        id='789'
        title={"Watch"} 
        price={500} 
        rating={4}
        image={watch}/>
        <Product 
        id='012'
        title={"Rockerz 333"} 
        price={300} 
        rating={4}
        image={headset}/>
        <Product
         id='345'
        title={"Alexa speaker"} 
        price={500} 
        rating={4}
        image={speaker}/>

      </div>

    </div>
  )
}

export default Home
