import React from "react";
import { useParams } from "react-router-dom";
import { products } from './Products';  // Import the products array

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="font-sans dark:bg-[#1e232e] bg-white mt-28">
    <div className="p-6 lg:max-w-7xl max-w-4xl mx-auto">
      <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_#f96b004d] dark:shadow-[0_2px_10px_-3px_rgba(255,255,255,0.3)] p-6 h-[30rem]">
        <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">

          <div className="px-4 py-10 rounded-xl shadow-[0_2px_10px_-3px_#f96b004d] dark:shadow-[0_2px_10px_-3px_rgba(255,255,255,0.3)] flex justify-center items-center align-middle h-[27rem] ">
            <img src={product.image} width={500} height={500} alt="Product" className=" w-auto rounded object-fit h-auto " />

          </div>


        </div>

        <div className="lg:col-span-2 flex-col items-center align-middle">
          <h2 className="text-2xl font-extrabold text-[#333] dark:text-white">{product.name}</h2>
          <div className="flex flex-wrap gap-4 mt-4">
            <p className="text-[#333] text-3xl font-bold dark:text-white">{product.description}</p>
            {/* <p className="text-gray-400 text-lg"> <span className="text-sm ml-1">Tax included</span></p> */}
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <a href="/"><p className="text-blue-400 text-lg font-normal">Click to view more</p></a>
          </div>

<div className="flex flex-wrap gap-4 mt-10">
<button type="button" className="px-2.5 py-1.5 bg-gray-100 text-xs text-gray-800 rounded-md flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="currentColor" viewBox="0 0 512 512">
                  <path d="M453.332 85.332c0 38.293-31.039 69.336-69.332 69.336s-69.332-31.043-69.332-69.336C314.668 47.043 345.707 16 384 16s69.332 31.043 69.332 69.332zm0 0" data-original="#000000" />
                  <path d="M384 170.668c-47.063 0-85.332-38.273-85.332-85.336C298.668 38.273 336.938 0 384 0s85.332 38.273 85.332 85.332c0 47.063-38.27 85.336-85.332 85.336zM384 32c-29.418 0-53.332 23.938-53.332 53.332 0 29.398 23.914 53.336 53.332 53.336s53.332-23.938 53.332-53.336C437.332 55.938 413.418 32 384 32zm69.332 394.668C453.332 464.957 422.293 496 384 496s-69.332-31.043-69.332-69.332c0-38.293 31.039-69.336 69.332-69.336s69.332 31.043 69.332 69.336zm0 0" data-original="#000000" />
                  <path d="M384 512c-47.063 0-85.332-38.273-85.332-85.332 0-47.063 38.27-85.336 85.332-85.336s85.332 38.273 85.332 85.336c0 47.059-38.27 85.332-85.332 85.332zm0-138.668c-29.418 0-53.332 23.938-53.332 53.336C330.668 456.063 354.582 480 384 480s53.332-23.938 53.332-53.332c0-29.398-23.914-53.336-53.332-53.336zM154.668 256c0 38.293-31.043 69.332-69.336 69.332C47.043 325.332 16 294.293 16 256s31.043-69.332 69.332-69.332c38.293 0 69.336 31.039 69.336 69.332zm0 0" data-original="#000000" />
                  <path d="M85.332 341.332C38.273 341.332 0 303.062 0 256s38.273-85.332 85.332-85.332c47.063 0 85.336 38.27 85.336 85.332s-38.273 85.332-85.336 85.332zm0-138.664C55.914 202.668 32 226.602 32 256s23.914 53.332 53.332 53.332c29.422 0 53.336-23.934 53.336-53.332s-23.914-53.332-53.336-53.332zm0 0" data-original="#000000" />
                  <path d="M135.703 245.762c-7.426 0-14.637-3.864-18.562-10.774-5.825-10.218-2.239-23.254 7.98-29.101l197.95-112.852c10.218-5.867 23.253-2.281 29.1 7.977 5.825 10.218 2.24 23.254-7.98 29.101L146.238 242.965a21.195 21.195 0 0 1-10.535 2.797zm197.93 176c-3.586 0-7.211-.899-10.54-2.797L125.142 306.113c-10.22-5.824-13.801-18.86-7.977-29.101 5.8-10.239 18.856-13.844 29.098-7.977l197.953 112.852c10.219 5.824 13.8 18.86 7.976 29.101-3.945 6.91-11.156 10.774-18.558 10.774zm0 0" data-original="#000000" />
                </svg><span className="text-xl ml-4">Share Product</span>
              </button>
          </div>
          <div className="flex flex-wrap gap-4 mt-10">
            <button type="button" className="min-w-full px-4 py-2.5 border border-[#d26638] bg-transparent hover:bg-gray-50 text-[#d26638] text-sm font-semibold rounded">Request to Callback</button>
          </div>
          <div className="flex flex-wrap gap-4 mt-5">
            <button type="button" className="min-w-full px-4 py-3 bg-[#d26638] hover:bg-[#d26638] text-white text-sm font-semibold rounded">Send Inquiry</button>
          </div>
        </div>
      </div>

      <div className=" shadow-[0_2px_10px_-3px_#f96b004d] dark:shadow-[0_2px_10px_-3px_rgba(255,255,255,0.3)] p-6 lg:mt-16 mt-[25rem]">
        <h3 className="text-lg font-bold text-[#333] dark:text-white">Product information</h3>
        <ul className="mt-6 space-y-6 text-[#333] dark:text-white">
          <li className="text-sm">Minimum Order Quantity <span className="ml-4 float-right">LAPTOP</span></li>
          <li className="text-sm">Density <span className="ml-4 float-right">16 BG</span></li>
          <li className="text-sm">Sample Available <span className="ml-4 float-right">1000 BG</span></li>
          <li className="text-sm">Packaging Details <span className="ml-4 float-right">INTEL CORE I7-12700H</span></li>
          <li className="text-sm">Price <span className="ml-4 float-right">2.3 - 4.7 GHz</span></li>
          <li className="text-sm">Sample Policy <span className="ml-4 float-right">16.0</span></li>
        </ul>
      </div>


    </div>
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
    <div className="container">
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-[90%] px-4 ">
          <div className="mb-12 rounded-sm bg-white px-8 py-11 shadow-[0_2px_10px_-3px_#f96b004d] dark:shadow-[0_2px_10px_-3px_rgba(255,255,255,0.3)] dark:bg-[#1e232e] sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]" data-wow-delay=".15s">
            <h2 className="mb-3 text-2xl text-center font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
              Enter Buying Requirement Details
            </h2>
            
            <form>
