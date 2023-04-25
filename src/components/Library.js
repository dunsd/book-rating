import React from "react";
import AddBook from "./AddBook";
import { useState } from "react";
import BookDisplay from "./BookDisplay";

const Library = () => {
  const [bookDetails, setBookDetails] = useState([
    {
      title: "",
      author: "",
      pages: "",
    },
  ]);

  const [storedBooks, setStoredBooks] = useState([
    {
      title: "",
      author: "",
      pages: "",
    },
  ]);

  const handleChange = (index, event) => {
    let data = [...bookDetails];
    data[index][event.target.name] = event.target.value;
    setBookDetails(data);
    //setStoredBooks(data);
  };

  const handleSubmit = (index, event) => {
    event.preventDefault();
    let data = [...bookDetails];
    console.log(data);
    setStoredBooks(data);
    // let data = [...storedBooks];
    // data[index][event.target.name] = event.target.value;
    // console.log(data);
    // setStoredBooks(data);
    // console.log(storedBooks);
  };

  return (
    <div>
      Book library display
      <AddBook
      
        bookDetails={bookDetails}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <BookDisplay storedBooks={storedBooks} />
    </div>
  );
};

export default Library;
