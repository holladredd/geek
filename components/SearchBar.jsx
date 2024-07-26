/* eslint-disable react/prop-types */
import {
  Box,
  Toolbar,
  Avatar,
  Typography,
  Button,
  TextField,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

import { Link, useLocation, useNavigate } from "react-router-dom";
// import { BookState } from "../context/BookProvider";

const SearchBar = () => {
  // const { books, genres } = BookState();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const path = useLocation().pathname;

  const handleSearch = () => {
    if (search.length < 3) {
      alert("search text too short");
      return;
    }
    navigate(`/SearchResult/${encodeURIComponent(search)}`);
    setSearch("");
  };
  return (
    <Box
      sx={{
        display:
          path === "/Bookshelf" ||
          path === "/Search" ||
          path === "/CatDisplay" ||
          path === "/Library"
            ? "flex"
            : "none",
        backgroundColor: "none",
        width: "100%",
        flexDirection: "column",
        borderBottom: "1px solid #00a32c50",
        zIndex: 30,
      }}
    >
      <Box
        sx={{
          position: path === "/Search" ? "sticky" : "fixed",
          top: 0,
          width: "100%",
          background: "#efebeb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 60,
        }}
      >
        <Avatar
          component={Link}
          to="/profile"
          variant="circular"
          src="https://media.gettyimages.com/id/1533020165/photo/portrait-of-confident-hispanic-woman-standing-in-office.jpg?s=612x612&w=0&k=20&c=90W52NJ364Oc4fSk5T94ODyKU6XlSdVi1U8dh4AYK-s="
          sx={{ width: 40, height: 40, margin: 1, border: "1px solid #00a32c" }}
        />
        <Typography
          variant="h6"
          sx={{
            display: path === "/Bookshelf" ? "flex" : "none",
            color: "#222222",
          }}
        >
          Discover
        </Typography>{" "}
        <Typography
          variant="h6"
          sx={{
            display: path === "/Search" ? "flex" : "none",
            color: "#222222",
          }}
        >
          Search
        </Typography>
        <Typography
          variant="h6"
          color="#222222"
          sx={{
            display: path === "/Library" ? "flex" : "none",
            color: "#222222",
          }}
        >
          Your Library
        </Typography>
        <Button
          variant="text"
          // onclick={() => navi("/olamideadmin/Logins")}
          component={Link}
          to="/Login"
          sx={{ color: "#222222", textTransform: "initial" }}
        >
          Log In
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: path === "/Search" ? "flex" : "none",
          position: path === "/Search" ? "sticky" : "none",

          top: 0,
          left: 0,
          background: "#ff",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            background: "#efebeb",
            backdropFilter: "blur(4px)",
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            type="text"
            value={search}
            onSubmit={handleSearch}
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              width: "100%",
              "& .MuiOutlinedInput-root": {
                color: "#222222",
                background: "#efebeb",

                borderRadius: 5,
              },
              "&.Mui-focused": {
                borderColor: "#ffffff40",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff40",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ffffff40",
                borderWidth: "1px",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment
                  position="end"
                  onClick={handleSearch}
                  type="submit"
                >
                  <CiSearch size={30} color="#222222" />
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
      </Box>
    </Box>
  );
};

export default SearchBar;
