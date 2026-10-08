"use client";
import BookCard from "@/components/shared/BookCard";
import SingleCard from "@/components/shared/SingleCard";
import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import React, { useContext, useState } from "react";

const ListedBooks = () => {
  const { readBooks, wishlist } = useContext(BooksContext);
  // console.log(readBooks, wishlist, "readbooks", "wishlist");
  const [sortBy , setSortBy] = useState<"rating" | "pages" | "year">('rating');
  console.log(readBooks,wishlist , "readBooks" , "wishlist");
  console.log(sortBy,setSortBy);
  const sortBooks = (books : IBook[]) => { 
    const sortedBooks = [...books];
  
     if(sortBy === "rating"){ 
      sortedBooks.sort((a,b) => b.rating - a.rating);
     } else if(sortBy === 'pages'){ 
     sortedBooks.sort((a,b)=> b.pages - a.pages);
     } else if(sortBy === 'year'){ 
      sortedBooks.sort((a,b) =>b.yearOfPublishing - a.yearOfPublishing);
     } 
     return sortedBooks;
  }
  const sortedReadBooks = sortBooks(readBooks);
  const sortedWishlist = sortBooks(wishlist);
  return (
    <div className="container mx-auto py-/[60px/]">
      <h3 className="my-7 bg-amber-200 rounded-3xl py-16 font-bold text-4xl text-center">
        Listed Books
      </h3>
      <div className="text-center"> 
        <select 
        value={sortBy}
        onChange={(e)=>setSortBy(e.target.value as "rating" | 'pages' | 'year')}
        defaultValue="Pick a Runtime"
         className="select select-success">
        <option disabled={true}>Sort by</option>
        <option value={'rating'}>Rating</option>
        <option value={'pages'}>Number of Pages</option>
        <option value={'year'}>Published Year</option>
      </select>
      </div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Read Books (${readBooks.length})`}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {readBooks.length > 0 ? (
            readBooks.map((book: IBook) => {
              return <SingleCard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="text-3xl font-bold text-center">No read bokks none</p>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`WishList Books (${wishlist.length})`}
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {wishlist.length > 0 ? (
            wishlist.map((book: IBook) => {
              return <SingleCard key={book.bookId} book={book} />;
            })
          ) : (
            <p className="text-center text-lg font-semibold">
              No wisthlist books
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
// wishlist
export default ListedBooks;
