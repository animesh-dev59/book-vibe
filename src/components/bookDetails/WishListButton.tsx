// import React from "react";

// const WishListButton = () => {
//   const { wishlist, setWishList } = useContext(BooksContext);
//   // console.log(booksProvider);
//   const handleReadBook = () => {
//     console.log("read book btn triggered", book);
//     setReadBooks([...readBooks, book]);
//     alert(`You have read "${book.bookName}"`);
//   };
//   return <div></div>;
// };

// export default WishListButton; 


"use client"
import { BooksContext } from '@/context/BookContext';
import { IBook } from '@/types/books.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListPage = ({book}:{book:IBook}) => {
  const {wishlist,setWishslist} = useContext(BooksContext);
  // console.log(booksProvider);
  const handleWishListBook = () => {
    // console.log('read book btn triggered',book);
    setWishslist([...wishlist,book]);
    toast.success(`You have wishList Page "${book.bookName}"`)
    
  }
  return ( 
    <div>
      <button  onClick={()=>handleWishListBook()}
       className="btn btn-outline border-gray-300 px-7 font-semibold text-gray-800 hover:bg-gray-100 hover:border-gray-300">
              wish list
            </button>
    </div>
  );
};

export default WishListPage;
