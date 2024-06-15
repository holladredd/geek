/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from "@mui/material";

import { Link, useParams } from "react-router-dom";
import { BookState } from "../context/BookProvider";
import { useEffect, useState } from "react";
import Api from "../apis/Api";
import PageTransition from "../components/PageTransition";
import { MdFavoriteBorder } from "react-icons/md";
import { kOrM } from "../components/fucntions/Bookfunction";
import { GrView } from "react-icons/gr";

const SearchResult = () => {
  const { bookTitle } = useParams();
  const { books, setBooks, ratings } = BookState();
  const [filtered, setFiltered] = useState([]);
  const searchValue = bookTitle.toString().toLowerCase();

  useEffect(() => {
    if (!books) {
      const call = new Api();
      call
        .getBooks()
        .then((res) => setBooks(res))
        .catch((err) => console.log(err));
    }
    setFiltered(
      books?.filter(
        (b) =>
          b?.title.toLowerCase().includes(searchValue) ||
          b?.writer.toLowerCase().includes(searchValue) ||
          b?.detail.toLowerCase().includes(searchValue)
      )
    );
  }, [setBooks, setFiltered, books, searchValue]);

  const filter = filtered.map((book) => {
    const rating = ratings.find((rating) => rating.bookid === books._id) || {};
    return { ...book, ...rating };
  });

  return (
    <PageTransition>
      <Box
        sx={{
          display: "flex",
          overflowY: "scroll",
          flexDirection: "column",
          background: "#efebeb",
          width: "100%",
          height: "100vh",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: 30,
            color: "#222222",
            textAlign: "center",
            marginTop: 3,
          }}
        >
          Results
        </Typography>
        <Box>
          {filter
            ?.sort((a, b) => {
              return b.likes - a.likes;
            })
            .map((book, index) => (
              <Card
                key={index}
                elevation={2}
                sx={{
                  width: "95%",
                  backgroundColor: "#01011800",
                  marginLeft: 0,
                  margin: 1,
                }}
              >
                <CardActionArea
                  component={Link}
                  to={`/Bookshelf/${book._id}`}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt=""
                    sx={{
                      borderRadius: 0,
                      display: "block",

                      maxWidth: "70px",
                    }}
                    image={book?.src}
                  />
                  <Box
                    sx={{
                      margin: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="body1"
                      fontFamily="roboto"
                      sx={{ fontSize: 15, color: "#222222" }}
                    >
                      {book?.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ fontSize: 10, color: "#00a32c" }}
                    >
                      {book?.genre}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Box
                        sx={{
                          width: "fit",
                          display: "flex",

                          justifyContent: "center",
                          alignItems: "center",
                          padding: 0.1,
                          borderRadius: 1,
                        }}
                      >
                        <MdFavoriteBorder size={15} color="#222222" />
                        <Typography
                          elevation={0}
                          fontFamily="roboto"
                          variant="caption"
                          color="#222222"
                          sx={{
                            fontSize: 12,
                            marginLeft: 0.2,
                            marginRight: 3,
                          }}
                        >
                          {kOrM(book?.likes)}
                        </Typography>
                      </Box>
                      <GrView size={15} color="#222222" />
                      <Typography
                        fontFamily="roboto"
                        variant="caption"
                        color="#222222"
                        sx={{ fontSize: 12, marginLeft: 0.5 }}
                      >
                        {kOrM(book?.views)}
                      </Typography>
                    </Box>
                  </Box>
                </CardActionArea>
              </Card>
            ))}
          {filtered?.length < 1 && (
            <Typography
              variant="h6"
              sx={{
                fontSize: 20,
                color: "#222222",
                textAlign: "center",
                marginTop: 10,
              }}
            >
              No Result Found
            </Typography>
          )}
        </Box>
      </Box>
    </PageTransition>
  );
};

export default SearchResult;
