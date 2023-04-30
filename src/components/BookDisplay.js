import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


const BookDisplay = () => {
  async function deleteBook(id) {
    // await fetch(`http://localhost:5000/${id}`, {
    //   method: "DELETE",
    // });
    console.log(storedBooks);
  }
const [storedBooks, setStoredBooks] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setStoredBooks(records);
    }

    getRecords();

    return;
  }, [storedBooks.length]);

  return (
    <div>
      {storedBooks.length > 0 && (
        <div>
          {storedBooks.map((input, index) => {
            return (
              <div key={input.id}>
                <div>Title: {input.title}</div>
                <div>Author: {input.author}</div>
                <div>Pages: {input.pages}</div>
                <div>{input.id}</div>
                <Button
                  className="deleteBtn"
                  variant="secondary"
                  onClick={() => deleteBook(input.id)}
                >
                  {" "}
                  Delete
                </Button>
                <Button className="editBtn" variant="secondary">
                  {" "}
                  Edit
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default BookDisplay;
