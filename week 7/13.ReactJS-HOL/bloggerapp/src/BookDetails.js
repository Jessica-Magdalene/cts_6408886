// src/BookDetails.js
import React from 'react';

function BookDetails({ books }) {
  const hasBooks = books && books.length > 0;

  return (
    <div className="st2">
      <h1>Book Details</h1>
      {hasBooks ? (
        books.map((book) => (
          <div key={book.id}>
            <h3>{book.bname}</h3>
            <h4>{book.price}</h4>
          </div>
        ))
      ) : (
        <p>No book data available.</p>
      )}
    </div>
  );
}

export default BookDetails;
