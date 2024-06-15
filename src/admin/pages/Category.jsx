import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Category = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      <Typography variant="h1" color="initial">
        Category page
      </Typography>
    </Box>
  );
};

export default Category;
