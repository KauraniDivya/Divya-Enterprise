import React from 'react';
import shape from "./images/blog-bg.svg"

const Map = () =>{
    return(
        <>
             <section class="section blog has-bg-image" aria-label="blog" id="visit"
        style={{backgroundImage:`url(${shape})`}}>
        <div class="container">

          <p class="section-subtitle">Google Map</p>

          <h2 class="h2 section-title">Visit Us</h2>

          <iframe title='google map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.519455622026!2d72.6424249750923!3d23.041409979160647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e86eea8c51305%3A0xf3db663121d1afec!2sDIVYA%20ENTERPRISE!5e0!3m2!1sen!2sin!4v1719299495616!5m2!1sen!2sin" class="w-full" height="400" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          <img src="./assets/images/blog-shape.png" width="186" height="186" loading="lazy" alt=""
            class="shape blog-shape" />

        </div>
      </section>
        </>
    )
}

export default Map