 'use client'
import { BooksContext } from '@/context/BookContext';
import React, { useContext } from 'react';

const ListedBooks = () => {
  const {readBooks} = useContext(BooksContext);
  console.log(readBooks,'readbooks');
  return (
    <div>
      <h3>listed books pages is collection of my happyness!!!</h3>
    </div>
  );
};

export default ListedBooks;