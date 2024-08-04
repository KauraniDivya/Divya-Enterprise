import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Products from './components/Products';
import Hero from "./components/Hero";
import Choose from './components/Choose';
import Map from './components/Map';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import DEHeader from './components/header';
import ContactForm from './components/ContactForm';
import { Toaster } from "react-hot-toast";
import Admin from './components/Admin';

function ScrollToTop() {
  const location = useLocation();
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <DEHeader />
      <main className="overflow-hidden">
        <article>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Products />
                <About />
                <Choose />
                <Map />
                <ContactForm />
              </>
            } />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/admindinesh" element={<Admin />} />
          </Routes>
        </article>
      </main>
      <Footer />
      <a href="#top" className="back-top-btn" aria-label="back top top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{ zIndex: "9999999999" }}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "white",
            color: "black",
            fontSize: "16px",
          },
          success: {
            duration: 3000,
          },
        }}
      />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;