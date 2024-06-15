/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Rating,
  // TextareaAutosize,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { FcLike } from "react-icons/fc";
import { CiSettings } from "react-icons/ci";
import {
  MdFavoriteBorder,
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { FaBookOpenReader } from "react-icons/fa6";
import { BookState } from "../context/BookProvider";
import PageTransition from "../components/PageTransition";
import Comments from "../components/Comments";
import { useState } from "react";
import PostComment from "../components/PostComment";

const BookDesc = () => {
  const { books, addBook } = BookState();
  const [extend, setExtend] = useState(false);

  const { bookId } = useParams();
  const book = books?.find((b) => b._id == bookId);

  return (
    <PageTransition>
      {/* <LoadingScreen /> */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${book?.src})`,
          backgroundSize: "contain",
        }}
      >
        <Box
          sx={{
            backgroundImage:
              "linear-gradient(to top, #ffffff,#ffffff,#ffffff,#fffffffb,#ffffffa0,#ffffff00, #ffffff08)",
            position: "absolute",
            bottom: "0%",
            width: "100%",
            height: "100vh",
            overflowY: "scroll",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100vh",
              position: "absolute",
              bottom: "0%",
              backgroundImage:
                "linear-gradient(to bottom, #ffffff30, #ffffff00)",
              overflow: "hidden",
              border: "0px solid black",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "10vh",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                component={Link}
                to="#"
                variant="text"
                sx={{
                  margin: 1,
                  opacity: 0.5,
                  borderRadius: "50%",
                  width: "fit",
                }}
              >
                <MdFavoriteBorder size={35} color="white" opacity={0.5} />
              </Button>
              <Button
                component={Link}
                to="/Profile"
                variant="text"
                sx={{
                  margin: 1,
                  opacity: 0.7,
                  borderRadius: "50%",
                  width: "fit",
                }}
              >
                <CiSettings size={35} color="white" />
              </Button>
            </Box>
            <Box
              sx={{
                width: "100%",
                height: "20vh",
                position: "relative",
                top: "30%",

                paddingLeft: 1,
              }}
            >
              <Typography variant="body1" sx={{ color: "#222222" }}>
                {book?.title}
              </Typography>
              <Box sx={{ display: "flex", marginTop: 1 }}>
                <FcLike />
                <Typography
                  variant="caption"
                  sx={{ color: "#222222", marginLeft: 0.5 }}
                >
                  {book?.likes}
                </Typography>
                <Rating
                  name="read-only"
                  sx={{ marginLeft: 0.5 }}
                  value={book?.values}
                  readOnly
                  size="small"
                />
                <Typography
                  variant="caption"
                  sx={{ color: "#222222", marginLeft: 0.5 }}
                >
                  {book?.genre}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#222222", marginLeft: 1 }}
                >
                  {book?.category}
                </Typography>
              </Box>
              <Typography
                variant="body2"
                sx={{ color: "#222222", margin: 2, marginTop: 1 }}
              >
                {book?.writer}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              position: "relative",
              top: "50%",
              overflowY: "scroll",
              marginBottom: 5,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginBottom: 2,
              }}
            >
              <Button
                variant="contained"
                component={Link}
                to={`/Read`}
                startIcon={<FaBookOpenReader />}
                sx={{
                  margin: 2,
                  backgroundColor: "#ffffff",
                  color: "#222222",
                  textTransform: "initial",
                }}
              >
                Read
              </Button>
              <Button
                variant="contained"
                component={Link}
                // to="/Read"
                to={`/Library`}
                // onClick={libraryHandle(book.id)}
                startIcon={<FaBookOpenReader />}
                sx={{
                  margin: 2,
                  backgroundColor: "#00a32c",
                  color: "#222222",
                  textTransform: "initial",
                }}
              >
                {addBook ? (
                  <Typography variants="caption">Add to library</Typography>
                ) : (
                  <Typography variants="caption">
                    Remove from library
                  </Typography>
                )}
              </Button>
            </Box>
            <Box
              sx={{
                height: extend ? "fit" : "9vh",
                overflow: extend ? "hidden" : "scroll",
                display: "flex",
                flexDirection: "column",
                background: "#ffffff",
              }}
            >
              <Typography
                variant="caption"
                sx={{
                  color: "#222222",
                  margin: 1,
                  width: "90%",
                  marginLeft: 2,
                  marginRight: 2,
                  fontSize: 14,
                }}
              >
                {book?.detail}
              </Typography>
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                background: "#ffffff",
              }}
            >
              {extend ? (
                <Button
                  variant="text"
                  size="small"
                  endIcon={<MdOutlineKeyboardDoubleArrowUp />}
                  sx={{ color: "#00a32c" }}
                  onClick={() => setExtend(false)}
                >
                  collapse
                </Button>
              ) : (
                <Button
                  variant="text"
                  size="small"
                  endIcon={<MdOutlineKeyboardDoubleArrowDown />}
                  sx={{ color: "#00a32c" }}
                  onClick={() => setExtend(true)}
                >
                  expand
                </Button>
              )}
            </Box>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#ffffff",
              }}
            >
              <PostComment bookId={book?._id} />
            </Box>

            <Comments bookId={book?._id} />
          </Box>
        </Box>
      </Box>
    </PageTransition>
  );
};

export default BookDesc;
