import Image from 'next/image';
import React from 'react';

const BookCard = ({book}) => {
  // const {bookName,image,} = book
  return (
     <div  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Book Image Container */}
                <div className="bg-[#F3F3F3] rounded-xl p-6 flex justify-center items-center h-56 mb-6">
                  <Image 
                    src={book.image} 
                    alt={book.bookName} 
                    width={800}
                    height={600} 
                    className="h-full object-contain drop-shadow-lg"
                  />
                </div>

                {/* Tags */}
                <div className="flex gap-3 mb-4 flex-wrap">
                  {book.tags && book.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs font-medium bg-[#23BE0A]/10 text-[#23BE0A] px-4 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Book Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-1 leading-snug">
                  {book.bookName}
                </h3>

                {/* Author */}
                <p className="text-sm text-gray-500 mb-5 font-normal">
                  By : {book.author}
                </p>

                {/* Dashed Divider */}
                <div className="border-t border-dashed border-gray-200 mb-4"></div>

                {/* Category & Rating */}
                <div className="flex justify-between items-center text-sm text-gray-600 mb-5">
                  <span className="font-normal">{book.category}</span>
                  
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-gray-800">
                      {book.rating ? book.rating.toFixed(2) : "5.00"}
                    </span>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>

                {/* Card Button */}
                <button className="w-full bg-[#23BE0A] hover:bg-[#1eb108] text-white font-semibold py-2.5 rounded-xl transition-colors duration-200">
                  View Details
                </button>

              </div>
  );
};

export default BookCard;