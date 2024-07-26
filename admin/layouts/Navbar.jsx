import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// const navi = useNavigate();
export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h3" color="initial">
            Logo
          </Typography>
          <Box>
            <Button variant="text" sx={{ color: "black" }}>
              Home
            </Button>
            <Button variant="text" sx={{ color: "black" }}>
              Categories
            </Button>
            <Button variant="text" sx={{ color: "black" }}>
              Edit
            </Button>
            <Button variant="text" sx={{ color: "black" }}>
              Login
            </Button>
            <Button
              variant="text"
              // onclick={() => navi("/olamideadmin/Logins")}
              component={Link}
              to="/olamideadmin/Logins"
              sx={{ color: "black" }}
            >
              Logins
            </Button>
            <Button
              variant="text"
              // onclick={() => navi("/olamideadmin/Logins")}
              component={Link}
              to="/"
              sx={{ color: "black" }}
            >
              Home
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
