import React from "react";
import "./Offers.css";
import Form from "../../components/Form/Form";
import doublebouy from "../HomePage/Images/Buoys.png";

function Offers() {
  return (
    <div className="offersContainer">
      <span className="offers text">
        <h1>Ønsker du et tilbud på U SAFE</h1>
        <h2>Kontakt oss ved hjelp av skjemaet</h2>
        <img src={doublebouy} alt="Buoys" />
      </span>
      <span className="offers form">
        <Form message={false} />
      </span>
    </div>
  );
}

export default Offers;
