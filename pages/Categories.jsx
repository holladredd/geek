/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";

import GenreCat from "../components/GenreCat";
import PageTransition from "../components/PageTransition";
// import { BookState } from "../context/BookProvider";
// import LoadingScreen from "../components/LoadingScreen";

const Categories = ({ books, genres }) => {
  return (
    <PageTransition>
      <Box
        sx={{
          background: "#efebeb",
        }}
      >
        {/* <LoadingScreen /> */}
        <Typography
          variant="h2"
          sx={{
            fontSize: 20,
            marginLeft: 2,
            color: "#222222",
            margintop: 2,
            marginBottom: 0,
          }}
        >
          Search All
        </Typography>
        <GenreCat genres={genres} books={books} />
      </Box>
    </PageTransition>
  );
};

export default Categories;
