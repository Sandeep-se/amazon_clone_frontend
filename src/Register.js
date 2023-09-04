import React, { useEffect } from 'react'
import './Register.css'
import { useState } from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import logo from './blacklogo.png'
import axios from 'axios'

function Register() {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const navigate=useNavigate()
    const signUp=async(e)=>
    {
        e.preventDefault()
        const response=await axios.post('http://localhost:8000/signUp',{email,password})
        try{
            if(response.data==='`@gmail.com` is missing ')
            {
                alert('`@gmail.com` is missing ')
            }
            if(response.data==='signUp success' || response.data==='exist')
            {
                navigate('/login')
            }
        }
        catch(err)
        {
            console.log(err)
        }
    }
  return (
    <div className='register'>
         <Link to='/'>
        <img src={logo} className='logo' alt='logo'/>
        </Link>
        <div className='logo_container'>
            <h1>sign-up</h1>
            <form>
                <h5>Email</h5>
                <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)}/> 
                
                <h5>Password</h5>
                <input type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                <p style={{fontSize:'12px'}}>By sigining-in you agree to the Amazon Clone</p>
                <button type='submit' onClick={signUp} className='register_signUpButton'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default Register
