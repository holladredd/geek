import { Route, Routes } from "react-router-dom/dist";

// import Bookshelf from "../pages/Bookshelf";
import Errorpage from "../pages/Errorpage";
import ClientLayouts from "../components/ClientLayouts";
import Categories from "../pages/Categories";
// import ClientHome from "../pages/ClientHome";
import { Box } from "@mui/material";
// import Library from "../pages/Library";
// import Profile from "../pages/Profile";
// import CatDisplay from "../pages/CatDisplay";
// import BookDesc from "../pages/BookDesc";
// import SearchResult from "../pages/SearchResult";
// import Read from "../pages/Read";
import { Suspense, lazy, useEffect } from "react";
import Api from "../apis/Api";
import { BookState } from "../context/BookProvider";
import SignUp from "../pages/users/SignUp";
import Login from "../pages/users/Login";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "../components/LoadingScreen";

const ClientHome = lazy(() => import("../pages/ClientHome"));
const Bookshelf = lazy(() => import("../pages/Bookshelf"));
const Library = lazy(() => import("../pages/Library"));
const Profile = lazy(() => import("../pages/Profile"));
const CatDisplay = lazy(() => import("../pages/CatDisplay"));
const BookDesc = lazy(() => import("../pages/BookDesc"));
const SearchResult = lazy(() => import("../pages/SearchResult"));
const Read = lazy(() => import("../pages/Read"));

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

  // if (loading) {
  //   return <LoadingScreen />;
  // }
  return (
    <Box>
      <AnimatePresence initial={false} mode="wait">
        {/* <Box
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
        </Box> */}
        <Routes>
          {/* client Routes */}
          <Route
            path="/"
            element={<ClientLayouts books={books} genres={genre} />}
          >
            <Route
              index
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <ClientHome backgrounds={background} />
                </Suspense>
              }
            />
            <Route
              path="/Bookshelf"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Bookshelf books={books} ratings={ratings} genres={genre} />
                </Suspense>
              }
            />
            <Route
              path="/Library"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Library />
                </Suspense>
              }
            />
            <Route
              path="/Profile"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Profile />
                </Suspense>
              }
            />
            <Route
              path="/Search"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Categories genres={genre} />
                </Suspense>
              }
            />
            <Route
              path="/CatDisplay/:genreName"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <CatDisplay books={books} ratings={ratings} genres={genre} />
                </Suspense>
              }
            />
            <Route
              path="/searchResult/:bookTitle"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <SearchResult
                    books={books}
                    ratings={ratings}
                    genres={genre}
                  />
                </Suspense>
              }
            />
            <Route
              path="/Bookshelf/:bookId"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <BookDesc
                    books={books}
                    // genres={genre}
                    ratings={ratings}
                    comments={comments}
                    users={users}
                  />
                </Suspense>
              }
            />
            <Route
              path="/Read"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Read books={books} genres={genre} />
                </Suspense>
              }
            />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            {/* <Route path="/SearchResult" element={<SearchResult />} /> */}
            <Route
              path="*"
              element={
                <Suspense fallback={<LoadingScreen />}>
                  <Errorpage />
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </Box>
  );
};

export default Routers;
