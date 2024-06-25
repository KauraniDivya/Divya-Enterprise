import React from "react";
import bg from "./images/video-bg.png"
import quality from "./images/quality.png"
import trust from "./images/trust.png"
import efficient from "./images/efficient.png"
import shape1 from "./images/video-shape-1.png"
import shape2 from "./images/video-shape-2.png"

const Choose = () =>{
    return(
        <>
            <section class="video has-bg-image" aria-label="video"
        style={{
            backgroundImage: `url(${bg})`
        }} id="choose">
        <div class="container">
          <div class="choose-us pt-40">
          <p class="section-subtitle">Why Choose Us?</p>

          <h2 class="h2 section-title">Why Choose Our Products</h2></div>
          <div class="video-card mt-20 lg:mt-0">

            <div class="grid gap-28 mt-28 lg:gap-14 md:grid-cols-3 md:gap-5 lg:max-h-xl lg:relative" style={{zIndex: "1"}}>
              <div class="rounded-xl bg-white p-6 text-center shadow-xl">
                <div
                  class="mx-auto flex h-40 w-40 -translate-y-24 transform items-center justify-center rounded-full p-8 bg-white shadow-lg shadow-yellow-500/40">
                  <img src={quality} alt="quality"/>
                </div>
                <h1 class="text-darken mb-3 text-5xl font-medium lg:px-14 -mt-10">Quality</h1>
                <p class="px-4 text-gray-500">We provide high-grade industrial fuel oil that meets top industry standards for performance and reliability.

                </p>
              </div>
              <div class="rounded-xl bg-white p-6 text-center shadow-xl">
                <div
                  class="mx-auto flex h-40 w-40 -translate-y-24 transform items-center justify-center rounded-full p-8 bg-white shadow-lg shadow-yellow-500/40">
                  <img src={trust} alt="trust"/>
                </div>
                <h1 class="text-darken mb-3 text-5xl font-medium lg:px-14 -mt-10">Trustworthy</h1>
                <p class="px-4 text-gray-500">With years of experience, we are a reliable partner committed to transparency and integrity in every deal.
                </p>
              </div>
              <div class="rounded-xl bg-white p-6 text-center shadow-xl">
                <div
                  class="mx-auto flex h-40 w-40 -translate-y-24 transform items-center justify-center rounded-full p-4 bg-white shadow-lg shadow-yellow-500/40">
                  <img src={efficient} alt="efficiency"/>
                </div>
                <h1 class="text-darken mb-3 text-5xl font-medium lg:px-14 -mt-10">Efficiency</h1>
                <p class="px-4 text-gray-500">Our efficient processes and timely deliveries keep your operations running smoothly without delays.

                </p>
              </div>
            </div>
            

            <img src={shape1} width="1089" height="605" loading="lazy" alt=""
              class="shape video-shape-1" />

            <img src={shape2} width="158" height="174" loading="lazy" alt=""
              class="shape video-shape-2" style={{zIndex: "2"}} />

          </div>

        </div>
      </section>
        </>
    )
}

export default Choose