import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";

import { motion } from "framer-motion";
import { products } from './Products';
import {
  FaStar, FaStarHalfAlt, FaRegStar, FaHeart, FaShare, FaTruck, FaBox,
  FaShieldAlt, FaExchangeAlt, FaInfoCircle, FaCheck, FaQuestionCircle,
  FaShoppingCart, FaBolt, FaTag, FaPercentage, FaGift, FaCreditCard,
  FaUserAlt, FaCommentAlt, FaThumbsUp, FaCamera, FaVideo, FaChartBar,
  FaClipboardList, FaMapMarkerAlt, FaClock, FaAward, FaCertificate,
  FaRecycle, FaLeaf, FaIndustry, FaFlask, FaBalanceScale, FaThermometerHalf,
  FaCompress, FaTint, FaFireAlt, FaCog, FaBarcode, FaGlobe, FaShip, FaTruckLoading
} from 'react-icons/fa';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  if (!product) {
    return <div>Product not found</div>;
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-4 relative"
              >
                <ReactImageMagnify {...{
  smallImage: {
    alt: product.name,
    isFluidWidth: true,
    src: product.images[selectedImage],
  },
  largeImage: {
    src: product.images[selectedImage],
    width: 1200,
    height: 1800,
  },
  enlargedImageContainerDimensions: {
    width: 600,
    height: 900,
  },
  isHintEnabled: true,
  shouldHideHintAfterFirstActivation: false,
  enlargedImagePosition: "beside",
}} />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-2 rounded-full shadow-md text-red-500 hover:bg-red-500 hover:text-white transition duration-300"
                  >
                    <FaHeart />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-white p-2 rounded-full shadow-md text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
                  >
                    <FaShare />
                  </motion.button>
                </div>
              </motion.div>
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <motion.img
                    key={index}
                    src={image}
                    alt={`${product.name} - ${index + 1}`}
                    className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
                      selectedImage === index ? 'border-2 border-blue-500' : ''
                    }`}
                    onClick={() => setSelectedImage(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  />
                ))}
              </div>
            </div>
            {/* Product Details */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl font-bold mb-4"
              >
                {product.name}
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center mb-4"
              >
                <div className="flex mr-2">
                  {renderStars(product.rating)}
                </div>
                <span className="text-gray-600">{product.reviewCount} reviews</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-3xl font-bold mb-4"
              >
                ${product.price.toFixed(2)}
              </motion.div>

              {/* Color options */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="mb-6"
              >
                <h3 className="font-semibold mb-2">Color:</h3>
                <div className="flex space-x-2">
                  {product.colors.map((color) => (
                    <motion.div
                      key={color}
                      className={`w-8 h-8 rounded-full cursor-pointer border-2 border-gray-300`}
                      style={{ backgroundColor: color }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    ></motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Size options */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mb-6"
              >
                <h3 className="font-semibold mb-2">Size:</h3>
                <div className="flex space-x-2">
                  {product.sizes.map((size) => (
                    <motion.button
                      key={size}
                      className="px-4 py-2 border border-gray-300 rounded-md hover:border-blue-500 hover:bg-blue-50 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {size}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Quantity selector */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mb-6"
              >
                <h3 className="font-semibold mb-2">Quantity:</h3>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </motion.div>

              {/* Add to Cart and Buy Now buttons */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex space-x-4 mb-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-yellow-400 text-white py-3 px-6 rounded-md hover:bg-yellow-500 transition duration-300"
                >
                  <FaShoppingCart className="inline-block mr-2" /> Add to Cart
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition duration-300"
                >
                  <FaBolt className="inline-block mr-2" /> Buy Now
                </motion.button>
              </motion.div>

              {/* Delivery and return info */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="border-t border-gray-200 pt-6"
              >
                <div className="flex items-center mb-2">
                  <FaTruck className="text-green-500 mr-2" />
                  <span>Free Delivery</span>
                </div>
                <div className="flex items-center mb-2">
                  <FaExchangeAlt className="text-blue-500 mr-2" />
                  <span>30-Day Returns</span>
                </div>
                <div className="flex items-center">
                  <FaShieldAlt className="text-gray-500 mr-2" />
                  <span>2-Year Warranty</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Product Information Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="bg-white rounded-lg shadow-lg p-6 mt-8"
        >
          <div className="flex border-b border-gray-200">
            <button
              className={`py-2 px-4 font-semibold ${
                activeTab === "description" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`py-2 px-4 font-semibold ${
                activeTab === "specifications" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </button>
            <button
              className={`py-2 px-4 font-semibold ${
                activeTab === "features" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
          </div>
          <div className="mt-4">
            {activeTab === "description" && (
              <p className="text-gray-700">{product.description}</p>
            )}
            {activeTab === "specifications" && (
              <ul className="list-disc list-inside">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="text-gray-700">{spec}</li>
                ))}
              </ul>
            )}
            {activeTab === "features" && (
              <ul className="grid grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <FaCheck className="text-green-500 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>

        {/* Customer Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="bg-white rounded-lg shadow-lg p-6 mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
          <div className="flex items-center mb-4">
            <div className="text-4xl font-bold mr-4">{product.rating.toFixed(1)}</div>
            <div>
              <div className="flex mb-1">{renderStars(product.rating)}</div>
              <div className="text-sm text-gray-600">Based on {product.reviewCount} reviews</div>
            </div>
          </div>
          <div className="space-y-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <div className="flex items-center mb-2">
                  <FaUserAlt className="text-gray-400 mr-2" />
                  <span className="font-semibold">{review.user}</span>
                </div>
                <div className="flex mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </motion.div>

      {/* Related Products */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="bg-white rounded-lg shadow-lg p-6 mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((relatedProduct) => (
              <motion.div
                key={relatedProduct.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={relatedProduct.images[0]}
                  alt={relatedProduct.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">${relatedProduct.price.toFixed(2)}</span>
                    <div className="flex items-center">
                      <FaStar className="text-yellow-400 mr-1" />
                      <span>{relatedProduct.rating.toFixed(1)}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Product Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.3 }}
          className="bg-white rounded-lg shadow-lg p-6 mt-8"
        >
          <h2 className="text-2xl font-bold mb-4">Product Video</h2>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={product.videoUrl}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            ></iframe>
          </div>
        </motion.div>

        {/* Frequently Asked Questions */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.4 }}
  className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl shadow-xl p-8 mt-12"
>
  <h2 className="text-3xl font-bold mb-6 text-indigo-800">Frequently Asked Questions</h2>
  <div className="space-y-6">
    {product.faqs.map((faq, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="bg-white rounded-lg shadow-md p-6"
      >
        <h3 className="font-semibold text-xl mb-3 text-indigo-700">{faq.question}</h3>
        <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
      </motion.div>
    ))}
  </div>
</motion.div>

{/* Certifications and Awards */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.5 }}
  className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl shadow-xl p-8 mt-12"
>
  <h2 className="text-3xl font-bold mb-6 text-teal-800">Certifications and Awards</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {product.certifications.map((cert, index) => (
      <motion.div
        key={index}
        className="flex flex-col items-center bg-white rounded-lg shadow-md p-4"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      >
        <FaCertificate className="text-5xl text-teal-500 mb-3" />
        <span className="text-center font-medium text-gray-800">{cert}</span>
      </motion.div>
    ))}
  </div>
</motion.div>

{/* Environmental Impact */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.6 }}
  className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl shadow-xl p-8 mt-12"
