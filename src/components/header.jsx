import React from "react";
import logo from "./images/logo.png";

const DEHeader = () => {
  const phone = "+919016539191";

  const handleWhatsAppClick = (phone, productName) => {
    const message = `I am interested in your product: ${productName}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <header className="header" data-header style={{ position: "sticky" }}>
      <div className="container">
        <a href="#home" className="logo flex justify-between gap-8">
          <img src={logo} className="w-xl h-20" alt="Divya Enterprise logo" />
          <p className="text-4xl mt-6">Divya Enterprise</p>
        </a>

        <nav className="navbar" data-navbar>
          <div className="wrapper">
            <a href="#home" className="logo">
              <img src={logo} className="w-xl h-20" alt="Divya Enterprise logo" />
              <p className="text-5xl mt-4">Divya Enterprise</p>
            </a>

            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list text-2xl">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link>
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#products" className="navbar-link" data-nav-link>
                Products
              </a>
            </li>
            <li className="navbar-item">
              <a href="#choose" className="navbar-link" data-nav-link>
                Why Choose Us?
              </a>
            </li>
            <li className="navbar-item">
              <a href="#visit" className="navbar-link" data-nav-link>
                Visit Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
        <a href="tel:+919016539191" class="topbar-item link bg-yellow-100 p-5 pr-6 rounded-xl text-xl text-black font-medium" style={{display: "flex"}}>
          <ion-icon name="call-outline" aria-hidden="true" class=" w-10 h-8 lg:hidden"></ion-icon>
          <div class="icon lg:flex hidden">
            <ion-icon name="call-outline" aria-hidden="true" class="mr-2 w-8 h-8 font-bold"></ion-icon>
            <span class="span">+91 9016539191</span>
          </div>          
        </a>

          <div
            
            className="btn has-before cursor-pointer p-2"
            onClick={() => handleWhatsAppClick(phone, "Your Product Name")}
          >
            <span className="span">Whatsapp Us</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </div>

          <button className="header-action-btn" aria-label="open menu" data-nav-toggler>
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default DEHeader;
