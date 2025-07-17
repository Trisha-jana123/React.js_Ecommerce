import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter'>
      <h1>GET EXCLUSIVE OFFERS ON YOUR E-MAIL</h1>
      <p>Subscribe to your new-letter and stay updated for offers and discounts</p>
      <div>
        <input type="email" placeholder='Enter your e-mail id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default Newsletter
