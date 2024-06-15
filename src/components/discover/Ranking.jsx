/* eslint-disable react/prop-types */
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import { MdFavoriteBorder } from "react-icons/md";

import { Link } from "react-router-dom";
import { kOrM } from "../fucntions/Bookfunction";
import { BookState } from "../../context/BookProvider";
// import { BR } from "../fucntions/CMfunction";

const Ranking = () => {
  const { ratings, books, setLoading } = BookState();
  // const { bookId } = useParams();
  const book = books.map((book) => {
    const rating = ratings?.find((rating) => rating.bookid === book._id) || {};
    return { ...rating, ...book };
  });
  setLoading(false);
  return (
    <>
      <Grid
        container
        sx={{
          width: "100%",
          backgroundColor: "#01011800",
          backdropFilter: "blur(5px)",
          padding: 1,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          overflowX: "auto",
          whiteSpace: "nowrap",
          height: "25vh",
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
                width: 70,
                margin: 0.7,
                backgroundColor: "#00000000",
                zIndex: 0,
              }}
            >
              <CardActionArea component={Link} to={`/Bookshelf/${book?._id}`}>
                <CardMedia
                  component="img"
                  alt=""
                  sx={{ borderRadius: 1.5, maxHeight: 115 }}
                  image={book?.src}
                />
                <Box
                  sx={{
                    width: "fit",
                    display: "flex",
                    border: "1px solid #00a32ca0",
                    background: "#22222280",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    top: 5,
                    right: 8,
                    padding: 0.1,
                    borderRadius: 1,
                  }}
                >
                  <MdFavoriteBorder size={10} color="white" />
                  <Typography
                    elevation={0}
                    fontFamily="roboto"
                    variant="caption"
                    color="#ffffff"
                    sx={{
                      fontSize: 8,
                      marginLeft: 0.2,
                    }}
                  >
                    {kOrM(book?.likes)}
                    {/* 67890 */}
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    fontFamily="roboto"
                    variant="caption"
                    color="#222222"
                    sx={{ fontSize: 10, fontWeight: "bold" }}
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
    </>
  );
};

export default Ranking;
