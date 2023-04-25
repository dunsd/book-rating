import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

const AddBook = ({ bookDetails, handleChange, handleSubmit, formIsVisible, closeForm }) => {
  return (
    <Modal show={formIsVisible} onHide={closeForm}>
        <Form className="addBookForm p-3 m-1">
        <Modal.Header closeButton>
            <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
              {bookDetails.map((input, index) => {
                return (
                  <div key={index}>
                    <Form.Group className="formInput m-1" controlId="title">
                      <Form.Label>Book Title: </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Book Title"
                        className="inputControl"
                        name="title"
                        value={input.title}
                        onChange={(event) => handleChange(index, event)}
                      />
                    </Form.Group>
                    <Form.Group className="formInput m-1" controlId="author">
                      <Form.Label>Author: </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Book Author"
                        className="inputControl"
                        name="author"
                        value={input.author}
                        onChange={(event) => handleChange(index, event)}
                      />
                    </Form.Group>
                    <Form.Group className="formInput m-1" controlId="pages">
                      <Form.Label>Page Count: </Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Page Count"
                        className="inputControl"
                        name="pages"
                        value={input.pages}
                        onChange={(event) => handleChange(index, event)}
                      />
                    </Form.Group>
                    <Modal.Footer>
                        <Button
                          type="submit"
                          variant="secondary"
                          onClick={(event) => handleSubmit(index, event)}
                        >
                          Submit
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={closeForm}
                            >
                                Close Form
                        </Button>
                    </Modal.Footer>
                  </div>
                );
              })}
              </Modal.Body>
            </Form>
        
    </Modal>
  );
};

export default AddBook;
