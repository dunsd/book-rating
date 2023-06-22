import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";

const BookDisplay = ({
  upFormIsVisible,
  storedBooks,
  setStoredBooks,
  editBook,
  currentUser,
}) => {
  async function deleteRecord(id) {
    try {
      await fetch(`http://localhost:5000/api/books/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error with delete", error);
    }

    const newRecords = storedBooks.filter((el) => el.id !== id);

    setStoredBooks(newRecords);
  }

  //refresh list if no. of books change or if edit form is closed
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(
        `http://localhost:5000/api/books`, {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const storedBooks = await response.json();
      setStoredBooks(storedBooks);
    }
    //if (currentUser) {
      getRecords();
    //}
    return;
    // eslint-disable-next-line
  }, [/*storedBooks.length, storedBooks*/]);

  return (
    <div>
      Current User: {currentUser}
      {storedBooks.length > 0 ? (
        <div>
          {storedBooks.map((input) => {
            return (
              <Card key={input.id}>
                <Card.Body>
                  <div>Title: {input.title}</div>
                  <div>Author: {input.author}</div>
                  <div>Pages: {input.pages}</div>
                  <div>Review: {input.review}</div>
                </Card.Body>
                <div className="cardBtns">
                  <Button
                    className="deleteBtn"
                    variant="secondary"
                    onClick={() => deleteRecord(input.id)}
                  >
                    Delete
                  </Button>
                  <Button
                    className="editBtn"
                    variant="secondary"
                    onClick={() => editBook(input)}
                  >
                    Edit
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <Card.Body>
            No books are currently recorded under this user.
            <br></br>
            Press the "Add Book" button above to add your first book!
          </Card.Body>
        </Card>
      )}
    </div>
  );
};
export default BookDisplay;