<div className="-mx-4 flex flex-wrap">
  <div className="w-full px-4">
    <div className="mb-8">
      <label htmlFor="product" className="mb-3 block text-sm font-medium text-dark dark:text-white">
        Select Product to Get a Quotation
      </label>
      <select
        name="product"
        id="product"
        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-white dark:border-transparent dark:bg-[#3f3f3f73] dark:text-body-color-dark dark:shadow-two dark:focus:border-white dark:focus:shadow-none"
      >
        <option value="">Select a product</option>
        <option value="product1">Product 1</option>
        <option value="product2">Product 2</option>
        <option value="product3">Product 3</option>
      </select>
    </div>
  </div>

  <div className="w-full px-4">
    <div className="mb-8">
      <label htmlFor="details" className="mb-3 block text-sm font-medium text-dark dark:text-white">
        Additional Details
      </label>
      <textarea
        name="details"
        id="details"
        rows={5}
        placeholder="To get accurate quotes, enter usage, quantity required, and special requests if any."
        className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-white dark:border-transparent dark:bg-[#3f3f3f73] dark:text-body-color-dark dark:shadow-two dark:focus:border-white dark:focus:shadow-none"
      ></textarea>
    </div>
  </div>

  <div className="w-full px-4">
    <div className="mb-8">
      <button
        type="button"
        className="rounded-sm bg-[#d26638] hover:bg-[#d26638]  px-4 py-3 text-base font-medium  text-white shadow-submit duration-300 dark:shadow-submit-dark"
      >
       + Add Attachments
      </button>
      <p className="text-sm text-dark dark:text-white mt-2">Note: File size below 5MB.</p>
    </div>
  </div>

  <div className="w-full px-4 md:w-1/2">
    <div className="mb-8">
      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
        Your Email
      </label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email"
        className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-white dark:border-transparent dark:bg-[#3f3f3f73] dark:text-body-color-dark dark:shadow-two dark:focus:border-white dark:focus:shadow-none"
      />
    </div>
  </div>

  <div className="w-full px-4 md:w-1/2">
    <div className="mb-8">
      <label htmlFor="mobile" className="mb-3 block text-sm font-medium text-dark dark:text-white">
        Your Mobile Number
      </label>
      <div className="flex">
        <select
          name="country-code"
          className="border-stroke rounded-sm border bg-[#f8f8f8] px-4 py-3 text-base text-body-color outline-none focus:border-white dark:border-transparent dark:bg-[#3f3f3f73] dark:text-body-color-dark dark:shadow-two dark:focus:border-white dark:focus:shadow-none"
        >
          <option value="+91">+91</option>
          <option value="+1">+1</option>
          <option value="+44">+44</option>
          {/* <!-- Add more country codes as needed --> */}
        </select>
        <input
          type="text"
          name="mobile"
          placeholder="Enter your mobile number"
          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-white dark:border-transparent dark:bg-[#3f3f3f73] dark:text-body-color-dark dark:shadow-two dark:focus:border-white dark:focus:shadow-none ml-2"
        />
      </div>
    </div>
  </div>

  <div className="w-full px-4">
    <button
      type="submit"
      className="rounded-sm bg-[#d26638] hover:bg-[#d26638] px-4 py-3 text-base font-medium text-white shadow-submit duration-300 dark:shadow-submit-dark"
    >
      Submit
    </button>
  </div>
</div>
</form>

          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
  );
};

export default ProductDetails;