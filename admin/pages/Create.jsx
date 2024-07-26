import { Box, Typography } from "@mui/material";

const Create = () => {
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
        Create Page
      </Typography>
    </Box>
  );
};

export default Create;
