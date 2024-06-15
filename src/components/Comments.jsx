import { Avatar, Box, Button, Card, Typography } from "@mui/material";

import { BookState } from "../context/BookProvider";
import { useParams } from "react-router-dom";
// import { useState } from "react";

const Comments = () => {
  const { comments } = BookState();
  const { bookId } = useParams();

  const comment = comments.filter((c) => c.bookid == bookId);
  console.log(comment);
  return (
    <Card elevation={0} sx={{ marginBottom: 10, width: "100%" }}>
      {comment?.map((co, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor: "#ffffff",
            width: "90%",
            height: "fit",
            marginLeft: 2,
            marginBottom: 1,
            boxShadow: "0px 0px 5px #22222210",
            borderLeft: "1px solid #00a32ca0",
          }}
        >
          <Avatar
            variant="circular"
            src="https://media.gettyimages.com/id/1533020165/photo/portrait-of-confident-hispanic-woman-standing-in-office.jpg?s=612x612&w=0&k=20&c=90W52NJ364Oc4fSk5T94ODyKU6XlSdVi1U8dh4AYK-s="
            sx={{
              width: 25,
              height: 25,
              position: "absolute",
              left: 0,

              border: "5px solid #ffffff",
            }}
          />
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              sx={{
                color: "#222222",
                marginLeft: 2.5,
                marginTop: 1,
                fontSize: 15,
                fontWeight: "bold",
              }}
            >
              {co.username}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#222222a0",
                marginLeft: 1,
                marginTop: 1.5,
                fontSize: 12,
              }}
            >
              {co.date}
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#222222",
              margin: 0.5,

              marginTop: 1,
              marginLeft: 2,
            }}
          >
            {co.comment}
          </Typography>
          <Box sx={{ width: "100%", marginLeft: 2 }}>
            <Button
              variant="text"
              sx={{ color: "#222222", marginLeft: 1, textTransform: "initial" }}
            >
              Reply
            </Button>
            <Button
              variant="text"
              sx={{ color: "#222222", marginLeft: 1, textTransform: "initial" }}
            >
              Report
            </Button>
          </Box>
        </Box>
      ))}
    </Card>
  );
};

export default Comments;
