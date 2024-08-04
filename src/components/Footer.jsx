import React from "react";
import bg from "./images/footer-bg.png"
import logo from "./images/logo.png"
import { FaWhatsapp, FaLinkedin, FaFacebook } from 'react-icons/fa';

const Footer = () =>{
  const handleShare = (platform) => {
    const url = window.location.href;
    let shareUrl;

    switch (platform) {
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`Check out this product: ${url}`)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, '_blank');
  };
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

     

      <div class="wrapper mt-10">
        <span class="span">Address:</span>

        <address class="address">Plot No. 51, Block No. 765 762 & 763, New Survey No. 684 1, Jak-Kadadara Road, Vahelal, Daskroi, Ahmedabad - 382330.</address>
      </div>

      <div class="wrapper mt-4">
        <span class="span">Call:</span>

        <a href="tel:+011234567890" class="footer-link">+91 9016539191</a>
      </div>

      <div class="wrapper mt-4">
        <span class="span">Email:</span>

        <a href="mailto:kauranidivya@gmail.com" class="footer-link">kauranidivya@gmail.com</a>
      </div>

    </div>

   

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

      <ul className="flex justify-center space-x-6">
            <li>
              <button
                onClick={() => handleShare('whatsapp')}
                className="social-link text-green-500 hover:text-green-600 transition-colors duration-300"
              >
                <FaWhatsapp size={24} />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleShare('linkedin')}
                className="social-link text-blue-600 hover:text-blue-700 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </button>
            </li>
            <li>
              <button
                onClick={() => handleShare('facebook')}
                className="social-link text-blue-500 hover:text-blue-600 transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </button>
            </li>
          </ul>

    </div>

  </div>
</div>

<div class="footer-bottom">
  <div class="container">

    <p class="copyright">
      Copyright {new Date().getFullYear()} All Rights Reserved by <a href="#" class="copyright-link">Divya Enterprise</a>
    </p>

  </div>
</div>

</footer>
        </>
    )
}

export default Footer