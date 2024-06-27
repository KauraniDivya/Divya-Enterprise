import React from "react"
import home from "./images/home.png"
import shape2 from "./images/hero-shape-2.png"

const Hero = () => {
    return (
        <>
            <section className="section hero has-bg-image max-h-screen" id="home" aria-label="home">
                <div className="container">
                    <div className="hero-content">
                        <h1 className="h1 lg:text-8xl text-6xl section-title text-center">
                            <span className="span">Divya</span> Enterprise
                        </h1>

                        <p className="hero-text lg:text-4xl text-2xl">
                            Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                        </p>

                        <a href="#courses" className="btn has-before">
                            <span className="span">Find Products</span>
                            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                        </a>
                    </div>

                    <figure className="hero-banner flex justify-center lg:justify-start">
                        <div className="img-holder one flex justify-center items-center lg:max-w-4xl max-w-xl">
                            <img src={home} width="270" height="300" alt="hero banner" className="img-cover" />
                        </div>
                        
                        <img src={shape2} width="622" height="551" alt="" className="shape hero-shape-2 lg:mt-8 lg:max-w-4xl max-w-3xl" />
                    </figure>
                </div>
            </section>
        </>
    )
}

export default Hero;