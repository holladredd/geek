/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const BookContext = createContext();
function BookProvider(props) {
  const [books, setBooks] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [comments, setComments] = useState([]);
  const [genre, setGenre] = useState([]);
  const [background, setBackground] = useState([]);
  const [addBook, setAddBook] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  // const [archive, setArcive] = useState([]);
  const [liked, setLiked] = useState([]);

  return (
    <BookContext.Provider
      value={{
        books,
        setBooks,
        ratings,
        setRatings,
        comments,
        setComments,
        genre,
        setGenre,
        background,
        setBackground,
        loading,
        setLoading,
        addBook,
        setAddBook,
        liked,
        setLiked,
        users,
        setUsers,
      }}
    >
      {props.children}
    </BookContext.Provider>
  );
}
export const BookState = () => {
  return useContext(BookContext);
};
export default BookProvider;
