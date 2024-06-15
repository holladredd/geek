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
  const [error, setError] = useState();
  const [valid, setValid] = useState();

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    const call = new Api();
    let isvalid = true;
    // let vaidationMessage={},
    let validationErrors = {};
    if (formData.username == "" && formData.password == "") {
      isvalid = false;
      validationErrors.formData = "fields can not be empty";
    }
    if (formData.username == null || formData.username.length == "") {
      isvalid = false;
      validationErrors.username = "username not recognised";
    } else if (!/\S+@\S+\.\S+/.test(formData?.username.length)) {
      isvalid = false;
      validationErrors.username = "username not valid";
    }
    if (formData.password === "" || formData.password === null) {
      isvalid = false;
      validationErrors.password = "password Required";
    } else if (formData.password.length < 6) {
      isvalid = false;
      validationErrors.password = "password length atleast 6 char";
    }
    call
      .getUsers(formData)
      .then((res) => {
        res.data.map((users) => {
          if (
            formData.username === users.username &&
            formData.password === users.password
          ) {
            if (formData.password !== null) {
              navigate("/Bookshelf");
              // setLoading(!loading);
            } else {
              isvalid = false;
              validationErrors.password = "wrong password";
            }
          }
        });
        setLoading(false);
        setError(validationErrors);
        setValid(isvalid);
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
            placeholder="Email or Password"
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
                borderColor: "#22222250",
                borderWidth: "1px",
              },
            }}
          />
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
          {valid ? (
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
          )}
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
