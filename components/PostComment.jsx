/* eslint-disable react/prop-types */
import { Box, Button, TextField } from "@mui/material";
// import axios from "axios";
import { useState } from "react";
// import React from "react";
// import Api from "./../apis/Api";
import Api from "./../apis/Api";
import { BookState } from "../context/BookProvider";

const PostComment = ({ bookId }) => {
  const [newComment, setNewComment] = useState({
    bookid: "",
    username: "",
    comment: "",
    userid: "",
    date: "",
  });
  const { setComments } = BookState();
  const submitHandler = (e) => {
    e.preventDefault();
    const usercomment = { ...newComment };
    usercomment.bookid = bookId;
    usercomment.date = new Date().toLocaleString();
    const call = new Api();
    if (usercomment.comment == "" || usercomment.username == "") {
      alert("Username or Comment empty");
    } else {
      call
        .PostComment(usercomment)
        .then(() => {
          setNewComment({
            bookid: "",
            username: "",
            comment: "",
            userid: "",
            date: "",
          });

          call
            .getComments()
            .then((res) => setComments(res.data))
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: "90%",
          display: "flex",
          flexDirection: "column",
          border: "1px solid #22222260",
          borderRadius: 3,
          padding: 1,
          justifyContent: "center",
        }}
      >
        <TextField
          variant="outlined"
          size="small"
          value={newComment?.username}
          placeholder="username here..."
          onChange={(e) =>
            setNewComment({ ...newComment, username: e.target.value })
          }
          sx={{
            width: "50%",
            marginTop: 1,
            "& .MuiOutlinedInput-root": {
              color: "#222222",
              background: "#ffffff",
              borderRadius: 2,
            },
            "&.Mui-focused": {
              borderColor: "#ffffff40",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ffffff40",
              },
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#ffffff40",
              borderWidth: "1px",
            },
          }}
        />
        <TextField
          placeholder="Your Comments here..."
          variant="outlined"
          multiline
          rows={2}
          maxRows={4}
          autoFocus
          value={newComment?.comment}
          size="large"
          type="textarea"
          onChange={(e) =>
            setNewComment({ ...newComment, comment: e.target.value })
          }
          sx={{
            width: "100%",
            marginTop: 2,
            "& .MuiOutlinedInput-root": {
              color: "#222222",
              background: "#ffffff",
              borderRadius: 2,
              padding: 1,
            },
            "& .Mui-focused fieldset": {
              borderColor: "#222222",
              borderWidth: "1px",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#22222240",
            },
          }}
        />
        <Button
          variant="text"
          size="small"
          sx={{ color: "#00a32c", textTransform: "initial" }}
          onClick={submitHandler}
        >
          Comment
        </Button>
      </Box>
    </Box>
  );
};

export default PostComment;
