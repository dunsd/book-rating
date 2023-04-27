import React from "react";
import { Button } from "react-bootstrap";

const BookDisplay = ({ storedBooks }) => {
  return (
    <div>
      {storedBooks.length > 0 && <div>
        {storedBooks.map((input, index) => {
          return (
            <div key={index}>
              <div>Title: {input.title}</div>
              <div>Author: {input.author}</div>
              <div>Pages: {input.pages}</div>
              <Button className="deleteBtn" variant="secondary" > Delete</Button>
            </div>
          );
        })}
      </div>
      }
    </div>
  );
};
export default BookDisplay;
