"use client"
import { BooksContext } from '@/context/BookContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const ReadButton = ({book}:{book:IBook}) => {
  const {readBooks,setReadBooks} = useContext(BooksContext);
   // const {readBooks,setReadBooks} = useContext(BooksContext);
  //  const {readBooks , setReadBooks} = useContext(BooksContext)
  //  const {readBooks,setReadBooks} = useContext(BooksContext);

  // console.log(booksProvider);
  const handleReadBook = () => {
    console.log('read book btn triggered',book);
    setReadBooks([...readBooks,book]);
    toast.success(`You have read "${book.bookName}"`)
    
  }
  return (
    <div>
      <button  onClick={()=>handleReadBook()}
       className="btn btn-outline border-gray-300 px-7 font-semibold text-gray-800 hover:bg-gray-100 hover:border-gray-300">
              Read
            </button> 
            {/* <button onClick={()=>handleReadBook()}></button>  */}
    </div>
  );
};

export default ReadButton;