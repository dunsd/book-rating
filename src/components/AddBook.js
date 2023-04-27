import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

const AddBook = ({ bookDetails, handleChange, handleSubmit, formIsVisible, closeForm, storedBooks }) => {
  
  const { title, author, pages } = bookDetails
  return (
    <Modal show={formIsVisible} onHide={closeForm}>
        <Form className="addBookForm p-3 m-1">
        <Modal.Header closeButton>
            <Modal.Title>Add a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
              {/* {storedBooks.map((input, index) => {
                return (
                  <div key={index}> */}
                    <Form.Group className="formInput m-1" controlId="title">
                      <Form.Label>Book Title: </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Book Title"
                        className="inputControl"
                        name="title"
                        value={title}
                        onChange={(event) => handleChange( event)}
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
                        onChange={(event) => handleChange( event)}
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
                          onClick={(event) => handleSubmit( event)}
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
                  {/* </div>
                );
              })} */}
              </Modal.Body>
            </Form>
        
    </Modal>
  );
};

export default AddBook;
