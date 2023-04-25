import React, { useState } from "react";
import { Form, Container } from "react-bootstrap";
import Button from "react-bootstrap";

const AddBook = ({bookDetails, handleChange, handleSubmit}) => {
//   const [bookDetails, setBookDetails] = useState([
//     {
//       title: "",
//       author: "",
//       pages: "",
//     },
//   ]);

//   const handleChange = (index, event) => {
//     let data = [...bookDetails];
//     data[index][event.target.name] = event.target.value;
//     setBookDetails(data);
//   };

  return (
    <Form className="addBookForm">
      {bookDetails.map((input, index) => {
        return (
          <div key={index}>
            <Form.Group className="formInput" controlId="title">
              <Form.Control
                type="text"
                placeholder="Book Title"
                className="inputControl"
                name="title"
                value={input.title}
                onChange={(event) => handleChange(index, event)}
              />
            </Form.Group>
            <Form.Group className="formInput" controlId="author">
              <Form.Control
                type="text"
                placeholder="Book Author"
                className="inputControl"
                name="author"
                value={input.author}
                onChange={(event) => handleChange(index, event)}
              />
            </Form.Group>
            <Form.Group className="formInput" controlId="pages">
              <Form.Control
                type="number"
                placeholder="Page Count"
                className="inputControl"
                name="pages"
                value={input.pages}
                onChange={(event) => handleChange(index, event)}
              />
            </Form.Group>
            <button onClick={(event) => handleSubmit(index, event)}>Submit</button>
          </div>
        );
      })}
    </Form>
  );
};

export default AddBook;
