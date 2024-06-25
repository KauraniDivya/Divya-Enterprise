import './App.css';
import About from './components/About';
import Products from './components/Products';
import Header from './components/header';
import Hero from "./components/Hero"
import Choose from './components/Choose';
import Statistics from './components/Statistics';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <>
      
  {/* <!-- 
    - #HEADER
  --> */}
<Header />
  





  <main class="overflow-hidden">
    <article>

      {/* <!-- 
        - #HERO
      --> */}

    <Hero />





      {/* <!-- 
        - #CATEGORY
      --> */}

     <Products />





      {/* <!-- 
        - #ABOUT
      --> */}

     <About />
     
    
    



     





      {/* <!-- 
        - #VIDEO
      --> */}

      <Choose />





      {/* <!-- 
        - #STATE
      --> */}

      <Statistics />





      {/* <!-- 
        - #BLOG
      --> */}

     <Map />

    </article>
  </main>





  {/* <!-- 
    - #FOOTER
  --> */}

  <Footer />





  {/* <!-- 
    - #BACK TO TOP
  --> */}

  <a href="#top" class="back-top-btn" aria-label="back top top" data-back-top-btn>
    <ion-icon name="chevron-up" aria-hidden="true"></ion-icon>
  </a>



    </>
  );
}

export default App;
