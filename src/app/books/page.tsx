// import React from 'react';

// const page = () => {
//   return (
//     <div>
//        <h3> book pages</h3>
//     </div>
//   );
// };

// export default page;




import React from 'react';
// import BookCard from './';
import { IBook } from '@/types/books.type';
import BookCard from '@/components/shared/BookCard';

// ডাটা ফেচ করার ফাংশন
const getBooks = async () => {
  const res = await fetch('http://localhost:3000/booksData.json');
  const data = await res.json();
  return data;
}; 



 /**
  *  const getBooks = async () => { 
  * 
  *     const res  = await fetch("http://localhost:3000/booksData.json");
  *      const data = await res.jonsn();
  *      return data;   
  * }
  *      const res = await fetch("http://localhost:3000/booksDadta.json");
  *      const data = await res.json();
  *        return data;
  *    const res  = await fetch("http://localhost:3000/booksData.json"); 
  *  const res = await fetch("http://localhost:3000/booksData.jsonssssssssssssss"))
  * 
  *  cons t   
  * return data return return return return return return return return return return return return  return return return return return return reurn return return return return return reurn return return return return return return return return return return reurn asdf 
  *     
  * }
  * 
  * 
  */
// const getBooks1 = async () => { 
//   const res = await fetch('http://localhost:3000/booksData.json');
//   const data = await res.json();
//   return data;
// }

const BooksContainer = async () => {
  const booksData = await getBooks();
  // const booksData1 = await getBooks1();
 /** 
  * const booksData = await getBooks();
  */
  return (
    <section className="bg-slate-50 min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* সেকশনের টাইটেল */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Books
          </h2>
          <p className="text-gray-500 mt-2">All collection  collection of amazing books</p>
        </div> 
        {/* { 
         booksData1.map((book:IBook1 , ind:number) => <BookCard key={ind} book={book}/>)
        } */}

        {/* ডাইনামিক কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {booksData.map((book:IBook, ind:number) => (
           <BookCard key={ind} book={book}></BookCard>
          ))} 
          {/* {
            <div className='grid grid-cols-1 md:grid-col-2 lg:grid-col-3 gap-8'> 
             
             </div>
          } */}
        </div>

      </div>
    </section>
  );
};

export default BooksContainer;