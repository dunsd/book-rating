import React from "react";

const BookDisplay = ({ storedBooks }) => {
  return (
    <div>
      {storedBooks.map((input, index) => {
        return (
          <div key={index}>
            <div>Title: {input.title}</div>
            <div>Title: {input.author}</div>
            <div>Title: {input.pages}</div>
          </div>
        );
      })}
    </div>
  );
};
export default BookDisplay;