>
  <h2 className="text-3xl font-bold mb-6 text-emerald-800">Environmental Impact</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <motion.div className="bg-white rounded-lg shadow-md p-6 flex items-start" whileHover={{ scale: 1.03 }}>
      <FaLeaf className="text-emerald-500 text-4xl mr-4 mt-1" />
      <div>
        <h3 className="font-semibold text-xl mb-2 text-emerald-700">Eco-Friendly Production</h3>
        <p className="text-gray-700 leading-relaxed">Our manufacturing process is designed to minimize environmental impact, using sustainable practices throughout our supply chain.</p>
      </div>
    </motion.div>
    <motion.div className="bg-white rounded-lg shadow-md p-6 flex items-start" whileHover={{ scale: 1.03 }}>
      <FaRecycle className="text-blue-500 text-4xl mr-4 mt-1" />
      <div>
        <h3 className="font-semibold text-xl mb-2 text-blue-700">Recyclable Packaging</h3>
        <p className="text-gray-700 leading-relaxed">We use 100% recyclable materials for our product packaging, reducing waste and promoting a circular economy.</p>
      </div>
    </motion.div>
  </div>
</motion.div>

{/* Technical Specifications */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.7 }}
  className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl shadow-xl p-8 mt-12"
>
  <h2 className="text-3xl font-bold mb-6 text-slate-800">Technical Specifications</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { icon: FaThermometerHalf, color: "text-red-500", label: "Temperature Range", value: product.temperatureRange },
      { icon: FaCompress, color: "text-blue-500", label: "Pressure Tolerance", value: product.pressureTolerance },
      { icon: FaTint, color: "text-blue-300", label: "Viscosity", value: product.viscosity },
      { icon: FaFireAlt, color: "text-orange-500", label: "Flash Point", value: product.flashPoint },
      { icon: FaCog, color: "text-gray-500", label: "Compatibility", value: product.compatibility },
      { icon: FaBalanceScale, color: "text-green-500", label: "Specific Gravity", value: product.specificGravity },
    ].map((spec, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-lg shadow-md p-4 flex items-center"
        whileHover={{ scale: 1.05 }}
      >
        <spec.icon className={`${spec.color} text-3xl mr-4`} />
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{spec.label}</h3>
          <p className="text-gray-700">{spec.value}</p>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

{/* Application Industries */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.8 }}
  className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl shadow-xl p-8 mt-12"
>
  <h2 className="text-3xl font-bold mb-6 text-indigo-800">Application Industries</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
    {product.industries.map((industry, index) => (
      <motion.div
        key={index}
        className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
        whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      >
        <FaIndustry className="text-5xl text-indigo-500 mb-3" />
        <span className="font-medium text-gray-800">{industry}</span>
      </motion.div>
    ))}
  </div>
</motion.div>

{/* Product Support */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 1.9 }}
  className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl shadow-xl p-8 mt-12"
>
  <h2 className="text-3xl font-bold mb-6 text-cyan-800">Product Support</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold shadow-lg hover:from-blue-600 hover:to-blue-700 transition duration-300"
    >
      <FaQuestionCircle className="mr-3 text-2xl" /> Technical Support
    </motion.button>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-8 rounded-lg text-lg font-semibold shadow-lg hover:from-green-600 hover:to-green-700 transition duration-300"
    >
      <FaCommentAlt className="mr-3 text-2xl" /> Live Chat
    </motion.button>
  </div>
</motion.div>
      </div>

      {/* Floating Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 2 }}
        className="fixed bottom-4 right-4 flex flex-col space-y-2"
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
        >
          <FaQuestionCircle className="text-xl" />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
        >
          <FaCommentAlt className="text-xl" />
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProductDetails;