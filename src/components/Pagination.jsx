import React from 'react';

const Pagination = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md focus:outline-none"
      >
        Previous
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`mx-1 px-2 py-1 bg-gray-300 text-gray-700 rounded-md focus:outline-none ${
            currentPage === number ? 'bg-blue-500 text-white' : ''
          }`}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage * itemsPerPage >= totalItems}
        className="ml-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md focus:outline-none"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
