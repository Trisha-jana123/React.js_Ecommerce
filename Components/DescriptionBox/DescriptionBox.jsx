import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (222)</div>
        
      </div>
      <div className="descriptionbox-description">
        <p>
           At SHOPPER, we bring you the latest trends in fashion with a collection that’s stylish, comfortable, and affordable. From everyday essentials to statement pieces, our clothing is designed to fit every mood and moment. Whether you're dressing up for a special occasion or keeping it casual, SHOPPER has the perfect outfit waiting for you. Explore now and redefine your wardrobe with just a few clicks! 
        </p>
        <p>
            Discover fashion that fits your lifestyle at SHOPPER. We curate the freshest styles in women's and men's clothing — from chic everyday wear to bold statement outfits. Our mission is to empower your wardrobe with quality fabrics, flattering fits, and designs that speak confidence. Join thousands of fashion-forward shoppers who trust SHOPPER to deliver elegance and comfort, right to their doorstep.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
