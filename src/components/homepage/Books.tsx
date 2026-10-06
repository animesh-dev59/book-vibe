
import React from 'react';
import BookCard from '../shared/BookCard';
import { IBook } from '@/types/books.type';

// ডাটা ফেচ করার ফাংশন
const getBooks = async () => {
  const res = await fetch('http://localhost:3000/booksData.json');
  const data = await res.json();
  return data;
};

const BooksContainer = async () => {
  const booksData = await getBooks();

  return (
    <section className="bg-slate-50 min-h-screen py-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* সেকশনের টাইটেল */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Books
          </h2>
          <p className="text-gray-500 mt-2">Explore our collection of amazing books</p>
        </div>

        {/* ডাইনামিক কার্ড গ্রিড */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {booksData.map((book:IBook, ind:number) => (
           <BookCard key={ind} book={book}></BookCard>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BooksContainer;