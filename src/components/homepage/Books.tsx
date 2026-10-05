// import React from 'react';

//  const getBooks = async() =>{ 
//   const res = await fetch('http://localhost:3000/booksData.json')
//   const data = await res.json();
//   return data;
//  }

// const Books = async() => {
//   const booksData = await getBooks(); 
//   // console.log(booksData);
//   return (
//     <div className='container mx-auto p-19 bg-amber-500'>
//       <h3> Books Pges{booksData.length} </h3>
//       <div> 
//         { 
//           booksData.map((book,ind) => { 
//        return  <h3 key={ind}>booK Name :{book.bookName}</h3>
//           } )
//         }
//       </div>
//     </div>
//   );
// };

// export default Books;             

// ------------------------- part 2 === 

// import React from 'react';

//  const getBooks = async() =>{ 
//   const res = await fetch('http://localhost:3000/booksData.json')
//   const data = await res.json();
//   return data;
// }

// const Books = async() => {
//   const booksData = await getBooks(); 
  
//   return (
//     <div className='container mx-auto px-4 py-10'>
//       <h2 className='text-3xl font-bold text-center mb-8'>Books Collection ({booksData.length})</h2>
      
//       {/* Grid Layout for Cards */}
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> 
//         { 
//           booksData.map((book, ind) => { 
//             return (
//               <div key={ind} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                
//                 {/* Book Image Container */}
//                 <div className="bg-gray-100 rounded-xl p-4 flex justify-center items-center h-64 mb-6">
//                   <img 
//                     src={book.image} 
//                     alt={book.bookName} 
//                     className="h-full object-contain rounded-md shadow-md"
//                   />
//                 </div>

//                 {/* Tags */}
//                 <div className="flex gap-2 mb-3 flex-wrap">
//                   {book.tags.map((tag, idx) => (
//                     <span key={idx} className="text-xs font-semibold bg-emerald-50 text-[#23BE0A] px-3 py-1 rounded-full">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Book Title & Author */}
//                 <h3 className="text-xl font-bold text-gray-800 mb-1 line-clamp-1">{book.bookName}</h3>
//                 <p className="text-sm text-gray-500 mb-4">By : {book.author}</p>

//                 <hr className="border-dashed border-gray-200 mb-4" />

//                 {/* Category, Rating and Pages Info */}
//                 <div className="flex justify-between items-center text-sm text-gray-600">
//                   <span className="font-medium">{book.category}</span>
//                   <div className="flex items-center gap-2">
//                     <span className="font-semibold">{book.rating}</span>
//                     {/* Star Icon */}
//                     <svg className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                     </svg>
//                   </div>
//                 </div>

//               </div>
//             );
//           })
//         }
//       </div>
//     </div>
//   );
// };

// export default Books;  

// part ------------------- par 3 ============== 

import { IBook } from '@/types/books.type';
import React from 'react';

const getBooks = async () => { 
  const res = await fetch('http://localhost:3000/booksData.json')
  const data = await res.json();
  return data;
}

const Books = async () => {
  const booksData = await getBooks(); 
  
  return (
    <div className='container mx-auto px-4 py-12'>
      {/* Section Title */}
      <h2 className='text-4xl font-bold text-center mb-10 text-gray-900'>Books</h2>
      
      {/* Grid Layout */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'> 
        { 
          booksData.map((book:IBook, ind:number) => { 
            return (
              <div 
                key={ind} 
                className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                
                {/* Book Image Container with Light Gray Background */}
                <div className="bg-[#F3F3F3] rounded-xl p-6 flex justify-center items-center h-56 mb-6">
                  <img 
                    src={book.image} 
                    alt={book.bookName} 
                    className="h-full object-contain drop-shadow-lg"
                  />
                </div>

                {/* Tags (Green Badge style from Figma) */}
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
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <span className="font-normal">{book.category}</span>
                  
                  <div className="flex items-center gap-1.5">
                    <span className="font-medium text-gray-800">
                      {book.rating ? book.rating.toFixed(2) : "5.00"}
                    </span>
                    {/* Star Icon */}
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>

              </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default Books; 

// --------------------------- card ------------------ 

// import Image from 'next/image';
// import React from 'react';
// // import BookCard from '../shared/BookCard';

// const getBooks = async () => { 
//   const res = await fetch('http://localhost:3000/booksData.json')
//   const data = await res.json();
//   return data;
// }

// const Books = async () => {
//   const booksData = await getBooks(); 
  
//   return (
//     <div className='container mx-auto px-4 py-12'>
//       <h2 className='text-4xl font-bold text-center mb-10 text-gray-900'>Books</h2>
      
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'> 
//         { 
//           booksData.map((book,ind) => { 

//             //  <BookCard key={ind} book={book}></BookCard>
//              <div  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
//                           >
                            
//                             {/* Book Image Container */}
//                             <div className="bg-[#F3F3F3] rounded-xl p-6 flex justify-center items-center h-56 mb-6">
//                               <Image 
//                                 src={book.image} 
//                                 alt={book.bookName} 
//                                 width={800}
//                                 height={600} 
//                                 className="h-full object-contain drop-shadow-lg"
//                               />
//                             </div>
            
//                             {/* Tags */}
//                             <div className="flex gap-3 mb-4 flex-wrap">
//                               {book.tags && book.tags.map((tag, idx) => (
//                                 <span 
//                                   key={idx} 
//                                   className="text-xs font-medium bg-[#23BE0A]/10 text-[#23BE0A] px-4 py-1.5 rounded-full"
//                                 >
//                                   {tag}
//                                 </span>
//                               ))}
//                             </div>
            
//                             {/* Book Title */}
//                             <h3 className="text-xl font-bold text-gray-900 mb-1 leading-snug">
//                               {book.bookName}
//                             </h3>
            
//                             {/* Author */}
//                             <p className="text-sm text-gray-500 mb-5 font-normal">
//                               By : {book.author}
//                             </p>
            
//                             {/* Dashed Divider */}
//                             <div className="border-t border-dashed border-gray-200 mb-4"></div>
            
//                             {/* Category & Rating */}
//                             <div className="flex justify-between items-center text-sm text-gray-600 mb-5">
//                               <span className="font-normal">{book.category}</span>
                              
//                               <div className="flex items-center gap-1.5">
//                                 <span className="font-medium text-gray-800">
//                                   {book.rating ? book.rating.toFixed(2) : "5.00"}
//                                 </span>
//                                 <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
//                                   <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
//                                 </svg>
//                               </div>
//                             </div>
            
//                             {/* Card Button */}
//                             <button className="w-full bg-[#23BE0A] hover:bg-[#1eb108] text-white font-semibold py-2.5 rounded-xl transition-colors duration-200">
//                               View Details
//                             </button>
            
//                           </div>
//           }
//           )
//         }
//       </div>
//     </div>
//   );
// };

// export default Books;