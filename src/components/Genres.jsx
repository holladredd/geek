/* eslint-disable react/prop-types */
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Genres = ({ genres }) => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          overflowX: "scroll",
          backgroundColor: "#efebeb",
          borderRadius: 2,
        }}
      >
        {genres?.map((cat, id) => (
          <Box
            key={id}
            component={Link}
            to={`/CatDisplay/${cat?.name}`}
            sx={{
              heigth: "30px",
              margin: 1,
              width: "fit",
              padding: 1,
              display: "flex",
              borderRadius: 2,
              textDecorationLine: "none",
              justifyContent: "center",
              alignItems: "center",
              backgroundImage: `url(${cat.src})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Typography
              variant="h6"
              color="whitesmoke"
              fontFamily="short stack"
              sx={{
                textShadow: "2px 2px #000000",
                fontSize: 15,
              }}
            >
              {cat?.name}
            </Typography>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default Genres;
