/* eslint-disable react/prop-types */
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
// import { MdFavoriteBorder } from "react-icons/md";

import { Link } from "react-router-dom";
// import { kOrM } from "../fucntions/Bookfunction";
import { BookState } from "../../context/BookProvider";

const Rising = ({ books }) => {
  const { ratings } = BookState();
  const book = books.map((book) => {
    const rating = ratings.find((rating) => rating.bookid === book._id) || {};
    return { ...rating, ...book };
  });
  // const Books = books
  //   .filter((b) => b.rating?.likes <= 1000)
  //   .sort((a, b) => {
  //     return b.rating.likes - a.rating.likes;
  //   });

  return (
    <Box sx={{ marginBottom: 5 }}>
      <Grid
        container
        sx={{
          width: "100%",
          backgroundColor: "#01011800",
          // backdropFilter: "blur(5px)",
          // padding: 0.5,
          // borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          overflowX: "scroll",
          // backgroundColor: "#000000",
          height: "30vh",
        }}
      >
        {book
          ?.slice(0, 8)
          .filter((b) => b?.likes <= 1000)
          .sort((a, b) => {
            return a.likes - b.likes;
          })
          .map((book, id) => (
            <Card
              elevation={0}
              item
              key={id}
              sx={{
                width: 100,
                margin: 1,
                height: "fit",
                backgroundColor: "#00000000",
                zIndex: 0,
              }}
            >
              <CardActionArea component={Link} to={`/Bookshelf/${book._id}`}>
                <CardMedia
                  component="img"
                  alt=""
                  sx={{
                    borderRadius: 1.5,
                    height: 135,
                    boxShadow: "2px 0px 10px  #222222a0",
                  }}
                  image={book?.src}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    whiteSpace: "wrap",
                    marginTop: 0.5,
                    // position: "absolute",
                    // bottom: 0,
                  }}
                >
                  <Typography
                    fontFamily="roboto"
                    variant="caption"
                    color="#00a32c"
                    sx={{ fontSize: 13, fontWeight: "bold" }}
                  >
                    {book?.title}
                  </Typography>
                  <Typography
                    fontFamily="roboto"
                    variant="caption"
                    color="#00a32c"
                    sx={{ fontSize: 11 }}
                  >
                    {book?.genre}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          ))}
      </Grid>
    </Box>
  );
};

export default Rising;
