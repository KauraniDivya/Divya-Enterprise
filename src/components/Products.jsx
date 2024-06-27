import React from 'react';
import { Link } from 'react-router-dom';
import product1 from "./images/product-1.png";
import product2 from "./images/product-2.png";
import product3 from "./images/product-3.png";
import product4 from "./images/product-4.png";
import product5 from "./images/product-5.png";
import product6 from "./images/product-6.png";

const products = [
  {
    id: 1,
    name: "Condonation Oil",
    description: "Premium base oil with excellent viscosity and thermal stability, used to enhance engine and machinery performance. This high-quality oil is designed to provide superior lubrication and protection for a wide range of industrial applications.",
    price: 49.99,
    rating: 4.5,
    reviewCount: 128,
    images: [product1, product2, product3, product4],
    colors: ["#FFD700", "#C0C0C0", "#CD7F32"],
    sizes: ["1L", "5L", "20L", "200L"],
    specifications: [
      "Viscosity: 40 cSt at 40°C",
      "Flash Point: 220°C",
      "Pour Point: -15°C",
      "Density: 0.88 g/cm³",
      "Oxidation Stability: Excellent",
      "Corrosion Protection: High",
    ],
    features: [
      "Excellent thermal stability",
      "High viscosity index",
      "Low volatility",
      "Oxidation resistance",
      "Enhanced wear protection",
      "Improved fuel efficiency",
      "Extended oil change intervals",
      "Compatibility with various seal materials",
    ],
    icon: "🔧",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    faqs: [
      {
        question: "What is the shelf life of Condonation Oil?",
        answer: "The shelf life of Condonation Oil is typically 5 years when stored properly in a cool, dry place away from direct sunlight."
      },
      {
        question: "Is Condonation Oil compatible with synthetic oils?",
        answer: "Yes, Condonation Oil is compatible with most synthetic oils. However, we recommend consulting the equipment manufacturer's guidelines before mixing different types of oils."
      },
      {
        question: "How often should I change Condonation Oil in my machinery?",
        answer: "The oil change interval depends on the specific application and operating conditions. Generally, we recommend changing the oil every 500-1000 hours of operation or as specified by your equipment manufacturer."
      }
    ],
    certifications: [
      "ISO 9001:2015",
      "API SN/CF",
      "ACEA A3/B4",
      "JASO MA2"
    ],
    temperatureRange: "-20°C to 150°C",
    pressureTolerance: "Up to 1000 bar",
    viscosity: "40 cSt at 40°C, 8 cSt at 100°C",
    flashPoint: "220°C",
    compatibility: "Compatible with most seals and gaskets",
    specificGravity: "0.88 at 15°C",
    industries: [
      "Automotive",
      "Manufacturing",
      "Marine",
      "Power Generation",
      "Mining",
      "Agriculture"
    ],
    reviews: [
      {
        user: "John D.",
        rating: 5,
        comment: "Excellent oil! Noticed improved performance in my machinery almost immediately."
      },
      {
        user: "Sarah M.",
        rating: 4,
        comment: "Good quality oil, but the packaging could be improved for easier pouring."
      },
      {
        user: "Robert L.",
        rating: 5,
        comment: "Been using this oil for years. Consistently great results and protection for my equipment."
      }
    ]
  },
  {
    id: 2,
    name: "Furnace Oil",
    description: "High-efficiency fuel designed for industrial furnaces and boilers, providing consistent heat generation and optimal combustion performance.",
    price: 89.99,
    rating: 4.2,
    reviewCount: 95,
    images: [product2, product3, product4, product5],
    colors: ["#8B4513", "#A52A2A", "#D2691E"],
    sizes: ["100L", "200L", "500L", "1000L"],
    specifications: [
      "Calorific Value: 10,200 kcal/kg",
      "Sulfur Content: <1%",
      "Viscosity: 180 cSt at 50°C",
      "Ash Content: 0.1%",
      "Carbon Residue: 1% max",
      "Water Content: 0.5% max"
    ],
    features: [
      "High energy efficiency",
      "Low maintenance cost",
      "Consistent heat output",
      "Suitable for various industrial applications",
      "Low sulfur emissions",
      "Excellent atomization properties",
      "Stable combustion characteristics",
      "Minimal sludge formation"
    ],
    icon: "🔥",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    faqs: [
      {
        question: "What types of furnaces is this oil suitable for?",
        answer: "Our Furnace Oil is suitable for a wide range of industrial furnaces and boilers, including those used in metal processing, chemical manufacturing, and power generation."
      },
      {
        question: "How does this oil compare to natural gas in terms of efficiency?",
        answer: "While natural gas is generally considered cleaner, our Furnace Oil offers comparable efficiency and is often more cost-effective, especially in areas where natural gas infrastructure is limited."
      },
      {
        question: "What measures are in place to ensure consistent quality?",
        answer: "We employ strict quality control measures throughout our production process, including regular testing and adherence to international standards, to ensure consistent quality in every batch."
      }
    ],
    certifications: [
      "ISO 14001:2015",
      "ASTM D396",
      "EN 590",
      "BS 2869 Class D"
    ],
    temperatureRange: "Ambient to 1000°C",
    pressureTolerance: "Up to 10 bar",
    viscosity: "180 cSt at 50°C",
    flashPoint: "66°C min",
    compatibility: "Compatible with most standard furnace equipment",
    specificGravity: "0.92 at 15°C",
    industries: [
      "Steel Manufacturing",
      "Glass Production",
      "Cement Industry",
      "Food Processing",
      "Textile Industry",
      "Chemical Manufacturing"
    ],
    reviews: [
      {
        user: "Michael T.",
        rating: 4,
        comment: "Good quality furnace oil. Noticed a slight improvement in our furnace efficiency."
      },
      {
        user: "Emma S.",
        rating: 5,
        comment: "Excellent product! Consistent quality and performance. Highly recommended."
      },
      {
        user: "David K.",
        rating: 4,
        comment: "Reliable furnace oil. Would appreciate more bulk purchasing options."
      }
    ]
  },
  {
    id: 3,
    name: "Mix Hydrocarbon Oil",
    description: "Versatile oil blend suitable for various industrial applications, providing dependable lubrication.",
    price: 59.99,
    rating: 4.7,
    reviewCount: 152,
    images: [product3, product4, product5],
    colors: ["#4682B4", "#1E90FF", "#87CEEB"],
    sizes: ["10L", "25L", "50L"],
    specifications: [
      "Viscosity Index: 95",
      "Flash Point: 200°C",
      "Pour Point: -20°C",
      "Specific Gravity: 0.86"
    ],
    features: [
      "Multi-purpose application",
      "Excellent lubricity",
      "Good thermal stability",
      "Corrosion protection"
    ],
    icon: "🔬"
  },
  {
    id: 4,
    name: "MTO",
    description: "Mineral Turpentine Oil (MTO) used in chemical processes, manufacturing, and as a solvent for paints and coatings.",
    price: 39.99,
    rating: 4.3,
    reviewCount: 87,
    images: [product4, product5, product6],
    colors: ["#F0F8FF", "#E6E6FA", "#FFF0F5"],
    sizes: ["500ml", "1L", "5L"],
    specifications: [
      "Boiling Range: 145-200°C",
      "Flash Point: 35°C",
      "Aromatic Content: <25%",
      "Density: 0.78 g/cm³"
    ],
    features: [
      "Excellent solvent properties",
      "Quick evaporation",
      "Low residue",
      "Compatible with various coatings"
    ],
    icon: "🧪"
  },
  {
    id: 5,
    name: "Industrial Solvent",
    description: "Industrial-grade solvent for cleaning, degreasing, and various chemical applications.",
    price: 29.99,
    rating: 4.6,
    reviewCount: 113,
    images: [product5, product6, product1],
    colors: ["#00FFFF", "#7FFFD4", "#40E0D0"],
    sizes: ["1L", "5L", "10L"],
    specifications: [
      "Boiling Point: 56°C",
      "Flash Point: -17°C",
      "Evaporation Rate: 2.0 (n-Butyl Acetate = 1)",
      "Vapor Pressure: 180 mmHg at 20°C"
    ],
    features: [
      "Fast-acting cleaning power",
      "Leaves no residue",
      "Suitable for multiple surfaces",
      "Cost-effective solution"
    ],
    icon: "🧼"
  },
  {
    id: 6,
    name: "Distillate Oil",
    description: "Distillate oil for engines, machinery, and industrial heating applications.",
    price: 69.99,
    rating: 4.4,
    reviewCount: 76,
    images: [product6, product1, product2],
    colors: ["#2F4F4F", "#696969", "#778899"],
    sizes: ["20L", "50L", "200L"],
    specifications: [
      "Cetane Number: 45",
      "Sulfur Content: <0.5%",
      "Viscosity: 2.5 cSt at 40°C",
      "Cloud Point: -5°C"
    ],
    features: [
      "High energy content",
      "Clean burning",
      "Low maintenance requirements",
      "Suitable for various engines and heating systems"
    ],
    icon: "⚙️"
  }
];



const Products = () => {
  return (
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
  );
};

export { products };  // Export the products array
export default Products;