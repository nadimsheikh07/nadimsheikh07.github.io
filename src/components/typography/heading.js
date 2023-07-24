import { Box, Typography } from "@mui/material";
import React from "react";
import { MainHeading } from "./styledTypography";

const Heading = ({
  heading,
  component,
  variant,
  color,
  sx,
  isPositionLeft,
}) => {
  return (
    <React.Fragment>
      <Box
        sx={{
          alignItems: "center",
          display: "grid",
          justifyContent: isPositionLeft ? "left" : "center",
        }}
      >
        <MainHeading
          sx={{
            ...sx,
          }}
          component={component}
          variant={variant}
          color={color}
          isPositionLeft={isPositionLeft}
        >
          {heading}
        </MainHeading>
      </Box>
    </React.Fragment>
  );
};

export default Heading;
