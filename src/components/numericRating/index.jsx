import React, { useState } from "react";
import { Typography, Button, ButtonGroup } from "@mui/material";

const NumericRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <ButtonGroup size="small" aria-label="rating">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
        <Button
          key={num}
          onClick={() => handleRatingChange(num)}
          variant={rating === num ? "contained" : "outlined"}
          color={rating === num ? "primary" : "inherit"}
          sx={{
            borderColor: "rgba(221, 212, 212, 1)", 
            color: rating === num ? "white" : "rgba(100, 87, 87, 1)",
            "&:hover": {
              borderColor: "rgba(221, 212, 212, 1)",
              color: rating === num ? "white" : "rgba(100, 87, 87, 1)",
            },
          }}
        >
          {num}
        </Button>
      ))}
    </ButtonGroup>
  );
};

export default NumericRating;
