import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const dummyData = [
  { id: 1, image: 'https://picsum.photos/400/300?random=1', name: 'Serene Meadow', description: 'A peaceful meadow at sunrise', date: '2023-06-01' },
  { id: 2, image: 'https://picsum.photos/400/300?random=2', name: 'Misty Forest', description: 'Ancient trees shrouded in mist', date: '2023-06-02' },
  { id: 3, image: 'https://picsum.photos/400/300?random=3', name: 'Coastal Cliffs', description: 'Dramatic cliffs overlooking the sea', date: '2023-06-03' },
  { id: 4, image: 'https://picsum.photos/400/300?random=4', name: 'Mountain Lake', description: 'Crystal clear waters reflect the sky', date: '2023-06-04' },
  { id: 5, image: 'https://picsum.photos/400/300?random=5', name: 'Desert Dunes', description: 'Golden sands stretching to the horizon', date: '2023-06-05' },
  { id: 6, image: 'https://picsum.photos/400/300?random=6', name: 'Tropical Beach', description: 'Pristine white sands and turquoise waters', date: '2023-06-06' },
  { id: 7, image: 'https://picsum.photos/400/300?random=7', name: 'Alpine Meadow', description: 'Colorful wildflowers in the mountains', date: '2023-06-07' },
  { id: 8, image: 'https://picsum.photos/400/300?random=8', name: 'Autumn Forest', description: 'Trees ablaze with fall colors', date: '2023-06-08' },
];

const CardSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('latest');
  const [filteredData, setFilteredData] = useState(dummyData);
  const cardsPerPage = 6;

  useEffect(() => {
    const filtered = dummyData.filter(card => 
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
      if (sortOrder === 'latest') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });

    setFilteredData(sorted);
    setCurrentPage(1);
  }, [searchTerm, sortOrder]);


const indexOfLastCard = currentPage * cardsPerPage;
const indexOfFirstCard = indexOfLastCard - cardsPerPage;
const currentCards = filteredData.slice(indexOfFirstCard, indexOfLastCard);

const paginate = (pageNumber) => setCurrentPage(pageNumber);

const nextPage = () => {
  if (currentPage < Math.ceil(filteredData.length / cardsPerPage)) {
    setCurrentPage(currentPage + 1);
  }
};

const prevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

return (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-green-800">
        Explore Nature's Wonders
      </h1>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="relative w-full sm:w-64 mb-4 sm:mb-0">
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            placeholder="Search landscapes"
            className="w-full p-3 pl-10 pr-4 border-2 border-green-300 rounded-full focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-300 ease-in-out"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500" />
        </div>
        <motion.select
          whileHover={{ scale: 1.05 }}
          className="p-3 border-2 border-green-300 rounded-full focus:ring-2 focus:ring-green-400 focus:outline-none transition duration-300 ease-in-out"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
        </motion.select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentCards.map(card => (
          <motion.div
            key={card.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-48 sm:h-64">
              <img src={card.image} alt={card.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{card.name}</p>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2 text-green-800">{card.name}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 flex justify-center items-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`mx-1 p-2 rounded-full ${
            currentPage === 1 
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-green-500 text-white hover:bg-green-600'
          } transition duration-300 ease-in-out`}
        >
          <FiChevronLeft size={24} />
        </motion.button>

        {Array.from({ length: Math.ceil(filteredData.length / cardsPerPage) }, (_, i) => (
          <motion.button
            key={i}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => paginate(i + 1)}
            className={`mx-1 w-10 h-10 rounded-full ${
              currentPage === i + 1 
                ? 'bg-green-500 text-white' 
                : 'bg-white text-green-500 border-2 border-green-500'
            } transition duration-300 ease-in-out`}
          >
            {i + 1}
          </motion.button>
        ))}

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextPage}
          disabled={currentPage === Math.ceil(filteredData.length / cardsPerPage)}
          className={`mx-1 p-2 rounded-full ${
            currentPage === Math.ceil(filteredData.length / cardsPerPage)
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
              : 'bg-green-500 text-white hover:bg-green-600'
          } transition duration-300 ease-in-out`}
        >
          <FiChevronRight size={24} />
        </motion.button>
      </div>
    </div>
  </div>
);
};

export default CardSection;