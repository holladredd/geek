import { Box, Typography } from "@mui/material";

const AdminError = () => {
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
        Admin Page Error
      </Typography>
    </Box>
  );
};

export default AdminError;
