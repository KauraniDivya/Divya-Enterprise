import React from "react";
import bg from "./images/footer-bg.png"
import logo from "./images/logo.png"

const Footer = () =>{
    return(
        <>
            <footer class="footer" style={{backgroundColor:`url(${bg})`}}>

<div class="footer-top section">
  <div class="container grid-list">

    <div class="footer-brand">

    <a href="#home" class="logo flex gap-4">
        <img src={logo} width="30" height="30" alt="Divya Enterprise logo" />
        <p className="text-5xl mt-4 text-white">Divya Enterprise</p>
      </a>

      <p class="footer-brand-text">
        Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor incidid unt labore dolore.
      </p>

      <div class="wrapper">
        <span class="span">Add:</span>

        <address class="address">70-80 Upper St Norwich NR2</address>
      </div>

      <div class="wrapper">
        <span class="span">Call:</span>

        <a href="tel:+011234567890" class="footer-link">+01 123 4567 890</a>
      </div>

      <div class="wrapper">
        <span class="span">Email:</span>

        <a href="mailto:kauranidivya@gmail.com" class="footer-link">kauranidivya@gmail.com</a>
      </div>

    </div>

    <ul class="footer-list">

      <li>
        <p class="footer-list-title">Online Platform</p>
      </li>

      <li>
        <a href="#about" class="footer-link">About</a>
      </li>

      <li>
        <a href="#products" class="footer-link">Products</a>
      </li>

      <li>
        <a href="#choose" class="footer-link">Why Choose Us?</a>
      </li>

      <li>
        <a href="#visit" class="footer-link">Visit Us</a>
      </li>

      

    </ul>

    <ul class="footer-list">

      <li>
        <p class="footer-list-title">Links</p>
      </li>

      <li>
        <a href="#about" class="footer-link">About</a>
      </li>

      <li>
        <a href="#products" class="footer-link">Products</a>
      </li>

      <li>
        <a href="#choose" class="footer-link">Why Choose Us?</a>
      </li>

      <li>
        <a href="#visit" class="footer-link">Visit Us</a>
      </li>
    </ul>

    <div class="footer-list">

      <p class="footer-list-title">Contacts</p>

      <p class="footer-list-text">
        Enter your email address to register to our newsletter subscription
      </p>

      <form action="" class="newsletter-form">
        <input type="email" name="email_address" placeholder="Your email" required class="input-field" />

        <button type="submit" class="btn has-before">
          <span class="span">Subscribe</span>

          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </button>
      </form>

      <ul class="social-list">

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li>
          <a href="#" class="social-link">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </li>

      </ul>

    </div>

  </div>
</div>

<div class="footer-bottom">
  <div class="container">

    <p class="copyright">
      Copyright 2022 All Rights Reserved by <a href="#" class="copyright-link">Divya Enterprise</a>
    </p>

  </div>
</div>

</footer>
        </>
    )
}

export default Footer