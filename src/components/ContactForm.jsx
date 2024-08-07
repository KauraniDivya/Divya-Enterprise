import React, { useState } from 'react';
import toast from 'react-hot-toast';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    product: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const products = [
    "Condonson Oil",
    "Furnace Oil",
    "Mix Hydrocarbon Oil (MHO)",
    "Mineral Turpentine Oil (MTO)",
    "Industrial Solvent",
    "Distillate Oil"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      tempErrors.phone = "Phone number is invalid";
    }
    if (!formData.product) tempErrors.product = "Please select a product";
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const response = await fetch('https://divya-enterprise-backend.vercel.app/api/contact/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        const data = await response.json();
  
        if (data.success) {
          setFormData({
            name: '',
            email: '',
            phone: '',
            product: '',
            message: ''
          });
          toast.success("Thank you for your message. We'll get back to you soon!");
        } else {
          toast.error("There was an error submitting your message. Please try again.");
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        toast.error("There was an error submitting your message. Please try again.");
      }
      finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="mx-auto max-w-6xl">
      <h2 className="h2 section-title mt-10">
        Contact <span className="span">Us</span>
      </h2>
      <div className="relative overflow-x-auto mx-auto max-w-6xl shadow-lg p-4 bg-white mt-10 mb-20 rounded-lg lg:mb-72">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-2xl font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500`}
            />
            {errors.name && <p className="mt-1 text-2xl text-red-500">{errors.name}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-2xl font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500`}
            />
            {errors.email && <p className="mt-1 text-2xl text-red-500">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-2xl font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500`}
            />
            {errors.phone && <p className="mt-1 text-2xl text-red-500">{errors.phone}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="product" className="block text-2xl font-medium text-gray-700">Product</label>
            <select
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${errors.product ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500`}
            >
              <option value="">Select a product</option>
              {products.map((product, index) => (
                <option key={index} value={product}>{product}</option>
              ))}
            </select>
            {errors.product && <p className="mt-1 text-2xl text-red-500">{errors.product}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-2xl font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className={`mt-1 block w-full rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} px-3 py-2 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-yellow-500`}
            ></textarea>
            {errors.message && <p className="mt-1 text-2xl text-red-500">{errors.message}</p>}
          </div>
          <div>
          <button
  type="submit"
  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-2xl font-medium text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 disabled:opacity-50"
  style={{backgroundColor: "#f8ab12"}}
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <>
      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Sending...
    </>
  ) : (
    'Send Message'
  )}
</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;