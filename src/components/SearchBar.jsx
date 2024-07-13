import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

function SearchBar({ onSubmit, errorMsg, color }) {
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <Box sx={{ my: 4 }}>
      <Typography
        variant="h6"
        color={color}
        sx={{ display: "flex", justifyContent: "center", mb: 3 }}
      >
        {errorMsg}
      </Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <TextField
            variant="outlined"
            label="Search"
            onChange={handleChange}
            value={term}
            sx={{ mr: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Search
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default SearchBar;
