import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import product1 from "./images/product-1.png";
import product2 from "./images/product-2.png";
import product3 from "./images/product-3.png";
import product4 from "./images/product-4.png";
import product5 from "./images/product-5.png";
import product6 from "./images/product-6.png";

const products = [
  {
    id: 1,
    name: "Condonson Oil",
    description: "Premium base oil with excellent viscosity and thermal stability, used to enhance engine and machinery performance. This high-quality oil is designed to provide superior lubrication and protection for a wide range of industrial applications.",
    images: ["https://i.ibb.co/6HCh0BY/adorable-labrador-dog-studio.png"],
    icon: "🔧",
    Use: "Paint, Engine lubrication",
    Quantity: "20,000 l",
    PackType: "Tanker or Barrel",
    Density: "0.72 g/cm³",
    industries: [
      "Automotive",
      "Manufacturing",
      "Marine",
      "Power Generation",
      "Heavy Equipment",
      "Oil & Gas"
    ],
  },
  {
    id: 2,
    name: "Furnace Oil",
    description: "High-efficiency fuel designed for industrial furnaces and boilers, providing consistent heat generation and optimal combustion performance.",
    images: [product2],
    icon: "🔥",
    Use: "Industrial heating, Boiler",
    Quantity: "200 l - 20,000 l",
    PackType: "Tanker or Barrel",
    Density: "0.95 g/cm³",
    industries: [
      "Steel Manufacturing",
      "Glass Production",
      "Cement Industry",
      "Power Plants",
      "Petrochemical",
      "Paper & Pulp"
    ],
  },
  {
    id: 3,
    name: "Mix Hydrocarbon Oil (MHO)",
    description: "Versatile oil blend suitable for various industrial applications, providing dependable lubrication.",
    images: [product3],
    icon: "🔬",
    Use: "Multi-purpose lubricant",
    Quantity: "Tanker load",
    PackType: "Tanker",
    Density: "0.81 g/cm³",
    industries: [
      "Metalworking",
      "Plastics",
      "Rubber Manufacturing",
      "Textile",
      "Printing",
      "Woodworking"
    ],
  },
  {
    id: 4,
    name: "Mineral Turpentine Oil (MTO)",
    description: "Mineral Turpentine Oil (MTO) used in chemical processes, manufacturing, and as a solvent for paints and coatings.",
    images: [product4],
    icon: "🧪",
    Use: "Paint solvent",
    Quantity: "200 l - 20,000 l",
    PackType: "Tanker or Barrel",
    Density: "0.775 g/cm³",
    industries: [
      "Paint & Coatings",
      "Adhesives",
      "Cleaning Products",
      "Pharmaceuticals",
      "Electronics",
      "Automotive"
    ]
  },
  {
    id: 5,
    name: "Industrial Solvent",
    description: "Industrial-grade solvent for cleaning, degreasing, and various chemical applications.",
    images: [product5],
    icon: "🧼",
    Use: "Degreasing agent",
    Quantity: "200 l - 20,000 l",
    PackType: "Tanker or Barrel",
    Density: "0.91 g/cm³",
    industries: [
      "Automotive",
      "Aerospace",
      "Electronics",
      "Metal Fabrication",
      "Industrial Cleaning",
      "Chemical Processing"
    ]
  },
  {
    id: 6,
    description: "Industrial-grade solvent for cleaning, degreasing, and various chemical applications.",
    name: "Distillate Oil",
    images: [product6],
    icon: "⚙️",
    Use: "Fuel blend component",
    Quantity: "200 l - 20,000 l",
    PackType: "Tanker or Barrel",
    Density: "0.78 g/cm³",
    industries: [
      "Oil Refining",
      "Petrochemical",
      "Power Generation",
      "Marine",
      "Agriculture",
      "Construction"
    ],
  }
];

const relatedProducts = [
  {
    id: 1,
    name: "Condonson Oil",
    images: [product1],
  },
  {
    id: 2,
    name: "Furnace Oil",
    images: [product2],
  },
  {
    id: 3,
    name: "Mix Hydrocarbon Oil",
    images: [product3],
  },
  {
    id: 4,
    name: "MTO",
    images: [product4],
  },
  {
    id: 5,
    name: "Industrial Solvent",
    images: [product5],
  },
  {
    id: 6,
    name: "Distillate Oil",
    images: [product6],
  }
];

const Products = () => {
  return (
    <section className="section category bg-gray-100 py-16" id="products" aria-label="category">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-center text-3xl text-gray-600 mb-2">Our Products</p>
          <h2 className="lg:text-7xl text-5xl font-bold text-center text-gray-800 mb-12">
            A Wide Range of <span className="text-yellow-500">Petroleum</span> Products
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="flex"
            >
              <Link to={`/product/${product.id}`} className="block w-full">
                <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
                <div className="relative pb-2/3">
                  <div className="p-4">
                    <img
                      className="rounded-xl ml-2 mt-2"
                      src={product.images[0]}
                      // style={{ height: "250px", minWidth: "full" }}x
                      alt="Product"
                    />
                  </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-2xl font-semibold text-gray-800">
                        {product.icon} {product.name}
                      </h3>
                    </div>
                    <p className="text-gray-600 mb-4 flex-grow line-clamp-3">{product.description}</p>
                    <div className="mt-auto">
                      <button
                        className="flex w-full items-center justify-center bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300"
                      >
                        <FiShoppingCart className="mr-2" />
                        View Product
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { products, relatedProducts };  // Export the products array
export default Products;

