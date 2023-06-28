import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";

const BookDisplay = ({
  upFormIsVisible,
  storedBooks,
  setStoredBooks,
  editBook,
  currentUser,
  apiURL
}) => {
  async function deleteRecord(id) {
    try {
      await fetch(apiURL + `/books/${id}`, {
        method: "DELETE",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${currentUser.token}`
        },
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
      const token = currentUser.token;
      const username = currentUser.username;
      if(token) {
      const response = await fetch(
        apiURL + `/books/list/${username}`, {
          method: "GET",
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${currentUser.token}`
           },
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
    }
    //if (currentUser) {
      getRecords();
    //}
    return;
    // eslint-disable-next-line
  }, [storedBooks.length, storedBooks]);

  return (
    <div>
      { currentUser && <div> Current User: {currentUser.username}
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
      </div>}
    </div>
    
  );
};
export default BookDisplay;
