import React, { useState } from "react";
import "./Footer.css";
import usafeLogo from "../../pages/HomePage/Images/USAFE_Logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  const [hover, setHover] = useState(false);
  return (
    <div className="footer-usafe">
      <img src={usafeLogo} alt="U SAFE logo" />
      <div className="footer-usafe-top">
        <div className="usafe-top-parts">
          <h2>Lenker</h2>
          <a href="/usage">Bruksområder</a>
          <a href="/offers">Få et tilbud</a>
          <a href="/contact">Kontakt oss</a>
        </div>
        <div className="usafe-top-parts">
          <h2>Kontakt oss</h2>
          <p>
            <LocationOnIcon fontSize="large" style={{ marginRight: "10px" }} />
            Holterkollveien 7B, 1448 Drøbak
          </p>
          <p>
            <LocalPhoneIcon fontSize="large" style={{ marginRight: "10px" }} />
            22 22 00 00
          </p>
          <p>
            <EmailIcon fontSize="large" style={{ marginRight: "10px" }} />
            info@usafe.no
          </p>
        </div>
        <div className="usafe-top-parts">
          <h2>Om oss</h2>
          <p>
            Vi jobber for å gjøre livet på sjøen tryggere for alle som ferdes på
            det åpne hav.
          </p>
          <a
            href="https://www.linkedin.com/company/usafe-norge/"
            style={{ borderBottom: "none" }}
          >
            <LinkedInIcon
              fontSize="large"
              style={{
                marginRight: "10px",
                color: hover ? "#0A66C2" : "white",
              }}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
