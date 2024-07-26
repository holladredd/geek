import { Box, Typography } from "@mui/material";

export default function Errorpage() {
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
      <Typography variant="h1" color="white">
        Error
      </Typography>
    </Box>
  );
}
