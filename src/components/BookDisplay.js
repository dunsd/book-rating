import React from "react";
import { Button } from "react-bootstrap";

const BookDisplay = ({ storedBooks }) => {
  return (
    <div>
      {storedBooks.map((input, index) => {
        return (
          <div key={index}>
            <div>Title: {input.title}</div>
            <div>Title: {input.author}</div>
            <div>Title: {input.pages}</div>
            <Button className="deleteBtn" variant="secondary" > Delete</Button>
          </div>
        );
      })}
    </div>
  );
};
export default BookDisplay;
