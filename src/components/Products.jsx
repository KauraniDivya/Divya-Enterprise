import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductDetail from './ProductDetails';
import { useProductContext } from './context/ProductContext';



const Products = () => {
  const { products } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    console.log(product);
  };

  return (
    <>
      <section className="section category" id="products" aria-label="category">
        <div className="container">
          <p className="section-subtitle">Our Products</p>
          <h2 className="h2 section-title">
            A Wide Range of <span className="span">Petroleum</span> Products.
          </h2>

          <div className="flex flex-wrap gap-10 py-50 mt-20 lg:gap-12 items-center justify-center">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
              <div
                key={product.id}
                onClick={() => handleProductClick(product)}
                className="max-w-lg bg-white rounded-xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-500"
                style={{ height: "48rem" }}
              >
                <div className="p-4">
                  <img
                    className="rounded-xl ml-2 mt-2"
                    src={product.image}
                    style={{ height: "250px", minWidth: "full" }}
                    alt="Product"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-center text-center space-x-4">
                    <h1 className="text-4xl text-gray-900 font-bold">
                      {product.icon} {product.name}
                    </h1>
                  </div>
                  <p className="text-2xl mt-5" style={{ height: "8rem" }}>
                    {product.description}
                  </p>
                  <button
                   
                    type="button"
                    className="flex items-center justify-center text-center mt-4 w-full text-white hover:bg-yellow focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-2xl px-5 py-4 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    style={{ backgroundColor: "#fba700" }}
                  >
                    View Product
                    <svg
                      className="rtl:rotate-180 w-5 h-5 ms-2 pl-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {selectedProduct && <ProductDetail product={selectedProduct} />}
    </>
  );
};

export default Products;
