import React from "react";
import AddBook from "./AddBook";
import { useState } from "react";
import BookDisplay from "./BookDisplay";
import { Button } from "react-bootstrap";
import "../css/Library.scss";

const Library = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    pages: "",
  });

  const [storedBooks, setStoredBooks] = useState([
    
  ]);

  const [formIsVisible, setFormIsVisible] = useState(false);

  const openForm = (e) => {
    setFormIsVisible(true);
  };

  const closeForm = (e) => {
    setFormIsVisible(false);
  };

  const handleChange = (event) => {
    setBookDetails((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (book) => {
    setStoredBooks([book, ...storedBooks]);
    console.log(book);
  };

  return (
    <div className="library">
      <Button variant="secondary" onClick={openForm}>
        Add
      </Button>
      <AddBook
        bookDetails={bookDetails}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        closeForm={closeForm}
        formIsVisible={formIsVisible}
        storedBooks={storedBooks}
        setBookDetails={setBookDetails}
      />
      <BookDisplay storedBooks={storedBooks} />
    </div>
  );
};

export default Library;
