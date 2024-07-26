/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  // Rating,
  // TextareaAutosize,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
// import { FcLike } from "react-icons/fc";
import {
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
          background: " #ffffff",
          position: "absolute",
          bottom: "0%",
          width: "100%",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <Card
          elevation={0}
          sx={{
            width: "100%",
            height: "100vh",
            // overflowX: "hidden",
          }}
        >
          <CardMedia
            image={book?.src}
            sx={{
              border: 0,
              position: "absolute",
              left: -80,
              top: -50,
              filter: "blur(19px)",
              width: 750,
              height: "100vh",
              overflow: "hidden",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contained",
            }}
          />

          <Card
            elevation={0}
            sx={{
              width: "100%",
              height: "30vh",
              position: "absolute",
              background: "#00000080",
              mixBlendMode: "overlay",
              justifyContent: "evenly",
              top: 0,
              padding: 2,
              display: "flex",
            }}
          >
            <CardMedia
              image={book?.src}
              sx={{
                border: 0,
                width: 90,
                height: "20vh",
              }}
            />
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "65%",
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "#ffffff", fontSize: 18 }}
              >
                {book?.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: "#ffffff", marginTop: 1 }}
              >
                {book?.category}
              </Typography>
              <Typography
                variant="caption"
                sx={{ color: "#ffffff", marginTop: 1 }}
              >
                {book?.writer}
              </Typography>
            </CardContent>
          </Card>
          <Box
            sx={{
              display: "flex",
              width: "90%",
              height: "10vh",
              margin: 2,
              backgroundColor: "#d7f8c9",
              position: "absolute",
              justifyContent: "space-between",
              top: 150,
              left: 0,
              borderRadius: 3,
              alignItems: "center",
              boxShadow: "1px 1px 5px #00000050",
              color: "#ffffff",
              zIndex: 51,
            }}
          >
            {/* <FcLike sx={{ margin: 2 }} /> */}
            <Typography
              variant="body1"
              sx={{ color: "#222222", margin: 2, fontSize: "18px" }}
            >
              {book?.writer}
            </Typography>

            <Typography
              variant="body1"
              sx={{ color: "#222222", margin: 2, fontSize: "18px" }}
            >
              {book?.genre}
            </Typography>
            {/* <Rating
              name="read-only"
              sx={{ margin: 1, color: "#ffffff" }}
              value={book?.values}
              readOnly
              size="small"
            /> */}
          </Box>
          <Box
            sx={{
              background: " #ffffff",
              position: "absolute",
              bottom: "0%",
              width: "100%",
              height: "71vh",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100vh",
                position: "absolute",
                bottom: "0%",
                backgroundColor: " #ffffff30",
                overflow: "hidden",
                border: "0px solid black",
              }}
            ></Box>
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
        </Card>
      </Box>
    </PageTransition>
  );
};

export default BookDesc;
