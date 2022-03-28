import React from 'react'
import './About.css';
import MALE from '../../Assets/smart2.jpg';

import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>About
    <h5>Get To Know</h5>
    <h2>About Me</h2>

   <div className="container about__container">

    <div className="about__me">
    <div className="about__me-image">
      <img src={MALE} alt='About img' />
</div>
    </div>

    <div className="about__content">
      <div className="about__cards">

      <article className='about__card'>
          <FaAward className='about__icon'/>
          <h5>Experience</h5>
          <small>3+ Years Working</small>
        </article>

        <article className='about__card'>
          <FiUsers className='about__icon'/>
          <h5>Clients</h5>
          <small>80+ Worldwide</small>
        </article>
       
        <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
          <h5>Projects</h5>
          <small>80+ Completed</small>
        </article>

      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab quidem explicabo dicta doloremque voluptatibus atque sunt nemo dolor omnis quis odio culpa tempore est saepe minima, at vitae nostrum.
      </p>

      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>


   </div>
    </section>
  )
}

export default About