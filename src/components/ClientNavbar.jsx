/* eslint-disable no-constant-condition */
import { Box, Button, Typography } from "@mui/material";
import { BiSearchAlt } from "react-icons/bi";
import { LuLibrary } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoLogoWebComponent } from "react-icons/io5";

const ClientNavbar = () => {
  const path = useLocation().pathname;

  return (
    <Box
      sx={{
        width: "100%",
        heigth: "40px",
        position: "fixed",
        bottom: -5,
        background: "#ffffff",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backdropFilter: "blur(5px)",
        display:
          path === "/" || path === "/Login" || path === "/SignUp"
            ? "none"
            : "flex",
        // borderTop: "2px solid  #00a32ca0",
        zIndex: 50,
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="text"
        component={Link}
        to="/Bookshelf"
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: 4,
          paddingRight: 4,
          textTransform: "initial",
          color:
            path === "/Bookshelf"
              ? {
                  color: " #00a32cd0 ",
                }
              : "#222222d0",
        }}
      >
        <IoLogoWebComponent size={25} />
        <Typography
          variant="caption"
          fontFamily="roboto"
          sx={{ fontSize: 12, fontWeight: "normal" }}
        >
          Discover
        </Typography>
      </Button>
      <Button
        variant="text"
        component={Link}
        to="/Search"
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: 4,
          paddingRight: 4,
          textTransform: "initial",
          color:
            path === "/Search"
              ? {
                  color: " #00a32cd0 ",
                }
              : "#222222d0",
        }}
      >
        <BiSearchAlt size={25} />
        <Typography
          variant="caption"
          fontFamily="roboto"
          sx={{ fontSize: 12, fontWeight: "normal" }}
        >
          Search
        </Typography>
      </Button>
      <Button
        variant="text"
        component={Link}
        to="/Library"
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: 5,
          paddingRight: 5,
          textTransform: "initial",
          color:
            path === "/Library"
              ? {
                  color: " #00a32cd0 ",
                }
              : "#222222d0",
        }}
      >
        <LuLibrary size={25} />
        <Typography
          variant="caption"
          fontFamily="roboto"
          sx={{
            fontSize: 12,
            fontWeight: "normal",
          }}
        >
          Library
        </Typography>
      </Button>
      <Button
        variant="text"
        component={Link}
        to="/Profile"
        sx={{
          display: "flex",
          flexDirection: "column",
          paddingLeft: 5,
          paddingRight: 5,
          textTransform: "initial",

          color:
            path === "/Profile"
              ? {
                  color: " #00a32cd0 ",
                }
              : "#222222d0",
        }}
      >
        <CgProfile size={25} />
        <Typography
          variant="caption"
          fontFamily="roboto"
          sx={{
            fontSize: 12,
            fontWeight: "normal",
          }}
        >
          Profile
        </Typography>
      </Button>
    </Box>
  );
};

export default ClientNavbar;
