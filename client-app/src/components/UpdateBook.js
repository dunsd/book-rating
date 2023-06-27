import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

const UpdateBook = ({
  handleChangeUpdate,
  bookToUpdate,
  upFormIsVisible,
  togUpForm,
  currentUser,
}) => {
  async function updateBookDb(id, book) {
    await fetch(`http://localhost:5000/update/${id}/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${currentUser.token}`
      },
      body: JSON.stringify(book),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }

  //submit handler
  const { id, title, author, pages, review } = bookToUpdate;
  const handleUpdateSubmit = (event) => {
    event.preventDefault();
    const updatedBook = {
      id: id,
      user: currentUser.username,
      title,
      author,
      pages,
      review
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
          <Form.Group className="formInput m-1" controlId="pages">
            <Form.Label>Review: </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Review"
              className="inputControl"
              name="review"
              value={review}
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
