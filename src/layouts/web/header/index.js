import React from "react";
import MobileDrawer from "./drawer";
import { useRouter } from "next/navigation";
import {
  AppBar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { navItems } from "./navConfig";

const drawerWidth = 240;

const logo = "/assets/images/logo.png";

const Header = (props) => {
  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: "left" }}>
      <Box sx={{ my: 2 }}>
        <Typography
          component="h2"
          variant="subtitle1"
          textAlign="center"
          mt={2}
          fontSize="14px"
        >
          Nadim Sheikh
        </Typography>
      </Box>
      <Divider />
      <List>
        {navItems &&
          navItems.length &&
          navItems.map((item, index) => {
            return (
              <React.Fragment key={`parent-${index}`}>
                <ListItem disablePadding onClick={handleDrawerToggle}>
                  <ListItemButton
                    LinkComponent={Link}
                    href={item?.link}
                    sx={{ textAlign: "left" }}
                  >
                    <ListItemText primary={item?.name} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </React.Fragment>
            );
          })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <AppBar component="nav" position="fixed">
        <Toolbar
          sx={{
            justifyContent: {
              lg: "space-between",
              md: "space-between",
              sm: "space-between",
              xs: "space-between",
            },
          }}
        >
          <Box component={Link} href="/">
            
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems &&
              navItems.length &&
              navItems.map((item) => (
                <>
                  <Button
                    component={Link}
                    href={item.link}
                    key={item?.link}
                    sx={{ color: (theme) => theme.palette.common.white }}
                    aria-owns="mouse-over-popover"
                    aria-haspopup="true"
                  >
                    {item?.name}
                  </Button>
                </>
              ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ ml: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MobileDrawer
        drawer={drawer}
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
        drawerWidth={drawerWidth}
        container={container}
      />
    </>
  );
};

export default Header;
