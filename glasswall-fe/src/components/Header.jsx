import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  makeStyles,
  Box,
  Divider,
  useMediaQuery,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles(() => ({
  toolbar: {
    display: "flex",
  },
  servicesButton: {
    height: "50px",
    color: "#607D8B",
  },
  userProfileButton: {
    textTransform: "lowercase",
    fontSize: "smaller",
  },
  logoutButton: {
    fontSize: "smaller",
  },
  appBar: {
    boxShadow: "0px 1px 2px grey",
  },
  logoDivider: {
    margin: "0px 10px",
  },
  emailBox: {
    cursor: "pointer",
    margin: "0px 19px 2px 19px",
    maxWidth: "400px",
  },
  emailLink: {
    textDecoration: "none !important",
    color: "inherit",
    overflowWrap: "break-word",
    // a fragile way of clamping text to three lines:
    // https://css-tricks.com/line-clampin/
    // OK for now, we don't have long descriptions for the services
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical",
  },
}));

const Header = () => {
  const classes = useStyles();
  const bigScreen = useMediaQuery("(min-width:1000px)");
  const verySmallScreen = useMediaQuery("(max-width:348px)");

  return (
    <AppBar position="sticky" color="inherit" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          width="100%"
          flexWrap="wrap"
        >
          <Box
            width="340px"
            display="flex"
            justifyContent="flex-start"
            alignItems="center"
            flexWrap="wrap"
          >
            <Button component={Link} to="/" color="inherit">
              <img src="/ACloud_Logo.png" />
            </Button>
            {!verySmallScreen && (
              <Box
                height="30px"
                display="flex"
                alignItems="center"
                className={classes.logoDivider}
              >
                <Divider orientation="vertical" flexItem />
              </Box>
            )}
            <Button className={classes.servicesButton} component={Link} to="/">
              Services
            </Button>
          </Box>
          <Box
            width={bigScreen ? "400px" : "170px"}
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
          >
            <>
              <Button className={classes.logoutButton} href="/logout">
                Logout
              </Button>
              <Box height="30px" display="flex" alignItems="center">
                <Divider orientation="vertical" flexItem />
              </Box>
              {bigScreen && (
                <Box className={classes.emailBox}>
                  <Link
                    to="/user"
                    color="inherit"
                    className={classes.emailLink}
                  >
                    john.doe@advantest.com
                  </Link>
                </Box>
              )}
              <Box height="30px" display="flex" alignItems="center">
                <Divider orientation="vertical" flexItem />
              </Box>
              <IconButton component={Link} to="/" color="inherit">
                <PersonIcon />
              </IconButton>
            </>
            <IconButton component={Link} to="/" color="inherit">
              <SettingsIcon />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
