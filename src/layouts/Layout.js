import { Fragment, useEffect } from "react";
import {
  activeAnimation,
  jarallaxAnimation,
  stickyNav,
  shadowNavbar
} from "../utils";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children, pageClassName }) => {
  useEffect(() => {
    activeAnimation();
    window.addEventListener("scroll", activeAnimation); // function responsible for displaying the elements when scroll
      window.addEventListener("scroll", shadowNavbar);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Splitting = require("splitting");
    }
    Splitting();
    jarallaxAnimation();
    document.querySelector("body").className = pageClassName
      ? pageClassName
      : "";
  });

  return (
    <Fragment>
      <div className="container-page">
        <Header />
        {/* Wrapper */}
        <div className="wrapper">{children}</div>
        {/* Footer */}
        <Footer />
      </div>
      {/* cursor */}
      {/* <div className="cursor" /> */}
    </Fragment>
  );
};
export default Layout;
