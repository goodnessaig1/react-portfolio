import React from 'react'
import './Testimonial.css';
import AVTR1 from '../../Assets/female-developer.jpg'
import AVTR2 from '../../Assets/muslim.jpg'
import AVTR3 from '../../Assets/male-with-hood.jpg'
import AVTR4 from '../../Assets/lady.jpg'


// ========= npm install swiper========
// ======= import swiper core and required modules ======
import { Pagination, Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper Styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow',
    review: "  Lorem ipsum dolor sit amet, consectetur sit amet, consectetur adipisicing elit. Dignissimos perspiciatis fuga aliquam expedita omnis inventore accusantium libero dolorum, quibusdam adipisicing elit. Dignissimos perspiciatis fuga aliquam expedita omnis inventore accusantium libero dolorum, quibusdam at quisquam soluta, est minus debitis harum fugit, illo aliquid ex !"
  },
  {
    avatar: AVTR2,
    name: 'shatta Wale',
    review: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis fuga aliquam expedita omnis inventore accusantium libero dolorum, quibusdam at quisquam so sit amet, consectetur adipisicing elit. Dignissimos perspiciatis fuga aliquam expedita omnis inventore accusantium libero dolorum, quibusdam luta, est minus debitis harum fugit, illo aliquid ex !"
  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis fuga aliquam expedita omnis inventore accusantium libero dolorum, quibusdam at quisquam soluta, est minus debitis harum fugit, illo aliqu sit amet, consectetur adipisicing elit. Dignissimos perspiciatis fuga aliquam expedita omnis inventore accusantium libero dolorum, quibusdamid ex !"
  },
  {
    avatar: AVTR4,
    name: 'Naana Ama McBrown',
    review: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos perspiciatis fuga aliquam expedita omnis inventore accusantium libero dolorum, quibusdam sit amet, consectetur adipisicing elit. Dignissimos perspiciatis fuga aliquam expedita omnis inventore accusantium libero dolorum, quibusdam at quisquam soluta, est minus debitis harum fugit, illo aliquid ex !"
  },
]

const Testimonial = () => {
  return (
    <section id='testimonials'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>


      <Swiper className="container testimonials__container"
         modules={[Navigation, Pagination]}
         spaceBetween={40}
         slidesPerView={1}
         
         navigation
         pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={avatar} />
          
          </div>
          <h5 className='client__name'>{name}</h5>
            <small className="client__review">
        {review}
            </small>
            
        </SwiperSlide>
            )
          })
        }
       
      </Swiper>

    </section> 
  )
}

export default Testimonial