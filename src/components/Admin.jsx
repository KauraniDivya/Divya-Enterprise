import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaBox, FaSearch } from 'react-icons/fa';

const Admin = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(10);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/contact');
      const data = await response.json();
      if (data.success) {
        setContacts(data.data);
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.product.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastContact = currentPage * contactsPerPage;
  const indexOfFirstContact = indexOfLastContact - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirstContact, indexOfLastContact);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto p-4">
      <h2 className="h2 section-title mt-10">
        Admin <span className="span">Dashboard</span>
      </h2>
      
      <div className="mb-4 flex items-center">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search contacts..."
          className="border rounded p-2 w-full"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {currentContacts.map((contact) => (
          <motion.div
            key={contact._id}
            className="bg-white shadow-md rounded-lg p-4 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-2">
              <FaUser className="text-blue-500 mr-2" />
              <span className="font-bold">{contact.name}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-green-500 mr-2" />
              <span>{contact.email}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="text-red-500 mr-2" />
              <span>{contact.phone}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaBox className="text-purple-500 mr-2" />
              <span>{contact.product}</span>
            </div>
            <p className="text-gray-600">{contact.message}</p>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(filteredContacts.length / contactsPerPage)).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => paginate(number + 1)}
            className={`mx-1 px-3 py-1 rounded ${
              currentPage === number + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
            }`}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Admin;