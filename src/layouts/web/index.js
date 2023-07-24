"use client";
import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Fab, Toolbar } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ScrollTop from "./scrollTop";

const WebLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      <Toolbar id="back-to-top-anchor" />
      {children}
      <Footer />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

export default WebLayout;
