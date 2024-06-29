/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// import axios from "axios";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import PageTransition from "../../components/PageTransition";
import Api from "../../apis/Api";
// import { BookState } from "../../context/BookProvider";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [blind, setBlind] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();
  const [usernameValid, setusernameValid] = useState(true);
  const [passwordValid, setpasswordValid] = useState(true);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setusernameValid(true);
    setpasswordValid(true);
    setLoading(true);
    const call = new Api();
    call
      .getUsers(formData)
      .then((res) => {
        console.log(res);

        if (res.data === "wronguser") {
          alert("Wrong user");
          setusernameValid(false);
          setLoading(false);
          return;
        }

        if (res.data === "wrongPassword") {
          alert("password not correct");
          setpasswordValid(false);
          setLoading(false);
          return;
        }

        if (res.data === "success") {
          navigate("/Bookshelf");
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <PageTransition>
      <Box
        sx={{
          width: "100%",
          height: "fit",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            borderRadius: 3,
            backgroundColor: "#efebeba0",
            display: "flex",
            flexDirection: "column",
            height: "fit",
            border: "1px solid #00a32c50",
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <TextField
            variant="outlined"
            size="small"
            type="text"
            placeholder="Username"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            sx={{
              width: "100%",
              margin: 1,

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
                borderColor: usernameValid ? "#00a32c" : "#ff0000",
                borderWidth: "1px",
              },
            }}
          />
          {usernameValid ? null : (
            <Typography
              variant="caption"
              color="#ff0000"
              sx={{ width: "100%" }}
            >
              Username Not valid
            </Typography>
          )}
          <TextField
            variant="outlined"
            size="small"
            type={blind ? "text" : "password"}
            placeholder="Password"
            //   value={formData.password}

            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            sx={{
              width: "100%",
              margin: 1,
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
                borderColor: passwordValid ? "#00a32c" : "#ff0000",
                borderWidth: "1px",
              },
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {blind ? (
                    <FaRegEye onClick={() => setBlind(false)} />
                  ) : (
                    <FaRegEyeSlash onClick={() => setBlind(true)} />
                  )}
                </InputAdornment>
              ),
            }}
          />
          {passwordValid ? null : (
            <Typography
              variant="caption"
              color="#ff0000"
              sx={{ width: "100%" }}
            >
              password Not valid
            </Typography>
          )}
          {/* {valid ? (
            <></>
          ) : (
            <Typography
              variant="caption"
              color="#ff0000"
              sx={{ width: "100%" }}
            >
              {error?.formData}:
              <br />
              {error?.username}:
              <br />
              {error?.password}
            </Typography>
          )} */}
          <Button
            variant="contained"
            type="submit"
            color="success"
            sx={{
              width: "90%",
              backgroundColor: "#00a32c",
              borderRadius: 5,
            }}
            onClick={(e) => handleLogin(e)}
          >
            {loading ? (
              <CircularProgress size={20} sx={{ color: "#efebeb" }} />
            ) : (
              <Typography variant="body1" color="#efebeb">
                Login
              </Typography>
            )}
          </Button>
        </Toolbar>
      </Box>
    </PageTransition>
  );
};

export default Login;
