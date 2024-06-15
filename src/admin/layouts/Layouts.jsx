import { Box } from "@mui/material";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom/dist";

const Layouts = () => {
  return (
    <Box>
      <Navbar />
      <Outlet />
    </Box>
  );
};

export default Layouts;
