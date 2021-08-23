import { useState } from "react";
import "./styles.css";

const bookData = {
  Literature: [
    { name: "a", rating: "3/5" },
    { name: "b", rating: "5/5" },
    { name: "c", rating: "4/5" },
    { name: "d", rating: "4/5" }
  ],
  Friction: [
    { name: "1", rating: "3/5" },
    { name: "2", rating: "3/5" },
    { name: "3", rating: "4/5" },
    { name: "4 ", rating: "5/5" }
  ]
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
    <div className="App">
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
                padding: ".1rem 1rem"
              }}
              key={val.name}
            >
              <div>{val.name}</div>
              <div>{val.rating}</div>
            </li>
          </div>
        );
      })}
    </div>
  );
}
