import React from 'react';

const Pagination = ({ page, setPage }) => {
  return (
    <div className='flex items-center justify-center'>
      <button
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl"
        onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
    <span className="mr-2 text-gray-700"
      >{page}</span>
      <button 
        className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl"
      onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
};

export default Pagination;