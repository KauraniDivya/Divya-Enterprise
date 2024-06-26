import React, { createContext, useContext } from 'react';
import product1 from "../images/product-1.png";
import product2 from "../images/product-2.png";
import product3 from "../images/product-3.png";
import product4 from "../images/product-4.png";
import product5 from "../images/product-5.png";
import product6 from "../images/product-6.png";

const ProductContext = createContext();

export const useProductContext = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
    const products = [
        {
          id: 1,
          name: "Condonation Oil",
          description: "Premium base oil with excellent viscosity and thermal stability, used to enhance engine and machinery performance.",
          image: product1,
          icon: "🔧"
        },
        {
          id: 2,
          name: "Furnace Oil",
          description: "High-efficiency fuel designed for industrial furnaces and boilers, providing consistent heat generation.",
          image: product2,
          icon: "🔥"
        },
        {
          id: 3,
          name: "Mix Hydrocarbon Oil",
          description: "Versatile oil blend suitable for various industrial applications, providing dependable lubrication.",
          image: product3,
          icon: "🔬"
        },
        {
          id: 4,
          name: "MTO",
          description: "Mineral Turpentine Oil (MTO) used in chemical processes, manufacturing, and as a solvent for paints and coatings.",
          image: product4,
          icon: "🧪"
        },
        {
          id: 5,
          name: "Industrial Solvent",
          description: "Industrial-grade solvent for cleaning, degreasing, and various chemical applications.",
          image: product5,
          icon: "🧼"
        },
        {
          id: 6,
          name: "Distillate Oil",
          description: "Distillate oil for engines, machinery, and industrial heating applications.",
          image: product6,
          icon: "⚙️"
        }
      ];

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};