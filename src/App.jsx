// import { Box, Text } from "@chakra-ui/react";
import "./App.css";

import { BrowserRouter as Router } from "react-router-dom/dist";
import Routers from "./routes/Routers";
import BookProvider from "./context/BookProvider";

function App() {
  return (
    <BookProvider>
      <Router>
        <Routers />
      </Router>
    </BookProvider>
  );
}

export default App;
