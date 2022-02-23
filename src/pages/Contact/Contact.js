import React from "react";
import "./Contact.css";
import InnovaSea from "../HomePage/Images/InnovaSea.png";
import Form from "../../components/Form/Form";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <div className="contactContainer">
      <span className="contact text">
        <h1>Kontakt Oss</h1>
        <a href="mailto:info@usafe.no">
          {" "}
          <EmailIcon
            fontSize="large"
            style={{ marginRight: "10px", color: "white" }}
          />
          info@usafe.no
        </a>
        <a href="tel:22 22 00 00">
          <LocalPhoneIcon
            fontSize="large"
            style={{ marginRight: "10px", color: "white" }}
          />
          22 22 00 00
        </a>
        <a
          href="https://www.google.no/maps/place/Holterkollveien+7b,+1440+Dr%C3%B8bak/@59.6707207,10.6603935,17z/data=!3m1!4b1!4m5!3m4!1s0x4641446c31a73827:0x196ef7eee700e6a9!8m2!3d59.670718!4d10.6625822"
          target="_blank"
        >
          <LocationOnIcon
            fontSize="large"
            style={{ marginRight: "10px", color: "white" }}
          />
          Holterkollveien 7B, 1448 Drøbak
        </a>
        <img src={InnovaSea} alt="InnovaSea logo" />
        <p style={{ textAlign: "center", marginTop: "30px" }}>InnovaSea AS</p>
      </span>
      <span className="contact form">
        <Form message={true} />
      </span>
    </div>
  );
}

export default Contact;
