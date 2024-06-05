import React from 'react';
import { useSelector } from 'react-redux';

const BookList = () => {
  const books = useSelector(state => state.books);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title} - {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
