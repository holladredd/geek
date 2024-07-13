/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { Masonry } from "@mui/lab";
import { Box, Card, CardMedia, Typography } from "@mui/material";
import Login from "./users/Login";
import { IoMdClose } from "react-icons/io";
import SignUp from "./users/SignUp";
import { Button } from "@mui/material";

const ClientHome = ({ backgrounds }) => {
  // const go = useNavigate();
  const [login, setLogin] = useState(true);
  // setLogin(true);
  // const { backgrounds } = BookState();
  return (
    <Box
      sx={{
        margin: 0,
        width: "100%",
        Height: "100vh",
        position: "fixed",
        backgroundColor: "black",
        borderRadius: 0,
      }}
    >
      <Masonry
        columns={{ xs: 3, sm: 3, md: 5, lg: 6 }}
        spacing={0}
        sx={{ width: "100%", Height: "fit" }}
      >
        {backgrounds?.map((graphic, index) => (
          <Card
            key={index}
            elevation={0}
            sx={{
              margin: 0,
              padding: 0,
              borderRadius: 0,
              postion: "fixed",
              display: "block",
            }}
          >
            <CardMedia
              component="img"
              // alt={graphic?.category}
              sx={{
                borderRadius: 0,
                display: "block",

                Width: "100%",
                height: "fit",
              }}
              image={graphic?.src}
            />
          </Card>
        ))}
      </Masonry>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflow: "hidden",
          position: "fixed",
          borderTop: "2px solid #222222a0",
          borderBottom: "2px solid #222222a0",
          top: "0",
          background: "#efebebe0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between ",
            width: "100%",
          }}
        >
          <Button
            variant="text"
            type="button"
            color="success"
            // sx={{ fontSize: 20 }}
            onClick={() => setLogin(true)}
          >
            <IoMdClose fontSize={30} />
          </Button>
        </Box>
        {/* <Login /> */}
        {login ? <Login /> : <SignUp />}
        <Box
          sx={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {login ? (
            <Button
              variant="text"
              type="button"
              color="success"
              sx={{
                marginLeft: "0",
                textTransform: "initial",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => setLogin(false)}
            >
              <Typography variant="body2" color="success">
                Don't have an account?
              </Typography>
            </Button>
          ) : (
            <Button
              variant="text"
              type="button"
              color="success"
              sx={{
                marginLeft: "0",
                textTransform: "initial",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
              onClick={() => setLogin(true)}
            >
              <Typography variant="body2" color="success">
                Already a user?
              </Typography>
            </Button>
          )}
          {/* <IoMdClose fontSize={30} /> */}
        </Box>
      </Box>
    </Box>
  );
};

export default ClientHome;
