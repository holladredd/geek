/* eslint-disable no-constant-condition */
/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
// import axios from "axios";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
import PageTransition from "./../../components/PageTransition";
import { CircularProgress } from "@mui/material";
import Api from "../../apis/Api";
// import Api from "../../apis/Api";

const SignUp = () => {
  const [userData, setUserData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    confirmpassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [blind, setBlind] = useState();
  const [error, setError] = useState({});
  const [valid, setValid] = useState(true);
  // const navigate = useNavigate();
  const handleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    let isvalid = true;
    let validationErrors = {};
    const newuser = { ...userData };
    const call = new Api();
    if (
      userData.fullname == "" &&
      userData.email == "" &&
      userData.username == "" &&
      userData.password == "" &&
      userData.confirmpassword == ""
    ) {
      isvalid = false;

      validationErrors.userData = "Details can not be empty";
      setLoading(false);
    }
    // if (userData.username !== null) {
    //   isvalid = false;
    //   validationErrors.username = "username already exist";

    //   setLoading(false);
    // }
    if (userData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "password length atleast 6 char";
      setLoading(false);
    }
    if (userData.confirmpassword !== userData.password) {
      isvalid = false;
      validationErrors.confirmpassword =
        "password and confirm password not related";
    } else {
      call
        .createUsers(newuser)
        .then(() => {
          setUserData({
            fullname: "",
            email: "",
            username: "",
            password: "",
            confirmpassword: "",
          });
          alert("User created Successful");
          setError(validationErrors);
          setValid(isvalid);
        })
        .catch((err) => console.log(err));
      setLoading(false);

      return;
    }
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
            backgroundColor: "#efebeb",
            borderRadius: 3,
            display: "flex",
            flexDirection: "column",
            height: "fit",
            border: "1px solid #00a32c50",
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          <Typography variant="h5" color="initial">
            Sign up Here
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            type="text"
            placeholder="Your Full name"
            onChange={(e) =>
              setUserData({ ...userData, fullname: e.target.value })
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
                borderColor: "#22222250",
                borderWidth: "1px",
              },
            }}
          />
          {valid ? null : (
            <Typography
              variant="caption"
              color="#ff0000"
              sx={{ width: "100%" }}
            >
              {error?.fullname}
            </Typography>
          )}
          <TextField
            variant="outlined"
            size="small"
            type="text"
            placeholder="Email here"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
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
                borderColor: "#22222250",
                borderWidth: "1px",
              },
            }}
          />
          {valid ? null : (
            <Typography
              variant="caption"
              color="#ff0000"
              sx={{ width: "100%" }}
            >
              {error?.email}
            </Typography>
          )}
          <TextField
            variant="outlined"
            size="small"
            type="text"
            placeholder="Username Here"
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
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
                borderColor: "#22222250",
                borderWidth: "1px",
              },
            }}
          />
          {valid ? null : (
            <Typography
              variant="caption"
              color="#ff0000"
              sx={{ width: "100%" }}
            >
              {error?.username}
            </Typography>
          )}
          <TextField
            variant="outlined"
            size="small"
            placeholder="Password"
            type={blind ? "text" : "password"}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
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
                borderColor: "#22222250",
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
          {valid ? null : (
            <Typography
              variant="caption"
              color="#ff0000"
              sx={{ width: "100%" }}
            >
              {error?.password}
            </Typography>
          )}
          <TextField
            variant="outlined"
            size="small"
            type={blind ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) =>
              setUserData({ ...userData, confirmpassword: e.target.value })
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
                borderColor: "#22222250",
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
          {valid ? null : (
            <Typography
              variant="caption"
              color="#ff0000"
              sx={{ width: "100%" }}
            >
              {error?.userData}
              <br />
              {error?.confirmpassword}
            </Typography>
          )}

          <Button
            variant="contained"
            type="submit"
            color="success"
            sx={{
              width: "90%",
              backgroundColor: "#00a32c",
              borderRadius: 5,
              color: "#efebeb",
            }}
            onClick={handleSignup}
          >
            {loading ? (
              <CircularProgress size={20} sx={{ color: "#efebeb" }} />
            ) : (
              <Typography variant="body1" color="#efebeb">
                Sign Up
              </Typography>
            )}
          </Button>
        </Toolbar>
      </Box>
    </PageTransition>
  );
};

export default SignUp;
