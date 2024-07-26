import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom/dist";

const books = [
  {
    id: 1,
    name: "my babe is alive",
    category: "love",
    feature: 1,
  },
  {
    id: 2,
    name: "my beautiful girl",
    category: "love",
    feature: 0,
  },
  {
    id: 3,
    name: "the villager",
    category: "Horror",
    feature: 1,
  },
  {
    id: 4,
    name: "Alive",
    category: "Sci-fi",
    feature: 1,
  },
];
// const handleFeature ={
//     setFeature(feature=!feature)
// }

const Home = () => {
  const [feature, setFeature] = useState("");
  const navi = useNavigate();
  return (
    <Box>
      <Typography variant="h2"> Admin Home Page</Typography>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell align="right">Featured?</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((book) => (
              <TableRow key={book.id}>
                <TableCell>{book.id}</TableCell>
                <TableCell>{book.name}</TableCell>
                <TableCell>{book.category}</TableCell>
                <TableCell align="right">
                  <Button onClick={() => setFeature(!feature)}>
                    {book.feature}
                  </Button>
                </TableCell>
                <TableCell>
                  <Stack direction="row">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => navi("/olamideadmin/Edit")}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      // onClick={() => history.push("/olamideadmin/Login")}
                    >
                      Delete
                    </Button>
                  </Stack>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Home;
