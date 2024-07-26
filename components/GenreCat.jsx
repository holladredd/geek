/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from "@mui/material";

import { Link } from "react-router-dom";

const GenreCat = ({ genres }) => {
  return (
    <Box>
      <Grid container p={2}>
        {genres.map((cat, index) => (
          <Box
            item
            key={index}
            component={Link}
            to={`/CatDisplay/${cat.name}`}
            sx={{
              width: "40%",
              margin: 1,
              padding: 1,
              textDecoration: "none",
              height: "70px",
              backgroundColor: cat.color,
              borderRadius: "10px",
              display: "flex",
              justifyContent: "left",
              overflow: "hidden",
              position: "relative",

              boxShadow: "2px 2px 10px #000000a0",
            }}
          >
            <Typography
              variant="body1"
              color="white"
              sx={{ fontWeight: "bold" }}
            >
              {cat.name}
            </Typography>
            <Box
              sx={{
                background: "white",
                width: "100px",
                height: "100px",
                borderRadius: "10px",
                position: "absolute",
                bottom: -30,
                right: -30,
                boxShadow: "2px 2px 10px #000000",
                rotate: "-30deg",
                backgroundImage: `url(${cat.src})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default GenreCat;
