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
          height: "85vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Toolbar
          sx={{
            width: "100%",
            // padding: 0,
            borderRadius: 3,
            // backgroundColor: "#222222",
            backgroundColor: "#efebeba0",
            display: "flex",
            flexDirection: "column",
            height: "fit",
            // border: "1px solid #00a32c50",
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Typography
            variant="h5"
            color="initial"
            sx={{ fontWeight: "semibold" }}
          >
            Login
          </Typography>
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
              marginTop: 2,

              "& .MuiOutlinedInput-root": {
                color: "#222222",
                background: "#22222210",

                borderRadius: 2,
              },
              "&.Mui-focused": {
                borderColor: "#ffffff40",
                borderWidth: "0px",
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#ffffff40",
                  borderWidth: "0px",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: usernameValid ? "#00a32c" : "#ff0000",
                borderWidth: "0px",
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
              marginTop: 2,
              "& .MuiOutlinedInput-root": {
                color: "#222222",
                background: "#22222210",

                borderRadius: 2,
                borderWidth: "0px",
              },
              "&.Mui-focused": {
                borderColor: "#22222240",
                "& .MuiOutlinedInput-notchedOutline": {
                  // borderColor: "#ffffff00",
                  borderColor: passwordValid ? "#00a32c" : "#ff0000",
                  borderWidth: "0px",
                },
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#00a32c",
                borderWidth: "0px",
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
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              marginTop: 2,
            }}
          >
            <Button
              variant="text"
              type="button"
              color="success"
              sx={{
                width: "fit",
                // backgroundColor: "#00a32c",
                textTransform: "initial",
              }}
              // onClick={(e) => handleLogin(e)}
            >
              <Typography variant="body1" color="#00a32c">
                Forgot password?
              </Typography>
            </Button>
          </Box>
          <Button
            variant="contained"
            type="submit"
            color="success"
            sx={{
              width: "100%",
              backgroundColor: "#222222",
              borderRadius: 2,
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
