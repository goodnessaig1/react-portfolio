import React from 'react'
import './Contact.css';

import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'


// ======== npm install emailjs-com --save=========
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_nay0dzt', 'template_lifrha7', form.current, 'ZfN6bICZTD_IUUoVr')
  e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In  Touch</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>goodness6337@gmail.com</h5>
            <a href='mailto:goodness6337@gmail.com' target='_blank' rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Goodness Aigbokhan</h5>
            <a href='https//www.facebook.com/goodness.aigbokhan' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+23471446659</h5>
            <a href='https://wa.me/qr/VIXB4CXABFWJL1' target='_blank' rel="noreferrer">Send a message</a>
          </article>
        </div>

            {/* END OF CONTACT OPTIONS */}

            <form ref={form} onSubmit={sendEmail}>
              <input type='text' name='name' placeholder='Your Full Name' required /> 
              <input type='email' name='email' placeholder='Your Email' required /> 
              <textarea name="message"   rows="7" placeholder='Your Message' required></textarea>
              <button type='submit' className='btn btn-primary' >Send Message</button>
            </form>

      </div>
    </section>
  )
}

export default Contacts