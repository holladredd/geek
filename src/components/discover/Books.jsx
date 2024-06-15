/* eslint-disable react/prop-types */

import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import { kOrM } from "../fucntions/Bookfunction";
import { BookState } from "../../context/BookProvider";

const Books = () => {
  const { ratings, books } = BookState();
  // const { bookId } = useParams();
  const book = books.map((book) => {
    const rating = ratings?.find((rating) => rating.bookid === book._id) || {};
    return { ...rating, ...book };
  });

  return (
    <Grid
      container
      sx={{
        width: "100%",
        display: "flex",
        padding: 1,
        backgroundColor: "#efebeb",
        flexDirection: "column",

        height: "47vh",
        overflowX: "scroll",
        whiteSpace: "nowrap",
      }}
    >
      {book
        ?.slice(0, 12)
        // .filter((b) => b.views >= 10000)
        .sort((a, b) => {
          return b.views - a.views;
        })
        .map((book, index) => (
          <Card
            elevation={0}
            item
            key={index}
            sx={{
              width: "90%",
              height: "80",
              margin: 1,
              backgroundColor: "#00000000",
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
              <Box>
                <Typography variant="h6" color="#00a32c" sx={{ margin: 1 }}>
                  {index}
                </Typography>
              </Box>
              <CardMedia
                component="img"
                alt={book?.title}
                sx={{
                  borderRadius: 1.5,
                  width: 50,
                  height: "80",
                }}
                image={book?.src}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: 1,
                }}
              >
                <Typography
                  fontFamily="roboto"
                  variant="body1"
                  color="#222222"
                  sx={{
                    fontSize: 14,
                    fontWeight: "normal",
                    marginTop: 0,
                  }}
                >
                  {book?.title}
                </Typography>
                <Typography
                  fontFamily="roboto"
                  variant="caption"
                  color="#00a32c"
                  sx={{ fontSize: 11 }}
                >
                  {book?.category}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
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
    </Grid>
  );
};

export default Books;
