import React from 'react';
  import Image from "next/image";
import Link from "next/link";

const SingleCard = ({book}) => {
  return (
    <div className="group bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center sm:items-stretch justify-between gap-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 w-full">
      
      {/* বাম পাশ: ইমেজ এবং ক্যাটাগরি ব্যাজ */}
      <div className="relative bg-gray-50 rounded-xl p-4 flex justify-center items-center w-full sm:w-48 h-56 sm:h-auto overflow-hidden shrink-0">
        <div className="relative h-44 w-32 shadow-md rounded-lg overflow-hidden transition-transform duration-300 group-hover:scale-105">
          <Image
            src={book.image}
            alt={book.bookName}
            fill
            sizes="150px"
            className="object-cover"
          />
        </div>
        <span className="absolute top-3 right-3 bg-green-50/90 backdrop-blur-sm text-green-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-green-200 shadow-sm">
          {book.category}
        </span>
      </div>

      {/* মাঝের এবং ডান পাশ: তথ্য ও অ্যাকশন বাটন */}
      <div className="flex flex-col justify-between flex-grow w-full">
        <div>
          {/* ট্যাগসমূহ */}
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {book.tags?.map((tag, i) => (
              <span
                key={i}
                className="text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* বইয়ের নাম এবং লেখক */}
          <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-emerald-600 transition-colors">
            {book.bookName}
          </h3>
          <p className="text-sm text-gray-500 mb-4 font-medium">
            By : <span className="text-gray-700">{book.author}</span>
          </p>
        </div>

        <div>
          <hr className="border-gray-100 mb-3" />

          {/* রেটিং এবং ভিউ ডিটেইলস বাটন */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-gray-700 text-sm font-semibold bg-gray-50 px-3 py-1.5 rounded-lg">
              <span>{book.rating}</span>
              <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>

            <Link
              href={`/books/${book.bookId}`}
              className="bg-[#23BE0A] hover:bg-[#1b9a07] text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-sm transition-all duration-200 active:scale-95"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default SingleCard;