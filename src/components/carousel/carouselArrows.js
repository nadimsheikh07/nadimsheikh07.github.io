import PropTypes from "prop-types";
// @mui
import { useTheme, styled, alpha } from "@mui/material/styles";
import { Box, Stack } from "@mui/material";
//
import { IconButtonAnimate } from "../animate";

// ----------------------------------------------------------------------

const BUTTON_SIZE = 60;

const ArrowStyle = styled(IconButtonAnimate, {
  shouldForwardProp: (prop) => prop !== "filled",
})(({ filled, theme }) => ({
  width: BUTTON_SIZE,
  height: BUTTON_SIZE,
  cursor: "pointer",
  borderRadius: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
  backgroud: theme.palette.common.black,
  "&:hover": {
    color: theme.palette.text.primary,
  },
  [theme.breakpoints.down("md")]: {
    width: 40,
    height: 40,
  },
  ...(filled && {
    opacity: 1,
    borderRadius: "4px",
    color: theme.palette.common.black,
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.common.black}`,
    "&:hover": {
      opacity: 1,
      color: theme.palette.common.black,
      backgroundColor: alpha(theme.palette.common.white, 0.7),
      border: `1px solid ${theme.palette.common.black}`,
    },
  }),
}));

// ----------------------------------------------------------------------

CarouselArrows.propTypes = {
  children: PropTypes.node,
  customIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  filled: PropTypes.bool,
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

export default function CarouselArrows({
  filled = false,
  customIcon, // Set icon right
  onNext,
  onPrevious,
  children,
  PreviousArrowIcon,
  NextArrowIcon,
  ...other
}) {
  const theme = useTheme();

  const isRTL = theme.direction === "rtl";

  const style = {
    position: "absolute",
    mt: -2.5,
    top: "50%",
    zIndex: 9,
  };

  if (children) {
    return (
      <Box {...other}>
        <Box className="arrow left" sx={{ ...style, left: 0 }}>
          <ArrowStyle filled={filled} onClick={onPrevious}>
            {leftIcon(PreviousArrowIcon, customIcon, isRTL)}
          </ArrowStyle>
        </Box>

        {children}

        <Box className="arrow right" sx={{ ...style, right: 0 }}>
          <ArrowStyle filled={filled} onClick={onNext}>
            {rightIcon(NextArrowIcon, customIcon, isRTL)}
          </ArrowStyle>
        </Box>
      </Box>
    );
  }

  return (
    <Stack direction="row" spacing={1} {...other}>
      <ArrowStyle className="arrow left" filled={filled} onClick={onPrevious}>
        {leftIcon(PreviousArrowIcon, customIcon, isRTL)}
      </ArrowStyle>
      <ArrowStyle
        sx={{ transform: " scaleX(-1)" }}
        className="arrow right"
        filled={filled}
        onClick={onNext}
      >
        {rightIcon(NextArrowIcon, customIcon, isRTL)}
      </ArrowStyle>
    </Stack>
  );
}

// ----------------------------------------------------------------------

const leftIcon = (PreviousArrowIcon, customIcon, isRTL) => (
  <PreviousArrowIcon
    sx={{
      width: { lg: 30, md: 30, sm: 20, xs: 20 },
      height: { lg: 30, md: 30, sm: 20, xs: 20 },
      transform: " scaleX(1)",
      ...(isRTL && { transform: " scaleX(1)" }),
    }}
  />
);

const rightIcon = (NextArrowIcon, customIcon, isRTL) => (
  <NextArrowIcon
    sx={{
      width: { lg: 30, md: 30, sm: 20, xs: 20 },
      height: { lg: 30, md: 30, sm: 20, xs: 20 },
      ...(isRTL && { transform: " scaleX(-1)" }),
    }}
  />
);
