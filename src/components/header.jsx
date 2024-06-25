import React from "react"
import logo from "./images/logo.svg"

const Header = () =>{
    return(
        <>
            <header class="header" data-header>
    <div class="container">

      <a href="#" class="logo">
        <img src={logo} width="162" height="50" alt="Divya Enterprise logo" />
      </a>

      <nav class="navbar" data-navbar>

        <div class="wrapper">
          <a href="#" class="logo">
            <img src={logo} width="162" height="50" alt="Divya Enterprise logo" />
          </a>

          <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
            <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <ul class="navbar-list">

          <li class="navbar-item">
            <a href="#home" class="navbar-link" data-nav-link>Home</a>
          </li>

          <li class="navbar-item">
            <a href="#about" class="navbar-link" data-nav-link>About</a>
          </li>

          <li class="navbar-item">
            <a href="#courses" class="navbar-link" data-nav-link>Products</a>
          </li>

          <li class="navbar-item">
            <a href="#blog" class="navbar-link" data-nav-link>Why Choose Us?</a>
          </li>

          <li class="navbar-item">
            <a href="#visit" class="navbar-link" data-nav-link>Contact</a>
          </li>

        </ul>

      </nav>

      <div class="header-actions">

        <a href="tel:+919016539191" class="topbar-item link bg-yellow-100 p-5 pr-6 rounded-xl text-2xl text-black" style={{display: "flex"}}>
          <ion-icon name="call-outline" aria-hidden="true" class=" w-10 h-8 lg:hidden"></ion-icon>
          <div class="icon lg:flex hidden">
            <ion-icon name="call-outline" aria-hidden="true" class="mr-2 w-10 h-8 mt-1"></ion-icon>
            <span class="span">+91 9016539191</span>
          </div>          
        </a>

        <a href="#" class="btn has-before">
          <span class="span">Whatsapp Us</span>

          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>

        <button class="header-action-btn" aria-label="open menu" data-nav-toggler>
          <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
        </button>

      </div>

      <div class="overlay" data-nav-toggler data-overlay></div>

    </div>
  </header>
        </>
    )
}

export default Header