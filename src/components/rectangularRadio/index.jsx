import React from "react";
import { Box, Typography, Button } from "@mui/material";

const RectangularRadioGroup = ({ options, selectedValue, onRatingChange }) => {
  const handleSelect = (value) => {
    onRatingChange(value);
  };

  return (
    <Box>
      {options.map((option, index) => (
        <Button
          key={index}
          onClick={() => handleSelect(option)}
          variant={selectedValue === option ? "contained" : "outlined"}
          sx={{
            height: "40px",
            margin: "6px 12px 0 0",
            backgroundColor:
              selectedValue === option ? "primary.main" : "white",
            color: selectedValue === option ? "white" : "rgba(100, 87, 87, 1)",
            borderColor: "rgba(221, 212, 212, 1)",
            "&:hover": {
              backgroundColor:
                selectedValue === option
                  ? "primary.dark"
                  : "rgba(221, 212, 212, 0.5)",
            },
          }}
        >
          <Typography>{option}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default RectangularRadioGroup;
