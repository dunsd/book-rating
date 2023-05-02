import React from "react";
import AddBook from "./AddBook";
import { useState } from "react";
import BookDisplay from "./BookDisplay";
import UpdateBook from "./UpdateBook";
import { Button } from "react-bootstrap";
import "../css/Library.scss";

const Library = () => {
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    pages: "",
  });

  const [bookToUpdate, setBookToUpdate] = useState({
    title: "",
    author: "",
    pages: "",
  })



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

  const handleChangeUpdate = (event) => {
    setBookToUpdate((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const editBook = (book) => {
    setBookToUpdate(book);
    togUpForm();
  }

  const [upFormIsVisible, setUpFormIsVisible] = useState(false);

  const togUpForm = () => {
    setUpFormIsVisible(prevState => !prevState);
  }

  const handleSubmit = (book) => {
    setStoredBooks({book, ...storedBooks});
    console.log(book);
  };

  async function getRecords() {
    const response = await fetch(`http://localhost:5000/record/`);

    if (!response.ok) {
      const message = `An error occurred: ${response.statusText}`;
      window.alert(message);
      return;
    }

    const storedBooks = await response.json();
    setStoredBooks(storedBooks);
  }

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
        setStoredBooks={setStoredBooks}
      />
      <UpdateBook 
      bookToUpdate={bookToUpdate}
      upFormIsVisible={upFormIsVisible}
      togUpForm={togUpForm}
      handleChangeUpdate={handleChangeUpdate}
      setStoredBooks={setStoredBooks}
      storedBooks={storedBooks}
      />
      <BookDisplay storedBooks={storedBooks}
      setStoredBooks={setStoredBooks}
      formIsVisible={formIsVisible}
      editBook={editBook}
      getRecords={getRecords}
      upFormIsVisible={upFormIsVisible}
      />
    </div>
  );
};

export default Library;
