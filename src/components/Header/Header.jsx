import React from 'react'
import CTA from './CTA';
import './Header.css';
import Hood from '../../Assets/hood2.jpg';
import HeaderSocials from '../HeaderSocials/HeaderSocials';


const Header = () => {
  return (
    <header>
      <div className='container header__container'>

        <h5>Hello I'm</h5>
        <h1>Goodness Aigbokhan</h1>
        <h5 className='text-light'>Fullstack Developer </h5>
          <CTA/>
          <HeaderSocials/>
          

          <div className='hood'>
            <img src={Hood} alt='hood' />
          </div>

          <a href='#contact' className='scroll__down'>Scroll Down</a>

      </div>
    </header> 
  )
}

export default Header