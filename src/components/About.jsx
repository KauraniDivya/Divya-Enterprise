import React from "react";
import about from "./images/about.jpg"
import shape1 from "./images/hero-shape-1 1.svg"
import shape4 from "./images/about-shape-4.svg"
import shape3 from "./images/about-shape-3.png"

const About = () =>{
    return (
        <>
        <div >
             <section class="section about" id="about" aria-label="about">
        <div class="container mt-20" >

          <figure class="about-banner">

            <div class="img-holder max-w-lg">
              <img src={about} width="420" height="270" loading="lazy" alt="about banner"
                class="img-cover" />
            </div>


            <img src={shape1}  loading="lazy" alt=""
              class="shape about-shape-2 max-w-lg lg:max-w-3xl lg:ml-0  ml-2" />

            <img src={shape3} width="722" height="528" loading="lazy" alt=""
              class="shape about-shape-3" />

          </figure>

          <div class="about-content">

            <p class="section-subtitle lg:mt-0 mt-12">About Us</p>

            <h2 class="h2 section-title">
               <span class="span">Decades</span> of Trading Excellence
            </h2>

            <p class="section-text">
              Divya Enterprise is a well-established company specializing exclusively in industrial fuels. Based in Ahmedabad, Gujarat, Divya Enterprise is committed to providing the highest quality industrial fuels to its clients.This focus on quality and expertise ensures that our company consistently delivers products that meet and exceed client expectations. With its dedicated approach and advanced equipment, we have earned a reputation for reliability and excellence in the industrial fuels market.
            </p>

            <ul class="about-list">

              <li class="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                <span class="span">High Quality Product Assurance</span>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                <span class="span">Decades of Industry Expertise</span>
              </li>

              <li class="about-item">
                <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>

                <span class="span">Dedicated Service</span>
              </li>

            </ul>

            <img src={shape4} width="100" height="100" loading="lazy" alt=""
              class="shape about-shape-4" />

          </div>

        </div>
      </section>
      <h2 class="h2 section-title" >
        About Our  <span class="span">Company</span>
      </h2>
      <div class="relative overflow-x-auto mx-auto max-w-6xl shadow-lg p-4 bg-white mt-10 mb-20 rounded-lg lg:mb-72">
       
        <table class="w-full text-md text-left text-gray-700 border border-gray-200 rounded-lg ">
            <thead class="text-black uppercase ">
                <tr>
                    <th scope="col" class="px-6 py-3 " style={{backgroundColor: "#f8ab12", fontWeight: "600"}}>
                        Basic Information
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr class="bg-gray-100 border-b border-gray-200 hover:bg-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap rounded-l-lg">
                        Nature of Business
                    </th>
                    <td class="px-6 py-4 rounded-r-lg">
                        Wholesaler/Distributor, Trader and Supplier
                    </td>
                </tr>
                <tr class="bg-gray-50 border-b border-gray-200 hover:bg-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap rounded-l-lg">
                        Year of Establishment
                    </th>
                    <td class="px-6 py-4 rounded-r-lg">
                        Since 2002
                    </td>
                </tr>
                <tr class="bg-gray-100 border-b border-gray-200 hover:bg-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap rounded-l-lg">
                        Warehouse Facility
                    </th>
                    <td class="px-6 py-4 rounded-r-lg">
                        Yes
                    </td>
                </tr>
                <tr class="bg-gray-50 border-b border-gray-200 hover:bg-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap rounded-l-lg">
                        Company Branches
                    </th>
                    <td class="px-6 py-4 rounded-r-lg">
                        02
                    </td>
                </tr>
                <tr class="bg-gray-100 border-b border-gray-200 hover:bg-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap rounded-l-lg">
                        Annual Turnover
                    </th>
                    <td class="px-6 py-4 rounded-r-lg">
                        Above INR Rs 5 CR
                    </td>
                </tr>
                <tr class="text-black uppercase">
                    <th scope="col" class="px-6 py-3" style={{backgroundColor: "#f8ab12", fontWeight: "600"}}>
                        Statutory Profile
                    </th>
                </tr>
                <tr class="bg-gray-50 border-b border-gray-200 hover:bg-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap rounded-l-lg">
                        GST No
                    </th>
                    <td class="px-6 py-4 rounded-r-lg">
                        24AHVPK9629H2ZO
                    </td>
                </tr>
                <tr class="bg-gray-100 border-b border-gray-200 hover:bg-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap rounded-l-lg">
                        Banker
                    </th>
                    <td class="px-6 py-4 rounded-r-lg">
                        ICICI Bank Ltd
                    </td>
                </tr>
                <tr class="text-black uppercase">
                    <th scope="col" class="px-6 py-3" style={{backgroundColor: "#f8ab12", fontWeight: "600"}}>
                        Payment and Shipment Details
                    </th>
                </tr>
                <tr class="bg-gray-50 border-b border-gray-200 hover:bg-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap rounded-l-lg">
                        Payment Mode
                    </th>
                    <td class="px-6 py-4 rounded-r-lg">
                        <ul class="list-disc list-inside list-square">
                            <li>Cash</li>
                            <li>Credit Card</li>
                            <li>DD</li>
                            <li>Cheque</li>
                            <li>Bank Transfer</li>
                        </ul>
                    </td>
                </tr>
                <tr class="bg-gray-100 border-b border-gray-200 hover:bg-gray-200">
                    <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap rounded-l-lg">
                        Shipment Mode
                    </th>
                    <td class="px-6 py-4 rounded-r-lg">
                        By Road
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    </div>
        </>
    )
}

export default About