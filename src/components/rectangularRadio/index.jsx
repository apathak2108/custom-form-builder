import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const RectangularRadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState("female");

  const handleSelect = (value) => {
    setSelectedValue(value);
  };

  const options = [
    { value: "option 1", label: "option 1" },
    { value: "option 2", label: "option 2" },
    { value: "option 3", label: "option 3" },
  ];

  return (
    <Box>
      {options.map((option) => (
        <Button
          key={option.value}
          onClick={() => handleSelect(option.value)}
          variant={selectedValue === option.value ? "contained" : "outlined"}
          sx={{
            height: "40px",
            margin: "6px 12px 0 0",
            backgroundColor:
              selectedValue === option.value ? "primary.main" : "white",
            color:
              selectedValue === option.value ? "white" : "rgba(100, 87, 87, 1)",
            borderColor: "rgba(221, 212, 212, 1)",
            "&:hover": {
              backgroundColor:
                selectedValue === option.value
                  ? "primary.dark"
                  : "rgba(221, 212, 212, 0.5)",
            },
          }}
        >
          <Typography>{option.label}</Typography>
        </Button>
      ))}
    </Box>
  );
};

export default RectangularRadioGroup;
