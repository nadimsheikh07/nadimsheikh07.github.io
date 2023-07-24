import { styled, Typography } from "@mui/material";

export const MainHeading = styled(Typography)(
  ({ theme, isPositionLeft = false }) => ({
    // fontFamily: "Poppins-Semi-Bold",
    textAlign: isPositionLeft ? "left" : "center",
    position: "relative",
    paddingBottom: "10px",
    width: "max-content",
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      height: "3px",
      bottom: 0,
      left: 0,
      right: 0,
      background: theme.palette.primary.main,
      display: "block",
      marginTop: 0,
      width: "100px",
      marginLeft: "auto",
      marginRight: "auto",
    },
  })
);
