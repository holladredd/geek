/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Card, CardActionArea, CardMedia } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { GrView } from "react-icons/gr";
import { MdFavoriteBorder } from "react-icons/md";
import { kOrM } from "../components/fucntions/Bookfunction";

const CatDisplay = ({ books, ratings }) => {
  const { genreName } = useParams();
  // console.log({ genreName, books });

  const book = books.map((book) => {
    const rating = ratings.find((rating) => rating.bookid === books._id) || {};
    return { ...book, ...rating };
  });
  return (
    <PageTransition>
      <Box
        sx={{
          background: "#efebeb",
          width: "100%",
          height: "100Vh",
          overflowY: "scroll",
        }}
      >
        <Typography
          variant="h4"
          color="#222222"
          sx={{
            textAlign: "center",
            margin: 2,
            borderBottom: "1px solid #00a32c50",
          }}
        >
          {genreName}
        </Typography>
        <Box sx={{ width: "100%", display: "flex", flexDirection: "column" }}>
          {book
            ?.sort((a, b) => {
              return b.likes - a.likes;
            })
            .filter((b) => b?.category === genreName)
            ?.map((book, index) => (
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
                    sx={{ margin: 1, display: "flex", flexDirection: "column" }}
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
                      color="grey"
                      sx={{ fontSize: 10, color: "#00a32c" }}
                    >
                      {book?.category}
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
        </Box>
      </Box>
    </PageTransition>
  );
};

export default CatDisplay;
