import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
//import NotificationsIcon from '@material-ui/icons/Notifications';
import {useNavigate} from 'react-router-dom';
const Header = () => {
  const nav =  useNavigate();
  const handleClick = () =>{
    nav("/");
  }
  return (
    <div className="Header">
    <div className="Header__left">
    {/* <h2>NE<span>TF</span>LIX</h2> */}
    <img src='https://about.netflix.com/images/logo.png' alt="netlogo"/>
    <p>Home</p>
    <p>Tv Shows</p>
    <p>Movies</p>
    <p>Recently Added</p>
    <p>My List</p>
    </div>
    <div className="Header__right">
    <p>Hds</p>
    <div className="Header__right__icon">
    <SearchIcon style={{ fill: 'white' }}/>
    {/* <NotificationsIcon style={{ fill: 'white' }}/> */}
    </div>
    <button className='signout__button' onClick={handleClick}>N</button>
    </div>
    </div>
  )
}

export default Header
