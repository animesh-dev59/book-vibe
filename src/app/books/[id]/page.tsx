import ReadButton from '@/components/bookDetails/ReadButton';
import { IBook } from '@/types/books.type';
import Image from 'next/image';
import React from 'react';

interface IBookDetailsPageProps { 
  params : Promise<{
    id:string 
  }>;
}

const getBooks = async () => {
  const res = await fetch('http://localhost:3000/booksData.json');
  const data = await res.json();
  return data;
};

const BookDetailsPage = async({params}:IBookDetailsPageProps) => {
  const {id} = await params;
  const booksData = await getBooks();
  // const book = booksData.find((book:IBook)=> book.bookId === Number(id));
  // const book = booksData.find((book:IBook)=> String(book.bookId) === id);
  // const book = booksData.find((book:IBook)=> String(book.bookId) === id);
  const book = booksData.find((book:IBook)=> String(book.bookId) == String(id));

  // console.log(book,typeof book.id ,'animesh rudraq paul animehs rudra paul');
  //  console.log(book.id);
  return (
//     <div className='container mx-auto'>
//       <div className="card lg:card-side bg-base-100 shadow-sm">
//   <figure>
//     <Image src="book.image" alt="book.bookName" width={400} height={500} />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">{book.bookName}</h2>
//     <h2 className="card-title">{book.review}</h2>
//     <h2 className="card-title">{book.totalPages}</h2>
//     <p>{book.category}</p> 
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">{book.publisher}</button>
//     </div>
//   </div>
// </div>
//     </div>
    <div className='container mx-auto px-4 py-8'>
      <div className="card lg:card-side bg-base-100 shadow-xl border border-gray-100 rounded-2xl p-6 lg:p-12 gap-10 items-center">
        
        {/* Left Side: Book Image with Background Box */}
        <figure className="bg-[#F3F3F3] p-12 rounded-2xl flex justify-center items-center lg:w-1/2">
          <Image 
            src={book.image} 
            alt={book.bookName} 
            width={300} 
            height={450} 
            className="object-cover rounded-lg shadow-md"
          />
        </figure>

        {/* Right Side: Book Details */}
        <div className="card-body p-0 lg:w-1/2 space-y-4">
          
          {/* Book Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 font-serif">
            {book.bookName}
          </h1>

          {/* Author */}
          <p className="text-gray-600 font-medium text-lg border-b pb-4">
            By : <span className="text-gray-800 font-semibold">{book.author}</span>
          </p>

          {/* Category */}
          <p className="text-gray-700 font-medium text-lg">
            {book.category}
          </p>

          {/* Review */}
          <p className="text-gray-600 text-sm leading-relaxed">
            <span className="font-bold text-gray-900">Review :</span> {book.review}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-3 pt-2 pb-4 border-b">
            <span className="font-bold text-gray-900">Tag</span>
            {book.tags?.map((tag, index) => (
              <span key={index} className="bg-[#23BE0A0D] text-[#23BE0A] px-3 py-1 rounded-full text-sm font-medium">
                #{tag}
              </span>
            ))}
          </div>

          {/* Additional Info (Pages, Publisher, Year, Rating) */}
          <div className="space-y-2 text-sm text-gray-600 pt-2">
            <div className="flex gap-12">
              <span className="w-40">Number of Pages:</span>
              <span className="font-bold text-gray-900">{book.totalPages}</span>
            </div>
            <div className="flex gap-12">
              <span className="w-40">Publisher:</span>
              <span className="font-bold text-gray-900">{book.publisher}</span>
            </div>
            <div className="flex gap-12">
              <span className="w-40">Year of Publishing:</span>
              <span className="font-bold text-gray-900">{book.yearOfPublishing}</span>
            </div>
            <div className="flex gap-12">
              <span className="w-40">Rating:</span>
              <span className="font-bold text-gray-900">{book.rating}</span>
            </div>
          </div>

          {/* Action Buttons (Read & Wishlist) */}
          <div className="card-actions pt-4 gap-4">
             <ReadButton book={book}/>
            <button className="btn bg-[#50B1C9] hover:bg-[#3f9bb1] text-white px-7 font-semibold border-none">
              Wishlist
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;