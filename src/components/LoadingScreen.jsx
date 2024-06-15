import { Box, CircularProgress } from "@mui/material";
// import { motion } from "framer-motion";
import { BookState } from "../context/BookProvider";
import PageTransition from "./PageTransition";

const LoadingScreen = () => {
  const { loading } = BookState();

  return (
    <PageTransition>
      <Box
        // component={motion.div}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        sx={{
          width: "100%",
          position: "fixed",
          top: "0%",
          bottom: "0%",
          left: "0%",
          right: "0%",
          backgroundColor: "#efebeba0",
          zIndex: 20,
          // display: "flex",
          display: loading ? "flex" : "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress size={40} sx={{ color: "#00a32c" }} />
      </Box>
    </PageTransition>
  );
};

export default LoadingScreen;
