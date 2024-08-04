import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ReactImageMagnify from "react-image-magnify";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import { products, relatedProducts } from "./Products";
import {
  FaShare,
  FaBolt,
  FaIndustry,
  FaThermometerHalf,
  FaCompress,
  FaTint,
  FaFireAlt,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import ContactFormPopup from "./ContactFormPopup"; // Import the new component

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false); // New state for the popup
  function ScrollToTop() {
    const location = useLocation();
    
    React.useEffect(() => {
      window.scrollTo(0, 0);
    }, [location.pathname]);
    
    return null;
  }
  if (!product) {
    return <div>Product not found</div>;
  }
  const currentUrl = `https://divya-enterprise.vercel.app/product/${id}`;

  const handleShare = (platform) => {
    const url = window.location.href;
    let shareUrl;

    switch (platform) {
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          `Check out this product: ${product.name} - ${url}`
        )}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank");
  };
  return (
    <>
          <ScrollToTop />

     <Helmet>
        <title>{`${product.name} | Divya Enterprise`}</title>
        <meta name="description" content={product.description.slice(0, 160)} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="product" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={`${product.name} | Divya Enterprise`} />
        <meta property="og:description" content={product.description.slice(0, 160)} />
        <meta property="og:image" content={product.images[0]} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={currentUrl} />
        <meta property="twitter:title" content={`${product.name} | Divya Enterprise`} />
        <meta property="twitter:description" content={product.description.slice(0, 160)} />
        <meta property="twitter:image" content={product.images[0]} />
      </Helmet>
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
              <div className="relative">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4"
                >
                  <ReactImageMagnify
                    {...{
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
                        width: "150%",
                        height: "150%",
                      },
                      isHintEnabled: true,
                      shouldHideHintAfterFirstActivation: false,
                      enlargedImagePosition: "beside",
                    }}
                  />
                               <div className="absolute top-4 right-4 flex space-x-2">
                  <motion.div className="relative">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white p-2 rounded-full shadow-md text-blue-500 hover:bg-blue-500 hover:text-white transition duration-300"
                      onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
                    >
                      <FaShare />
                    </motion.button>
                    {isShareMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10"
                      >
                        <div className="py-1">
                          <button
                            onClick={() => handleShare("whatsapp")}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          >
                            <FaWhatsapp className="mr-2" /> WhatsApp
                          </button>
                          <button
                            onClick={() => handleShare("facebook")}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          >
                            <FaFacebook className="mr-2" /> Facebook
                          </button>
                          <button
                            onClick={() => handleShare("linkedin")}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full"
                          >
                            <FaLinkedin className="mr-2" /> LinkedIn
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </div>
            {/* Product Details */}
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-4xl font-bold my-4"
              >
                {product.name}
              </motion.h1>

              {/* Color options */}

              {/* Product Details */}
              <p>{product.description} </p>
              <h2 className="font-bold text-3xl my-4">Product Details</h2>

              <a href="#" className="text-blue-500">
                Click to view more
              </a>
              {/* Add to Cart and Buy Now buttons */}
              <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="mt-6"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-orange-500 text-white py-3 px-6 rounded-md hover:bg-orange-600 transition duration-300"
                    onClick={() => setIsContactFormOpen(true)}
                  >
                    <FaBolt className="inline-block mr-2" /> Send Inquiry
                  </motion.button>
                </motion.div>

       
              {/* Delivery and return info */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="border-t border-gray-200 pt-6"
              >
                <div className="flex items-center justify-center space-x-4">
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="text-green-500 hover:text-green-600"
                  >
                    <FaWhatsapp size={36} />
                  </button>
                  <button
                    onClick={() => handleShare("facebook")}
                    className="text-blue-600 hover:text-blue-700"
                  >
                    <FaFacebook size={36} />
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="text-blue-500 hover:text-blue-600"
                  >
                    <FaLinkedin size={36} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
          <ContactFormPopup
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
      />
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
              className={`py-2 font-semibold text-3xl ${
                activeTab === "description"
                  ? "text-blue-500 border-b-2 border-blue-500"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
          </div>
          <div className="mt-4">
            {activeTab === "description" && (
              <p className="text-gray-700">{product.description}</p>
            )}
          </div>
        </motion.div>

        {/* Technical Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl shadow-xl p-8 mt-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Technical Specifications
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: FaThermometerHalf,
                color: "text-red-500",
                label: "Density",
                value: product.Density,
              },
              {
                icon: FaCompress,
                color: "text-blue-500",
                label: "Quantity",
                value: product.Quantity,
              },
              {
                icon: FaTint,
                color: "text-blue-300",
                label: "Pack Type",
                value: product.PackType,
              },
              {
                icon: FaFireAlt,
                color: "text-orange-500",
                label: "Use",
                value: product.Use,
              },
            ].map((spec, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <spec.icon className={`${spec.color} text-3xl mr-4`} />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">
                    {spec.label}
                  </h3>
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
          <h2 className="text-3xl font-bold mb-6 text-indigo-800">
            Application Industries
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {product.industries.map((industry, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center"
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                }}
              >
                <FaIndustry className="text-5xl text-indigo-500 mb-3" />
                <span className="font-medium text-gray-800">{industry}</span>
              </motion.div>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <motion.div
                key={relatedProduct.id}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link to={`/product/${relatedProduct.id}`}>
                  <img
                    src={relatedProduct.images[0]}
                    alt={relatedProduct.name}
                    className="w-full h-96 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-3xl mb-2">
                      {relatedProduct.name}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default ProductDetails;
