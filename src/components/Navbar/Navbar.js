import React, { useState, useEffect } from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function Navbar() {
  const [visible, setVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [pathname, setPathname] = useState("");

  function setDimension() {
    setWidth(window.innerWidth);
  }

  function navOnClick(name) {
    let pathname = name.split("/")[4];
    setPathname(pathname);
    setVisible(!visible);
  }

  useEffect(() => {
    setPathname(window.location.href.split("/")[4]);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", setDimension);
    setVisible(false);

    return () => {
      window.removeEventListener("resize", setDimension);
    };
  }, [width]);

  return (
    <nav className="navbar">
      {width < 1025 ? (
        <MenuIcon
          style={{
            color: "white",
            position: "absolute",
            right: "5%",
            top: "30%",
          }}
          onClick={() => setVisible(true)}
        />
      ) : null}
      <span className="navbar-logo">
        <a href="#/">
          <img
            src="https://images.squarespace-cdn.com/content/v1/5f5b328be343224fe0c945c3/1599812772385-1Z4HG5FJP2VIYLH432Z2/USAFE_Long_noBG.png?format=1500w"
            alt="Usafe logo"
          />
        </a>
      </span>
      <span
        className="navbar-links"
        style={{
          width: visible ? "100vw" : 0,
        }}
      >
        {width < 1025 ? (
          <CloseIcon
            fontSize="large"
            style={{
              color: "white",
              position: "absolute",
              left: "5%",
              top: "5%",
            }}
            onClick={() => setVisible(false)}
          />
        ) : null}
        <a
          href="#/"
          className={`link ${pathname === "" ? " active" : null}`}
          onClick={(e) => navOnClick(e.target.href)}
          style={{
            color: visible
              ? "white"
              : pathname == "" || pathname == "usage"
              ? "black"
              : "white",
          }}
        >
          HJEM
        </a>
        <a
          href="#/usage"
          onClick={(e) => navOnClick(e.target.href)}
          className={`link ${pathname === "usage" ? " active" : null}`}
          style={{
            color: visible
              ? "white"
              : pathname == "" || pathname == "usage"
              ? "black"
              : "white",
          }}
        >
          SPESIFIKASJONER
        </a>
        <a
          href="#/offers"
          onClick={(e) => navOnClick(e.target.href)}
          className={`link ${pathname === "offers" ? " active" : null}`}
          style={{
            color: visible
              ? "white"
              : pathname == "" || pathname == "usage"
              ? "black"
              : "white",
          }}
        >
          TILBUD
        </a>
        <a
          href="/#/contact"
          onClick={(e) => navOnClick(e.target.href)}
          className={`link ${pathname === "contact" ? " active" : null}`}
          style={{
            color: visible
              ? "white"
              : pathname == "" || pathname == "usage"
              ? "black"
              : "white",
          }}
        >
          KONTAKT
        </a>
      </span>
    </nav>
  );
}

export default Navbar;
