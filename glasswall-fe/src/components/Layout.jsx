import React from "react";
import Header from "./Header";
import { isIE11 } from "../App";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: theme.palette.background.default,
  },
  main: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    ...(isIE11 ? { minHeight: "calc(100vh - 150px)" } : {}),
  },
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <main className={classes.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
