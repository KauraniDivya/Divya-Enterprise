import React from 'react';
import product1 from "./images/product-1.png"
import product2 from "./images/product-2.png"
import product3 from "./images/product-3.png"
import product4 from "./images/product-4.png"
import product5 from "./images/product-5.png"
import product6 from "./images/product-6.png"
import oilbarrel from "./images/oil-barrel.png"

const Products = () => {
    return(
        <>
             <section class="section category" id="courses" aria-label="category">
        <div class="container">

          <p class="section-subtitle">Our Products</p>

          <h2 class="h2 section-title">
            A Wide Range of <span class="span">Petroleum</span> Products.
          </h2>
          
<div class="flex flex-wrap gap-10 py-50 mt-20 lg:justify-between items-center justify-center">
	<div
		class="max-w-lg bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
		<div class="p-4">
			<img class="rounded-xl ml-2 mt-2" src={product1} style={{height: "250px", minWidth: "full"}} alt="Dog" />
    </div>
			<div class="p-6">
      
				<div class="flex items-center justify-center text-center space-x-4">
          <img class="h-10 rounded-full w-16 h-auto" src={oilbarrel} alt="" />
					<h1 class="text-4xl text-gray-900 font-bold">Condontion Oil</h1>
				</div>
        <p class="mt-4 text-2xl">Base oil is a refined lubricating oil extracted from crude oil. It's a key ingredient in motor oils and industrial lubricants, offering crucial properties like viscosity and thermal stability for optimal machinery and engine performance.</p>
        <button type="button" class="flex items-center justify-center text-center mt-4 w-full text-white hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{backgroundColor: "#fba700"}}>
          Send Inquiry
          <svg class="rtl:rotate-180 w-5 h-5 ms-2 pl-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          </button>
				</div>
        
          
		</div>
	
  <div
		class="max-w-lg bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
		<div class="p-4">
			<img class="rounded-xl ml-2 mt-2" src={product2} style={{height: "250px", minWidth: "full"}} alt="Dog" />
    </div>
			<div class="p-6">
      
				<div class="flex items-center justify-center text-center space-x-4">
          <img class="h-10 rounded-full w-16 h-auto" src={oilbarrel} alt="" />
					<h1 class="text-4xl text-gray-900 font-bold">Furnace Oil</h1>
				</div>
        <p class="mt-4 text-2xl">Base oil is a refined lubricating oil extracted from crude oil. It's a key ingredient in motor oils and industrial lubricants, offering crucial properties like viscosity and thermal stability for optimal machinery and engine performance.</p>
        <button type="button" class="flex items-center justify-center text-center mt-4 w-full text-white hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{backgroundColor: "#fba700"}}>
          Send Inquiry
          <svg class="rtl:rotate-180 w-5 h-5 ms-2 pl-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          </button>
				</div>
        
          
		</div>

    <div
		class="max-w-lg bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
		<div class="p-4">
			<img class="rounded-xl ml-2 mt-2" src={product3} style={{height: "250px", minWidth: "full"}} alt="Dog" />
    </div>
			<div class="p-6">
      
				<div class="flex items-center justify-center text-center space-x-4">
          <img class="h-10 rounded-full w-16 h-auto" src={oilbarrel} alt="" />
					<h1 class="text-4xl text-gray-900 font-bold">Mix Hydrocarbon Oil</h1>
				</div>
        <p class="mt-4 text-2xl">Base oil is a refined lubricating oil extracted from crude oil. It's a key ingredient in motor oils and industrial lubricants, offering crucial properties like viscosity and thermal stability for optimal machinery and engine performance.</p>
        <button type="button" class="flex items-center justify-center text-center mt-4 w-full text-white hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{backgroundColor: "#fba700"}}>
          Send Inquiry
          <svg class="rtl:rotate-180 w-5 h-5 ms-2 pl-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          </button>
				</div>
        
          
		</div>
   
    <div
		class="max-w-lg bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
		<div class="p-4">
			<img class="rounded-xl ml-2 mt-2" src={product4} style={{height: "250px", minWidth: "full"}} alt="Dog" />
    </div>
			<div class="p-6">
      
				<div class="flex items-center justify-center text-center space-x-4">
          <img class="h-10 rounded-full w-16 h-auto" src={oilbarrel} alt="" />
					<h1 class="text-4xl text-gray-900 font-bold">MTO</h1>
				</div>
        <p class="mt-4 text-2xl">Base oil is a refined lubricating oil extracted from crude oil. It's a key ingredient in motor oils and industrial lubricants, offering crucial properties like viscosity and thermal stability for optimal machinery and engine performance.</p>
        <button type="button" class="flex items-center justify-center text-center mt-4 w-full text-white hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{backgroundColor: "#fba700"}}>
          Send Inquiry
          <svg class="rtl:rotate-180 w-5 h-5 ms-2 pl-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          </button>
				</div>
        
          
		</div>

    <div
		class="max-w-lg bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
		<div class="p-4">
			<img class="rounded-xl ml-2 mt-2" src={product5} style={{height: "250px", minWidth: "full"}} alt="Dog" />
    </div>
			<div class="p-6">
      
				<div class="flex items-center justify-center text-center space-x-4">
          <img class="h-10 rounded-full w-16 h-auto" src={oilbarrel} alt="" />
					<h1 class="text-4xl text-gray-900 font-bold">Industrial solvent</h1>
				</div>
        <p class="mt-4 text-2xl">Base oil is a refined lubricating oil extracted from crude oil. It's a key ingredient in motor oils and industrial lubricants, offering crucial properties like viscosity and thermal stability for optimal machinery and engine performance.</p>
        <button type="button" class="flex items-center justify-center text-center mt-4 w-full text-white hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{backgroundColor: "#fba700"}}>
          Send Inquiry
          <svg class="rtl:rotate-180 w-5 h-5 ms-2 pl-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          </button>
				</div>
        
          
		</div>

    <div
		class="max-w-lg bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500">
		<div class="p-4">
			<img class="rounded-xl ml-2 mt-2" src={product6} style={{height: "250px", minWidth: "full"}} alt="Dog" />
    </div>
			<div class="p-6">
      
				<div class="flex items-center justify-center text-center space-x-4">
          <img class="h-10 rounded-full w-16 h-auto" src={oilbarrel} alt="" />
					<h1 class="text-4xl text-gray-900 font-bold">Distillate Oil</h1>
				</div>
        <p class="mt-4 text-2xl">Base oil is a refined lubricating oil extracted from crude oil. It's a key ingredient in motor oils and industrial lubricants, offering crucial properties like viscosity and thermal stability for optimal machinery and engine performance.</p>
        <button type="button" class="flex items-center justify-center text-center mt-4 w-full text-white hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{backgroundColor: "#fba700"}}>
          Send Inquiry
          <svg class="rtl:rotate-180 w-5 h-5 ms-2 pl-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
          </button>
				</div>
        
          
		</div>
	</div>
 

</div>
     

    
      </section>
        </>
    )
}

export default Products