import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";

const UpdateBook = ({
  handleChangeUpdate,
  bookToUpdate,
  storedBooks,
  setStoredBooks,
  upFormIsVisible,
  togUpForm,
  getRecords,
}) => {
  async function updateBookDb(id, book) {
    await fetch(`http://localhost:5000/update/${id}`, {
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
  const { title, author, pages } = bookToUpdate;
  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    const updatedBook = {
      title,
      author,
      pages,
    };
    updateBookDb(bookToUpdate._id, updatedBook);
    togUpForm();
  };

  return (
    <Modal show={upFormIsVisible} onHide={togUpForm}>
      <Form className="UpdateBookForm p-3 m-1">
        <Modal.Header closeButton>
          <Modal.Title>Update a Book</Modal.Title>
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
              onChange={(event) => handleChangeUpdate(event)}
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
              onChange={(event) => handleChangeUpdate(event)}
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
              onChange={(event) => handleChangeUpdate(event)}
            />
          </Form.Group>
          <Modal.Footer>
            <Button
              type="submit"
              variant="secondary"
              onClick={(event) => handleUpdateSubmit(event)}
            >
              Submit
            </Button>
            <Button variant="secondary" onClick={togUpForm}>
              Close Form
            </Button>
          </Modal.Footer>
        </Modal.Body>
      </Form>
    </Modal>
  );
};

export default UpdateBook;
