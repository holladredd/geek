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
      </Box>
    </Box>
  );
};

export default ClientHome;
