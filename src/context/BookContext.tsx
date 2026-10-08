 "use client"
import { Whisper } from 'next/font/google';
import React, { createContext, useState } from 'react';
export const BooksContext = createContext({});

const BooksProvider = ({children}:{children:React.ReactNode} ) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishlist , setWishslist] = useState([]);

  const shareData = {   
     readBooks,
     setReadBooks,
     wishlist,
     setWishslist
  }
     
     
      return <BooksContext.Provider value={shareData}> 
      {children}
         </BooksContext.Provider>
};

export default BooksProvider;