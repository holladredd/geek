import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
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
    <Box sx={{ width: 500, p: 4, m: "20px auto" }}>
      <FormControl fullWidth sx={{ p: 4, mt: 6 }}>
        <Typography variant="h4" gutterBottom>
          Login Here
        </Typography>

        <FormLabel>Email</FormLabel>
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
  );
};

export default Login;
