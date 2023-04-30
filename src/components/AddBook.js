import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const AddBook = ({
  bookDetails,
  handleChange,
  handleSubmit,
  formIsVisible,
  closeForm,
  storedBooks,
  setBookDetails
}) => {
  async function addBookDb(book) {
    await fetch("http://localhost:5000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }

  const { title, author, pages } = bookDetails;
  const formSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      id: uuidv4(),
      title,
      author,
      pages,
    };
    console.log(newBook);
    handleSubmit(newBook);
    addBookDb(newBook);
    closeForm();
    setBookDetails({
      title: "",
      author: "",
      pages: "",
    })
    
  };

  return (
    <Modal show={formIsVisible} onHide={closeForm}>
      <Form className="addBookForm p-3 m-1">
        <Modal.Header closeButton>
          <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="formInput m-1" controlId="title">
            <Form.Label>Book Title: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Book Title"
              className="inputControl"
              name="title"
              value={title}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group className="formInput m-1" controlId="author">
            <Form.Label>Author: </Form.Label>
            <Form.Control
              type="text"
              placeholder="Book Author"
              className="inputControl"
              name="author"
              value={author}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Form.Group className="formInput m-1" controlId="pages">
            <Form.Label>Page Count: </Form.Label>
            <Form.Control
              type="number"
              placeholder="Page Count"
              className="inputControl"
              name="pages"
              value={pages}
              onChange={(event) => handleChange(event)}
            />
          </Form.Group>
          <Modal.Footer>
            <Button
              type="submit"
              variant="secondary"
              onClick={(event) => formSubmit(event)}
            >
              Submit
            </Button>
            <Button variant="secondary" onClick={closeForm}>
              Close Form
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default AddBook;
