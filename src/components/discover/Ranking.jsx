/* eslint-disable react/prop-types */
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";

import { Link } from "react-router-dom";
// import { kOrM } from "../fucntions/Bookfunction";
import { BookState } from "../../context/BookProvider";
// import { BR } from "../fucntions/CMfunction";

const Ranking = () => {
  const { ratings, books } = BookState();
  // const { bookId } = useParams();
  const book = books.map((book) => {
    const rating = ratings?.find((rating) => rating.bookid === book._id) || {};
    return { ...rating, ...book };
  });
  // setLoading(false);
  return (
    <>
      <Grid
        container
        sx={{
          width: "100%",
          backgroundColor: "#01011800",
          backdropFilter: "blur(5px)",
          padding: 1,
          // borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          overflowX: "scroll",
          height: "45vh",
          // boxShadow: "2px 0px 20px #22222230",
        }}
      >
        {book
          ?.slice(0, 8)
          .sort((a, b) => {
            return b.likes - a.likes;
          })
          .map((book, id) => (
            <Card
              elevation={0}
              item
              key={id}
              sx={{
                width: 140,
                margin: 0.7,
                height: "fit",
                backgroundColor: "#00000000",
                zIndex: 0,
              }}
            >
              <CardActionArea component={Link} to={`/Bookshelf/${book?._id}`}>
                <CardMedia
                  component="img"
                  alt=""
                  sx={{
                    width: "100%",
                    borderRadius: 1.5,
                    height: "fit",
                    border: "1px solid #22222260",
                    boxShadow: "2px 0px 10px  #222222a0",
                  }}
                  image={book?.src}
                />

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    padding: 0.5,
                    whiteSpace: "pre-wrap",
                  }}
                >
                  <Typography
                    fontFamily="roboto"
                    variant="caption"
                    color="#000000"
                    sx={{ fontSize: 13 }}
                  >
                    {book?.title}
                  </Typography>
                </Box>
              </CardActionArea>
            </Card>
          ))}
      </Grid>
    </>
  );
};

export default Ranking;
