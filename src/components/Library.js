import React from "react";
import AddBook from "./AddBook";
import { useState } from "react";
import BookDisplay from "./BookDisplay";
import { Button } from "react-bootstrap";
import "../css/Library.scss";

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

  const [formIsVisible, setFormIsVisible] = useState(false);


  const openForm = (e) => {
    setFormIsVisible(true);
  }

  const closeForm = (e) => {
    setFormIsVisible(false);
  }

  const handleChange = (index, event) => {
    let data = [...bookDetails];
    data[index][event.target.name] = event.target.value;
    setBookDetails(data);
  };

  const handleSubmit = (index, event) => {
    event.preventDefault();
    let data = [...storedBooks];
    data.push(bookDetails[index]);
    console.log(data);
    setStoredBooks(data);
  }; 

  return (
    <div className="library">
        <Button variant="secondary" onClick={openForm} >Add</Button>
      <AddBook
        bookDetails={bookDetails}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        closeForm={closeForm}
        formIsVisible={formIsVisible}
      />
      <BookDisplay storedBooks={storedBooks} />
    </div>
  );
};

export default Library;
