import React from "react";
import AddBook from "./AddBook";
import { useState } from "react";
import BookDisplay from "./BookDisplay";
import UpdateBook from "./UpdateBook";
import { Button } from "react-bootstrap";
import "../css/Library.scss";

const Library = ({currentUser}) => {

  //initialise book states
  const [bookDetails, setBookDetails] = useState({
    title: "",
    author: "",
    pages: "",
    review: "",
  });

  const [bookToUpdate, setBookToUpdate] = useState({
    title: "",
    author: "",
    pages: "",
    review: "",
  })



  const [storedBooks, setStoredBooks] = useState([]);

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

  //toggle update form
  const togUpForm = () => {
    setUpFormIsVisible(prevState => !prevState);
    console.log(upFormIsVisible)
  }

  //submit new book and update stored books
  const handleSubmit = (book) => {
    setStoredBooks({book, ...storedBooks});
    console.log(book);
  };

  return (
    <div className="library">
      <Button variant="secondary" className="addBtn" onClick={openForm}>
        Add a Book
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
        currentUser={currentUser}
      />
      <UpdateBook 
      bookToUpdate={bookToUpdate}
      upFormIsVisible={upFormIsVisible}
      togUpForm={togUpForm}
      handleChangeUpdate={handleChangeUpdate}
      setStoredBooks={setStoredBooks}
      storedBooks={storedBooks}
      currentUser={currentUser}
      />
      <BookDisplay storedBooks={storedBooks}
      setStoredBooks={setStoredBooks}
      formIsVisible={formIsVisible}
      editBook={editBook}
      upFormIsVisible={upFormIsVisible}
      currentUser={currentUser}
      />
    </div>
  );
};

export default Library;
