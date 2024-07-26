import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Flex,
  Typography,
} from "@mui/material";
import { FaComment } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const newreleases = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Marry me",
    likes: 1808,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "The Joker",
    likes: 1703,
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
    title: "Hotel Paradise",
    likes: 998,
  },
];

const NewRelease = () => {
  return (
    <Box>
      {newreleases.map((newrelease) => (
        <Card
          key={newrelease}
          variant="outlined"
          sx={{
            height: 100,
            margin: 2,
            display: "flex",
            flexDirection: "row",
            overflow: "hidden",
          }}
        >
          <CardMedia
            component="img"
            sx={{ borderRadius: 2, maxWidth: "20%" }}
            image={newrelease.imageUrl}
            alt="Caffe Latte"
          />
          <CardContent>
            <Typography variant="subtitle1">{newrelease.title}</Typography>
            <Flex>
              <Button sx={{ display: "flex", mt: 5, p: 1, bgcolor: "white" }}>
                <FcLike />
                <Typography variant="caption" sx={{ m: 2 }}>
                  {newrelease.likes}
                </Typography>
                <Typography variant="caption">likes</Typography>
              </Button>
              <Button
                sx={{ display: "flex", mt: 5, ml: 2, p: 1, bgcolor: "white" }}
              >
                <FaComment />
                <Typography variant="caption" sx={{ m: 2 }}>
                  Reviews
                </Typography>
              </Button>
            </Flex>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default NewRelease;
