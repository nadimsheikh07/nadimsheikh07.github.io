import {
  Box,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: (theme) => theme.palette.grey[900],
          color: (theme) => theme.palette.common.white,
          mt: 6,
        }}
      >
        <Box
          sx={{
            backgroundColor: (theme) => theme.palette.common.black,
            color: (theme) => theme.palette.common.white,
          }}
        >
          <CardContent sx={{ pb: 24 }}>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <FacebookIcon />
              <TwitterIcon />
              <PinterestIcon />
            </Stack>
            <Typography
              component="p"
              variant="subtitle1"
              textAlign="center"
              mt={2}
              fontSize="14px"
            >
              Copyright © {new Date().getFullYear()} All Rights Reserved.
            </Typography>
          </CardContent>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
