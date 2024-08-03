import React, { useState, useEffect } from "react";
import logo from "./images/logo.png";

const DEHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const phone = "+919016539191";

  const handleWhatsAppClick = (phone, productName) => {
    const message = `I am interested in your product: ${productName}`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    // Add or remove 'active' class to body when menu state changes
    if (isMenuOpen) {
      document.body.classList.add('active');
    } else {
      document.body.classList.remove('active');
    }
  }, [isMenuOpen]);

  return (
    <header className={`header z-96 ${isMenuOpen ? 'active' : ''}`} data-header style={{ position: "sticky" }}>
      <div className="container">
        <a href="/" className="logo flex justify-between gap-8">
          <img src={logo} className="w-xl h-20" alt="Divya Enterprise logo" />
          <p className="text-4xl mt-6">Divya Enterprise</p>
        </a>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} data-navbar>
          <div className="wrapper">
            <a href="/" className="logo">
              <img src={logo} className="w-xl lg:h-20 h-16" alt="Divya Enterprise logo" />
              <p className="lg:text-5xl text-3xl mt-4">Divya Enterprise</p>
            </a>

            <button className="nav-close-btn" aria-label="close menu" onClick={closeMenu}>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>

          <ul className="navbar-list text-2xl">
            <li className="navbar-item">
              <a href="/" className="navbar-link" data-nav-link onClick={closeMenu}>
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#products" className="navbar-link" data-nav-link onClick={closeMenu}>
                Products
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link onClick={closeMenu}>
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#choose" className="navbar-link" data-nav-link onClick={closeMenu}>
                Why Choose Us?
              </a>
            </li>
            <li className="navbar-item">
              <a href="#visit" className="navbar-link" data-nav-link onClick={closeMenu}>
                Visit Us
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="tel:+919016539191" className="topbar-item link bg-yellow-100 p-5 pr-6 rounded-xl text-xl text-black font-medium" style={{display: "flex"}}>
            {/* <ion-icon name="call-outline" aria-hidden="true" className="w-10 h-8 lg:hidden flex"></ion-icon> */}
            <div className="icon flex">
              <ion-icon name="call-outline" aria-hidden="true" className="mr-2 w-10 h-10 font-bold mt-4 mr-4"></ion-icon>
              <span className="span lg:flex hidden">+91 9016539191</span>
            </div>          
          </a>

          <div
            className="btn has-before cursor-pointer p-2"
            onClick={() => handleWhatsAppClick(phone, "Your Product Name")}
          >
            <span className="span">Whatsapp Us</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </div>

          <button className="header-action-btn" aria-label="open menu" onClick={toggleMenu}>
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        <div className={`overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      </div>
    </header>
  );
};

export default DEHeader;