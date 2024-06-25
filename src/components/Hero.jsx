import React from "react"
import home from "./images/home.png"
import shape2 from "./images/hero-shape-2.png"

const Hero = () =>{
    return(
        <>
              <section class="section hero has-bg-image" id="home" aria-label="home"
        >
        <div class="container">

          <div class="hero-content">

            <h1 class="h1 lg:text-8xl text-6xl section-title text-center">
              <span class="span">Divya</span> Enterprise
            </h1>

            <p class="hero-text lg:text-4xl text-2xl">
              Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
            </p>

            <a href="#courses" class="btn has-before">
              <span class="span">Find Products</span>

              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </a>

          </div>

          <figure class="hero-banner">

            <div class="img-holder one flex items-center justify-center lg:max-w-3xl max-w-xl lg:flex">
              <img src={home} width="270" height="300" alt="hero banner" class="img-cover" />
            </div>

           
            <img src={shape2} width="622" height="551" alt="" class="shape hero-shape-2" />

          </figure>

        </div>
      </section>
        </>
    )
}

export default Hero;