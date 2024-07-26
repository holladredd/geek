/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { CiMenuKebab } from "react-icons/ci";
import Ranking from "../components/discover/Ranking";
import Genres from "../components/Genres";
import Books from "../components/discover/Books";
import Rising from "../components/discover/Rising";
import { BookState } from "../context/BookProvider";
import PageTransition from "../components/PageTransition";

const Bookshelf = () => {
  const { books, genre } = BookState();

  return (
    <PageTransition>
      <Box
        sx={{
          width: "100%",
          display: "flex",

          justifyContent: "center",
          flexDirection: "column",
          minHeight: "100vh",
          background: "#ebebeb",
        }}
      >
        <>
          <Box
            sx={{
              width: "100%",
              heigth: "20px",
              display: "flex",
              marginTop: 8,
              justifyContent: "space-between",
              borderBottom: "1px solid #00a32c50",
            }}
          >
            <Typography
              variant="h6"
              color="#222222"
              fontFamily="roboto"
              ml={1}
              mb={0}
            >
              Popular
            </Typography>
            <CiMenuKebab color="#ffffffb5" size={20} />
          </Box>
          {/* Ranking shelf here */}
          <Ranking />
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#efebeb",
              heigth: "25px",
              borderBottom: "1px solid #00a32c50",
            }}
          >
            <Typography variant="h6" color="#222222" fontFamily="roboto" ml={1}>
              Genres
            </Typography>

            {/* Genre Shelf here */}
            <Genres genres={genre} />
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#efebeb",
              borderBottom: "1px solid #00a32c50",
            }}
          >
            <Typography
              variant="h6"
              color="#222222"
              marginLeft={1}
              fontFamily="roboto"
            >
              Most Viewed
            </Typography>
            {/* featured books here */}
            <Books books={books} />
          </Box>
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#efebeb",
              backdropFilter: "blur(5px)",
            }}
          >
            <Typography variant="h6" color="#222222" fontFamily="roboto" ml={1}>
              Rising
            </Typography>

            {/* Genre Shelf here */}
            <Rising books={books} />
          </Box>{" "}
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#efebeb",
              backdropFilter: "blur(5px)",
            }}
          >
            <Typography variant="h6" color="#222222" fontFamily="roboto" ml={1}>
              Favorite
            </Typography>

            {/* Genre Shelf here */}
            <Rising books={books} />
          </Box>
        </>
      </Box>
    </PageTransition>
  );
};

export default Bookshelf;
