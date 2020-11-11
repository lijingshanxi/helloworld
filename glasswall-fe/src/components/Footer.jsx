import React from "react";
import { makeStyles } from "@material-ui/styles";
import { Link, useMediaQuery } from "@material-ui/core";

const Footer = () => {
  const bigScreen = useMediaQuery("(min-width:630px)");

  const useStyles = makeStyles(() => ({
    footer: {
      marginTop: "auto",
      display: "flex",
      flexWrap: "wrap",
      ...(bigScreen
        ? {}
        : { justifyContent: "center", margin: "auto", width: "320px" }),
    },
    footerRight: {
      flex: "1",
      display: "flex",
      justifyContent: bigScreen ? "flex-end" : "center !important",
    },
    footerContents: {
      listStyle: "none",
      padding: "0 20px",
      display: "flex",
      "& li": {
        marginRight: "20px",
      },
    },
    footerSocial: {
      listStyle: "none",
      padding: "0 20px",
      display: "flex",
      "& li": {
        marginLeft: "20px",
      },
    },
    footerLeft: {
      flex: "1",
      display: "flex",
      justifyContent: "flex-start",
    },
    footerCenter: {
      flex: "1",
      textAlign: "center",
    },
    footerBottomSmallScreen: {
      display: "flex",
      flexWrap: "wrap",
      width: "60%",
    },
    firstListItemNoLeftMarginIfSmallScreen: {
      marginLeft: "0px !important",
    },
  }));

  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerLeft}>
        <ul className={classes.footerContents}>
          <li>
            <Link
              href="https://www.myadvantest.com/static/contact.html"
              target="_blank"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="https://www.myadvantest.com/static/terms.html"
              target="_blank"
            >
              Terms of Use
            </Link>
          </li>
          <li>
            <Link
              href="https://www.myadvantest.com/static/privacy.html"
              target="_blank"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      {bigScreen ? (
        <>
          <p className={classes.footerCenter}>
            &copy; Copyright 2020 ADVANTEST CORPORATION
          </p>
          <div className={classes.footerRight}>
            <ul className={classes.footerSocial}>
              <li>
                <Link
                  href="https://www.facebook.com/advantestamericainc/"
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/Advantest_ATE" target="_blank">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <div className={classes.footerBottomSmallScreen}>
          <div className={classes.footerRight}>
            <ul className={classes.footerSocial}>
              <li className={classes.firstListItemNoLeftMarginIfSmallScreen}>
                <Link
                  href="https://www.facebook.com/advantestamericainc/"
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/Advantest_ATE" target="_blank">
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
          <p className={classes.footerCenter}>
            &copy; Copyright 2020 ADVANTEST CORPORATION
          </p>
          <div />
        </div>
      )}
    </footer>
  );
};

export default Footer;
