import React from 'react'
import './Topcontent.css'
import StarHalfRoundedIcon from '@material-ui/icons/StarHalfRounded';
const Topcontent = () => {
  return (
    <div className='Topcontent'>
    <div className='Topcontent__content'>
    <h2>A <img src="https://about.netflix.com/images/logo.png" alt="log"/> SERIES </h2>
    <h1>WEDNESDAY</h1>
    <StarHalfRoundedIcon style={{ fill: 'red' }} />
    <StarHalfRoundedIcon style={{ fill: 'red' }}/>
    <StarHalfRoundedIcon style={{ fill: 'red' }}/>
    <StarHalfRoundedIcon style={{ fill: 'red' }}/>
    <StarHalfRoundedIcon style={{ fill: 'red' }}/>
    <div className='Topcontent__content__logo'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp88353GR6JkKZ0vQXiirlW20ZmzUHUx8HbA&usqp=CAU' alt="logo"/>
        <p>#1 TV Shows In Today</p>
    </div>
    <p><span>Wednesday</span> is an American streaming television series based on the character Wednesday Addams by Charles Addams.</p>
    <button className='Topcontent__content__butt1'>► Play</button>
    <button className='Topcontent__content__butt2'>More Info</button>
    </div>
    </div>
  )
}

export default Topcontent
