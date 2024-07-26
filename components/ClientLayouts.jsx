import { Outlet } from "react-router-dom/dist";
import ClientNavbar from "./ClientNavbar";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";

const ClientLayouts = () => {
  return (
    <Box className="bigwrapper">
      <SearchBar />
      <ClientNavbar />
      <Outlet />
    </Box>
  );
};

export default ClientLayouts;
