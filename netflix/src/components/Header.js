import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
//import NotificationsIcon from '@material-ui/icons/Notifications';
const Header = () => {
  return (
    <div className="Header">
    <div className="Header__left">
    <h2>NE<span>TF</span>LIX</h2>
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
    
    </div>
    </div>
  )
}

export default Header
