import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const NumericRating = ({ maxRating = 10 }) => {
  const [rating, setRating] = useState(null);

  const handleRatingClick = (value) => {
    setRating(value);
  };

  return (
    <Box>
      <Grid container>
        {Array.from({ length: maxRating }, (_, index) => (
          <Grid item xs={1} key={index}>
            <Button
              variant={rating === index + 1 ? "contained" : "outlined"}
              color="primary"
              onClick={() => handleRatingClick(index + 1)}
            >
              {index + 1}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NumericRating;
