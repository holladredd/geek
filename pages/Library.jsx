import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import { BookState } from "../context/BookProvider";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const Library = () => {
  const { books, addBook } = BookState();
  const addedBook = books.find((b) => b.id == addBook);
  return (
    <PageTransition>
    <Box
      sx={{
        background: "#efebeb",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <Typography
        variant="h3"
        color="#222222"
        sx={{ textAlign: "center", width: "100%", marginTop: 7 }}
      >
        Library
      </Typography>
      <Grid
        container
        sx={{
          width: "100%",
          display: "flex",
          padding: 1,
          backgroundColor: "#01011800",

          justifyContent: "space-between",

          overflowX: "auto",
          whiteSpace: "nowrap",
        }}
      >
        {addedBook?.map((book, id) => (
          <Card
            elevation={0}
            item
            key={id}
            sx={{
              width: 100,
              margin: 0.7,
              backgroundColor: "#00000000",
            }}
          >
            <CardActionArea component={Link} to={`/Bookshelf/${book.id}`}>
              <CardMedia
                component="img"
                alt=""
                height="140"
                sx={{
                  borderRadius: 1.5,
                  // height: "120",
                }}
                image={book.src}
              />
              <Box
                sx={{
                  display: "flex",
                  width: "100%",
                  flexDirection: "column",
                  background:
                    "radial-gradient(at 0% 0% , #FFD30070 0px , #000000da 60%)",
                  position: "absolute",
                  bottom: 0,
                }}
              >
                <Typography
                  fontFamily="short stack"
                  variant="caption"
                  color="#ffffffb5"
                  sx={{
                    fontSize: 10,
                    fontWeight: "bold",
                    textShadow: "1px 1px #000000",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                >
                  {book.title}
                </Typography>
                <Typography
                  variant="caption"
                  color="#ffffffa0"
                  sx={{ fontSize: 10 }}
                >
                  {book.genre.category}
                </Typography>
                <Rating
                  name="read-only"
                  sx={{ marginBottom: 0.5 }}
                  value={book.rating.values}
                  readOnly
                  size="small"
                />
              </Box>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
    </Box>
    </PageTransition>
  );
};

export default Library;
