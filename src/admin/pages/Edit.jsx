import { Box, FormControl, FormLabel, Input, Typography } from "@mui/material";

import { useState } from "react";

const Edit = () => {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  const isError = input === "";
  return (
    <Box p={4}>
      <Typography variant="h2">Edit Page</Typography>

      <FormControl error={isError} fullWidth>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={input} onChange={handleInputChange} />
        <FormLabel>Category</FormLabel>
        <Input type="text" value={input} onChange={handleInputChange} />
        <FormLabel>Name</FormLabel>
        <Input type="text" value={input} onChange={handleInputChange} />
      </FormControl>
    </Box>
  );
};

export default Edit;
