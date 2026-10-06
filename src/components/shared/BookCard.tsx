import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import Link from 'next/link';
import { IBook } from '@/types/books.type';

interface IBookCardProps { 
  book:IBook,

}

const BookCard = ({book}:IBookCardProps) => {
  return (
     <div 
              
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1"
            >
              <div>
                {/* বইয়ের ইমেজ এবং ক্যাটাগরি ব্যাজ */}
                <div className="relative bg-gray-100 rounded-xl p-4 flex justify-center items-center h-64 mb-6 overflow-hidden">
                  <Image 
                    src={book.image} 
                    alt={book.bookName} 
                    width={150}
                    height={220}
                    className="h-52 w-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                  />
                  <span className="absolute top-3 right-3 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full border border-green-200">
                    {book.category}
                  </span>
                </div>

                {/* ট্যাগসমূহ */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {book.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium text-[#23BE0A] bg-green-50 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* বইয়ের নাম এবং লেখক */}
                <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                  {book.bookName}
                </h3>
                <p className="text-sm text-gray-500 mb-4 font-medium">
                  By : {book.author}
                </p>
              </div>

              <div>
                <hr className="border-gray-100 mb-4" />

                {/* রেটিং এবং ভিউ ডিটেইলস বাটন */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-gray-600 text-sm font-medium">
                    <span>{book.rating}</span>
                    <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>

                  {/* View Details Button */}
                  <Link 
                    href={`/books/${book.bookId}`}
                    className="bg-[#23BE0A] hover:bg-[#1b9a07] text-white text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all"
                  >
                    View Details
                  </Link>
                </div>
              </div>

            </div>
  );
};

export default BookCard;