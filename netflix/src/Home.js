import React from 'react'
import './Home.css'
import {useNavigate} from 'react-router-dom';
import LanguageIcon from '@material-ui/icons/Search';
const Home = () => {
  const res =  useNavigate();
  const handleClick = () =>{
    res("/home");
  }
  return (
    <div className='home'>
    <div className='home__header'>
    <div className='home__header1'>
    <img src="https://about.netflix.com/images/logo.png" alt="logo" />
    <select className='home__drop'>
        <option><LanguageIcon/>English</option>
        <option>Tamil</option>
    </select>
    <button className='home__button'>Sign in</button>
    </div>
    <div className='home__content'>
    <h1>Unlimited movies, TV shows and more</h1>
    <h3>Watch anywhere. Cancel anytime.</h3>
    <h4>Ready to watch? Enter your email to create or restart your membership.</h4>
    <input placeholder='Email Address' focused />
    <button className='home__button1' onClick={handleClick}>Get Started > </button>
    
    </div>
    </div>  
    </div>
  )
}

export default Home
