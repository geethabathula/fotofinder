import React from "react";
import { Grid, Box } from "@mui/material";

function ImagesDisplay({ images }) {
  return (
    <Box sx={{ my: 4 }}>
      <Grid container spacing={2}>
        {images.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <img
              src={image.urls.regular}
              alt={image.color}
              style={{ width: "100%", height: "auto" }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ImagesDisplay;
