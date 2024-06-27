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
    <>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} />
      {/* Add more product details here */}
    </>
  );
};

export default ProductDetails;