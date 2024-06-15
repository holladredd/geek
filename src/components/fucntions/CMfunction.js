import { BookState } from "../../context/BookProvider";

export function BR() {
  const { ratings, books } = BookState();
  const book = books.map((book) => {
    const rating = ratings?.find((rating) => rating.bookid === book.id) || {};
    return { ...book, ...rating };
  });
}
export function BG() {
  const { genres, books } = BookState();
  const book = books.map((book) => {
    const genres = genres?.find((genre) => genre.bookid === book.id) || {};
    return { ...book, ...genres };
  })