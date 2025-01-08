'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="relative ">

   
    <nav  className="flex justify-center items-center space-x-2 my-2 z-10 lg:left-[45%] left-[15%] md:left-[35%]   absolute" aria-label="Pagination">
      {[1, 2, 3, 4, 5].map((page) => (
        <motion.button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            currentPage === page
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          aria-current={currentPage === page ? 'page' : undefined}
        >
          {page}
        </motion.button>
      ))}
    </nav>
    </div>
  );
};

export default Pagination;

