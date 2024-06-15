import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LgDLogin = () => {
  const navi = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username || password) {
      try {
        navi("/olamideadmin/");
      } catch (e) {
        alert(e);
      }
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#fefefe",
      
      }}
    >
      <Box sx={{ width: "100%", p: 4, m: "20px auto" }}>
        <Box
          fullWidth
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            // paddingLeft: 4,
            // paddingRight: 4,
          }}
        >
          <Box
            sx={{
              width: "100%",
              backgroundColor: "#22222",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar
              variant="square"
              aria-label="Logo"
              sx={{
                width: 40,
                height: 40,
                margin: 1,
                padding: 1,
                backgroundColor: "#fefefe",
                color: "#222222",
              }}
            >
              Logo
            </Avatar>
          </Box>

          <Typography
            variant="h6"
            gutterBottom
            sx={{
              color: "#fcfcfc",
              width: "100%",
              textAlign: "center",
            }}
          >
            Brand Name For Large Device
          </Typography>
        </Box>
        <FormControl fullWidth sx={{ p: 4, mt: 6 }}>
          <Input
            type="email"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username here"
            startAdornment={<InputAdornment position="start">@</InputAdornment>}
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleSubmit}
          >
            Login In
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
};

export default LgDLogin;
