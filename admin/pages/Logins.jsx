import { Box, createTheme } from "@mui/material";

import SmDLogin from "./components/SmDLogin";
import LgDLogin from "./components/LgDLogin";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
const Logins = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <SmDLogin
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      />
      {/* <LgDLogin
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
      /> */}
      {/* {theme.breakpoints.between("xs", "sm") ? <SmDLogin /> : <LgDLogin />} */}
      {/* {theme.breakpoints.between("md", "xl") ? <LgDLogin /> : ""} */}
    </Box>
  );
};

export default Logins;
