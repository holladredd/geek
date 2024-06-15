/* eslint-disable react/prop-types */
import { useState } from "react";
import { Masonry, TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Card, CardMedia, Tab, Typography } from "@mui/material";
import Login from "./users/Login";
import SignUp from "./users/SignUp";

const ClientHome = ({ backgrounds }) => {
  // const go = useNavigate();
  const [tabIndex, setTabIndex] = useState("1");

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
          background: "#efebeb70",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <TabContext value={tabIndex}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TabList
              // colorScheme="green"
              index={tabIndex}
              // indicatorColor="#efebeb"
              // textColor="#efebeb"
              sx={{ "& .MuiTabs-indicator": { color: "#efebeb" } }}
              onChange={(value, newValue) => {
                setTabIndex(newValue);
              }}
            >
              <Tab
                w={"50%"}
                label={
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Log in
                  </Typography>
                }
                value="1"
              />

              <Tab
                w={"50%"}
                label={
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Sign Up
                  </Typography>
                }
                value="2"
              />
              {/* <Typography variant="h5" color="initial">
                  Sign Up
                </Typography>
              </Tab> */}
            </TabList>
          </Box>

          <TabPanel value="1" width="100%">
            <Login />
          </TabPanel>
          <TabPanel value="2">
            <SignUp />
          </TabPanel>
        </TabContext>

        {/* <Box
          sx={{
            margin: 4,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            color=" #222222 "
            fontFamily="short stack"
            sx={{
              textShadow: "2px 2px #000000",
            }}
            fontWeight="bold"
            fontSize={40}
          >
            GEEK INFO CORPORATION
          </Typography>
          <Typography variant="body" color="#222222" fontFamily="anta">
            eLIBRARY and eBOOK Store
          </Typography>
          <Typography variant="caption" color="#222222" fontFamily="roboto">
            Discover a world of knowledge with our eLibrary website. Access
            thousands of books, articles, and resources at your fingertips.
          </Typography>
          <Typography variant="caption" color="#222222" fontFamily="roboto">
            Explore diverse genres, from literature to science, anytime,
            anywhere.
          </Typography>
          <Typography variant="caption" color="#222222" fontFamily="roboto">
            Dive into a virtual realm of learning and enrichment Join our
            community of readers today and embark on a journey of discovery.
          </Typography>
          <Box>
            <Button
              variant="contained"
              fontFamily="short stack"
              onClick={() => go("/Bookshelf")}
              sx={{
                borderRadius: 50,
                margin: 1,
                textTransform: "initial",
                backgroundColor: "#00a32c",
              }}
            >
              <Typography sx={{ color: "#ffffffa0" }}>Get Started</Typography>
            </Button>
          </Box>
        </Box> */}
      </Box>
    </Box>
  );
};

export default ClientHome;
