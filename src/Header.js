import {React} from 'react'
import './Header.css'
import logo from './amazon_logo.png'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useBasketValue} from './BasketProvider';


function Header() {
    const{details}=useBasketValue()
    const user=details.email?details.email.split('@')[0]:'Guest'
    const length=details.basket?Object.keys(details.basket).length:0
    const logout = async () => {
        try {
          const response = await axios.post('https://amazon-clone-backend-x7dm.onrender.com/logout', null, { withCredentials: true });
          if (response.data === 'logout success') {
            window.location.reload();
          }
        } catch (error) {
          console.error( error);
        }
      };
  return (
    <div className='header'>
    <Link to='/'><img  className='header_logo' src={logo} alt='logo' /></Link>
      
      <div className='header_search'>
      <input className='header_searchInput' type='test'/>
      <SearchIcon className='header_searchIcon'/>
      </div>
      
        
        <div className='header_nav'>
        <div className='header_option'>
            <span className='header_optionLineOne'>
                Hello {user}     
            </span>
            <span className='header_optionLineTwo'>
                {user!=='Guest'? 
                (<span onClick={logout} style={{ cursor: 'pointer',textDecoration:'none'}}>Sign Out</span>)
                :
                (<span><Link to='/login' style={{ color: 'white', textDecoration: 'none' }}>Sign In</Link></span>)
                }
            </span>
        </div>
        

        <div className='header_option'>
            <span className='header_optionLineOne'>
                Returns
            </span>
            <span className='header_optionLineTwo'>
                Orders
            </span>
        </div>

        <div className='header_option'>
            <span className='header_optionLineOne'>
                Your
            </span>
            <span className='header_optionLineTwo'>
                Prime
            </span>
        </div>
        <Link to='/checkout' style={{ color: 'white', textDecoration: 'none' }}>
        <div className='header_optionBasket'>
            <ShoppingBasketIcon/>
             <span className='header_optionLineTwo header_basketCount' >{length}</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

export default Header
