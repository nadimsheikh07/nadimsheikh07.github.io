import React from "react";
import {
  Box,
  Drawer,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@/theme/overrides/Typography";

const MobileDrawer = ({
  handleDrawerToggle,
  mobileOpen,
  drawer,
  drawerWidth,
  container,
}) => {
  return (
    <Box component="div" sx={{ display: { md: "none" } }}>
      <Drawer
        container={container}
        anchor="right"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default MobileDrawer;
