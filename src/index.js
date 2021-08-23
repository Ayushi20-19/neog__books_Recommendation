import { useState } from "react";
import "./styles.css";

const bookData = {
  Literature: [
    { name: "The Great Gatsby", author: " F. Scott Fitzgerald", rating: "3/5" },
    {
      name: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      rating: "5/5",
    },
    { name: "Wuthering Heights", author: "Emily Brontë", rating: "4/5" },
    { name: "1984", author: "George Orwell", rating: "4/5" },
  ],
  Fiction: [
    { name: "Breasts and Eggs", author: "Mieko Kawakami", rating: "3/5" },
    { name: "The Mirror & the Light", author: "Hilary Mantel", rating: "3/5" },
    { name: "Shuggie Bain", author: "Douglas Stuart", rating: "4/5" },
    { name: "The Vanishing Half", author: "Brit Bennett", rating: "5/5" },
  ],
};

var bookList = Object.keys(bookData);
export default function App() {
  const [ListOfBooks, setListOfBooks] = useState([]);
  const clickHandler = (e) => {
    console.log(e);
    setListOfBooks(bookData[e]);
    console.log(ListOfBooks);
  };

  return (
    <div className='App'>
      <h3>
        Hey there do you love reading books? Checkout some amazing books
        according to genre.
      </h3>
      {bookList.map((book) => {
        return <button onClick={() => clickHandler(book)}>{book}</button>;
      })}
      {ListOfBooks.map((val) => {
        return (
          <div>
            <li
              style={{
                display: "flex",
                textAlign: "center",
                padding: ".1rem 1rem",
              }}
              key={val.name}>
              <div>{val.name}</div>
              <div>{val.author}</div>
              <div>{val.rating}</div>
            </li>
          </div>
        );
      })}
    </div>
  );
}
