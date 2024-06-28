import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Products from './components/Products';

import Hero from "./components/Hero";
import Choose from './components/Choose';
import Statistics from './components/Statistics';
import Map from './components/Map';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import DEHeader from './components/header';
// import CardSection from './components/DemoCard';

function App() {
  return (
    <Router>
      <DEHeader />
      <main className="overflow-hidden">
        <article>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                {/* <CardSection /> */}
                <Products />
                <About />
                <Choose />
                <Statistics />
                <Map />
              </>
            } />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </article>
      </main>
      <Footer />
      <a href="#top" className="back-top-btn" aria-label="back top top" data-back-top-btn>
        <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
      </a>
    </Router>
  );
}

export default App;