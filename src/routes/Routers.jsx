import { Route, Routes } from "react-router-dom/dist";

import Bookshelf from "../pages/Bookshelf";
import Errorpage from "../pages/Errorpage";
import ClientLayouts from "../components/ClientLayouts";
import Categories from "../pages/Categories";
import ClientHome from "../pages/ClientHome";
import { Box, Typography } from "@mui/material";
import Library from "../pages/Library";
import Profile from "../pages/Profile";
import CatDisplay from "../pages/CatDisplay";
import BookDesc from "../pages/BookDesc";
import SearchResult from "../pages/SearchResult";
import Read from "../pages/Read";
import { useEffect } from "react";
import Api from "../apis/Api";
import { BookState } from "../context/BookProvider";
import SignUp from "../pages/users/SignUp";
import Login from "../pages/users/Login";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";

const Routers = () => {
  const {
    books,
    setBooks,
    ratings,
    setRatings,
    comments,
    setComments,
    genre,
    setGenre,
    setBackground,
    background,
    users,
    setUsers,
    loading,
    setLoading,
  } = BookState();

  useEffect(() => {
    setLoading(true);
    const call = new Api();
    call
      .getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
    call
      .getRatings()
      .then((res) => setRatings(res.data))
      .catch((err) => console.log(err.data));
    call
      .getComments()
      .then((res) => setComments(res.data))

      .catch((err) => console.log(err));
    // setLoading(false);

    call
      .getBackgroundImages()
      .then((res) => setBackground(res.data))
      .catch((err) => console.log(err));

    call
      .getGenres()
      .then((res) => setGenre(res.data))
      .catch((err) => console.log(err));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // call
    //   .PostComment()
    //   .then((res) => setComments(res.data))
    //   .catch((err) => console.log(err));
  }, [
    setBooks,
    setGenre,
    setBackground,
    setLoading,
    setRatings,
    setComments,
    setUsers,
  ]);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <Box>
      <AnimatePresence initial={false} mode="wait">
        <Box
          sx={{
            width: "100%",
            heigth: "90vh",
            display: "none",
            flexDirection: "column",
            backgroundColor: "#efefeb",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 100,
            position: "fixed",
            top: 0,
            left: 0,
          }}
        >
          <Typography variant="h1" color="initial">
            Ooops! Desktop Site5ot Allowed for now{" "}
          </Typography>
          <Typography variant="h4" color="initial">
            Please revert back to mobile{" "}
          </Typography>
        </Box>
        <Routes>
          {/* client Routes */}
          <Route
            path="/"
            element={<ClientLayouts books={books} genres={genre} />}
          >
            <Route index element={<ClientHome backgrounds={background} />} />
            <Route
              path="/Bookshelf"
              element={
                <Bookshelf books={books} ratings={ratings} genres={genre} />
              }
            />
            <Route path="/Library" element={<Library />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Search" element={<Categories genres={genre} />} />
            <Route
              path="/CatDisplay/:genreName"
              element={
                <CatDisplay books={books} ratings={ratings} genres={genre} />
              }
            />
            <Route
              path="/searchResult/:bookTitle"
              element={
                <SearchResult books={books} ratings={ratings} genres={genre} />
              }
            />
            <Route
              path="/Bookshelf/:bookId"
              element={
                <BookDesc
                  books={books}
                  // genres={genre}
                  ratings={ratings}
                  comments={comments}
                  users={users}
                />
              }
            />
            <Route
              path="/Read"
              element={<Read books={books} genres={genre} />}
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            {/* <Route path="/SearchResult" element={<SearchResult />} /> */}
            <Route path="*" element={<Errorpage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Box>
  );
};

export default Routers;
