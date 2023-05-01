import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


const BookDisplay = ({ storedBooks, setStoredBooks, toggleUpdate, togDisplay }) => {

  async function deleteRecord(id) {

    try {
    const res = await fetch(`http://localhost:5000/${id}/`, {
      method: "DELETE",
      headers: {"Content-Type":"application/json"}
    });

  }
  catch(error) {
    console.error("Error with delete", error);
  }

    
    const newRecords = storedBooks.filter((el) => el._id !== id);

    setStoredBooks(newRecords);
    
  }


  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5000/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const storedBooks = await response.json();
      setStoredBooks(storedBooks);
    }

    getRecords();

    return;
  }, [storedBooks.length]);

  return (
    <div>
      {storedBooks.length > 0 && (
        <div>
          {storedBooks.map((input) => {
            return (
              <div key={input._id}>
                <div>Title: {input.title}</div>
                <div>Author: {input.author}</div>
                <div>Pages: {input.pages}</div>
                <div>id: {input._id}</div>
                <Button
                  className="deleteBtn"
                  variant="secondary"
                  onClick={() => deleteRecord(input._id)}
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
